import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

type Args = Record<string, string | boolean>;

function parseArgs(): Args {
  const args: Args = {};
  for (let i = 2; i < process.argv.length; i += 1) {
    const part = process.argv[i];
    if (!part.startsWith('--')) continue;
    const key = part.slice(2);
    const next = process.argv[i + 1];
    if (!next || next.startsWith('--')) {
      args[key] = true;
    } else {
      args[key] = next;
      i += 1;
    }
  }
  return args;
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed ${response.status}: ${url}`);
  }
  return response.json() as Promise<T>;
}

interface ApiResult<T> {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: T[];
}

interface VpicModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

interface ExportRow {
  source: 'NHTSA vPIC';
  year: number;
  make: string;
  makeId: number;
  model: string;
  modelId: number;
}

const args = parseArgs();
const year = Number(args.year ?? new Date().getFullYear());
const makesArg = typeof args.makes === 'string' ? args.makes : 'Opel,Volkswagen,BMW,Mercedes-Benz,Audi,Toyota';
const selectedMakes = makesArg.split(',').map((make) => make.trim()).filter(Boolean);

const rows: ExportRow[] = [];

for (const make of selectedMakes) {
  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${encodeURIComponent(make)}/modelyear/${year}?format=json`;
  console.log(`Fetching ${make} ${year}...`);
  const data = await fetchJson<ApiResult<VpicModel>>(url);
  for (const model of data.Results ?? []) {
    rows.push({
      source: 'NHTSA vPIC',
      year,
      make: model.Make_Name,
      makeId: model.Make_ID,
      model: model.Model_Name,
      modelId: model.Model_ID
    });
  }
}

const outputDir = resolve('public', 'imports');
await mkdir(outputDir, { recursive: true });
const outputFile = resolve(outputDir, 'vpic-models.json');
await writeFile(outputFile, JSON.stringify({ generatedAt: new Date().toISOString(), year, count: rows.length, rows }, null, 2));
console.log(`Done. Wrote ${rows.length} rows to ${outputFile}`);
