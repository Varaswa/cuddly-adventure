import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeading } from '../components/ui/Section'
import Card from '../components/ui/Card'
import { PrimaryCta, GhostOnDarkCta } from '../components/ui/primitives'
import { navLinks } from '../data/nav'

export default function NichtGefunden() {
  return (
    <div>
      <PageHero
        layout="center"
        image="heroes/nicht-gefunden.jpg"
        imageAlt="Alpenlandschaft über einem Wolkenmeer"
        objectPosition="center 40%"
        accent="sand"
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
        <SectionHeading
          title="Diese Seiten sind erreichbar"
          description="Der Prototyp umfasst die öffentlichen Verbandsangebote – mit einheitlichem NWKS-Rahmen."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card hover>
            <h2 className="text-lg font-semibold text-anthrazit">Startseite</h2>
            <p className="mt-2 text-sm text-anthrazit/70">Überblick zu Haltung, Zucht, Terminen und Mitgliedschaft.</p>
            <Link to="/" className="mt-4 text-sm font-semibold text-nwks-rot hover:underline">
              Zur Startseite →
            </Link>
          </Card>
          {navLinks.map((link) => (
            <Card key={link.to} hover>
              <h2 className="text-lg font-semibold text-anthrazit">{link.label}</h2>
              <p className="mt-2 text-sm text-anthrazit/70">Öffentliche Angaben von nwks.ch in der NWKS-App.</p>
              <Link to={link.to} className="mt-4 text-sm font-semibold text-nwks-rot hover:underline">
                Öffnen →
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}
