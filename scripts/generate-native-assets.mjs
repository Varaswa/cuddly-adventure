/**
 * Build Capacitor source icons/splashes from the official NWKS lockup in public/.
 * Output: assets/logo.png, assets/logo-dark.png, assets/icon-only.png,
 *         assets/splash.png, assets/splash-dark.png
 */
import { mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = resolve(root, 'assets')
mkdirSync(outDir, { recursive: true })

const WARMWEISS = { r: 250, g: 248, b: 245, alpha: 1 }
const ANTHRAZIT = { r: 43, g: 47, b: 51, alpha: 1 }

const mark = resolve(root, 'public/icon-512.png')
const wordmark = resolve(root, 'public/nwks-logo.png')
const wordmarkInverse = resolve(root, 'public/nwks-logo-inverse.png')

async function squareIcon(source, size, background, paddingRatio) {
  const inner = Math.round(size * (1 - paddingRatio * 2))
  const resized = await sharp(source)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()

  return sharp({
    create: { width: size, height: size, channels: 4, background },
  })
    .composite([{ input: resized, gravity: 'centre' }])
    .png()
    .toBuffer()
}

async function splash(source, size, background, maxWidthRatio) {
  const maxWidth = Math.round(size * maxWidthRatio)
  const resized = await sharp(source)
    .resize(maxWidth, Math.round(maxWidth * 0.4), {
      fit: 'inside',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer()

  return sharp({
    create: { width: size, height: size, channels: 4, background },
  })
    .composite([{ input: resized, gravity: 'centre' }])
    .png()
    .toBuffer()
}

const logo = await squareIcon(mark, 1024, WARMWEISS, 0.12)
const logoDark = await squareIcon(mark, 1024, ANTHRAZIT, 0.12)
const iconOnly = await squareIcon(mark, 1024, { r: 0, g: 0, b: 0, alpha: 0 }, 0.08)
const splashLight = await splash(wordmark, 2732, WARMWEISS, 0.58)
const splashDark = await splash(wordmarkInverse, 2732, ANTHRAZIT, 0.58)

await Promise.all([
  sharp(logo).toFile(resolve(outDir, 'logo.png')),
  sharp(logoDark).toFile(resolve(outDir, 'logo-dark.png')),
  sharp(iconOnly).toFile(resolve(outDir, 'icon-only.png')),
  sharp(splashLight).toFile(resolve(outDir, 'splash.png')),
  sharp(splashDark).toFile(resolve(outDir, 'splash-dark.png')),
])

console.log('Wrote Capacitor source assets to', outDir)
