export type HeroVariant = 'dark' | 'sand' | 'salbei' | 'warm'

export type SourceLink = {
  label: string
  href: string
}

export type ArticleSection = {
  title?: string
  paragraphs?: string[]
  bullets?: string[]
}

export type AlertSpec = {
  title: string
  body: string
  to?: string
  href?: string
  cta?: string
}

export type HubCard = {
  to: string
  title: string
  description: string
  icon?: string
}

export type HubGroup = {
  title: string
  description?: string
  cards: HubCard[]
}

export type Article = {
  path: string
  hubPath: string
  hubLabel: string
  title: string
  eyebrow?: string
  lead: string
  heroVariant: HeroVariant
  sections: ArticleSection[]
  sources: SourceLink[]
  downloads?: SourceLink[]
  related?: HubCard[]
  alert?: AlertSpec
  demo?: boolean
}

export type HubDefinition = {
  path: string
  label: string
  title: string
  eyebrow?: string
  lead: string
  heroVariant: HeroVariant
  groups: HubGroup[]
  sourceHref?: string
  sourceLabel?: string
}
