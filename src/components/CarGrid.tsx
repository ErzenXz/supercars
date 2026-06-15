import type { FlatVariant } from '../lib/catalog';
import { CarCard } from './CarCard';
import { go, carHref } from '../lib/useHashRoute';

interface CarGridProps {
  entries: FlatVariant[];
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
}

export function CarGrid({ entries, isFavorite, onToggleFavorite }: CarGridProps) {
  return (
    <div className="grid">
      {entries.map((entry) => (
        <CarCard
          key={entry.variant.id}
          entry={entry}
          favorite={isFavorite(entry.variant.id)}
          onOpen={() => go(carHref(entry.variant.id).slice(1))}
          onFavorite={() => onToggleFavorite(entry.variant.id)}
        />
      ))}
    </div>
  );
}
