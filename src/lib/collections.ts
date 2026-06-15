import type { FlatVariant } from './catalog';

export interface CollectionDef {
  id: string;
  title: string;
  description: string;
  icon: string;
  chips: string[];
  match: (entry: FlatVariant) => boolean;
}

export interface ResolvedCollection {
  def: CollectionDef;
  entries: FlatVariant[];
  total: number;
}

const hasTag = (entry: FlatVariant, ...tags: string[]) =>
  tags.some((tag) => entry.model.tags.includes(tag));

/**
 * Collections are defined as predicates over the flattened catalog, so they
 * stay correct and auto-populate as new makes/variants are added.
 */
export const collectionDefs: CollectionDef[] = [
  {
    id: 'diesel-dailies',
    title: 'Diesel dailies',
    description: 'Efficient EU-market diesels that are common, cheap to service and great for long trips.',
    icon: '⛽',
    chips: ['diesel', 'daily', 'efficient'],
    match: (e) => e.variant.specs.fuel === 'Diesel' && (e.variant.specs.consumptionL100 ?? 99) <= 6
  },
  {
    id: 'big-boot-wagons',
    title: 'Big-boot wagons',
    description: 'Estate, Touring, Variant, Avant and Sports Tourer bodies with serious cargo space.',
    icon: '🧳',
    chips: ['wagon', 'family', 'practical'],
    match: (e) => e.generation.bodyStyles.includes('Wagon') && e.variant.dimensions.bootLitres >= 500
  },
  {
    id: 'premium-german',
    title: 'Premium German',
    description: 'BMW, Mercedes, Audi, Porsche and VW picks for comfort, performance and badge value.',
    icon: '✨',
    chips: ['premium', 'germany'],
    match: (e) => e.make.country === 'Germany' && hasTag(e, 'premium', 'luxury', 'sport', 'quattro')
  },
  {
    id: 'low-stress-hybrids',
    title: 'Low-stress hybrids',
    description: 'Self-charging hybrids focused on reliability and low city consumption.',
    icon: '🔋',
    chips: ['hybrid', 'reliable'],
    match: (e) => e.variant.specs.fuel === 'Hybrid'
  },
  {
    id: 'plug-in-power',
    title: 'Plug-in hybrids',
    description: 'PHEVs with usable electric range for commuting and lower running costs.',
    icon: '🔌',
    chips: ['phev', 'electric range'],
    match: (e) => e.variant.specs.fuel === 'Plug-in Hybrid'
  },
  {
    id: 'going-electric',
    title: 'Going electric',
    description: 'Full EVs across every price point, from city runabouts to long-range performance.',
    icon: '⚡',
    chips: ['electric', 'zero-emission'],
    match: (e) => e.variant.specs.fuel === 'Electric'
  },
  {
    id: 'family-suvs',
    title: 'Family SUVs',
    description: 'Tall, practical crossovers and SUVs with room and traction for the whole family.',
    icon: '🚙',
    chips: ['suv', 'family'],
    match: (e) => e.generation.bodyStyles.includes('SUV')
  },
  {
    id: 'fast-but-usable',
    title: 'Fast but usable',
    description: 'Quick cars — hot hatches, sport sedans and performance EVs — that still work daily.',
    icon: '🏁',
    chips: ['performance', 'sport'],
    match: (e) => e.variant.specs.powerHp >= 250
  }
];

/** Resolve every collection against the catalog, capping the preview list. */
export const buildCollections = (all: FlatVariant[], limit = 6): ResolvedCollection[] =>
  collectionDefs.map((def) => {
    const matched = all.filter(def.match);
    return { def, entries: matched.slice(0, limit), total: matched.length };
  });
