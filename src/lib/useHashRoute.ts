import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'favorites' }
  | { name: 'compare' }
  | { name: 'car'; id: string };

function parse(): Route {
  const hash = (typeof window !== 'undefined' ? window.location.hash : '').replace(/^#/, '');
  if (hash.startsWith('/car/')) return { name: 'car', id: decodeURIComponent(hash.slice(5)) };
  if (hash === '/favorites') return { name: 'favorites' };
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
