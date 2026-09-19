import { useMemo, useState } from 'react'
import { veranstaltungen } from '../data/demo'

const types = ['Alle', 'Tagung', 'Kurs', 'Show', 'TGI'] as const

export default function Veranstaltungen() {
  const [filter, setFilter] = useState<(typeof types)[number]>('Alle')

  const list = useMemo(
    () => (filter === 'Alle' ? veranstaltungen : veranstaltungen.filter((v) => v.type === filter)),
    [filter],
  )

  return (
    <div>
      <section className="border-b border-sand bg-sand/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-salbei">Aktivitäten & TGI</p>
          <h1 className="mt-2 text-3xl font-bold text-anthrazit sm:text-4xl">Veranstaltungen</h1>
          <p className="mt-3 max-w-2xl text-anthrazit/70">
            Tagungen, Kurse, Shows und tiergestützte Intervention – Termine und Anmeldungen auf einen Blick.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filter === t
                  ? 'bg-anthrazit text-warmweiss'
                  : 'bg-sand/70 text-anthrazit hover:bg-sand'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <ul className="mt-8 space-y-4">
          {list.map((event) => (
            <li
              key={event.id}
              className="rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm sm:flex sm:items-start sm:justify-between sm:gap-6"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-salbei/15 px-2.5 py-0.5 text-xs font-semibold text-salbei">
                    {event.type}
                  </span>
                  {event.open ? (
                    <span className="rounded-full bg-nwks-rot/10 px-2.5 py-0.5 text-xs font-semibold text-nwks-rot">
                      Anmeldung offen
                    </span>
                  ) : (
                    <span className="rounded-full bg-anthrazit/10 px-2.5 py-0.5 text-xs font-semibold text-anthrazit/60">
                      Bald
                    </span>
                  )}
                </div>
                <h2 className="mt-2 text-lg font-semibold text-anthrazit">{event.title}</h2>
                <p className="mt-1 text-sm text-anthrazit/70">{event.description}</p>
                <p className="mt-3 text-sm text-anthrazit/55">
                  {event.date} · {event.time} · {event.location}
                </p>
              </div>
              <button
                type="button"
                disabled={!event.open}
                className={`mt-4 shrink-0 rounded-lg px-4 py-2 text-sm font-semibold sm:mt-0 ${
                  event.open
                    ? 'bg-nwks-rot text-white hover:bg-nwks-rot/90'
                    : 'cursor-not-allowed bg-sand text-anthrazit/40'
                }`}
              >
                {event.open ? 'Details / Anmelden' : 'Vormerken'}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
