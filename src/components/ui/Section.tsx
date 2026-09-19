import type { ReactNode } from 'react'

type Tone = 'plain' | 'sand' | 'salbei' | 'dark'

const tones: Record<Tone, string> = {
  plain: '',
  sand: 'bg-sand/40',
  salbei: 'bg-salbei/10',
  dark: 'bg-anthrazit text-warmweiss',
}

type Props = {
  children: ReactNode
  tone?: Tone
  id?: string
  className?: string
}

export default function Section({ children, tone = 'plain', id, className = '' }: Props) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">{children}</div>
    </section>
  )
}

type HeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  action?: ReactNode
}

export function SectionHeading({ eyebrow, title, description, action }: HeadingProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-salbei">{eyebrow}</p>
        )}
        <h2 className={`${eyebrow ? 'mt-2' : ''} font-serif text-2xl font-semibold tracking-tight text-anthrazit sm:text-3xl`}>
          {title}
        </h2>
        {description && <div className="mt-2 max-w-2xl text-anthrazit/70">{description}</div>}
      </div>
      {action}
    </div>
  )
}
