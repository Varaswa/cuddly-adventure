export const navLinks = [
  { to: '/', label: 'Startseite' },
  { to: '/haltung-gesundheit', label: 'Haltung & Gesundheit' },
  { to: '/zucht-herdebuch', label: 'Zucht & Herdebuch' },
  { to: '/veranstaltungen', label: 'Veranstaltungen' },
  { to: '/suche', label: 'Hofsuche' },
  { to: '/downloads', label: 'Downloads' },
  { to: '/tierverkauf', label: 'Tierverkauf' },
  { to: '/mein-nwks', label: 'Mein NWKS' },
]

export const interesseCards = [
  {
    id: 'interesse',
    title: 'Ich interessiere mich für Lamas & Alpakas',
    description: 'Grundwissen, Haltung, Tiere erleben und Höfe finden.',
    to: '/haltung-gesundheit',
    accent: 'salbei' as const,
  },
  {
    id: 'halter',
    title: 'Ich halte bereits Tiere',
    description: 'Gesundheit, Fütterung, Pflege, Vorschriften und Formulare.',
    to: '/haltung-gesundheit',
    accent: 'sand' as const,
  },
  {
    id: 'zuechter',
    title: 'Ich züchte',
    description: 'Herdebuch, NWKSoft, Abstammung, DNA, Faser und Reglement.',
    to: '/zucht-herdebuch',
    accent: 'anthrazit' as const,
  },
]

export const tileNav = [
  {
    title: 'Lamas & Alpakas',
    description: 'Tiere kennenlernen',
    icon: '🦙',
    to: '/haltung-gesundheit',
  },
  {
    title: 'Haltung & Gesundheit',
    description: 'Praxiswissen',
    icon: '🌿',
    to: '/haltung-gesundheit',
  },
  {
    title: 'Zucht & Herdebuch',
    description: 'Zucht, DNA, Faser, NWKSoft',
    icon: '🧬',
    to: '/zucht-herdebuch',
  },
  {
    title: 'NWKS & Mitgliedschaft',
    description: 'Verein & Vorteile',
    icon: '📍',
    to: '/mein-nwks',
  },
]

export const aktuellCards = [
  {
    id: 'blauzunge',
    category: 'Tiergesundheit',
    title: 'Blauzungenkrankheit – aktuelle Informationen',
    excerpt: 'Empfehlungen zur Impfung und Haltung bei Neuweltkameliden. Demo-Meldung für den Prototyp.',
    date: '12.09.2026',
    to: '/haltung-gesundheit',
  },
  {
    id: 'herbsttagung',
    category: 'Veranstaltung',
    title: 'NWKS Herbsttagung 2026',
    excerpt: 'Samstag, 18. Oktober 2026 · Bern · Fachvorträge und Mitgliederversammlung.',
    date: '18.10.2026',
    to: '/veranstaltungen',
  },
  {
    id: 'infobrief',
    category: 'Infobrief',
    title: 'Infobrief September 2026',
    excerpt: 'Neuigkeiten aus dem Verband, Termine und Tipps für Halterinnen und Züchter.',
    date: '01.09.2026',
    to: '/downloads',
  },
]

export const haltungThemen = [
  {
    icon: '🌱',
    title: 'Weide & Auslauf',
    topics: 'Fläche, Einzäunung, Boden, Weidemanagement',
  },
  {
    icon: '🏠',
    title: 'Stall & Unterstand',
    topics: 'Platzbedarf, Liegeflächen, Witterungsschutz',
  },
  {
    icon: '🌾',
    title: 'Fütterung',
    topics: 'Raufutter, Mineralstoffe, Wasser',
  },
  {
    icon: '✂️',
    title: 'Pflege',
    topics: 'Schur, Nägel, Zähne',
  },
  {
    icon: '🩺',
    title: 'Gesundheit',
    topics: 'Parasiten, Vorsorge, Erkrankungen',
  },
  {
    icon: '⚖️',
    title: 'Recht',
    topics: 'Mindestanforderungen und Sachkundenachweis',
  },
]

export const gesundheitThemen = [
  { title: 'Gesundheitsvorsorge', description: 'Regelmäßige Kontrollen und Bestandsmanagement.' },
  { title: 'Parasiten', description: 'Kotproben, Entwurmung und Weidehygiene.' },
  { title: 'Zähne', description: 'Zahnkontrolle und Korrekturen bei Lamas und Alpakas.' },
  { title: 'Impfungen', description: 'Empfohlene Impfschemata inkl. Blauzunge (Demo).' },
  { title: 'Krankheiten', description: 'Häufige Erkrankungen und Warnsignale erkennen.' },
  { title: 'Aktuelle Meldungen', description: 'Tiergesundheitsmeldungen aus der Schweiz.' },
]

