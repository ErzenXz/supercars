import { makes } from '../data/catalog';
import type { BodyStyle, CarMake, CarModel, FuelType, Generation, Variant } from '../types';

export interface FlatVariant {
  make: CarMake;
  model: CarModel;
  generation: Generation;
  variant: Variant;
}

interface MarketProfile {
  id: string;
  label: string;
  priceMultiplier: number;
  consumptionFactor: number;
  rangeFactor: number;
  co2Factor: number;
  accelerationDelta: number;
  topSpeedDelta: number;
  weightDelta: number;
}

interface PackProfile {
  id: string;
  label: string;
  priceMultiplier: number;
  powerFactor: number;
  torqueFactor: number;
  consumptionFactor: number;
  rangeFactor: number;
  co2Factor: number;
  accelerationDelta: number;
  topSpeedDelta: number;
  weightDelta: number;
}

interface LifecycleProfile {
  id: string;
  label: string;
  years: string;
  priceMultiplier: number;
  powerFactor: number;
  torqueFactor: number;
  consumptionFactor: number;
  rangeFactor: number;
  co2Factor: number;
  accelerationDelta: number;
  topSpeedDelta: number;
  weightDelta: number;
}

interface SearchIndexEntry {
  text: string;
  makeId: string;
  fuel: FuelType;
  drive: string;
  bodyStyles: BodyStyle[];
  segment: string;
}

const CURRENT_YEAR = new Date().getFullYear();

const MARKET_PROFILES: readonly MarketProfile[] = [
  { id: 'eu', label: 'EU', priceMultiplier: 1.0, consumptionFactor: 1.0, rangeFactor: 1.0, co2Factor: 1.0, accelerationDelta: 0, topSpeedDelta: 0, weightDelta: 0 },
  { id: 'uk', label: 'UK', priceMultiplier: 1.04, consumptionFactor: 1.01, rangeFactor: 0.99, co2Factor: 1.01, accelerationDelta: 0.05, topSpeedDelta: 0, weightDelta: 6 },
  { id: 'us', label: 'US', priceMultiplier: 1.12, consumptionFactor: 1.04, rangeFactor: 0.97, co2Factor: 1.04, accelerationDelta: 0.08, topSpeedDelta: 4, weightDelta: 12 },
  { id: 'gcc', label: 'GCC', priceMultiplier: 1.09, consumptionFactor: 1.06, rangeFactor: 0.95, co2Factor: 1.05, accelerationDelta: 0.1, topSpeedDelta: 6, weightDelta: 10 },
  { id: 'jp', label: 'JP', priceMultiplier: 1.05, consumptionFactor: 0.99, rangeFactor: 1.01, co2Factor: 0.99, accelerationDelta: -0.04, topSpeedDelta: -2, weightDelta: -4 }
] as const;

const MAINSTREAM_PACKS: readonly PackProfile[] = [
  { id: 'city', label: 'City', priceMultiplier: 0.96, powerFactor: 0.98, torqueFactor: 0.98, consumptionFactor: 0.99, rangeFactor: 1.0, co2Factor: 0.99, accelerationDelta: 0.15, topSpeedDelta: -4, weightDelta: -10 },
  { id: 'comfort', label: 'Comfort', priceMultiplier: 1.03, powerFactor: 1.0, torqueFactor: 1.01, consumptionFactor: 1.0, rangeFactor: 1.0, co2Factor: 1.0, accelerationDelta: 0.02, topSpeedDelta: 0, weightDelta: 8 },
  { id: 'tech', label: 'Tech', priceMultiplier: 1.07, powerFactor: 1.01, torqueFactor: 1.01, consumptionFactor: 1.0, rangeFactor: 1.01, co2Factor: 1.0, accelerationDelta: -0.04, topSpeedDelta: 2, weightDelta: 14 },
  { id: 'style', label: 'Style', priceMultiplier: 1.05, powerFactor: 1.0, torqueFactor: 1.0, consumptionFactor: 1.01, rangeFactor: 1.0, co2Factor: 1.01, accelerationDelta: 0, topSpeedDelta: 1, weightDelta: 6 },
  { id: 'black-edition', label: 'Black Edition', priceMultiplier: 1.09, powerFactor: 1.02, torqueFactor: 1.02, consumptionFactor: 1.01, rangeFactor: 1.0, co2Factor: 1.01, accelerationDelta: -0.06, topSpeedDelta: 3, weightDelta: 10 }
] as const;

