import { useMemo } from 'react';
import { allVariants } from '../lib/catalog';
import { buildCollections } from '../lib/collections';

interface CollectionsProps {
  onOpenVariant: (id: string) => void;
}

export function Collections({ onOpenVariant }: CollectionsProps) {
  const collections = useMemo(() => buildCollections(allVariants), []);

  return (
    <section id="collections" className="section-pad">
      <div className="section-heading">
        <span className="eyebrow"><span /> Curated collections</span>
        <h2>Browse like a car nerd, not like a boring table.</h2>
        <p>Collections group cars by real buying logic — diesel dailies, big-boot wagons, premium German, hybrids, EVs and fun daily drivers. They update automatically as the catalog grows.</p>
      </div>

      <div className="collections-grid">
        {collections.map(({ def, entries, total }) => (
          <article className="collection-card glass" key={def.id}>
            <div className="collection-top">
              <span className="collection-icon">{def.icon}</span>
              <div>
                <h3>{def.title}</h3>
                <p>{def.description}</p>
              </div>
            </div>
            <div className="chips collection-filters">
              {def.chips.map((chip) => <span key={chip}>{chip}</span>)}
              <span className="count-chip">{total} cars</span>
            </div>
            <div className="collection-list">
              {entries.map((entry) => (
                <button key={entry.variant.id} onClick={() => onOpenVariant(entry.variant.id)}>
                  <strong>{entry.make.name} {entry.model.name}</strong>
                  <span>{entry.variant.name}</span>
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
