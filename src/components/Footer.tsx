import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-sand bg-anthrazit text-warmweiss">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-bold">NWKS</p>
          <p className="mt-2 text-sm text-warmweiss/75">
            Neuweltkameliden Schweiz – Verband für Lamas und Alpakas.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-warmweiss/60">Service</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/suche" className="hover:text-white">Hof-/Fachpersonensuche</Link></li>
            <li><Link to="/downloads" className="hover:text-white">Downloads & Formulare</Link></li>
            <li><Link to="/tierverkauf" className="hover:text-white">Tierverkauf</Link></li>
            <li><Link to="/veranstaltungen" className="hover:text-white">Veranstaltungen</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-warmweiss/60">Verband</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/mein-nwks" className="hover:text-white">Mitgliedschaft</Link></li>
            <li><Link to="/zucht-herdebuch" className="hover:text-white">NWKSoft & Herdebuch</Link></li>
            <li><Link to="/haltung-gesundheit" className="hover:text-white">Haltung & Gesundheit</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-warmweiss/50 sm:px-6 lg:px-8">
          Prototyp mit Demodaten · © 2026 NWKS
        </p>
      </div>
    </footer>
  )
}
