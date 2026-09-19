import { useEffect, useState } from 'react'

const STORAGE_KEY = 'nwks-pwa-hint-dismissed'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

function isStandalone() {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in window.navigator && Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone))
  )
}

export default function PwaInstallHint() {
  const [hidden, setHidden] = useState(() => isStandalone() || window.localStorage.getItem(STORAGE_KEY) === '1')
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    const onPrompt = (event: Event) => {
      event.preventDefault()
      setInstallEvent(event as BeforeInstallPromptEvent)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    return () => window.removeEventListener('beforeinstallprompt', onPrompt)
  }, [])

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, '1')
    setHidden(true)
  }

  const install = async () => {
    if (!installEvent) return
    await installEvent.prompt()
    await installEvent.userChoice
    setInstallEvent(null)
  }

  if (hidden) return null

  return (
    <aside className="border-b border-sand bg-sand/45" aria-label="App installieren">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-anthrazit/80">
          <span className="font-semibold text-anthrazit">Als App installieren.</span>{' '}
          Android: Menü → App installieren · iPhone: Teilen → Zum Home-Bildschirm.
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          {installEvent && (
            <button
              type="button"
              onClick={() => void install()}
              className="rounded-lg bg-nwks-rot px-3 py-1.5 text-sm font-semibold text-white hover:bg-nwks-rot/90"
            >
              Installieren
            </button>
          )}
          <button
            type="button"
            onClick={dismiss}
            className="rounded-lg border border-anthrazit/15 px-3 py-1.5 text-sm font-medium text-anthrazit hover:bg-warmweiss"
          >
            Schliessen
          </button>
        </div>
      </div>
    </aside>
  )
}
