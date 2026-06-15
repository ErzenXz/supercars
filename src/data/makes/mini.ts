import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const mini: CarMake = {
  id: 'mini',
  name: 'MINI',
  country: 'United Kingdom',
  logoText: 'M',
  models: [
    {
      id: 'cooper',
      name: 'Cooper',
      segment: 'Premium Supermini',
      description: 'The MINI Cooper 3-door is the iconic heart of the MINI range, combining retro-inspired design with modern performance and technology. Available with petrol, diesel, and fully electric powertrains, it delivers a fun and characterful driving experience.',
      tags: ['hatchback', 'supermini', 'iconic', 'turbo', 'electric', 'premium'],
      generations: [
        {
          id: 'cooper-f56',
          name: 'Cooper (F56)',
          years: '2014–2024',
          platform: 'BMW UKL1 platform',
          bodyStyles: ['Hatchback'],
          summary: 'The third-generation 3-door Cooper moved to BMW\'s UKL1 front-wheel drive platform. Three-cylinder and four-cylinder turbocharged engines, alongside the Cooper SE electric from 2020, ensured the range covered all bases while retaining the fun MINI character.',
          heroImage: 'cooper-f56',
          variants: [
            {
              id: 'mini-cooper-f56-15t',
              name: 'Cooper 1.5T',
              years: '2014–2024',
              priceBand: '€10,000+ used',
              specs: {
                engine: '1.5 3-cyl TwinPower Turbo',
                engineCode: 'B38A15A',
                displacementCc: 1499,
                cylinders: 'I3',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 220,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 8.8,
                topSpeedKmh: 210,
                consumptionL100: 5.9,
                co2Gkm: 134
              },
              dimensions: {
                lengthMm: 3821,
                widthMm: 1727,
                heightMm: 1415,
                wheelbaseMm: 2495,
                bootLitres: 211,
                weightKg: 1165,
                tankLitres: 40
              },
              options: safetyComfort(['MINI Driving Modes', 'MINI Connected navigation', 'piano black interior trim', 'LED headlights']),
              knownFor: ['iconic go-kart handling feel', 'distinctive retro-modern design', 'turbocharged 3-cylinder efficiency', 'premium feel in supermini segment'],
              watchOut: ['tiny boot', 'rear passenger space very limited', 'options add cost quickly', 'head unit reliability on older units']
            },
            {
              id: 'mini-cooper-f56-20t',
              name: 'Cooper S 2.0T',
              years: '2014–2024',
              priceBand: '€13,000+ used',
              specs: {
                engine: '2.0 4-cyl TwinPower Turbo',
                engineCode: 'B48A20A',
                displacementCc: 1998,
                cylinders: 'I4',
                powerHp: 192,
                powerKw: 141,
                torqueNm: 280,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 7.0,
                topSpeedKmh: 233,
                consumptionL100: 6.5,
                co2Gkm: 149
              },
              dimensions: {
                lengthMm: 3821,
                widthMm: 1727,
                heightMm: 1415,
                wheelbaseMm: 2495,
                bootLitres: 211,
                weightKg: 1205,
                tankLitres: 44
              },
              options: safetyComfort(['sport suspension', 'Brembo brakes', 'JCW steering wheel', 'MINI Connected Pro navigation', 'heads-up display']),
              knownFor: ['punchy 4-cylinder performance', 'excellent front-wheel drive handling', 'sport seats and driving feel', 'upgradable to JCW specification'],
              watchOut: ['torque steer under hard acceleration', 'sport suspension harsh on poor roads', 'fuel consumption higher under spirited driving', 'limited interior space']
            },
            {
              id: 'mini-cooper-f56-se',
              name: 'Cooper SE Electric',
              years: '2020–2024',
              priceBand: '€22,000+ used',
              specs: {
                engine: 'permanent-magnet synchronous motor',
                powerHp: 184,
                powerKw: 135,
                torqueNm: 270,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 7.3,
                topSpeedKmh: 150,
                electricRangeKm: 234
              },
              dimensions: {
                lengthMm: 3821,
                widthMm: 1727,
                heightMm: 1415,
                wheelbaseMm: 2495,
                bootLitres: 211,
                weightKg: 1365
              },
              options: evComfort(['MINI Driving Modes', 'MINI Connected navigation', 'Wired package', 'heat pump']),
              knownFor: ['instant electric torque with MINI go-kart feel', 'city-perfect zero-emission runabout', 'lightest electric MINI', 'fun factor preserved in EV form'],
              watchOut: ['limited range vs newer EVs', 'no DC fast charging above 50 kW', 'range anxiety on longer trips', 'small boot compounded by battery']
            }
          ]
        }
      ]
    },
    {
      id: 'cooper-5-door',
      name: 'Cooper 5-door',
      segment: 'Premium Supermini',
      description: 'The MINI Cooper 5-door extends the classic 3-door formula with a pair of rear doors and a longer wheelbase, making it significantly more practical for families without sacrificing the MINI character.',
      tags: ['hatchback', 'supermini', 'five-door', 'family', 'practical', 'turbo'],
      generations: [
        {
          id: 'cooper-5-door-f55',
          name: 'Cooper 5-door (F55)',
          years: '2014–2024',
          platform: 'BMW UKL1 platform',
          bodyStyles: ['Hatchback'],
          summary: 'The F55 five-door introduced a longer wheelbase and two additional rear doors, adding 72 mm to overall length. Rear headroom and legroom improved significantly, making the MINI viable for families while retaining turbocharged petrol engine options.',
          heroImage: 'cooper-5-door-f55',
          variants: [
            {
              id: 'mini-cooper-5-door-f55-15t',
              name: 'Cooper 5-door 1.5T',
              years: '2014–2024',
              priceBand: '€11,000+ used',
              specs: {
                engine: '1.5 3-cyl TwinPower Turbo',
                engineCode: 'B38A15A',
                displacementCc: 1499,
                cylinders: 'I3',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 220,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 8.8,
                topSpeedKmh: 210,
                consumptionL100: 6.0,
                co2Gkm: 136
              },
              dimensions: {
                lengthMm: 3982,
                widthMm: 1727,
                heightMm: 1425,
                wheelbaseMm: 2567,
                bootLitres: 278,
                weightKg: 1205,
                tankLitres: 40
              },
              options: safetyComfort(['MINI Connected navigation', 'LED headlights', 'sport seats', 'MINI Driving Modes']),
              knownFor: ['genuine 5-seat practicality with MINI fun', 'enlarged boot vs 3-door', 'improved rear access and headroom', 'turbo efficiency in a family package'],
              watchOut: ['longer wheelbase slightly dulls handling precision', 'still compact vs mainstream rivals', 'options list can be expensive', 'small boot vs class average']
            }
          ]
        }
      ]
    },
    {
      id: 'clubman',
      name: 'Clubman',
      segment: 'Premium Compact Wagon',
      description: 'The MINI Clubman is the practical member of the MINI family, offering estate car proportions with split rear barn doors and a six-cylinder option via the John Cooper Works All4 variant. The F54 generation brought the largest ever Clubman.',
      tags: ['wagon', 'estate', 'practical', 'barn-doors', 'AWD', 'turbo'],
      generations: [
        {
          id: 'clubman-f54',
          name: 'Clubman (F54)',
          years: '2015–2024',
          platform: 'BMW UKL2 platform',
          bodyStyles: ['Wagon'],
          summary: 'The F54 Clubman grew significantly over its predecessor, offering four proper side doors and distinctive split barn-style rear doors. Available with petrol and diesel engines and the JCW All4 variant with 306 hp and all-wheel drive.',
          heroImage: 'clubman-f54',
          variants: [
            {
              id: 'mini-clubman-f54-cooper-s',
              name: 'Clubman Cooper S',
              years: '2015–2024',
              priceBand: '€15,000+ used',
              specs: {
                engine: '2.0 4-cyl TwinPower Turbo',
                engineCode: 'B48A20A',
                displacementCc: 1998,
                cylinders: 'I4',
                powerHp: 192,
                powerKw: 141,
                torqueNm: 280,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 7.2,
                topSpeedKmh: 233,
                consumptionL100: 6.8,
                co2Gkm: 155
              },
              dimensions: {
                lengthMm: 4253,
                widthMm: 1800,
                heightMm: 1471,
                wheelbaseMm: 2670,
                bootLitres: 360,
                weightKg: 1415,
                tankLitres: 47
              },
              options: safetyComfort(['sport seats', 'MINI Connected Pro', 'panoramic sunroof', 'heads-up display', 'parking sensors']),
              knownFor: ['practical wagon with MINI DNA', 'distinctive split barn rear doors', 'punchy Cooper S engine', 'quality interior materials'],
              watchOut: ['barn doors impractical in tight spaces', 'heavier than 3 or 5-door MINI', 'higher price than equivalent hatchback', 'front-only drive with more power can torque steer']
            }
          ]
        }
      ]
    },
    {
      id: 'countryman',
      name: 'Countryman',
      segment: 'Compact Premium SUV',
      description: 'The MINI Countryman is the brand\'s compact SUV and most spacious model. Available with petrol, diesel, and fully electric powertrains, the third generation debuted on a BMW platform with significantly more interior space.',
      tags: ['compact-SUV', 'premium', 'electric', 'MINI', 'family', 'AWD'],
      generations: [
        {
          id: 'countryman-u25',
          name: 'Countryman III (U25)',
          years: '2024–present',
          platform: 'BMW FAAR platform',
          bodyStyles: ['SUV'],
          summary: 'The third-generation Countryman moved to BMW\'s FAAR platform, growing in all dimensions to improve rear space. A fully electric Countryman E joined the range alongside petrol variants, sharing a platform with the BMW X1 and iX1.',
          heroImage: 'countryman-u25',
          variants: [
            {
              id: 'mini-countryman-u25-s',
              name: 'Countryman S',
              years: '2024–present',
              priceBand: '€38,000+ new',
              specs: {
                engine: '2.0 4-cyl TwinPower Turbo',
                engineCode: 'B48A20O4',
                displacementCc: 1998,
                cylinders: 'I4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 300,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 7.5,
                topSpeedKmh: 230,
                consumptionL100: 7.0,
                co2Gkm: 160
              },
              dimensions: {
                lengthMm: 4432,
                widthMm: 1843,
                heightMm: 1656,
                wheelbaseMm: 2690,
                bootLitres: 450,
                weightKg: 1650,
                tankLitres: 49
              },
              options: safetyComfort(['MINI Driving Modes', 'MINI Navigation Plus', 'panoramic roof', 'heated seats', 'parking assistant']),
              knownFor: ['largest Countryman ever with real rear space', 'sharp MINI design in SUV form', 'turbocharged performance', 'practical family SUV with premium feel'],
              watchOut: ['growing size dilutes MINI nimbleness', 'higher price than mainstream rivals', 'some MINI character lost in larger body', 'options inflate price significantly']
            },
            {
              id: 'mini-countryman-u25-e',
              name: 'Countryman E Electric',
              years: '2024–present',
              priceBand: '€46,000+ new',
              specs: {
                engine: 'permanent-magnet synchronous motor',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 250,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.6,
                topSpeedKmh: 170,
                electricRangeKm: 462
              },
              dimensions: {
                lengthMm: 4432,
                widthMm: 1843,
                heightMm: 1656,
                wheelbaseMm: 2690,
                bootLitres: 450,
                weightKg: 1935
              },
              options: evComfort(['MINI Driving Modes', 'heat pump', 'DC fast charging 130 kW', 'MINI Navigation Plus', 'panoramic roof']),
              knownFor: ['longest range of any MINI', '130 kW DC fast charging', 'spacious family electric SUV', 'zero-emission MINI SUV character'],
              watchOut: ['heavier than petrol equivalent', 'range drops in cold weather', 'higher purchase price', 'FWD only limits all-weather traction']
            }
          ]
        }
      ]
    },
    {
      id: 'aceman',
      name: 'Aceman',
      segment: 'Electric Premium Crossover',
      description: 'The MINI Aceman is a new fully electric crossover that slots between the Cooper and Countryman. Built exclusively as an EV, it offers a blend of hatchback practicality and crossover versatility in an all-new design.',
      tags: ['electric', 'crossover', 'new', 'EV-only', 'premium', 'family'],
      generations: [
        {
          id: 'aceman-j05',
          name: 'Aceman (J05)',
          years: '2024–present',
          platform: 'BMW FAAR EV platform',
          bodyStyles: ['SUV'],
          summary: 'The all-new Aceman was born purely electric, offering a Circular Hub display concept with a round OLED screen and a spacious interior compared to the Cooper hatchback. Two power levels are available with up to 422 km of WLTP range.',
          heroImage: 'aceman-j05',
          variants: [
            {
              id: 'mini-aceman-j05-e',
              name: 'Aceman E',
              years: '2024–present',
              priceBand: '€35,000+ new',
              specs: {
                engine: 'permanent-magnet synchronous motor',
                powerHp: 184,
                powerKw: 135,
                torqueNm: 290,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 7.9,
                topSpeedKmh: 160,
                electricRangeKm: 310
              },
              dimensions: {
                lengthMm: 4074,
                widthMm: 1758,
                heightMm: 1502,
                wheelbaseMm: 2605,
                bootLitres: 300,
                weightKg: 1755
              },
              options: evComfort(['MINI Driving Modes', 'round OLED Circular Hub', 'panoramic glass roof', 'heat pump', 'DC fast charging']),
              knownFor: ['new EV-only MINI crossover segment', 'innovative circular OLED display', 'practical 5-door layout', 'brand-new design language'],
              watchOut: ['smaller range than Countryman E', 'all-new model with unproven reliability', 'tight boot for the size', 'higher price than equivalent petrol MINI']
            }
          ]
        }
      ]
    },
    {
      id: 'convertible',
      name: 'Convertible',
      segment: 'Premium Supermini Convertible',
      description: 'The MINI Convertible is the open-top version of the Cooper hatchback, offering the classic MINI driving experience with a folding fabric roof. It is the only open-top car in its segment with optional all-weather capability.',
      tags: ['convertible', 'open-top', 'premium', 'supermini', 'fun', 'turbo'],
      generations: [
        {
          id: 'convertible-f57',
          name: 'Convertible (F57)',
          years: '2016–present',
          platform: 'BMW UKL1 platform',
          bodyStyles: ['Convertible'],
          summary: 'The third-generation Convertible introduced a new Z-fold fabric roof mechanism that can open at speeds up to 30 km/h. Based on the F56 platform, it offers a 2+2 seating layout and a fold-down windscreen surround for a full open-air experience.',
          heroImage: 'convertible-f57',
          variants: [
            {
              id: 'mini-convertible-f57-cooper-s',
              name: 'Convertible Cooper S',
              years: '2016–present',
              priceBand: '€18,000+ used',
              specs: {
                engine: '2.0 4-cyl TwinPower Turbo',
                engineCode: 'B48A20A',
                displacementCc: 1998,
                cylinders: 'I4',
                powerHp: 192,
                powerKw: 141,
                torqueNm: 280,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 7.2,
                topSpeedKmh: 233,
                consumptionL100: 7.0,
                co2Gkm: 160
              },
              dimensions: {
                lengthMm: 3821,
                widthMm: 1727,
                heightMm: 1415,
                wheelbaseMm: 2495,
                bootLitres: 160,
                weightKg: 1295,
                tankLitres: 44
              },
              options: safetyComfort(['electric fabric roof', 'MINI Connected navigation', 'all-season tyres', 'heated seats', 'wind deflector']),
              knownFor: ['fun open-top supermini experience', 'Z-fold roof opens at speed', 'Cooper S performance in convertible form', 'premium convertible in supermini class'],
              watchOut: ['very small boot with roof down', 'only 2+2 seating', 'wind noise at motorway speeds with roof up', 'fabric roof less secure than hard-top rivals']
            }
          ]
        }
      ]
    }
  ]
};
