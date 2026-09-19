import { Badge, DemoNotice } from './primitives'

const SWISS_CANTONS = [
  'AG',
  'AI',
  'AR',
  'BE',
  'BL',
  'BS',
  'FR',
  'GE',
  'GL',
  'GR',
  'JU',
  'LU',
  'NE',
  'NW',
  'OW',
  'SG',
  'SH',
  'SO',
  'SZ',
  'TG',
  'TI',
  'UR',
  'VD',
  'VS',
  'ZG',
  'ZH',
] as const

type Props = {
  counts: Record<string, number>
  selected?: string | null
  onSelect: (kanton: string | null) => void
}

export default function CantonOverview({ counts, selected, onSelect }: Props) {
  const withFarms = SWISS_CANTONS.filter((k) => (counts[k] ?? 0) > 0)

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <div className="rounded-2xl border border-sand bg-warmweiss p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-salbei">Übersicht Schweiz</p>
            <h2 className="mt-1 text-lg font-semibold text-anthrazit">Kantone mit öffentlichen Einträgen</h2>
          </div>
          <Badge tone="demo">Keine Live-Karte</Badge>
        </div>
        <p className="mt-2 text-sm text-anthrazit/65">
          Statt einer interaktiven Karte: Kantone mit Höfen oder Fachpersonen aus der öffentlichen
          Linkliste. Antippen filtert die Trefferliste.
        </p>
        <div className="mt-5 grid grid-cols-6 gap-2 sm:grid-cols-9 lg:grid-cols-13">
          {SWISS_CANTONS.map((kanton) => {
            const n = counts[kanton] ?? 0
            const active = selected === kanton
            const has = n > 0
            return (
              <button
                key={kanton}
                type="button"
                disabled={!has}
                onClick={() => onSelect(active ? null : kanton)}
                className={`rounded-lg px-1 py-2 text-center text-xs font-semibold transition ${
                  active
                    ? 'bg-nwks-rot text-white shadow-sm'
                    : has
                      ? 'bg-salbei/15 text-anthrazit hover:bg-salbei/25'
                      : 'cursor-not-allowed bg-sand/40 text-anthrazit/30'
                }`}
                aria-pressed={active}
                title={has ? `${kanton}: ${n} Einträge` : `${kanton}: kein öffentlicher Eintrag`}
              >
                {kanton}
                {has && <span className="mt-0.5 block text-[10px] font-medium opacity-80">{n}</span>}
              </button>
            )
          })}
        </div>
        <p className="mt-4 text-xs text-anthrazit/50">
          {withFarms.length} Kantone mit Einträgen · grau = in den öffentlichen Quellen nicht genannt
        </p>
      </div>
      <DemoNotice>
        Distanzfilter nutzt die ungefähre Luftlinie der Ortschaft zu Bern – kein Hof-GPS. Einträge ohne
        Ortsangabe bleiben sichtbar. Das vollständige Mitgliederverzeichnis ist nicht öffentlich.
      </DemoNotice>
    </div>
  )
}
