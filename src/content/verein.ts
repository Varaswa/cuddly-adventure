import {
  BEITRITT_PDF,
  DATENSCHUTZ_PDF,
  HERDEBUCH_EMAIL,
  HERDEBUCH_TEL,
  NWKSOFT_LOGIN,
  NWKS_KONTAKTE,
  NWKS_VEREIN,
  PRAESIDENT_EMAIL,
  PRAESIDENT_TEL,
  PREISLISTE_2026_PDF,
  SEKRETARIAT_EMAIL,
  SEKRETARIAT_TEL,
  STATUTEN_PDF,
  TGI_ANSPRECH_EMAIL,
  UNTERSTUETZUNGSREGLEMENT_PDF,
  VIZEPRAESIDENT_EMAIL,
  ZUCHTWART_EMAIL,
} from '../data/sources'
import type { Article } from './types'

export const vereinArticles: Article[] = [
  {
    path: '/mein-nwks/verein',
    hubPath: '/mein-nwks',
    hubLabel: 'Mein NWKS',
    title: 'Der Verein',
    eyebrow: 'NWKS',
    lead:
      'Neuweltkameliden Schweiz, gegründet 1995, ist die vom Bund anerkannte Zuchtorganisation für Lamas und Alpakas. Zweck und Aufgaben stammen aus den Statuten vom 1. März 2025.',
    heroVariant: 'salbei',
    sections: [
      {
        title: 'Zweck',
        paragraphs: [
          'Der Verein bezweckt die Förderung der Neuweltkameliden in den Bereichen Nutz-, Zucht-, Liebhaber-, Freizeit- und Trekkingtiere sowie Therapie und leistet einen Beitrag zum kulturellen und gesellschaftlichen Leben. Er ist politisch unabhängig und konfessionell neutral. Sitz ist das jeweilige Domizil der Geschäftsstelle.',
        ],
      },
      {
        title: 'Aufgaben',
        bullets: [
          'Organisation öffentlicher Vereinsanlässe',
          'Zusammenarbeit mit nationalen und internationalen NWK-Vereinen',
          'Interessenvertretung gegenüber Behörden und Öffentlichkeit',
          'Pflichten als eidgenössisch anerkannte Zuchtorganisation',
          'Aus- und Weiterbildung',
          'Nationale und internationale Shows und Leistungsschauen',
          'Fachinformation zur verantwortungsvollen, tiergerechten Haltung',
        ],
      },
      {
        title: 'Organe',
        paragraphs: [
          'Oberstes Organ ist die Vereinsversammlung (jährlich innert sechs Monaten nach Kalenderjahrschluss). Der Vorstand hat 5–7 Mitglieder, Amtsdauer vier Jahre. Zwei Rechnungsrevisoren und 2–3 Zuchtleistungsrevisoren ergänzen die Organisation. Arbeitsgruppen setzt die Versammlung ein, Projektgruppen der Vorstand.',
        ],
      },
    ],
    sources: [
      { label: 'NWKS Verein', href: NWKS_VEREIN },
      { label: 'Statuten (PDF, gültig ab 01.03.2025)', href: STATUTEN_PDF },
    ],
    downloads: [
      { label: 'Statuten NWKS', href: STATUTEN_PDF },
      { label: 'Unterstützungsreglement ab 01.01.2026', href: UNTERSTUETZUNGSREGLEMENT_PDF },
      { label: 'Datenschutzerklärung', href: DATENSCHUTZ_PDF },
    ],
    related: [
      {
        to: '/mein-nwks/mitgliedschaft',
        title: 'Mitgliedschaft',
        description: 'Aktiv, Passiv, Beiträge und Aufnahme.',
      },
      {
        to: '/mein-nwks/vorstand',
        title: 'Vorstand & Team',
        description: 'Öffentlich genannte Funktionen.',
      },
    ],
  },
  {
    path: '/mein-nwks/mitgliedschaft',
    hubPath: '/mein-nwks',
    hubLabel: 'Mein NWKS',
    title: 'Mitgliedschaft',
    eyebrow: 'Beitritt',
    lead:
      'Aktivmitglied (stimmberechtigt) ist, wer Neuweltkameliden hält, betreut oder besitzt. Passivmitglied unterstützt den Verein ohne Stimmrecht. Beiträge gemäss Preisliste 2026.',
    heroVariant: 'sand',
    sections: [
      {
        title: 'Aufnahme',
        paragraphs: [
          'Gesuch schriftlich an die Geschäftsstelle. Der Vorstand prüft und nimmt provisorisch auf; die Vereinsversammlung entscheidet abschliessend. Ehrenmitglieder ernennt die Versammlung – beitragsfrei und stimmberechtigt.',
          'Jedes Mitglied verpflichtet sich zu artgerechter Haltung und darf die Leistungen des Vereins nutzen. Austritt schriftlich mindestens 30 Tage vor der ordentlichen Versammlung. Beiträge nach dem 30. September im Beitrittsjahr entfallen für das laufende Kalenderjahr.',
        ],
      },
      {
        title: 'Beiträge 2026',
        bullets: [
          'Einzelmitgliedschaft Fr. 100.–',
          'Doppelmitgliedschaft Fr. 160.–',
          'Passivmitglied Fr. 80.–',
        ],
      },
      {
        title: 'Vorteile',
        bullets: [
          'NWKSoft Basic ohne Zusatzkosten',
          'Anmeldung zu linearer Beschreibung, DNA und Faser über NWKSoft',
          'Infobriefe, Tätigkeitsprogramm, Interessenvertretung',
        ],
      },
    ],
    sources: [
      { label: 'NWKS Verein / Statuten', href: NWKS_VEREIN },
      { label: 'NWKSoft Login', href: NWKSOFT_LOGIN },
    ],
    downloads: [
      { label: 'Beitrittserklärung (PDF)', href: BEITRITT_PDF },
      { label: 'Preisliste 2026', href: PREISLISTE_2026_PDF },
    ],
    related: [
      {
        to: '/mein-nwks/verein',
        title: 'Der Verein',
        description: 'Zweck, Aufgaben, Organe.',
      },
      {
        to: '/zucht-herdebuch/nwksoft',
        title: 'NWKSoft',
        description: 'Herdebuch digital führen.',
      },
    ],
  },
  {
    path: '/mein-nwks/vorstand',
    hubPath: '/mein-nwks',
    hubLabel: 'Mein NWKS',
    title: 'Vorstand & Team',
    eyebrow: 'Organisation',
    lead:
      'Öffentlich auf nwks.ch/kontakte genannte Funktionen. Kein vollständiges privates Verzeichnis – nur die vom Verband veröffentlichten Rollen.',
    heroVariant: 'warm',
    sections: [
      {
        title: 'Vorstand (öffentlich genannt)',
        bullets: [
          `Präsident: Markus Kyburz, ${PRAESIDENT_TEL}`,
          'Vizepräsident: Rolf Fedier',
          'Zuchtwart: Rolf Zaugg',
          'Anlässe/Aktivitäten: Markus Hächler, Stéphanie von Bergen',
          'Aktuarin/Wissenschaft: Tanja Sprenger',
          'Tiergesundheit: Anne Kramer',
          'Rino Werren (ohne öffentlich genannte Ressortbezeichnung)',
        ],
      },
      {
        title: 'Weitere öffentliche Funktionen',
        bullets: [
          'Sekretariat: René Riedweg, 6182 Escholzmatt',
          'Herdebuch: Gaby Krattinger, 3145 Niederscherli',
          'Lineare Beschreiber: Robert Gartner, Bruno Bucher, Olivia Zaugg, Beat Lauber, Brigitte Hermann',
          `TGI-Vorsitz: Esther Maurer (${TGI_ANSPRECH_EMAIL})`,
        ],
      },
    ],
    sources: [{ label: 'NWKS Kontakte', href: NWKS_KONTAKTE }],
    related: [
      {
        to: '/mein-nwks/kontakte',
        title: 'Kontakte',
        description: 'E-Mail und Telefon der Geschäftsstelle.',
      },
      {
        to: '/mein-nwks/verein',
        title: 'Der Verein',
        description: 'Statuten und Organe.',
      },
    ],
  },
  {
    path: '/mein-nwks/kontakte',
    hubPath: '/mein-nwks',
    hubLabel: 'Mein NWKS',
    title: 'Kontakte',
    eyebrow: 'Geschäftsstelle',
    lead:
      'Die vom Verband veröffentlichten Adressen. Ein Klick auf nwks.ch/kontakte öffnet die Namensliste mit Mail-Links.',
    heroVariant: 'sand',
    sections: [
      {
        title: 'Sekretariat',
        paragraphs: [
          `René Riedweg, NeuweltkamelidenSchweiz Sekretariat, 6182 Escholzmatt, ${SEKRETARIAT_TEL}, ${SEKRETARIAT_EMAIL}.`,
        ],
      },
      {
        title: 'Herdebuch',
        paragraphs: [
          `Gaby Krattinger, 3145 Niederscherli, ${HERDEBUCH_TEL}, ${HERDEBUCH_EMAIL}.`,
        ],
      },
      {
        title: 'Präsident und Zuchtwart',
        paragraphs: [
          `Markus Kyburz ${PRAESIDENT_EMAIL}, ${PRAESIDENT_TEL}. Rolf Fedier ${VIZEPRAESIDENT_EMAIL}. Rolf Zaugg ${ZUCHTWART_EMAIL}.`,
        ],
      },
    ],
    sources: [{ label: 'NWKS Kontakte', href: NWKS_KONTAKTE }],
    related: [
      {
        to: '/mein-nwks/vorstand',
        title: 'Vorstand & Team',
        description: 'Alle öffentlich genannten Rollen.',
      },
      {
        to: '/mein-nwks/mitgliedschaft',
        title: 'Mitgliedschaft',
        description: 'Beitritt über die Geschäftsstelle.',
      },
    ],
  },
  {
    path: '/mein-nwks/statuten',
    hubPath: '/mein-nwks',
    hubLabel: 'Mein NWKS',
    title: 'Statuten',
    eyebrow: 'Grundlage',
    lead:
      'Angenommen an der Vereinsversammlung vom 1. März 2025 in Escholzmatt. Unterzeichnet von Präsident Markus Kyburz und Vizepräsident Rolf Fedier.',
    heroVariant: 'dark',
    sections: [
      {
        title: 'Was die Statuten regeln',
        paragraphs: [
          'Name und Sitz, Zweck und Aufgaben, Mitgliedschaft (Aktiv, Passiv, Ehre), Finanzen, Organe, Datenschutz und Auflösung. Mitgliederdaten (Name, Adresse, Telefon, E-Mail, Betriebs- und TVD-Nummer) können anderen Mitgliedern bekanntgegeben werden; Name und Adresse dürfen auf der Website oder in Mitteilungen erscheinen.',
          'Diese Seite ist eine Kurzfassung. Verbindlich ist das PDF.',
        ],
      },
    ],
    sources: [
      { label: 'Statuten PDF', href: STATUTEN_PDF },
      { label: 'NWKS Verein', href: NWKS_VEREIN },
    ],
    downloads: [
      { label: 'Statuten NWKS', href: STATUTEN_PDF },
      { label: 'Datenschutzerklärung', href: DATENSCHUTZ_PDF },
    ],
    related: [
      {
        to: '/mein-nwks/verein',
        title: 'Der Verein',
        description: 'Zweck und Aufgaben in Kurzform.',
      },
      {
        to: '/mein-nwks/mitgliedschaft',
        title: 'Mitgliedschaft',
        description: 'Rechte, Pflichten, Beiträge.',
      },
    ],
  },
]
