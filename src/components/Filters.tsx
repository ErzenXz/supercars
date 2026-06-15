import type { BodyStyle, DriveType, FuelType } from '../types';
import { makes } from '../data/catalog';
import { unique, allVariants } from '../lib/catalog';
import { fuelColor, fuelIcon } from '../lib/theme';

interface FiltersProps {
  query: string;
  filters: Record<string, string>;
  onQueryChange: (value: string) => void;
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
}

const fuels = unique(allVariants.map((entry) => entry.variant.specs.fuel)) as FuelType[];
const drives = unique(allVariants.map((entry) => entry.variant.specs.drive)) as DriveType[];
const bodies = unique(allVariants.flatMap((entry) => entry.generation.bodyStyles)) as BodyStyle[];
const segments = unique(allVariants.map((entry) => entry.model.segment)).sort();

const fuelOrder: FuelType[] = ['Petrol', 'Diesel', 'Hybrid', 'Plug-in Hybrid', 'Electric'];
const quickFuels = fuelOrder.filter((f) => fuels.includes(f));

export function Filters({ query, filters, onQueryChange, onFilterChange, onReset }: FiltersProps) {
  return (
    <div className="filter-shell glass">
      <div className="filter-row-top">
        <label className="search-box">
          <span>Search</span>
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search make, model, engine code, body… e.g. Golf GTI, 320d, B47, e-Tron"
          />
        </label>

        <div className="fuel-pills" role="group" aria-label="Quick fuel filter">
          <button
            className={`fuel-pill ${filters.fuel === 'all' ? 'active' : ''}`}
            onClick={() => onFilterChange('fuel', 'all')}
          >
            All fuels
          </button>
          {quickFuels.map((fuel) => {
            const color = fuelColor(fuel);
            const active = filters.fuel === fuel;
            return (
              <button
                key={fuel}
                className={`fuel-pill ${active ? 'active' : ''}`}
                style={active ? { color, borderColor: `${color}88`, background: `${color}22` } : undefined}
                onClick={() => onFilterChange('fuel', active ? 'all' : fuel)}
              >
                <i aria-hidden>{fuelIcon(fuel)}</i> {fuel}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-grid">
        <label>
          <span>Make</span>
          <select value={filters.make} onChange={(event) => onFilterChange('make', event.target.value)}>
            <option value="all">All makes</option>
            {makes.map((make) => <option key={make.id} value={make.id}>{make.name}</option>)}
          </select>
        </label>
        <label>
          <span>Drive</span>
          <select value={filters.drive} onChange={(event) => onFilterChange('drive', event.target.value)}>
            <option value="all">All drives</option>
            {drives.map((drive) => <option key={drive} value={drive}>{drive}</option>)}
          </select>
        </label>
        <label>
          <span>Body</span>
          <select value={filters.body} onChange={(event) => onFilterChange('body', event.target.value)}>
            <option value="all">All bodies</option>
            {bodies.map((body) => <option key={body} value={body}>{body}</option>)}
          </select>
        </label>
        <label>
          <span>Segment</span>
          <select value={filters.segment} onChange={(event) => onFilterChange('segment', event.target.value)}>
            <option value="all">All segments</option>
            {segments.map((segment) => <option key={segment} value={segment}>{segment}</option>)}
          </select>
        </label>
        <button className="reset-button" onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}
