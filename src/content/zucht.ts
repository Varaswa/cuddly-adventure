import {
  NWKSOFT_LOGIN,
  NWKS_HERDEBUCH,
  NWKS_ZUCHT,
  PREISLISTE_2026_PDF,
} from '../data/sources'
import type { Article } from './types'

export const zuchtArticles: Article[] = [
  {
    path: '/herdebuch/registrierung',
    hubPath: '/herdebuch',
    hubLabel: 'Herdebuch',
    title: 'Registrierung & Abstammung',
    eyebrow: 'Nachweis',
    lead:
      'Mitglieder arbeiten im digitalen Herdebuch (NWKSoft). Formulare sind kostenpflichtig und für Nichtmitglieder gedacht. Quelle: nwks.ch/herdebuch.',
    heroVariant: 'sand',
    sections: [
      {
        title: 'Kostenregeln laut Verband',
        bullets: [
          'Neumeldungen innert 30 Tagen über NWKSoft sind gemäss Aktion kostenlos.',
          'Meldungen über Formulare sind immer kostenpflichtig – auch für Mitglieder.',
          'Mutation Mitglied zu Mitglied über NWKSoft: kostenlos.',
          'Mutation Mitglied zu Nichtmitglied über NWKSoft: kostenlos, der Käufer erhält keinen Ausweis; der Ausweis kann für Fr. 20.– beantragt werden.',
          'Nichtmitglied zu Mitglied oder Nichtmitglied zu Nichtmitglied: Formular, kostenpflichtig.',
        ],
      },
    ],
    sources: [
      { label: 'NWKS Herdebuch', href: NWKS_HERDEBUCH },
      { label: 'Zum digitalen Herdebuch (NWKSoft)', href: NWKSOFT_LOGIN },
    ],
    downloads: [{ label: 'Preisliste 2026', href: PREISLISTE_2026_PDF }],
    related: [
      {
        to: '/herdebuch/zuchtprogramm',
        title: 'Zuchtprogramm',
        description: 'Lineare Beschreibung, DNA und Faser.',
      },
      {
        to: '/downloads/herdebuch',
        title: 'Formulare Herdebuch',
        description: 'Anmeldeformular für Nichtmitglieder.',
      },
    ],
  },
  {
    path: '/herdebuch/zuchtprogramm',
    hubPath: '/herdebuch',
    hubLabel: 'Herdebuch',
    title: 'Züchterische Tätigkeiten',
    eyebrow: 'Programm',
    lead:
      'Objektive Beurteilung mit linearer Beschreibung, Faserprobe, DNA/SNP bzw. Coat-Color und Deckmeldungen. Der Bund unterstützt die Tierzucht.',
    heroVariant: 'dark',
    sections: [
      {
        title: 'Wozu die Tätigkeiten da sind',
        paragraphs: [
          'Sie zeigen, wo ein Betrieb in der Zucht steht, erlauben den Vergleich mit anderen Tieren und der internationalen Population, helfen bei Anpaarungen und beim Ausmerzen von Erbfehlern. Korrekter Körperbau ist auch ein Gesundheitsmerkmal – für Hobbyhalter wie für Züchter.',
          'Ab TZV 2026 zählen lineare Beschreibung, DNA, Faser, Geburten und Schlachtungen für Finanzhilfen. Der BLW-Merkmalkatalog ist in Bearbeitung.',
        ],
      },
      {
        title: 'Anmeldung',
        paragraphs: [
          'Mitglieder melden über NWKSoft an. Anmeldeschluss Herbst 2026 war der 31. August; der nächste Frühlingsschluss laut Tätigkeitsprogramm ist der 31. Januar 2027. Formulare bleiben für Nichtmitglieder.',
        ],
      },
    ],
    sources: [{ label: 'NWKS Zucht', href: NWKS_ZUCHT }],
    related: [
      {
        to: '/herdebuch/lineare-beschreibung',
        title: 'Lineare Beschreibung',
        description: 'Exterieurbeurteilung durch NWKS-Beschreiber.',
      },
      {
        to: '/herdebuch/dna',
        title: 'DNA / SNP',
        description: 'Ab 2026 nur noch SNP-Analysen.',
      },
      {
        to: '/herdebuch/faser',
        title: 'Faseranalyse',
        description: 'Leistungsbewertung und Diagramme lesen.',
      },
    ],
  },
  {
    path: '/herdebuch/lineare-beschreibung',
    hubPath: '/herdebuch',
    hubLabel: 'Herdebuch',
    title: 'Lineare Beschreibung',
    eyebrow: 'Exterieur',
    lead:
      'Objektive Beurteilung durch NWKS-Beschreiber. Richtlinien, Grundsätze, Kurzerklärung und Musterbögen liegen öffentlich vor.',
    heroVariant: 'sand',
    sections: [
      {
        title: 'Wer beschreibt',
        paragraphs: [
          'Öffentlich genannt: Robert Gartner, Bruno Bucher, Olivia Zaugg, Beat Lauber, Brigitte Hermann. Herbstbeschreibungen finden im Oktober statt; Mitglieder melden über NWKSoft an.',
        ],
      },
      {
        title: 'Dokumente',
        paragraphs: [
          'Richtlinien und Grundsätze zur linearen Beschreibung, Kurzerklärung, Beschreibungsbögen Alpaka / Wooly Lama / Classic Lama sowie das Reglement zur Gewichtung der Leistungsbewertung stehen unter Downloads.',
        ],
      },
    ],
    sources: [{ label: 'NWKS Zucht', href: NWKS_ZUCHT }],
    related: [
      {
        to: '/herdebuch/reglemente',
        title: 'Reglemente',
        description: 'Alle öffentlichen Zuchtdokumente.',
      },
      {
        to: '/veranstaltungen',
        title: 'Termine',
        description: 'Herbstbeschreibungen im Kalender.',
      },
    ],
  },
  {
    path: '/herdebuch/dna',
    hubPath: '/herdebuch',
    hubLabel: 'Herdebuch',
    title: 'DNA / Genetik',
    eyebrow: 'SNP',
    lead:
      'Ab 2026 akzeptiert der Bund nur noch SNP-Analysen, nicht mehr klassische STR-Marker. Parentage, Inzucht und BLW-Anerkennung.',
    heroVariant: 'warm',
    sections: [
      {
        title: 'Preise und Regeln',
        paragraphs: [
          'DNA-Probe (SNP) gemäss Preisliste 2026: Fr. 100.– für Mitglieder, Fr. 130.– für Nichtmitglieder. Das DNA-Reglement und das Reglement zur genetischen Bewertung gelten verbindlich.',
          'Zusätzlich gibt es Coat-Color-Tests als Teil der züchterischen Tätigkeiten.',
        ],
      },
    ],
    sources: [{ label: 'NWKS Zucht', href: NWKS_ZUCHT }],
    downloads: [{ label: 'Preisliste 2026', href: PREISLISTE_2026_PDF }],
    related: [
      {
        to: '/herdebuch/zuchtprogramm',
        title: 'Züchterische Tätigkeiten',
        description: 'Einordnung im Gesamtprogramm.',
      },
      {
        to: '/downloads/dna',
        title: 'DNA-Reglemente',
        description: 'PDF-Katalog Genetik.',
      },
    ],
  },
  {
    path: '/herdebuch/faser',
    hubPath: '/herdebuch',
    hubLabel: 'Herdebuch',
    title: 'Faseranalyse',
    eyebrow: 'Leistung',
    lead:
      'Faserproben sind Teil der züchterischen Tätigkeit und der Leistungsbewertung. Huacaya-Vlies typisch 15–30 Micron.',
    heroVariant: 'salbei',
    sections: [
      {
        title: 'Lesen und bewerten',
        paragraphs: [
          'Das Merkblatt «Wie liest man Faserdiagramme?» und das Reglement zur Faseranalyse liegen im Downloadbereich. Die Gewichtung in der Leistungsbewertung ist in einem eigenen Reglement geregelt.',
        ],
      },
    ],
    sources: [{ label: 'NWKS Zucht', href: NWKS_ZUCHT }],
    related: [
      {
        to: '/haltung-gesundheit/alpaka',
        title: 'Alpaka',
        description: 'Vliestypen Huacaya und Suri.',
      },
      {
        to: '/herdebuch/reglemente',
        title: 'Reglemente',
        description: 'Faser- und Leistungsreglemente.',
      },
    ],
  },
  {
    path: '/herdebuch/reglemente',
    hubPath: '/herdebuch',
    hubLabel: 'Herdebuch',
    title: 'Reglemente',
    eyebrow: 'Dokumente',
    lead:
      'Öffentliche Zucht-, DNA-, Faser- und Beschreibungsreglemente des NWKS. Die Dateien öffnen auf nwks.ch, sie werden hier nicht gehostet.',
    heroVariant: 'sand',
    sections: [
      {
        title: 'Was öffentlich liegt',
        paragraphs: [
          'Zuchtreglement, DNA-Reglement, Richtlinien und Grundsätze zur linearen Beschreibung, Faseranalyse-Reglement, genetische Bewertung, Gewichtung der Leistungsbewertung sowie Musterbögen. Aktuelle Fassungen stehen im Download-Katalog unter dem Tag Zucht.',
        ],
      },
    ],
    sources: [{ label: 'NWKS Zucht', href: NWKS_ZUCHT }],
    related: [
      {
        to: '/downloads/zucht',
        title: 'Downloads Zucht',
        description: 'Alle öffentlichen Zuchtdateien.',
      },
      {
        to: '/herdebuch/zuchtprogramm',
        title: 'Züchterische Tätigkeiten',
        description: 'Wie die Reglemente im Alltag greifen.',
      },
    ],
  },
]
