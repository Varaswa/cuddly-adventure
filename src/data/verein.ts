import {
  BEITRITT_PDF,
  NWKS_KONTAKTE,
  NWKS_VEREIN,
  PREISLISTE_2026_PDF,
  STATUTEN_PDF,
} from './sources'

/** Öffentliche Vereinsangaben von nwks.ch/verein und den Statuten vom 01.03.2025. */
export const vereinFakten = {
  gegruendet: '1995',
  anerkennung: 'Vom Bund anerkannte Zuchtorganisation für Lamas und Alpakas',
  zweck:
    'Förderung der Neuweltkameliden in den Bereichen Nutz-, Zucht-, Liebhaber-, Freizeit- und Trekkingtiere sowie Therapie. Beitrag zum kulturellen und gesellschaftlichen Leben.',
  aufgaben: [
    'Organisation öffentlicher Vereinsanlässe',
    'Zusammenarbeit mit nationalen und internationalen NWK-Vereinen',
    'Interessenvertretung gegenüber Behörden und Öffentlichkeit',
    'Pflichten als eidgenössisch anerkannte Zuchtorganisation',
    'Aus- und Weiterbildung',
    'Shows, Leistungsschauen und Fachinformation zur artgerechten Haltung',
  ],
  vorstandOeffentlich: [
    { rolle: 'Präsident', name: 'Markus Kyburz' },
    { rolle: 'Vizepräsident', name: 'Rolf Fedier' },
  ],
  statutenStand: 'Statuten gültig ab 01.03.2025',
  href: NWKS_VEREIN,
  statutenUrl: STATUTEN_PDF,
  beitrittUrl: BEITRITT_PDF,
  preislisteUrl: PREISLISTE_2026_PDF,
  kontakteUrl: NWKS_KONTAKTE,
}

export const mitgliedVorteile = [
  {
    title: 'NWKSoft Basic',
    description: 'Herdebuch selbst führen – Basic-Login für Mitglieder kostenlos (vom Verein getragen).',
  },
  {
    title: 'Züchterische Tätigkeiten',
    description: 'Anmeldung zu linearer Beschreibung, DNA/SNP und Faseranalyse über NWKSoft.',
  },
  {
    title: 'Infobriefe & Termine',
    description: 'Vereinsinfos, Tätigkeitsprogramm und Meldung eigener Anlässe an das Sekretariat.',
  },
  {
    title: 'Netzwerk & Interessenvertretung',
    description: 'Anerkannte Stimme gegenüber Behörden, Shows und Fachstellen.',
  },
]

export const neueinsteigerSchritte = [
  {
    title: 'Zucht oder Hobby klären',
    description:
      'Zucht braucht mindestens zwei getrennte Weidesysteme mit Unterstand. Hobbyhaltung ist oft eine Wallach- oder Hengstgruppe.',
  },
  {
    title: 'Haltungsrichtlinien lesen',
    description:
      'Mindestens zwei erwachsene Tiere, Sachkundenachweis, Chip für Crias. Grundlage: Tierschutzverordnung und BLV-Haltungsrichtlinien.',
  },
  {
    title: 'Mehrere Betriebe ansehen',
    description:
      'Nicht nur Preis prüfen: Haltung, Körperbau, Zahnstellung. Linear beschriebene bzw. herdebuchgeführte Tiere bevorzugen.',
  },
  {
    title: 'Nach dem Kauf absichern',
    description:
      'Rücknahmegarantie vereinbaren. Herdebuchkarte und Behandlungsjournal mitnehmen. Halfterführige, umgängliche Tiere erleichtern den Start.',
  },
]

export const zuchtAblauf = [
  {
    title: 'Lineare Beschreibung',
    description:
      'Objektive Exterieurbeurteilung durch NWKS-Beschreiber. Mitglieder melden über NWKSoft an.',
  },
  {
    title: 'Faserprobe',
    description:
      'Teil der Leistungsbewertung. Anleitung «Wie liest man Faserdiagramme?» liegt im Downloadbereich.',
  },
  {
    title: 'DNA / SNP',
    description:
      'Ab 2026 akzeptiert der Bund nur noch SNP-Analysen (Parentage, Inzucht, BLW-Anerkennung).',
  },
  {
    title: 'Deckmeldungen',
    description:
      'Sprungkontrolle und Geburten gehören zu den züchterischen Tätigkeiten und den TZV-Finanzhilfen.',
  },
]
