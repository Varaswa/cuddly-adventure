import type { SourceLink } from '../../content/types'
import Card from './Card'
import { TextCta } from './primitives'

type Props = {
  sources?: SourceLink[]
  downloads?: SourceLink[]
}

export default function SourceBox({ sources = [], downloads = [] }: Props) {
  if (sources.length === 0 && downloads.length === 0) return null

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {sources.length > 0 && (
        <Card variant="sand">
          <h2 className="text-base font-semibold text-anthrazit">Quellen</h2>
          <ul className="mt-3 space-y-2">
            {sources.map((source) => (
              <li key={source.href}>
                <TextCta href={source.href}>{source.label} →</TextCta>
              </li>
            ))}
          </ul>
        </Card>
      )}
      {downloads.length > 0 && (
        <Card>
          <h2 className="text-base font-semibold text-anthrazit">Dokumente</h2>
          <ul className="mt-3 space-y-2">
            {downloads.map((doc) => (
              <li key={doc.href}>
                <TextCta href={doc.href}>{doc.label} →</TextCta>
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  )
}
