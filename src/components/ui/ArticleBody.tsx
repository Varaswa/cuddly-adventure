import type { ArticleSection } from '../../content/types'

export default function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="max-w-3xl space-y-8">
      {sections.map((section, index) => (
        <section key={section.title ?? `abschnitt-${index}`}>
          {section.title && <h2 className="text-xl font-bold text-anthrazit sm:text-2xl">{section.title}</h2>}
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className={`${section.title ? 'mt-3' : ''} text-anthrazit/80`}>
              {paragraph}
            </p>
          ))}
          {section.bullets && (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-anthrazit/80">
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}
