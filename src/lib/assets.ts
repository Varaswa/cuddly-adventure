/** Public files under the Vite/GitHub Pages base (`/cuddly-adventure/`). */
export function asset(path: string) {
  const clean = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}
