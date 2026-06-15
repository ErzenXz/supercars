import { catalogStats } from '../lib/catalog';

export function Hero() {
  const stats = catalogStats();

  return (
    <section id="top" className="hero section-pad">
      <div className="hero-content">
        <div className="eyebrow"><span /> Vehicle specs, trims, generations and options</div>
        <h1>One modern car collection for every make, model and version you care about.</h1>
        <p>
          Browse cars by generation, compare engines, inspect options, see known issues and build a real database from public or licensed sources without copying another website.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#catalog">Explore catalog</a>
          <a className="secondary-button" href="#compare">Compare versions</a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Catalog overview card">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="dashboard-card glass">
          <div className="dashboard-top">
            <span className="status-dot" />
            Live catalog architecture
          </div>
          <div className="speedometer">
            <div className="dial">{stats.variants}</div>
            <span>car versions</span>
          </div>
          <div className="stat-grid">
            <div><strong>{stats.makes}</strong><span>Makes</span></div>
            <div><strong>{stats.models}</strong><span>Models</span></div>
            <div><strong>{stats.generations}</strong><span>Generations</span></div>
            <div><strong>5</strong><span>Fuel types</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
