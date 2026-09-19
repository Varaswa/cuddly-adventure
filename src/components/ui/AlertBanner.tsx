import type { ReactNode } from 'react'
import { TextCta } from './primitives'

type Props = {
  title: string
  children: ReactNode
  to?: string
  href?: string
  cta?: string
  className?: string
}

export default function AlertBanner({ title, children, to, href, cta, className = '' }: Props) {
  return (
    <aside
      className={`border border-nwks-rot/20 bg-nwks-rot/5 ${className}`.trim()}
      role="status"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div className="flex gap-3">
          <span
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-nwks-rot/10 text-sm font-bold text-nwks-rot"
            aria-hidden
          >
            i
          </span>
          <div>
            <p className="text-sm font-semibold text-nwks-rot">{title}</p>
            <div className="mt-1 text-sm text-anthrazit/80">{children}</div>
          </div>
        </div>
        {(to || href) && (
          <TextCta to={to} href={href} className="shrink-0 self-start sm:mt-1">
            {cta ?? 'Mehr erfahren →'}
          </TextCta>
        )}
      </div>
    </aside>
  )
}
