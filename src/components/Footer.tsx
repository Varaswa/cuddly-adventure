import { Link } from 'react-router-dom'
import { DATENSCHUTZ_PDF, NWKS_HOME, SEKRETARIAT_EMAIL, HERDEBUCH_EMAIL } from '../data/sources'
import ExternalLink from './ExternalLink'

const logoSrc = `${import.meta.env.BASE_URL}nwks-logo-inverse.png`

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-sand bg-anthrazit text-warmweiss">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img
            src={logoSrc}
            alt="NWKS – Neuweltkameliden Schweiz"
            className="h-10 w-auto max-w-[14rem] object-contain object-left"
          />
          <p className="mt-2 text-sm text-warmweiss/75">
            Neuweltkameliden Schweiz – anerkannte Zuchtorganisation für Lamas und Alpakas.
          </p>
          <ExternalLink href={NWKS_HOME} className="mt-3 inline-block text-sm text-sand hover:text-white hover:underline">
            nwks.ch →
          </ExternalLink>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-warmweiss/60">Service</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/suche" className="hover:text-white">
                Hof-/Fachpersonensuche
              </Link>
            </li>
            <li>
              <Link to="/downloads" className="hover:text-white">
                Downloads & Formulare
              </Link>
            </li>
            <li>
              <Link to="/tierverkauf" className="hover:text-white">
                Tierverkauf
              </Link>
            </li>
            <li>
              <Link to="/veranstaltungen" className="hover:text-white">
                Veranstaltungen
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-warmweiss/60">Verband</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/mein-nwks/mitgliedschaft" className="hover:text-white">
                Mitgliedschaft
              </Link>
            </li>
            <li>
              <Link to="/zucht-herdebuch" className="hover:text-white">
                NWKSoft & Herdebuch
              </Link>
            </li>
            <li>
              <Link to="/haltung-gesundheit" className="hover:text-white">
                Haltung / Pflege
              </Link>
            </li>
            <li>
              <Link to="/haltung-gesundheit/tierschutzverordnung" className="hover:text-white">
                Tierschutzverordnung
              </Link>
            </li>
            <li>
              <Link to="/mein-nwks/verein" className="hover:text-white">
                Verein
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-warmweiss/60">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm text-warmweiss/80">
            <li>
              <ExternalLink href={`mailto:${SEKRETARIAT_EMAIL}`} className="hover:text-white">
                {SEKRETARIAT_EMAIL}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={`mailto:${HERDEBUCH_EMAIL}`} className="hover:text-white">
                {HERDEBUCH_EMAIL}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={DATENSCHUTZ_PDF}
                className="hover:text-white"
              >
                Datenschutzerklärung
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-warmweiss/50 sm:px-6 lg:px-8">
          Prototyp mit öffentlichen Angaben von nwks.ch · keine Live-Anbindung an NWKSoft · © 2026 NWKS
        </p>
      </div>
    </footer>
  )
}
