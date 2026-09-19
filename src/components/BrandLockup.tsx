import { asset } from '../lib/assets'

type Props = {
  inverse?: boolean
  /** Footer / tight spots: emblem + NWKS, no long wordmark. */
  compact?: boolean
}

/**
 * Official NWKS lockup: Swiss cross with two camelid heads (never a red M/N tile).
 * Desktop header uses a short lockup so the nav fits; the full letterhead wordmark
 * is shown when the hamburger is used (no competing nav).
 */
export default function BrandLockup({ inverse = false, compact = false }: Props) {
  const mark = asset(inverse ? 'nwks-mark-inverse.png' : 'nwks-mark.png')
  const nameClass = inverse ? 'text-warmweiss' : 'text-anthrazit'
  const subClass = inverse ? 'text-warmweiss/55' : 'text-anthrazit/50'

  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <img
        src={mark}
        alt=""
        className={`w-auto shrink-0 object-contain object-left ${compact ? 'h-9' : 'h-11 sm:h-12'}`}
        width={48}
        height={63}
      />
      <span className={`min-w-0 leading-tight ${nameClass}`}>
        {compact ? (
          <span className="block text-sm font-semibold tracking-tight">NWKS</span>
        ) : (
          <>
            <span className="block max-w-[12.5rem] text-sm font-semibold tracking-tight xl:hidden">
              NeuweltkamelidenSchweiz
            </span>
            <span className="hidden xl:block">
              <span className="block text-sm font-semibold tracking-tight">NWKS</span>
              <span className={`block text-[0.65rem] uppercase tracking-[0.18em] ${subClass}`}>
                Schweiz
              </span>
            </span>
          </>
        )}
      </span>
    </span>
  )
}
