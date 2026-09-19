import {
  BEITRITT_PDF,
  BGK_BLAUZUNGE,
  HERDEBUCH_EMAIL,
  INFOBRIEF_2_2026_PDF,
  NWKSOFT_LOGIN,
  NWKS_KONTAKTE,
  PREISLISTE_2026_PDF,
  SEKRETARIAT_EMAIL,
  SEKRETARIAT_TEL,
  TAETIGKEITSPROGRAMM_PDF,
} from './sources'

export const meinNwksShortcuts: { label: string; to: string; href?: string }[] = [
  { label: 'Herdebuch-Login', to: '/herdebuch', href: NWKSOFT_LOGIN },
  { label: 'Formulare', to: '/downloads' },
  { label: 'Veranstaltungen', to: '/veranstaltungen' },
  { label: 'Finden', to: '/finden' },
  { label: 'Weiterbildung', to: '/veranstaltungen' },
  { label: 'Infobrief', to: '/downloads', href: INFOBRIEF_2_2026_PDF },
]

export const fuerDichAktuell: { title: string; detail: string; to: string; href?: string }[] = [
  {
    title: 'Herbstbeschreibungen',
    detail: 'Lineare Beschreibungen im Oktober 2026 gemäss Tätigkeitsprogramm. Anmeldung über das digitale Herdebuch.',
    to: '/veranstaltungen',
    href: TAETIGKEITSPROGRAMM_PDF,
  },
  {
    title: 'Blauzungenkrankheit BTV 3',
    detail: 'BGK empfiehlt die Impfung für empfängliche Tierarten. Impfung durch den Bestandestierarzt.',
    to: '/haltung-gesundheit/blauzungenkrankheit',
    href: BGK_BLAUZUNGE,
  },
  {
    title: 'Digitales Herdebuch',
    detail: 'Mitglieder melden Tiere an und um – Login über NWKSoft.',
    to: '/herdebuch',
    href: NWKSOFT_LOGIN,
  },
]

export const mitgliedschaft = {
  beitragEinzel: 'Fr. 100.– Einzelmitgliedschaft (Preisliste 2026)',
  beitragDoppel: 'Fr. 160.– Doppelmitgliedschaft',
  beitragPassiv: 'Fr. 80.– Passivmitglied',
  beitrittUrl: BEITRITT_PDF,
  preislisteUrl: PREISLISTE_2026_PDF,
  nwksoftUrl: NWKSOFT_LOGIN,
  kontakteUrl: NWKS_KONTAKTE,
  sekretariat: `Sekretariat René Riedweg, 6182 Escholzmatt, ${SEKRETARIAT_TEL}, ${SEKRETARIAT_EMAIL}`,
  herdebuch: `Herdebuch Gaby Krattinger, 3145 Niederscherli, ${HERDEBUCH_EMAIL}`,
}