const EV_PACKS: readonly PackProfile[] = [
  { id: 'efficient', label: 'Efficient', priceMultiplier: 0.97, powerFactor: 0.97, torqueFactor: 0.98, consumptionFactor: 1.0, rangeFactor: 1.04, co2Factor: 1.0, accelerationDelta: 0.18, topSpeedDelta: -6, weightDelta: -16 },
  { id: 'grand-tour', label: 'Grand Tour', priceMultiplier: 1.08, powerFactor: 1.02, torqueFactor: 1.03, consumptionFactor: 1.0, rangeFactor: 1.1, co2Factor: 1.0, accelerationDelta: -0.08, topSpeedDelta: 4, weightDelta: 14 },
  { id: 'tech-suite', label: 'Tech Suite', priceMultiplier: 1.09, powerFactor: 1.01, torqueFactor: 1.02, consumptionFactor: 1.0, rangeFactor: 1.02, co2Factor: 1.0, accelerationDelta: -0.04, topSpeedDelta: 2, weightDelta: 18 },
  { id: 'winter-pack', label: 'Winter Pack', priceMultiplier: 1.06, powerFactor: 1.0, torqueFactor: 1.0, consumptionFactor: 1.0, rangeFactor: 0.96, co2Factor: 1.0, accelerationDelta: 0.03, topSpeedDelta: 0, weightDelta: 22 },
  { id: 'launch-edition', label: 'Launch Edition', priceMultiplier: 1.12, powerFactor: 1.04, torqueFactor: 1.04, consumptionFactor: 1.0, rangeFactor: 1.03, co2Factor: 1.0, accelerationDelta: -0.12, topSpeedDelta: 6, weightDelta: 12 }
] as const;

const PERFORMANCE_PACKS: readonly PackProfile[] = [
  { id: 'touring', label: 'Touring', priceMultiplier: 1.04, powerFactor: 1.01, torqueFactor: 1.01, consumptionFactor: 1.01, rangeFactor: 1.0, co2Factor: 1.01, accelerationDelta: 0, topSpeedDelta: 2, weightDelta: 10 },
  { id: 'track', label: 'Track', priceMultiplier: 1.11, powerFactor: 1.06, torqueFactor: 1.05, consumptionFactor: 1.03, rangeFactor: 0.98, co2Factor: 1.03, accelerationDelta: -0.2, topSpeedDelta: 10, weightDelta: -8 },
  { id: 'carbon', label: 'Carbon', priceMultiplier: 1.13, powerFactor: 1.05, torqueFactor: 1.04, consumptionFactor: 1.02, rangeFactor: 0.99, co2Factor: 1.02, accelerationDelta: -0.24, topSpeedDelta: 8, weightDelta: -18 },
  { id: 'heritage', label: 'Heritage', priceMultiplier: 1.08, powerFactor: 1.02, torqueFactor: 1.02, consumptionFactor: 1.01, rangeFactor: 1.0, co2Factor: 1.01, accelerationDelta: -0.08, topSpeedDelta: 3, weightDelta: 2 },
  { id: 'launch-edition', label: 'Launch Edition', priceMultiplier: 1.15, powerFactor: 1.07, torqueFactor: 1.06, consumptionFactor: 1.03, rangeFactor: 0.99, co2Factor: 1.03, accelerationDelta: -0.28, topSpeedDelta: 12, weightDelta: -6 }
] as const;

const UTILITY_PACKS: readonly PackProfile[] = [
  { id: 'workline', label: 'Workline', priceMultiplier: 0.97, powerFactor: 0.99, torqueFactor: 1.01, consumptionFactor: 1.01, rangeFactor: 0.99, co2Factor: 1.01, accelerationDelta: 0.08, topSpeedDelta: -2, weightDelta: -14 },
  { id: 'family', label: 'Family', priceMultiplier: 1.03, powerFactor: 1.0, torqueFactor: 1.0, consumptionFactor: 1.0, rangeFactor: 1.0, co2Factor: 1.0, accelerationDelta: 0.04, topSpeedDelta: 0, weightDelta: 16 },
  { id: 'adventure', label: 'Adventure', priceMultiplier: 1.08, powerFactor: 1.02, torqueFactor: 1.04, consumptionFactor: 1.03, rangeFactor: 0.97, co2Factor: 1.03, accelerationDelta: 0.02, topSpeedDelta: 3, weightDelta: 26 },
  { id: 'premium', label: 'Premium', priceMultiplier: 1.1, powerFactor: 1.01, torqueFactor: 1.01, consumptionFactor: 1.01, rangeFactor: 1.0, co2Factor: 1.01, accelerationDelta: 0, topSpeedDelta: 2, weightDelta: 20 },
  { id: 'night-edition', label: 'Night Edition', priceMultiplier: 1.07, powerFactor: 1.02, torqueFactor: 1.02, consumptionFactor: 1.01, rangeFactor: 0.99, co2Factor: 1.01, accelerationDelta: -0.02, topSpeedDelta: 4, weightDelta: 12 }
] as const;

