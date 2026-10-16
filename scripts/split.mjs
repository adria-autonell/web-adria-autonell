// Utilidad de pruebas: trocea una captura de página completa para revisarla por partes.
import sharp from 'sharp'
const [file, prefix, step = '1600'] = process.argv.slice(2)
const img = sharp(file); const { width, height } = await img.metadata()
for (let y = 0, i = 0; y < height; y += +step, i++)
  await sharp(file).extract({ left: 0, top: y, width, height: Math.min(+step, height - y) }).toFile(`${prefix}-${i}.png`)
console.log(width, height)
