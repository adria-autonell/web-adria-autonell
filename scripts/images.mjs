/**
 * Optimiza las imágenes originales de assets-src/ y genera logotipo e iconos.
 * Uso: npm run images  (solo hace falta al cambiar una imagen original)
 *
 * - assets-src/projects/<nombre>.{png,jpg,jpeg} → public/images/projects/<nombre>-{800,1600}.{avif,webp}
 * - assets-src/og/og-<idioma>.png → public/og/og-<idioma>.png (1200×630, PNG comprimido: máxima compatibilidad)
 * - assets-src/brand/logo.jpg → logotipo con fondo transparente, favicons e iconos de aplicación
 */
import sharp from 'sharp'
import { mkdir, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const src = join(root, 'assets-src')
const pub = join(root, 'public')
for (const dir of ['images/projects', 'images/brand', 'og']) await mkdir(join(pub, dir), { recursive: true })

// ---------- Capturas y fotografías de proyectos ----------
for (const file of await readdir(join(src, 'projects'))) {
  const match = file.match(/^(.+)\.(png|jpe?g)$/)
  if (!match) continue
  const input = join(src, 'projects', file)
  // Las fotografías (JPEG) tienen mucho detalle fino y toleran más compresión que las capturas.
  const photo = match[2] !== 'png'
  for (const width of [800, 1600]) {
    const base = join(pub, 'images/projects', `${match[1]}-${width}`)
    // rotate() aplica la orientación EXIF y elimina los metadatos (incluida la ubicación GPS de las fotos).
    await sharp(input).rotate().resize({ width }).avif({ quality: photo ? 42 : 55 }).toFile(`${base}.avif`)
    await sharp(input).rotate().resize({ width }).webp({ quality: photo ? 62 : 78 }).toFile(`${base}.webp`)
  }
}

// ---------- Imágenes Open Graph ----------
for (const file of await readdir(join(src, 'og'))) {
  if (!file.endsWith('.png')) continue
  await sharp(join(src, 'og', file)).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(join(pub, 'og', file))
}

// ---------- Logotipo: quita el fondo blanco exterior ----------
// El original es un JPEG con fondo blanco. Se rellena desde los bordes solo el blanco conectado
// con el exterior, así el blanco y los brillos del interior del octógono se conservan.
async function transparentLogo(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width: w, height: h } = info
  const px = (i) => [data[i * 4], data[i * 4 + 1], data[i * 4 + 2]]
  const isBackground = (i) => Math.min(...px(i)) > 232
  const outside = new Uint8Array(w * h)
  const stack = []
  for (let x = 0; x < w; x++) stack.push(x, (h - 1) * w + x)
  for (let y = 0; y < h; y++) stack.push(y * w, y * w + w - 1)
  while (stack.length) {
    const i = stack.pop()
    if (outside[i] || !isBackground(i)) continue
    outside[i] = 1
    const x = i % w
    const y = (i - x) / w
    if (x > 0) stack.push(i - 1)
    if (x < w - 1) stack.push(i + 1)
    if (y > 0) stack.push(i - w)
    if (y < h - 1) stack.push(i + w)
  }
  for (let i = 0; i < w * h; i++) {
    if (outside[i]) {
      data[i * 4 + 3] = 0
      continue
    }
    // Borde antialiasado: píxeles claros pegados al exterior → transparencia parcial sin halo blanco.
    const x = i % w
    const touchesOutside = [i - 1, i + 1, i - w, i + w].some((j) => j >= 0 && j < w * h && outside[j] && Math.abs((j % w) - x) <= 1)
    if (!touchesOutside) continue
    const [r, g, b] = px(i)
    const alpha = Math.min(1, (255 - Math.min(r, g, b)) / 160)
    if (alpha <= 0) {
      data[i * 4 + 3] = 0
      continue
    }
    const unblend = (c) => Math.max(0, Math.min(255, Math.round((c - 255 * (1 - alpha)) / alpha)))
    data[i * 4] = unblend(r)
    data[i * 4 + 1] = unblend(g)
    data[i * 4 + 2] = unblend(b)
    data[i * 4 + 3] = Math.round(alpha * 255)
  }
  // Recorta el margen transparente sobrante para que el octógono ocupe todo el lienzo.
  return sharp(data, { raw: { width: w, height: h, channels: 4 } }).trim({ threshold: 1 }).png().toBuffer()
}

const logo = await transparentLogo(join(src, 'brand/logo.jpg'))
const square = (size, pad = 0) =>
  sharp(logo)
    .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })

await sharp(logo).toFile(join(src, 'brand/logo-transparent.png'))
// Cabecera: se muestra a 34 px, así que basta con 68 px (pantallas 2×).
await square(68).webp({ quality: 90 }).toFile(join(pub, 'images/brand/logo-68.webp'))
await square(256).png({ compressionLevel: 9, palette: true }).toFile(join(pub, 'images/brand/logo-256.png'))
await square(32).png().toFile(join(pub, 'favicon-32.png'))
await square(192, 8).png({ compressionLevel: 9, palette: true }).toFile(join(pub, 'icon-192.png'))
await square(512, 20).png({ compressionLevel: 9, palette: true }).toFile(join(pub, 'icon-512.png'))
// El icono de iOS no admite transparencia: fondo crema con margen.
await sharp({ create: { width: 180, height: 180, channels: 4, background: '#f6f1e7' } })
  .composite([{ input: await square(144).png().toBuffer(), top: 18, left: 18 }])
  .png({ compressionLevel: 9, palette: true })
  .toFile(join(pub, 'apple-touch-icon.png'))

// favicon.ico con un PNG de 32×32 incrustado (formato ICO admitido por todos los navegadores actuales).
const ico32 = await square(32).png().toBuffer()
const header = Buffer.alloc(22)
header.writeUInt16LE(0, 0) // reservado
header.writeUInt16LE(1, 2) // tipo: icono
header.writeUInt16LE(1, 4) // nº de imágenes
header.writeUInt8(32, 6) // ancho
header.writeUInt8(32, 7) // alto
header.writeUInt16LE(1, 10) // planos
header.writeUInt16LE(32, 12) // bits por píxel
header.writeUInt32LE(ico32.length, 14)
header.writeUInt32LE(22, 18) // desplazamiento
await writeFile(join(pub, 'favicon.ico'), Buffer.concat([header, ico32]))

console.log('images: ok')
