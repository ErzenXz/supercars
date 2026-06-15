import type { FuelType } from '../types';

export interface Gradient {
  a: string;
  b: string;
}

/** Brand-flavored gradient pairs for each make, used to tint car silhouettes. */
const MAKE_COLORS: Record<string, Gradient> = {
  audi: { a: '#d7dbe2', b: '#1f2730' },
  bmw: { a: '#4aa3ff', b: '#16315f' },
  cupra: { a: '#cf8453', b: '#6f3a1d' },
  dacia: { a: '#9bb37e', b: '#3c4a30' },
  ford: { a: '#2f7fe0', b: '#0c2a57' },
  honda: { a: '#e34c4c', b: '#5e1414' },
  hyundai: { a: '#7fb0cc', b: '#23323f' },
  kia: { a: '#cf4536', b: '#4c140d' },
  mazda: { a: '#d23b2c', b: '#4a0f0a' },
  'mercedes-benz': { a: '#d3dae3', b: '#5c6675' },
  nissan: { a: '#d11f25', b: '#3f0708' },
  opel: { a: '#f6cf2e', b: '#9a6a0d' },
  peugeot: { a: '#7c8aa6', b: '#222b3a' },
  porsche: { a: '#e2c878', b: '#7a5c12' },
  renault: { a: '#f5cf3c', b: '#9c7c14' },
  seat: { a: '#e2604a', b: '#7a1f16' },
  skoda: { a: '#56b07e', b: '#114a2c' },
  tesla: { a: '#e6e8ec', b: '#9aa3b2' },
  toyota: { a: '#ef4444', b: '#9f1239' },
  volkswagen: { a: '#4f8ef0', b: '#13327a' },
  volvo: { a: '#5b86ad', b: '#10243a' }
};

const FALLBACK: Gradient = { a: '#7dd3fc', b: '#3b3266' };

export const makeTheme = (makeId: string): Gradient => MAKE_COLORS[makeId] ?? FALLBACK;

/** Distinct, intuitive color per fuel type for badges, bars and lighting glow. */
const FUEL_COLORS: Record<FuelType, string> = {
  Petrol: '#f59e0b',
  Diesel: '#38bdf8',
  Hybrid: '#a3e635',
  'Plug-in Hybrid': '#2dd4bf',
  Electric: '#34d399'
};

export const fuelColor = (fuel: FuelType): string => FUEL_COLORS[fuel] ?? '#7dd3fc';

const FUEL_ICONS: Record<FuelType, string> = {
  Petrol: '⛽',
  Diesel: '🛢️',
  Hybrid: '🔋',
  'Plug-in Hybrid': '🔌',
  Electric: '⚡'
};

export const fuelIcon = (fuel: FuelType): string => FUEL_ICONS[fuel] ?? '🚗';

/**
 * Pick the body style to draw. A generation often lists several bodies
 * (e.g. Sedan + Wagon), so first infer from the variant name (a "Touring",
 * "Avant" or "Sports Tourer" is a wagon), then fall back to a sensible
 * default order that favours the most common/iconic body.
 */
const BODY_PRIORITY = ['Sedan', 'Hatchback', 'SUV', 'MPV', 'Wagon', 'Coupe', 'Convertible', 'Pickup', 'Van'];

const NAME_BODY: { re: RegExp; body: string }[] = [
  { re: /touring sports|sports tourer|\bestate\b|\bvariant\b|\bavant\b|sportbrake|\btouring\b|\bkombi\b|\bwagon\b|\bsw\b/i, body: 'Wagon' },
  { re: /cabrio|convertible|roadster|spyder|spider|cabriolet/i, body: 'Convertible' },
  { re: /coup[eé]|fastback|gran ?coup/i, body: 'Coupe' },
  { re: /sportback|hatch/i, body: 'Hatchback' }
];

export const primaryBody = (bodies: string[], name = ''): string => {
  for (const { re, body } of NAME_BODY) {
    if (re.test(name) && bodies.includes(body)) return body;
  }
  for (const candidate of BODY_PRIORITY) {
    if (bodies.includes(candidate)) return candidate;
  }
  return bodies[0] ?? 'Hatchback';
};

/** Parse the first number from a price band string like "€12,000–€22,000 used". */
export const priceFrom = (band: string): number => {
  const match = band.replace(/[, ]/g, '').match(/\d+/);
  return match ? Number(match[0]) : 0;
};
