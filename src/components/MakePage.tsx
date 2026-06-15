import { useMemo } from 'react';
import { allVariants } from '../lib/catalog';
import { makes } from '../data/catalog';
import { CarGrid } from './CarGrid';

interface MakePageProps {
  makeId: string;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
}

export function MakePage({ makeId, isFavorite, onToggleFavorite }: MakePageProps) {
  const make = makes.find((m) => m.id === makeId);
  const entries = useMemo(() => allVariants.filter((e) => e.make.id === makeId), [makeId]);

  if (!make) {
    return (
      <div className="empty" style={{ marginTop: 80 }}>
        <h3>Brand not found</h3>
        <p><a className="reset-link" href="#/brands">Back to brands</a></p>
      </div>
    );
  }

  return (
    <div className="page-pad">
      <div className="container">
        <a className="back" href="#/brands">← All brands</a>
        <div className="page-head bare">
          <h1>{make.name}</h1>
          <p>{make.country} · {make.models.length} models · {entries.length} versions</p>
        </div>
      </div>
      <CarGrid entries={entries} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
