import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

/** Live GitHub Pages path: https://varaswa.github.io/cuddly-adventure/ */
const PAGES_BASE = '/cuddly-adventure/'

function resolveViteBase(command: 'build' | 'serve') {
  if (process.env.VITE_BASE) return process.env.VITE_BASE
  if (process.env.VERCEL) return '/'
  if (command === 'serve' && !process.env.CI) return PAGES_BASE
  return PAGES_BASE
}

export default defineConfig(({ command }) => {
  const viteBase = resolveViteBase(command)
  return {
    base: viteBase,
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: false,
        includeAssets: [
          'favicon.svg',
          'nwks-logo.svg',
          'pwa-icon.svg',
          'apple-touch-icon.png',
        ],
        manifest: {
          id: PAGES_BASE,
          name: 'NWKS',
          short_name: 'NWKS',
          description:
            'Neuweltkameliden Schweiz – Haltung, Zucht, Höfe, Veranstaltungen und Verein.',
          lang: 'de',
          dir: 'ltr',
          theme_color: '#B91C1C',
          background_color: '#FAF8F5',
          display: 'standalone',
          orientation: 'any',
          start_url: PAGES_BASE,
          scope: PAGES_BASE,
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'pwa-512x512-maskable.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,ico,webp,woff2}'],
          navigateFallback: 'index.html',
          navigateFallbackDenylist: [/\.[a-zA-Z0-9]+$/],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-stylesheets',
                expiration: { maxEntries: 8, maxAgeSeconds: 60 * 60 * 24 * 365 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-webfonts',
                expiration: { maxEntries: 16, maxAgeSeconds: 60 * 60 * 24 * 365 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
          ],
        },
      }),
    ],
  }
})
