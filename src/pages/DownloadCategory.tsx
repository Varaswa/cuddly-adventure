import { useParams } from 'react-router-dom'
import { downloadCategoryBySlug } from '../content'
import { downloads } from '../data/demo'
import SubpageLayout from '../components/ui/SubpageLayout'
import Card from '../components/ui/Card'
import { Badge, PrimaryCta, TextCta } from '../components/ui/primitives'
import NichtGefunden from './NichtGefunden'
import type { Article } from '../content/types'

export default function DownloadCategory() {
  const { slug } = useParams()
  const category = slug ? downloadCategoryBySlug(slug) : undefined

  if (!category) {
    return <NichtGefunden />
  }

  const list = downloads.filter((doc) => doc.tags.includes(category.tag))

  const article: Article = {
    path: `/downloads/${category.slug}`,
    hubPath: '/downloads',
    hubLabel: 'Downloads',
    title: category.title,
    eyebrow: 'Dokumentkategorie',
    lead: category.lead,
    heroVariant: 'sand',
    sections: [
      {
        paragraphs: [category.description],
      },
    ],
    sources: [{ label: 'Kategorie auf nwks.ch', href: category.sourceHref }],
    related: [
      { to: '/downloads', title: 'Gesamtkatalog', description: 'Alle öffentlichen Dateien mit Suche und Tags.' },
    ],
  }

  return (
    <SubpageLayout article={article}>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {list.map((doc) => (
          <Card key={doc.id}>
            <div className="flex items-start justify-between gap-2">
              <Badge>{doc.type}</Badge>
              {doc.current ? <Badge tone="salbei">Aktuell</Badge> : <Badge tone="muted">Archiv</Badge>}
            </div>
            <h2 className="mt-3 text-base font-semibold text-anthrazit">{doc.title}</h2>
            <p className="mt-1 text-sm text-anthrazit/60">{doc.meta}</p>
            <PrimaryCta href={doc.url} className="mt-4 self-start px-3 py-2">
              Öffnen
            </PrimaryCta>
          </Card>
        ))}
      </div>
      {list.length === 0 && (
        <p className="mt-8 text-sm text-anthrazit/60">
          In dieser Kategorie sind derzeit keine öffentlichen Dateien hinterlegt.{' '}
          <TextCta to="/downloads">Zum Gesamtkatalog →</TextCta>
        </p>
      )}
    </SubpageLayout>
  )
}
