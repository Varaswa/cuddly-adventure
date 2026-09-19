import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const PAGE_TITLES: Record<string, string> = {
  '/': 'NWKS – Neuweltkameliden Schweiz',
  '/haltung-gesundheit': 'Haltung & Gesundheit · NWKS',
  '/zucht-herdebuch': 'Zucht & Herdebuch · NWKS',
  '/veranstaltungen': 'Veranstaltungen · NWKS',
  '/suche': 'Hofsuche · NWKS',
  '/downloads': 'Downloads & Formulare · NWKS',
  '/tierverkauf': 'Tierverkauf · NWKS',
  '/mein-nwks': 'Mein NWKS',
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? 'Seite nicht gefunden · NWKS'
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
