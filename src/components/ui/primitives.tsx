import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import ExternalLink from '../ExternalLink'

const primaryClass =
  'inline-flex items-center justify-center rounded-lg bg-nwks-rot px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-nwks-rot/90'
const secondaryClass =
  'inline-flex items-center justify-center rounded-lg border border-anthrazit/20 bg-warmweiss px-5 py-3 text-sm font-semibold text-anthrazit transition hover:bg-sand/50'
const ghostOnDarkClass =
  'inline-flex items-center justify-center rounded-lg border border-warmweiss/40 bg-warmweiss/10 px-5 py-3 text-sm font-semibold text-warmweiss backdrop-blur transition hover:bg-warmweiss/20'
const textLinkClass = 'text-sm font-semibold text-nwks-rot hover:underline'

type Linkish = {
  children: ReactNode
  className?: string
  to?: string
  href?: string
}

function SmartLink({ children, className, to, href }: Linkish) {
  if (href) {
    return (
      <ExternalLink href={href} className={className}>
        {children}
      </ExternalLink>
    )
  }
  return (
    <Link to={to ?? '/'} className={className}>
      {children}
    </Link>
  )
}

export function PrimaryCta({ children, className = '', to, href }: Linkish) {
  return (
    <SmartLink to={to} href={href} className={`${primaryClass} ${className}`}>
      {children}
    </SmartLink>
  )
}

export function SecondaryCta({ children, className = '', to, href }: Linkish) {
  return (
    <SmartLink to={to} href={href} className={`${secondaryClass} ${className}`}>
      {children}
    </SmartLink>
  )
}

export function GhostOnDarkCta({ children, className = '', to, href }: Linkish) {
  return (
    <SmartLink to={to} href={href} className={`${ghostOnDarkClass} ${className}`}>
      {children}
    </SmartLink>
  )
}

export function TextCta({ children, className = '', to, href }: Linkish) {
  return (
    <SmartLink to={to} href={href} className={`${textLinkClass} ${className}`}>
      {children}
    </SmartLink>
  )
}

export function FilterChip({
  label,
  active,
  onClick,
  tone = 'anthrazit',
}: {
  label: string
  active: boolean
  onClick: () => void
  tone?: 'anthrazit' | 'salbei'
}) {
  const activeClass = tone === 'salbei' ? 'bg-salbei text-white' : 'bg-anthrazit text-warmweiss'
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
        active ? activeClass : 'bg-sand/70 text-anthrazit hover:bg-sand'
      }`}
    >
      {label}
    </button>
  )
}

export function Badge({
  children,
  tone = 'sand',
}: {
  children: ReactNode
  tone?: 'sand' | 'salbei' | 'rot' | 'muted' | 'demo'
}) {
  const tones = {
    sand: 'bg-sand text-anthrazit/70',
    salbei: 'bg-salbei/15 text-salbei',
    rot: 'bg-nwks-rot/10 text-nwks-rot',
    muted: 'bg-anthrazit/10 text-anthrazit/60',
    demo: 'bg-sand px-2.5 text-anthrazit/70',
  }
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  )
}

export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-dashed border-sand bg-sand/40 p-6 text-sm text-anthrazit/70">
      <p className="font-semibold text-anthrazit">{title}</p>
      {description && <p className="mt-1">{description}</p>}
    </div>
  )
}

export function DemoNotice({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-2xl border border-dashed border-sand bg-sand/40 p-5">
      <Badge tone="demo">Demo</Badge>
      <div className="mt-2 text-sm text-anthrazit/70">{children}</div>
    </aside>
  )
}
