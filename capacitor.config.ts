/// <reference types="@capacitor/splash-screen" />
/// <reference types="@capacitor/status-bar" />

import type { CapacitorConfig } from '@capacitor/cli'

/**
 * Native store shell (iOS/Android). GitHub Pages continues to use Vite `base`
 * `/cuddly-adventure/` via `npm run build`. Native assets are built separately
 * with `base: '/'` into `dist-native` (`npm run build:native`).
 *
 * History-API / React Router SPA routing needs a real http(s) origin, not a
 * custom scheme that cannot change the URL path (Chrome WebView 117+).
 */
const config: CapacitorConfig = {
  appId: 'ch.nwks.app',
  appName: 'NWKS',
  webDir: 'dist-native',
  backgroundColor: '#FAF8F5',
  zoomEnabled: false,
  loggingBehavior: 'debug',
  server: {
    androidScheme: 'https',
    iosScheme: 'capacitor',
    hostname: 'localhost',
  },
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    scrollEnabled: true,
    allowsLinkPreview: false,
    backgroundColor: '#FAF8F5',
  },
  android: {
    allowMixedContent: false,
    webContentsDebuggingEnabled: false,
    backgroundColor: '#FAF8F5',
    minWebViewVersion: 60,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      launchAutoHide: true,
      launchFadeOutDuration: 200,
      backgroundColor: '#FAF8F5',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_INSIDE',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: false,
    },
    StatusBar: {
      // LIGHT = dark text/icons on the light Warmweiss chrome (enum names are inverted).
      style: 'LIGHT',
      backgroundColor: '#FAF8F5',
      overlaysWebView: false,
    },
    SystemBars: {
      insetsHandling: 'css',
      style: 'LIGHT',
      hidden: false,
      animation: 'NONE',
    },
  },
}

export default config
