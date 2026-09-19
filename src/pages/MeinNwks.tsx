import { Link } from 'react-router-dom'
import { fuerDichAktuell, meinNwksShortcuts, mitgliedschaft, nwkLinks } from '../data/demo'
import ExternalLink from '../components/ExternalLink'

export default function MeinNwks() {
  return (
    <div>
      <section className="border-b border-sand bg-gradient-to-br from-salbei/25 via-warmweiss to-sand/50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-salbei">Mitgliederbereich</p>
          <h1 className="mt-2 text-3xl font-bold text-anthrazit sm:text-4xl">Mein NWKS</h1>
          <p className="mt-2 max-w-2xl text-anthrazit/70">
            Prototyp des Mitglieder-Dashboards mit öffentlichen Vereinsinfos. Der persönliche Login
            bleibt NWKSoft vorbehalten – hier gibt es Shortcuts und aktuelle Hinweise ohne erfundene
            Mitgliedsdaten.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-anthrazit">Shortcuts</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {meinNwksShortcuts.map((s) =>
            s.href ? (
              <ExternalLink
                key={s.label}
                href={s.href}
                className="rounded-xl border border-sand bg-warmweiss px-3 py-4 text-center text-sm font-semibold text-anthrazit shadow-sm transition hover:border-salbei/40 hover:shadow-md"
              >
                {s.label}
                <span className="mt-1 block text-nwks-rot" aria-hidden>
                  →
                </span>
              </ExternalLink>
            ) : (
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
            ),
          )}
        </div>

        <h2 className="mt-12 text-lg font-bold text-anthrazit">Für dich aktuell</h2>
        <ul className="mt-4 space-y-3">
          {fuerDichAktuell.map((item) => (
            <li key={item.title}>
              {item.href ? (
                <ExternalLink
                  href={item.href}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm transition hover:shadow-md"
                >
                  <div>
                    <h3 className="font-semibold text-anthrazit">{item.title}</h3>
                    <p className="mt-1 text-sm text-anthrazit/65">{item.detail}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-nwks-rot">Öffnen →</span>
                </ExternalLink>
              ) : (
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
              )}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-sand bg-sand/30 p-6">
            <h2 className="text-base font-bold text-anthrazit">Mitglied werden</h2>
            <p className="mt-2 text-sm text-anthrazit/70">
              {mitgliedschaft.beitragEinzel}, {mitgliedschaft.beitragDoppel}, {mitgliedschaft.beitragPassiv}.
              Aufnahme über die Geschäftsstelle, abschliessend entscheidet die Vereinsversammlung.
            </p>
            <ExternalLink
              href={mitgliedschaft.beitrittUrl}
              className="mt-4 inline-flex rounded-lg bg-nwks-rot px-4 py-2.5 text-sm font-semibold text-white hover:bg-nwks-rot/90"
            >
              Beitrittserklärung (PDF)
            </ExternalLink>
            <ExternalLink
              href={mitgliedschaft.preislisteUrl}
              className="mt-3 ml-3 inline-flex text-sm font-semibold text-nwks-rot hover:underline"
            >
              Preisliste 2026
            </ExternalLink>
          </div>
          <div className="rounded-2xl border border-sand bg-warmweiss p-6 shadow-sm">
            <h2 className="text-base font-bold text-anthrazit">NWKSoft</h2>
            <p className="mt-2 text-sm text-anthrazit/70">
              Digitale Herdebuchführung seit 1. April 2025. Basic-Login für Mitglieder kostenlos, Pro
              Fr. 85.– pro Jahr. Zugangsdaten kommen vom Verein; Probleme an herdebuch@nwks.ch.
            </p>
            <ExternalLink
              href={mitgliedschaft.nwksoftUrl}
              className="mt-4 inline-flex rounded-lg border border-anthrazit/20 px-4 py-2.5 text-sm font-semibold text-anthrazit hover:bg-sand/50"
            >
              NWKSoft Login
            </ExternalLink>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-sand bg-warmweiss p-6 text-sm text-anthrazit/75">
          <h2 className="text-base font-bold text-anthrazit">Kontakt</h2>
          <p className="mt-2">{mitgliedschaft.sekretariat}</p>
          <p className="mt-1">{mitgliedschaft.herdebuch}</p>
          <ExternalLink href={mitgliedschaft.kontakteUrl} className="mt-3 inline-block font-semibold text-nwks-rot hover:underline">
            Alle Kontakte auf nwks.ch →
          </ExternalLink>
        </div>

        <h2 className="mt-12 text-lg font-bold text-anthrazit">Fachstellen & Partner</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {nwkLinks.slice(0, 8).map((link) => (
            <li key={link.url}>
              <ExternalLink href={link.url} className="text-sm font-medium text-nwks-rot hover:underline">
                {link.title} →
              </ExternalLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
