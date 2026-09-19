export const navLinks = [
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
    icon: 'lama' as const,
    to: '/haltung-gesundheit',
  },
  {
    title: 'Haltung & Gesundheit',
    description: 'Praxiswissen',
    icon: 'haltung' as const,
    to: '/haltung-gesundheit',
  },
  {
    title: 'Zucht & Herdebuch',
    description: 'Zucht, DNA, Faser, NWKSoft',
    icon: 'zucht' as const,
    to: '/zucht-herdebuch',
  },
  {
    title: 'NWKS & Mitgliedschaft',
    description: 'Verein & Vorteile',
    icon: 'verein' as const,
    to: '/mein-nwks',
  },
]
