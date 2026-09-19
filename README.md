# NWKS Web-App Prototyp

Funktionaler Prototyp der NWKS-Website (Neuweltkameliden Schweiz) mit Demo-Daten.
Stack: Vite, React, TypeScript, Tailwind CSS, React Router. UI auf Deutsch.

## Voraussetzungen

- Node.js 20+ und npm

## Installation

```bash
cd nwks-app
npm install
```

## Entwicklungsserver

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

Danach im Browser öffnen: [http://localhost:5173/cuddly-adventure/](http://localhost:5173/cuddly-adventure/)

Die App ist für GitHub Pages unter dem Basispfad `/cuddly-adventure/` gebaut.

## PWA installieren

Der Prototyp ist als Progressive Web App installierbar (Live-Demo nach Pages:
[https://varaswa.github.io/cuddly-adventure/](https://varaswa.github.io/cuddly-adventure/)).

- **Android / Chrome:** Seite öffnen → Menü ⋮ → «App installieren» oder «Zum Startbildschirm hinzufügen».
- **iPhone / iPad (Safari):** Teilen-Symbol → «Zum Home-Bildschirm».
- **Desktop Chrome/Edge:** Install-Icon in der Adresszeile bzw. Menü «App installieren».

Service Worker und Manifest liegen unter `/cuddly-adventure/` (gleicher `base` wie Vite). Der Offline-Cache gilt für den App-Rahmen (HTML/JS/CSS/Icons), nicht für externe PDFs auf nwks.ch.

## Native Apps (iOS / Android) – Store-Vorbereitung

Die Web-App kann zusätzlich in einer [Capacitor](https://capacitorjs.com/)-Hülle als native iOS- und Android-App gebaut werden. **Die GitHub-Pages-PWA bleibt unverändert** (`base: /cuddly-adventure/`, `npm run build`). Native Builds nutzen `base: /` und schreiben nach `dist-native/` (`npm run build:native`).

App-ID: `ch.nwks.app` · Anzeigename: **NWKS**  
Icons und Splash-Screens stammen vom offiziellen NWKS-Signet (`public/icon-512.png`, `public/nwks-logo.png`).

Dieses Repository **reicht die App nicht** bei Apple oder Google ein. Es bereitet das Xcode- und Android-Studio-Projekt vor.

### Voraussetzungen (am eigenen Rechner)

- Node.js 22+ und npm
- **iOS:** macOS, Xcode 26+, CocoaPods bzw. Swift Package Manager, kostenpflichtiges [Apple-Developer-Programm](https://developer.apple.com/)
- **Android:** [Android Studio Otter 2025.2.1+](https://developer.android.com/studio), Android SDK (API 36), JDK 21

Linux/CI kann das Android-Projekt erzeugen, iOS aber nicht kompilieren oder signieren.

### Web-Assets in die Native-Projekte kopieren

```bash
npm install
npm run cap:sync
```

`cap:sync` baut die App mit `base: /`, kopiert `dist-native/` nach `ios/` und `android/` und aktualisiert die nativen Plugins. Die kopierten Web-Assets (`android/app/src/main/assets/public`, `ios/App/App/public`) sind gitignored – nach dem Klonen immer zuerst `npm run cap:sync` ausführen.

Icons/Splashes neu erzeugen (nach Logo-Änderungen):

```bash
npm run cap:assets
npm run cap:sync
```

### iOS in Xcode

1. Auf einem Mac: `npm run cap:open:ios` (oder `ios/App/App.xcodeproj` in Xcode öffnen).
2. Signing & Capabilities: Team aus dem Apple-Developer-Konto wählen, Bundle-ID `ch.nwks.app` belassen.
3. Simulator oder Gerät wählen → Run.
4. Archive → Distribute App → App Store Connect (nur mit gültigem Zertifikat, Provisioning Profile und App-Datensatz in App Store Connect).

### Android in Android Studio

1. `npm run cap:open:android` (oder den Ordner `android/` in Android Studio öffnen).
2. SDK/Gradle synchronisieren lassen. Application ID: `ch.nwks.app`.
3. Gerät/Emulator → Run.
4. Release: eigenes Upload-Keystore anlegen (nicht ins Git legen), App Bundle (AAB) bauen, in der Play Console hochladen.

### Was ihr noch selbst braucht (nicht in diesem Repo)

| Thema | Warum |
|--------|--------|
| Apple Developer Program | Zertifikate, Provisioning, App Store Connect |
| Google Play Console | Entwicklerkonto, Store-Eintrag, AAB-Upload |
| Signierung | iOS: Team/Zertifikat in Xcode; Android: eigenes Keystore (niemals committen) |
| Datenschutzerklärung | Beide Stores verlangen eine öffentlich erreichbare Privacy-Policy-URL |
| Store-Texte, Screenshots, Altersfreigabe | Müssen in App Store Connect / Play Console gepflegt werden |
| Prüfung durch Apple/Google | Review, Ablehnungen, Richtlinien – ausserhalb dieses Repos |

### npm-Skripte

| Skript | Zweck |
|--------|--------|
| `npm run build` | GitHub-Pages/PWA-Build (`/cuddly-adventure/`) |
| `npm run build:native` | Native Web-Assets nach `dist-native/` (`base: /`) |
| `npm run cap:sync` | Native Build + Sync in `ios/` und `android/` |
| `npm run cap:copy` | Nur Web-Assets kopieren (ohne Plugin-Update) |
| `npm run cap:open:ios` | Xcode öffnen |
| `npm run cap:open:android` | Android Studio öffnen |
| `npm run cap:assets` | Icons/Splashes aus dem offiziellen Logo erzeugen |

## Production-Build

```bash
npm run build
npm run preview
```

## Routen

| Pfad | Seite |
|------|--------|
| `/` | Startseite |
| `/haltung-gesundheit` | Hub Haltung / Pflege (Alias: `/haltung-pflege`) |
| `/haltung-gesundheit/haltungsbedingungen` | Haltungsbedingungen |
| `/haltung-gesundheit/neuweltkameliden` | Neuweltkameliden |
| `/haltung-gesundheit/tierschutzverordnung` | Tierschutzverordnung |
| `/haltung-gesundheit/gesundheit` | Gesundheit / Medizin |
| `/haltung-gesundheit/blauzungenkrankheit` | Blauzungenkrankheit |
| `/herdebuch` | Hub Herdebuch (Alias: `/zucht-herdebuch`) |
| `/herdebuch/*` | Zuchtprogramm, Registrierung, DNA, Faser, Beschreibung, Reglemente |
| `/veranstaltungen` | Veranstaltungen |
| `/finden` | Höfe und Tiere finden (Aliasse: `/suche`, `/tierverkauf`) |
| `/downloads` | Downloads-Hub (Footer und Kontextlinks, nicht Hauptnavigation) |
| `/downloads/:kategorie` | Download-Kategorien (Haltung, Zucht, Verein, …) |
| `/mein-nwks` | Hub Mein NWKS |
| `/mein-nwks/*` | Verein, Mitgliedschaft, Statuten, Vorstand, Kontakte |

## Design-Tokens

- `--nwks-rot` `#B91C1C` – Aktionen
- `--anthrazit` `#2B2F33` – Navigation & Text
- `--warmweiss` `#FAF8F5` – Hintergrund
- `--salbei` `#6B8F71` – Haltung / Natur
- `--sand` `#E8DFD0` – sekundäre Flächen

## Hinweis

Rein demonstrativ – keine Live-Anbindung an NWKSoft oder Backend.
