import { App } from '@capacitor/app'
import { Capacitor, SystemBars } from '@capacitor/core'
import type { SystemBarsStyle } from '@capacitor/core'
import { SplashScreen } from '@capacitor/splash-screen'
import { StatusBar } from '@capacitor/status-bar'
import type { Style } from '@capacitor/status-bar'

/** Dark glyphs on the light Warmweiss chrome (enum names are inverted vs. appearance). */
const LIGHT_CHROME = 'LIGHT' as SystemBarsStyle
const STATUS_LIGHT = 'LIGHT' as Style

/** Configure the native shell; no-op in the GitHub Pages / PWA build. */
export async function bootstrapNativeShell() {
  if (!Capacitor.isNativePlatform()) return

  document.documentElement.classList.add('native-app')

  try {
    await SystemBars.setStyle({ style: LIGHT_CHROME })
  } catch {
    /* SystemBars ships with core; ignore if unavailable in a given runtime */
  }

  try {
    await StatusBar.setStyle({ style: STATUS_LIGHT })
    if (Capacitor.getPlatform() === 'android') {
      await StatusBar.setBackgroundColor({ color: '#FAF8F5' })
    }
  } catch {
    /* StatusBar plugin is a no-op on web */
  }

  try {
    await SplashScreen.hide()
  } catch {
    /* Splash plugin optional outside native */
  }

  await App.addListener('backButton', ({ canGoBack }) => {
    if (canGoBack) {
      window.history.back()
      return
    }
    void App.exitApp()
  })
}
