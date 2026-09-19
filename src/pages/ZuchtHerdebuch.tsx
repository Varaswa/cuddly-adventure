import { Link } from 'react-router-dom'
import { zuchtThemen } from '../data/demo'
import ExternalLink from '../components/ExternalLink'

export default function ZuchtHerdebuch() {
  return (
    <div>
      <section className="border-b border-sand bg-anthrazit text-warmweiss">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-sand">Zucht & Herdebuch</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Zucht, Abstammung und NWKSoft</h1>
          <p className="mt-3 max-w-2xl text-warmweiss/75">
            Herdebuch, DNA, Faseranalyse und Reglemente – zusammenhängend auffindbar für
            Züchterinnen und Mitglieder. Quelle: nwks.ch/herdebuch und nwks.ch/zucht.
          </p>
          <ExternalLink
            href="https://nwksoft.ch"
            className="mt-6 inline-flex rounded-lg bg-nwks-rot px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-nwks-rot/90"
          >
            NWKSoft Login
          </ExternalLink>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {zuchtThemen.map((t) => (
            <article
              key={t.title}
              className="flex flex-col rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-anthrazit">{t.title}</h2>
              <p className="mt-2 flex-1 text-sm text-anthrazit/70">{t.description}</p>
              {t.cta && t.href && !t.internal ? (
                <ExternalLink
                  href={t.href}
                  className="mt-4 self-start rounded-lg bg-nwks-rot px-3 py-2 text-sm font-semibold text-white"
                >
                  {t.cta}
                </ExternalLink>
              ) : t.internal && t.href ? (
                <Link to={t.href} className="mt-4 text-sm font-semibold text-nwks-rot hover:underline">
                  Mehr erfahren →
                </Link>
              ) : t.href ? (
                <ExternalLink href={t.href} className="mt-4 text-sm font-semibold text-nwks-rot hover:underline">
                  Mehr erfahren →
                </ExternalLink>
              ) : (
                <Link to="/downloads" className="mt-4 text-sm font-semibold text-nwks-rot hover:underline">
                  Mehr erfahren →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
