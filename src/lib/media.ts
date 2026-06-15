import { carImages } from '../data/carImages';
import { carMedia } from '../data/carMedia';

const keyFor = (makeId: string, modelId: string) => `${makeId}/${modelId}`;

export const getCarMedia = (makeId: string, modelId: string) => {
  const key = keyFor(makeId, modelId);
  const gallery = carMedia[key] ?? [];
  const fallback = carImages[key];

  if (gallery.length > 0) return gallery;
  return fallback ? [fallback] : [];
};

export const getPrimaryCarImage = (makeId: string, modelId: string) => getCarMedia(makeId, modelId)[0];
