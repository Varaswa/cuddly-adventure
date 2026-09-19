import {
  HALTUNGSBEDINGUNGEN_PDF,
  KONTROLLHANDBUCH_PDF,
  MIKROCHIP_PDF,
  NWKS_ALPAKA,
  NWKS_HALTUNG,
  NWKS_LAMA,
  NWKS_NEUEINSTEIGER,
  NWKS_NUTZUNG,
  NWKS_TGI,
  TGI_EMPFEHLUNGEN_PDF,
  TGI_PFLICHTENHEFT_PDF,
  TSCHV_ART_31,
  TSCHV_ART_57,
  TSCHV_ART_58,
  TSCHV_FEDLEX,
  TSCHV_NWKS_PDF,
} from '../data/sources'
import type { Article } from './types'

export const haltungArticles: Article[] = [
  {
    path: '/haltung-gesundheit/haltungsbedingungen',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Haltungsbedingungen',
    eyebrow: 'Merkblatt',
    lead:
      'Was Lamas und Alpakas brauchen, um sich wohlzufühlen: Offenstall, Weide, Fläche, Zaun, Fütterung und Pflege – zusammengefasst aus der NWKS-Seite Haltung/Pflege und dem Merkblatt Haltungsbedingungen.',
    heroVariant: 'salbei',
    sections: [
      {
        title: 'Stall, Weide und Fläche',
        paragraphs: [
          'Die Anforderungen einer tiergerechten Haltung sind vom ehemaligen Bundesamt für Veterinärwesen (heute BLV) in einer Richtlinie festgehalten und in der Tierschutzverordnung konkretisiert. Neuweltkameliden leben gerne im Offenstall und sollen Sommer wie Winter täglich auf die Weide.',
          'Ein einfacher Unterstand von 2 m² pro Tier schützt vor Wind, Regen und starker Sonne. Die Mindestfläche eines befestigten Geheges für bis zu sechs adulte Tiere beträgt 250 m²; jedes weitere Tier bis zum 12. Tier zusätzlich 30 m², ab dem 13. Tier 10 m². Die weichen Schwielensohlen verursachen kaum Trittschäden.',
        ],
        bullets: [
          'Zaunhöhe laut NWKS: 140 cm für Lamas, 120 cm für Alpakas; bewährt ist ein 4–5-zeiliger Elektrodraht.',
          'Mindestflächen und Zaunhöhe immer an der Tierschutzverordnung prüfen – Wolfschutz mitdenken.',
          'Stacheldraht ist für Gehegezäune verboten (Art. 57 Abs. 6 TSchV).',
        ],
      },
      {
        title: 'Soziale Haltung und rechtliche Pflichten',
        paragraphs: [
          'Südamerikanische Kleinkamele sind Herdentiere: Es müssen mindestens zwei erwachsene Tiere zusammengehalten werden. Eine Stute mit Fohlen gilt nicht als Gruppe. Für die Haltung ist ein Sachkundenachweis nötig. Alle neugeborenen Crias müssen gechipt werden.',
        ],
      },
      {
        title: 'Fütterung',
        paragraphs: [
          'Lamas und Alpakas sollen ganzjährig Heu und Mineralstoffe erhalten und jederzeit Zugang zu frischem Wasser haben. Weiden nicht zusätzlich düngen und proteinarm halten.',
          'Der Futterverbrauch erwachsener Tiere liegt bei etwa 1,8–2 % Trockensubstanz vom Körpergewicht – beim erwachsenen Lama etwa 2,5–3 kg Heu pro Tag oder rund 6 kg Gras. Kraftfutter kann bei laktierenden Stuten oder Trekkingeinsätzen sinnvoll sein. Art. 58 TSchV verlangt jederzeit Zugang zu Wasser sowie zu Raufutter oder einer Weide.',
        ],
      },
      {
        title: 'Pflege',
        paragraphs: [
          'Pflege umfasst Parasitenüberwachung, Haar- und Hautpflege sowie die Kontrolle von Zehennägeln und Zähnen. Die Tiere pflegen Haut und Haar durch Wälzen; thermische Fenster helfen bei Hitze, die Körpertemperatur zu regulieren.',
          'Die Schur dient vor allem der Kontrolle der Haut, nicht der Wollgewinnung. Sie soll im Frühjahr erfolgen, damit das Vlies bis zum Winter nachwächst. Zehennägel 1–2 Mal pro Jahr kontrollieren. Bei Zuchttieren keine Zahn- und Kieferfehlstellungen; Orientierung am NWKS-Beschreibungsbogen.',
        ],
      },
    ],
    sources: [
      { label: 'NWKS Haltung / Pflege', href: NWKS_HALTUNG },
      { label: 'TSchV Art. 57 Haltung (Fedlex)', href: TSCHV_ART_57 },
      { label: 'TSchV Art. 58 Fütterung (Fedlex)', href: TSCHV_ART_58 },
    ],
    downloads: [
      { label: 'Haltungsbedingungen Neuweltkameliden (PDF)', href: HALTUNGSBEDINGUNGEN_PDF },
      { label: 'Tierschutz-Kontrollhandbuch Lamas und Alpakas (PDF)', href: KONTROLLHANDBUCH_PDF },
      { label: 'Bestellung Mikrochip (PDF)', href: MIKROCHIP_PDF },
    ],
    related: [
      {
        to: '/haltung-gesundheit/tierschutzverordnung',
        title: 'Tierschutzverordnung',
        description: 'Gesetzliche Mindestvorgaben und Sachkundenachweis.',
      },
      {
        to: '/haltung-gesundheit/neuweltkameliden',
        title: 'Neuweltkameliden',
        description: 'Arten, Herkunft und Nutzung im Überblick.',
      },
      {
        to: '/haltung-gesundheit/neueinsteiger',
        title: 'Tipps für Neueinsteiger',
        description: 'Zucht oder Hobby klären, bevor Tiere einziehen.',
      },
    ],
  },
  {
    path: '/haltung-gesundheit/neuweltkameliden',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Neuweltkameliden',
    eyebrow: 'Artenüberblick',
    lead:
      'Lamas und Alpakas gehören zur Gattung der südamerikanischen Kleinkamele. Herkunft, Typen und Nutzung – aus den öffentlichen NWKS-Seiten Alpaka, Lama und Nutzung.',
    heroVariant: 'sand',
    sections: [
      {
        title: 'Familie und Herkunft',
        paragraphs: [
          'Neuweltkameliden (südamerikanische Kleinkamele) gehören zur Familie der Kamele, zur Ordnung der Paarhufer und zur Unterordnung der Schwielensohler. Die Urkameliden stammten aus Nordamerika; ein Teil wanderte nach Südamerika. Die Wildformen sind Guanako und Vikunja.',
          'Die Indios der Anden domestizierten die Wildformen: Aus dem Guanako entstanden grossrahmige, robuste Lamas als Lastenträger und Fleischlieferanten. Das Alpaka wurde aus der Wildform Vikunja als Wolllieferant gezüchtet. Unter der Gattung Neuweltkameliden werden Wild- und Hausformen zusammengefasst.',
        ],
      },
      {
        title: 'Alpaka: Huacaya und Suri',
        paragraphs: [
          'Huacayas machen über 90 % der Population aus. Gekräuseltes Vlies (Crimp), 15–30 Micron, Schurertrag 3–6 kg, jährliche Schur ab einem Jahr. Sie gelten als umgänglich und gehen auch auf Trekkingtouren – am liebsten geschoren.',
          'Suris sind seltener. Ihr Vlies hängt in seidig glänzenden Pencils am Körper herab. Die Faser ist etwas weniger fein als beim Huacaya, fühlt sich aber wegen der glatten Haaroberfläche seidig und kühl an. Auch Suris sind winterhart, wenn sie im Frühjahr geschoren werden und etwa 2 cm Restwolle bleiben.',
        ],
      },
      {
        title: 'Lama: Classic, Wooly und Suri',
        paragraphs: [
          'Lamas werden etwa 100–120 cm gross, wiegen 120–180 kg, haben eine Tragzeit von 11–12 Monaten und leben rund 20 Jahre. Alle Lama-Typen haben leicht bis markant geschwungene Ohren. Bei entsprechendem Training tragen sie bis zu 20 % des Körpergewichts.',
        ],
        bullets: [
          'Classic Lama: wenig bewollt, hochbeinig, Stockmass 105–135 cm. Nutzen: Trekking, Therapie, Fleisch.',
          'Wooly Lama: dichter langer Behang, oft etwas kleiner (100–120 cm). Nutzen: Trekking, TGI, Wolle, Fleisch.',
          'Suri-Lama: vergleichbarer Körperbau wie Wooly; Beurteilung nach Glanz und Suri-Locken. Vorwiegend Wolllieferant. Die Typisierung wird vom NWKS aktuell definiert.',
        ],
      },
      {
        title: 'Nutzung',
        paragraphs: [
          'Neuweltkameliden sind Nutz-, Zucht-, Liebhaber-, Freizeit- und Trekkingtiere sowie Therapiepartner. Lamas werden in der Schweiz von Trekkinganbietern als Packtiere eingesetzt; Alpakas vor allem als Wolllieferanten, aber auch als Begleittiere. Das Fleisch ist dunkelrot, feinfasrig und cholesterinärmer als Lamm- oder Rindfleisch. Der Verein unterstützt seit 2012 das Herdenschutzprojekt der AGRIDEA (Einsatz von Lamas).',
        ],
      },
    ],
    sources: [
      { label: 'NWKS Alpaka', href: NWKS_ALPAKA },
      { label: 'NWKS Lama', href: NWKS_LAMA },
      { label: 'NWKS Nutzung', href: NWKS_NUTZUNG },
    ],
    related: [
      {
        to: '/haltung-gesundheit/alpaka',
        title: 'Alpaka im Detail',
        description: 'Huacaya, Suri, Vlies und Charakter.',
      },
      {
        to: '/haltung-gesundheit/lama',
        title: 'Lama im Detail',
        description: 'Classic, Wooly, Suri und Traglast.',
      },
      {
        to: '/haltung-gesundheit/nutzung',
        title: 'Nutzung',
        description: 'Trekking, Wolle, Fleisch, Herdenschutz.',
      },
    ],
  },
  {
    path: '/haltung-gesundheit/tierschutzverordnung',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Tierschutzverordnung',
    eyebrow: 'Recht',
    lead:
      'Die Tierschutzverordnung (TSchV, SR 455.1) setzt die gesetzlichen Mindestanforderungen. Verbindlich ist der Amtstext auf Fedlex; der NWKS verlinkt zusätzlich eine PDF-Fassung und das Kontrollhandbuch.',
    heroVariant: 'warm',
    sections: [
      {
        title: 'Was die TSchV für Lamas und Alpakas regelt',
        paragraphs: [
          'Lamas und Alpakas gelten als Haustiere im Sinne der TSchV. Art. 10 verweist für Unterkünfte und Gehege auf die Mindestanforderungen der Anhänge – für diese Arten auf Anhang 1 Tabelle 6. Art. 57 und 58 enthalten die spezifischen Haltungs- und Fütterungsregeln.',
        ],
        bullets: [
          'Gruppenhaltung; einzeln gehaltene geschlechtsreife Hengste brauchen Sichtkontakt zu Artgenossen (Art. 57 Abs. 1).',
          'Nicht angebunden halten (Art. 57 Abs. 2).',
          'Eingestreuter oder gegen Kälte isolierter Liegebereich (Art. 57 Abs. 3).',
          'Täglich mehrere Stunden Zugang zu einem Aussengehege mit Scheuer- oder Wälzplatz (Art. 57 Abs. 4).',
          'Bei Gehegefläche nach Minimalvorgabe: befestigter Boden (Art. 57 Abs. 5).',
          'Kein Stacheldraht (Art. 57 Abs. 6).',
          'Jederzeit Zugang zu Wasser sowie zu Raufutter oder einer Weide (Art. 58).',
        ],
      },
      {
        title: 'Mindestflächen nach Anhang 1 Tabelle 6',
        paragraphs: [
          'Gruppen bis sechs adulte Tiere: 250 m² Gehege. Für das 7. bis 12. Tier zusätzlich 30 m², ab dem 13. Tier 10 m². Nachzuchten bis sechs Monate zählen im selben Gehege nicht extra. Unterstand oder Stall: 2 m² pro Tier in der Gruppe, 4 m² bei Einzelhaltung eines Hengstes. Auch bei weniger als sechs Tieren bleibt die Gehege-Mindestfläche 250 m².',
        ],
      },
      {
        title: 'Sachkundenachweis',
        paragraphs: [
          'Art. 31 Abs. 4 TSchV verlangt in kleineren Haltungen (höchstens zehn Grossvieheinheiten) einen Sachkundenachweis nach Art. 198 für unter anderem Rinder sowie Alpakas oder Lamas. Wer mehr als zehn GVE betreut, braucht eine landwirtschaftliche Ausbildung. Der NWKS hält fest, dass für die Haltung von Neuweltkameliden ein Sachkundenachweis nötig ist.',
        ],
      },
      {
        title: 'Kennzeichnung',
        paragraphs: [
          'Auf der NWKS-Haltungsseite gilt: Alle neugeborenen Crias müssen gechipt werden. Das Bestellformular für Mikrochips liegt im Downloadbereich. Die verbindliche Kennzeichnungspflicht ergibt sich aus der Tierseuchen- und Identifikationsgesetzgebung; bei Unsicherheit das kantonale Veterinäramt fragen.',
        ],
      },
    ],
    sources: [
      { label: 'TSchV auf Fedlex (SR 455.1)', href: TSCHV_FEDLEX },
      { label: 'TSchV Art. 31 Sachkundenachweis', href: TSCHV_ART_31 },
      { label: 'TSchV Art. 57 Haltung Lamas und Alpakas', href: TSCHV_ART_57 },
      { label: 'NWKS Haltung / Pflege', href: NWKS_HALTUNG },
    ],
    downloads: [
      { label: 'Tierschutzverordnung (Dokument auf nwks.ch)', href: TSCHV_NWKS_PDF },
      { label: 'Tierschutz-Kontrollhandbuch Lamas und Alpakas', href: KONTROLLHANDBUCH_PDF },
      { label: 'Haltungsbedingungen Neuweltkameliden', href: HALTUNGSBEDINGUNGEN_PDF },
    ],
    related: [
      {
        to: '/haltung-gesundheit/haltungsbedingungen',
        title: 'Haltungsbedingungen',
        description: 'Praxis-Zusammenfassung von Stall, Weide und Pflege.',
      },
      {
        to: '/downloads/haltung',
        title: 'Downloads Haltung',
        description: 'Merkblätter, Verordnung und Chip-Formular.',
      },
    ],
  },
  {
    path: '/haltung-gesundheit/neueinsteiger',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Tipps für Neueinsteiger',
    eyebrow: 'Einstieg',
    lead:
      'Bevor Farbe oder Geschlecht feststehen: Zucht oder Hobby klären, Haltungsrichtlinien lesen, mehrere Betriebe ansehen. Quelle: nwks.ch/neueinsteiger.',
    heroVariant: 'salbei',
    sections: [
      {
        title: 'Zuerst die Nutzungsform klären',
        paragraphs: [
          'Zucht verlangt Zeit und Platz: mindestens zwei getrennte Weidesysteme mit Unterstand, besser pro Stall zwei Weideflächen, damit das Grün nachwachsen kann. Der Hengst muss in einer Gruppe leben; Junghengste sollten nicht länger als ein Jahr bei der Mutter bleiben, um Inzucht zu vermeiden. Fohlen rechtzeitig absetzen, damit Neugeborene genug Kolostrum erhalten.',
          'Hobbyhaltung ist einfacher: oft eine kleine Hengst- oder Wallachgruppe. Mit Training sind kurze Wanderungen oder ein Hindernisparcours möglich. Wer mit anderen Höfen übernachten will, wählt mit Vorteil Wallache.',
        ],
      },
      {
        title: 'Tiere auswählen',
        paragraphs: [
          'Mehrere Zuchten ansehen – nicht nur den Preis. Haltung, Körperbau und Zahnstellung prüfen. Ohne Erfahrung am Standard orientieren oder linear beschriebene, herdebuchgeführte Tiere kaufen. Rücknahmegarantie vereinbaren. Herdebuchkarte und Behandlungsjournal gehören zum Tier.',
          'Für den Start eignen sich Tiere, die halfterführig sind und sich bei Klauenschneiden und Schur umgänglich zeigen. Der NWKS empfiehlt einen Neueinsteigerkurs.',
        ],
      },
    ],
    sources: [{ label: 'NWKS Tipps für Neueinsteiger', href: NWKS_NEUEINSTEIGER }],
    downloads: [{ label: 'Haltungsbedingungen Neuweltkameliden', href: HALTUNGSBEDINGUNGEN_PDF }],
    related: [
      {
        to: '/haltung-gesundheit/haltungsbedingungen',
        title: 'Haltungsbedingungen',
        description: 'Flächen, Fütterung und Pflege vor dem Kauf lesen.',
      },
      {
        to: '/finden#hoefe',
        title: 'Höfe finden',
        description: 'Öffentlich gelistete Betriebe finden.',
      },
      {
        to: '/finden#tiere',
        title: 'Tiere finden',
        description: 'Öffentliche NWKS-Verkaufslisten.',
      },
    ],
  },
  {
    path: '/haltung-gesundheit/alpaka',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Alpaka',
    eyebrow: 'Art',
    lead:
      'Aus dem Vikunja gezüchteter Wolllieferant der Anden. Huacaya und Suri unterscheiden sich vor allem im Vlies – Haltung und Charakter sind ähnlich.',
    heroVariant: 'sand',
    sections: [
      {
        title: 'Huacaya',
        paragraphs: [
          'Über 90 % der Population. Teddybärhaftes Jungtier, gekräuseltes Vlies ohne Mittelscheitel. Schur im Frühjahr, ab einem Jahr jährlich, 3–6 kg bei 15–30 Micron. Dichte Bewollung von Kopf über Körper, Schwanz und Beine bis zu den Füssen. Facettenreiches Farbspektrum.',
        ],
      },
      {
        title: 'Suri',
        paragraphs: [
          'Rar, elegant, mit seidig glänzenden Pencils, die sich um sich selbst wickeln und herabhängen. Perlmuttartiger Glanz und spiralförmige Lockenstruktur sind züchterisch entscheidend. Die Faser ist etwas weniger fein, aber seidig gleitend. Ohne Beimischung von Hand verspinnbar; die Industrie mischt oft Merino für mehr Festigkeit.',
        ],
      },
    ],
    sources: [{ label: 'NWKS Alpaka', href: NWKS_ALPAKA }],
    related: [
      {
        to: '/haltung-gesundheit/neuweltkameliden',
        title: 'Neuweltkameliden',
        description: 'Zurück zum Artenüberblick.',
      },
      {
        to: '/haltung-gesundheit/lama',
        title: 'Lama',
        description: 'Classic, Wooly und Suri.',
      },
    ],
  },
  {
    path: '/haltung-gesundheit/lama',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Lama',
    eyebrow: 'Art',
    lead:
      'Aus dem Guanako domestiziert: Lastenträger und Fleischlieferant der Anden, in der Schweiz Trekking-, Therapie- und Nutzier. Quelle: nwks.ch/lama.',
    heroVariant: 'sand',
    sections: [
      {
        title: 'Masse und Typen',
        paragraphs: [
          'Etwa 100–120 cm, 120–180 kg, Tragzeit 11–12 Monate, Lebenserwartung rund 20 Jahre. Geschwungene Ohren bei allen Typen. Die Suri-Lama-Typisierung wird aktuell definiert.',
        ],
        bullets: [
          'Classic: Deckenvlies, Kopf und Beine ohne lange Haare, Stockmass 105–135 cm. Trekking, Therapie, Fleisch.',
          'Wooly: dichter Behang auch an Stirn und Beinen, 100–120 cm. Zusätzlich Wolle.',
          'Suri-Lama: Glanz und Locken im Vlies, vorwiegend Wolllieferant.',
        ],
      },
      {
        title: 'Traglast',
        paragraphs: [
          'Bei entsprechendem Training bis etwa 20 % des Körpergewichts. Beispiel der NWKS-Nutzungsseite: ein 120–140 kg schweres Lama kann 500–700 Höhenmeter auf 12–17 km zurücklegen und dabei 20–25 kg tragen. Bei Hitze, Feuchtigkeit oder steilen Touren das Gewicht reduzieren.',
        ],
      },
    ],
    sources: [
      { label: 'NWKS Lama', href: NWKS_LAMA },
      { label: 'NWKS Nutzung', href: NWKS_NUTZUNG },
    ],
    related: [
      {
        to: '/haltung-gesundheit/alpaka',
        title: 'Alpaka',
        description: 'Huacaya und Suri.',
      },
      {
        to: '/haltung-gesundheit/nutzung',
        title: 'Nutzung',
        description: 'Trekking, Wolle, Fleisch.',
      },
    ],
  },
  {
    path: '/haltung-gesundheit/nutzung',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Nutzung',
    eyebrow: 'Praxis',
    lead:
      'Trekking, Wolle, Fleisch, Herdenschutz und der Unterschied zwischen Freizeitaktivität und tiergestützter Intervention.',
    heroVariant: 'warm',
    sections: [
      {
        title: 'Trekking und Aktivitäten',
        paragraphs: [
          'Schon die Inkas nutzten Lamas als Lastenträger. In der Schweiz setzen professionelle Anbieter sie als Packtiere ein; Hobbyhalter wandern oder bieten Erlebnistouren, Kindergeburtstage und Hindernisparcours an. Als Schwielensohler brauchen sie keine Hufeisen und bewegen sich sicher in schwierigem Gelände.',
          'Bei unerwarteten Geräuschen machen erfahrene Tiere oft einen Seitensprung und beobachten aus Distanz – sie neigen nicht dazu, in blinder Angst durchzubrennen.',
        ],
      },
      {
        title: 'Wolle und Fleisch',
        paragraphs: [
          'Alpakavlies typisch 17–30 Micron, Schurertrag etwa 1,5–5 kg; Lamas 1–3 kg. Die Faser wird gewaschen, gekardet und versponnen; Kleidung thermoregulierend. Das Fleisch ist dunkelrot und fettarm; der NWKS empfiehlt Niedertemperatur-Garen. Das Kochbuch «Lamafleisch in der Küche» ist über die Verlagsgenossenschaft Caprovis erhältlich (Fr. 30.–).',
        ],
      },
      {
        title: 'Herdenschutz',
        paragraphs: [
          'Der NWKS unterstützt seit 2012 das Herdenschutzprojekt der AGRIDEA. Ein Merkblatt beschreibt den Einsatz von Lamas im Herdenschutz.',
        ],
      },
    ],
    sources: [
      { label: 'NWKS Nutzung', href: NWKS_NUTZUNG },
      { label: 'NWKS TGI', href: NWKS_TGI },
    ],
    related: [
      {
        to: '/haltung-gesundheit/tgi',
        title: 'Tiergestützte Intervention',
        description: 'Abgrenzung Freizeit vs. TGI, Empfehlungen des NWKS.',
      },
      {
        to: '/haltung-gesundheit/neuweltkameliden',
        title: 'Neuweltkameliden',
        description: 'Artenüberblick.',
      },
    ],
  },
  {
    path: '/haltung-gesundheit/tgi',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Tiergestützte Intervention',
    eyebrow: 'TGI',
    lead:
      'Gezielter Einsatz von Lamas und Alpakas zur Förderung von Wohlbefinden – mit klarer Trennung zu Freizeitangeboten. Quelle: nwks.ch/tgi.',
    heroVariant: 'salbei',
    sections: [
      {
        title: 'Freizeit versus TGI',
        paragraphs: [
          'Trekking oder Yoga auf der Weide sind Freizeitaktivitäten: positives Erleben steht im Vordergrund, Fachausbildung in Therapie oder TGI-Weiterbildung ist nicht nötig. Tiergestützte Therapie, Pädagogik und Coaching setzen eine Grundausbildung im Fachbereich plus anerkannte TGI-Weiterbildung voraus.',
        ],
      },
      {
        title: 'Arbeitsgruppe und Empfehlungen',
        paragraphs: [
          'Die Projektgruppe fördert Austausch, Aus- und Weiterbildung, Qualitätsstandards und Öffentlichkeitsarbeit. Öffentlich genannt: Claudine Bachmann, Tanja Burkolter, Sarah Fricker, Maya Hächler, Esther Maurer (Vorsitz), Christine Wittwer, Olivia Zaugg. Ansprechperson: Esther Maurer.',
          'Die Empfehlungen des NWKS zum Einsatz der Tiere und das Pflichtenheft der Arbeitsgruppe liegen als PDF vor.',
        ],
      },
    ],
    sources: [{ label: 'NWKS TGI', href: NWKS_TGI }],
    downloads: [
      { label: 'TGI Empfehlungen und Regelungen', href: TGI_EMPFEHLUNGEN_PDF },
      { label: 'Pflichtenheft der Arbeitsgruppe TGI', href: TGI_PFLICHTENHEFT_PDF },
    ],
    related: [
      {
        to: '/haltung-gesundheit/nutzung',
        title: 'Nutzung',
        description: 'Trekking und Aktivitäten im Überblick.',
      },
      {
        to: '/veranstaltungen',
        title: 'Veranstaltungen',
        description: 'TGI-Anlässe im Jahresprogramm.',
      },
    ],
  },
]
