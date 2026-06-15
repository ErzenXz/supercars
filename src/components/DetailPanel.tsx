import type { FlatVariant } from '../lib/catalog';
import { formatNumber, fraction, specRanges } from '../lib/catalog';
import { makeTheme, fuelColor, fuelIcon, primaryBody } from '../lib/theme';
import { CarImage } from './CarImage';

interface DetailPanelProps {
  entry: FlatVariant | undefined;
  onCompare: () => void;
  compared: boolean;
  favorite: boolean;
  onFavorite: () => void;
}

function SpecBar({ label, display, fill, color }: { label: string; display: string; fill: number; color: string }) {
  return (
    <div className="spec-bar">
      <div className="spec-bar-head">
        <span>{label}</span>
        <strong>{display}</strong>
      </div>
      <div className="spec-bar-track">
        <div className="spec-bar-fill" style={{ width: `${Math.round(fill * 100)}%`, background: color }} />
      </div>
    </div>
  );
}

export function DetailPanel({ entry, onCompare, compared, favorite, onFavorite }: DetailPanelProps) {
  if (!entry) {
    return (
      <aside className="detail-panel glass empty-panel">
        <span className="big-icon">🔎</span>
        <h3>Select a car</h3>
        <p>Click any version to see engines, dimensions, options, known strengths and what to check before buying.</p>
      </aside>
    );
  }

  const { make, model, generation, variant } = entry;
  const s = variant.specs;
  const d = variant.dimensions;
  const colors = makeTheme(make.id);
  const fuel = fuelColor(s.fuel);
  const body = primaryBody(generation.bodyStyles, variant.name);
  const accel = s.acceleration0100;

  return (
    <aside className="detail-panel glass">
      <div
        className="detail-stage"
        style={{ backgroundImage: `radial-gradient(120% 120% at 50% 130%, ${colors.a}3a, transparent 65%)` }}
      >
        <button
          className={`fav-btn ${favorite ? 'is-fav' : ''}`}
          onClick={onFavorite}
          aria-label={favorite ? 'Remove from favorites' : 'Save to favorites'}
          aria-pressed={favorite}
        >
          {favorite ? '♥' : '♡'}
        </button>
        <CarImage makeId={make.id} modelId={model.id} label={`${make.name} ${model.name} ${variant.name}`} body={body} colors={colors} accent={fuel} className="detail-svg" />
        <span className="fuel-badge" style={{ color: fuel, borderColor: `${fuel}66`, background: `${fuel}1f` }}>
          <i aria-hidden>{fuelIcon(s.fuel)}</i> {s.fuel}
        </span>
      </div>

      <span className="detail-kicker">{make.name} · {model.name} · {generation.name}</span>
      <h2>{variant.name}</h2>
      <p>{model.description}</p>

      <div className="price-band">{variant.priceBand}</div>

      <section className="spec-section">
        <h3>Performance</h3>
        <div className="spec-bars">
          <SpecBar label="Power" display={`${s.powerHp} hp / ${s.powerKw} kW`} fill={fraction(s.powerHp, specRanges.powerHp)} color={fuel} />
          <SpecBar label="Torque" display={`${s.torqueNm} Nm`} fill={fraction(s.torqueNm, specRanges.torqueNm)} color={fuel} />
          {accel !== undefined && (
            <SpecBar label="0–100 km/h" display={`${accel.toFixed(1)} s`} fill={1 - fraction(accel, specRanges.acceleration0100)} color={fuel} />
          )}
          <SpecBar label="Boot space" display={`${d.bootLitres} L`} fill={fraction(d.bootLitres, specRanges.bootLitres)} color={fuel} />
        </div>
      </section>

      <div className="detail-grid">
        <div><span>Engine</span><strong>{s.engine}</strong></div>
        <div><span>Code</span><strong>{s.engineCode ?? '—'}</strong></div>
        <div><span>Gearbox</span><strong>{s.gearbox}{s.gears ? ` ${s.gears}` : ''}</strong></div>
        <div><span>Drive</span><strong>{s.drive}</strong></div>
        <div><span>Top speed</span><strong>{formatNumber(s.topSpeedKmh, ' km/h')}</strong></div>
        <div>
          <span>{s.fuel === 'Electric' ? 'Range' : 'Consumption'}</span>
          <strong>{s.fuel === 'Electric' ? formatNumber(s.electricRangeKm, ' km') : formatNumber(s.consumptionL100, ' L/100')}</strong>
        </div>
        <div><span>CO₂</span><strong>{formatNumber(s.co2Gkm, ' g/km')}</strong></div>
        <div><span>Body</span><strong>{generation.bodyStyles.join(' / ')}</strong></div>
      </div>

      <section className="spec-section">
        <h3>Dimensions</h3>
        <div className="dimension-bars">
          <div><span>Length</span><b>{d.lengthMm} mm</b></div>
          <div><span>Width</span><b>{d.widthMm} mm</b></div>
          <div><span>Height</span><b>{d.heightMm} mm</b></div>
          <div><span>Wheelbase</span><b>{d.wheelbaseMm} mm</b></div>
          <div><span>Boot</span><b>{d.bootLitres} L</b></div>
          <div><span>Weight</span><b>{formatNumber(d.weightKg, ' kg')}</b></div>
        </div>
      </section>

      <section className="spec-section">
        <h3>Options and equipment</h3>
        <div className="option-list">
          {variant.options.map((group) => (
            <details key={group.name} open={group.name === 'Safety'}>
              <summary>{group.name}</summary>
              <div className="option-columns">
                <div>
                  <span>Standard</span>
                  {group.standard.map((item) => <p key={item}>✓ {item}</p>)}
                </div>
                <div>
                  <span>Optional</span>
                  {group.optional.map((item) => <p key={item}>＋ {item}</p>)}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="spec-section twin-list">
        <div>
          <h3>Known for</h3>
          {variant.knownFor.map((item) => <p key={item}>✓ {item}</p>)}
        </div>
        <div>
          <h3>Check before buying</h3>
          {variant.watchOut.map((item) => <p key={item}>⚠ {item}</p>)}
        </div>
      </section>

      <button className={`primary-button full ${compared ? 'added' : ''}`} onClick={onCompare}>
        {compared ? 'Remove from comparison' : 'Add to comparison'}
      </button>
    </aside>
  );
}
