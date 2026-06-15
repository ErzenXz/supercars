import { makes } from '../data/catalog';
import { countVariantsForMake } from '../lib/catalog';
import { BrandLogo } from './BrandLogo';
import { ModelCard } from './ModelCard';

interface MakePageProps {
  makeId: string;
}

export function MakePage({ makeId }: MakePageProps) {
  const make = makes.find((m) => m.id === makeId);

  if (!make) {
    return (
      <div className="empty" style={{ marginTop: 80 }}>
        <h3>Brand not found</h3>
        <p><a className="reset-link" href="#/brands">Back to brands</a></p>
      </div>
    );
  }

  const versions = countVariantsForMake(makeId);

  return (
    <div className="page-pad">
      <div className="container">
        <a className="back" href="#/brands">← All brands</a>
        <div className="make-head">
          <BrandLogo makeId={make.id} className="make-head-logo" />
          <div>
            <h1>{make.name}</h1>
            <p>{make.country} · {make.models.length} models · {versions} versions</p>
          </div>
        </div>
      </div>
      <div className="grid">
        {make.models.map((model) => (
          <ModelCard key={model.id} make={make} model={model} />
        ))}
      </div>
    </div>
  );
}
