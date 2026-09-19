import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { articleByPath, downloadCategoryBySlug, hubByPath } from '../content'
import Header from './Header'
import Footer from './Footer'

const PAGE_TITLES: Record<string, string> = {
  '/': 'NWKS – Neuweltkameliden Schweiz',
  '/haltung-gesundheit': 'Haltung / Pflege · NWKS',
  '/zucht-herdebuch': 'Zucht & Herdebuch · NWKS',
  '/veranstaltungen': 'Veranstaltungen · NWKS',
  '/suche': 'Hofsuche · NWKS',
  '/downloads': 'Downloads & Formulare · NWKS',
  '/tierverkauf': 'Tierverkauf · NWKS',
  '/mein-nwks': 'Mein NWKS',
}

function titleForPath(pathname: string): string {
  const exact = PAGE_TITLES[pathname]
  if (exact) return exact

  const hub = hubByPath(pathname)
  if (hub) return `${hub.label} · NWKS`

  const article = articleByPath(pathname)
  if (article) return `${article.title} · NWKS`

  if (pathname.startsWith('/downloads/')) {
    const category = downloadCategoryBySlug(pathname.slice('/downloads/'.length))
    if (category) return `${category.title} · NWKS`
  }

  return 'Seite nicht gefunden · NWKS'
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titleForPath(pathname)
  }, [pathname])

  return (
    <>
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-nwks-rot focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Zum Inhalt
      </a>
      <Header />
      <main id="inhalt" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
