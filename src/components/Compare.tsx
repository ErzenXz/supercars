import type { FlatVariant } from '../lib/catalog';
import { formatNumber } from '../lib/catalog';
import { makeTheme, fuelColor, primaryBody } from '../lib/theme';
import { CarImage } from './CarImage';

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
  { label: 'Power', display: (e) => `${e.variant.specs.powerHp} hp / ${e.variant.specs.powerKw} kW`, value: (e) => e.variant.specs.powerHp, better: 'high' },
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
  { label: 'Length', display: (e) => formatNumber(e.variant.dimensions.lengthMm, ' mm'), value: (e) => e.variant.dimensions.lengthMm },
  { label: 'Weight', display: (e) => formatNumber(e.variant.dimensions.weightKg, ' kg'), value: (e) => e.variant.dimensions.weightKg, better: 'low' },
  { label: 'Price', display: (e) => e.variant.priceBand }
];

const bestIndex = (row: Row, entries: FlatVariant[]): number => {
  if (!row.value || !row.better || entries.length < 2) return -1;
  const values = entries.map((e) => row.value!(e));
  const defined = values.filter((v): v is number => typeof v === 'number');
  if (defined.length < 2) return -1;
  const target = row.better === 'high' ? Math.max(...defined) : Math.min(...defined);
  // ambiguous if everyone ties
  if (defined.every((v) => v === target)) return -1;
  return values.findIndex((v) => v === target);
};

export function Compare({ entries, onRemove }: CompareProps) {
  return (
    <section id="compare" className="section-pad compare-section">
      <div className="section-heading compact">
        <span className="eyebrow"><span /> Compare</span>
        <h2>Side-by-side version comparison.</h2>
        <p>Add up to three cars from the catalog to compare power, engine, dimensions and practical numbers. The best value in each row is highlighted.</p>
      </div>

      {entries.length === 0 ? (
        <div className="empty-compare glass">
          <span>⚖️</span>
          <h3>No cars selected yet</h3>
          <p>Tap “Compare” on any version card. The table will build itself here.</p>
        </div>
      ) : (
        <div className="compare-table-wrap glass">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Spec</th>
                {entries.map((entry) => {
                  const colors = makeTheme(entry.make.id);
                  return (
                    <th key={entry.variant.id}>
                      <div className="compare-art" style={{ backgroundImage: `radial-gradient(120% 130% at 50% 140%, ${colors.a}33, transparent 60%)` }}>
                        <CarImage makeId={entry.make.id} modelId={entry.model.id} label={`${entry.make.name} ${entry.model.name}`} body={primaryBody(entry.generation.bodyStyles, entry.variant.name)} colors={colors} accent={fuelColor(entry.variant.specs.fuel)} className="compare-svg" />
                      </div>
                      <strong>{entry.make.name} {entry.model.name}</strong>
                      <span>{entry.variant.name}</span>
                      <button onClick={() => onRemove(entry.variant.id)}>Remove</button>
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
                    <td>{row.label}</td>
                    {entries.map((entry, i) => (
                      <td key={entry.variant.id} className={i === best ? 'is-best' : ''}>
                        {row.display(entry)}
                        {i === best && <span className="best-tag">best</span>}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
