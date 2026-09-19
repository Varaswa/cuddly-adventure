import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { hoefe, hofFilterOptions, hofsucheHinweis, tiere, tierverkaufFilter, tierverkaufHinweis } from '../data/demo'
import { TIERVERKAUF_ALPAKAS_PDF, TIERVERKAUF_LAMAS_PDF, NWKS_TIERVERKAUF } from '../data/sources'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import CantonOverview from '../components/ui/CantonOverview'
import { Badge, EmptyState, FilterChip, PrimaryCta, SecondaryCta, TextCta } from '../components/ui/primitives'
import PageCta from '../components/ui/PageCta'
import { asset } from '../lib/assets'

type FindenTab = 'hoefe' | 'tiere'

type TierFilters = {
  tierart: string
  geschlecht: string
  kanton: string
  zuchtstatus: string
  herdebuch: string
}

const emptyTierFilters: TierFilters = {
  tierart: '',
  geschlecht: '',
  kanton: '',
  zuchtstatus: '',
  herdebuch: '',
}

function tabFromHash(hash: string): FindenTab {
  return hash === '#tiere' ? 'tiere' : 'hoefe'
}

export default function Finden() {
  const { hash } = useLocation()
  const navigate = useNavigate()
  const tab = tabFromHash(hash)

  const setTab = (next: FindenTab) => {
    navigate({ pathname: '/finden', hash: `#${next}` }, { replace: true })
  }

  useEffect(() => {
    if (hash !== '#hoefe' && hash !== '#tiere') {
      navigate({ pathname: '/finden', hash: '#hoefe' }, { replace: true })
    }
  }, [hash, navigate])

  return (
    <div>
      <Breadcrumb items={[{ label: 'Start', to: '/' }, { label: 'Finden' }]} />
      <PageHero
        layout="split"
        image={tab === 'tiere' ? 'heroes/tierverkauf.jpg' : 'heroes/hofsuche.jpg'}
        imageAlt={
          tab === 'tiere'
            ? 'Alpakas unterschiedlicher Farbe an der Heuraufe'
            : 'Lamas als Herdenschutztiere in den Schweizer Alpen'
        }
        objectPosition={tab === 'tiere' ? 'center 70%' : 'center 40%'}
        accent={tab === 'tiere' ? 'sand' : 'naturgruen'}
        eyebrow="Finden"
        title="Höfe und Tiere finden"
        lead="Öffentlich sichtbare Betriebe und Verkaufsinserate – in zwei Bereichen, ohne privates Mitgliederverzeichnis."
        actions={
          tab === 'tiere' ? (
            <>
              <PrimaryCta href={TIERVERKAUF_ALPAKAS_PDF}>Verkaufsliste Alpakas (PDF)</PrimaryCta>
              <SecondaryCta href={TIERVERKAUF_LAMAS_PDF}>Verkaufsliste Lamas (PDF)</SecondaryCta>
            </>
          ) : undefined
        }
      />

      <Section>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Finden">
          <TabButton label="Höfe" active={tab === 'hoefe'} onClick={() => setTab('hoefe')} />
          <TabButton label="Tiere" active={tab === 'tiere'} onClick={() => setTab('tiere')} />
        </div>

        {tab === 'hoefe' ? <HofePanel /> : <TierePanel />}
      </Section>

      <PageCta
        title="Haltung kennen, bevor man kauft"
        description="Haltungsregeln und Gesundheitswissen helfen bei der Auswahl – unabhängig davon, ob ein Hof oder ein Inserat gesucht wird."
        primary={{ label: 'Haltung & Gesundheit', to: '/haltung-gesundheit' }}
        secondary={{ label: 'Mitglied werden', to: '/mein-nwks' }}
      />
    </div>
  )
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        active ? 'bg-anthrazit text-warmweiss' : 'bg-sand text-anthrazit/75 hover:bg-sand/80'
      }`}
    >
      {label}
    </button>
  )
}

function HofePanel() {
  const [query, setQuery] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [radius, setRadius] = useState(200)
  const [kanton, setKanton] = useState<string | null>(null)

  const toggle = (tag: string) => {
    setActiveFilters((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const cantonCounts = useMemo(() => {
    return hoefe.reduce<Record<string, number>>((acc, hof) => {
      if (hof.kanton) acc[hof.kanton] = (acc[hof.kanton] ?? 0) + 1
      return acc
    }, {})
  }, [])

  const results = useMemo(() => {
    return hoefe.filter((hof) => {
      if (kanton && hof.kanton !== kanton) return false
      if (hof.distanceKm !== undefined && hof.distanceKm > radius) return false
      const q = query.trim().toLowerCase()
      if (q) {
        const hay =
          `${hof.name} ${hof.ort} ${hof.plz} ${hof.kanton} ${hof.description} ${hof.tags.join(' ')} ${hof.website ?? ''}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      if (activeFilters.length === 0) return true
      return activeFilters.every((f) => hof.tags.includes(f))
    })
  }, [query, activeFilters, radius, kanton])

  const withWebsite = results.filter((hof) => hof.website).length

  return (
    <div className="mt-8">
      <SectionHeading
        title="Höfe"
        description="Öffentlich sichtbare Betriebe aus der NWKS-Linkliste, den Verkaufslisten und der Service-Seite."
      />

      <Card className="mt-8">
        <label htmlFor="plz" className="block text-sm font-medium text-anthrazit">
          PLZ / Ort / Name
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id="plz"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="z. B. Dietlikon, 8305 oder Sense"
            className="w-full flex-1 rounded-lg border border-sand bg-warmweiss px-4 py-2.5 text-anthrazit outline-none ring-salbei focus:ring-2"
          />
          <div className="flex items-center gap-2">
            <label htmlFor="radius" className="whitespace-nowrap text-sm text-anthrazit/70">
              Umkreis ab Bern
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

        <p className="mt-4 text-sm font-medium text-anthrazit">Angebot</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {hofFilterOptions.map((opt) => (
            <FilterChip
              key={opt}
              label={opt}
              active={activeFilters.includes(opt)}
              onClick={() => toggle(opt)}
              tone="salbei"
            />
          ))}
        </div>
      </Card>

      <div className="mt-8">
        <CantonOverview counts={cantonCounts} selected={kanton} onSelect={setKanton} />
      </div>

      <div className="mt-10">
        <SectionHeading
          title={`${results.length} Anbieter im Umkreis von ${radius} km`}
          description={`${withWebsite} mit öffentlicher Website · Betriebe ohne Ortsdistanz werden immer angezeigt${kanton ? ` · Filter ${kanton}` : ''}.`}
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((hof) => (
          <Card key={hof.id} hover>
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-lg font-semibold text-anthrazit">{hof.name}</h2>
              {hof.isDemo && <Badge tone="demo">Demo</Badge>}
            </div>
            <p className="mt-1 text-sm text-anthrazit/60">
              {hof.plz ? `${hof.plz} ` : ''}
              {hof.ort}
              {hof.kanton ? ` · ${hof.kanton}` : ''}
              {hof.distanceKm !== undefined ? ` · ca. ${hof.distanceKm} km` : ''}
            </p>
            <p className="mt-2 flex-1 text-sm text-anthrazit/75">{hof.description}</p>
            {hof.contact && <p className="mt-2 text-xs text-anthrazit/55">{hof.contact}</p>}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {hof.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            {hof.website ? (
              <TextCta href={hof.website} className="mt-4">
                Betrieb ansehen →
              </TextCta>
            ) : (
              <p className="mt-4 text-xs text-anthrazit/45">Keine öffentliche Website hinterlegt</p>
            )}
          </Card>
        ))}
      </div>

      {results.length === 0 && (
        <EmptyState
          title="Keine Treffer."
          description="Filter, Kanton oder Umkreis anpassen. Einige Betriebe haben keine Distanzangabe."
        />
      )}

      <p className="mt-8 text-xs leading-relaxed text-anthrazit/55">
        {hofsucheHinweis.text} <TextCta href={hofsucheHinweis.moreUrl}>Linkliste</TextCta>
        {' · '}
        <TextCta href={hofsucheHinweis.serviceUrl}>Service & Zubehör</TextCta>
      </p>
    </div>
  )
}

