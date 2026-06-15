import type { CSSProperties } from 'react';
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

  const vars = { '--g1': colors.a, '--g2': colors.b, '--fuel': fuel } as CSSProperties;

  return (
    <article className="ccard" style={vars} onClick={onOpen}>
      <div className="ccard-photo">
        <CarImage
          makeId={make.id}
          modelId={model.id}
          label={`${make.name} ${model.name}`}
          body={body}
          colors={colors}
          accent={fuel}
        />
        <span className="ccard-tag">
          <span className="fuel-dot" style={{ background: fuel }} /> {specs.fuel}
        </span>
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
        <div className="ccard-stats">
          <span className="stat"><strong>{specs.powerHp}</strong> hp</span>
          <span className="stat">{range ?? specs.drive}</span>
        </div>
        <div className="ccard-foot">
          <span className="ccard-price">{variant.priceBand}</span>
        </div>
      </div>
    </article>
  );
}
