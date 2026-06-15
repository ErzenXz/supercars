import { useCallback, useEffect, useState } from 'react';

const KEY = 'car-atlas:favorites';

const read = (): string[] => {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

export function useFavorites() {
  const [ids, setIds] = useState<string[]>(read);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(ids));
    } catch {
      /* ignore quota / private-mode errors */
    }
  }, [ids]);

  const toggle = useCallback((id: string) => {
    setIds((current) =>
      current.includes(id) ? current.filter((existing) => existing !== id) : [...current, id]
    );
  }, []);

  const has = useCallback((id: string) => ids.includes(id), [ids]);

  return { ids, toggle, has, count: ids.length };
}
