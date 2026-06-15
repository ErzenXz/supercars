import type { CarMake } from '../../types';
import { safetyComfort } from '../_shared';

export const astonMartin: CarMake = {
  id: 'aston-martin',
  name: 'Aston Martin',
  country: 'United Kingdom',
  logoText: 'AM',
  models: [
    {
      id: 'vantage',
      name: 'Vantage',
      segment: 'Sports Car',
      description: 'The Aston Martin Vantage is the entry point to the brand and the most driver-focused model in the range. The third generation uses a twin-turbocharged AMG-sourced 4.0-litre V8 and is renowned for its aggressive styling and precise dynamics.',
      tags: ['sports', 'coupe', 'V8', 'AMG', 'turbo', 'british'],
      generations: [
        {
          id: 'vantage-am28',
          name: 'Vantage (AM28)',
          years: '2018–present',
          platform: 'Aston Martin VH platform aluminium',
          bodyStyles: ['Coupe'],
          summary: 'The AM28 Vantage uses a 4.0-litre twin-turbo V8 sourced from Mercedes-AMG, mated to an 8-speed ZF automatic gearbox. The 2024 update raised output to 665 hp with revised aerodynamics including a larger fixed rear wing for a more aggressive appearance.',
          heroImage: 'vantage-am28',
          variants: [
            {
              id: 'aston-martin-vantage-am28-v8',
              name: 'Vantage V8',
              years: '2018–2023',
              priceBand: '€90,000+ used',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'M177 DE 40 AL',
                displacementCc: 3982,
                cylinders: 'V8',
                powerHp: 510,
                powerKw: 375,
                torqueNm: 685,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 3.6,
                topSpeedKmh: 314,
                consumptionL100: 13.5,
                co2Gkm: 307
              },
              dimensions: {
                lengthMm: 4465,
                widthMm: 1942,
                heightMm: 1273,
                wheelbaseMm: 2704,
                bootLitres: 350,
                weightKg: 1530,
                tankLitres: 73
              },
              options: safetyComfort(['Aston Martin Dynamic Mode', 'carbon ceramic brakes', 'B&O sound system', 'sports exhaust', 'carbon fibre exterior pack']),
              knownFor: ['visceral twin-turbo V8 character', 'stunning British coupe design', 'precise and engaging handling', 'exclusive low-volume production'],
              watchOut: ['high running and maintenance costs', 'interior tech feels dated for the price', 'fuel consumption significant', 'limited dealer network globally']
            },
            {
              id: 'aston-martin-vantage-am28-v8-2024',
              name: 'Vantage 2024',
              years: '2024–present',
              priceBand: '€175,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo revised',
                engineCode: 'M177 DE 40 AL+',
                displacementCc: 3982,
                cylinders: 'V8',
                powerHp: 665,
                powerKw: 489,
                torqueNm: 800,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 3.4,
                topSpeedKmh: 325,
                consumptionL100: 14.3,
                co2Gkm: 325
              },
              dimensions: {
                lengthMm: 4465,
                widthMm: 1942,
                heightMm: 1273,
                wheelbaseMm: 2704,
                bootLitres: 350,
                weightKg: 1605,
                tankLitres: 73
              },
              options: safetyComfort(['Aston Martin Dynamic Mode', 'carbon ceramic brakes', 'B&O Premium sound', 'active exhaust', 'full carbon exterior pack']),
              knownFor: ['658 hp brutal supercar performance', 'large fixed rear wing aerodynamic upgrade', 'fastest Vantage ever', 'head-turning presence'],
              watchOut: ['very high price jump from previous generation', 'extreme fuel consumption', 'track-focused setup less forgiving on road', 'carbon ceramic brakes cold performance']
            }
          ]
        }
      ]
    },
    {
      id: 'db12',
      name: 'DB12',
      segment: 'Grand Tourer',
      description: 'The Aston Martin DB12 is the brand\'s flagship grand tourer, replacing the DB11 in 2023. Described as the "world\'s first Super Tourer," it uses an uprated 671 hp twin-turbo V8, new suspension, and a dramatically improved interior technology package.',
      tags: ['grand-tourer', 'GT', 'coupe', 'convertible', 'V8', 'luxury', 'british'],
      generations: [
        {
          id: 'db12-gen1',
          name: 'DB12',
          years: '2023–present',
          platform: 'Aston Martin VH platform aluminium',
          bodyStyles: ['Coupe', 'Convertible'],
          summary: 'The DB12 represented the most comprehensive update to the DB lineage, with a new 671 hp V8, comprehensively revised chassis, and a technology step-change including a new 10.25-inch central display. The Volante convertible followed in 2024.',
          heroImage: 'db12-gen1',
          variants: [
            {
              id: 'aston-martin-db12-gen1-coupe',
              name: 'DB12 Coupe',
              years: '2023–present',
              priceBand: '€215,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'M177 DE 40 AL GT',
                displacementCc: 3982,
                cylinders: 'V8',
                powerHp: 671,
                powerKw: 493,
                torqueNm: 800,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 3.5,
                topSpeedKmh: 325,
                consumptionL100: 14.0,
                co2Gkm: 319
              },
              dimensions: {
                lengthMm: 4747,
                widthMm: 1978,
                heightMm: 1279,
                wheelbaseMm: 2875,
                bootLitres: 300,
                weightKg: 1760,
                tankLitres: 78
              },
              options: safetyComfort(['active roll control', 'B&O Premium audio', 'carbon fibre exterior', 'sports exhaust', 'glass key fob', 'performance seats']),
              knownFor: ['definitive grand tourer in Aston Martin tradition', 'most powerful DB coupe of its era', 'step-change interior technology', 'balanced GT and sports car character'],
              watchOut: ['very high price of entry', 'interior comfort still behind Bentley/Ferrari GT', 'high fuel consumption', 'limited boot space for long touring']
            },
            {
              id: 'aston-martin-db12-gen1-volante',
              name: 'DB12 Volante',
              years: '2024–present',
              priceBand: '€240,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'M177 DE 40 AL GT',
                displacementCc: 3982,
                cylinders: 'V8',
                powerHp: 671,
                powerKw: 493,
                torqueNm: 800,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 3.6,
                topSpeedKmh: 320,
                consumptionL100: 14.5,
                co2Gkm: 330
              },
              dimensions: {
                lengthMm: 4747,
                widthMm: 1978,
                heightMm: 1298,
                wheelbaseMm: 2875,
                bootLitres: 200,
                weightKg: 1860,
                tankLitres: 78
              },
              options: safetyComfort(['active roll control', 'B&O Premium audio', 'carbon fibre exterior', 'sports exhaust', 'neck warmer', 'wind deflector']),
              knownFor: ['world\'s most elegant open-top GT', 'superfast fabric roof operation', 'stunning sound with roof down', 'premium open-air touring experience'],
              watchOut: ['heavy despite aluminium construction', 'fabric roof durability over time', 'limited rear storage with roof down', 'very high purchase price']
            }
          ]
        }
      ]
    },
    {
      id: 'dbx',
      name: 'DBX',
      segment: 'Luxury Performance SUV',
      description: 'The Aston Martin DBX is the brand\'s first SUV, opening up the market to a wider audience. Available in standard DBX and performance-focused DBX707 variants, it uses an AMG-sourced V8 and offers genuine luxury alongside dynamic driving ability.',
      tags: ['SUV', 'luxury', 'performance', 'V8', 'AMG', 'british'],
      generations: [
        {
          id: 'dbx-gen1',
          name: 'DBX (DBX)',
          years: '2020–present',
          platform: 'Aston Martin DBX bespoke SUV platform',
          bodyStyles: ['SUV'],
          summary: 'Built on a bespoke bonded aluminium platform, the DBX was Aston Martin\'s first SUV. A 550 hp V8 provides sports car performance while adaptive air suspension and active anti-roll bars ensure both ride comfort and dynamic handling. The DBX707 with 707 hp followed in 2022.',
          heroImage: 'dbx-gen1',
          variants: [
            {
              id: 'aston-martin-dbx-gen1-v8',
              name: 'DBX V8',
              years: '2020–present',
              priceBand: '€150,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'M177 DE 40 AL SUV',
                displacementCc: 3982,
                cylinders: 'V8',
                powerHp: 550,
                powerKw: 404,
                torqueNm: 700,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 4.5,
                topSpeedKmh: 291,
                consumptionL100: 14.0,
                co2Gkm: 319
              },
              dimensions: {
                lengthMm: 5039,
                widthMm: 2059,
                heightMm: 1680,
                wheelbaseMm: 3060,
                bootLitres: 632,
                weightKg: 2245,
                tankLitres: 90
              },
              options: safetyComfort(['active roll control', 'air suspension', 'B&O audio', 'carbon fibre exterior pack', 'on-board air compressor', 'tow bar']),
              knownFor: ['genuine Aston Martin design in an SUV', 'powerful and refined twin-turbo V8', 'sports car feel in an SUV', 'exclusive low-volume alternative to Cayenne/Urus'],
              watchOut: ['very high fuel consumption', 'infotainment uses older Mercedes system', 'heavy for sports SUV segment', 'rear seat space not the largest in class']
            }
          ]
        }
      ]
    }
  ]
};
