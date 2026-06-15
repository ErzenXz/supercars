import { useMemo, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Filters } from './components/Filters';
import { CarCard } from './components/CarCard';
import { DetailPanel } from './components/DetailPanel';
import { Collections } from './components/Collections';
import { Compare } from './components/Compare';
import { ImportModal } from './components/ImportModal';
import { allVariants, getVariantById, searchVariants, sortVariants } from './lib/catalog';
import type { SortKey } from './lib/catalog';
import { makes } from './data/catalog';
import { useFavorites } from './lib/useFavorites';
import './styles.css';

const initialFilters = {
  make: 'all',
  fuel: 'all',
  drive: 'all',
  body: 'all',
  segment: 'all'
};

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'power-desc', label: 'Most power' },
  { value: 'price-asc', label: 'Price: low → high' },
  { value: 'price-desc', label: 'Price: high → low' },
  { value: 'efficiency', label: 'Most efficient' },
  { value: 'year-desc', label: 'Newest' }
];

export default function App() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>(initialFilters);
  const [selectedId, setSelectedId] = useState(allVariants[0]?.variant.id ?? '');
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [importOpen, setImportOpen] = useState(false);
  const [sort, setSort] = useState<SortKey>('relevance');
  const [favOnly, setFavOnly] = useState(false);
  const favorites = useFavorites();

  const results = useMemo(() => {
    const matched = searchVariants(query, filters);
    const scoped = favOnly ? matched.filter((entry) => favorites.has(entry.variant.id)) : matched;
    return sortVariants(scoped, sort);
  }, [query, filters, sort, favOnly, favorites]);

  const selected = getVariantById(selectedId) ?? results[0] ?? allVariants[0];
  const compared = compareIds.map(getVariantById).filter(Boolean) as NonNullable<ReturnType<typeof getVariantById>>[];

  const updateFilter = (key: string, value: string) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  const toggleCompare = (id: string) => {
    setCompareIds((current) => {
      if (current.includes(id)) return current.filter((existing) => existing !== id);
      if (current.length >= 3) return [...current.slice(1), id];
      return [...current, id];
    });
  };

  const openVariant = (id: string) => {
    setSelectedId(id);
    window.location.hash = 'catalog';
  };

  return (
    <>
      <Header onOpenImport={() => setImportOpen(true)} favoriteCount={favorites.count} />
      <main>
        <Hero />

        <section id="catalog" className="section-pad catalog-section">
          <div className="section-heading catalog-heading">
            <span className="eyebrow"><span /> Catalog explorer</span>
            <h2>Search every make, generation, trim and engine in one place.</h2>
            <p>
              {allVariants.length} versions across {makes.length} makes — diesels, petrols, hybrids, plug-ins and EVs. Filter, sort and compare like a real buyer.
            </p>
          </div>

          <Filters
            query={query}
            filters={filters}
            onQueryChange={setQuery}
            onFilterChange={updateFilter}
            onReset={() => { setQuery(''); setFilters(initialFilters); setFavOnly(false); }}
          />

          <div className="catalog-layout">
            <div className="results-column">
              <div className="results-top">
                <h3>{results.length} matching version{results.length === 1 ? '' : 's'}</h3>
                <div className="results-controls">
                  <button
                    className={`fav-toggle ${favOnly ? 'active' : ''}`}
                    onClick={() => setFavOnly((v) => !v)}
                    aria-pressed={favOnly}
                  >
                    ♥ Favorites{favorites.count ? ` (${favorites.count})` : ''}
                  </button>
                  <label className="sort-control">
                    <span>Sort</span>
                    <select value={sort} onChange={(event) => setSort(event.target.value as SortKey)}>
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>

              {results.length === 0 ? (
                <div className="no-results glass">
                  <span>🚗💨</span>
                  <h3>No cars match those filters</h3>
                  <p>Try clearing the search or switching off “Favorites only”.</p>
                </div>
              ) : (
                <div className="cards-grid">
                  {results.map((entry) => (
                    <CarCard
                      key={entry.variant.id}
                      entry={entry}
                      selected={selected?.variant.id === entry.variant.id}
                      compared={compareIds.includes(entry.variant.id)}
                      favorite={favorites.has(entry.variant.id)}
                      onSelect={() => setSelectedId(entry.variant.id)}
                      onCompare={() => toggleCompare(entry.variant.id)}
                      onFavorite={() => favorites.toggle(entry.variant.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            <DetailPanel
              entry={selected}
              compared={selected ? compareIds.includes(selected.variant.id) : false}
              favorite={selected ? favorites.has(selected.variant.id) : false}
              onCompare={() => selected && toggleCompare(selected.variant.id)}
              onFavorite={() => selected && favorites.toggle(selected.variant.id)}
            />
          </div>
        </section>

        <Collections onOpenVariant={openVariant} />
        <Compare entries={compared} onRemove={toggleCompare} />

        <section className="section-pad builder-note">
          <div className="note-card glass">
            <span>🧠</span>
            <div>
              <h2>Built for a real car-data business.</h2>
              <p>
                Add auth, user garages, VIN history, dealer listings, price tracking, parts catalogs and admin import tools on top of this base. The important part is the schema: make → model → generation → variant → specs/options/issues.
              </p>
            </div>
          </div>
        </section>
      </main>
      <ImportModal open={importOpen} onClose={() => setImportOpen(false)} />
    </>
  );
}
