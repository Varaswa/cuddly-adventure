import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
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
