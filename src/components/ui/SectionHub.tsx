import type { ReactNode } from 'react'
import type { HubDefinition } from '../../content/types'
import AlertBanner from './AlertBanner'
import Breadcrumb from './Breadcrumb'
import HubCards from './HubCards'
import PageHero from './PageHero'
import Section, { SectionHeading } from './Section'
import { PrimaryCta, SecondaryCta } from './primitives'

type Props = {
  hub: HubDefinition
  actions?: ReactNode
  alert?: {
    title: string
    body: string
    to?: string
    href?: string
    cta?: string
  }
  intro?: ReactNode
  alertPlacement?: 'top' | 'after-hero'
  children?: ReactNode
}

export default function SectionHub({
  hub,
  actions,
  alert,
  intro,
  alertPlacement = 'after-hero',
  children,
}: Props) {
  const banner = alert ? (
    <AlertBanner title={alert.title} to={alert.to} href={alert.href} cta={alert.cta}>
      {alert.body}
    </AlertBanner>
  ) : null

  return (
    <div>
      <Breadcrumb items={[{ label: 'Start', to: '/' }, { label: hub.label }]} />
      {alertPlacement === 'top' && banner}
      <PageHero
        {...hub.hero}
        eyebrow={hub.eyebrow}
        title={hub.title}
        lead={hub.lead}
        actions={
          actions ??
          (hub.sourceHref ? (
            <>
              <PrimaryCta href={hub.sourceHref}>{hub.sourceLabel ?? 'Quelle öffnen'}</PrimaryCta>
              <SecondaryCta to="/downloads">Downloads</SecondaryCta>
            </>
          ) : undefined)
        }
      />
      {alertPlacement === 'after-hero' && banner}
      {intro}
      {hub.groups.map((group, index) => (
        <Section key={group.title} tone={index % 2 === (intro ? 0 : 1) ? 'sand' : 'plain'}>
          <SectionHeading title={group.title} description={group.description} />
          <HubCards cards={group.cards} />
        </Section>
      ))}
      {children}
    </div>
  )
}
