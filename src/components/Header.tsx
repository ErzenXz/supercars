import { catalogStats } from '../lib/catalog';

interface HeaderProps {
  onOpenImport: () => void;
  favoriteCount: number;
}

export function Header({ onOpenImport, favoriteCount }: HeaderProps) {
  const stats = catalogStats();

  return (
    <header className="site-header">
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="Car Atlas Pro home">
          <span className="brand-mark">CA</span>
          <span>
            <strong>Car Atlas</strong>
            <small>Pro catalog</small>
          </span>
        </a>

        <div className="nav-links" aria-label="Main navigation">
          <a href="#catalog">Catalog</a>
          <a href="#collections">Collections</a>
          <a href="#compare">Compare</a>
          <button className="ghost-button" onClick={onOpenImport}>Import data</button>
        </div>

        <div className="mini-stats" aria-label="Catalog stats">
          <span>{stats.makes} makes</span>
          <span>{stats.variants} versions</span>
          {favoriteCount > 0 && <span className="fav-stat">♥ {favoriteCount}</span>}
        </div>
      </nav>
    </header>
  );
}
