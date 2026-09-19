import PageHero from '../components/ui/PageHero'
import Section from '../components/ui/Section'
import { GhostOnDarkCta, PrimaryCta } from '../components/ui/primitives'

export default function NichtGefunden() {
  return (
    <div>
      <PageHero
        variant="dark"
        eyebrow="404"
        title="Seite nicht gefunden"
        lead="Diese Adresse gehört nicht zu den öffentlichen Routen der NWKS-Demo."
        actions={
          <>
            <PrimaryCta to="/">Zur Startseite</PrimaryCta>
            <GhostOnDarkCta to="/suche">Hofsuche</GhostOnDarkCta>
          </>
        }
      />
      <Section>
        <p className="text-sm text-anthrazit/70">
          Verfügbar sind die Hauptbereiche und ihre Folgeseiten: Haltung / Pflege, Zucht & Herdebuch,
          Veranstaltungen, Hofsuche, Downloads, Tierverkauf und Mein NWKS.
        </p>
      </Section>
    </div>
  )
}
