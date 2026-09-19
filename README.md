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

Danach im Browser öffnen: [http://localhost:5173](http://localhost:5173)

## Production-Build

```bash
npm run build
npm run preview
```

## Routen

| Pfad | Seite |
|------|--------|
| `/` | Startseite |
| `/haltung-gesundheit` | Haltung & Gesundheit |
| `/zucht-herdebuch` | Zucht & Herdebuch |
| `/veranstaltungen` | Veranstaltungen |
| `/suche` | Hof-/Fachpersonensuche |
| `/downloads` | Downloads |
| `/tierverkauf` | Tierverkauf |
| `/mein-nwks` | Mein NWKS |

## Design-Tokens

- `--nwks-rot` `#B91C1C` – Aktionen
- `--anthrazit` `#2B2F33` – Navigation & Text
- `--warmweiss` `#FAF8F5` – Hintergrund
- `--salbei` `#6B8F71` – Haltung / Natur
- `--sand` `#E8DFD0` – sekundäre Flächen

## Hinweis

Rein demonstrativ – keine Live-Anbindung an NWKSoft oder Backend.