export const zuchtThemen = [
  {
    title: 'NWKSoft',
    description: 'Digitale Herdebuchführung und Mitgliederzugang.',
    cta: 'NWKSoft Login',
  },
  {
    title: 'Herdebuch',
    description: 'Registrierung, Abstammung und Tierdaten.',
  },
  {
    title: 'Zuchtprogramm',
    description: 'Ziele, Selektion und Qualitätskriterien.',
  },
  {
    title: 'Lineare Beschreibung',
    description: 'Exterieurbeurteilung und Termine.',
  },
  {
    title: 'DNA / Genetik',
    description: 'Probenahme, Parentage und Marker.',
  },
  {
    title: 'Faseranalyse',
    description: 'Feinheit, Länge und Qualitätsprofile.',
  },
  {
    title: 'Reglemente',
    description: 'Zuchtreglement und gültige Bestimmungen.',
  },
]

export const veranstaltungen = [
  {
    id: 1,
    title: 'NWKS Herbsttagung 2026',
    type: 'Tagung',
    date: '18.10.2026',
    time: '09:30 – 16:00',
    location: 'Bern BE',
    description: 'Fachvorträge zu Haltung und Gesundheit, Mitgliederversammlung und Networking.',
    open: true,
  },
  {
    id: 2,
    title: 'Kurs: Einstieg in die Haltung',
    type: 'Kurs',
    date: '08.11.2026',
    time: '10:00 – 15:00',
    location: 'Dietlikon ZH',
    description: 'Praxisnaher Kurs für Interessierte und neue Halterinnen.',
    open: true,
  },
  {
    id: 3,
    title: 'Alpaka Show Schweiz',
    type: 'Show',
    date: '14.03.2027',
    time: 'Ganztägig',
    location: 'Luzern LU',
    description: 'Offizielle Show mit Bewertung und Faserpräsentation.',
    open: false,
  },
  {
    id: 4,
    title: 'Workshop Tiergestützte Intervention',
    type: 'TGI',
    date: '22.11.2026',
    time: '09:00 – 13:00',
    location: 'Thun BE',
    description: 'Grundlagen und Praxis der TGI mit Neuweltkameliden.',
    open: true,
  },
]

export const hofFilterOptions = [
  'Alpaka',
  'Lama',
  'Zuchtbetrieb',
  'Spaziergänge/Trekking',
  'TGI',
  'Schur',
  'Deckhengst',
  'Beratung',
]

export const hoefe = [
  {
    id: 1,
    name: 'Alpaka Kammer',
    ort: 'Dietlikon ZH',
    plz: '8305',
    tags: ['Alpaka', 'Zuchtbetrieb', 'Spaziergänge/Trekking'],
    description: 'Alpakas · Zucht · Erlebnisse',
    distanceKm: 12,
  },
  {
    id: 2,
    name: 'Lama Hof Emmental',
    ort: 'Langnau BE',
    plz: '3550',
    tags: ['Lama', 'Zuchtbetrieb', 'Deckhengst'],
    description: 'Lamas · Zucht · Deckhengste',
    distanceKm: 48,
  },
  {
    id: 3,
    name: 'Schur Service Ostschweiz',
    ort: 'St. Gallen SG',
    plz: '9000',
    tags: ['Schur', 'Beratung', 'Alpaka'],
    description: 'Mobiler Scherservice und Beratung',
    distanceKm: 65,
  },
  {
    id: 4,
    name: 'TGI Praxis Alpenblick',
    ort: 'Interlaken BE',
    plz: '3800',
    tags: ['TGI', 'Alpaka', 'Beratung'],
    description: 'Tiergestützte Intervention mit Alpakas',
    distanceKm: 92,
  },
  {
    id: 5,
    name: 'Trekking Alpakas Wallis',
    ort: 'Visp VS',
    plz: '3930',
    tags: ['Alpaka', 'Spaziergänge/Trekking'],
    description: 'Geführte Wanderungen mit Alpakas',
    distanceKm: 140,
  },
  {
    id: 6,
    name: 'Fachberatung Neuweltkameliden',
    ort: 'Zürich ZH',
    plz: '8001',
    tags: ['Beratung', 'Alpaka', 'Lama'],
    description: 'Haltung, Recht und Betriebsberatung',
    distanceKm: 8,
  },
]

export const downloadTags = [
  'Haltung',
  'Gesundheit',
  'Zucht',
  'Herdebuch',
  'DNA',
  'TGI',
  'Verein',
]

