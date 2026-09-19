import type { ReactNode } from 'react'
import { PrimaryCta, GhostOnDarkCta } from './primitives'

type Props = {
  title?: string
  description?: ReactNode
  primary?: { label: string; to?: string; href?: string }
  secondary?: { label: string; to?: string; href?: string }
}

export default function PageCta({
  title = 'Mitglied der Gemeinschaft werden',
  description = 'Zugang zu NWKSoft, Infobriefen, Formularen und dem Netzwerk der anerkannten Zuchtorganisation.',
  primary = { label: 'Mitglied werden', to: '/mein-nwks' },
  secondary = { label: 'Hof finden', to: '/suche' },
}: Props) {
  return (
    <section className="relative overflow-hidden bg-anthrazit text-warmweiss">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(107,143,113,0.45) 0%, transparent 40%), radial-gradient(circle at 10% 80%, rgba(232,223,208,0.2) 0%, transparent 40%)',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="max-w-2xl font-serif text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <div className="mt-3 max-w-2xl text-warmweiss/75">{description}</div>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryCta to={primary.to} href={primary.href}>
            {primary.label}
          </PrimaryCta>
          {secondary && (
            <GhostOnDarkCta to={secondary.to} href={secondary.href}>
              {secondary.label}
            </GhostOnDarkCta>
          )}
        </div>
      </div>
    </section>
  )
}
