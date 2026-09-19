import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function resolveBase(command: 'build' | 'serve') {
  if (process.env.VITE_BASE) return process.env.VITE_BASE
  if (process.env.VERCEL) return '/'
  if (command === 'serve') return '/'
  // GitHub Pages project site: https://varaswa.github.io/cuddly-adventure/
  return '/cuddly-adventure/'
}

export default defineConfig(({ command }) => ({
  base: resolveBase(command),
  plugins: [react(), tailwindcss()],
}))
