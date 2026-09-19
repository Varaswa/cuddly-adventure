import { useMemo, useState } from 'react'
import { downloads, downloadTags, nwkLinks } from '../data/demo'
import { NWKS_DOWNLOADS, NWKS_LINKS } from '../data/sources'
import { downloadCategoryCards } from '../content'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import Breadcrumb from '../components/ui/Breadcrumb'
import HubCards from '../components/ui/HubCards'
import { Badge, EmptyState, FilterChip, PrimaryCta, SecondaryCta, TextCta } from '../components/ui/primitives'
import PageCta from '../components/ui/PageCta'

const featuredIds = [23, 21, 26, 30]

export default function Downloads() {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<string | null>(null)

  const featured = featuredIds
    .map((id) => downloads.find((doc) => doc.id === id))
    .filter((doc): doc is (typeof downloads)[number] => Boolean(doc))

  const list = useMemo(() => {
    return downloads.filter((doc) => {
      if (tag && !doc.tags.includes(tag)) return false
      const q = query.trim().toLowerCase()
      if (!q) return true
      return `${doc.title} ${doc.meta} ${doc.tags.join(' ')}`.toLowerCase().includes(q)
    })
  }, [query, tag])

  const groups = useMemo(() => {
    const map = new Map<string, typeof nwkLinks>()
    for (const link of nwkLinks) {
      const bucket = map.get(link.group) ?? []
      bucket.push(link)
      map.set(link.group, bucket)
    }
    return [...map.entries()]
  }, [])

  return (
    <div>
      <Breadcrumb items={[{ label: 'Start', to: '/' }, { label: 'Downloads' }]} />
      <PageHero
        layout="ribbon"
        image="heroes/downloads.jpg"
        imageAlt="Berglandschaft im Abendlicht"
        objectPosition="center 40%"
        accent="sand"
        eyebrow="Service"
        title="Dokumente & Formulare"
        lead="Öffentliche Dateien von nwks.ch – nach den Kategorien der Verbands-Downloadseite. PDFs öffnen auf nwks.ch, nicht im Prototyp."
        actions={
          <>
            <PrimaryCta href={NWKS_DOWNLOADS}>Downloads auf nwks.ch</PrimaryCta>
            <SecondaryCta href={NWKS_LINKS}>Linkliste</SecondaryCta>
          </>
        }
      />

      <Section>
        <SectionHeading
          title="Kategorien"
          description="Dieselben inhaltlichen Gruppen wie auf nwks.ch/downloads: Tierzucht, Herdebuch, Haltung, Verein, Infobriefe."
        />
        <HubCards cards={downloadCategoryCards} />
      </Section>

      <Section tone="sand">
        <SectionHeading
          title="Aktuell empfohlen"
          description="Preisliste, Statuten, Jahresprogramm und der letzte Infobrief."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((doc) => (
            <Card key={doc.id} variant="sand" hover>
              <Badge tone="salbei">Aktuell</Badge>
              <h3 className="mt-3 font-semibold text-anthrazit">{doc.title}</h3>
              <p className="mt-1 text-sm text-anthrazit/60">{doc.meta}</p>
              <TextCta href={doc.url} className="mt-3">
                Öffnen →
              </TextCta>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Gesamtkatalog" description={`${downloads.length} öffentliche Dateien mit Suche und Tags.`} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Dokument suchen …"
          className="mt-8 w-full max-w-xl rounded-lg border border-sand bg-warmweiss px-4 py-2.5 outline-none ring-salbei focus:ring-2"
          aria-label="Dokument suchen"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <FilterChip label="Alle" active={tag === null} onClick={() => setTag(null)} />
          {downloadTags.map((t) => (
            <FilterChip key={t} label={t} active={tag === t} onClick={() => setTag(t)} />
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((doc) => (
            <Card key={doc.id}>
              <div className="flex items-start justify-between gap-2">
                <Badge>{doc.type}</Badge>
                {doc.current ? <Badge tone="salbei">Aktuell</Badge> : <Badge tone="muted">Archiv</Badge>}
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
              <PrimaryCta href={doc.url} className="mt-4 self-start px-3 py-2">
                Öffnen
              </PrimaryCta>
            </Card>
          ))}
        </div>

        {list.length === 0 && (
          <EmptyState title="Keine Dokumente gefunden." description="Suche oder Tag zurücksetzen." />
        )}
      </Section>

      <Section tone="sand">
        <SectionHeading
          title="Nützliche Links"
          description="Auswahl aus der öffentlichen NWKS-Linkliste sowie Behörden- und Fachstellen."
        />
        <div className="mt-8 space-y-8">
          {groups.map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-salbei">{group}</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {links.map((link) => (
                  <Card key={link.url}>
                    <h4 className="font-semibold text-anthrazit">{link.title}</h4>
                    <p className="mt-1 flex-1 text-sm text-anthrazit/65">{link.description}</p>
                    <TextCta href={link.url} className="mt-2">
                      Öffnen →
                    </TextCta>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <PageCta
        title="Formulare allein reichen nicht?"
        description="Mitglieder arbeiten in NWKSoft. Beitritt, Statuten und Kontakt liegen unter Mein NWKS."
        primary={{ label: 'Mein NWKS', to: '/mein-nwks' }}
        secondary={{ label: 'Herdebuch', to: '/herdebuch' }}
      />
    </div>
  )
}
