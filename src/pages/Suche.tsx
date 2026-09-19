import { useMemo, useState } from 'react'
import { hoefe, hofFilterOptions, hofsucheHinweis } from '../data/demo'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import CantonOverview from '../components/ui/CantonOverview'
import { Badge, EmptyState, FilterChip, TextCta } from '../components/ui/primitives'
import PageCta from '../components/ui/PageCta'

export default function Suche() {
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
    <div>
      <Breadcrumb items={[{ label: 'Start', to: '/' }, { label: 'Hofsuche' }]} />
      <PageHero
        variant="sand"
        eyebrow="Hofsuche"
        title="Hof- oder Fachperson finden"
        lead="Öffentlich sichtbare Betriebe aus der NWKS-Linkliste, den Verkaufslisten und der Service-Seite – mit Region, Website und Filter. Kein vollständiges Mitgliederverzeichnis."
      />

      <Section>
        <Card>
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
          {hofsucheHinweis.text}{' '}
          <TextCta href={hofsucheHinweis.moreUrl}>Linkliste</TextCta>
          {' · '}
          <TextCta href={hofsucheHinweis.serviceUrl}>Service & Zubehör</TextCta>
        </p>
      </Section>

      <PageCta
        title="Tiere aus öffentlichen Listen"
        description="Die Hofsuche zeigt sichtbare Betriebe – kein privates Mitgliederverzeichnis. Verkaufsinserate liegen separat vor."
        primary={{ label: 'Zum Tierverkauf', to: '/tierverkauf' }}
        secondary={{ label: 'Mitglied werden', to: '/mein-nwks' }}
      />
    </div>
  )
}
