import { useMemo, useState } from 'react'
import { tiere, tierverkaufFilter, tierverkaufHinweis } from '../data/demo'
import { TIERVERKAUF_ALPAKAS_PDF, TIERVERKAUF_LAMAS_PDF } from '../data/sources'
import ExternalLink from '../components/ExternalLink'

type Filters = {
  tierart: string
  geschlecht: string
  kanton: string
  zuchtstatus: string
  herdebuch: string
}

const empty: Filters = {
  tierart: '',
  geschlecht: '',
  kanton: '',
  zuchtstatus: '',
  herdebuch: '',
}

export default function Tierverkauf() {
  const [filters, setFilters] = useState<Filters>(empty)

  const set = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const list = useMemo(() => {
    return tiere.filter((t) => {
      if (filters.tierart && t.tierart !== filters.tierart) return false
      if (filters.geschlecht && t.geschlecht !== filters.geschlecht) return false
      if (filters.kanton && t.kanton !== filters.kanton) return false
      if (filters.zuchtstatus && t.zuchtstatus !== filters.zuchtstatus) return false
      if (filters.herdebuch && t.herdebuch !== filters.herdebuch) return false
      return true
    })
  }, [filters])

  return (
    <div>
      <section className="border-b border-sand bg-gradient-to-r from-anthrazit to-anthrazit/90 text-warmweiss">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Tiere finden</h1>
          <p className="mt-2 max-w-2xl text-warmweiss/75">
            Öffentliche Inserate der NWKS-Verkaufslisten. Der Verband stellt die Plattform bereit –
            Kaufvertrag und Verantwortung liegen beim jeweiligen Anbieter.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <ExternalLink href={TIERVERKAUF_ALPAKAS_PDF} className="underline decoration-sand/60 hover:text-white">
              Verkaufsliste Alpakas (PDF)
            </ExternalLink>
            <ExternalLink href={TIERVERKAUF_LAMAS_PDF} className="underline decoration-sand/60 hover:text-white">
              Verkaufsliste Lamas (PDF)
            </ExternalLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-anthrazit">Filter</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <Select
              label="Tierart"
              value={filters.tierart}
              onChange={(v) => set('tierart', v)}
              options={tierverkaufFilter.tierarten}
            />
            <Select
              label="Geschlecht"
              value={filters.geschlecht}
              onChange={(v) => set('geschlecht', v)}
              options={tierverkaufFilter.geschlechter}
            />
            <Select
              label="Kanton"
              value={filters.kanton}
              onChange={(v) => set('kanton', v)}
              options={tierverkaufFilter.kantone}
            />
            <Select
              label="Zuchtstatus"
              value={filters.zuchtstatus}
              onChange={(v) => set('zuchtstatus', v)}
              options={tierverkaufFilter.zuchtstatus}
            />
            <Select
              label="Herdebuch"
              value={filters.herdebuch}
              onChange={(v) => set('herdebuch', v)}
              options={tierverkaufFilter.herdebuch}
            />
          </div>
          <button
            type="button"
            onClick={() => setFilters(empty)}
            className="mt-3 text-sm font-medium text-nwks-rot hover:underline"
          >
            Filter zurücksetzen
          </button>
        </div>

        <p className="mt-6 text-sm text-anthrazit/70">{list.length} Inserate gefunden</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tier) => (
            <article
              key={tier.id}
              className="overflow-hidden rounded-2xl border border-sand bg-warmweiss shadow-sm"
            >
              <div
                className="flex h-28 items-end bg-gradient-to-br from-salbei/40 via-sand to-anthrazit/30 p-3"
                aria-hidden
              >
                <span className="rounded bg-warmweiss/90 px-2 py-0.5 text-xs font-semibold text-anthrazit">
                  {tier.tierart}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-lg font-semibold text-anthrazit">{tier.name}</h2>
                  {tier.isDemo && (
                    <span className="rounded-full bg-sand px-2 py-0.5 text-xs font-semibold text-anthrazit/70">
                      Demo
                    </span>
                  )}
                </div>
                <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-sm text-anthrazit/70">
                  <div>
                    <dt className="inline text-anthrazit/45">Geschlecht: </dt>
                    <dd className="inline">{tier.geschlecht}</dd>
                  </div>
                  <div>
                    <dt className="inline text-anthrazit/45">Alter: </dt>
                    <dd className="inline">{tier.alter}</dd>
                  </div>
                  <div>
                    <dt className="inline text-anthrazit/45">Kanton: </dt>
                    <dd className="inline">{tier.kanton}</dd>
                  </div>
                  <div>
                    <dt className="inline text-anthrazit/45">Status: </dt>
                    <dd className="inline">{tier.zuchtstatus}</dd>
                  </div>
                </dl>
                <p className="mt-2 text-xs text-anthrazit/55">{tier.herdebuch}</p>
                {tier.notes && <p className="mt-2 text-sm text-anthrazit/70">{tier.notes}</p>}
                <p className="mt-3 text-sm font-medium text-anthrazit">{tier.preis}</p>
                <p className="mt-1 text-xs text-anthrazit/55">Anbieter: {tier.anbieter}</p>
                <div className="mt-4 flex flex-col gap-2">
                  {tier.website && (
                    <ExternalLink
                      href={tier.website}
                      className="w-full rounded-lg border border-anthrazit/15 py-2 text-center text-sm font-semibold text-anthrazit transition hover:bg-sand/50"
                    >
                      Anbieter-Website
                    </ExternalLink>
                  )}
                  {tier.url && (
                    <ExternalLink
                      href={tier.url}
                      className="w-full rounded-lg bg-nwks-rot py-2 text-center text-sm font-semibold text-white hover:bg-nwks-rot/90"
                    >
                      Inserat in der NWKS-Liste
                    </ExternalLink>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-6 rounded-xl bg-sand/40 p-4 text-sm text-anthrazit/70">
            Keine Tiere mit diesen Filtern. Bitte Filter anpassen.
          </p>
        )}

        <p className="mt-8 text-xs leading-relaxed text-anthrazit/55">{tierverkaufHinweis}</p>
      </section>
    </div>
  )
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <label className="block text-sm">
      <span className="text-anthrazit/60">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-sand bg-warmweiss px-3 py-2 text-anthrazit"
      >
        <option value="">Alle</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}
