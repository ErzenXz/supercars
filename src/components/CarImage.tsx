import { useState } from 'react';
import { getCarMedia } from '../lib/media';
import { CarSilhouette } from './CarSilhouette';
import type { Gradient } from '../lib/theme';

interface CarImageProps {
  makeId: string;
  modelId: string;
  label: string;
  body: string;
  colors: Gradient;
  accent: string;
  className?: string;
  photoIndex?: number;
}

/**
 * Shows a real model photo (Wikimedia Commons) when available, falling back to
 * the procedural SVG silhouette if the model has no image or the photo fails.
 */
export function CarImage({ makeId, modelId, label, body, colors, accent, className, photoIndex = 0 }: CarImageProps) {
  const [errored, setErrored] = useState(false);
  const media = getCarMedia(makeId, modelId);
  const url = media[photoIndex] ?? media[0];

  if (!url || errored) {
    return <CarSilhouette body={body} colors={colors} accent={accent} className={className} />;
  }

  return (
    <img
      className="car-photo"
      src={url}
      alt={label}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
    />
  );
}
