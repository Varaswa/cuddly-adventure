import { useMemo, useState } from 'react'
import { tiere, tierverkaufFilter, tierverkaufHinweis } from '../data/demo'
import { TIERVERKAUF_ALPAKAS_PDF, TIERVERKAUF_LAMAS_PDF, NWKS_TIERVERKAUF } from '../data/sources'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import { Badge, EmptyState, GhostOnDarkCta, PrimaryCta, SecondaryCta, TextCta } from '../components/ui/primitives'
import PageCta from '../components/ui/PageCta'

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
      <PageHero
        variant="dark"
        eyebrow="Verkaufslisten"
        title="Tiere finden"
        lead="Öffentliche Inserate der NWKS-Verkaufslisten. Der Verband stellt die Plattform bereit – Kaufvertrag und Verantwortung liegen beim jeweiligen Anbieter."
        actions={
          <>
            <PrimaryCta href={TIERVERKAUF_ALPAKAS_PDF}>Verkaufsliste Alpakas (PDF)</PrimaryCta>
            <GhostOnDarkCta href={TIERVERKAUF_LAMAS_PDF}>Verkaufsliste Lamas (PDF)</GhostOnDarkCta>
          </>
        }
      />

      <Section>
        <SectionHeading
          title="So funktioniert die Liste"
          description="Zusammenfassungen der öffentlichen PDFs (Alpakas 09.07.2026, Lamas 27.07.2026). Keine erfundenen Tiernamen."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card variant="sand">
            <h3 className="font-semibold text-anthrazit">1. Filtern</h3>
            <p className="mt-2 text-sm text-anthrazit/70">
              Nach Tierart, Geschlecht, Kanton, Zuchtstatus und Herdebuch-Eintrag eingrenzen.
            </p>
          </Card>
          <Card variant="sand">
            <h3 className="font-semibold text-anthrazit">2. Original-PDF prüfen</h3>
            <p className="mt-2 text-sm text-anthrazit/70">
              Jede Karte verlinkt die aktuelle NWKS-Liste. Einträge werden laut Liste nach einem Jahr gelöscht.
            </p>
          </Card>
          <Card variant="sand">
            <h3 className="font-semibold text-anthrazit">3. Anbieter kontaktieren</h3>
            <p className="mt-2 text-sm text-anthrazit/70">
              Kaufvertrag und Verantwortung liegen beim Hof. Meldungen neuer Inserate: sekretariat@nwks.ch.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="sand">
        <Card>
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
        </Card>

        <p className="mt-8 text-sm font-medium text-anthrazit">{list.length} Inserate gefunden</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tier) => (
            <article key={tier.id} className="overflow-hidden rounded-2xl border border-sand bg-warmweiss shadow-sm">
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
                  {tier.isDemo && <Badge tone="demo">Demo</Badge>}
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
                    <SecondaryCta href={tier.website} className="w-full px-3 py-2">
                      Anbieter-Website
                    </SecondaryCta>
                  )}
                  {tier.url && (
                    <PrimaryCta href={tier.url} className="w-full px-3 py-2">
                      Inserat in der NWKS-Liste
                    </PrimaryCta>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {list.length === 0 && (
          <EmptyState title="Keine Tiere mit diesen Filtern." description="Bitte Filter anpassen." />
        )}

        <p className="mt-8 text-xs leading-relaxed text-anthrazit/55">
          {tierverkaufHinweis}{' '}
          <TextCta href={NWKS_TIERVERKAUF}>nwks.ch/tierverkauf</TextCta>
        </p>
      </Section>

      <PageCta
        title="Höfe in der Nähe ansehen"
        description="Viele Inserate gehören zu öffentlich gelisteten Betrieben. Die Hofsuche zeigt Websites und Angebote."
        primary={{ label: 'Hofsuche', to: '/suche' }}
        secondary={{ label: 'Haltung & Gesundheit', to: '/haltung-gesundheit' }}
      />
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
