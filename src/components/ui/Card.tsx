import type { ReactNode } from 'react'

type Variant = 'default' | 'sand' | 'salbei' | 'dark' | 'alert'

const variants: Record<Variant, string> = {
  default: 'border-sand bg-warmweiss text-anthrazit',
  sand: 'border-sand bg-sand/50 text-anthrazit',
  salbei: 'border-salbei/30 bg-salbei/10 text-anthrazit',
  dark: 'border-anthrazit bg-anthrazit text-warmweiss',
  alert: 'border-nwks-rot/20 bg-nwks-rot/5 text-anthrazit',
}

type Props = {
  children: ReactNode
  variant?: Variant
  className?: string
  hover?: boolean
}

export default function Card({ children, variant = 'default', className = '', hover = false }: Props) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-5 shadow-sm sm:p-6 ${variants[variant]} ${
        hover ? 'transition hover:-translate-y-0.5 hover:shadow-md' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
