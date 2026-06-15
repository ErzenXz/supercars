import type { FlatVariant } from '../lib/catalog';
import { trimVariantName } from '../lib/catalog';
import { makeTheme, fuelColor, primaryBody } from '../lib/theme';
import { CarImage } from './CarImage';

interface CarCardProps {
  entry: FlatVariant;
  favorite: boolean;
  onOpen: () => void;
  onFavorite: () => void;
}

export function CarCard({ entry, favorite, onOpen, onFavorite }: CarCardProps) {
  const { make, model, generation, variant } = entry;
  const specs = variant.specs;
  const colors = makeTheme(make.id);
  const fuel = fuelColor(specs.fuel);
  const body = primaryBody(generation.bodyStyles, variant.name);
  const range = specs.fuel === 'Electric' && specs.electricRangeKm ? `${specs.electricRangeKm} km` : null;

  return (
    <article className="ccard" onClick={onOpen}>
      <div className="ccard-photo">
        <CarImage
          makeId={make.id}
          modelId={model.id}
          label={`${make.name} ${model.name}`}
          body={body}
          colors={colors}
          accent={fuel}
        />
        <button
          className={`ccard-fav ${favorite ? 'on' : ''}`}
          onClick={(e) => { e.stopPropagation(); onFavorite(); }}
          aria-label={favorite ? 'Remove from saved' : 'Save'}
          aria-pressed={favorite}
        >
          {favorite ? '♥' : '♡'}
        </button>
      </div>
      <div className="ccard-body">
        <span className="ccard-make">{make.name}</span>
        <h3 className="ccard-title">{model.name} <span>{trimVariantName(model.name, variant.name)}</span></h3>
        <div className="ccard-meta">
          <span>{specs.powerHp} hp</span>
          <span className="sep">·</span>
          <span><span className="fuel-dot" style={{ background: fuel }} /> {specs.fuel}</span>
          <span className="sep">·</span>
          <span>{range ?? specs.drive}</span>
        </div>
        <div className="ccard-price">{variant.priceBand}</div>
      </div>
    </article>
  );
}
