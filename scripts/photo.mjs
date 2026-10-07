// Crops scripts/src-art/photo-original.jpg (768x1024) into the portfolio photos.
// Crops stay clear of the small sparkle watermark in the bottom-right corner.
// Never upscale: every output keeps the source's native pixels, with high-quality encoding.
import sharp from 'sharp'

const SRC = 'scripts/src-art/photo-original.jpg'
const HQ = { quality: 95, effort: 6, smartSubsample: true }
const crisp = (img) => img.sharpen({ sigma: 0.6, m1: 0.5, m2: 1.2 })

// Hero portrait (4:5) at native resolution — 640px wide ≈ 2x the frame width, so Retina screens stay sharp
await crisp(sharp(SRC).extract({ left: 0, top: 150, width: 640, height: 800 })).webp(HQ).toFile('public/photo.webp')

// Square face crop for avatars (shown at most ~108 CSS px, so 290px covers 2x screens)
const FACE = { left: 215, top: 245, width: 290, height: 290 }
await crisp(sharp(SRC).extract(FACE)).webp(HQ).toFile('public/avatar.webp')

// Favicon + apple-touch icon: face in a teal ring on charcoal (downscaled only)
const SIZE = 512
const face = await sharp(SRC).extract(FACE).resize(400, 400, { kernel: 'lanczos3' }).toBuffer()
const mask = Buffer.from(`<svg width="400" height="400"><circle cx="200" cy="200" r="200" fill="#fff"/></svg>`)
const round = await sharp(face).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer()
const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}">
  <rect width="${SIZE}" height="${SIZE}" rx="112" fill="#1a1a1a"/>
  <circle cx="256" cy="256" r="216" fill="#62CBC9"/></svg>`)
const icon = await sharp(bg).composite([{ input: round, left: 56, top: 56 }]).png().toBuffer()
await sharp(icon).resize(64, 64).png().toFile('public/favicon.png')
await sharp(icon).resize(180, 180).png().toFile('public/apple-touch-icon.png')
console.log('photos written')
