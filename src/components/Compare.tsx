import type { FlatVariant } from '../lib/catalog';
import { formatNumber } from '../lib/catalog';
import { makeTheme, fuelColor, primaryBody } from '../lib/theme';
import { CarImage } from './CarImage';
import { carHref } from '../lib/useHashRoute';

interface CompareProps {
  entries: FlatVariant[];
  onRemove: (id: string) => void;
}

interface Row {
  label: string;
  display: (e: FlatVariant) => string;
  value?: (e: FlatVariant) => number | undefined;
  better?: 'high' | 'low';
}

const rows: Row[] = [
  { label: 'Power', display: (e) => `${e.variant.specs.powerHp} hp`, value: (e) => e.variant.specs.powerHp, better: 'high' },
  { label: 'Torque', display: (e) => `${e.variant.specs.torqueNm} Nm`, value: (e) => e.variant.specs.torqueNm, better: 'high' },
  { label: 'Engine', display: (e) => e.variant.specs.engine },
  { label: 'Fuel', display: (e) => e.variant.specs.fuel },
  { label: 'Gearbox', display: (e) => `${e.variant.specs.gearbox}${e.variant.specs.gears ? ` ${e.variant.specs.gears}` : ''}` },
  { label: 'Drive', display: (e) => e.variant.specs.drive },
  { label: '0–100', display: (e) => formatNumber(e.variant.specs.acceleration0100, ' s'), value: (e) => e.variant.specs.acceleration0100, better: 'low' },
  { label: 'Top speed', display: (e) => formatNumber(e.variant.specs.topSpeedKmh, ' km/h'), value: (e) => e.variant.specs.topSpeedKmh, better: 'high' },
  { label: 'Consumption', display: (e) => formatNumber(e.variant.specs.consumptionL100, ' L/100'), value: (e) => e.variant.specs.consumptionL100, better: 'low' },
  { label: 'EV range', display: (e) => formatNumber(e.variant.specs.electricRangeKm, ' km'), value: (e) => e.variant.specs.electricRangeKm, better: 'high' },
  { label: 'Boot', display: (e) => formatNumber(e.variant.dimensions.bootLitres, ' L'), value: (e) => e.variant.dimensions.bootLitres, better: 'high' },
  { label: 'Weight', display: (e) => formatNumber(e.variant.dimensions.weightKg, ' kg'), value: (e) => e.variant.dimensions.weightKg, better: 'low' },
  { label: 'Price', display: (e) => e.variant.priceBand }
];

const bestIndex = (row: Row, entries: FlatVariant[]): number => {
  if (!row.value || !row.better || entries.length < 2) return -1;
  const values = entries.map((e) => row.value!(e));
  const defined = values.filter((v): v is number => typeof v === 'number');
  if (defined.length < 2) return -1;
  const target = row.better === 'high' ? Math.max(...defined) : Math.min(...defined);
  if (defined.every((v) => v === target)) return -1;
  return values.findIndex((v) => v === target);
};

export function Compare({ entries, onRemove }: CompareProps) {
  return (
    <div className="cmp">
      <h1>Compare</h1>
      <p className="sub">Up to three cars side by side. The best value in each row is marked.</p>

      {entries.length === 0 ? (
        <div className="cmp-empty">
          No cars added yet. Open any car and tap <strong>Add to compare</strong>.
          <div style={{ marginTop: 14 }}><a className="reset-link" href="#/">Browse cars</a></div>
        </div>
      ) : (
        <div className="cmp-wrap">
          <table className="cmp-table">
            <thead>
              <tr>
                <th />
                {entries.map((entry) => {
                  const colors = makeTheme(entry.make.id);
                  return (
                    <th key={entry.variant.id}>
                      <a className="cmp-photo" href={carHref(entry.variant.id)} aria-label={`Open ${entry.make.name} ${entry.model.name}`}>
                        <CarImage
                          makeId={entry.make.id}
                          modelId={entry.model.id}
                          label={`${entry.make.name} ${entry.model.name}`}
                          body={primaryBody(entry.generation.bodyStyles, entry.variant.name)}
                          colors={colors}
                          accent={fuelColor(entry.variant.specs.fuel)}
                        />
                      </a>
                      <span className="name">{entry.make.name} {entry.model.name}</span>
                      <span className="trim">{entry.variant.name}</span>
                      <button className="cmp-remove" onClick={() => onRemove(entry.variant.id)}>Remove</button>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const best = bestIndex(row, entries);
                return (
                  <tr key={row.label}>
                    <td className="label">{row.label}</td>
                    {entries.map((entry, i) => (
                      <td key={entry.variant.id} className={i === best ? 'best' : ''}>
                        {row.display(entry)}
                        {i === best && <span className="badge">best</span>}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
