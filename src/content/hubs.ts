import { NWKS_DOWNLOADS, NWKS_HALTUNG, NWKS_VEREIN, NWKS_ZUCHT } from '../data/sources'
import type { HubDefinition } from './types'
import { downloadCategoryCards } from './downloads'

export const haltungHub: HubDefinition = {
  path: '/haltung-gesundheit',
  label: 'Haltung / Pflege',
  title: 'Haltung / Pflege',
  eyebrow: 'Haltung & Gesundheit',
  lead:
    'Hier finden Sie Informationen darüber, was Lamas und Alpakas benötigen, um sich wohlzufühlen – Haltungsbedingungen, Artenkunde und die Tierschutzverordnung, ergänzt um Gesundheitsthemen des Verbands.',
  heroVariant: 'salbei',
  sourceHref: NWKS_HALTUNG,
  sourceLabel: 'Haltung/Pflege auf nwks.ch',
  groups: [
    {
      title: 'Haltung / Pflege',
      description: 'Die drei Folgeseiten der öffentlichen NWKS-Haltungsseite, plus Einstieg und Arten.',
      cards: [
        {
          to: '/haltung-gesundheit/haltungsbedingungen',
          title: 'Haltungsbedingungen',
          description: 'Stall, Weide, Fläche, Fütterung und Pflege – Merkblatt und Praxisregeln.',
          icon: '🌿',
        },
        {
          to: '/haltung-gesundheit/neuweltkameliden',
          title: 'Neuweltkameliden',
          description: 'Lama, Alpaka, Herkunft und Nutzung im Überblick.',
          icon: '🦙',
        },
        {
          to: '/haltung-gesundheit/tierschutzverordnung',
          title: 'Tierschutzverordnung',
          description: 'Art. 57/58 TSchV, Mindestflächen und Sachkundenachweis.',
          icon: '⚖️',
        },
        {
          to: '/haltung-gesundheit/neueinsteiger',
          title: 'Tipps für Neueinsteiger',
          description: 'Zucht oder Hobby klären, Tiere ansehen, Unterlagen mitnehmen.',
          icon: '🧭',
        },
      ],
    },
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
      ],
    },
  ],
}

export const zuchtHub: HubDefinition = {
  path: '/zucht-herdebuch',
  label: 'Zucht & Herdebuch',
  title: 'Zucht, Abstammung und NWKSoft',
  eyebrow: 'Zucht & Herdebuch',
  lead:
    'Herdebuch, DNA, Faseranalyse und Reglemente – die öffentlichen Unterseiten von nwks.ch/zucht und nwks.ch/herdebuch als zusammenhängende Folgeseiten.',
  heroVariant: 'dark',
  sourceHref: NWKS_ZUCHT,
  sourceLabel: 'Zuchtseite nwks.ch',
  groups: [
    {
      title: 'Herdebuch digital',
      cards: [
        {
          to: '/zucht-herdebuch/nwksoft',
          title: 'NWKSoft',
          description: 'Login seit 1. April 2025. Basic kostenlos, Pro Fr. 85.–/Jahr.',
        },
        {
          to: '/zucht-herdebuch/herdebuch',
          title: 'Herdebuch',
          description: 'An- und Ummeldung, Kostenregeln, Formulare für Nichtmitglieder.',
        },
      ],
    },
    {
      title: 'Züchterische Tätigkeiten',
      cards: [
        {
          to: '/zucht-herdebuch/zuchtprogramm',
          title: 'Zuchtprogramm',
          description: 'Lineare Beschreibung, Faser, DNA, Deckmeldungen, TZV.',
        },
        {
          to: '/zucht-herdebuch/lineare-beschreibung',
          title: 'Lineare Beschreibung',
          description: 'Objektive Exterieurbeurteilung, Beschreiber, Termine.',
        },
        {
          to: '/zucht-herdebuch/dna',
          title: 'DNA / SNP',
          description: 'Ab 2026 nur SNP. Parentage und BLW-Anerkennung.',
        },
        {
          to: '/zucht-herdebuch/faser',
          title: 'Faseranalyse',
          description: 'Leistungsbewertung und Diagramme lesen.',
        },
        {
          to: '/zucht-herdebuch/reglemente',
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
