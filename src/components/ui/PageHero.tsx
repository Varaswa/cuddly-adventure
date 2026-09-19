import type { ReactNode } from 'react'

type Variant = 'dark' | 'sand' | 'salbei' | 'warm'

const variants: Record<Variant, string> = {
  dark: 'relative overflow-hidden bg-anthrazit text-warmweiss',
  sand: 'border-b border-sand bg-gradient-to-r from-sand/70 via-warmweiss to-salbei/20',
  salbei: 'border-b border-sand bg-gradient-to-br from-salbei/25 via-warmweiss to-sand/50',
  warm: 'border-b border-sand bg-gradient-to-r from-sand/50 to-warmweiss',
}

type Props = {
  eyebrow?: string
  title: string
  lead?: ReactNode
  actions?: ReactNode
  aside?: ReactNode
  variant?: Variant
  size?: 'md' | 'lg'
}

export default function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  aside,
  variant = 'sand',
  size = 'md',
}: Props) {
  const padding = size === 'lg' ? 'py-16 sm:py-24 lg:py-32' : 'py-12 sm:py-16'
  const titleClass =
    size === 'lg'
      ? 'max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'
      : 'max-w-3xl text-3xl font-bold leading-tight sm:text-4xl'
  const dark = variant === 'dark'
  const eyebrowClass = dark
    ? 'text-sm font-semibold uppercase tracking-wider text-sand'
    : 'text-sm font-semibold uppercase tracking-wider text-salbei'
  const leadClass = dark
    ? 'mt-5 max-w-2xl text-base text-warmweiss/80 sm:text-lg'
    : 'mt-4 max-w-2xl text-base text-anthrazit/70'

  return (
    <section className={variants[variant]}>
      {variant === 'dark' && (
        <>
          <div
            className="absolute inset-0 bg-gradient-to-br from-anthrazit via-anthrazit/95 to-salbei"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 40%, rgba(107,143,113,0.5) 0%, transparent 45%), radial-gradient(circle at 80% 20%, rgba(232,223,208,0.35) 0%, transparent 40%)',
            }}
            aria-hidden
          />
        </>
      )}
      <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${padding}`}>
        <div className={aside ? 'grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] lg:items-end' : ''}>
          <div>
            {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
            <h1 className={`${eyebrow ? 'mt-2' : ''} ${titleClass} ${dark ? 'text-warmweiss' : 'text-anthrazit'}`}>
              {title}
            </h1>
            {lead && <div className={leadClass}>{lead}</div>}
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {aside}
        </div>
      </div>
    </section>
  )
}
