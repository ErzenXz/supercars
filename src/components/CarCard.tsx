import type { FlatVariant } from '../lib/catalog';
import { formatNumber } from '../lib/catalog';
import { makeTheme, fuelColor, fuelIcon, primaryBody } from '../lib/theme';
import { CarImage } from './CarImage';

interface CarCardProps {
  entry: FlatVariant;
  selected: boolean;
  compared: boolean;
  favorite: boolean;
  onSelect: () => void;
  onCompare: () => void;
  onFavorite: () => void;
}

export function CarCard({ entry, selected, compared, favorite, onSelect, onCompare, onFavorite }: CarCardProps) {
  const { make, model, generation, variant } = entry;
  const specs = variant.specs;
  const colors = makeTheme(make.id);
  const fuel = fuelColor(specs.fuel);
  const body = primaryBody(generation.bodyStyles, variant.name);

  return (
    <article className={`car-card ${selected ? 'is-selected' : ''}`}>
      <button className="card-hit" onClick={onSelect} aria-label={`Open ${make.name} ${model.name} ${variant.name}`} />

      <div
        className="car-visual"
        style={{ backgroundImage: `radial-gradient(120% 130% at 50% 135%, ${colors.a}33, transparent 62%)` }}
      >
        <button
          className={`fav-btn ${favorite ? 'is-fav' : ''}`}
          onClick={onFavorite}
          aria-label={favorite ? 'Remove from favorites' : 'Save to favorites'}
          aria-pressed={favorite}
        >
          {favorite ? '♥' : '♡'}
        </button>
        <span className="body-tag">{body}</span>
        <CarImage makeId={make.id} modelId={model.id} label={`${make.name} ${model.name}`} body={body} colors={colors} accent={fuel} className="car-svg" />
        <span className="fuel-badge" style={{ color: fuel, borderColor: `${fuel}66`, background: `${fuel}1f` }}>
          <i aria-hidden>{fuelIcon(specs.fuel)}</i> {specs.fuel}
        </span>
      </div>

      <div className="card-body">
        <div className="card-meta">
          <span>{make.name}</span>
          <span>{generation.name} · {generation.years}</span>
        </div>
        <h3>{model.name} <em>{variant.name}</em></h3>
        <div className="chips">
          <span>{specs.drive}</span>
          <span>{specs.gearbox}{specs.gears ? ` ${specs.gears}` : ''}</span>
          <span>{model.segment}</span>
        </div>
        <div className="spec-row">
          <div><strong>{specs.powerHp}</strong><span>hp</span></div>
          <div><strong>{specs.torqueNm}</strong><span>Nm</span></div>
          <div>
            <strong>{specs.fuel === 'Electric' ? formatNumber(specs.electricRangeKm) : formatNumber(specs.consumptionL100)}</strong>
            <span>{specs.fuel === 'Electric' ? 'km range' : 'L/100'}</span>
          </div>
          <div><strong>{formatNumber(variant.dimensions.bootLitres)}</strong><span>L boot</span></div>
        </div>
        <div className="card-price">{variant.priceBand}</div>
        <div className="card-actions">
          <button className="secondary-button small" onClick={onSelect}>Details</button>
          <button className={`compare-toggle ${compared ? 'active' : ''}`} onClick={onCompare}>
            {compared ? '✓ In compare' : 'Compare'}
          </button>
        </div>
      </div>
    </article>
  );
}
