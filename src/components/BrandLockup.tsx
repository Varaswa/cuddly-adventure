import { asset } from '../lib/assets'

type Props = {
  inverse?: boolean
}

/**
 * Official NWKS letterhead lockup: Swiss cross + two camelid heads +
 * wordmark «NeuweltkamelidenSchweiz». Never a red N/M tile.
 */
export default function BrandLockup({ inverse = false }: Props) {
  const mark = asset(inverse ? 'nwks-mark-inverse.png' : 'nwks-mark.png')
  const nameClass = inverse ? 'text-warmweiss' : 'text-anthrazit'
  const subClass = inverse ? 'text-warmweiss/55' : 'text-anthrazit/50'

  return (
    <span className="flex min-w-0 items-center gap-3">
      <img
        src={mark}
        alt="NWKS-Marke: Schweizerkreuz mit zwei Kamelidenköpfen"
        className="h-12 w-auto shrink-0 object-contain object-left sm:h-14"
        width={56}
        height={74}
      />
      <span className={`min-w-0 leading-tight ${nameClass}`}>
        <span className="block text-[0.95rem] font-semibold tracking-tight sm:text-lg">
          NeuweltkamelidenSchweiz
        </span>
        <span className={`block text-[0.65rem] uppercase tracking-[0.2em] ${subClass}`}>
          NWKS · anerkannte Zuchtorganisation
        </span>
      </span>
    </span>
  )
}
