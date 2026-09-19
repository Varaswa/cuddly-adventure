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
    <aside
      className="border-b border-sand bg-sand/50"
      aria-label="App installieren"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-anthrazit">NWKS als App installieren</p>
          <p className="mt-1 text-sm text-anthrazit/70">
            Diese Website ist eine Progressive Web App. Nach der Installation startet sie ohne
            Browserleiste und der App-Rahmen bleibt offline verfügbar.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-anthrazit/70">
            <li>
              <strong className="font-semibold text-anthrazit">Android (Chrome):</strong> Menü ⋮ →
              «App installieren» oder «Zum Startbildschirm hinzufügen».
            </li>
            <li>
              <strong className="font-semibold text-anthrazit">iPhone/iPad (Safari):</strong> Teilen-Symbol
              → «Zum Home-Bildschirm».
            </li>
          </ul>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          {installEvent && (
            <button
              type="button"
              onClick={() => void install()}
              className="rounded-lg bg-nwks-rot px-3 py-2 text-sm font-semibold text-white hover:bg-nwks-rot/90"
            >
              Jetzt installieren
            </button>
          )}
          <button
            type="button"
            onClick={dismiss}
            className="rounded-lg border border-anthrazit/15 px-3 py-2 text-sm font-medium text-anthrazit hover:bg-warmweiss"
          >
            Hinweis schliessen
          </button>
        </div>
      </div>
    </aside>
  )
}