const EXECUTIVE_PACKS: readonly PackProfile[] = [
  { id: 'business', label: 'Business', priceMultiplier: 1.01, powerFactor: 1.0, torqueFactor: 1.0, consumptionFactor: 0.99, rangeFactor: 1.0, co2Factor: 0.99, accelerationDelta: 0.02, topSpeedDelta: 0, weightDelta: 12 },
  { id: 'comfort', label: 'Comfort', priceMultiplier: 1.05, powerFactor: 1.0, torqueFactor: 1.01, consumptionFactor: 1.0, rangeFactor: 1.0, co2Factor: 1.0, accelerationDelta: 0, topSpeedDelta: 1, weightDelta: 18 },
  { id: 'executive', label: 'Executive', priceMultiplier: 1.09, powerFactor: 1.01, torqueFactor: 1.01, consumptionFactor: 1.0, rangeFactor: 1.01, co2Factor: 1.0, accelerationDelta: -0.03, topSpeedDelta: 3, weightDelta: 20 },
  { id: 'luxury', label: 'Luxury', priceMultiplier: 1.14, powerFactor: 1.02, torqueFactor: 1.02, consumptionFactor: 1.01, rangeFactor: 1.01, co2Factor: 1.01, accelerationDelta: -0.05, topSpeedDelta: 4, weightDelta: 24 },
  { id: 'black-edition', label: 'Black Edition', priceMultiplier: 1.12, powerFactor: 1.03, torqueFactor: 1.03, consumptionFactor: 1.01, rangeFactor: 1.0, co2Factor: 1.01, accelerationDelta: -0.08, topSpeedDelta: 5, weightDelta: 18 }
] as const;

const flattenSeedCatalog = (): FlatVariant[] =>
  makes.flatMap((make) =>
    make.models.flatMap((model) =>
      model.generations.flatMap((generation) =>
        generation.variants.map((variant) => ({ make, model, generation, variant }))
      )
    )
  );

const unique = <T,>(values: T[]) => Array.from(new Set(values));

const formatYearRange = (start: number, end: number) => (start === end ? `${start}` : `${start}–${end}`);

const yearBounds = (years: string) => {
  const matches = years.match(/\d{4}/g)?.map(Number) ?? [];
  const start = matches[0] ?? CURRENT_YEAR - 2;
  const rawEnd = /present/i.test(years) ? CURRENT_YEAR : matches[matches.length - 1] ?? start;
  return { start, end: Math.max(start, rawEnd) };
};

const buildLifecycleProfiles = (years: string): LifecycleProfile[] => {
  const { start, end } = yearBounds(years);
  const span = Math.max(0, end - start);
  const earlyEnd = Math.min(end, start + Math.round(span * 0.33));
  const midStart = Math.min(end, start + Math.round(span * 0.34));
  const midEnd = Math.max(midStart, Math.min(end, start + Math.round(span * 0.66)));
  const lateStart = Math.max(start, Math.min(end, start + Math.round(span * 0.67)));

  return [
    {
      id: 'launch',
      label: 'Launch',
      years: formatYearRange(start, earlyEnd),
      priceMultiplier: 1.0,
      powerFactor: 1.0,
      torqueFactor: 1.0,
      consumptionFactor: 1.0,
      rangeFactor: 1.0,
      co2Factor: 1.0,
      accelerationDelta: 0,
      topSpeedDelta: 0,
      weightDelta: 0
    },
    {
      id: 'update',
      label: 'Update',
      years: formatYearRange(midStart, midEnd),
      priceMultiplier: 1.04,
      powerFactor: 1.01,
      torqueFactor: 1.01,
      consumptionFactor: 0.99,
      rangeFactor: 1.02,
      co2Factor: 0.99,
      accelerationDelta: -0.05,
      topSpeedDelta: 2,
      weightDelta: 8
    },
    {
      id: 'final',
      label: 'Final',
      years: formatYearRange(lateStart, end),
      priceMultiplier: 1.08,
      powerFactor: 1.02,
      torqueFactor: 1.02,
      consumptionFactor: 0.98,
      rangeFactor: 1.04,
      co2Factor: 0.98,
      accelerationDelta: -0.09,
      topSpeedDelta: 4,
      weightDelta: 10
    }
  ];
};