function TierePanel() {
  const [filters, setFilters] = useState<TierFilters>(emptyTierFilters)

  const set = (key: keyof TierFilters, value: string) => {
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
    <div className="mt-8">
      <SectionHeading
        title="Tiere"
        description="Öffentliche Inserate der NWKS-Verkaufslisten. Kaufvertrag und Verantwortung liegen beim jeweiligen Anbieter."
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

      <Card className="mt-8">
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
          onClick={() => setFilters(emptyTierFilters)}
          className="mt-3 text-sm font-medium text-nwks-rot hover:underline"
        >
          Filter zurücksetzen
        </button>
      </Card>

      <p className="mt-8 text-sm font-medium text-anthrazit">{list.length} Inserate gefunden</p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((tier, index) => (
          <article key={tier.id} className="overflow-hidden rounded-2xl border border-sand bg-warmweiss shadow-sm">
            <div className="relative h-36 overflow-hidden">
              <img
                src={asset('heroes/tierverkauf.jpg')}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: `${20 + (index % 5) * 15}% ${55 + (index % 3) * 10}%` }}
              />
              <span className="absolute bottom-3 left-3 rounded bg-warmweiss/95 px-2 py-0.5 text-xs font-semibold text-anthrazit">
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

      {list.length === 0 && <EmptyState title="Keine Tiere mit diesen Filtern." description="Bitte Filter anpassen." />}

      <p className="mt-8 text-xs leading-relaxed text-anthrazit/55">
        {tierverkaufHinweis} <TextCta href={NWKS_TIERVERKAUF}>nwks.ch/tierverkauf</TextCta>
      </p>
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
