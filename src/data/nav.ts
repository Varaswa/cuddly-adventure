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
  { to: '/', label: 'Start' },
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
    to: '/herdebuch',
    label: 'Herdebuch',
    children: [
      { to: '/herdebuch/zuchtprogramm', label: 'Zuchtprogramm' },
      { to: '/herdebuch/registrierung', label: 'Registrierung / Abstammung' },
      { to: '/herdebuch/dna', label: 'DNA / Genetik' },
      { to: '/herdebuch/faser', label: 'Faseranalyse' },
      { to: '/herdebuch/lineare-beschreibung', label: 'Lineare Beschreibung' },
      { to: '/herdebuch/reglemente', label: 'Reglemente' },
    ],
  },
  { to: '/veranstaltungen', label: 'Veranstaltungen' },
  {
    to: '/finden',
    label: 'Finden',
    children: [
      { to: '/finden#hoefe', label: 'Höfe' },
      { to: '/finden#tiere', label: 'Tiere' },
    ],
  },
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
    description: 'Herdebuch, Abstammung, DNA, Faser und Reglement.',
    to: '/herdebuch',
    accent: 'anthrazit' as const,
  },
]
