export type NavChild = {
  to: string
  label: string
}

export type NavItem = {
  to: string
  label: string
  children?: NavChild[]
}

export const navLinks: NavItem[] = [
  { to: '/', label: 'Startseite' },
  {
    to: '/haltung-gesundheit',
    label: 'Haltung & Gesundheit',
    children: [
      { to: '/haltung-gesundheit/haltungsbedingungen', label: 'Haltungsbedingungen' },
      { to: '/haltung-gesundheit/neuweltkameliden', label: 'Neuweltkameliden' },
      { to: '/haltung-gesundheit/tierschutzverordnung', label: 'Tierschutzverordnung' },
      { to: '/haltung-gesundheit/gesundheit', label: 'Gesundheit' },
      { to: '/haltung-gesundheit/blauzungenkrankheit', label: 'Blauzungenkrankheit' },
    ],
  },
  {
    to: '/zucht-herdebuch',
    label: 'Zucht & Herdebuch',
    children: [
      { to: '/zucht-herdebuch/nwksoft', label: 'NWKSoft' },
      { to: '/zucht-herdebuch/herdebuch', label: 'Herdebuch' },
      { to: '/zucht-herdebuch/lineare-beschreibung', label: 'Lineare Beschreibung' },
      { to: '/zucht-herdebuch/dna', label: 'DNA / SNP' },
      { to: '/zucht-herdebuch/reglemente', label: 'Reglemente' },
    ],
  },
  { to: '/veranstaltungen', label: 'Veranstaltungen' },
  { to: '/suche', label: 'Hofsuche' },
  {
    to: '/downloads',
    label: 'Downloads',
    children: [
      { to: '/downloads/haltung', label: 'Haltung' },
      { to: '/downloads/zucht', label: 'Zucht' },
      { to: '/downloads/verein', label: 'Verein' },
      { to: '/downloads/infobriefe', label: 'Infobriefe' },
    ],
  },
  { to: '/tierverkauf', label: 'Tierverkauf' },
  {
    to: '/mein-nwks',
    label: 'Mein NWKS',
    children: [
      { to: '/mein-nwks/verein', label: 'Verein' },
      { to: '/mein-nwks/mitgliedschaft', label: 'Mitgliedschaft' },
      { to: '/mein-nwks/kontakte', label: 'Kontakte' },
    ],
  },
]

export const interesseCards = [
  {
    id: 'interesse',
    title: 'Ich interessiere mich für Lamas & Alpakas',
    description: 'Grundwissen, Haltung, Tiere erleben und Höfe finden.',
    to: '/haltung-gesundheit/neuweltkameliden',
    accent: 'salbei' as const,
  },
  {
    id: 'halter',
    title: 'Ich halte bereits Tiere',
    description: 'Gesundheit, Fütterung, Pflege, Vorschriften und Formulare.',
    to: '/haltung-gesundheit/haltungsbedingungen',
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
    to: '/haltung-gesundheit/neuweltkameliden',
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
