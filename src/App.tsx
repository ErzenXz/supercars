import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Header } from './components/Header';
import { Toolbar } from './components/Toolbar';
import { CarGrid } from './components/CarGrid';
import { CarPage } from './components/CarPage';
import { Compare } from './components/Compare';
import { Home } from './components/Home';
import { Brands } from './components/Brands';
import { MakePage } from './components/MakePage';
import { ModelPage } from './components/ModelPage';
import { allVariants, getVariantById, searchVariants, sortVariants } from './lib/catalog';
import type { SortKey } from './lib/catalog';
import { makes } from './data/catalog';
import { useFavorites } from './lib/useFavorites';
import { useHashRoute, go } from './lib/useHashRoute';
import './styles.css';

const initialFilters = {
  make: 'all',
  fuel: 'all',
  drive: 'all',
  body: 'all',
  segment: 'all'
};

const PAGE_SIZE = 24;

/** Windowed page list with gaps, e.g. [1, 'gap', 5, 6, 7, 'gap', 29]. */
function pageWindow(current: number, count: number): (number | string)[] {
  if (count <= 7) return Array.from({ length: count }, (_, i) => i + 1);
  const wanted = new Set([1, 2, count - 1, count, current - 1, current, current + 1]);
  const pages = [...wanted].filter((p) => p >= 1 && p <= count).sort((a, b) => a - b);
  const out: (number | string)[] = [];
  pages.forEach((p, i) => {
    if (i > 0 && p - (pages[i - 1] as number) > 1) out.push(`gap-${i}`);
    out.push(p);
  });
  return out;
}

export default function App() {
  const route = useHashRoute();
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, string>>(initialFilters);
  const [sort, setSort] = useState<SortKey>('relevance');
  const [page, setPage] = useState(1);
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const favorites = useFavorites();

  useEffect(() => { window.scrollTo(0, 0); }, [route]);
  useEffect(() => { setPage(1); }, [query, filters, sort]);

  const results = useMemo(() => sortVariants(searchVariants(query, filters), sort), [query, filters, sort]);
  const featured = useMemo(() => sortVariants(allVariants, 'power-desc').slice(0, 8), []);
  const saved = useMemo(() => allVariants.filter((e) => favorites.has(e.variant.id)), [favorites]);

  const pageCount = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageItems = results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const compared = compareIds
    .map(getVariantById)
    .filter(Boolean) as NonNullable<ReturnType<typeof getVariantById>>[];

  const updateFilter = (key: string, value: string) => setFilters((c) => ({ ...c, [key]: value }));
  const resetFilters = () => { setQuery(''); setFilters(initialFilters); setSort('relevance'); };
  const isFav = (id: string) => favorites.has(id);
  const toggleFav = (id: string) => favorites.toggle(id);

  const toggleCompare = (id: string) => {
    setCompareIds((current) => {
      if (current.includes(id)) return current.filter((x) => x !== id);
      if (current.length >= 3) return [...current.slice(1), id];
      return [...current, id];
    });
  };

  const gotoPage = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const carsPage = (
    <div className="page-pad">
      <div className="container page-head">
        <h1>All cars</h1>
        <p>{allVariants.length} versions across {makes.length} makes.</p>
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

      <div className="results-meta">
        {results.length} result{results.length === 1 ? '' : 's'}
        {pageCount > 1 && <> · page {currentPage} of {pageCount}</>}
      </div>

      {results.length === 0 ? (
        <div className="empty">
          <h3>No cars match</h3>
          <p>Try clearing the search or filters. <button className="reset-link" onClick={resetFilters}>Clear filters</button></p>
        </div>
      ) : (
        <>
          <CarGrid entries={pageItems} isFavorite={isFav} onToggleFavorite={toggleFav} />
          {pageCount > 1 && (
            <nav className="pager" aria-label="Pagination">
              <button className="pager-btn" onClick={() => gotoPage(currentPage - 1)} disabled={currentPage === 1}>← Prev</button>
              <div className="pager-nums">
                {pageWindow(currentPage, pageCount).map((p) =>
                  typeof p === 'string' ? (
                    <span key={p} className="pager-gap">…</span>
                  ) : (
                    <button
                      key={p}
                      className={`pager-num ${p === currentPage ? 'on' : ''}`}
                      onClick={() => gotoPage(p)}
                      aria-current={p === currentPage}
                    >
                      {p}
                    </button>
                  )
                )}
              </div>
              <button className="pager-btn" onClick={() => gotoPage(currentPage + 1)} disabled={currentPage === pageCount}>Next →</button>
            </nav>
          )}
        </>
      )}
    </div>
  );

  const savedPage = (
    <div className="page-pad">
      <div className="container page-head">
        <h1>Saved cars</h1>
        <p>{saved.length} saved version{saved.length === 1 ? '' : 's'}.</p>
      </div>
      {saved.length === 0 ? (
        <div className="empty">
          <h3>Nothing saved yet</h3>
          <p>Tap the heart on any car to save it here. <a className="reset-link" href="#/cars">Browse cars</a></p>
        </div>
      ) : (
        <CarGrid entries={saved} isFavorite={isFav} onToggleFavorite={toggleFav} />
      )}
    </div>
  );

  let content: ReactNode;
  if (route.name === 'car') {
    content = (
      <CarPage
        entry={getVariantById(route.id)}
        favorite={favorites.has(route.id)}
        compared={compareIds.includes(route.id)}
        onFavorite={() => favorites.toggle(route.id)}
        onCompare={() => toggleCompare(route.id)}
      />
    );
  } else if (route.name === 'model') {
    content = <ModelPage makeId={route.makeId} modelId={route.modelId} isFavorite={isFav} onToggleFavorite={toggleFav} />;
  } else if (route.name === 'make') {
    content = <MakePage makeId={route.id} />;
  } else if (route.name === 'brands') {
    content = <Brands />;
  } else if (route.name === 'compare') {
    content = <Compare entries={compared} onRemove={toggleCompare} />;
  } else if (route.name === 'saved') {
    content = savedPage;
  } else if (route.name === 'cars') {
    content = carsPage;
  } else {
    content = (
      <Home
        featured={featured}
        isFavorite={isFav}
        onToggleFavorite={toggleFav}
        onSearch={(q) => { setQuery(q); setFilters(initialFilters); go('/cars'); }}
      />
    );
  }

  return (
    <>
      <Header route={route} favoriteCount={favorites.count} compareCount={compareIds.length} />
      <main>{content}</main>
      <footer className="foot">
        <div className="container">
          <span>Car Atlas Pro · {allVariants.length} versions · {makes.length} makes</span>
          <span>Photos via Wikimedia Commons · <a href="https://github.com/ErzenXz/supercars">Source</a></span>
        </div>
      </footer>
    </>
  );
}
