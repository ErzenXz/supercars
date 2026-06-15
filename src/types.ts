export type FuelType = 'Petrol' | 'Diesel' | 'Hybrid' | 'Plug-in Hybrid' | 'Electric';
export type DriveType = 'FWD' | 'RWD' | 'AWD' | '4x4';
export type GearboxType = 'Manual' | 'Automatic' | 'CVT' | 'DCT';
export type BodyStyle = 'Hatchback' | 'Sedan' | 'Wagon' | 'SUV' | 'Coupe' | 'Convertible' | 'MPV' | 'Van' | 'Pickup';

export interface SpecBlock {
  engine: string;
  engineCode?: string;
  displacementCc?: number;
  cylinders?: string;
  powerHp: number;
  powerKw: number;
  torqueNm: number;
  fuel: FuelType;
  gearbox: GearboxType;
  gears?: number;
  drive: DriveType;
  acceleration0100?: number;
  topSpeedKmh?: number;
  consumptionL100?: number;
  electricRangeKm?: number;
  co2Gkm?: number;
}

export interface Dimensions {
  lengthMm: number;
  widthMm: number;
  heightMm: number;
  wheelbaseMm: number;
  bootLitres: number;
  weightKg?: number;
  tankLitres?: number;
}

export interface OptionGroup {
  name: string;
  standard: string[];
  optional: string[];
}

export interface Variant {
  id: string;
  name: string;
  years: string;
  priceBand: string;
  specs: SpecBlock;
  dimensions: Dimensions;
  options: OptionGroup[];
  knownFor: string[];
  watchOut: string[];
}

export interface Generation {
  id: string;
  name: string;
  years: string;
  platform?: string;
  bodyStyles: BodyStyle[];
  summary: string;
  heroImage: string;
  variants: Variant[];
}

export interface CarModel {
  id: string;
  name: string;
  segment: string;
  description: string;
  tags: string[];
  generations: Generation[];
}

export interface CarMake {
  id: string;
  name: string;
  country: string;
  logoText: string;
  models: CarModel[];
}
