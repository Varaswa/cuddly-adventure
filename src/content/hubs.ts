import { NWKS_DOWNLOADS, NWKS_HALTUNG, NWKS_VEREIN, NWKS_ZUCHT } from '../data/sources'
import type { HubDefinition } from './types'
import { downloadCategoryCards } from './downloads'

export const haltungHub: HubDefinition = {
  path: '/haltung-gesundheit',
  label: 'Haltung / Pflege',
  title: 'Haltung / Pflege',
  eyebrow: 'Haltung & Gesundheit',
  lead: 'Hier finden Sie Informationen darüber, was Lamas und Alpakas benötigen, um sich wohlzufühlen.',
  heroVariant: 'salbei',
  hero: {
    layout: 'split-reverse',
    image: 'heroes/haltung.jpg',
    imageAlt: 'Alpaka auf der Weide',
    objectPosition: 'center 20%',
    accent: 'salbei',
  },
  sourceHref: NWKS_HALTUNG,
  sourceLabel: 'Haltung/Pflege auf nwks.ch',
  groups: [
    {
      title: 'Themen',
      description: 'Die Folgeseiten der öffentlichen NWKS-Seite Haltung / Pflege.',
      cards: [
        {
          to: '/haltung-gesundheit/haltungsbedingungen',
          title: 'Haltungsbedingungen',
          description: 'Stall, Weide, Fläche, Fütterung und Pflege – Merkblatt und Praxisregeln.',
        },
        {
          to: '/haltung-gesundheit/neuweltkameliden',
          title: 'Neuweltkameliden',
          description: 'Lama, Alpaka, Herkunft und Nutzung im Überblick.',
        },
        {
          to: '/haltung-gesundheit/tierschutzverordnung',
          title: 'Tierschutzverordnung',
          description: 'Gesetzliche Mindestvorgaben, Flächen und Sachkundenachweis.',
        },
      ],
    },
  ],
}

export const haltungExtraGroups = [
  {
    title: 'Gesundheit',
    description: 'Vorsorge, aktuelle Seuchenhinweise und das TB-Programm.',
    cards: [
      {
        to: '/haltung-gesundheit/gesundheit',
        title: 'Gesundheit / Medizin',
        description: 'Parasiten, Impfungen, Beobachtung und Fachliteratur.',
        icon: '🩺',
      },
      {
        to: '/haltung-gesundheit/blauzungenkrankheit',
        title: 'Blauzungenkrankheit',
        description: 'BTV 3, Impfempfehlung des BGK.',
        icon: '⚠️',
      },
      {
        to: '/haltung-gesundheit/parasiten',
        title: 'Parasiten',
        description: 'Kotprobenprogramm des BGK, Resistenzvermeidung.',
        icon: '🔬',
      },
      {
        to: '/haltung-gesundheit/tuberkulose',
        title: 'TB-Überwachung',
        description: 'Freiwilliges Programm für Export und Status.',
        icon: '📋',
      },
      {
        to: '/haltung-gesundheit/vorsorge',
        title: 'Tägliche Vorsorge',
        description: 'Warnzeichen, Temperatur, Neugeborene.',
        icon: '👀',
      },
    ],
  },
  {
    title: 'Tiere kennenlernen',
    description: 'Vertiefung zu Art, Nutzung und TGI.',
    cards: [
      {
        to: '/haltung-gesundheit/alpaka',
        title: 'Alpaka',
        description: 'Huacaya und Suri, Vlies und Charakter.',
      },
      {
        to: '/haltung-gesundheit/lama',
        title: 'Lama',
        description: 'Classic, Wooly, Suri und Traglast.',
      },
      {
        to: '/haltung-gesundheit/nutzung',
        title: 'Nutzung',
        description: 'Trekking, Wolle, Fleisch, Herdenschutz.',
      },
      {
        to: '/haltung-gesundheit/tgi',
        title: 'Tiergestützte Intervention',
        description: 'Freizeit versus TGI, Empfehlungen des NWKS.',
      },
      {
        to: '/haltung-gesundheit/neueinsteiger',
        title: 'Tipps für Neueinsteiger',
        description: 'Zucht oder Hobby klären, Tiere ansehen, Unterlagen mitnehmen.',
      },
    ],
  },
]

