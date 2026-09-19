import { TIERVERKAUF_ALPAKAS_PDF, TIERVERKAUF_LAMAS_PDF } from './sources'

export const tierverkaufFilter = {
  tierarten: ['Alpaka', 'Lama'],
  geschlechter: ['Stute', 'Hengst', 'Wallach', 'gemischt'],
  kantone: ['BE', 'FR', 'LU', 'SO', 'SZ'],
  zuchtstatus: ['Zuchttiere', 'Hobby', 'Jungtiere'],
  herdebuch: ['Herdebuch', 'ohne Herdebuch', 'NWKS-registriert'],
}

export type TierInserat = {
  id: number
  name: string
  tierart: 'Alpaka' | 'Lama'
  geschlecht: string
  alter: string
  kanton: string
  zuchtstatus: string
  herdebuch: string
  anbieter: string
  preis: string
  notes?: string
  url?: string
  website?: string
  isDemo?: boolean
}

/**
 * Öffentliche Gruppeninserate der NWKS-Verkaufslisten.
 * Keine erfundenen Tiernamen. Aktuelle PDFs: Alpakas 09.07.2026, Lamas 27.07.2026.
 */
export const tiere: TierInserat[] = [
  {
    id: 1,
    name: 'Hengst und Stute Jg. 2025',
    tierart: 'Alpaka',
    geschlecht: 'gemischt',
    alter: 'Jg. 2025',
    kanton: 'BE',
    zuchtstatus: 'Jungtiere',
    herdebuch: 'NWKS-registriert',
    anbieter: 'Alpakas vom Glütschbach, Thun',
    preis: 'auf Anfrage',
    notes:
      'Halfterführig, grundimmunisiert, gegen Blauzunge geimpft. Regelmässige Kotproben nach BGK. Stand Verkaufsliste 09.07.2026.',
    url: TIERVERKAUF_ALPAKAS_PDF,
    website: 'http://www.alpakas-vom-gluetschbach.ch/',
  },
  {
    id: 2,
    name: 'Stuten 2024–2026 und Wallach 2024',
    tierart: 'Alpaka',
    geschlecht: 'gemischt',
    alter: 'Jg. 2024–2026',
    kanton: 'SO',
    zuchtstatus: 'Zuchttiere',
    herdebuch: 'Herdebuch',
    anbieter: 'FUNRANGE, Selzach',
    preis: 'auf Anfrage',
    notes:
      'Geimpft, entwurmt, mit Gesundheitszeugnis und Herdebuchausweis, halfterführig. Besichtigung auf Voranmeldung. Stand 09.07.2026 (Meldung 20.06.2026).',
    url: TIERVERKAUF_ALPAKAS_PDF,
    website: 'https://www.funrange.ch',
  },
  {
    id: 3,
    name: 'Crias 2025 (Hengste/Wallach und Stuten)',
    tierart: 'Alpaka',
    geschlecht: 'gemischt',
    alter: 'Jg. 2025',
    kanton: 'FR',
    zuchtstatus: 'Jungtiere',
    herdebuch: 'NWKS-registriert',
    anbieter: 'AlpakaHof Gempenach, Gempenach',
    preis: 'auf Anfrage',
    notes:
      'Mehrere Crias 2025, gesund, registriert, bei Abgabe ans Halfter gewohnt, im TB-Programm. Stand Liste 09.07.2026 (Meldung 15.12.2025).',
    url: TIERVERKAUF_ALPAKAS_PDF,
  },
  {
    id: 4,
    name: 'Hengste Jg. 2025, verschiedene Farben',
    tierart: 'Lama',
    geschlecht: 'Hengst',
    alter: 'Jg. 2025',
    kanton: 'LU',
    zuchtstatus: 'Jungtiere',
    herdebuch: 'Herdebuch',
    anbieter: 'Lama Entlebuch, Escholzmatt',
    preis: 'auf Anfrage',
    notes:
      'Classic/Wooly/Suri je nach Inserat. Gechipt, halfterführig, linear beschrieben. Stand Lama-Verkaufsliste 27.07.2026.',
    url: TIERVERKAUF_LAMAS_PDF,
    website: 'https://www.lama-entlebuch.ch/',
  },
  {
    id: 5,
    name: '4 Stuten Jg. 2025',
    tierart: 'Lama',
    geschlecht: 'Stute',
    alter: 'Jg. 2025',
    kanton: 'SZ',
    zuchtstatus: 'Jungtiere',
    herdebuch: 'ohne Herdebuch',
    anbieter: 'Familie Bürgler, Illgau',
    preis: 'auf Anfrage',
    notes: 'Halfterführig, gechipt und entwurmt. Kontakt laut Liste: Maria Bürgler. Stand 27.07.2026.',
    url: TIERVERKAUF_LAMAS_PDF,
  },
  {
    id: 6,
    name: '10 Stuten Jg. 2023/2024',
    tierart: 'Lama',
    geschlecht: 'Stute',
    alter: 'Jg. 2023/2024',
    kanton: 'SZ',
    zuchtstatus: 'Zuchttiere',
    herdebuch: 'Herdebuch',
    anbieter: 'Lamahof Sattel, Sattel',
    preis: 'auf Anfrage',
    notes: 'Gechipt, linear beschrieben und halfterführig. Stand Lama-Verkaufsliste 27.07.2026.',
    url: TIERVERKAUF_LAMAS_PDF,
    website: 'https://www.lamahof.ch',
  },
]

export const tierverkaufHinweis =
  'Die Inserate sind Zusammenfassungen der öffentlichen NWKS-Verkaufslisten (Alpakas Stand 09.07.2026, Lamas Stand 27.07.2026). NWKS stellt nur die Plattform bereit – Kaufvertrag und Verantwortung liegen beim jeweiligen Anbieter. Einträge werden laut Liste nach einem Jahr gelöscht. Meldungen: sekretariat@nwks.ch.'
