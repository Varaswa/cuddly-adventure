import type { ReactNode } from 'react'
import { asset } from '../../lib/assets'

export type HeroLayout = 'cover' | 'split' | 'split-reverse' | 'frame' | 'ribbon' | 'stack'

type Accent = 'salbei' | 'sand' | 'anthrazit' | 'naturgruen'

type Props = {
  eyebrow?: string
  title: string
  lead?: ReactNode
  actions?: ReactNode
  layout: HeroLayout
  image: string
  imageAlt: string
  objectPosition?: string
  accent?: Accent
  size?: 'md' | 'lg'
}

const accentBar: Record<Accent, string> = {
  salbei: 'bg-salbei',
  sand: 'bg-sand',
  anthrazit: 'bg-anthrazit',
  naturgruen: 'bg-naturgruen',
}

const accentText: Record<Accent, string> = {
  salbei: 'text-salbei',
  sand: 'text-sand',
  anthrazit: 'text-anthrazit',
  naturgruen: 'text-naturgruen',
}

function Photo({
  src,
  alt,
  objectPosition,
  className,
}: {
  src: string
  alt: string
  objectPosition: string
  className?: string
}) {
  return (
    <img
      src={asset(src)}
      alt={alt}
      className={className ?? 'h-full w-full object-cover'}
      style={{ objectPosition }}
    />
  )
}

export default function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  layout,
  image,
  imageAlt,
  objectPosition = 'center',
  accent = 'salbei',
  size = 'md',
}: Props) {
  const titleSize =
    size === 'lg'
      ? 'font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.15rem]'
      : 'font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl'
  const copy = (
    <>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${layout === 'cover' ? 'text-sand' : accentText[accent]}`}>
          {eyebrow}
        </p>
      )}
      <h1 className={`${eyebrow ? 'mt-3' : ''} ${titleSize}`}>{title}</h1>
      {lead && <div className="mt-4 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg">{lead}</div>}
      {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
    </>
  )

  if (layout === 'cover') {
    const overlay =
      accent === 'salbei'
        ? 'bg-gradient-to-r from-anthrazit/92 via-anthrazit/70 to-salbei/35'
        : accent === 'naturgruen'
          ? 'bg-gradient-to-tr from-anthrazit/90 via-naturgruen/40 to-anthrazit/30'
          : accent === 'sand'
            ? 'bg-gradient-to-br from-anthrazit/88 via-anthrazit/55 to-sand/25'
            : 'bg-gradient-to-t from-anthrazit via-anthrazit/75 to-anthrazit/25'
    const pad = size === 'lg' ? 'py-20 sm:py-28 lg:py-36' : 'py-16 sm:py-24'
    return (
      <section className="relative isolate min-h-[22rem] overflow-hidden text-warmweiss sm:min-h-[26rem]">
        <Photo src={image} alt="" objectPosition={objectPosition} className="absolute inset-0 h-full w-full object-cover" />
        <div className={`absolute inset-0 ${overlay}`} aria-hidden />
        <div className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${pad}`}>
          <div className="max-w-3xl">{copy}</div>
        </div>
        <span className="sr-only">{imageAlt}</span>
      </section>
    )
  }

  if (layout === 'split' || layout === 'split-reverse') {
    const reverse = layout === 'split-reverse'
    const wash = accent === 'salbei' || accent === 'naturgruen' ? 'bg-salbei/10' : 'bg-sand/50'
    return (
      <section className={`border-b border-sand ${wash}`}>
        <div className="mx-auto grid max-w-7xl overflow-hidden lg:grid-cols-2 lg:items-stretch">
          <div className={`relative min-h-[16rem] sm:min-h-[20rem] ${reverse ? 'lg:order-2' : ''}`}>
            <Photo src={image} alt={imageAlt} objectPosition={objectPosition} />
            <div className={`absolute inset-y-0 ${reverse ? 'left-0' : 'right-0'} hidden w-1 ${accentBar[accent]} lg:block`} />
          </div>
          <div className="flex flex-col justify-center px-4 py-12 text-anthrazit sm:px-6 sm:py-16 lg:px-12">
            {copy}
          </div>
        </div>
      </section>
    )
  }

  if (layout === 'frame') {
    return (
      <section className="border-b border-sand bg-sand/35">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid items-center gap-8 rounded-3xl bg-warmweiss p-6 shadow-sm ring-1 ring-sand sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)]">
            <div className="text-anthrazit">{copy}</div>
            <div className="relative overflow-hidden rounded-2xl">
              <Photo
                src={image}
                alt={imageAlt}
                objectPosition={objectPosition}
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className={`absolute inset-x-0 bottom-0 h-1.5 ${accentBar[accent]}`} />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (layout === 'ribbon') {
    return (
      <section className="border-b border-sand bg-warmweiss">
        <div className="mx-auto max-w-7xl px-4 pt-12 text-anthrazit sm:px-6 sm:pt-16 lg:px-8">
          {copy}
        </div>
        <div className="relative mt-10 h-40 overflow-hidden sm:h-52 lg:h-60">
          <Photo src={image} alt={imageAlt} objectPosition={objectPosition} />
          <div className={`absolute inset-x-0 top-0 h-1.5 ${accentBar[accent]}`} />
        </div>
      </section>
    )
  }

  // stack: photo band on top, copy on sand
  return (
    <section className="border-b border-sand">
      <div className="relative h-48 overflow-hidden sm:h-64 lg:h-72">
        <Photo src={image} alt={imageAlt} objectPosition={objectPosition} />
        <div className="absolute inset-0 bg-gradient-to-t from-anthrazit/50 to-transparent" aria-hidden />
      </div>
      <div className="bg-sand/40">
        <div className="mx-auto max-w-7xl px-4 py-10 text-anthrazit sm:px-6 sm:py-14 lg:px-8">{copy}</div>
      </div>
    </section>
  )
}
