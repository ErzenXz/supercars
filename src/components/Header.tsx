interface HeaderProps {
  favoriteCount: number;
  compareCount: number;
}

export function Header({ favoriteCount, compareCount }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="wordmark" href="#/">
          <span className="mark">CA</span>
          Car Atlas
        </a>
        <nav className="topnav">
          <a href="#/">Cars</a>
          <a href="#/favorites" className={favoriteCount ? 'has-count' : ''}>
            Saved{favoriteCount ? ` · ${favoriteCount}` : ''}
          </a>
          <a href="#/compare" className={compareCount ? 'has-count' : ''}>
            Compare{compareCount ? ` · ${compareCount}` : ''}
          </a>
        </nav>
      </div>
    </header>
  );
}
