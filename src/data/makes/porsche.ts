import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const porsche: CarMake = {
  id: 'porsche',
  name: 'Porsche',
  country: 'Germany',
  logoText: 'P',
  models: [
    {
      id: '911',
      name: '911',
      segment: 'Sports / Supercar',
      description: 'The Porsche 911 is the definitive sports car, in continuous production since 1963. The 992 generation refines the rear-engined flat-six formula to near perfection, offering a spectrum of variants from the tractable Carrera to the ferocious Turbo S.',
      tags: ['sports', 'iconic', 'rear-engine', 'flat-six', 'PDK', 'performance'],
      generations: [
        {
          id: '911-992',
          name: '911 992',
          years: '2019–present',
          platform: 'Porsche 911 992 platform',
          bodyStyles: ['Coupe', 'Convertible'],
          summary: 'The 992 generation brought wider body tracks, a new interior with analogue tachometer and 10.9-inch touchscreen, improved aerodynamics with a wider rear wing, and wet-mode traction control. All Carrera variants now use a PDK dual-clutch gearbox as standard.',
          heroImage: '911-992',
          variants: [
            {
              id: 'porsche-911-992-carrera-s',
              name: '911 Carrera S',
              years: '2019–present',
              priceBand: '€120,000–€175,000 new',
              specs: {
                engine: '3.0 flat-six twin-turbo',
                engineCode: 'MA176',
                displacementCc: 2981,
                cylinders: 'Flat-6',
                powerHp: 450,
                powerKw: 331,
                torqueNm: 530,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 4.0,
                topSpeedKmh: 308,
                consumptionL100: 10.4,
                co2Gkm: 236
              },
              dimensions: {
                lengthMm: 4519,
                widthMm: 1852,
                heightMm: 1300,
                wheelbaseMm: 2450,
                bootLitres: 132,
                weightKg: 1480,
                tankLitres: 64
              },
              options: safetyComfort(['PASM adaptive suspension', 'Sport Chrono package', 'PDLS+ matrix headlights', 'Burmester audio', 'rear-wheel steering']),
              knownFor: ['peerless driver engagement', 'daily usability as a sports car', 'flat-six engine sound', 'extraordinary resale value'],
              watchOut: ['options list inflates price dramatically', 'fuel consumption significant under spirited driving', 'tight rear seats for adults', 'theft target in some markets']
            },
            {
              id: 'porsche-911-992-turbo-s',
              name: '911 Turbo S',
              years: '2020–present',
              priceBand: '€230,000–€300,000 new',
              specs: {
                engine: '3.8 flat-six twin-turbo',
                engineCode: 'MA177',
                displacementCc: 3745,
                cylinders: 'Flat-6',
                powerHp: 650,
                powerKw: 478,
                torqueNm: 800,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 2.7,
                topSpeedKmh: 330,
                consumptionL100: 11.6,
                co2Gkm: 263
              },
              dimensions: {
                lengthMm: 4535,
                widthMm: 1900,
                heightMm: 1303,
                wheelbaseMm: 2457,
                bootLitres: 132,
                weightKg: 1640,
                tankLitres: 67
              },
              options: safetyComfort(['PASM Sport adaptive suspension', 'Sport Chrono package', 'ceramic composite brakes', 'Burmester 3D surround audio', 'rear-axle steering']),
              knownFor: ['supercar performance with touring car usability', 'AWD launch traction', 'understated exterior for the performance', 'engineering benchmark at price point'],
              watchOut: ['very high purchase price', 'insuring at this performance level costly', 'tyres specialist and expensive', 'some find it too capable / too easy']
            }
          ]
        }
      ]
    },
    {
      id: 'cayenne',
      name: 'Cayenne',
      segment: 'Large Premium SUV',
      description: 'The Cayenne proved that Porsche could build a proper sports car and a proper SUV at the same time. Now in its third generation, it combines SUV practicality and towing capability with sports car dynamics, available with a plug-in hybrid powertrain.',
      tags: ['SUV', 'premium', 'luxury', 'performance-SUV', 'plug-in-hybrid', 'towing'],
      generations: [
        {
          id: 'cayenne-iii',
          name: 'Cayenne III (E3)',
          years: '2017–present',
          platform: 'Volkswagen Group MLB Evo',
          bodyStyles: ['SUV'],
          summary: 'The third-generation Cayenne switched to the MLB Evo platform shared with the Audi Q8 and Bentley Bentayga, bringing a more digital interior, improved dynamics, and a comprehensive plug-in hybrid powertrain option.',
          heroImage: 'cayenne-iii',
          variants: [
            {
              id: 'porsche-cayenne-iii-s',
              name: 'Cayenne S',
              years: '2017–present',
              priceBand: '€85,000–€130,000 new',
              specs: {
                engine: '2.9 V6 biturbo',
                engineCode: 'DCB',
                displacementCc: 2894,
                cylinders: 'V6',
                powerHp: 440,
                powerKw: 324,
                torqueNm: 550,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.1,
                topSpeedKmh: 263,
                consumptionL100: 11.3,
                co2Gkm: 257
              },
              dimensions: {
                lengthMm: 4926,
                widthMm: 1983,
                heightMm: 1696,
                wheelbaseMm: 2895,
                bootLitres: 770,
                weightKg: 2030,
                tankLitres: 90
              },
              options: safetyComfort(['PASM air suspension', 'Sport Chrono package', 'Bose/Burmester audio', 'rear-axle steering', 'panoramic roof']),
              knownFor: ['remarkable handling for a large SUV', 'powerful V6 biturbo engine', 'premium interior quality', 'strong towing and off-road capability'],
              watchOut: ['heavy options list adds cost quickly', 'real-world fuel consumption higher than claimed', 'large size can challenge city parking', 'depreciation steep new']
            }
          ]
        }
      ]
    },
    {
      id: 'macan',
      name: 'Macan',
      segment: 'Compact Premium SUV',
      description: 'The Macan is Porsche\'s compact SUV and the brand\'s best-selling model by volume. Built on the Audi Q5 platform, it offers sports-car driving dynamics in a practical compact SUV body, with a range of turbocharged four and six-cylinder petrol engines.',
      tags: ['compact-SUV', 'sporty', 'premium', 'performance', 'four-cylinder'],
      generations: [
        {
          id: 'macan-i',
          name: 'Macan I (95B)',
          years: '2014–2023',
          platform: 'Volkswagen Group MLBa',
          bodyStyles: ['SUV'],
          summary: 'The original Macan used the Audi Q5\'s MLB platform but was tuned to deliver genuine sports car dynamics. Its turbocharged four and six-cylinder petrol engines, combined with PDK gearbox and air suspension options, made it the handling benchmark in its class.',
          heroImage: 'macan-i',
          variants: [
            {
              id: 'porsche-macan-i-s',
              name: 'Macan S',
              years: '2014–2023',
              priceBand: '€28,000–€65,000 used',
              specs: {
                engine: '3.0 V6 biturbo',
                engineCode: 'DN',
                displacementCc: 2995,
                cylinders: 'V6',
                powerHp: 354,
                powerKw: 260,
                torqueNm: 480,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 5.1,
                topSpeedKmh: 254,
                consumptionL100: 9.8,
                co2Gkm: 223
              },
              dimensions: {
                lengthMm: 4681,
                widthMm: 1923,
                heightMm: 1624,
                wheelbaseMm: 2807,
                bootLitres: 500,
                weightKg: 1870,
                tankLitres: 75
              },
              options: safetyComfort(['PASM air suspension', 'Sport Chrono package', 'Bose audio', 'panoramic roof', 'PDLS headlights']),
              knownFor: ['best handling compact SUV of its era', 'rewarding V6 soundtrack', 'strong resale values', 'blend of practicality and performance'],
              watchOut: ['high running costs vs rivals', 'small boot for the class', 'interior quality below 911 / Cayenne', 'fuel consumption on V6']
            }
          ]
        }
      ]
    },
    {
      id: 'taycan',
      name: 'Taycan',
      segment: 'Electric Sports Sedan / SUV',
      description: 'The Taycan is Porsche\'s first fully electric vehicle and makes no compromises on driver engagement. Its 800V architecture enables ultra-fast charging, while the two-speed rear gearbox and sophisticated chassis deliver genuine sports car dynamics.',
      tags: ['electric', 'sports', 'sedan', 'luxury', '800V', 'fast-charging'],
      generations: [
        {
          id: 'taycan-gen1',
          name: 'Taycan (J1 platform)',
          years: '2019–present',
          platform: 'Porsche J1 (800V)',
          bodyStyles: ['Sedan'],
          summary: 'Built on the purpose-designed 800-volt J1 electric platform, the Taycan offers 270 kW DC fast charging, a two-speed transmission on the rear axle, and available all-wheel drive. The Cross Turismo wagon and Sport Turismo variants followed in 2021.',
          heroImage: 'taycan-gen1',
          variants: [
            {
              id: 'porsche-taycan-4s',
              name: 'Taycan 4S',
              years: '2020–present',
              priceBand: '€100,000–€140,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 571,
                powerKw: 420,
                torqueNm: 650,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.0,
                topSpeedKmh: 250,
                electricRangeKm: 464
              },
              dimensions: {
                lengthMm: 4963,
                widthMm: 1966,
                heightMm: 1381,
                wheelbaseMm: 2900,
                bootLitres: 366,
                weightKg: 2295
              },
              options: evComfort(['PDCC active roll stabilisation', 'Sport Chrono package', 'Burmester 3D audio', 'rear-axle steering', 'Performance Battery Plus']),
              knownFor: ['800V ultra-fast charging capability', 'genuine sports car dynamics', 'exceptional build quality', 'two-speed rear gearbox unique in class'],
              watchOut: ['real-world range shorter than EPA claimed', 'very heavy despite EV packaging', 'limited boot space for the size', 'charging infrastructure for 800V limited']
            }
          ]
        }
      ]
    },
    {
      id: 'panamera',
      name: 'Panamera',
      segment: 'Executive Gran Turismo',
      description: 'The Panamera is Porsche\'s four-door sports saloon and executive Gran Turismo, combining the driving experience of a 911 with the practicality of a luxury sedan. Available with petrol, turbo petrol, and plug-in hybrid powertrains.',
      tags: ['executive', 'gran-turismo', 'luxury', 'plug-in-hybrid', 'four-door', 'performance'],
      generations: [
        {
          id: 'panamera-ii',
          name: 'Panamera II (971)',
          years: '2016–present',
          platform: 'Volkswagen Group MSB',
          bodyStyles: ['Sedan'],
          summary: 'The second-generation Panamera on the MSB platform brought a dramatically more stylish body, a new interior with capacitive touch controls, and a wide range of powertrains including the 4 E-Hybrid with 50 km of electric range.',
          heroImage: 'panamera-ii',
          variants: [
            {
              id: 'porsche-panamera-4-e-hybrid',
              name: 'Panamera 4 E-Hybrid',
              years: '2017–present',
              priceBand: '€100,000–€155,000 new',
              specs: {
                engine: '2.9 V6 biturbo + e-motor',
                engineCode: 'DCB hybrid',
                displacementCc: 2894,
                cylinders: 'V6',
                powerHp: 462,
                powerKw: 340,
                torqueNm: 700,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 4.6,
                topSpeedKmh: 278,
                electricRangeKm: 50,
                consumptionL100: 2.5,
                co2Gkm: 56
              },
              dimensions: {
                lengthMm: 5049,
                widthMm: 1937,
                heightMm: 1423,
                wheelbaseMm: 2950,
                bootLitres: 495,
                weightKg: 2225,
                tankLitres: 80
              },
              options: safetyComfort(['PDCC air suspension', 'Sport Chrono package', 'Burmester audio', 'rear-axle steering', 'night vision assist', 'massaging seats']),
              knownFor: ['grand touring comfort and sports car pace', 'low CO2 for company car tax benefits', 'outstanding long-distance capability', 'practical 4-door Porsche'],
              watchOut: ['real-world EV range shorter in winter', 'very heavy at 2.2 tonnes', 'complex infotainment with many capacitive buttons', 'high cost of options']
            }
          ]
        }
      ]
    }
  ]
};
