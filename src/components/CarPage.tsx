import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { FlatVariant } from '../lib/catalog';
import { formatNumber, trimVariantName } from '../lib/catalog';
import { getCarMedia } from '../lib/media';
import { makeTheme, fuelColor, primaryBody } from '../lib/theme';
import { CarImage } from './CarImage';

interface CarPageProps {
  entry: FlatVariant | undefined;
  favorite: boolean;
  compared: boolean;
  onFavorite: () => void;
  onCompare: () => void;
}

interface PhotoGalleryProps {
  makeId: string;
  modelId: string;
  label: string;
  body: string;
  colors: ReturnType<typeof makeTheme>;
  accent: string;
}

function PhotoGallery({ makeId, modelId, label, body, colors, accent }: PhotoGalleryProps) {
  const media = getCarMedia(makeId, modelId);
  const [selected, setSelected] = useState(0);

  return (
    <div className="car-gallery">
      <div className="carpage-photo">
        <CarImage
          makeId={makeId}
          modelId={modelId}
          label={label}
          body={body}
          colors={colors}
          accent={accent}
          photoIndex={selected}
        />
      </div>

      {media.length > 1 && (
        <div className="carpage-thumbs" aria-label="Photo gallery">
          {media.map((photo, index) => (
            <button
              key={photo}
              type="button"
              className={`carpage-thumb ${index === selected ? 'on' : ''}`}
              onClick={() => setSelected(index)}
              aria-label={`Show photo ${index + 1}`}
              aria-pressed={index === selected}
            >
              <img src={photo} alt={`${label} photo ${index + 1}`} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function CarPage({ entry, favorite, compared, onFavorite, onCompare }: CarPageProps) {
  if (!entry) {
    return (
      <div className="empty" style={{ marginTop: 80 }}>
        <h3>Car not found</h3>
        <p>That version is no longer in the catalog. <a className="reset-link" href="#/">Back to all cars</a></p>
      </div>
    );
  }

  const { make, model, generation, variant } = entry;
  const s = variant.specs;
  const d = variant.dimensions;
  const colors = makeTheme(make.id);
  const fuel = fuelColor(s.fuel);
  const body = primaryBody(generation.bodyStyles, variant.name);
  const vars = { '--g1': colors.a, '--g2': colors.b, '--fuel': fuel } as CSSProperties;

  const specTiles: [string, string][] = [
    ['Engine', s.engine],
    ['Power', `${s.powerHp} hp / ${s.powerKw} kW`],
    ['Torque', `${s.torqueNm} Nm`],
    ['0–100 km/h', formatNumber(s.acceleration0100, ' s')],
    ['Top speed', formatNumber(s.topSpeedKmh, ' km/h')],
    ['Gearbox', `${s.gearbox}${s.gears ? ` ${s.gears}-speed` : ''}`],
    ['Drive', s.drive],
    s.fuel === 'Electric'
      ? ['Range', formatNumber(s.electricRangeKm, ' km')]
      : ['Consumption', formatNumber(s.consumptionL100, ' L/100km')],
    ['CO₂', formatNumber(s.co2Gkm, ' g/km')],
    ['Engine code', s.engineCode ?? '—']
  ];

  const dimTiles: [string, string][] = [
    ['Length', `${d.lengthMm} mm`],
    ['Width', `${d.widthMm} mm`],
    ['Height', `${d.heightMm} mm`],
    ['Wheelbase', `${d.wheelbaseMm} mm`],
    ['Boot', `${d.bootLitres} L`],
    ['Weight', formatNumber(d.weightKg, ' kg')],
    ['Tank', formatNumber(d.tankLitres, ' L')]
  ];

  return (
    <article className="carpage" style={vars}>
      <a className="back" href="#/">← All cars</a>

      <div className="carpage-hero">
        <PhotoGallery
          key={variant.id}
          makeId={make.id}
          modelId={model.id}
          label={`${make.name} ${model.name} ${variant.name}`}
          body={body}
          colors={colors}
          accent={fuel}
        />
        <div className="carpage-head">
          <span className="cp-make">{make.name} · {make.country}</span>
          <h1>{model.name} {trimVariantName(model.name, variant.name)}</h1>
          <p className="cp-sub">{generation.name} · {generation.years} · {body} · {model.segment}</p>
          <div className="cp-price">{variant.priceBand}</div>
          <p className="cp-desc">{model.description}</p>
          <div className="cp-actions">
            <button className={`btn btn-primary ${favorite ? 'on' : ''}`} onClick={onFavorite}>
              {favorite ? '♥ Saved' : '♡ Save'}
            </button>
            <button className={`btn ${compared ? 'on' : ''}`} onClick={onCompare}>
              {compared ? '✓ In compare' : 'Add to compare'}
            </button>
          </div>
        </div>
      </div>

      <section className="cp-section">
        <h2>Specifications</h2>
        <div className="tiles">
          {specTiles.map(([k, v]) => (
            <div className="tile" key={k}><div className="k">{k}</div><div className="v">{v}</div></div>
          ))}
        </div>
      </section>

      <section className="cp-section">
        <h2>Dimensions</h2>
        <div className="tiles">
          {dimTiles.map(([k, v]) => (
            <div className="tile" key={k}><div className="k">{k}</div><div className="v">{v}</div></div>
          ))}
        </div>
      </section>

      <section className="cp-section">
        <h2>Equipment</h2>
        <div className="equip">
          {variant.options.map((group) => (
            <div className="equip-group" key={group.name}>
              <h3>{group.name}</h3>
              <div className="equip-cap">Standard</div>
              {group.standard.map((item) => (
                <div className="equip-row" key={item}><span className="mark">✓</span>{item}</div>
              ))}
              <div className="equip-cap">Optional</div>
              {group.optional.map((item) => (
                <div className="equip-row opt" key={item}><span className="mark">＋</span>{item}</div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="cp-section">
        <h2>Buyer notes</h2>
        <div className="twin">
          <div>
            <h3>Known for</h3>
            {variant.knownFor.map((item) => (
              <div className="row" key={item}><span className="good">✓</span>{item}</div>
            ))}
          </div>
          <div>
            <h3>Check before buying</h3>
            {variant.watchOut.map((item) => (
              <div className="row" key={item}><span className="warn">⚠</span>{item}</div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
