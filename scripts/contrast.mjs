/** Comprueba los contrastes de la paleta según WCAG 2.2 (AA: 4.5 texto normal, 3 texto grande/UI). */
const c = {
  paper: '#f6f1e7', 'paper-2': '#ede6d8', ink: '#1f1d1a', 'ink-2': '#46423c',
  'ink-3': '#67615a', minio: '#b0390f', 'minio-deep': '#8a2c0b', rule: '#d6ccb9',
}
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const ratio = (a, b) => { const [x, y] = [lum(c[a]), lum(c[b])].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05) }
const pairs = [
  ['ink', 'paper', 4.5], ['ink-2', 'paper', 4.5], ['ink-3', 'paper', 4.5], ['minio', 'paper', 4.5],
  ['minio-deep', 'paper', 4.5], ['ink-3', 'paper-2', 4.5], ['ink-2', 'paper-2', 4.5], ['minio', 'paper-2', 4.5],
  ['minio-deep', 'paper-2', 4.5], ['paper', 'ink', 4.5], ['paper', 'minio', 4.5], ['paper', 'minio-deep', 4.5],
  ['minio', 'paper', 3, 'foco / UI'], ['rule', 'paper', 1, 'líneas decorativas (sin requisito)'],
]
let fail = 0
for (const [fg, bg, min, note = 'texto'] of pairs) {
  const r = ratio(fg, bg); const ok = r >= min; if (!ok) fail++
  console.log(`${ok ? '✓' : '✗'} ${fg.padEnd(10)} sobre ${bg.padEnd(10)} ${r.toFixed(2)}:1  (mín. ${min}, ${note})`)
}
process.exit(fail ? 1 : 0)
