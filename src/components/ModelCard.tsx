import type { CarMake, CarModel } from '../types';
import { countVariantsForModel } from '../lib/catalog';
import { makeTheme, fuelColor, primaryBody, priceFrom } from '../lib/theme';
import { CarImage } from './CarImage';
import { go, modelHref } from '../lib/useHashRoute';

interface ModelCardProps {
  make: CarMake;
  model: CarModel;
}

export function ModelCard({ make, model }: ModelCardProps) {
  const variants = model.generations.flatMap((g) => g.variants);
  const totalVersions = countVariantsForModel(make.id, model.id);
  const first = model.generations[0];
  const firstVariant = first?.variants[0];
  const colors = makeTheme(make.id);
  const fuel = fuelColor(firstVariant?.specs.fuel ?? 'Petrol');
  const body = primaryBody(first?.bodyStyles ?? [], firstVariant?.name);
  const minPrice = Math.min(...variants.map((v) => priceFrom(v.priceBand)).filter((n) => n > 0));
  const years = `${model.generations[model.generations.length - 1]?.years ?? ''}`;

  return (
    <article className="ccard" onClick={() => go(modelHref(make.id, model.id).slice(1))}>
      <div className="ccard-photo">
        <CarImage makeId={make.id} modelId={model.id} label={`${make.name} ${model.name}`} body={body} colors={colors} accent={fuel} />
        <span className="count-badge">{totalVersions} version{totalVersions === 1 ? '' : 's'}</span>
      </div>
      <div className="ccard-body">
        <span className="ccard-make">{make.name}</span>
        <h3 className="ccard-title">{model.name}</h3>
        <div className="ccard-meta">
          <span>{model.segment}</span>
          {years && <><span className="sep">·</span><span>{years}</span></>}
        </div>
        {Number.isFinite(minPrice) && minPrice > 0 && (
          <div className="ccard-price">from €{minPrice.toLocaleString()}</div>
        )}
      </div>
    </article>
  );
}