export const downloads = [
  {
    id: 1,
    title: 'Zuchtreglement NWKS',
    type: 'PDF',
    meta: 'gültig ab 01.01.2026',
    tags: ['Zucht'],
    current: true,
  },
  {
    id: 2,
    title: 'Anmeldung Herdebuch',
    type: 'PDF',
    meta: 'Formular',
    tags: ['Herdebuch'],
    current: true,
  },
  {
    id: 3,
    title: 'DNA-Probenahme',
    type: 'PDF',
    meta: 'Anleitung',
    tags: ['DNA'],
    current: true,
  },
  {
    id: 4,
    title: 'Mindestanforderungen Haltung',
    type: 'PDF',
    meta: 'Merkblatt',
    tags: ['Haltung'],
    current: true,
  },
  {
    id: 5,
    title: 'Infobrief September 2026',
    type: 'PDF',
    meta: 'Ausgabe 09/2026',
    tags: ['Verein'],
    current: true,
  },
  {
    id: 6,
    title: 'Parasitenmanagement',
    type: 'PDF',
    meta: 'Fachinformation',
    tags: ['Gesundheit'],
    current: true,
  },
  {
    id: 7,
    title: 'TGI Qualitätsrichtlinien',
    type: 'PDF',
    meta: 'Richtlinie 2025',
    tags: ['TGI'],
    current: false,
  },
  {
    id: 8,
    title: 'Mitgliedschaftsantrag',
    type: 'PDF',
    meta: 'Formular',
    tags: ['Verein'],
    current: true,
  },
]

export const tierverkaufFilter = {
  tierarten: ['Alpaka', 'Lama'],
  geschlechter: ['Stute', 'Hengst', 'Wallach'],
  kantone: ['ZH', 'BE', 'LU', 'SG', 'VS', 'AG'],
  zuchtstatus: ['Zuchttiere', 'Hobby', 'Jungtiere'],
  herdebuch: ['Herdebuch', 'ohne Herdebuch'],
}

export const tiere = [
  {
    id: 1,
    name: 'Luna',
    tierart: 'Alpaka',
    geschlecht: 'Stute',
    alter: '3 Jahre',
    kanton: 'ZH',
    zuchtstatus: 'Zuchttiere',
    herdebuch: 'Herdebuch',
    anbieter: 'Alpaka Kammer, Dietlikon',
    preis: 'auf Anfrage',
  },
  {
    id: 2,
    name: 'Paco',
    tierart: 'Alpaka',
    geschlecht: 'Hengst',
    alter: '5 Jahre',
    kanton: 'BE',
    zuchtstatus: 'Zuchttiere',
    herdebuch: 'Herdebuch',
    anbieter: 'Lama Hof Emmental',
    preis: 'CHF 2\'800',
  },
  {
    id: 3,
    name: 'Momo',
    tierart: 'Lama',
    geschlecht: 'Wallach',
    alter: '7 Jahre',
    kanton: 'LU',
    zuchtstatus: 'Hobby',
    herdebuch: 'ohne Herdebuch',
    anbieter: 'Familie Weber, Sursee',
    preis: 'CHF 1\'200',
  },
  {
    id: 4,
    name: 'Sira',
    tierart: 'Alpaka',
    geschlecht: 'Stute',
    alter: '1 Jahr',
    kanton: 'SG',
    zuchtstatus: 'Jungtiere',
    herdebuch: 'Herdebuch',
    anbieter: 'Alpakahof Ostschweiz',
    preis: 'CHF 1\'900',
  },
  {
    id: 5,
    name: 'Diego',
    tierart: 'Lama',
    geschlecht: 'Hengst',
    alter: '4 Jahre',
    kanton: 'VS',
    zuchtstatus: 'Zuchttiere',
    herdebuch: 'Herdebuch',
    anbieter: 'Trekking Alpakas Wallis',
    preis: 'auf Anfrage',
  },
  {
    id: 6,
    name: 'Nala',
    tierart: 'Alpaka',
    geschlecht: 'Stute',
    alter: '2 Jahre',
    kanton: 'AG',
    zuchtstatus: 'Hobby',
    herdebuch: 'ohne Herdebuch',
    anbieter: 'Hof am Aareufer',
    preis: 'CHF 1\'500',
  },
]

export const meinNwksShortcuts = [
  { label: 'Meine Tiere', to: '/zucht-herdebuch' },
  { label: 'NWKSoft', to: '/zucht-herdebuch' },
  { label: 'Formulare', to: '/downloads' },
  { label: 'Veranstaltungen', to: '/veranstaltungen' },
  { label: 'Weiterbildung', to: '/veranstaltungen' },
  { label: 'Infobrief', to: '/downloads' },
]

export const fuerDichAktuell = [
  {
    title: 'Anmeldefrist Lineare Beschreibung',
    detail: 'Anmeldung bis 30.09.2026',
    to: '/zucht-herdebuch',
  },
  {
    title: 'Neue Informationen Blauzungenkrankheit',
    detail: 'Aktualisierte Empfehlungen für Halterinnen',
    to: '/haltung-gesundheit',
  },
  {
    title: 'Anmeldung Herbsttagung geöffnet',
    detail: '18. Oktober 2026 in Bern',
    to: '/veranstaltungen',
  },
]
