/** Recorre el HTML generado en dist/ y comprueba enlaces internos (archivo o ancla existente) y externos. */
import { readFile, readdir, access } from 'node:fs/promises'
import { join, relative } from 'node:path'

const dist = new URL('../dist/', import.meta.url).pathname
const pages = []
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) await walk(p)
    else if (e.name.endsWith('.html')) pages.push(p)
  }
}
await walk(dist)

// El dominio propio sale del robots.txt generado (VITE_SITE_URL): sus URLs absolutas son internas.
const siteUrl = (await readFile(join(dist, 'robots.txt'), 'utf8')).match(/Sitemap: (https?:\/\/[^/\s]+)/)[1]

const exists = (p) => access(p).then(() => true, () => false)
const resolveFile = async (path) =>
  (await exists(join(dist, path))) || (await exists(join(dist, `${path}.html`))) || (path === '/' && (await exists(join(dist, 'index.html'))))

const external = new Set()
let problems = 0
for (const file of pages) {
  const html = await readFile(file, 'utf8')
  if (/Pendiente ·/.test(html)) { console.log(`✗ ${relative(dist, file)} contiene un pendiente`); problems++ }
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))
  for (const [, attr, url] of html.matchAll(/\s(href|src|srcSet|srcset)="([^"]+)"/g)) {
    for (const u of attr.toLowerCase() === 'srcset' ? url.split(',').map((s) => s.trim().split(' ')[0]) : [url]) {
      if (/^https?:/.test(u)) { if (!u.startsWith(siteUrl)) external.add(u); continue }
      if (/^(mailto|tel):/.test(u)) continue
      const [path, hash] = u.split('#')
      if (path === '' && hash) { if (!ids.has(hash)) { console.log(`✗ ${relative(dist, file)}: ancla #${hash} inexistente`); problems++ } continue }
      if (!(await resolveFile(path))) { console.log(`✗ ${relative(dist, file)}: ${u} no existe`); problems++; continue }
      if (hash) {
        const target = await readFile(join(dist, path === '/' ? 'index.html' : `${path}.html`), 'utf8').catch(() => '')
        if (!target.includes(`id="${hash}"`)) { console.log(`✗ ${relative(dist, file)}: ${u} ancla inexistente`); problems++ }
      }
    }
  }
}
console.log(`${pages.length} páginas revisadas, ${problems} problemas internos`)
for (const u of external) {
  const res = await fetch(u, { method: 'GET', redirect: 'manual' }).catch((e) => ({ status: e.message }))
  console.log(`  externo ${res.status} ${u}`)
}
process.exit(problems ? 1 : 0)
