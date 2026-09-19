import {
  gesundheitThemen,
  haltungThemen,
  tgiHinweis,
  wissenArtikel,
  neueinsteigerSchritte,
  downloads,
} from '../data/demo'
import { NWKS_HALTUNG, NWKS_NEUEINSTEIGER } from '../data/sources'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import { Badge, PrimaryCta, SecondaryCta, TextCta } from '../components/ui/primitives'
import PageCta from '../components/ui/PageCta'

const haltungDownloads = downloads.filter((doc) =>
  doc.tags.some((tag) => ['Haltung', 'Gesundheit', 'TGI'].includes(tag)),
).slice(0, 6)

export default function HaltungGesundheit() {
  return (
    <div>
      <PageHero
        variant="salbei"
        eyebrow="Haltung & Gesundheit"
        title="Lamas und Alpakas richtig halten"
        lead={
          <>
            <blockquote className="border-l-4 border-salbei pl-4 text-lg text-anthrazit/80">
              Gute Haltung beginnt mit Wissen über die Bedürfnisse der Tiere.
            </blockquote>
            <p className="mt-4">
              Kurzfassungen aus den öffentlichen NWKS-Seiten Haltung/Pflege, Gesundheit, Alpaka, Lama
              und Neueinsteiger. Ausführliche Texte und PDFs öffnen auf nwks.ch.
            </p>
          </>
        }
        actions={
          <>
            <PrimaryCta href={NWKS_NEUEINSTEIGER}>Tipps für Neueinsteiger</PrimaryCta>
            <SecondaryCta href={NWKS_HALTUNG}>Haltungsseite nwks.ch</SecondaryCta>
          </>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Einstieg"
          title="Checkliste für Neueinsteiger"
          description="Bevor Farbe oder Geschlecht feststehen: Zucht oder Hobby klären, Tiere ansehen, Unterlagen mitnehmen."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {neueinsteigerSchritte.map((step, index) => (
            <Card key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-salbei">Schritt {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-anthrazit">{step.title}</h3>
              <p className="mt-2 text-sm text-anthrazit/70">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          title="Themen-Navigation"
          description="Praxiswissen zu Weide, Stall, Fütterung, Pflege, Gesundheit und Recht."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {haltungThemen.map((t) => (
            <Card key={t.title} hover>
              <span className="text-2xl" aria-hidden>
                {t.icon}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-anthrazit">{t.title}</h3>
              <p className="mt-1 text-sm font-medium text-anthrazit/55">{t.topics}</p>
              <p className="mt-2 flex-1 text-sm text-anthrazit/75">{t.description}</p>
              <TextCta href={t.href} className="mt-4">
                Quelle auf nwks.ch →
              </TextCta>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Gesundheit im Überblick"
          description="Vorsorge, Parasiten, Impfungen und aktuelle Meldungen – mit Links zu NWKS und BGK."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gesundheitThemen.map((g) => (
            <Card key={g.title}>
              <h3 className="font-semibold text-anthrazit">{g.title}</h3>
              <p className="mt-2 flex-1 text-sm text-anthrazit/65">{g.description}</p>
              <TextCta href={g.href} className="mt-3">
                Weiterlesen →
              </TextCta>
            </Card>
          ))}
        </div>
        <Card variant="alert" className="mt-8">
          <p className="text-sm font-semibold text-nwks-rot">Aktuelle Tiergesundheitsmeldung</p>
          <p className="mt-2 text-sm text-anthrazit/80">
            Die Blauzungenkrankheit ist in der Schweiz angekommen (BTV 8, 4 und BTV 3). BTV 3 gilt als
            gefährlicher. Der BGK empfiehlt die Impfung für alle empfänglichen Tierarten; durchgeführt
            wird sie durch die Bestandestierärzte.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <TextCta href="https://www.nwks.ch/blauzungenkrankheit">NWKS-Seite Blauzunge →</TextCta>
            <TextCta to="/downloads">Vortrag Infotreffen 2025 →</TextCta>
          </div>
        </Card>
      </Section>

      <Section tone="sand">
        <SectionHeading
          title="Tiere kennenlernen"
          description="Alpaka, Lama, Nutzung und TGI – kompakt aus den Fachseiten des Verbands."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {wissenArtikel.map((a) => (
            <Card key={a.title}>
              <h3 className="text-lg font-semibold text-anthrazit">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm text-anthrazit/70">{a.excerpt}</p>
              <TextCta href={a.href} className="mt-3">
                Artikel auf nwks.ch →
              </TextCta>
            </Card>
          ))}
        </div>
        <Card variant="salbei" className="mt-8">
          <h3 className="font-semibold text-anthrazit">{tgiHinweis.title}</h3>
          <p className="mt-2 text-sm text-anthrazit/70">{tgiHinweis.description}</p>
          <TextCta href={tgiHinweis.href} className="mt-3">
            TGI-Seite des NWKS →
          </TextCta>
        </Card>
      </Section>

      <Section>
        <SectionHeading
          title="Merkblätter & Formulare"
          description="Öffentliche PDFs zu Haltung, Tierschutz, TGI und Gesundheit."
          action={<TextCta to="/downloads">Alle Downloads →</TextCta>}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {haltungDownloads.map((doc) => (
            <Card key={doc.id}>
              <div className="flex items-center justify-between gap-2">
                <Badge>{doc.type}</Badge>
                {doc.current ? <Badge tone="salbei">Aktuell</Badge> : <Badge tone="muted">Archiv</Badge>}
              </div>
              <h3 className="mt-3 font-semibold text-anthrazit">{doc.title}</h3>
              <p className="mt-1 text-sm text-anthrazit/60">{doc.meta}</p>
              <TextCta href={doc.url} className="mt-3">
                Öffnen →
              </TextCta>
            </Card>
          ))}
        </div>
      </Section>

      <PageCta
        title="Tiere suchen oder einen Hof besuchen"
        description="Öffentliche Verkaufslisten und Höfe aus der NWKS-Linkliste – ohne erfundene Inserate."
        primary={{ label: 'Hofsuche', to: '/suche' }}
        secondary={{ label: 'Tierverkauf', to: '/tierverkauf' }}
      />
    </div>
  )
}
