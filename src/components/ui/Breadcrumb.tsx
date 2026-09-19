import { Link } from 'react-router-dom'

export type Crumb = {
  label: string
  to?: string
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Brotkrumen" className="border-b border-sand bg-warmweiss">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-sm sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && (
              <span className="text-anthrazit/35" aria-hidden>
                ›
              </span>
            )}
            {item.to ? (
              <Link to={item.to} className="text-anthrazit/60 transition hover:text-nwks-rot hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-anthrazit" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
