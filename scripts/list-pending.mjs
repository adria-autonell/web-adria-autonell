/** Lista todos los `pending('...')` del código: lo que falta por confirmar antes de publicar. */
import { readFile, readdir } from 'node:fs/promises'
import { join, relative } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const files = []
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name)
    if (entry.isDirectory()) await walk(p)
    else if (/\.tsx?$/.test(entry.name)) files.push(p)
  }
}
await walk(join(root, 'src'))

let count = 0
for (const file of files.sort()) {
  const text = await readFile(file, 'utf8')
  for (const m of text.matchAll(/pending\(\s*'([^']+)'/g)) {
    const line = text.slice(0, m.index).split('\n').length
    console.log(`${relative(root, file)}:${line}  ${m[1]}`)
    count++
  }
}
console.log(`\n${count} pendientes`)
