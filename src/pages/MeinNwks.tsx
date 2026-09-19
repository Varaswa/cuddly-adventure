import { Link } from 'react-router-dom'
import { meinNwksShortcuts, fuerDichAktuell } from '../data/demo'

export default function MeinNwks() {
  return (
    <div>
      <section className="border-b border-sand bg-gradient-to-br from-salbei/25 via-warmweiss to-sand/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-salbei">Mitgliederbereich</p>
          <h1 className="mt-2 text-3xl font-bold text-anthrazit sm:text-4xl">
            Guten Morgen, Valeska
          </h1>
          <p className="mt-2 text-anthrazit/70">
            Dein persönliches NWKS-Dashboard – Shortcuts, Termine und Hinweise (Demo).
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-anthrazit">Shortcuts</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {meinNwksShortcuts.map((s) => (
            <Link
              key={s.label}
              to={s.to}
              className="rounded-xl border border-sand bg-warmweiss px-3 py-4 text-center text-sm font-semibold text-anthrazit shadow-sm transition hover:border-salbei/40 hover:shadow-md"
            >
              {s.label}
              <span className="mt-1 block text-nwks-rot" aria-hidden>
                →
              </span>
            </Link>
          ))}
        </div>

        <h2 className="mt-12 text-lg font-bold text-anthrazit">Für dich aktuell</h2>
        <ul className="mt-4 space-y-3">
          {fuerDichAktuell.map((item) => (
            <li key={item.title}>
              <Link
                to={item.to}
                className="flex items-start justify-between gap-4 rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <h3 className="font-semibold text-anthrazit">{item.title}</h3>
                  <p className="mt-1 text-sm text-anthrazit/65">{item.detail}</p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-nwks-rot">Öffnen →</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-sand bg-sand/30 p-6">
            <h2 className="text-base font-bold text-anthrazit">Noch kein Mitglied?</h2>
            <p className="mt-2 text-sm text-anthrazit/70">
              Mitgliedschaft bringt Zugang zu NWKSoft, Formularen, Veranstaltungen und dem
              Netzwerk der Neuweltkameliden-Community.
            </p>
            <button
              type="button"
              className="mt-4 rounded-lg bg-nwks-rot px-4 py-2.5 text-sm font-semibold text-white hover:bg-nwks-rot/90"
            >
              Mitglied werden
            </button>
          </div>
          <div className="rounded-2xl border border-sand bg-warmweiss p-6 shadow-sm">
            <h2 className="text-base font-bold text-anthrazit">NWKSoft</h2>
            <p className="mt-2 text-sm text-anthrazit/70">
              Digitale Herdebuchführung und Tierdaten – Login für Mitglieder.
            </p>
            <a
              href="#nwksoft"
              className="mt-4 inline-flex rounded-lg border border-anthrazit/20 px-4 py-2.5 text-sm font-semibold text-anthrazit hover:bg-sand/50"
            >
              NWKSoft Login
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
