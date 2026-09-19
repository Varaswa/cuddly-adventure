import { downloads, mitgliedschaft, zuchtAblauf } from '../data/demo'
import { NWKSOFT_LOGIN, NWKS_ZUCHT, PREISLISTE_2026_PDF } from '../data/sources'
import { zuchtHub } from '../content'
import SectionHub from '../components/ui/SectionHub'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import { Badge, GhostOnDarkCta, PrimaryCta, TextCta } from '../components/ui/primitives'
import PageCta from '../components/ui/PageCta'

const zuchtDownloads = downloads
  .filter((doc) => doc.tags.some((tag) => ['Zucht', 'DNA', 'Herdebuch'].includes(tag)))
  .slice(0, 6)

const preise = [
  { label: 'DNA-Probe SNP Mitglieder', value: 'Fr. 100.–' },
  { label: 'DNA-Probe SNP Nichtmitglieder', value: 'Fr. 130.–' },
  { label: 'NWKSoft Pro', value: 'Fr. 85.– / Jahr' },
  { label: 'NWKSoft Basic', value: 'kostenlos für Mitglieder' },
]

export default function ZuchtHerdebuch() {
  return (
    <div>
      <SectionHub
        hub={zuchtHub}
        actions={
          <>
            <PrimaryCta href={NWKSOFT_LOGIN}>NWKSoft Login</PrimaryCta>
            <GhostOnDarkCta href={NWKS_ZUCHT}>Zuchtseite nwks.ch</GhostOnDarkCta>
          </>
        }
        intro={
          <Section>
            <SectionHeading
              eyebrow="Ablauf"
              title="Züchterische Tätigkeiten"
              description="Objektive Beurteilung mit linearer Beschreibung, Faserprobe, DNA/SNP und Deckmeldungen."
              action={<TextCta to="/zucht-herdebuch/zuchtprogramm">Programm öffnen →</TextCta>}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {zuchtAblauf.map((step, index) => (
                <Card key={step.title} variant="sand">
                  <p className="text-xs font-semibold uppercase tracking-wider text-salbei">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-anthrazit">{step.title}</h3>
                  <p className="mt-2 text-sm text-anthrazit/70">{step.description}</p>
                </Card>
              ))}
            </div>
          </Section>
        }
      />

      <Section tone="sand">
        <SectionHeading
          title="Öffentliche Preise (Auszug)"
          description="Aus der Preisliste 2026. Verbindlich ist das PDF auf nwks.ch."
          action={<TextCta href={PREISLISTE_2026_PDF}>Preisliste 2026 →</TextCta>}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {preise.map((item) => (
            <Card key={item.label}>
              <p className="text-sm text-anthrazit/60">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-anthrazit">{item.value}</p>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-anthrazit/60">
          Mitgliedschaft: {mitgliedschaft.beitragEinzel}, {mitgliedschaft.beitragDoppel}, {mitgliedschaft.beitragPassiv}.
        </p>
      </Section>

      <Section>
        <SectionHeading
          title="Reglemente & Formulare"
          description="Zucht-, DNA- und Faserreglemente sowie Musterbögen."
          action={<TextCta to="/downloads/zucht">Kategorie Zucht →</TextCta>}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {zuchtDownloads.map((doc) => (
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
        title="Herdebuch digital führen"
        description="Mitglieder arbeiten in NWKSoft. Wer noch kein Login hat, findet Beitritt und Kontakt unter Mein NWKS."
        primary={{ label: 'NWKSoft Login', href: NWKSOFT_LOGIN }}
        secondary={{ label: 'Mitglied werden', to: '/mein-nwks/mitgliedschaft' }}
      />
    </div>
  )
}