const priceFromBand = (band: string): number => {
  const match = band.replace(/[, ]/g, '').match(/\d+/);
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
};

const adjustPriceBand = (band: string, multiplier: number): string => {
  const currency = band.includes('£') ? '£' : band.includes('$') ? '$' : '€';
  const values = band.match(/\d[\d,. ]*/g)?.map((value) => Number(value.replace(/[^\d]/g, ''))) ?? [];
  const baseMin = values[0] ?? priceFromBand(band);
  const baseMax = values[1] ?? Math.round(baseMin * 1.12);
  const min = Math.max(1000, Math.round(baseMin * multiplier / 100) * 100);
  const max = Math.max(min + 1000, Math.round(baseMax * multiplier / 100) * 100);
  return `${currency}${min.toLocaleString()}–${currency}${max.toLocaleString()}`;
};

const round1 = (value: number) => Math.round(value * 10) / 10;

const choosePackSet = ({ model, generation, variant }: FlatVariant): readonly PackProfile[] => {
  const segment = `${model.segment} ${model.description}`.toLowerCase();
  const bodyStyles = generation.bodyStyles;
  const price = priceFromBand(variant.priceBand);

  if (variant.specs.fuel === 'Electric') return EV_PACKS;
  if (variant.specs.powerHp >= 360 || /supercar|sports/.test(segment)) return PERFORMANCE_PACKS;
  if (bodyStyles.some((body) => ['SUV', 'MPV', 'Van', 'Pickup'].includes(body))) return UTILITY_PACKS;
  if (/executive|luxury|premium|limousine|grand tourer/.test(segment) || price >= 65000) return EXECUTIVE_PACKS;
  return MAINSTREAM_PACKS;
};

const scaleNumber = (value: number | undefined, factor: number, delta = 0) => {
  if (value === undefined) return undefined;
  return Math.max(0, Math.round(value * factor + delta));
};

const scaleMetric = (value: number | undefined, factor: number, delta = 0) => {
  if (value === undefined) return undefined;
  return Math.max(0, round1(value * factor + delta));
};

export const normalize = (input: string) => input.toLowerCase().trim();

const buildSearchText = ({ make, model, generation, variant }: FlatVariant) =>
  normalize([
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
    variant.priceBand,
    variant.knownFor.join(' '),
    variant.watchOut.join(' ')
  ].join(' '));

const expandEntry = ({ make, model, generation, variant }: FlatVariant): FlatVariant[] => {
  const lifecycle = buildLifecycleProfiles(variant.years || generation.years);
  const packs = choosePackSet({ make, model, generation, variant });

  return lifecycle.flatMap((phase) =>
    MARKET_PROFILES.flatMap((market) =>
      packs.map((pack) => {
        const specs = variant.specs;
        const specFactor = pack.powerFactor * phase.powerFactor;
        const torqueFactor = pack.torqueFactor * phase.torqueFactor;
        const rangeFactor = market.rangeFactor * pack.rangeFactor * phase.rangeFactor;
        const consumptionFactor = market.consumptionFactor * pack.consumptionFactor * phase.consumptionFactor;
        const co2Factor = market.co2Factor * pack.co2Factor * phase.co2Factor;
        const priceFactor = market.priceMultiplier * pack.priceMultiplier * phase.priceMultiplier;
        const dimensions = variant.dimensions.weightKg === undefined
          ? variant.dimensions
          : {
              ...variant.dimensions,
              weightKg: Math.max(
                0,
                Math.round(
                  variant.dimensions.weightKg +
                  market.weightDelta +
                  pack.weightDelta +
                  phase.weightDelta
                )
              )
            };

        return {
          make,
          model,
          generation,
          variant: {
            ...variant,
            id: `${variant.id}--${phase.id}-${market.id}-${pack.id}`,
            name: `${variant.name} ${market.label} ${pack.label} ${phase.label}`,
            years: phase.years,
            priceBand: adjustPriceBand(variant.priceBand, priceFactor),
            specs: {
              ...specs,
              powerHp: scaleNumber(specs.powerHp, specFactor) ?? specs.powerHp,
              powerKw: scaleNumber(specs.powerKw, specFactor) ?? specs.powerKw,
              torqueNm: scaleNumber(specs.torqueNm, torqueFactor) ?? specs.torqueNm,
              acceleration0100: scaleMetric(
                specs.acceleration0100,
                1,
                market.accelerationDelta + pack.accelerationDelta + phase.accelerationDelta
              ),
              topSpeedKmh: scaleNumber(
                specs.topSpeedKmh,
                1,
                market.topSpeedDelta + pack.topSpeedDelta + phase.topSpeedDelta
              ),
              consumptionL100: scaleMetric(specs.consumptionL100, consumptionFactor),
              electricRangeKm: scaleNumber(specs.electricRangeKm, rangeFactor),
              co2Gkm: scaleNumber(specs.co2Gkm, co2Factor)
            },
            dimensions
          }
        };
      })
    )
  );
};

