import { makes } from '../data/catalog';
import { countVariantsForMake } from '../lib/catalog';
import { makeTheme, fuelColor, primaryBody } from '../lib/theme';
import { go, makeHref } from '../lib/useHashRoute';
import { CarImage } from './CarImage';
import { BrandLogo } from './BrandLogo';

export function Brands() {
  return (
    <div className="container page-pad">
      <div className="page-head bare">
        <h1>Brands</h1>
        <p>{makes.length} makes — pick one to explore its full lineup.</p>
      </div>

      <div className="brand-grid">
        {makes.map((make) => {
          const versions = countVariantsForMake(make.id);
          const rep = make.models.find((m) => m.generations[0]?.variants[0]) ?? make.models[0];
          const repVariant = rep?.generations[0]?.variants[0];
          const colors = makeTheme(make.id);
          const fuel = fuelColor(repVariant?.specs.fuel ?? 'Petrol');
          const body = primaryBody(rep?.generations[0]?.bodyStyles ?? [], repVariant?.name);

          return (
            <button key={make.id} className="brand-card" onClick={() => go(makeHref(make.id).slice(1))}>
              <div className="brand-bg">
                {rep && (
                  <CarImage makeId={make.id} modelId={rep.id} label={make.name} body={body} colors={colors} accent={fuel} />
                )}
              </div>
              <div className="brand-overlay">
                <div className="brand-logo-chip">
                  <BrandLogo makeId={make.id} className="brand-logo" fallback={make.logoText} />
                </div>
                <div className="brand-text">
                  <h3>{make.name}</h3>
                  <span>{make.models.length} models · {versions} versions</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
