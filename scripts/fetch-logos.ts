/**
 * Bakes brand logos into public/logos/<makeId>.svg from the Simple Icons CDN
 * (brand-colored SVGs). Brands not on the CDN are skipped and fall back to a
 * text wordmark in the UI. Throttled to avoid CDN rate-limiting.
 *
 * Run with: pnpm tsx scripts/fetch-logos.ts
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { makes } from '../src/data/catalog';

// makeId -> Simple Icons slug (default: id without hyphens)
const SLUG: Record<string, string> = {
  'mercedes-benz': 'mercedes',
  'alfa-romeo': 'alfaromeo',
  'land-rover': 'landrover',
  'aston-martin': 'astonmartin'
};

const slugFor = (id: string) => SLUG[id] ?? id.replace(/-/g, '');
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const dir = resolve('public', 'logos');
  await mkdir(dir, { recursive: true });
  const got: string[] = [];
  const missed: string[] = [];

  for (const make of makes) {
    const slug = slugFor(make.id);
    try {
      const res = await fetch(`https://cdn.simpleicons.org/${slug}`);
      if (res.ok) {
        const svg = await res.text();
        if (svg.includes('<svg')) {
          await writeFile(resolve(dir, `${make.id}.svg`), svg);
          got.push(make.id);
        } else {
          missed.push(make.id);
        }
      } else {
        missed.push(make.id);
      }
    } catch {
      missed.push(make.id);
    }
    await sleep(500);
  }

  console.log(`\nLogos saved (${got.length}): ${got.join(', ')}`);
  console.log(`No logo, will use wordmark (${missed.length}): ${missed.join(', ')}`);
}

main();
