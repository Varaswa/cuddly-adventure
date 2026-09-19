import { downloadCategories, downloadCategoryBySlug, downloadCategoryCards } from './downloads'
import { gesundheitArticles } from './gesundheit'
import { haltungArticles } from './haltung'
import { haltungHub, haltungExtraGroups, zuchtHub, downloadsHub, vereinHub } from './hubs'
import type { Article, HubDefinition } from './types'
import { vereinArticles } from './verein'
import { zuchtArticles } from './zucht'

export const articles: Article[] = [
  ...haltungArticles,
  ...gesundheitArticles,
  ...zuchtArticles,
  ...vereinArticles,
]

const articlesByPath = new Map(articles.map((article) => [article.path, article]))

export function articleByPath(path: string): Article | undefined {
  return articlesByPath.get(path)
}

export function articlesForHub(hubPath: string): Article[] {
  return articles.filter((article) => article.hubPath === hubPath)
}

export function hubByPath(path: string): HubDefinition | undefined {
  return [haltungHub, zuchtHub, downloadsHub, vereinHub].find((hub) => hub.path === path)
}

export {
  downloadCategories,
  downloadCategoryBySlug,
  downloadCategoryCards,
  downloadsHub,
  haltungExtraGroups,
  haltungHub,
  vereinHub,
  zuchtHub,
}
export type { Article, HubCard, HubDefinition, AlertSpec, ArticleSection, SourceLink } from './types'
