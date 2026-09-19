import { Link } from 'react-router-dom'
import type { HubCard } from '../../content/types'
import Card from './Card'

export default function HubCards({ cards }: { cards: HubCard[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Link key={card.to} to={card.to} className="group">
          <Card hover className="h-full">
            {card.icon && (
              <span className="text-2xl" aria-hidden>
                {card.icon}
              </span>
            )}
            <h3 className="mt-2 text-lg font-semibold text-anthrazit group-hover:text-nwks-rot">
              {card.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-anthrazit/70">{card.description}</p>
            <span className="mt-4 text-sm font-semibold text-nwks-rot">Öffnen →</span>
          </Card>
        </Link>
      ))}
    </div>
  )
}
