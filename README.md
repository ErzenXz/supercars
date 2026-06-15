# Car Atlas Pro

**Live demo:** https://car-atlas-pro.vercel.app

A clean, **minimalist** Vite + React 19 + TypeScript car catalog. Built on a make → model → generation → variant database, with specs, dimensions, options, known strengths, buyer warnings and comparison.

## What is included

- **40+ makes, 680+ versions** spanning diesel, petrol, hybrid, plug-in hybrid and electric — full lineups (e.g. BMW 1/2/3/4/5/7/8 Series, X1–X7, Z4, i4/i5/iX, and M2/M3/M4/M5/M8 as their own models)
- **Minimal, light, responsive UI** — large real car photos, lots of whitespace, restrained type
- **Real model photos** from Wikimedia Commons + **brand logos** (Simple Icons) on photo-backed brand cards, with graceful fallbacks
- **Browse hierarchy**: Brands → Make (model cards) → Model (all variants, e.g. every M4) → Car page with full specs, dimensions, equipment and buyer notes
- **Paginated browse** (24/page) with windowed page controls
- Search + filters (make, fuel, body, drive) + **sorting** (power, price, efficiency, newest)
- **Favorites** saved to `localStorage`, and side-by-side **comparison** of up to three versions with the best value in each row highlighted
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
  components/         Header, Toolbar, CarCard, CarPage, Compare, CarImage, CarSilhouette
  data/
    catalog.ts        aggregates the core makes + every modular make file
    carImages.ts      generated map of model -> Wikimedia photo URL
    _shared.ts        shared option presets (safetyComfort / evComfort)
    makes/*.ts        one CarMake per file
  lib/
    catalog.ts        search / flatten / sort helpers
    theme.ts          brand colors, fuel colors, body-style inference
    useFavorites.ts   localStorage favorites hook
    useHashRoute.ts   tiny hash router (home / car / compare / favorites)
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
