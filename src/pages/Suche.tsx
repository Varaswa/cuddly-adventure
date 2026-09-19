import { useMemo, useState } from 'react'
import { hofFilterOptions, hoefe } from '../data/demo'

export default function Suche() {
  const [query, setQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [radius, setRadius] = useState(50)

  const toggle = (tag: string) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  const results = useMemo(() => {
    return hoefe.filter((hof) => {
      if (hof.distanceKm > radius) return false
      const q = query.trim().toLowerCase()
      if (q) {
        const hay = `${hof.name} ${hof.ort} ${hof.plz}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      if (activeFilters.length === 0) return true
      return activeFilters.every((f) => hof.tags.includes(f))
    })
  }, [query, activeFilters, radius])

  return (
    <div>
      <section className="border-b border-sand bg-gradient-to-r from-sand/60 to-salbei/15">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-anthrazit sm:text-4xl">
            Hof- oder Fachperson finden
          </h1>
          <p className="mt-2 text-anthrazit/70">
            Neuweltkameliden in der Schweiz – Suche nach PLZ oder Ort mit Filtern und Distanz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm">
          <label htmlFor="plz" className="block text-sm font-medium text-anthrazit">
            PLZ / Ort eingeben
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id="plz"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="z. B. Dietlikon oder 8305"
              className="w-full flex-1 rounded-lg border border-sand bg-warmweiss px-4 py-2.5 text-anthrazit outline-none ring-salbei focus:ring-2"
            />
            <div className="flex items-center gap-2">
              <label htmlFor="radius" className="whitespace-nowrap text-sm text-anthrazit/70">
                Umkreis
              </label>
              <select
                id="radius"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
                className="rounded-lg border border-sand bg-warmweiss px-3 py-2.5 text-sm"
              >
                <option value={25}>25 km</option>
                <option value={50}>50 km</option>
                <option value={100}>100 km</option>
                <option value={200}>200 km</option>
              </select>
            </div>
          </div>

          <p className="mt-4 text-sm font-medium text-anthrazit">Filter</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {hofFilterOptions.map((opt) => {
              const on = activeFilters.includes(opt)
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggle(opt)}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                    on ? 'bg-salbei text-white' : 'bg-sand/70 text-anthrazit hover:bg-sand'
                  }`}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-6 flex h-48 items-center justify-center rounded-2xl border border-dashed border-salbei/40 bg-salbei/10 sm:h-64">
          <div className="text-center">
            <p className="text-sm font-semibold text-salbei">Interaktive Schweizer Karte</p>
            <p className="mt-1 text-xs text-anthrazit/50">Platzhalter im Prototyp</p>
          </div>
        </div>

        <p className="mt-6 text-sm font-medium text-anthrazit">
          {results.length} Anbieter im Umkreis von {radius} km
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((hof) => (
            <article
              key={hof.id}
              className="rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-anthrazit">{hof.name}</h2>
              <p className="mt-1 text-sm text-anthrazit/60">
                {hof.ort} · {hof.distanceKm} km
              </p>
              <p className="mt-2 text-sm text-anthrazit/75">{hof.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {hof.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sand px-2 py-0.5 text-xs text-anthrazit/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="mt-4 text-sm font-semibold text-nwks-rot hover:underline"
              >
                Betrieb ansehen →
              </button>
            </article>
          ))}
        </div>

        {results.length === 0 && (
          <p className="mt-6 rounded-xl bg-sand/40 p-4 text-sm text-anthrazit/70">
            Keine Treffer. Filter oder Umkreis anpassen.
          </p>
        )}
      </section>
    </div>
  )
}
