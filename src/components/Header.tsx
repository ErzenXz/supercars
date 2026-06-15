import type { Route } from '../lib/useHashRoute';

interface HeaderProps {
  route: Route;
  favoriteCount: number;
  compareCount: number;
}

export function Header({ route, favoriteCount, compareCount }: HeaderProps) {
  const active = (name: Route['name']) => (route.name === name ? 'active' : '');

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="wordmark" href="#/">
          <span className="mark">CA</span>
          Car Atlas
        </a>
        <nav className="topnav">
          <a href="#/" className={active('home')}>Home</a>
          <a href="#/cars" className={active('cars')}>Cars</a>
          <a href="#/brands" className={`${active('brands')} ${active('make')}`.trim()}>Brands</a>
          <a href="#/saved" className={`${active('saved')} ${favoriteCount ? 'has-count' : ''}`.trim()}>
            Saved{favoriteCount ? ` · ${favoriteCount}` : ''}
          </a>
          <a href="#/compare" className={`${active('compare')} ${compareCount ? 'has-count' : ''}`.trim()}>
            Compare{compareCount ? ` · ${compareCount}` : ''}
          </a>
        </nav>
      </div>
    </header>
  );
}
