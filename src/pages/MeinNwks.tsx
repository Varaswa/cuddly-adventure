import {
  fuerDichAktuell,
  meinNwksShortcuts,
  mitgliedschaft,
  nwkLinks,
  vereinFakten,
  mitgliedVorteile,
} from '../data/demo'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import { DemoNotice, PrimaryCta, SecondaryCta, TextCta } from '../components/ui/primitives'
import PageCta from '../components/ui/PageCta'
import PwaInstallHint from '../components/PwaInstallHint'
import ExternalLink from '../components/ExternalLink'
import { Link } from 'react-router-dom'

export default function MeinNwks() {
  return (
    <div>
      <PwaInstallHint />
      <PageHero
        layout="spotlight"
        image="heroes/mein-nwks.jpg"
        imageAlt="Grosse Alpakaherde in der Landschaft"
        objectPosition="center 55%"
        accent="naturgruen"
        size="lg"
        eyebrow="Mitgliederbereich"
        title="Mein NWKS"
        lead="Öffentliche Vereinsinfos, Shortcuts und aktuelle Hinweise. Der persönliche Login bleibt NWKSoft vorbehalten – hier gibt es keine erfundenen Mitgliedsdaten."
        actions={
          <>
            <PrimaryCta href={mitgliedschaft.beitrittUrl}>Beitrittserklärung (PDF)</PrimaryCta>
            <SecondaryCta href={mitgliedschaft.nwksoftUrl}>NWKSoft Login</SecondaryCta>
          </>
        }
      />

      <Section>
        <DemoNotice>
          Dieser Bereich ist <strong className="font-semibold text-anthrazit">kein echter Login</strong>. Es gibt
          keine persönliche Begrüssung, keine privaten Tierlisten und kein Mitgliederverzeichnis. Alles hier
          stammt aus öffentlichen Seiten von nwks.ch.
        </DemoNotice>

        <div className="mt-10">
          <SectionHeading title="Shortcuts" description="Schnelleinstiege zu NWKSoft, Formularen und Terminen." />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {meinNwksShortcuts.map((s) =>
            s.href ? (
              <ExternalLink
                key={s.label}
                href={s.href}
                className="rounded-xl border border-sand bg-warmweiss px-3 py-4 text-center text-sm font-semibold text-anthrazit shadow-sm transition hover:border-salbei/40 hover:shadow-md"
              >
                {s.label}
                <span className="mt-1 block text-nwks-rot" aria-hidden>
                  →
                </span>
              </ExternalLink>
            ) : (
              <Link
                key={s.label}
                to={s.to}
                className="rounded-xl border border-sand bg-warmweiss px-3 py-4 text-center text-sm font-semibold text-anthrazit shadow-sm transition hover:border-salbei/40 hover:shadow-md"
              >
                {s.label}
                <span className="mt-1 block text-nwks-rot" aria-hidden>
                  →
                </span>
              </Link>
            ),
          )}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading title="Für dich aktuell" description="Öffentliche Termine und Gesundheitshinweise." />
        <ul className="mt-8 space-y-3">
          {fuerDichAktuell.map((item) => (
            <li key={item.title}>
              {item.href ? (
                <ExternalLink
                  href={item.href}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm transition hover:shadow-md"
                >
                  <div>
                    <h3 className="font-semibold text-anthrazit">{item.title}</h3>
                    <p className="mt-1 text-sm text-anthrazit/65">{item.detail}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-nwks-rot">Öffnen →</span>
                </ExternalLink>
              ) : (
                <Link
                  to={item.to}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm transition hover:shadow-md"
                >
                  <div>
                    <h3 className="font-semibold text-anthrazit">{item.title}</h3>
                    <p className="mt-1 text-sm text-anthrazit/65">{item.detail}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-nwks-rot">Öffnen →</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Mitgliedschaft"
          title="Beiträge und Vorteile"
          description={`${mitgliedschaft.beitragEinzel}, ${mitgliedschaft.beitragDoppel}, ${mitgliedschaft.beitragPassiv}. Aufnahme über die Geschäftsstelle, abschliessend entscheidet die Vereinsversammlung.`}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mitgliedVorteile.map((item) => (
            <Card key={item.title} variant="sand">
              <h3 className="font-semibold text-anthrazit">{item.title}</h3>
              <p className="mt-2 text-sm text-anthrazit/70">{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className="text-base font-bold text-anthrazit">Beitreten</h2>
            <p className="mt-2 text-sm text-anthrazit/70">
              Aktivmitglied: Halter, Betreuer oder Eigentümer, stimmberechtigt. Passivmitglied: unterstützt
              den Verein, ohne Stimmrecht. Gesuch an die Geschäftsstelle; provisorische Aufnahme durch den
              Vorstand.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <PrimaryCta href={mitgliedschaft.beitrittUrl} className="px-4 py-2.5">
                Beitrittserklärung (PDF)
              </PrimaryCta>
              <TextCta href={mitgliedschaft.preislisteUrl}>Preisliste 2026</TextCta>
            </div>
          </Card>
          <Card>
            <h2 className="text-base font-bold text-anthrazit">NWKSoft</h2>
            <p className="mt-2 text-sm text-anthrazit/70">
              Digitale Herdebuchführung seit 1. April 2025. Basic-Login für Mitglieder kostenlos, Pro Fr. 85.–
              pro Jahr. Zugangsdaten kommen vom Verein; Probleme an herdebuch@nwks.ch.
            </p>
            <SecondaryCta href={mitgliedschaft.nwksoftUrl} className="mt-4 px-4 py-2.5">
              NWKSoft Login
            </SecondaryCta>
          </Card>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Verein"
          title={`Gegründet ${vereinFakten.gegruendet}`}
          description={vereinFakten.zweck}
          action={<TextCta href={vereinFakten.href}>Verein auf nwks.ch →</TextCta>}
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-anthrazit">Aufgaben</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-anthrazit/70">
              {vereinFakten.aufgaben.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="font-semibold text-anthrazit">Öffentlich genannte Vorstandsrollen</h3>
            <ul className="mt-3 space-y-2 text-sm text-anthrazit/70">
              {vereinFakten.vorstandOeffentlich.map((person) => (
                <li key={person.rolle}>
                  <span className="font-medium text-anthrazit">{person.rolle}:</span> {person.name}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-anthrazit/50">{vereinFakten.statutenStand}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <TextCta href={vereinFakten.statutenUrl}>Statuten (PDF)</TextCta>
              <TextCta href={vereinFakten.kontakteUrl}>Kontakte</TextCta>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <Card>
          <h2 className="text-base font-bold text-anthrazit">Kontakt</h2>
          <p className="mt-2 text-sm text-anthrazit/75">{mitgliedschaft.sekretariat}</p>
          <p className="mt-1 text-sm text-anthrazit/75">{mitgliedschaft.herdebuch}</p>
          <TextCta href={mitgliedschaft.kontakteUrl} className="mt-3">
            Alle Kontakte auf nwks.ch →
          </TextCta>
        </Card>

        <div className="mt-12">
          <SectionHeading title="Fachstellen & Partner" description="Öffentliche Linkliste, gekürzt." />
        </div>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {nwkLinks.slice(0, 8).map((link) => (
            <li key={link.url}>
              <TextCta href={link.url}>{link.title} →</TextCta>
            </li>
          ))}
        </ul>
      </Section>

      <PageCta
        title="App auf dem Handy behalten"
        description="Die Demo ist als PWA installierbar. Der Offline-Cache gilt für den App-Rahmen, nicht für PDFs auf nwks.ch."
        primary={{ label: 'Zur Startseite', to: '/' }}
        secondary={{ label: 'Downloads', to: '/downloads' }}
      />
    </div>
  )
}
