import type { ReactNode } from 'react'
import { heroForArticle } from '../../content'
import type { Article } from '../../content/types'
import { Badge } from './primitives'
import AlertBanner from './AlertBanner'
import ArticleBody from './ArticleBody'
import Breadcrumb from './Breadcrumb'
import HubCards from './HubCards'
import PageCta from './PageCta'
import PageHero from './PageHero'
import Section from './Section'
import SourceBox from './SourceBox'

type Props = {
  article: Article
  actions?: ReactNode
  children?: ReactNode
}

export default function SubpageLayout({ article, actions, children }: Props) {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Start', to: '/' },
          { label: article.hubLabel, to: article.hubPath },
          { label: article.title },
        ]}
      />
      <PageHero
        {...heroForArticle(article)}
        eyebrow={article.eyebrow}
        title={article.title}
        lead={article.lead}
        actions={actions}
      />
      {article.alert && (
        <AlertBanner
          title={article.alert.title}
          to={article.alert.to}
          href={article.alert.href}
          cta={article.alert.cta}
        >
          {article.alert.body}
        </AlertBanner>
      )}
      <Section>
        {article.demo && (
          <div className="mb-8">
            <Badge tone="demo">Demo</Badge>
            <p className="mt-2 text-sm text-anthrazit/65">
              Dieser Abschnitt enthält ergänzte Hinweise und ist als Demo markiert.
            </p>
          </div>
        )}
        <ArticleBody sections={article.sections} />
        {children}
        <div className="mt-10">
          <SourceBox sources={article.sources} downloads={article.downloads} />
        </div>
      </Section>
      {article.related && article.related.length > 0 && (
        <Section tone="sand">
          <h2 className="text-2xl font-bold text-anthrazit">Weiterlesen</h2>
          <HubCards cards={article.related} />
        </Section>
      )}
      <PageCta
        title="Mehr aus demselben Bereich"
        description={`Zurück zu ${article.hubLabel} oder die öffentlichen Originale auf nwks.ch öffnen.`}
        primary={{ label: article.hubLabel, to: article.hubPath }}
        secondary={{ label: 'Downloads', to: '/downloads' }}
      />
    </div>
  )
}
