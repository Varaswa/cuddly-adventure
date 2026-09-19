import { useMemo, useState } from 'react'
import { downloadTags, downloads } from '../data/demo'

export default function Downloads() {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<string | null>(null)

  const list = useMemo(() => {
    return downloads.filter((doc) => {
      if (tag && !doc.tags.includes(tag)) return false
      const q = query.trim().toLowerCase()
      if (!q) return true
      return `${doc.title} ${doc.meta} ${doc.tags.join(' ')}`.toLowerCase().includes(q)
    })
  }, [query, tag])

  return (
    <div>
      <section className="border-b border-sand bg-sand/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-anthrazit sm:text-4xl">Dokumente & Formulare</h1>
          <p className="mt-2 text-anthrazit/70">
            Durchsuchbare Downloads mit aktuellen Versionen – Haltung, Zucht, Herdebuch und mehr.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Dokument suchen …"
          className="w-full max-w-xl rounded-lg border border-sand bg-warmweiss px-4 py-2.5 outline-none ring-salbei focus:ring-2"
          aria-label="Dokument suchen"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTag(null)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
              tag === null ? 'bg-anthrazit text-warmweiss' : 'bg-sand/70 text-anthrazit'
            }`}
          >
            Alle
          </button>
          {downloadTags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                tag === t ? 'bg-anthrazit text-warmweiss' : 'bg-sand/70 text-anthrazit'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((doc) => (
            <article
              key={doc.id}
              className="flex flex-col rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="rounded bg-sand px-2 py-0.5 text-xs font-semibold text-anthrazit/70">
                  {doc.type}
                </span>
                {doc.current && (
                  <span className="rounded-full bg-salbei/15 px-2 py-0.5 text-xs font-semibold text-salbei">
                    Aktuell
                  </span>
                )}
              </div>
              <h2 className="mt-3 text-base font-semibold text-anthrazit">{doc.title}</h2>
              <p className="mt-1 text-sm text-anthrazit/60">{doc.meta}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {doc.tags.map((t) => (
                  <span key={t} className="text-xs text-anthrazit/50">
                    #{t}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="mt-4 self-start rounded-lg bg-nwks-rot px-3 py-2 text-sm font-semibold text-white hover:bg-nwks-rot/90"
              >
                Herunterladen
              </button>
            </article>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-6 text-sm text-anthrazit/60">Keine Dokumente gefunden.</p>
        )}
      </section>
    </div>
  )
}