export const zuchtHub: HubDefinition = {
  path: '/herdebuch',
  label: 'Herdebuch',
  title: 'Herdebuch',
  eyebrow: 'Zucht & Nachweis',
  lead:
    'Zuchtprogramm, Registrierung, DNA, Faseranalyse und Reglemente. Das digitale Herdebuch führen Mitglieder über NWKSoft.',
  heroVariant: 'dark',
  hero: {
    layout: 'editorial',
    image: 'heroes/zucht.jpg',
    imageAlt: 'Alpaka im Porträt',
    objectPosition: 'center 40%',
    accent: 'sand',
  },
  sourceHref: NWKS_ZUCHT,
  sourceLabel: 'Zuchtseite nwks.ch',
  groups: [
    {
      title: 'Themen',
      description: 'Die öffentlichen Folgeseiten zu Zucht und Herdebuch – ohne separates Software-Thema.',
      cards: [
        {
          to: '/herdebuch/zuchtprogramm',
          title: 'Zuchtprogramm',
          description: 'Lineare Beschreibung, Faser, DNA, Deckmeldungen, TZV.',
        },
        {
          to: '/herdebuch/registrierung',
          title: 'Registrierung / Abstammung',
          description: 'An- und Ummeldung, Kostenregeln, Formulare für Nichtmitglieder.',
        },
        {
          to: '/herdebuch/dna',
          title: 'DNA / Genetik',
          description: 'Ab 2026 nur SNP. Parentage und BLW-Anerkennung.',
        },
        {
          to: '/herdebuch/faser',
          title: 'Faseranalyse',
          description: 'Leistungsbewertung und Diagramme lesen.',
        },
        {
          to: '/herdebuch/lineare-beschreibung',
          title: 'Lineare Beschreibung',
          description: 'Objektive Exterieurbeurteilung, Beschreiber, Termine.',
        },
        {
          to: '/herdebuch/reglemente',
          title: 'Reglemente',
          description: 'Zucht, DNA, Faser, Beschreibung – öffentliche PDFs.',
        },
      ],
    },
  ],
}

export const downloadsHub: HubDefinition = {
  path: '/downloads',
  label: 'Downloads',
  title: 'Dokumente & Formulare',
  eyebrow: 'Service',
  lead:
    'Öffentliche Dateien von nwks.ch, nach den Kategorien der Verbands-Downloadseite gegliedert. PDFs öffnen auf nwks.ch.',
  heroVariant: 'sand',
  hero: {
    layout: 'ribbon',
    image: 'heroes/downloads.jpg',
    imageAlt: 'Berglandschaft im Abendlicht',
    objectPosition: 'center 40%',
    accent: 'sand',
  },
  sourceHref: NWKS_DOWNLOADS,
  sourceLabel: 'Downloads auf nwks.ch',
  groups: [
    {
      title: 'Kategorien',
      description: 'Dieselben inhaltlichen Gruppen wie auf der öffentlichen Downloadseite.',
      cards: downloadCategoryCards,
    },
  ],
}

export const vereinHub: HubDefinition = {
  path: '/mein-nwks',
  label: 'Mein NWKS',
  title: 'Verein & Mitgliedschaft',
  eyebrow: 'Mein NWKS',
  lead:
    'Öffentliche Vereinsinfos: Statuten, Vorstand, Kontakte und Beitritt. Der persönliche Login bleibt NWKSoft vorbehalten.',
  heroVariant: 'salbei',
  hero: {
    layout: 'spotlight',
    image: 'heroes/mein-nwks.jpg',
    imageAlt: 'Grosse Alpakaherde in der Landschaft',
    objectPosition: 'center 55%',
    accent: 'naturgruen',
    size: 'lg',
  },
  sourceHref: NWKS_VEREIN,
  sourceLabel: 'Verein auf nwks.ch',
  groups: [
    {
      title: 'Verein',
      cards: [
        {
          to: '/mein-nwks/verein',
          title: 'Der Verein',
          description: 'Zweck, Aufgaben und Organe seit 1995.',
        },
        {
          to: '/mein-nwks/mitgliedschaft',
          title: 'Mitgliedschaft',
          description: 'Aktiv, Passiv, Beiträge 2026, Aufnahme.',
        },
        {
          to: '/mein-nwks/statuten',
          title: 'Statuten',
          description: 'Gültig ab 1. März 2025 – Kurzfassung plus PDF.',
        },
        {
          to: '/mein-nwks/vorstand',
          title: 'Vorstand & Team',
          description: 'Öffentlich genannte Funktionen.',
        },
        {
          to: '/mein-nwks/kontakte',
          title: 'Kontakte',
          description: 'Sekretariat, Herdebuch, Präsident.',
        },
      ],
    },
  ],
}

export const hubs = [haltungHub, zuchtHub, downloadsHub, vereinHub]
