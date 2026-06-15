# Car Atlas Pro

A modern **Vite + React 19 + TypeScript** car catalog UI. It is built for a make → model → generation → variant database, with specs, dimensions, options, known strengths, buyer warnings, collections and comparison.

## What is included

- **21 makes, 130+ versions** spanning diesel, petrol, hybrid, plug-in hybrid and electric
- Modern responsive UI with a glass/dark premium design
- **Procedural SVG car illustrations** — a distinct silhouette per body style (hatchback, sedan, wagon, SUV, coupe, MPV…), tinted by brand color and fuel
- Search + quick fuel pills + filters by make, drive, body style and segment
- **Sorting** (power, price, efficiency, newest) and a **favorites** list saved to `localStorage`
- Detailed version page with animated performance bars, engine, dimensions, equipment, options and buyer notes
- **Auto-populating collections** (diesel dailies, big-boot wagons, premium German, hybrids, EVs, fast-but-usable…) defined as predicates, so they stay correct as data grows
- Side-by-side comparison for up to three versions, with the best value in each row highlighted
- Strong TypeScript schema in `src/types.ts`
- Modular per-make data files in `src/data/makes/`
- Public-data importer example for NHTSA vPIC in `scripts/import-vpic.ts`

## Requirements

- Node.js ≥ 20.19
- [pnpm](https://pnpm.io) (the project pins `packageManager: pnpm@10`)

## Run locally

```bash
pnpm install
pnpm dev
```

Open the local Vite URL shown in your terminal.

## Build & preview

```bash
pnpm build
pnpm preview
```

## Type-check

```bash
pnpm typecheck
```

## Import public make/model data from NHTSA vPIC

The app does **not** scrape commercial websites. Use licensed datasets, your own data, or public APIs. NHTSA vPIC can provide makes/models and VIN-decoding style data. It will not give you rich EU trim options like every Opel/VW package, so you still need a proper licensed/spec dataset for full global coverage.

```bash
pnpm import:vpic --year 2024 --makes Opel,Volkswagen,BMW,Mercedes-Benz,Audi,Toyota
```

Output:

```text
public/imports/vpic-models.json
```

Then map those rows into the richer schema:

```ts
make -> model -> generation -> variant -> specs/options/issues
```

## Data notes

The seed data is intentionally editable and structured like a real product database. For production, add:

- Admin importer for CSV/JSON
- Source attribution and license tracking per record
- VIN decoder integration
- Price history and local-market listings
- User garage and saved comparisons
- Moderation/review workflow for submitted specs

## Project structure

```text
src/
  components/         UI components (cards, detail panel, compare, filters, car silhouette…)
  data/
    catalog.ts        aggregates the core makes + every modular make file
    _shared.ts        shared option presets (safetyComfort / evComfort)
    makes/*.ts        one CarMake per file
  lib/
    catalog.ts        search / flatten / sort / spec-range helpers
    collections.ts    predicate-based collections
    theme.ts          brand colors, fuel colors, body-style inference
    useFavorites.ts   localStorage favorites hook
  types.ts            core data model
scripts/
  import-vpic.ts        public API importer example
  fetch-car-images.ts   regenerates src/data/carImages.ts from Wikimedia
```

## Car images

Model photos in `src/data/carImages.ts` are sourced from **Wikimedia Commons**
(CC-licensed) and resolved at build time by `scripts/fetch-car-images.ts`. When a
model has no photo the UI falls back to a procedurally drawn SVG silhouette, so it
never looks broken. Re-run the fetcher to refresh:

```bash
pnpm tsx scripts/fetch-car-images.ts
```

## License

[MIT](LICENSE) © 2026 Erzen Krasniqi (ErzenXz)
