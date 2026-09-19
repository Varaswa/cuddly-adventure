import { Link } from 'react-router-dom'
import {
  interesseCards,
  tileNav,
  aktuellCards,
  veranstaltungen,
  vereinFakten,
  mitgliedVorteile,
} from '../data/demo'
import ExternalLink from '../components/ExternalLink'
import PwaInstallHint from '../components/PwaInstallHint'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import { Badge, GhostOnDarkCta, PrimaryCta, TextCta } from '../components/ui/primitives'
import PageCta from '../components/ui/PageCta'

export default function Startseite() {
  const upcoming = veranstaltungen.filter((event) => !event.past).slice(0, 3)

  return (
    <div>
      <PwaInstallHint />
      <PageHero
        variant="dark"
        size="lg"
        eyebrow="Neuweltkameliden Schweiz"
        title="Für gesunde Tiere. Für verantwortungsvolle Haltung. Für eine starke Gemeinschaft."
        lead="Fachwissen, Service und Vernetzung für Halterinnen, Züchter und alle, die Lamas und Alpakas kennenlernen möchten."
        actions={
          <>
            <PrimaryCta to="/mein-nwks">Mitglied werden</PrimaryCta>
            <GhostOnDarkCta to="/suche">Hof finden</GhostOnDarkCta>
          </>
        }
      />

      <Section>
        <SectionHeading
          title="Was möchtest du wissen?"
          description="Drei Einstiege – unabhängig davon, ob du neu bist, bereits hältst oder züchtest."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interesseCards.map((card) => (
            <Link
              key={card.id}
              to={card.to}
              className={`group rounded-2xl border border-sand p-6 transition hover:shadow-md ${
                card.accent === 'salbei'
                  ? 'bg-salbei/10 hover:border-salbei/40'
                  : card.accent === 'sand'
                    ? 'bg-sand/50 hover:border-sand'
                    : 'bg-anthrazit text-warmweiss hover:border-anthrazit'
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  card.accent === 'anthrazit' ? 'text-warmweiss' : 'text-anthrazit'
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  card.accent === 'anthrazit' ? 'text-warmweiss/75' : 'text-anthrazit/70'
                }`}
              >
                {card.description}
              </p>
              <span
                className={`mt-4 inline-block text-sm font-semibold ${
                  card.accent === 'anthrazit' ? 'text-sand' : 'text-nwks-rot'
                } group-hover:underline`}
              >
                Weiter →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading title="Was suchst du?" description="Direkt zu den meistgenutzten Bereichen der App." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tileNav.map((tile) => (
            <Link
              key={tile.title}
              to={tile.to}
              className="flex flex-col rounded-2xl border border-sand bg-warmweiss p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-3xl" aria-hidden>
                {tile.icon}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-anthrazit">{tile.title}</h3>
              <p className="mt-1 text-sm text-anthrazit/65">{tile.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Aktuell"
          description="Öffentliche Hinweise von nwks.ch, Infobriefen und dem Tätigkeitsprogramm."
          action={
            <TextCta to="/veranstaltungen">Alle Termine →</TextCta>
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aktuellCards.map((card) => {
            const inner = (
              <>
                <div className="flex items-center justify-between gap-2">
                  <Badge tone="salbei">{card.category}</Badge>
                  <time className="text-xs text-anthrazit/50">{card.date}</time>
                </div>
                <h3 className="mt-3 text-base font-semibold text-anthrazit">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm text-anthrazit/70">{card.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-nwks-rot">Details →</span>
              </>
            )
            const className =
              'flex flex-col rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm transition hover:shadow-md'
            return card.href ? (
              <ExternalLink key={card.id} href={card.href} className={className}>
                {inner}
              </ExternalLink>
            ) : (
              <Link key={card.id} to={card.to} className={className}>
                {inner}
              </Link>
            )
          })}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Kalender"
          title="Nächste Termine"
          description="Aus dem Tätigkeitsprogramm 2026 und dem Ausblick 2027."
          action={<TextCta to="/veranstaltungen">Kalender öffnen →</TextCta>}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {upcoming.map((event) => (
            <Card key={event.id} hover>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="salbei">{event.type}</Badge>
                {event.open ? <Badge tone="rot">Im Programm</Badge> : <Badge tone="muted">Vormerken</Badge>}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-anthrazit">{event.title}</h3>
              <p className="mt-2 flex-1 text-sm text-anthrazit/70">{event.description}</p>
              <p className="mt-4 text-sm text-anthrazit/55">
                {event.date} · {event.location}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Verband"
          title="Anerkannte Zuchtorganisation seit 1995"
          description={vereinFakten.anerkennung}
          action={<TextCta href={vereinFakten.href}>Verein auf nwks.ch →</TextCta>}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mitgliedVorteile.map((item) => (
            <Card key={item.title} variant="sand">
              <h3 className="font-semibold text-anthrazit">{item.title}</h3>
              <p className="mt-2 text-sm text-anthrazit/70">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <PageCta
        title="Mitmachen im NWKS"
        description="Einzelmitgliedschaft Fr. 100.–, Doppel Fr. 160.–, Passiv Fr. 80.– (Preisliste 2026). Aufnahme über die Geschäftsstelle."
        primary={{ label: 'Mitgliedschaft & Kontakt', to: '/mein-nwks' }}
        secondary={{ label: 'Dokumente öffnen', to: '/downloads' }}
      />
    </div>
  )
}
