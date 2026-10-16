/**
 * Genera HTML estático para cada ruta pública y cada idioma, más 404.html,
 * sitemap.xml y robots.txt. Se ejecuta después de los builds de cliente y SSR.
 */
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const { render, getMeta, headTags, publicPaths, LANGS, localePath, site } = await import(
  join(ssrDir, 'entry-server.js')
)

const template = await readFile(join(dist, 'index.html'), 'utf8')

function page(url, { notFound = false } = {}) {
  const meta = getMeta(url)
  const html = render(url)
  return template
    .replace('<html lang="ca">', `<html lang="${meta.lang}">`)
    .replace('<!--app-head-->', `${headTags(meta)}`)
    .replace(
      '<div id="root"><!--app-html--></div>',
      `<div id="root"${notFound ? ' data-page="404"' : ''}>${html}</div>`,
    )
}

async function write(file, content) {
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, content)
}

const urls = []
for (const lang of LANGS) {
  for (const path of publicPaths) {
    const url = localePath(lang, path)
    // "/" → index.html; "/es" → es.html; "/es/privacy" → es/privacy.html.
    // Cloudflare (html_handling: auto-trailing-slash) y vite preview los sirven sin extensión ni barra final.
    const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`
    await write(join(dist, file), page(url))
    urls.push(url)
  }
}

await write(join(dist, '404.html'), page('/404', { notFound: true }))

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${publicPaths
  .flatMap((path) =>
    LANGS.map(
      (lang) => `  <url>
    <loc>${site.url}${localePath(lang, path)}</loc>
    <lastmod>${today}</lastmod>
${LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${site.url}${localePath(l, path)}" />`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${site.url}${localePath('ca', path)}" />
  </url>`,
    ),
  )
  .join('\n')}
</urlset>
`
await write(join(dist, 'sitemap.xml'), sitemap)
await write(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`)

await rm(ssrDir, { recursive: true, force: true })
console.log(`prerender: ${urls.length} páginas + 404.html, sitemap.xml y robots.txt (${site.url})`)
