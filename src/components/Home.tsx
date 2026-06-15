import { useState } from 'react';
import type { FormEvent } from 'react';
import type { FlatVariant } from '../lib/catalog';
import { catalogStats } from '../lib/catalog';
import { makes } from '../data/catalog';
import { go, makeHref } from '../lib/useHashRoute';
import { CarGrid } from './CarGrid';

interface HomeProps {
  featured: FlatVariant[];
  onSearch: (query: string) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
}

export function Home({ featured, onSearch, isFavorite, onToggleFavorite }: HomeProps) {
  const [value, setValue] = useState('');
  const stats = catalogStats();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Find your next car.</h1>
          <p>
            Specs, trims and buyer notes for {stats.variants} versions across {stats.makes} makes —
            petrol, diesel, hybrid, plug-in and electric.
          </p>
          <form className="hero-search" onSubmit={submit}>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search a make, model or engine — e.g. Golf, 320d, Model 3"
              aria-label="Search cars"
            />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
          <div className="hero-actions">
            <a className="btn" href="#/cars">Browse all cars</a>
            <a className="btn" href="#/brands">Browse brands</a>
          </div>
          <div className="stat-row">
            <div><strong>{stats.makes}</strong><span>Makes</span></div>
            <div><strong>{stats.models}</strong><span>Models</span></div>
            <div><strong>{stats.variants}</strong><span>Versions</span></div>
            <div><strong>5</strong><span>Fuel types</span></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>Popular right now</h2>
            <a href="#/cars">View all →</a>
          </div>
        </div>
        <CarGrid entries={featured} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
      </section>

      <section className="container brands-strip">
        <div className="section-head">
          <h2>Browse by brand</h2>
          <a href="#/brands">All brands →</a>
        </div>
        <div className="chip-row">
          {makes.map((make) => (
            <button key={make.id} className="brand-chip" onClick={() => go(makeHref(make.id).slice(1))}>
              {make.name}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
