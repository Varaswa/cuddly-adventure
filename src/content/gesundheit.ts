import {
  BGK_BLAUZUNGE,
  BGK_HOME,
  NWKS_AHL,
  NWKS_BLAUZUNGE,
  NWKS_GESUNDHEIT,
  NWKS_HALTUNG,
  SEKRETARIAT_EMAIL,
  VORTRAG_TIERSEUCHEN_PDF,
} from '../data/sources'
import type { Article } from './types'

export const gesundheitArticles: Article[] = [
  {
    path: '/haltung-gesundheit/gesundheit',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Gesundheit / Medizin',
    eyebrow: 'Vorsorge',
    lead:
      'Parasitenprogramm, tägliche Beobachtung, Impfungen und Fachliteratur – zusammengefasst von nwks.ch/gesundheit. Lieber einmal zu oft den Tierarzt rufen.',
    heroVariant: 'sand',
    alert: {
      title: 'Information Blauzungenkrankheit',
      body: 'BTV 3 ist in der Schweiz angekommen. Der BGK empfiehlt die Impfung für alle empfänglichen Tierarten.',
      to: '/haltung-gesundheit/blauzungenkrankheit',
      cta: 'Zur Meldung →',
    },
    sections: [
      {
        title: 'Parasiten',
        paragraphs: [
          'Besondere Beachtung gilt den inneren Parasiten. Das Parasitenprogramm des BGK empfiehlt regelmässige Kotproben – beim BGK oder über den Bestandestierarzt. Anhand des Befalls gezielt behandeln, um Resistenzen bei Entwurmungsmitteln zu vermeiden.',
          'Neuweltkameliden haben Lederballen statt Klauen und erkranken deshalb nicht an den üblichen Klauenkrankheiten. Gegen Endo- und Ektoparasiten (Würmer, Leberegel, Milben, Haarlinge) sind sie jedoch ebenso anfällig.',
        ],
      },
      {
        title: 'Beobachtung und Warnzeichen',
        paragraphs: [
          'Die Tiere zeigen oft erst spät, dass sie sich unwohl fühlen. Täglich beobachten und den Kot kontrollieren. Ein Tier, das im Stall bleibt, während die Herde auf die Weide geht, oder das nicht mehr frisst und wiederkäut, braucht Abklärung. Normaltemperatur rektal 37,5–38,9 °C.',
          'Augenentzündungen sind nicht selten, besonders bei Jungtieren nach Wälzen im Staub oder nach dem Angespucktwerden.',
        ],
      },
      {
        title: 'Impfungen und Neugeborene',
        paragraphs: [
          'Empfohlen werden die gängigen Impfungen für Schafe und Ziegen, etwa gegen Clostridien (Tetanus, Breiniere, Enterotoxämie); Pasteurellen und Mannheimia je nach Region. Plus die aktuelle BTV-3-Empfehlung des BGK. Den Bestandestierarzt fragen.',
          'Häufig empfohlen: Vitamin-E-/Selen-Injektion für Neugeborene, Nabeldesinfektion bei kurzem Abriss, bei Bedarf ein Microklist für den ersten Kotabsatz.',
        ],
      },
      {
        title: 'Fachliteratur',
        paragraphs: [
          'Der NWKS empfiehlt unter anderem «Neuweltkameliden – Praktische Informationen zur Haltung» von Patrik Zanolari und Marietta Schönmann (Bestellung über das Sekretariat), Gauly «Neuweltkameliden» (vergriffen) und Rappensberger «Lamas und Alpakas». Hilfreich ist ausserdem das Merkblatt zur Geburt.',
        ],
      },
    ],
    sources: [
      { label: 'NWKS Gesundheit/Medizin', href: NWKS_GESUNDHEIT },
      { label: 'BGK Beratungs- und Gesundheitsdienst', href: BGK_HOME },
    ],
    downloads: [{ label: 'Vortrag aktuelle Tierseuchen (Infotreffen 2025)', href: VORTRAG_TIERSEUCHEN_PDF }],
    related: [
      {
        to: '/haltung-gesundheit/blauzungenkrankheit',
        title: 'Blauzungenkrankheit',
        description: 'BTV 3, Impfempfehlung des BGK.',
      },
      {
        to: '/haltung-gesundheit/parasiten',
        title: 'Parasiten',
        description: 'Kotprobenprogramm und Resistenzvermeidung.',
      },
      {
        to: '/haltung-gesundheit/tuberkulose',
        title: 'TB-Überwachung',
        description: 'Freiwilliges Programm für Export und Status.',
      },
    ],
  },
  {
    path: '/haltung-gesundheit/blauzungenkrankheit',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Blauzungenkrankheit',
    eyebrow: 'Aktuelle Meldung',
    lead:
      'Die Blauzungenkrankheit ist in der Schweiz angekommen. Neben BTV 8 und 4 zirkuliert BTV 3 – laut NWKS die gefährlichere Variante, vor allem bei Schafen.',
    heroVariant: 'warm',
    alert: {
      title: 'Information Blauzungenkrankheit',
      body: 'Der BGK empfiehlt die Impfung für alle empfänglichen Tierarten. Die Impfung erfolgt durch die Bestandestierärzte im Auftrag der Tierhaltenden.',
      href: BGK_BLAUZUNGE,
      cta: 'BGK-Empfehlung öffnen →',
    },
    sections: [
      {
        title: 'Was der Verband kommuniziert',
        paragraphs: [
          'BTV 3 gilt als gefährlicher als die älteren Serotypen und kann bei Schafen oft zum Tod führen. Die Impfung ist nach heutigem Stand die beste Möglichkeit, Verlusten vorzubeugen.',
          'Der NWKS verweist auf die Fachseite des BGK. Am Infotreffen 2025 gab es einen Vortrag zu aktuellen Tierseuchen (Blauzunge, MKS und andere).',
        ],
      },
    ],
    sources: [
      { label: 'NWKS Blauzungenkrankheit', href: NWKS_BLAUZUNGE },
      { label: 'BGK Impfempfehlungen', href: BGK_BLAUZUNGE },
    ],
    downloads: [{ label: 'Vortrag Infotreffen 23.08.2025', href: VORTRAG_TIERSEUCHEN_PDF }],
    related: [
      {
        to: '/haltung-gesundheit/gesundheit',
        title: 'Gesundheit / Medizin',
        description: 'Vorsorge, Parasiten, Impfungen.',
      },
      {
        to: '/downloads/gesundheit',
        title: 'Downloads Gesundheit',
        description: 'Vorträge und Fachdokumente.',
      },
    ],
  },
  {
    path: '/haltung-gesundheit/parasiten',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Parasiten',
    eyebrow: 'BGK-Programm',
    lead:
      'Regelmässige Kotproben und gezielte Behandlung – so lassen sich Resistenzen vermeiden. Quelle: NWKS Gesundheit und BGK.',
    heroVariant: 'sand',
    sections: [
      {
        title: 'Kotproben statt Routine-Entwurmung',
        paragraphs: [
          'Das Parasitenprogramm des BGK empfiehlt, Kotproben einzusenden oder den Tierarzt zu beauftragen. Erst anhand des Befalls behandeln. Das gilt für Endoparasiten (Würmer, Leberegel) und Ektoparasiten (Milben, Haarlinge).',
          'Weidemanagement gehört dazu: proteinarme, nicht zusätzlich gedüngte Weiden und ausreichend Fläche reduzieren den Infektionsdruck. Details zur Haltung stehen unter Haltungsbedingungen.',
        ],
      },
    ],
    sources: [
      { label: 'NWKS Gesundheit/Medizin', href: NWKS_GESUNDHEIT },
      { label: 'BGK', href: BGK_HOME },
      { label: 'NWKS Haltung / Pflege', href: NWKS_HALTUNG },
    ],
    related: [
      {
        to: '/haltung-gesundheit/gesundheit',
        title: 'Gesundheit / Medizin',
        description: 'Gesamtüberblick Vorsorge.',
      },
      {
        to: '/haltung-gesundheit/vorsorge',
        title: 'Tägliche Vorsorge',
        description: 'Beobachtung, Temperatur, Neugeborene.',
      },
    ],
  },
  {
    path: '/haltung-gesundheit/vorsorge',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'Tägliche Vorsorge',
    eyebrow: 'Praxis',
    lead:
      'Tägliche Beobachtung, Kotkontrolle und ein realistischer Umgang mit dem «stillen» Krankheitsverlauf der Neuweltkameliden.',
    heroVariant: 'salbei',
    sections: [
      {
        title: 'Leitspruch der Fachgruppe',
        paragraphs: [
          '«Lieber einmal zu oft den Tierarzt rufen, als einmal zu wenig.» Die Tiere zeigen Unwohlsein oft erst spät. Isolieren von der Herde, Fressunlust und fehlendes Wiederkäuen sind Warnzeichen. Körpertemperatur 37,5–38,9 °C.',
        ],
      },
      {
        title: 'Neugeborene',
        paragraphs: [
          'Vitamin E/Selen, Nabeldesinfektion und bei Bedarf ein Microklist werden auf der NWKS-Gesundheitsseite häufig empfohlen. Zur Geburt gibt es ein separates Merkblatt; Fachliteratur ist über sekretariat@nwks.ch bestellbar.',
        ],
      },
    ],
    sources: [
      { label: 'NWKS Gesundheit/Medizin', href: NWKS_GESUNDHEIT },
      { label: `Sekretariat (${SEKRETARIAT_EMAIL})`, href: `mailto:${SEKRETARIAT_EMAIL}` },
    ],
    related: [
      {
        to: '/haltung-gesundheit/gesundheit',
        title: 'Gesundheit / Medizin',
        description: 'Impfungen, Literatur, Parasiten.',
      },
      {
        to: '/haltung-gesundheit/parasiten',
        title: 'Parasiten',
        description: 'Kotprobenprogramm des BGK.',
      },
    ],
  },
  {
    path: '/haltung-gesundheit/tuberkulose',
    hubPath: '/haltung-gesundheit',
    hubLabel: 'Haltung / Pflege',
    title: 'TB-Überwachungsprogramm',
    eyebrow: 'Tierverkehr / Export',
    lead:
      'Freiwilliges betriebseigenes Programm zu Infektionen mit dem Mycobacterium-tuberculosis-Komplex – Voraussetzung für bestimmten EU-Tierverkehr. Quelle: nwks.ch/ahl.',
    heroVariant: 'warm',
    sections: [
      {
        title: 'Wozu das Programm da ist',
        paragraphs: [
          'Seit dem 17. Oktober 2021 darf in der EU und im Verkehr Schweiz–EU kein grenzüberschreitender Tierverkehr mehr stattfinden, wenn die Tiere nicht im TB-Überwachungsprogramm stehen und mindestens einmal innert 12 Monaten negativ auf Tbc getestet wurden. Kontakt zu Tieren ohne denselben Status ist ausgeschlossen.',
        ],
        bullets: [
          'Fleischuntersuchung aller geschlachteten Camelidae aus dem Betrieb.',
          'Nekropsie von Falltieren älter als 9 Monate, soweit logistisch und fachlich möglich.',
          'Jährlicher Tiergesundheitsbesuch durch eine Tierärztin oder einen Tierarzt.',
          'Jährliche Untersuchung mit Negativbefund aller zu Zuchtzwecken gehaltenen Camelidae.',
        ],
      },
      {
        title: 'Rolle des NWKS',
        paragraphs: [
          'Der Verband hat das Konzept mit dem BLV erarbeitet. Das Herdebuch führt Bestandslisten und die Liste der beteiligten Betriebe. Kosten und Verantwortung liegen beim Betrieb. Die Generalversammlung vom 4. März 2023 hat den Vorstand ermächtigt, das Programm zu unterzeichnen.',
          'Teilnehmende Betriebe dürfen untereinander nur Tierverkehr haben, wenn der andere Betrieb am selben Tag oder früher gestartet ist – das betrifft Decken, Verkauf, Ferienhaltung und Shows. Ausstieg oder Kontakt zu Nichtteilnehmenden führt zum Ausscheiden; das ist dem Verein sofort zu melden.',
        ],
      },
      {
        title: 'Anmeldung und Kosten',
        paragraphs: [
          'Anmeldung schriftlich an die Herdebuchstelle inkl. TVD-Nummer. Die Liste der angemeldeten Betriebe wird auf nwks.ch/ahl geführt (Stand der öffentlichen Liste: 09.06.2026). Angedachte Kosten gemäss Verbandsinfo: TB-Test Fr. 10.– bis 60.– pro Zuchttier, Untersuchung verstorbener Tiere Fr. 80.– bis 250.–; Schlachtuntersuchung erfolgt automatisch und ist kostenlos.',
        ],
      },
    ],
    sources: [{ label: 'NWKS TB-Überwachungsprogramm', href: NWKS_AHL }],
    related: [
      {
        to: '/haltung-gesundheit/gesundheit',
        title: 'Gesundheit / Medizin',
        description: 'Allgemeine Vorsorge.',
      },
      {
        to: '/zucht-herdebuch/herdebuch',
        title: 'Herdebuch',
        description: 'Bestandslisten und NWKSoft.',
      },
    ],
  },
]
