import { Link } from 'react-router-dom'
import { gesundheitThemen, haltungThemen, tgiHinweis, wissenArtikel } from '../data/demo'
import ExternalLink from '../components/ExternalLink'

export default function HaltungGesundheit() {
  return (
    <div>
      <section className="border-b border-sand bg-gradient-to-r from-salbei/20 to-sand/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-salbei">Haltung & Gesundheit</p>
          <h1 className="mt-2 text-3xl font-bold text-anthrazit sm:text-4xl">
            Lamas und Alpakas richtig halten
          </h1>
          <blockquote className="mt-4 border-l-4 border-salbei pl-4 text-lg text-anthrazit/80">
            Gute Haltung beginnt mit Wissen über die Bedürfnisse der Tiere.
          </blockquote>
          <p className="mt-4 max-w-3xl text-sm text-anthrazit/65">
            Kurzfassungen aus den öffentlichen NWKS-Seiten Haltung/Pflege, Gesundheit, Alpaka, Lama und
            Neueinsteiger. Ausführliche Texte und PDFs öffnen auf nwks.ch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-anthrazit">Themen-Navigation</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {haltungThemen.map((t) => (
            <article
              key={t.title}
              className="flex flex-col rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm transition hover:border-salbei/40 hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden>
                {t.icon}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-anthrazit">{t.title}</h3>
              <p className="mt-1 text-sm font-medium text-anthrazit/55">{t.topics}</p>
              <p className="mt-2 flex-1 text-sm text-anthrazit/75">{t.description}</p>
              <ExternalLink href={t.href} className="mt-3 text-sm font-semibold text-nwks-rot hover:underline">
                Quelle auf nwks.ch →
              </ExternalLink>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-anthrazit">Gesundheit im Überblick</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gesundheitThemen.map((g) => (
              <div key={g.title} className="flex flex-col rounded-xl border border-sand bg-warmweiss p-4">
                <h3 className="font-semibold text-anthrazit">{g.title}</h3>
                <p className="mt-1 flex-1 text-sm text-anthrazit/65">{g.description}</p>
                <ExternalLink href={g.href} className="mt-2 text-sm font-semibold text-nwks-rot hover:underline">
                  Weiterlesen →
                </ExternalLink>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-nwks-rot/20 bg-nwks-rot/5 p-5">
            <p className="text-sm font-semibold text-nwks-rot">Aktuelle Tiergesundheitsmeldung</p>
            <p className="mt-1 text-sm text-anthrazit/80">
              Die Blauzungenkrankheit ist in der Schweiz angekommen (BTV 8, 4 und BTV 3). BTV 3 gilt als
              gefährlicher. Der BGK empfiehlt die Impfung für alle empfänglichen Tierarten; durchgeführt
              wird sie durch die Bestandestierärzte.
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              <ExternalLink
                href="https://www.nwks.ch/blauzungenkrankheit"
                className="text-sm font-semibold text-nwks-rot hover:underline"
              >
                NWKS-Seite Blauzunge →
              </ExternalLink>
              <Link to="/downloads" className="text-sm font-semibold text-nwks-rot hover:underline">
                Vortrag Infotreffen 2025 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-anthrazit">Wissen kompakt</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {wissenArtikel.map((a) => (
            <article key={a.title} className="rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-anthrazit">{a.title}</h3>
              <p className="mt-2 text-sm text-anthrazit/70">{a.excerpt}</p>
              <ExternalLink href={a.href} className="mt-3 inline-block text-sm font-semibold text-nwks-rot hover:underline">
                Artikel auf nwks.ch →
              </ExternalLink>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-salbei/30 bg-salbei/10 p-5">
          <h3 className="font-semibold text-anthrazit">{tgiHinweis.title}</h3>
          <p className="mt-2 text-sm text-anthrazit/70">{tgiHinweis.description}</p>
          <ExternalLink href={tgiHinweis.href} className="mt-3 inline-block text-sm font-semibold text-nwks-rot hover:underline">
            TGI-Seite des NWKS →
          </ExternalLink>
        </div>
      </section>
    </div>
  )
}
