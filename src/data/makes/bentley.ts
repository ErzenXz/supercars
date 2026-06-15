import type { CarMake } from '../../types';
import { safetyComfort } from '../_shared';

export const bentley: CarMake = {
  id: 'bentley',
  name: 'Bentley',
  country: 'United Kingdom',
  logoText: 'B',
  models: [
    {
      id: 'continental-gt',
      name: 'Continental GT',
      segment: 'Luxury Grand Tourer',
      description: 'The Bentley Continental GT is the definitive grand tourer, combining extraordinary luxury with genuine performance from a 6.0-litre twin-turbo W12 or 4.0-litre twin-turbo V8. Available as a coupe and GTC convertible, it sets the benchmark in the luxury GT segment.',
      tags: ['grand-tourer', 'GT', 'W12', 'V8', 'luxury', 'coupe', 'convertible'],
      generations: [
        {
          id: 'continental-gt-iii',
          name: 'Continental GT III',
          years: '2018–present',
          platform: 'Volkswagen Group MSB platform',
          bodyStyles: ['Coupe', 'Convertible'],
          summary: 'The third-generation Continental GT adopted the VW MSB platform, bringing a revolution in interior quality with a three-section rotating fascia, jewel-like detailing, and a 12.3-inch infotainment display. The W12 Speed and V8 variants cater to different performance priorities.',
          heroImage: 'continental-gt-iii',
          variants: [
            {
              id: 'bentley-continental-gt-iii-w12',
              name: 'Continental GT W12',
              years: '2018–present',
              priceBand: '€185,000+ new',
              specs: {
                engine: '6.0 W12 twin-turbo',
                engineCode: 'CGEA',
                displacementCc: 5950,
                cylinders: 'W12',
                powerHp: 635,
                powerKw: 467,
                torqueNm: 900,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.6,
                topSpeedKmh: 333,
                consumptionL100: 14.7,
                co2Gkm: 334
              },
              dimensions: {
                lengthMm: 4850,
                widthMm: 2189,
                heightMm: 1405,
                wheelbaseMm: 2851,
                bootLitres: 358,
                weightKg: 2244,
                tankLitres: 90
              },
              options: safetyComfort(['Bentley Dynamic Ride', 'rotating dashboard fascia', 'Naim for Bentley audio', 'carbon exterior package', 'night vision', 'head-up display', 'massage seats']),
              knownFor: ['unique W12 engine character', 'extraordinary interior craftsmanship', 'rotating fascia design feature', 'effortless grand touring pace'],
              watchOut: ['very high fuel consumption', 'heavy at over 2.2 tonnes', 'high running and maintenance costs', 'limited rear seat space for the size']
            },
            {
              id: 'bentley-continental-gt-iii-gtc',
              name: 'Continental GTC V8',
              years: '2019–present',
              priceBand: '€210,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'CVCA',
                displacementCc: 3996,
                cylinders: 'V8',
                powerHp: 550,
                powerKw: 404,
                torqueNm: 770,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 4.0,
                topSpeedKmh: 318,
                consumptionL100: 12.2,
                co2Gkm: 277
              },
              dimensions: {
                lengthMm: 4850,
                widthMm: 2189,
                heightMm: 1405,
                wheelbaseMm: 2851,
                bootLitres: 235,
                weightKg: 2404,
                tankLitres: 90
              },
              options: safetyComfort(['Bentley Dynamic Ride', 'heated neck warmer', 'Naim for Bentley audio', 'carbon exterior pack', 'massaging front seats', 'three-layer fabric roof']),
              knownFor: ['open-top luxury GT at its absolute zenith', 'three-layer acoustic hood', 'V8 efficiency vs W12', 'neck warmer for year-round open-top driving'],
              watchOut: ['boot severely reduced with fabric roof', 'very heavy even for convertible GT', 'high maintenance costs', 'fabric roof longevity over time']
            }
          ]
        }
      ]
    },
    {
      id: 'flying-spur',
      name: 'Flying Spur',
      segment: 'Luxury Sedan',
      description: 'The Bentley Flying Spur is the brand\'s performance luxury sedan, combining the presence of a Rolls-Royce with the driving dynamism of a sports car. The third generation moved to the MSB platform and is available with W12 and V8 powertrains.',
      tags: ['sedan', 'luxury', 'W12', 'V8', 'executive', 'chauffeur', 'performance'],
      generations: [
        {
          id: 'flying-spur-iii',
          name: 'Flying Spur III',
          years: '2019–present',
          platform: 'Volkswagen Group MSB platform',
          bodyStyles: ['Sedan'],
          summary: 'The third Flying Spur on the MSB platform gains all-wheel steering for the first time, alongside an all-wheel drive system. The interior features Bentley\'s finest craftsmanship with available three-zone climate, Naim audio, and the signature rotating dashboard.',
          heroImage: 'flying-spur-iii',
          variants: [
            {
              id: 'bentley-flying-spur-iii-w12',
              name: 'Flying Spur W12',
              years: '2019–present',
              priceBand: '€215,000+ new',
              specs: {
                engine: '6.0 W12 twin-turbo',
                engineCode: 'CGEA',
                displacementCc: 5950,
                cylinders: 'W12',
                powerHp: 635,
                powerKw: 467,
                torqueNm: 900,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.8,
                topSpeedKmh: 333,
                consumptionL100: 15.0,
                co2Gkm: 340
              },
              dimensions: {
                lengthMm: 5316,
                widthMm: 1978,
                heightMm: 1484,
                wheelbaseMm: 3195,
                bootLitres: 420,
                weightKg: 2437,
                tankLitres: 90
              },
              options: safetyComfort(['all-wheel steering', 'massage seats', 'Naim for Bentley 1500W audio', 'rear entertainment', 'rotating dashboard', 'MBUX infotainment', 'night vision']),
              knownFor: ['unique W12 character in a luxury saloon', 'supercar pace with chauffeur refinement', 'handcrafted interior quality', 'all-wheel steering improves agility'],
              watchOut: ['very high fuel consumption', 'software from VW group can feel out of place', 'extremely expensive options list', 'long wheelbase limits urban agility']
            }
          ]
        }
      ]
    },
    {
      id: 'bentayga',
      name: 'Bentayga',
      segment: 'Luxury SUV',
      description: 'The Bentley Bentayga is the world\'s first ultra-luxury performance SUV. Available with V8 and plug-in hybrid powertrains in its second generation, it combines extraordinary handcrafted interior quality with genuine off-road capability.',
      tags: ['luxury-SUV', 'PHEV', 'W12', 'V8', 'flagship', 'premium', 'off-road'],
      generations: [
        {
          id: 'bentayga-ii',
          name: 'Bentayga II',
          years: '2021–present',
          platform: 'Volkswagen Group MLB Evo aluminium',
          bodyStyles: ['SUV'],
          summary: 'The facelifted second-generation Bentayga brought a sweeping new rear design, larger rear overhang for improved passenger space, and a new 10.9-inch infotainment display. The Hybrid became a core model, while the EWB long-wheelbase added rear-seat luxury features.',
          heroImage: 'bentayga-ii',
          variants: [
            {
              id: 'bentley-bentayga-ii-v8',
              name: 'Bentayga V8',
              years: '2021–present',
              priceBand: '€180,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'CVCA',
                displacementCc: 3996,
                cylinders: 'V8',
                powerHp: 550,
                powerKw: 404,
                torqueNm: 770,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 4.5,
                topSpeedKmh: 290,
                consumptionL100: 13.7,
                co2Gkm: 313
              },
              dimensions: {
                lengthMm: 5140,
                widthMm: 2228,
                heightMm: 1742,
                wheelbaseMm: 2995,
                bootLitres: 484,
                weightKg: 2503,
                tankLitres: 85
              },
              options: safetyComfort(['air suspension', 'Naim for Bentley audio', 'night vision', 'massage seats', 'four-zone climate', 'rear entertainment system', 'off-road specification']),
              knownFor: ['ultimate luxury SUV experience', 'handcrafted Bentley interior quality', 'powerful and smooth twin-turbo V8', 'class-leading rear seat comfort'],
              watchOut: ['very high fuel consumption', 'extremely heavy at 2.5 tonnes', 'very high maintenance costs', 'size challenging in tight urban environments']
            },
            {
              id: 'bentley-bentayga-ii-hybrid',
              name: 'Bentayga Hybrid',
              years: '2021–present',
              priceBand: '€195,000+ new',
              specs: {
                engine: '3.0 V6 turbo + e-motor',
                engineCode: 'DGEA hybrid',
                displacementCc: 2995,
                cylinders: 'V6',
                powerHp: 462,
                powerKw: 340,
                torqueNm: 700,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.2,
                topSpeedKmh: 254,
                electricRangeKm: 46,
                consumptionL100: 3.2,
                co2Gkm: 73
              },
              dimensions: {
                lengthMm: 5140,
                widthMm: 2228,
                heightMm: 1742,
                wheelbaseMm: 2995,
                bootLitres: 370,
                weightKg: 2680,
                tankLitres: 75
              },
              options: safetyComfort(['air suspension', 'Naim for Bentley audio', 'night vision', 'massage seats', 'four-zone climate', 'rear entertainment system', 'EV charging cable storage']),
              knownFor: ['low CO2 for ultra-luxury SUV tax classification', 'silent EV running in urban environments', 'full luxury Bentley experience with PHEV efficiency', 'strong V6 hybrid system performance'],
              watchOut: ['battery reduces boot significantly', 'heaviest Bentayga variant', 'EV range short vs dedicated EVs', 'PHEV adds cost over V8']
            }
          ]
        }
      ]
    }
  ]
};
