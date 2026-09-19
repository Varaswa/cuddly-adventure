import {
  BGK_BLAUZUNGE,
  BGK_HOME,
  INFOBRIEF_2_2026_PDF,
  NWKS_ALPAKA,
  NWKS_BLAUZUNGE,
  NWKS_GESUNDHEIT,
  NWKS_HALTUNG,
  NWKS_HERDEBUCH,
  NWKS_LAMA,
  NWKS_NEUEINSTEIGER,
  NWKS_NUTZUNG,
  NWKS_TGI,
  NWKS_ZUCHT,
  NWKSOFT_LOGIN,
  TAETIGKEITSPROGRAMM_PDF,
  TSCHV_FEDLEX,
} from './sources'

export const aktuellCards = [
  {
    id: 'blauzunge',
    category: 'Tiergesundheit',
    title: 'Blauzungenkrankheit – Impfempfehlung',
    excerpt:
      'BTV 3 ist in der Schweiz angekommen. Der BGK empfiehlt die Impfung für alle empfänglichen Tierarten; die Impfung erfolgt durch die Bestandestierärzte.',
    date: 'aktuell',
    to: '/haltung-gesundheit',
    href: NWKS_BLAUZUNGE,
  },
  {
    id: 'herbstbeschreibungen',
    category: 'Veranstaltung',
    title: 'Herbstbeschreibungen 2026',
    excerpt:
      'Im Oktober finden die linearen Beschreibungen statt. Anmeldeschluss für die züchterischen Tätigkeiten im Herbst war der 31. August 2026.',
    date: '10.2026',
    to: '/veranstaltungen',
    href: TAETIGKEITSPROGRAMM_PDF,
  },
  {
    id: 'infobrief',
    category: 'Infobrief',
    title: 'Infobrief 2 / April 2026',
    excerpt:
      'Aktuelle Vereinsinfos, Hinweis auf den Veranstaltungskalender und Aufruf, eigene Anlässe an sekretariat@nwks.ch zu melden.',
    date: '04.2026',
    to: '/downloads',
    href: INFOBRIEF_2_2026_PDF,
  },
]

export const haltungThemen = [
  {
    icon: '🌱',
    title: 'Weide & Auslauf',
    topics: 'Fläche, Einzäunung, Boden, Weidemanagement',
    description:
      'Die Mindestfläche eines befestigten Geheges für bis zu 6 Tiere beträgt 250 m², jedes weitere Tier zusätzlich ca. 30 m². Zaunhöhe 140 cm für Lamas und 120 cm für Alpakas; bewährt hat sich ein 4–5-zeiliger Elektrodraht. Weiden nicht zusätzlich düngen, proteinarm halten. Wolfschutz mitdenken.',
    href: NWKS_HALTUNG,
  },
  {
    icon: '🏠',
    title: 'Stall & Unterstand',
    topics: 'Platzbedarf, Liegeflächen, Witterungsschutz',
    description:
      'Neuweltkameliden leben gerne im Offenstall mit täglichem Weidegang Sommer und Winter. Ein Unterstand von 2 m² pro Tier schützt vor Wind, Regen und starker Sonne. Weiche Schwielensohlen verursachen kaum Trittschäden.',
    href: NWKS_HALTUNG,
  },
  {
    icon: '🌾',
    title: 'Fütterung',
    topics: 'Raufutter, Mineralstoffe, Wasser',
    description:
      'Ganzjährig Heu und Mineralstoffe, jederzeit frisches Wasser. Futterverbrauch erwachsener Tiere ca. 1,8–2 % Trockensubstanz vom Körpergewicht – beim erwachsenen Lama etwa 2,5–3 kg Heu pro Tag oder ca. 6 kg Gras. Kraftfutter kann bei laktierenden Stuten oder Trekking sinnvoll sein.',
    href: NWKS_HALTUNG,
  },
  {
    icon: '✂️',
    title: 'Pflege',
    topics: 'Schur, Nägel, Zähne',
    description:
      'Schur vor allem zur Kontrolle der Haut, im Frühjahr, damit das Vlies bis zum Winter nachwächst. Zehennägel 1–2 Mal pro Jahr kontrollieren. Bei Zuchttieren keine Zahn- und Kieferfehlstellungen. Hautpflege erfolgt durch Wälzen; thermische Fenster helfen bei Hitze.',
    href: NWKS_HALTUNG,
  },
  {
    icon: '🩺',
    title: 'Gesundheit',
    topics: 'Parasiten, Vorsorge, Erkrankungen',
    description:
      'Kotproben (BGK oder Tierarzt) und gezielte Entwurmung, um Resistenzen zu vermeiden. Tägliche Beobachtung: ein Tier, das im Stall bleibt oder nicht mehr wiederkäut, braucht Abklärung. Normaltemperatur 37,5–38,9 °C. Lieber einmal zu oft den Tierarzt rufen.',
    href: NWKS_GESUNDHEIT,
  },
  {
    icon: '⚖️',
    title: 'Recht',
    topics: 'Mindestanforderungen und Sachkundenachweis',
    description:
      'Herdentiere: mindestens zwei erwachsene Tiere. Für die Haltung ist ein Sachkundenachweis nötig. Alle neugeborenen Crias müssen gechipt werden. Grundlage sind Tierschutzverordnung und die Haltungsrichtlinien des ehemaligen BVET (heute BLV).',
    href: TSCHV_FEDLEX,
  },
]

