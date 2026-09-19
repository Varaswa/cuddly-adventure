import { useMemo, useState } from 'react'
import { veranstaltungen, tgiHinweis } from '../data/demo'
import { NWKS_VERANSTALTUNGEN, SEKRETARIAT_EMAIL, TAETIGKEITSPROGRAMM_PDF } from '../data/sources'
import PageHero from '../components/ui/PageHero'
import Breadcrumb from '../components/ui/Breadcrumb'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import { Badge, EmptyState, FilterChip, PrimaryCta, SecondaryCta, TextCta } from '../components/ui/primitives'
import PageCta from '../components/ui/PageCta'
import ExternalLink from '../components/ExternalLink'

const types = ['Alle', 'Tagung', 'Kurs', 'Show', 'TGI', 'Messe'] as const

export default function Veranstaltungen() {
  const [filter, setFilter] = useState<(typeof types)[number]>('Alle')

  const list = useMemo(
    () => (filter === 'Alle' ? veranstaltungen : veranstaltungen.filter((v) => v.type === filter)),
    [filter],
  )
  const upcoming = list.filter((event) => !event.past)
  const past = list.filter((event) => event.past)

  return (
    <div>
      <Breadcrumb items={[{ label: 'Start', to: '/' }, { label: 'Veranstaltungen' }]} />
      <PageHero
        layout="frame"
        image="heroes/veranstaltungen.jpg"
        imageAlt="Alpakas auf einer Weide"
        objectPosition="center"
        accent="sand"
        eyebrow="Aktivitäten & TGI"
        title="Veranstaltungen"
        lead="Termine aus dem offiziellen Tätigkeitsprogramm 2026, dem Infobrief 1/2026 und der TGI-Seite. Eigene Anlässe können an sekretariat@nwks.ch gemeldet werden."
        actions={
          <>
            <PrimaryCta href={TAETIGKEITSPROGRAMM_PDF}>Tätigkeitsprogramm 2026</PrimaryCta>
            <SecondaryCta href={NWKS_VERANSTALTUNGEN}>Kalender auf nwks.ch</SecondaryCta>
          </>
        }
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <FilterChip key={t} label={t} active={filter === t} onClick={() => setFilter(t)} />
          ))}
        </div>

        <SectionHeading
          title="Im Programm"
          description="Kommende und vorgemerkte Termine aus den öffentlichen Quellen."
        />
        <ul className="mt-8 space-y-4">
          {upcoming.map((event) => (
            <EventRow key={event.id} event={event} />
          ))}
        </ul>
        {upcoming.length === 0 && (
          <EmptyState
            title="Keine kommenden Termine in dieser Kategorie."
            description="Filter wechseln oder das Tätigkeitsprogramm als PDF öffnen."
          />
        )}
      </Section>

      <Section tone="sand">
        <SectionHeading
          title="Bereits durchgeführt"
          description="Shows, GV, Trekking und TGI-Anlässe 2026 – zur Einordnung des Jahresprogramms."
        />
        <ul className="mt-8 space-y-4">
          {past.map((event) => (
            <EventRow key={event.id} event={event} />
          ))}
        </ul>
        {past.length === 0 && list.length === 0 && (
          <EmptyState title="Keine Termine in dieser Kategorie." />
        )}
      </Section>

      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          <Card variant="salbei">
            <h2 className="text-lg font-semibold text-anthrazit">{tgiHinweis.title}</h2>
            <p className="mt-2 text-sm text-anthrazit/70">{tgiHinweis.description}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <TextCta to="/haltung-gesundheit/tgi">TGI im neuen Design →</TextCta>
              <TextCta href={tgiHinweis.href}>TGI-Seite des NWKS →</TextCta>
            </div>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-anthrazit">Eigenen Anlass melden</h2>
            <p className="mt-2 text-sm text-anthrazit/70">
              Höfe können öffentliche Anlässe an das Sekretariat senden. Der Verein nimmt sie ins
              Tätigkeitsprogramm bzw. in den Infobrief auf.
            </p>
            <TextCta href={`mailto:${SEKRETARIAT_EMAIL}`} className="mt-4">
              {SEKRETARIAT_EMAIL} →
            </TextCta>
          </Card>
        </div>
      </Section>

      <PageCta
        title="Weiterbildung und Vernetzung"
        description="Infotreffs, Beschreibungen und Shows gehören zum Vereinsjahr. Mitgliedschaft bringt Einladungen und NWKSoft-Anmeldung."
        primary={{ label: 'Mitglied werden', to: '/mein-nwks' }}
        secondary={{ label: 'Hof finden', to: '/finden' }}
      />
    </div>
  )
}

function EventRow({ event }: { event: (typeof veranstaltungen)[number] }) {
  return (
    <li className="rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm sm:flex sm:items-start sm:justify-between sm:gap-6">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="salbei">{event.type}</Badge>
          {event.isDemo ? (
            <Badge tone="demo">Demo</Badge>
          ) : event.past ? (
            <Badge tone="muted">Vergangen</Badge>
          ) : event.open ? (
            <Badge tone="rot">Im Programm</Badge>
          ) : (
            <Badge tone="muted">Vormerken</Badge>
          )}
        </div>
        <h2 className="mt-2 text-lg font-semibold text-anthrazit">{event.title}</h2>
        <p className="mt-1 text-sm text-anthrazit/70">{event.description}</p>
        <p className="mt-3 text-sm text-anthrazit/55">
          {event.date} · {event.time} · {event.location}
        </p>
      </div>
      {event.url ? (
        <ExternalLink
          href={event.url}
          className="mt-4 shrink-0 rounded-lg bg-nwks-rot px-4 py-2 text-center text-sm font-semibold text-white hover:bg-nwks-rot/90 sm:mt-0"
        >
          Details
        </ExternalLink>
      ) : (
        <span className="mt-4 shrink-0 rounded-lg bg-sand px-4 py-2 text-center text-sm font-semibold text-anthrazit/40 sm:mt-0">
          Kein Link
        </span>
      )}
    </li>
  )
}
