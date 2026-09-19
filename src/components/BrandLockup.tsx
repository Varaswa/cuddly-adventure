import { asset } from '../lib/assets'

type Props = {
  inverse?: boolean
  compact?: boolean
}

/**
 * Official NWKS lockup: square emblem (Swiss cross + two camelid heads)
 * plus the letterhead wordmark. Never a red N/M letter tile.
 */
export default function BrandLockup({ inverse = false, compact = false }: Props) {
  const mark = asset(inverse ? 'nwks-mark-inverse.png' : 'nwks-mark.png')
  const nameClass = inverse ? 'text-warmweiss' : 'text-anthrazit'
  const subClass = inverse ? 'text-warmweiss/55' : 'text-anthrazit/50'

  return (
    <span className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <img
        src={mark}
        alt=""
        className={`w-auto object-contain object-left ${compact ? 'h-9' : 'h-11 sm:h-12'}`}
        width={48}
        height={63}
      />
      <span className={`min-w-0 leading-tight ${nameClass}`}>
        <span className="block text-sm font-semibold tracking-tight 2xl:hidden">NWKS</span>
        <span className="hidden font-semibold tracking-tight 2xl:block 2xl:text-base">
          NeuweltkamelidenSchweiz
        </span>
        {!compact && (
          <span className={`hidden text-[0.65rem] uppercase tracking-[0.18em] 2xl:block ${subClass}`}>
            Neuweltkameliden Schweiz
          </span>
        )}
      </span>
    </span>
  )
}
