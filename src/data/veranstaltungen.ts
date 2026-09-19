import {
  ALPAKA_SCHAU_BERN,
  ALPAKA_SHOW_USTER,
  NWKS_TGI,
  NWKS_VERANSTALTUNGEN,
  TAETIGKEITSPROGRAMM_PDF,
} from './sources'

export type Veranstaltung = {
  id: number
  title: string
  type: 'Tagung' | 'Kurs' | 'Show' | 'TGI' | 'Messe'
  date: string
  time: string
  location: string
  description: string
  open: boolean
  past?: boolean
  url?: string
  isDemo?: boolean
}

/** Quelle: Tätigkeitsprogramm 2026, Infobrief 1/2026, TGI-Seite. Heute: 19.09.2026. */
export const veranstaltungen: Veranstaltung[] = [
  {
    id: 1,
    title: 'Herbstbeschreibungen',
    type: 'Kurs',
    date: '10.2026',
    time: 'gemäss Anmeldung',
    location: 'bei den Betrieben',
    description:
      'Lineare Beschreibungen im Herbst. Anmeldeschluss für züchterische Tätigkeiten war der 31. August 2026. Anmeldung für Mitglieder über NWKSoft.',
    open: true,
    url: TAETIGKEITSPROGRAMM_PDF,
  },
  {
    id: 2,
    title: 'Infotreff',
    type: 'Tagung',
    date: '23.01.2027',
    time: 'gemäss Einladung',
    location: 'wird vom Verein bekannt gegeben',
    description: 'Infotreff gemäss Ausblick 2027 im offiziellen Tätigkeitsprogramm.',
    open: true,
    url: TAETIGKEITSPROGRAMM_PDF,
  },
  {
    id: 3,
    title: 'Anmeldeschluss züchterische Tätigkeiten Frühling',
    type: 'Kurs',
    date: '31.01.2027',
    time: 'ganzer Tag',
    location: 'NWKSoft',
    description:
      'Letzter Termin zur Anmeldung der züchterischen Tätigkeiten für den Frühling 2027.',
    open: true,
    url: TAETIGKEITSPROGRAMM_PDF,
  },
  {
    id: 4,
    title: '32. Generalversammlung',
    type: 'Tagung',
    date: '06.03.2027',
    time: 'gemäss Einladung',
    location: 'wird vom Verein bekannt gegeben',
    description: 'Ordentliche Vereinsversammlung 2027 gemäss Tätigkeitsprogramm.',
    open: false,
    url: TAETIGKEITSPROGRAMM_PDF,
  },
  {
    id: 5,
    title: 'Alpaka Show Uster',
    type: 'Show',
    date: '28.02.–01.03.2026',
    time: 'Samstag / Sonntag',
    location: 'Uster ZH',
    description: 'Alpaka Show gemäss Tätigkeitsprogramm und Infobrief 1/2026. Details: alpakashow.ch.',
    open: false,
    past: true,
    url: ALPAKA_SHOW_USTER,
  },
  {
    id: 6,
    title: '31. Generalversammlung',
    type: 'Tagung',
    date: '07.03.2026',
    time: 'gemäss Einladung',
    location: 'Hotel Sonne, Reiden LU',
    description: 'GV 2026 im Hotel Sonne in Reiden (Infobrief 1/Februar 2026).',
    open: false,
    past: true,
    url: TAETIGKEITSPROGRAMM_PDF,
  },
  {
    id: 7,
    title: 'Alpaka-Schau Bern',
    type: 'Show',
    date: '21.–22.03.2026',
    time: 'Samstag / Sonntag',
    location: 'Schüpbach BE',
    description: 'Alpaka-Schau Bern in Schüpbach. Details: alpaka-schau-bern.ch.',
    open: false,
    past: true,
    url: ALPAKA_SCHAU_BERN,
  },
  {
    id: 8,
    title: 'BEA – Vereinspräsenz',
    type: 'Messe',
    date: '24.04.–03.05.2026',
    time: 'Messebetrieb',
    location: 'Bern BE',
    description: 'NWKS-Präsenz an der BEA in Bern gemäss Tätigkeitsprogramm 2026.',
    open: false,
    past: true,
    url: NWKS_VERANSTALTUNGEN,
  },
  {
    id: 9,
    title: 'Tagestrekking bei Familie Rutz',
    type: 'Kurs',
    date: '03.05.2026',
    time: 'Tagesanlass',
    location: 'Küssnacht am Rigi SZ',
    description: 'Vereinstrekking bei Familie Rutz in Küssnacht am Rigi (Tätigkeitsprogramm / Infobrief 2/2026).',
    open: false,
    past: true,
    url: TAETIGKEITSPROGRAMM_PDF,
  },
  {
    id: 10,
    title: 'Malerlebnis mit Lamas',
    type: 'TGI',
    date: '30.05.2026',
    time: 'gemäss Flyer',
    location: 'Flüeli-Ranft OW',
    description: 'TGI-Anlass «Malerlebnis mit Lamas». Details auf der TGI-Seite des NWKS.',
    open: false,
    past: true,
    url: NWKS_TGI,
  },
  {
    id: 11,
    title: 'Stallkaffee alpakaaktiv',
    type: 'Kurs',
    date: '27.06.2026',
    time: 'gemäss Gastgeber',
    location: 'Zäziwil BE',
    description: 'Stallkaffee bei alpakaaktiv in Zäziwil gemäss Tätigkeitsprogramm 2026.',
    open: false,
    past: true,
    url: 'https://www.alpakaaktiv.ch',
  },
  {
    id: 12,
    title: 'Infotreff',
    type: 'Tagung',
    date: '22.08.2026',
    time: 'gemäss Einladung',
    location: 'wird vom Verein bekannt gegeben',
    description: 'Infotreff gemäss Tätigkeitsprogramm 2026.',
    open: false,
    past: true,
    url: TAETIGKEITSPROGRAMM_PDF,
  },
  {
    id: 13,
    title: 'Malerlebnis mit Lamas',
    type: 'TGI',
    date: '05.09.2026',
    time: 'gemäss Flyer',
    location: 'Flüeli-Ranft OW',
    description: 'Zweites Malerlebnis 2026, ausgeschrieben auf nwks.ch/tgi.',
    open: false,
    past: true,
    url: NWKS_TGI,
  },
]
