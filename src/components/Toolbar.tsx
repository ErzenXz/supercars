import type { BodyStyle, DriveType, FuelType } from '../types';
import { makes } from '../data/catalog';
import { unique, allVariants } from '../lib/catalog';
import type { SortKey } from '../lib/catalog';
import { Select } from './ui/Select';
import type { SelectOption } from './ui/Select';

interface ToolbarProps {
  query: string;
  filters: Record<string, string>;
  sort: SortKey;
  onQueryChange: (value: string) => void;
  onFilterChange: (key: string, value: string) => void;
  onSortChange: (value: SortKey) => void;
  onReset: () => void;
}

const fuels = unique(allVariants.map((e) => e.variant.specs.fuel)) as FuelType[];
const drives = unique(allVariants.map((e) => e.variant.specs.drive)) as DriveType[];
const bodies = unique(allVariants.flatMap((e) => e.generation.bodyStyles)) as BodyStyle[];

const opt = (value: string, label: string): SelectOption => ({ value, label });

const makeOptions: SelectOption[] = [opt('all', 'All makes'), ...makes.map((m) => opt(m.id, m.name))];
const fuelOptions: SelectOption[] = [opt('all', 'All fuels'), ...fuels.map((f) => opt(f, f))];
const bodyOptions: SelectOption[] = [opt('all', 'All bodies'), ...bodies.map((b) => opt(b, b))];
const driveOptions: SelectOption[] = [opt('all', 'All drives'), ...drives.map((d) => opt(d, d))];
const sortOptions: SelectOption[] = [
  opt('relevance', 'Sort: Relevance'),
  opt('power-desc', 'Sort: Most power'),
  opt('price-asc', 'Sort: Price ↑'),
  opt('price-desc', 'Sort: Price ↓'),
  opt('efficiency', 'Sort: Most efficient'),
  opt('year-desc', 'Sort: Newest')
];

const hasActiveFilter = (query: string, filters: Record<string, string>) =>
  query.length > 0 || Object.values(filters).some((v) => v !== 'all');

export function Toolbar({ query, filters, sort, onQueryChange, onFilterChange, onSortChange, onReset }: ToolbarProps) {
  return (
    <div className="toolbar">
      <div className="toolbar-inner">
        <label className="search">
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search make, model, engine…"
            aria-label="Search cars"
          />
        </label>

        <Select ariaLabel="Make" value={filters.make} onValueChange={(v) => onFilterChange('make', v)} options={makeOptions} />
        <Select ariaLabel="Fuel" value={filters.fuel} onValueChange={(v) => onFilterChange('fuel', v)} options={fuelOptions} />
        <Select ariaLabel="Body" value={filters.body} onValueChange={(v) => onFilterChange('body', v)} options={bodyOptions} />
        <Select ariaLabel="Drive" value={filters.drive} onValueChange={(v) => onFilterChange('drive', v)} options={driveOptions} />
        <Select ariaLabel="Sort" value={sort} onValueChange={(v) => onSortChange(v as SortKey)} options={sortOptions} />

        {hasActiveFilter(query, filters) && (
          <button className="reset-link" onClick={onReset}>Clear</button>
        )}
      </div>
    </div>
  );
}
