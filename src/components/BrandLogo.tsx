import { useState } from 'react';

interface BrandLogoProps {
  makeId: string;
  className?: string;
  /** Shown (as text) if the brand has no baked logo file. */
  fallback?: string;
}

/**
 * Renders the brand's baked logo from /logos/<id>.svg. If the file is missing,
 * it renders the `fallback` text (or nothing) so the surrounding UI degrades
 * gracefully — not every brand has a logo on the icon CDN.
 */
export function BrandLogo({ makeId, className, fallback }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return fallback ? <span className="brand-logo-fallback">{fallback}</span> : null;
  return (
    <img
      className={className}
      src={`/logos/${makeId}.svg`}
      alt=""
      aria-hidden
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
