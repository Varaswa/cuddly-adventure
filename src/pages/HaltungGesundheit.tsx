import { Link } from 'react-router-dom'
import { haltungThemen, gesundheitThemen } from '../data/demo'

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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-anthrazit">Themen-Navigation</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {haltungThemen.map((t) => (
            <article
              key={t.title}
              className="rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm transition hover:border-salbei/40 hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden>
                {t.icon}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-anthrazit">{t.title}</h3>
              <p className="mt-1 text-sm text-anthrazit/65">{t.topics}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-anthrazit">Gesundheit im Überblick</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gesundheitThemen.map((g) => (
              <div key={g.title} className="rounded-xl border border-sand bg-warmweiss p-4">
                <h3 className="font-semibold text-anthrazit">{g.title}</h3>
                <p className="mt-1 text-sm text-anthrazit/65">{g.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-nwks-rot/20 bg-nwks-rot/5 p-5">
            <p className="text-sm font-semibold text-nwks-rot">Aktuelle Tiergesundheitsmeldung (Demo)</p>
            <p className="mt-1 text-sm text-anthrazit/80">
              Blauzungenkrankheit: Bitte Impfstatus und aktuelle Empfehlungen prüfen. Weitere Infos
              im Infobrief und unter Downloads.
            </p>
            <Link to="/downloads" className="mt-3 inline-block text-sm font-semibold text-nwks-rot hover:underline">
              Zu den Dokumenten →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
