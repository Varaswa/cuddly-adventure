import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

/** Live GitHub Pages path: https://varaswa.github.io/cuddly-adventure/ */
const PAGES_BASE = '/cuddly-adventure/'

const SPA_ROUTES = [
  'haltung-gesundheit',
  'zucht-herdebuch',
  'veranstaltungen',
  'suche',
  'downloads',
  'tierverkauf',
  'mein-nwks',
]

const isNativeBuild = process.env.CAPACITOR === '1'

function spaPagesFallback() {
  return {
    name: 'spa-pages-fallback',
    closeBundle() {
      if (isNativeBuild) return
      const dist = resolve('dist')
      const index = resolve(dist, 'index.html')
      copyFileSync(index, resolve(dist, '404.html'))
      for (const route of SPA_ROUTES) {
        const dir = resolve(dist, route)
        mkdirSync(dir, { recursive: true })
        copyFileSync(index, resolve(dir, 'index.html'))
      }
    },
  }
}

/** Keep `virtual:pwa-register` resolvable when the PWA plugin is off (native). */
function pwaRegisterStub() {
  return {
    name: 'pwa-register-stub',
    resolveId(id: string) {
      if (id === 'virtual:pwa-register') return id
    },
    load(id: string) {
      if (id === 'virtual:pwa-register') {
        return 'export function registerSW() { return () => {} }'
      }
    },
  }
}

function resolveViteBase(command: 'build' | 'serve') {
  if (isNativeBuild) return '/'
  if (process.env.VITE_BASE) return process.env.VITE_BASE
  if (process.env.VERCEL) return '/'
  if (command === 'serve' && !process.env.CI) return PAGES_BASE
  return PAGES_BASE
}

export default defineConfig(({ command }) => {
  const viteBase = resolveViteBase(command)
  return {
    base: viteBase,
    build: {
      outDir: isNativeBuild ? 'dist-native' : 'dist',
      emptyOutDir: true,
    },
    plugins: [
      react(),
      tailwindcss(),
      isNativeBuild
        ? pwaRegisterStub()
        : VitePWA({
        registerType: 'autoUpdate',
        injectRegister: false,
        includeAssets: [
          'favicon.svg',
          'favicon-32x32.png',
          'nwks-logo.png',
          'nwks-logo-inverse.png',
          'nwks-mark.png',
          'nwks-mark-inverse.png',
          'pwa-icon.svg',
          'apple-touch-icon.png',
          'icon-192.png',
          'icon-512.png',
        ],
        manifest: {
          id: `${PAGES_BASE}#official-20260919-merge`,
          name: 'NWKS – Neuweltkameliden Schweiz',
          short_name: 'NWKS',
          description:
            'Neuweltkameliden Schweiz – Haltung, Zucht, Höfe, Veranstaltungen und Verein.',
          lang: 'de',
          dir: 'ltr',
          theme_color: '#FAF8F5',
          background_color: '#FAF8F5',
          display: 'standalone',
          orientation: 'any',
          start_url: PAGES_BASE,
          scope: PAGES_BASE,
          icons: [
            {
              src: 'icon-192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: 'icon-512-maskable.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          cacheId: 'nwks-official-20260919-merge',
          skipWaiting: true,
          clientsClaim: true,
          cleanupOutdatedCaches: true,
          globPatterns: ['**/*.{js,css,html,svg,png,ico,webp,jpg,jpeg,woff2}'],
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
      spaPagesFallback(),
    ],
  }
})
