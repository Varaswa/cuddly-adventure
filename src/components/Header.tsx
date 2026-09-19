import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, NWKSOFT_LOGIN } from '../data/demo'
import ExternalLink from './ExternalLink'
import type { NavItem } from '../data/nav'

/** Official wordmark from nwks.ch (Wix media b1af85_d2b8b61d5aac4ca89ce95fa36ddde18c). */
const logoSrc = `${import.meta.env.BASE_URL}nwks-logo.png`

function itemClass(isActive: boolean, compact = false) {
  const pad = compact ? 'px-2.5 py-1.5 text-sm' : 'px-3 py-2.5 text-base'
  return `rounded-lg font-medium transition-colors ${pad} ${
    isActive ? 'bg-sand text-anthrazit' : 'text-anthrazit/80 hover:bg-sand/60 hover:text-anthrazit'
  }`
}

function DesktopItem({ link }: { link: NavItem }) {
  if (!link.children?.length) {
    return (
      <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => itemClass(isActive, true)}>
        {link.label}
      </NavLink>
    )
  }

  return (
    <div className="group relative">
      <NavLink
        to={link.to}
        className={({ isActive }) => `${itemClass(isActive, true)} inline-flex items-center gap-1`}
      >
        {link.label}
        <svg className="h-3.5 w-3.5 text-anthrazit/50" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
            clipRule="evenodd"
          />
        </svg>
      </NavLink>
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="min-w-[16rem] rounded-xl border border-sand bg-warmweiss p-2 shadow-lg">
          {link.children.map((child) => (
            <li key={child.to}>
              <NavLink
                to={child.to}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm ${
                    isActive ? 'bg-sand text-anthrazit' : 'text-anthrazit/80 hover:bg-sand/60'
                  }`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-warmweiss/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={logoSrc}
            alt="NWKS – Neuweltkameliden Schweiz"
            className="h-11 w-auto max-w-[13rem] object-contain object-left sm:h-12 sm:max-w-none"
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <DesktopItem key={link.to} link={link} />
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
            to="/mein-nwks/mitgliedschaft"
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
          onClick={() => setOpen((value) => !value)}
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
            {navLinks.map((link) => (
              <div key={link.to}>
                <div className="flex items-center gap-1">
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `flex-1 ${itemClass(isActive)}`}
                  >
                    {link.label}
                  </NavLink>
                  {link.children && (
                    <button
                      type="button"
                      className="rounded-lg p-2 text-anthrazit/60 hover:bg-sand/60"
                      aria-expanded={expanded === link.to}
                      aria-label={`${link.label} Unterseiten`}
                      onClick={() => setExpanded((current) => (current === link.to ? null : link.to))}
                    >
                      <svg
                        className={`h-4 w-4 transition ${expanded === link.to ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {link.children && expanded === link.to && (
                  <ul className="mb-1 ml-3 mt-1 border-l border-sand pl-3">
                    {link.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `block rounded-lg px-3 py-2 text-sm ${
                              isActive ? 'bg-sand text-anthrazit' : 'text-anthrazit/75 hover:bg-sand/60'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-sand pt-3 md:hidden">
              <ExternalLink
                href={NWKSOFT_LOGIN}
                className="rounded-lg border border-anthrazit/20 px-3 py-2.5 text-center text-sm font-medium"
              >
                NWKSoft Login
              </ExternalLink>
              <Link
                to="/mein-nwks/mitgliedschaft"
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
