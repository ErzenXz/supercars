import { useEffect, useMemo, useState } from 'react';
import { Header } from './components/Header';
import { Toolbar } from './components/Toolbar';
import { CarCard } from './components/CarCard';
import { CarPage } from './components/CarPage';
import { Compare } from './components/Compare';
import { allVariants, getVariantById, searchVariants, sortVariants } from './lib/catalog';
import type { SortKey } from './lib/catalog';
import { makes } from './data/catalog';
import { useFavorites } from './lib/useFavorites';
import { useHashRoute, go, carHref } from './lib/useHashRoute';
import './styles.css';

const initialFilters = {
  make: 'all',
  fuel: 'all',
  drive: 'all',
  body: 'all',
  segment: 'all'
};

export default function App() {
  const route = useHashRoute();
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>(initialFilters);
  const [sort, setSort] = useState<SortKey>('relevance');
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const favorites = useFavorites();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const baseResults = useMemo(() => sortVariants(searchVariants(query, filters), sort), [query, filters, sort]);
  const results = useMemo(
    () => (route.name === 'favorites' ? baseResults.filter((e) => favorites.has(e.variant.id)) : baseResults),
    [baseResults, route, favorites]
  );

  const compared = compareIds
    .map(getVariantById)
    .filter(Boolean) as NonNullable<ReturnType<typeof getVariantById>>[];

  const updateFilter = (key: string, value: string) => setFilters((c) => ({ ...c, [key]: value }));
  const resetFilters = () => { setQuery(''); setFilters(initialFilters); setSort('relevance'); };

  const toggleCompare = (id: string) => {
    setCompareIds((current) => {
      if (current.includes(id)) return current.filter((x) => x !== id);
      if (current.length >= 3) return [...current.slice(1), id];
      return [...current, id];
    });
  };

  const renderList = (isFavorites: boolean) => (
    <>
      <div className="container page-head">
        <h1>{isFavorites ? 'Saved cars' : 'Find your car'}</h1>
        <p>
          {isFavorites
            ? `${results.length} saved version${results.length === 1 ? '' : 's'}.`
            : `${allVariants.length} versions across ${makes.length} makes — petrol, diesel, hybrid, plug-in and electric.`}
        </p>
      </div>

      <Toolbar
        query={query}
        filters={filters}
        sort={sort}
        onQueryChange={setQuery}
        onFilterChange={updateFilter}
        onSortChange={setSort}
        onReset={resetFilters}
      />

      <div className="results-meta">{results.length} result{results.length === 1 ? '' : 's'}</div>

      {results.length === 0 ? (
        <div className="empty">
          <h3>{isFavorites ? 'Nothing saved yet' : 'No cars match'}</h3>
          <p>
            {isFavorites
              ? 'Tap the heart on any car to save it here.'
              : 'Try clearing the search or filters.'}
            {!isFavorites && <> <button className="reset-link" onClick={resetFilters}>Clear filters</button></>}
          </p>
        </div>
      ) : (
        <div className="grid">
          {results.map((entry) => (
            <CarCard
              key={entry.variant.id}
              entry={entry}
              favorite={favorites.has(entry.variant.id)}
              onOpen={() => go(carHref(entry.variant.id).slice(1))}
              onFavorite={() => favorites.toggle(entry.variant.id)}
            />
          ))}
        </div>
      )}
    </>
  );

  return (
    <>
      <Header favoriteCount={favorites.count} compareCount={compareIds.length} />
      <main>
        {route.name === 'car' ? (
          <CarPage
            entry={getVariantById(route.id)}
            favorite={favorites.has(route.id)}
            compared={compareIds.includes(route.id)}
            onFavorite={() => favorites.toggle(route.id)}
            onCompare={() => toggleCompare(route.id)}
          />
        ) : route.name === 'compare' ? (
          <Compare entries={compared} onRemove={toggleCompare} />
        ) : (
          renderList(route.name === 'favorites')
        )}
      </main>
      <footer className="foot">
        <div className="container">
          <span>Car Atlas Pro · {allVariants.length} versions · {makes.length} makes</span>
          <span>Photos via Wikimedia Commons · <a href="https://github.com/ErzenXz/supercars">Source</a></span>
        </div>
      </footer>
    </>
  );
}
