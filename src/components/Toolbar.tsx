import type { BodyStyle, DriveType, FuelType } from '../types';
import { makes } from '../data/catalog';
import { unique, allVariants } from '../lib/catalog';
import type { SortKey } from '../lib/catalog';

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

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'relevance', label: 'Sort: Relevance' },
  { value: 'power-desc', label: 'Sort: Most power' },
  { value: 'price-asc', label: 'Sort: Price ↑' },
  { value: 'price-desc', label: 'Sort: Price ↓' },
  { value: 'efficiency', label: 'Sort: Most efficient' },
  { value: 'year-desc', label: 'Sort: Newest' }
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

        <select className="select" value={filters.make} onChange={(e) => onFilterChange('make', e.target.value)} aria-label="Make">
          <option value="all">All makes</option>
          {makes.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>

        <select className="select" value={filters.fuel} onChange={(e) => onFilterChange('fuel', e.target.value)} aria-label="Fuel">
          <option value="all">All fuels</option>
          {fuels.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>

        <select className="select" value={filters.body} onChange={(e) => onFilterChange('body', e.target.value)} aria-label="Body">
          <option value="all">All bodies</option>
          {bodies.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>

        <select className="select" value={filters.drive} onChange={(e) => onFilterChange('drive', e.target.value)} aria-label="Drive">
          <option value="all">All drives</option>
          {drives.map((dr) => <option key={dr} value={dr}>{dr}</option>)}
        </select>

        <select className="select" value={sort} onChange={(e) => onSortChange(e.target.value as SortKey)} aria-label="Sort">
          {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        {hasActiveFilter(query, filters) && (
          <button className="reset-link" onClick={onReset}>Clear</button>
        )}
      </div>
    </div>
  );
}