export const gesundheitThemen = [
  {
    title: 'Gesundheitsvorsorge',
    description:
      'Tiere täglich beobachten und Kot kontrollieren. Warnzeichen: Isolieren von der Herde, Fressunlust, fehlendes Wiederkäuen. Vitamin E/Selen und Nabeldesinfektion werden bei Neugeborenen häufig empfohlen.',
    href: NWKS_GESUNDHEIT,
  },
  {
    title: 'Parasiten',
    description:
      'Das Parasitenprogramm des BGK empfiehlt regelmässige Kotproben. Anhand des Befalls gezielt behandeln – so lassen sich Resistenzen bei Entwurmungsmitteln vermeiden. Endo- und Ektoparasiten (Würmer, Leberegel, Milben, Haarlinge).',
    href: BGK_HOME,
  },
  {
    title: 'Zähne',
    description:
      'Bei Zuchttieren sollten keine Zahn- und Kieferfehlstellungen vorhanden sein. Orientierung am NWKS-Beschreibungsbogen. Zehennägel 1–2 Mal jährlich schneiden.',
    href: NWKS_HALTUNG,
  },
  {
    title: 'Impfungen',
    description:
      'Empfohlen werden gängige Schaf-/Ziegenimpfungen, z. B. Clostridien (Tetanus, Breinieren, Enterotoxämie); Pasteurellen/Mannheimia je nach Region. Plus aktuelle BTV-3-Empfehlung des BGK. Bestandestierarzt fragen.',
    href: NWKS_BLAUZUNGE,
  },
  {
    title: 'Krankheiten',
    description:
      'Keine Klauenkrankheiten dank Lederballen, aber parasitär anfällig. Augenentzündungen (besonders Jungtiere nach Wälzen oder Angespucktwerden) sind nicht selten. Fachliteratur: Zanolari/Schönmann, über das Sekretariat bestellbar.',
    href: NWKS_GESUNDHEIT,
  },
  {
    title: 'Aktuelle Meldungen',
    description:
      'Blauzungenkrankheit (BTV 8, 4 und BTV 3) ist in der Schweiz angekommen. BTV 3 gilt als gefährlicher, vor allem bei Schafen. Impfung ist laut NWKS/BGK die beste Vorbeugung gegen Verluste.',
    href: BGK_BLAUZUNGE,
  },
]

export const wissenArtikel = [
  {
    title: 'Alpaka: Huacaya und Suri',
    excerpt:
      'Das Alpaka stammt vom Vikunja. Huacayas (über 90 % der Population) haben gekräuseltes Vlies, 15–30 Micron, 3–6 kg Schurertrag. Suris sind seltener, mit seidig glänzenden Pencils.',
    href: NWKS_ALPAKA,
  },
  {
    title: 'Lama: Classic, Wooly und Suri',
    excerpt:
      'Lamas (ca. 100–120 cm, 120–180 kg, Tragzeit 11–12 Monate) stammen vom Guanako. Classic: Trekking/Therapie/Fleisch. Wooly: zusätzlich Wolle. Suri-Lama: vorwiegend Wolllieferant.',
    href: NWKS_LAMA,
  },
  {
    title: 'Tipps für Neueinsteiger',
    excerpt:
      'Zuerst klären: Zucht oder Hobby? Zucht braucht getrennte Weidesysteme. Hobby oft Wallach-/Hengstgruppe. Tiere ansehen, linear beschriebene bzw. herdebuchgeführte Tiere bevorzugen, Rücknahmegarantie vereinbaren.',
    href: NWKS_NEUEINSTEIGER,
  },
  {
    title: 'Trekking, Wolle, TGI',
    excerpt:
      'Lamas können bis ca. 20 % des Körpergewichts tragen (Beispiel: 20–25 kg auf 12–17 km). Alpakas vor allem Wolllieferanten. TGI erfordert Fachausbildung; Freizeit-Trekking nicht.',
    href: NWKS_NUTZUNG,
  },
]

