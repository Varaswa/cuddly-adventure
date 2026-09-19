import { downloads } from '../data/demo'
import { NWKS_HALTUNG, NWKS_NEUEINSTEIGER } from '../data/sources'
import { haltungExtraGroups, haltungHub } from '../content'
import SectionHub from '../components/ui/SectionHub'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import HubCards from '../components/ui/HubCards'
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
        alertPlacement="top"
        actions={
          <>
            <PrimaryCta to="/haltung-gesundheit/haltungsbedingungen">Haltungsbedingungen</PrimaryCta>
            <SecondaryCta href={NWKS_HALTUNG}>Haltungsseite nwks.ch</SecondaryCta>
          </>
        }
      >
        <Section>
          <SectionHeading
            title="Haltung, Fütterung, Pflege"
            description="Kurzfassung der öffentlichen NWKS-Haltungsseite. Die ausführlichen Texte und PDFs liegen auf den Folgeseiten."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card variant="sand">
              <h3 className="font-semibold text-anthrazit">Haltung</h3>
              <p className="mt-2 text-sm text-anthrazit/70">
                Offenstall mit täglichem Weidegang, Unterstand 2&nbsp;m² pro Tier, Gehege mindestens 250&nbsp;m²
                für bis zu sechs Tiere. Herdentiere: mindestens zwei erwachsene Tiere, Sachkundenachweis, Chip
                für Crias.
              </p>
              <TextCta to="/haltung-gesundheit/haltungsbedingungen" className="mt-3">
                Haltungsbedingungen →
              </TextCta>
            </Card>
            <Card variant="sand">
              <h3 className="font-semibold text-anthrazit">Fütterung</h3>
              <p className="mt-2 text-sm text-anthrazit/70">
                Ganzjährig Heu und Mineralstoffe, jederzeit frisches Wasser. Weiden nicht zusätzlich düngen.
                Futterverbrauch etwa 1,8–2&nbsp;% Trockensubstanz vom Körpergewicht.
              </p>
              <TextCta to="/haltung-gesundheit/haltungsbedingungen" className="mt-3">
                Details zur Fütterung →
              </TextCta>
            </Card>
            <Card variant="sand">
              <h3 className="font-semibold text-anthrazit">Pflege</h3>
              <p className="mt-2 text-sm text-anthrazit/70">
                Parasitenüberwachung, Schur zur Hautkontrolle im Frühjahr, Zehennägel 1–2 Mal jährlich,
                keine Zahnfehlstellungen bei Zuchttieren.
              </p>
              <TextCta to="/haltung-gesundheit/haltungsbedingungen" className="mt-3">
                Details zur Pflege →
              </TextCta>
            </Card>
          </div>
        </Section>
      </SectionHub>

      {haltungExtraGroups.map((group, index) => (
        <Section key={group.title} tone={index % 2 === 0 ? 'sand' : 'plain'}>
          <SectionHeading title={group.title} description={group.description} />
          <HubCards cards={group.cards} />
        </Section>
      ))}

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
