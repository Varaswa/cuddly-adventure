import {
  BGK_BLAUZUNGE,
  BGK_HOME,
  BLV_HOME,
  NWKSOFT_LOGIN,
  NWKS_HOME,
  TSCHV_FEDLEX,
} from './sources'

export type NwkLink = {
  title: string
  url: string
  group: string
  description: string
}

export const nwkLinks: NwkLink[] = [
  {
    title: 'NWKS – offizielle Website',
    url: NWKS_HOME,
    group: 'Verband',
    description: 'Verein, Downloads, Kalender, Verkaufslisten und Fachseiten.',
  },
  {
    title: 'NWKSoft Herdebuch-Login',
    url: NWKSOFT_LOGIN,
    group: 'Verband',
    description: 'Digitales Herdebuch für Mitglieder seit 1. April 2025.',
  },
  {
    title: 'BLV – Bundesamt für Lebensmittelsicherheit und Veterinärwesen',
    url: BLV_HOME,
    group: 'Behörden',
    description: 'Tierschutz, Tiergesundheit und nationale Vorgaben.',
  },
  {
    title: 'Tierschutzverordnung (TSchV)',
    url: TSCHV_FEDLEX,
    group: 'Behörden',
    description: 'Gesetzliche Mindestanforderungen an die Haltung.',
  },
  {
    title: 'BGK – Beratungs- und Gesundheitsdienst für Kleinwiederkäuer',
    url: BGK_HOME,
    group: 'Gesundheit',
    description: 'Kotprobenprogramm, Parasitenberatung, Fachinfos.',
  },
  {
    title: 'Blauzungenkrankheit (BGK)',
    url: BGK_BLAUZUNGE,
    group: 'Gesundheit',
    description: 'Aktuelle Impfempfehlungen zu BTV inklusive Serotyp 3.',
  },
  {
    title: 'Schweizerische Vereinigung für Wiederkäuergesundheit',
    url: 'http://www.svwassr.ch',
    group: 'Gesundheit',
    description: 'Fachverein Wiederkäuergesundheit (NWKS-Linkliste).',
  },
  {
    title: 'Wiederkäuerklinik Bern (DKV)',
    url: 'http://www.dkv.unibe.ch/content/index_ger.html',
    group: 'Gesundheit',
    description: 'Departement für klinische Veterinärmedizin, Universität Bern.',
  },
  {
    title: 'Giftpflanzen-Datenbank (Vetpharm UZH)',
    url: 'http://www.vetpharm.uzh.ch/perldocs/toxsyqry.htm',
    group: 'Gesundheit',
    description: 'Toxikologische Abfrage, auf der NWKS-Linkliste empfohlen.',
  },
  {
    title: 'NWK e.V. (Deutschland)',
    url: 'https://nwk-verein.de/',
    group: 'Vereine',
    description: 'Verein der Züchter, Halter und Freunde von Neuweltkameliden e.V.',
  },
  {
    title: 'GTTA – Gesellschaft für Tiergestützte Therapie und Aktivitäten',
    url: 'https://gtta.ch/',
    group: 'TGI',
    description: 'Schweizer Fachverband für TGI (NWKS-Linkliste).',
  },
  {
    title: 'AATLA',
    url: 'http://www.aatla.de',
    group: 'TGI',
    description: 'Weiterbildungsinstitut für TGI mit Lamas und Alpakas.',
  },
  {
    title: 'AELAS',
    url: 'https://www.aelas.org/',
    group: 'Vereine',
    description: 'Europäische Lama- und Alpaka-Organisation (NWKS-Linkliste).',
  },
]
