import { Link } from 'react-router-dom'
import { interesseCards, tileNav, aktuellCards } from '../data/demo'
import ExternalLink from '../components/ExternalLink'

export default function Startseite() {
  return (
    <div>
      <section className="relative overflow-hidden">
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
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-sand">
            Neuweltkameliden Schweiz
          </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-warmweiss sm:text-4xl lg:text-5xl">
            Für gesunde Tiere. Für verantwortungsvolle Haltung. Für eine starke Gemeinschaft.
          </h1>
          <p className="mt-5 max-w-xl text-base text-warmweiss/80 sm:text-lg">
            Fachwissen, Service und Vernetzung für Halterinnen, Züchter und alle, die Lamas und
            Alpakas kennenlernen möchten.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/mein-nwks"
              className="rounded-lg bg-nwks-rot px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-nwks-rot/90"
            >
              Mitglied werden
            </Link>
            <Link
              to="/suche"
              className="rounded-lg border border-warmweiss/40 bg-warmweiss/10 px-5 py-3 text-sm font-semibold text-warmweiss backdrop-blur transition hover:bg-warmweiss/20"
            >
              Hof finden
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-2xl font-bold text-anthrazit sm:text-3xl">Was möchtest du wissen?</h2>
        <p className="mt-2 max-w-2xl text-anthrazit/70">
          Drei Einstiege – unabhängig davon, ob du neu bist, bereits hältst oder züchtest.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interesseCards.map((card) => (
            <Link
              key={card.id}
              to={card.to}
              className={`group rounded-2xl border border-sand p-6 transition hover:shadow-md ${
                card.accent === 'salbei'
                  ? 'bg-salbei/10 hover:border-salbei/40'
                  : card.accent === 'sand'
                    ? 'bg-sand/50 hover:border-sand'
                    : 'bg-anthrazit text-warmweiss hover:border-anthrazit'
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  card.accent === 'anthrazit' ? 'text-warmweiss' : 'text-anthrazit'
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  card.accent === 'anthrazit' ? 'text-warmweiss/75' : 'text-anthrazit/70'
                }`}
              >
                {card.description}
              </p>
              <span
                className={`mt-4 inline-block text-sm font-semibold ${
                  card.accent === 'anthrazit' ? 'text-sand' : 'text-nwks-rot'
                } group-hover:underline`}
              >
                Weiter →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-sand/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl font-bold text-anthrazit sm:text-3xl">Was suchst du?</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tileNav.map((tile) => (
              <Link
                key={tile.title}
                to={tile.to}
                className="flex flex-col rounded-2xl border border-sand bg-warmweiss p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-3xl" aria-hidden>
                  {tile.icon}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-anthrazit">{tile.title}</h3>
                <p className="mt-1 text-sm text-anthrazit/65">{tile.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-bold text-anthrazit sm:text-3xl">Aktuell</h2>
          <Link to="/veranstaltungen" className="text-sm font-semibold text-nwks-rot hover:underline">
            Alle Meldungen →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aktuellCards.map((card) => {
            const inner = (
              <>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-salbei/15 px-2.5 py-0.5 text-xs font-semibold text-salbei">
                    {card.category}
                  </span>
                  <time className="text-xs text-anthrazit/50">{card.date}</time>
                </div>
                <h3 className="mt-3 text-base font-semibold text-anthrazit">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm text-anthrazit/70">{card.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-nwks-rot">Details →</span>
              </>
            )
            const className =
              'flex flex-col rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm transition hover:shadow-md'
            return card.href ? (
              <ExternalLink key={card.id} href={card.href} className={className}>
                {inner}
              </ExternalLink>
            ) : (
              <Link key={card.id} to={card.to} className={className}>
                {inner}
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
