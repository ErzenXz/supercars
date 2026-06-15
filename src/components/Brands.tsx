import { makes } from '../data/catalog';
import { carImages } from '../data/carImages';
import { makeTheme } from '../lib/theme';
import { go, makeHref } from '../lib/useHashRoute';

export function Brands() {
  return (
    <div className="container page-pad">
      <div className="page-head bare">
        <h1>Brands</h1>
        <p>{makes.length} makes — pick one to see its full lineup.</p>
      </div>

      <div className="brand-grid">
        {makes.map((make) => {
          const versions = make.models.reduce(
            (sum, model) => sum + model.generations.reduce((s, g) => s + g.variants.length, 0),
            0
          );
          const repModel = make.models.find((m) => carImages[`${make.id}/${m.id}`]);
          const img = repModel ? carImages[`${make.id}/${repModel.id}`] : undefined;
          const colors = makeTheme(make.id);

          return (
            <button key={make.id} className="brand-card" onClick={() => go(makeHref(make.id).slice(1))}>
              <div className="brand-photo" style={{ background: `linear-gradient(135deg, ${colors.a}22, ${colors.b}22)` }}>
                {img && <img src={img} alt={make.name} loading="lazy" />}
              </div>
              <div className="brand-info">
                <h3>{make.name}</h3>
                <span>{make.country} · {make.models.length} models · {versions} versions</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
