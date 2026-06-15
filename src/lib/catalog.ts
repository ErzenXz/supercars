import { makes } from '../data/catalog';
import type { CarMake, CarModel, Generation, Variant } from '../types';

export interface FlatVariant {
  make: CarMake;
  model: CarModel;
  generation: Generation;
  variant: Variant;
}

export const flattenCatalog = (): FlatVariant[] =>
  makes.flatMap((make) =>
    make.models.flatMap((model) =>
      model.generations.flatMap((generation) =>
        generation.variants.map((variant) => ({ make, model, generation, variant }))
      )
    )
  );

export const allVariants = flattenCatalog();

export const getVariantById = (id: string) => allVariants.find((entry) => entry.variant.id === id);

export const unique = <T,>(values: T[]) => Array.from(new Set(values));

export const catalogStats = () => {
  const models = makes.reduce((sum, make) => sum + make.models.length, 0);
  const generations = makes.reduce(
    (sum, make) => sum + make.models.reduce((mSum, model) => mSum + model.generations.length, 0),
    0
  );
  const variants = allVariants.length;
  return { makes: makes.length, models, generations, variants };
};

export const normalize = (input: string) => input.toLowerCase().trim();

export const searchVariants = (query: string, filters: Record<string, string>) => {
  const q = normalize(query);
  return allVariants.filter(({ make, model, generation, variant }) => {
    const haystack = normalize([
      make.name,
      model.name,
      model.segment,
      model.description,
      model.tags.join(' '),
      generation.name,
      generation.years,
      generation.platform ?? '',
      generation.bodyStyles.join(' '),
      variant.name,
      variant.years,
      variant.specs.engine,
      variant.specs.engineCode ?? '',
      variant.specs.fuel,
      variant.specs.drive,
      variant.specs.gearbox,
      variant.knownFor.join(' '),
      variant.watchOut.join(' ')
    ].join(' '));

    const matchesQuery = q.length === 0 || haystack.includes(q);
    const matchesMake = filters.make === 'all' || make.id === filters.make;
    const matchesFuel = filters.fuel === 'all' || variant.specs.fuel === filters.fuel;
    const matchesDrive = filters.drive === 'all' || variant.specs.drive === filters.drive;
    const matchesBody = filters.body === 'all' || generation.bodyStyles.includes(filters.body as never);
    const matchesSegment = filters.segment === 'all' || model.segment === filters.segment;

    return matchesQuery && matchesMake && matchesFuel && matchesDrive && matchesBody && matchesSegment;
  });
};

export const formatNumber = (value?: number, suffix = '') => {
  if (value === undefined || Number.isNaN(value)) return '—';
  return `${value.toLocaleString()}${suffix}`;
};

export interface Range {
  min: number;
  max: number;
}

const rangeOf = (values: number[]): Range => ({
  min: Math.min(...values),
  max: Math.max(...values)
});

/** Global min/max across the catalog, used to scale the detail-panel spec bars. */
export const specRanges = (() => {
  const power = allVariants.map((e) => e.variant.specs.powerHp);
  const torque = allVariants.map((e) => e.variant.specs.torqueNm);
  const accel = allVariants
    .map((e) => e.variant.specs.acceleration0100)
    .filter((v): v is number => typeof v === 'number');
  const boot = allVariants.map((e) => e.variant.dimensions.bootLitres);
  return {
    powerHp: rangeOf(power),
    torqueNm: rangeOf(torque),
    acceleration0100: rangeOf(accel),
    bootLitres: rangeOf(boot)
  };
})();

/** 0–1 position of `value` inside a range (clamped). */
export const fraction = (value: number, range: Range) => {
  if (range.max === range.min) return 1;
  return Math.min(1, Math.max(0, (value - range.min) / (range.max - range.min)));
};

export type SortKey = 'relevance' | 'power-desc' | 'price-asc' | 'price-desc' | 'efficiency' | 'year-desc';

const priceFromBand = (band: string): number => {
  const match = band.replace(/[, ]/g, '').match(/\d+/);
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
};

const newestYear = (years: string): number => {
  const matches = years.match(/\d{4}/g);
  if (matches && matches.length) return Number(matches[matches.length - 1]);
  return /present/i.test(years) ? 9999 : 0;
};

export const sortVariants = (entries: FlatVariant[], key: SortKey): FlatVariant[] => {
  if (key === 'relevance') return entries;
  const copy = [...entries];
  switch (key) {
    case 'power-desc':
      return copy.sort((a, b) => b.variant.specs.powerHp - a.variant.specs.powerHp);
    case 'price-asc':
      return copy.sort((a, b) => priceFromBand(a.variant.priceBand) - priceFromBand(b.variant.priceBand));
    case 'price-desc':
      return copy.sort((a, b) => priceFromBand(b.variant.priceBand) - priceFromBand(a.variant.priceBand));
    case 'efficiency':
      return copy.sort(
        (a, b) => (a.variant.specs.consumptionL100 ?? 99) - (b.variant.specs.consumptionL100 ?? 99)
      );
    case 'year-desc':
      return copy.sort((a, b) => newestYear(b.variant.years) - newestYear(a.variant.years));
    default:
      return copy;
  }
};
