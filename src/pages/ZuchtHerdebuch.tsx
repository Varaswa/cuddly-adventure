import { zuchtThemen, zuchtAblauf, downloads, mitgliedschaft } from '../data/demo'
import { NWKSOFT_LOGIN, NWKS_HERDEBUCH, NWKS_ZUCHT, PREISLISTE_2026_PDF } from '../data/sources'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import { Badge, GhostOnDarkCta, PrimaryCta, SecondaryCta, TextCta } from '../components/ui/primitives'
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
      <PageHero
        variant="dark"
        eyebrow="Zucht & Herdebuch"
        title="Zucht, Abstammung und NWKSoft"
        lead="Herdebuch, DNA, Faseranalyse und Reglemente – zusammenhängend auffindbar für Züchterinnen und Mitglieder. Quelle: nwks.ch/herdebuch und nwks.ch/zucht."
        actions={
          <>
            <PrimaryCta href={NWKSOFT_LOGIN}>NWKSoft Login</PrimaryCta>
            <GhostOnDarkCta href={NWKS_ZUCHT}>Zuchtseite nwks.ch</GhostOnDarkCta>
          </>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Ablauf"
          title="Züchterische Tätigkeiten"
          description="Objektive Beurteilung mit linearer Beschreibung, Faserprobe, DNA/SNP und Deckmeldungen. Der Bund unterstützt die Tierzucht; ab TZV 2026 zählen diese Leistungen für Finanzhilfen."
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

      <Section tone="sand">
        <SectionHeading
          title="Themen"
          description="NWKSoft, Herdebuch, Programm, Beschreibung, Genetik, Faser und Reglemente."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {zuchtThemen.map((t) => (
            <Card key={t.title} hover>
              <h2 className="text-lg font-semibold text-anthrazit">{t.title}</h2>
              <p className="mt-2 flex-1 text-sm text-anthrazit/70">{t.description}</p>
              {t.cta && t.href && !t.internal ? (
                <PrimaryCta href={t.href} className="mt-4 self-start px-3 py-2">
                  {t.cta}
                </PrimaryCta>
              ) : (
                <TextCta to={t.internal ? t.href : undefined} href={t.internal ? undefined : t.href} className="mt-4">
                  Mehr erfahren →
                </TextCta>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="NWKSoft seit 1. April 2025"
          description="Mitglieder führen das Herdebuch selbst. Zugangsdaten kommen vom Verein; Support: herdebuch@nwks.ch."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="font-semibold text-anthrazit">1. Login erhalten</h3>
            <p className="mt-2 text-sm text-anthrazit/70">
              Basic ist für Mitglieder kostenlos. NWKSoft Pro kostet Fr. 85.– pro Jahr gemäss Preisliste 2026.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-anthrazit">2. Tiere an- und ummelden</h3>
            <p className="mt-2 text-sm text-anthrazit/70">
              Neumeldungen innert 30 Tagen sind gemäss Aktion kostenlos. Mutationen Mitglied zu Mitglied über
              NWKSoft sind kostenlos.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-anthrazit">3. Tätigkeiten anmelden</h3>
            <p className="mt-2 text-sm text-anthrazit/70">
              Lineare Beschreibung, DNA und Faser über NWKSoft. Formulare bleiben für Nichtmitglieder.
            </p>
          </Card>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <SecondaryCta href={NWKSOFT_LOGIN}>nwksoft.ch öffnen</SecondaryCta>
          <SecondaryCta href={NWKS_HERDEBUCH}>Herdebuch-Seite</SecondaryCta>
        </div>
      </Section>

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
          action={<TextCta to="/downloads">Alle Downloads →</TextCta>}
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
        secondary={{ label: 'Mitglied werden', to: '/mein-nwks' }}
      />
    </div>
  )
}
