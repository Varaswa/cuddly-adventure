import { NWKS_DOWNLOADS, NWKS_INFOBRIEFE } from '../data/sources'
import type { HubCard } from './types'

export type DownloadCategory = {
  slug: string
  tag: string
  title: string
  lead: string
  description: string
  sourceHref: string
}

export const downloadCategories: DownloadCategory[] = [
  {
    slug: 'haltung',
    tag: 'Haltung',
    title: 'Haltung & Tierschutz',
    lead: 'Merkblatt Haltungsbedingungen, Tierschutzverordnung, Kontrollhandbuch und Chip-Bestellung.',
    description: 'Dokumente zur artgerechten Haltung und zu den gesetzlichen Mindestvorgaben.',
    sourceHref: NWKS_DOWNLOADS,
  },
  {
    slug: 'gesundheit',
    tag: 'Gesundheit',
    title: 'Gesundheit',
    lead: 'Vorträge und Formulare zu Tierseuchen, Untersuchung und Vorsorge.',
    description: 'Öffentliche Gesundheitsdokumente, darunter der Infotreffen-Vortrag 2025.',
    sourceHref: NWKS_DOWNLOADS,
  },
  {
    slug: 'zucht',
    tag: 'Zucht',
    title: 'Tierzucht',
    lead: 'Zuchtreglement, lineare Beschreibung, Faser, Leistungsbewertung und Musterbögen.',
    description: 'Die auf nwks.ch/downloads unter Tierzucht veröffentlichten Dateien.',
    sourceHref: NWKS_DOWNLOADS,
  },
  {
    slug: 'herdebuch',
    tag: 'Herdebuch',
    title: 'Herdebuch',
    lead: 'Anmeldeformular, Preisliste und Chip-Bestellung. Mitglieder arbeiten in NWKSoft.',
    description: 'Formulare bleiben für Nichtmitglieder; Mitglieder melden über NWKSoft.',
    sourceHref: NWKS_DOWNLOADS,
  },
  {
    slug: 'dna',
    tag: 'DNA',
    title: 'DNA / Genetik',
    lead: 'DNA-Reglement, genetische Bewertung und Infobriefe zum SNP-Wechsel.',
    description: 'Ab 2026 akzeptiert der Bund nur noch SNP-Analysen.',
    sourceHref: NWKS_DOWNLOADS,
  },
  {
    slug: 'tgi',
    tag: 'TGI',
    title: 'Tiergestützte Intervention',
    lead: 'Empfehlungen des NWKS und Pflichtenheft der Arbeitsgruppe TGI.',
    description: 'Qualitätsrahmen für Therapie, Pädagogik und Coaching mit Neuweltkameliden.',
    sourceHref: NWKS_DOWNLOADS,
  },
  {
    slug: 'verein',
    tag: 'Verein',
    title: 'Verein',
    lead: 'Statuten, Beitritt, Preisliste, Tätigkeitsprogramm, Datenschutz und Unterstützungsreglement.',
    description: 'Organisatorische Grundlagen des NWKS.',
    sourceHref: NWKS_DOWNLOADS,
  },
  {
    slug: 'infobriefe',
    tag: 'Infobrief',
    title: 'Infobriefe',
    lead: 'Aktuelle Ausgaben 2026 und Archiv 2025. Ältere Briefe liegen auf der Infobrief-Seite.',
    description: 'Vereinsinfos, Termine und fachliche Hinweise an die Mitglieder.',
    sourceHref: NWKS_INFOBRIEFE,
  },
]

export const downloadCategoryCards: HubCard[] = downloadCategories.map((category) => ({
  to: `/downloads/${category.slug}`,
  title: category.title,
  description: category.lead,
}))

export function downloadCategoryBySlug(slug: string) {
  return downloadCategories.find((category) => category.slug === slug)
}
