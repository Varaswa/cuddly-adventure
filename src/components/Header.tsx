import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, NWKSOFT_LOGIN } from '../data/demo'
import ExternalLink from './ExternalLink'
import BrandLockup from './BrandLockup'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-warmweiss/95 backdrop-blur-md">
      <div className="h-1 w-full bg-anthrazit" aria-hidden />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center"
          onClick={() => setOpen(false)}
          aria-label="NWKS – Neuweltkameliden Schweiz, zur Startseite"
        >
          <BrandLockup compact />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-2 py-1.5 text-[13px] font-medium transition-colors ${
                  isActive
                    ? 'bg-sand text-anthrazit'
                    : 'text-anthrazit/80 hover:bg-sand/60 hover:text-anthrazit'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ExternalLink
            href={NWKSOFT_LOGIN}
            className="rounded-lg border border-anthrazit/20 px-3 py-2 text-sm font-medium text-anthrazit transition hover:border-anthrazit/40 hover:bg-sand/50"
          >
            NWKSoft Login
          </ExternalLink>
          <Link
            to="/mein-nwks"
            className="rounded-lg bg-nwks-rot px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-nwks-rot/90"
          >
            Mitglied werden
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-anthrazit/15 p-2 text-anthrazit xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-sand bg-warmweiss xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobile Navigation">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-base font-medium ${
                  isActive ? 'bg-sand text-anthrazit' : 'text-anthrazit/90 hover:bg-sand/60'
                }`
              }
            >
              Startseite
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive ? 'bg-sand text-anthrazit' : 'text-anthrazit/90 hover:bg-sand/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-sand pt-3 md:hidden">
              <ExternalLink
                href={NWKSOFT_LOGIN}
                className="rounded-lg border border-anthrazit/20 px-3 py-2.5 text-center text-sm font-medium"
              >
                NWKSoft Login
              </ExternalLink>
              <Link
                to="/mein-nwks"
                className="rounded-lg bg-nwks-rot px-3 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Mitglied werden
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
