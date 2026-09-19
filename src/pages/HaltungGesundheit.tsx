import { downloads } from '../data/demo'
import { NWKS_HALTUNG, NWKS_NEUEINSTEIGER } from '../data/sources'
import { haltungHub } from '../content'
import SectionHub from '../components/ui/SectionHub'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import { Badge, PrimaryCta, SecondaryCta, TextCta } from '../components/ui/primitives'
import PageCta from '../components/ui/PageCta'

const haltungDownloads = downloads
  .filter((doc) => doc.tags.some((tag) => ['Haltung', 'Gesundheit', 'TGI'].includes(tag)))
  .slice(0, 6)

export default function HaltungGesundheit() {
  return (
    <div>
      <SectionHub
        hub={haltungHub}
        alert={{
          title: 'Information Blauzungenkrankheit',
          body: 'Die Blauzungenkrankheit ist in der Schweiz angekommen (BTV 8, 4 und BTV 3). Der BGK empfiehlt die Impfung für alle empfänglichen Tierarten; durchgeführt wird sie durch die Bestandestierärzte.',
          to: '/haltung-gesundheit/blauzungenkrankheit',
          cta: 'Zur Meldung →',
        }}
        actions={
          <>
            <PrimaryCta to="/haltung-gesundheit/haltungsbedingungen">Haltungsbedingungen</PrimaryCta>
            <SecondaryCta href={NWKS_HALTUNG}>Haltungsseite nwks.ch</SecondaryCta>
          </>
        }
      />

      <Section>
        <SectionHeading
          title="Merkblätter & Formulare"
          description="Öffentliche PDFs zu Haltung, Tierschutz, TGI und Gesundheit."
          action={<TextCta to="/downloads/haltung">Kategorie Haltung →</TextCta>}
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
        <p className="mt-6 text-sm text-anthrazit/60">
          Einstieg für Interessierte:{' '}
          <TextCta to="/haltung-gesundheit/neueinsteiger">Tipps für Neueinsteiger</TextCta>
          {' · '}
          <TextCta href={NWKS_NEUEINSTEIGER}>Original auf nwks.ch</TextCta>
        </p>
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