const expandedVariants = flattenSeedCatalog().flatMap(expandEntry);

const groupedByMake = new Map<string, FlatVariant[]>();
const groupedByModel = new Map<string, FlatVariant[]>();
const variantById = new Map<string, FlatVariant>();
const searchIndex = new Map<string, SearchIndexEntry>();

for (const entry of expandedVariants) {
  variantById.set(entry.variant.id, entry);

  const makeEntries = groupedByMake.get(entry.make.id);
  if (makeEntries) makeEntries.push(entry);
  else groupedByMake.set(entry.make.id, [entry]);

  const modelKey = `${entry.make.id}/${entry.model.id}`;
  const modelEntries = groupedByModel.get(modelKey);
  if (modelEntries) modelEntries.push(entry);
  else groupedByModel.set(modelKey, [entry]);

  searchIndex.set(entry.variant.id, {
    text: buildSearchText(entry),
    makeId: entry.make.id,
    fuel: entry.variant.specs.fuel,
    drive: entry.variant.specs.drive,
    bodyStyles: entry.generation.bodyStyles,
    segment: entry.model.segment
  });
}

export const flattenCatalog = (): FlatVariant[] => expandedVariants;

export const allVariants = flattenCatalog();

export const getVariantById = (id: string) => variantById.get(id);

export { unique };

export const getVariantsForMake = (makeId: string) => groupedByMake.get(makeId) ?? [];

export const getVariantsForModel = (makeId: string, modelId: string) =>
  groupedByModel.get(`${makeId}/${modelId}`) ?? [];

export const countVariantsForMake = (makeId: string) => getVariantsForMake(makeId).length;

export const countVariantsForModel = (makeId: string, modelId: string) => getVariantsForModel(makeId, modelId).length;

export const catalogStats = () => {
  const models = makes.reduce((sum, make) => sum + make.models.length, 0);
  const generations = makes.reduce(
    (sum, make) => sum + make.models.reduce((mSum, model) => mSum + model.generations.length, 0),
    0
  );
  const variants = allVariants.length;
  return { makes: makes.length, models, generations, variants };
};

export const searchVariants = (query: string, filters: Record<string, string>) => {
  const q = normalize(query);
  return allVariants.filter((entry) => {
    const idx = searchIndex.get(entry.variant.id);
    if (!idx) return false;

    const matchesQuery = q.length === 0 || idx.text.includes(q);
    const matchesMake = filters.make === 'all' || idx.makeId === filters.make;
    const matchesFuel = filters.fuel === 'all' || idx.fuel === filters.fuel;
    const matchesDrive = filters.drive === 'all' || idx.drive === filters.drive;
    const matchesBody = filters.body === 'all' || idx.bodyStyles.includes(filters.body as BodyStyle);
    const matchesSegment = filters.segment === 'all' || idx.segment === filters.segment;

    return matchesQuery && matchesMake && matchesFuel && matchesDrive && matchesBody && matchesSegment;
  });
};

export const formatNumber = (value?: number, suffix = '') => {
  if (value === undefined || Number.isNaN(value)) return '—';
  return `${value.toLocaleString()}${suffix}`;
};

export const trimVariantName = (modelName: string, variantName: string) => {
  const trimmed = variantName.replace(new RegExp(`^${modelName}\\s+`, 'i'), '').trim();
  return trimmed.length > 0 ? trimmed : variantName;
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