export type ZuchtThema = {
  title: string
  description: string
  cta?: string
  href?: string
  internal?: boolean
}

export const zuchtThemen: ZuchtThema[] = [
  {
    title: 'NWKSoft',
    description:
      'Seit 1. April 2025 führen Mitglieder das Herdebuch selbst über NWKSoft. Basic-Login ist für Mitglieder kostenlos (vom Verein getragen), NWKSoft Pro kostet Fr. 85.–/Jahr. Login: nwksoft.ch.',
    cta: 'NWKSoft Login',
    href: NWKSOFT_LOGIN,
  },
  {
    title: 'Herdebuch',
    description:
      'Mitglieder melden Tiere über NWKSoft an und um. Neumeldungen innert 30 Tagen sind gemäss Aktion kostenlos. Formulare bleiben für Nichtmitglieder (kostenpflichtig). Mutationen Mitglied zu Mitglied über NWKSoft sind kostenlos.',
    href: NWKS_HERDEBUCH,
  },
  {
    title: 'Zuchtprogramm',
    description:
      'Züchterische Tätigkeiten: lineare Beurteilung, Faserprobe, DNA/SNP bzw. Coat-Color, Deckmeldungen. Der Bund unterstützt die Tierzucht; ab TZV 2026 zählen LB, DNA, Faser, Geburten und Schlachtungen für Finanzhilfen.',
    href: NWKS_ZUCHT,
  },
  {
    title: 'Lineare Beschreibung',
    description:
      'Objektive Exterieurbeurteilung durch NWKS-Beschreiber. Anmeldeschluss Herbst 2026: 31. August. Mitglieder melden über NWKSoft an. Beschreiber u. a. Robert Gartner, Bruno Bucher, Olivia Zaugg, Beat Lauber, Brigitte Hermann.',
    href: NWKS_ZUCHT,
  },
  {
    title: 'DNA / Genetik',
    description:
      'Ab 2026 akzeptiert der Bund nur noch SNP-Analysen (nicht mehr klassische STR-Marker). Vorteile: Parentage, Inzucht, BLW-Anerkennung. DNA-Probe (SNP) gemäss Preisliste 2026: Fr. 100.– Mitglieder / 130.– Nichtmitglieder.',
    href: NWKS_ZUCHT,
  },
  {
    title: 'Faseranalyse',
    description:
      'Faserproben sind Teil der züchterischen Tätigkeit und Leistungsbewertung. «Wie liest man Faserdiagramme?» und das Faseranalyse-Reglement stehen im Downloadbereich. Huacaya-Vlies typisch 15–30 Micron.',
    href: NWKS_ZUCHT,
  },
  {
    title: 'Reglemente',
    description:
      'Öffentlich: Zuchtreglement, DNA-Reglement, Richtlinien und Grundsätze zur Linearen Beschreibung, Reglemente zu Faseranalyse, genetischer Bewertung und Gewichtung der Leistungsbewertung.',
    href: '/downloads',
    internal: true,
  },
]

export const tgiHinweis = {
  title: 'Tiergestützte Intervention',
  description:
    'Der NWKS unterscheidet Freizeitaktivitäten (Trekking, Yoga auf der Weide) von TGI (Therapie, Pädagogik, Coaching). TGI setzt Fachausbildung plus anerkannte TGI-Weiterbildung voraus. Empfehlung: höchstens drei Einsätze pro Woche, kranke oder hochträchtige Tiere nicht einsetzen.',
  href: NWKS_TGI,
}
