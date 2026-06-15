import { useMemo } from 'react';
import { getVariantsForModel } from '../lib/catalog';
import { makes } from '../data/catalog';
import { makeHref } from '../lib/useHashRoute';
import { CarGrid } from './CarGrid';

interface ModelPageProps {
  makeId: string;
  modelId: string;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
}

export function ModelPage({ makeId, modelId, isFavorite, onToggleFavorite }: ModelPageProps) {
  const make = makes.find((m) => m.id === makeId);
  const model = make?.models.find((m) => m.id === modelId);
  const entries = useMemo(
    () => getVariantsForModel(makeId, modelId),
    [makeId, modelId]
  );

  if (!make || !model) {
    return (
      <div className="empty" style={{ marginTop: 80 }}>
        <h3>Model not found</h3>
        <p><a className="reset-link" href="#/brands">Back to brands</a></p>
      </div>
    );
  }

  const generations = model.generations.map((g) => g.name).join(', ');

  return (
    <div className="page-pad">
      <div className="container">
        <a className="back" href={makeHref(make.id)}>← {make.name}</a>
        <div className="page-head bare">
          <span className="cp-make">{make.name}</span>
          <h1>{model.name}</h1>
          <p>{model.description}</p>
          <p className="model-meta">
            {model.segment} · {entries.length} version{entries.length === 1 ? '' : 's'}
            {generations && <> · generations: {generations}</>}
          </p>
        </div>
      </div>
      <CarGrid entries={entries} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}
