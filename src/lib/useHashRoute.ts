import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'cars' }
  | { name: 'brands' }
  | { name: 'saved' }
  | { name: 'compare' }
  | { name: 'make'; id: string }
  | { name: 'car'; id: string };

function parse(): Route {
  const hash = (typeof window !== 'undefined' ? window.location.hash : '').replace(/^#/, '');
  if (hash.startsWith('/car/')) return { name: 'car', id: decodeURIComponent(hash.slice(5)) };
  if (hash.startsWith('/make/')) return { name: 'make', id: decodeURIComponent(hash.slice(6)) };
  if (hash === '/cars' || hash.startsWith('/cars?')) return { name: 'cars' };
  if (hash === '/brands') return { name: 'brands' };
  if (hash === '/saved') return { name: 'saved' };
  if (hash === '/compare') return { name: 'compare' };
  return { name: 'home' };
}

export function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(parse);
  useEffect(() => {
    const onHash = () => setRoute(parse());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

export const go = (path: string) => {
  window.location.hash = path;
};

export const carHref = (id: string) => `#/car/${encodeURIComponent(id)}`;
export const makeHref = (id: string) => `#/make/${encodeURIComponent(id)}`;
