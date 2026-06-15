import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const mercedesBenz: CarMake = {
  id: 'mercedes-benz',
  name: 'Mercedes-Benz',
  country: 'Germany',
  logoText: '★',
  models: [
    {
      id: 'a-class',
      name: 'A-Class',
      segment: 'Premium Compact Hatchback',
      description: 'Mercedes-Benz entry-level premium compact hatchback, offering refined driving dynamics, a high-tech MBUX infotainment system, and a range of efficient petrol, diesel, and PHEV powertrains.',
      tags: ['compact', 'premium', 'hatchback', 'MBUX', 'AMG'],
      generations: [
        {
          id: 'a-class-w177',
          name: 'W177 (Fourth Generation)',
          years: '2018–present',
          platform: 'MFA2',
          bodyStyles: ['Hatchback', 'Sedan'],
          summary: 'The W177 brought a revolutionary MBUX voice-activated infotainment system and elevated interior quality to segment-leading levels. Available as five-door hatchback and four-door Sedan (V177), with AMG variants pushing performance credentials.',
          heroImage: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200',
          variants: [
            {
              id: 'mercedes-benz-a-class-w177-a180',
              name: 'A 180',
              years: '2018–present',
              priceBand: '€18,000–€28,000 used',
              specs: {
                engine: '1.3L Turbo Petrol',
                engineCode: 'M282',
                displacementCc: 1332,
                cylinders: '4',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.2,
                topSpeedKmh: 210,
                consumptionL100: 5.9,
                co2Gkm: 134
              },
              dimensions: {
                lengthMm: 4419,
                widthMm: 1796,
                heightMm: 1440,
                wheelbaseMm: 2729,
                bootLitres: 370,
                weightKg: 1375,
                tankLitres: 43
              },
              options: safetyComfort(['parking sensors', 'reversing camera']),
              knownFor: ['MBUX infotainment', 'premium interior quality', 'smooth 7DCT gearbox', 'practical boot'],
              watchOut: ['expensive optional extras', 'rear-seat space limited', 'dual-clutch can be jerky at low speed']
            },
            {
              id: 'mercedes-benz-a-class-w177-a200d',
              name: 'A 200 d',
              years: '2018–present',
              priceBand: '€20,000–€31,000 used',
              specs: {
                engine: '2.0L Diesel',
                engineCode: 'OM654q',
                displacementCc: 1950,
                cylinders: '4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 320,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 8.3,
                topSpeedKmh: 225,
                consumptionL100: 4.2,
                co2Gkm: 110
              },
              dimensions: {
                lengthMm: 4419,
                widthMm: 1796,
                heightMm: 1440,
                wheelbaseMm: 2729,
                bootLitres: 370,
                weightKg: 1430,
                tankLitres: 43
              },
              options: safetyComfort(['parking sensors', 'reversing camera']),
              knownFor: ['excellent fuel economy', 'strong low-end torque', '8-speed auto', 'long range between fill-ups'],
              watchOut: ['diesel particulate filter issues in city use', 'higher servicing costs', 'light driving feel']
            },
            {
              id: 'mercedes-benz-a-class-w177-a250e',
              name: 'A 250 e',
              years: '2020–present',
              priceBand: '€26,000–€38,000 used',
              specs: {
                engine: '1.3L Turbo Petrol + Electric Motor',
                engineCode: 'M282 + EM',
                displacementCc: 1332,
                cylinders: '4',
                powerHp: 218,
                powerKw: 160,
                torqueNm: 450,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 6.6,
                topSpeedKmh: 235,
                consumptionL100: 1.4,
                electricRangeKm: 70,
                co2Gkm: 26
              },
              dimensions: {
                lengthMm: 4419,
                widthMm: 1796,
                heightMm: 1440,
                wheelbaseMm: 2729,
                bootLitres: 310,
                weightKg: 1670,
                tankLitres: 43
              },
              options: safetyComfort(['e-control app', 'wireless charging', 'parking pilot']),
              knownFor: ['low official emissions', 'EV-capable daily commute', 'brisk performance', 'company car tax benefits'],
              watchOut: ['reduced boot space vs standard', 'real-world EV range shorter than claimed', 'heavier than petrol']
            },
            {
              id: 'mercedes-benz-a-class-w177-a35amg',
              name: 'A 35 AMG',
              years: '2018–present',
              priceBand: '€35,000–€52,000 used',
              specs: {
                engine: '2.0L Turbo Petrol AMG',
                engineCode: 'M260',
                displacementCc: 1991,
                cylinders: '4',
                powerHp: 306,
                powerKw: 225,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 4.7,
                topSpeedKmh: 250,
                consumptionL100: 8.4,
                co2Gkm: 192
              },
              dimensions: {
                lengthMm: 4419,
                widthMm: 1796,
                heightMm: 1440,
                wheelbaseMm: 2729,
                bootLitres: 370,
                weightKg: 1565,
                tankLitres: 43
              },
              options: safetyComfort(['AMG performance exhaust', 'Michelin Pilot Sport tyres', 'AMG track pace']),
              knownFor: ['AMG-tuned handling', '4MATIC AWD grip', 'aggressive styling', 'driver-focused interior'],
              watchOut: ['firm ride on standard suspension', 'heavy fuel consumption in sport mode', 'not full AMG 45']
            }
          ]
        }
      ]
    },
    {
      id: 'b-class',
      name: 'B-Class',
      segment: 'Premium Compact MPV',
      description: 'The B-Class is Mercedes-Benz\'s practical compact MPV, offering a taller, more versatile body based on the A-Class platform with extra headroom and interior flexibility.',
      tags: ['compact', 'MPV', 'practical', 'family', 'premium'],
      generations: [
        {
          id: 'b-class-w247',
          name: 'W247 (Third Generation)',
          years: '2018–present',
          platform: 'MFA2',
          bodyStyles: ['Hatchback', 'MPV'],
          summary: 'The W247 shares its MFA2 platform with the W177 A-Class, gaining MBUX infotainment and updated powertrains. Praised for its practical interior, comfortable ride, and excellent visibility.',
          heroImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200',
          variants: [
            {
              id: 'mercedes-benz-b-class-w247-b180',
              name: 'B 180',
              years: '2018–present',
              priceBand: '€19,000–€29,000 used',
              specs: {
                engine: '1.3L Turbo Petrol',
                engineCode: 'M282',
                displacementCc: 1332,
                cylinders: '4',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.5,
                topSpeedKmh: 208,
                consumptionL100: 6.1,
                co2Gkm: 138
              },
              dimensions: {
                lengthMm: 4442,
                widthMm: 1796,
                heightMm: 1557,
                wheelbaseMm: 2729,
                bootLitres: 488,
                weightKg: 1430,
                tankLitres: 43
              },
              options: safetyComfort(['parking sensors', 'Easy-Pack tailgate']),
              knownFor: ['spacious interior', 'excellent headroom', 'flexible rear seating', 'MBUX voice control'],
              watchOut: ['heavier than A-Class', 'thirstier than diesel', 'not as sporty to drive']
            },
            {
              id: 'mercedes-benz-b-class-w247-b200d',
              name: 'B 200 d',
              years: '2018–present',
              priceBand: '€22,000–€33,000 used',
              specs: {
                engine: '2.0L Diesel',
                engineCode: 'OM654q',
                displacementCc: 1950,
                cylinders: '4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 320,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 8.7,
                topSpeedKmh: 222,
                consumptionL100: 4.5,
                co2Gkm: 118
              },
              dimensions: {
                lengthMm: 4442,
                widthMm: 1796,
                heightMm: 1557,
                wheelbaseMm: 2729,
                bootLitres: 488,
                weightKg: 1490,
                tankLitres: 43
              },
              options: safetyComfort(['parking pilot', 'surround camera']),
              knownFor: ['efficient long-distance cruiser', 'strong torque', 'large boot', 'comfortable ride'],
              watchOut: ['diesel not ideal for short trips', 'DPF needs motorway runs', 'limited performance appeal']
            }
          ]
        }
      ]
    },
    {
      id: 'c-class',
      name: 'C-Class',
      segment: 'Premium Compact Executive',
      description: 'The C-Class is Mercedes-Benz\'s core volume model, offering genuine executive-car quality in a compact package. Available as saloon and estate with petrol, diesel, PHEV and AMG variants.',
      tags: ['executive', 'sedan', 'wagon', 'PHEV', 'AMG', 'premium'],
      generations: [
        {
          id: 'c-class-w205',
          name: 'W205 (Fourth Generation)',
          years: '2014–2021',
          platform: 'MRA',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'The W205 introduced a more upmarket cabin with turbocharged engines across the range and optional 4MATIC all-wheel drive. Saloon (W205) and Estate (S205) offered consistent powertrains and trim levels.',
          heroImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
          variants: [
            {
              id: 'mercedes-benz-c-class-w205-c200',
              name: 'C 200',
              years: '2018–2021',
              priceBand: '€18,000–€30,000 used',
              specs: {
                engine: '1.5L EQ Boost Petrol',
                engineCode: 'M264',
                displacementCc: 1497,
                cylinders: '4',
                powerHp: 184,
                powerKw: 135,
                torqueNm: 280,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'RWD',
                acceleration0100: 7.7,
                topSpeedKmh: 240,
                consumptionL100: 6.7,
                co2Gkm: 152
              },
              dimensions: {
                lengthMm: 4686,
                widthMm: 1810,
                heightMm: 1442,
                wheelbaseMm: 2840,
                bootLitres: 455,
                weightKg: 1510,
                tankLitres: 66
              },
              options: safetyComfort(['Distronic Plus', 'parking pilot', 'LED headlights']),
              knownFor: ['refined EQ Boost mild-hybrid', 'smooth 9G-Tronic gearbox', 'elegant interior', 'rear-wheel drive handling'],
              watchOut: ['48V mild hybrid adds complexity', 'boot smaller than rivals', 'infotainment showing age by 2021']
            },
            {
              id: 'mercedes-benz-c-class-w205-c220d',
              name: 'C 220 d',
              years: '2014–2021',
              priceBand: '€14,000–€27,000 used',
              specs: {
                engine: '2.0L Diesel',
                engineCode: 'OM654',
                displacementCc: 1950,
                cylinders: '4',
                powerHp: 194,
                powerKw: 143,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'RWD',
                acceleration0100: 7.3,
                topSpeedKmh: 237,
                consumptionL100: 4.6,
                co2Gkm: 121
              },
              dimensions: {
                lengthMm: 4686,
                widthMm: 1810,
                heightMm: 1442,
                wheelbaseMm: 2840,
                bootLitres: 455,
                weightKg: 1570,
                tankLitres: 66
              },
              options: safetyComfort(['Distronic Plus', 'head-up display', 'Burmester sound']),
              knownFor: ['best-selling variant', 'refined diesel refinement', 'strong motorway performance', 'low running costs'],
              watchOut: ['early models had injector issues', 'AdBlue tank needs topping', 'rear headroom tight for tall passengers']
            }
          ]
        },
        {
          id: 'c-class-w206',
          name: 'W206 (Fifth Generation)',
          years: '2021–present',
          platform: 'MRA2',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'The W206 marked a dramatic cabin upgrade with a large portrait touchscreen and S-Class-inspired interior. All variants now feature 48V mild-hybrid technology, with PHEV and AMG options. Estate (S206) launched 2022.',
          heroImage: 'https://images.unsplash.com/photo-1669215420018-b7cb26f3e89d?w=1200',
          variants: [
            {
              id: 'mercedes-benz-c-class-w206-c200',
              name: 'C 200',
              years: '2021–present',
              priceBand: '€30,000–€46,000 used',
              specs: {
                engine: '1.5L EQ Boost Petrol + 48V',
                engineCode: 'M254',
                displacementCc: 1497,
                cylinders: '4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 300,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'RWD',
                acceleration0100: 7.3,
                topSpeedKmh: 240,
                consumptionL100: 6.5,
                co2Gkm: 147
              },
              dimensions: {
                lengthMm: 4751,
                widthMm: 1820,
                heightMm: 1438,
                wheelbaseMm: 2865,
                bootLitres: 455,
                weightKg: 1545,
                tankLitres: 66
              },
              options: safetyComfort(['driving assistance package', 'augmented reality navigation', 'Burmester 3D sound']),
              knownFor: ['S-Class inspired interior', 'large portrait MBUX screen', '48V boost', 'class-leading tech'],
              watchOut: ['touchscreen replaces physical buttons', 'some quality control concerns early production', 'pricey options list']
            },
            {
              id: 'mercedes-benz-c-class-w206-c220d',
              name: 'C 220 d',
              years: '2021–present',
              priceBand: '€33,000–€49,000 used',
              specs: {
                engine: '2.0L Diesel + 48V',
                engineCode: 'OM654M',
                displacementCc: 1993,
                cylinders: '4',
                powerHp: 200,
                powerKw: 147,
                torqueNm: 440,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'RWD',
                acceleration0100: 7.0,
                topSpeedKmh: 240,
                consumptionL100: 4.7,
                co2Gkm: 124
              },
              dimensions: {
                lengthMm: 4751,
                widthMm: 1820,
                heightMm: 1438,
                wheelbaseMm: 2865,
                bootLitres: 455,
                weightKg: 1605,
                tankLitres: 66
              },
              options: safetyComfort(['head-up display', 'Burmester surround sound', 'parking pilot']),
              knownFor: ['best-in-class diesel refinement', 'efficient long-haul cruiser', 'strong torque response', 'estate practicality available'],
              watchOut: ['touchscreen learning curve', 'firm standard suspension', 'AdBlue maintenance required']
            },
            {
              id: 'mercedes-benz-c-class-w206-c300e',
              name: 'C 300 e',
              years: '2021–present',
              priceBand: '€38,000–€55,000 used',
              specs: {
                engine: '2.0L Turbo Petrol + Electric Motor',
                engineCode: 'M254 + EM',
                displacementCc: 1999,
                cylinders: '4',
                powerHp: 313,
                powerKw: 230,
                torqueNm: 550,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'RWD',
                acceleration0100: 5.7,
                topSpeedKmh: 250,
                consumptionL100: 1.4,
                electricRangeKm: 100,
                co2Gkm: 32
              },
              dimensions: {
                lengthMm: 4751,
                widthMm: 1820,
                heightMm: 1438,
                wheelbaseMm: 2865,
                bootLitres: 360,
                weightKg: 1885,
                tankLitres: 50
              },
              options: safetyComfort(['wireless charging', 'MBUX augmented reality', 'AMG line exterior']),
              knownFor: ['100 km electric range', 'strong combined performance', 'tax-efficient for company cars', 'premium PHEV execution'],
              watchOut: ['reduced boot vs standard', 'heavier than petrol', 'real-world EV range varies by temperature']
            },
            {
              id: 'mercedes-benz-c-class-w206-c43amg',
              name: 'C 43 AMG',
              years: '2022–present',
              priceBand: '€55,000–€72,000 used',
              specs: {
                engine: '2.0L Turbo Petrol AMG + 48V EQ Boost',
                engineCode: 'M139l',
                displacementCc: 1999,
                cylinders: '4',
                powerHp: 408,
                powerKw: 300,
                torqueNm: 500,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 4.6,
                topSpeedKmh: 250,
                consumptionL100: 9.8,
                co2Gkm: 222
              },
              dimensions: {
                lengthMm: 4751,
                widthMm: 1820,
                heightMm: 1438,
                wheelbaseMm: 2865,
                bootLitres: 455,
                weightKg: 1825,
                tankLitres: 66
              },
              options: safetyComfort(['AMG track pace', 'AMG ceramic brakes', 'carbon fibre trim', 'AMG performance exhaust']),
              knownFor: ['four-cylinder AMG performance', 'drift mode with 4MATIC+', 'sharper handling than C55', 'tech-packed cabin'],
              watchOut: ['four-cylinder sounds less characterful than V6', 'heavy for sporty driving', 'expensive options']
            }
          ]
        }
      ]
    },
    {
      id: 'e-class',
      name: 'E-Class',
      segment: 'Premium Executive',
      description: 'The E-Class is Mercedes-Benz\'s flagship executive saloon and estate, combining luxury, technology and efficiency with a wide range of powertrains from efficient diesel to high-performance AMG.',
      tags: ['executive', 'sedan', 'wagon', 'luxury', 'PHEV', 'AMG'],
      generations: [
        {
          id: 'e-class-w213',
          name: 'W213 (Tenth Generation)',
          years: '2016–2023',
          platform: 'MRA',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'The W213 brought S-Class technology down to the E-Class, including optional rear-wheel steering, widescreen cockpit display, and advanced driver assistance systems. Estate (S213) also available.',
          heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200',
          variants: [
            {
              id: 'mercedes-benz-e-class-w213-e200',
              name: 'E 200',
              years: '2016–2023',
              priceBand: '€20,000–€38,000 used',
              specs: {
                engine: '2.0L Turbo Petrol',
                engineCode: 'M264',
                displacementCc: 1991,
                cylinders: '4',
                powerHp: 197,
                powerKw: 145,
                torqueNm: 320,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'RWD',
                acceleration0100: 7.6,
                topSpeedKmh: 240,
                consumptionL100: 7.0,
                co2Gkm: 159
              },
              dimensions: {
                lengthMm: 4923,
                widthMm: 1852,
                heightMm: 1468,
                wheelbaseMm: 2939,
                bootLitres: 540,
                weightKg: 1635,
                tankLitres: 66
              },
              options: safetyComfort(['Distronic Plus', 'active steering assist', 'widescreen cockpit']),
              knownFor: ['spacious executive cabin', 'smooth 9G-Tronic', 'advanced driver aids', 'refined long-distance cruiser'],
              watchOut: ['petrol less frugal than diesel', 'air suspension costly to repair', 'complex infotainment early models']
            },
            {
              id: 'mercedes-benz-e-class-w213-e220d',
              name: 'E 220 d',
              years: '2016–2023',
              priceBand: '€18,000–€36,000 used',
              specs: {
                engine: '2.0L Diesel',
                engineCode: 'OM654',
                displacementCc: 1950,
                cylinders: '4',
                powerHp: 194,
                powerKw: 143,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'RWD',
                acceleration0100: 7.3,
                topSpeedKmh: 238,
                consumptionL100: 4.9,
                co2Gkm: 128
              },
              dimensions: {
                lengthMm: 4923,
                widthMm: 1852,
                heightMm: 1468,
                wheelbaseMm: 2939,
                bootLitres: 540,
                weightKg: 1680,
                tankLitres: 66
              },
              options: safetyComfort(['Multibeam LED', 'head-up display', 'Burmester sound']),
              knownFor: ['outstanding long-distance economy', 'quiet and refined diesel', 'generous boot space', 'comfortable ride'],
              watchOut: ['DPF clogs in city use', 'AdBlue needed', 'some diesel rattle at cold start']
            }
          ]
        },
        {
          id: 'e-class-w214',
          name: 'W214 (Eleventh Generation)',
          years: '2023–present',
          platform: 'MRA2',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'The W214 receives a dramatic interior overhaul with a curved MBUX Superscreen spanning the dashboard. All engines are electrified (mild or plug-in hybrid). Estate (S214) available from 2024.',
          heroImage: 'https://images.unsplash.com/photo-1704975640849-1ef59e5d6e69?w=1200',
          variants: [
            {
              id: 'mercedes-benz-e-class-w214-e200',
              name: 'E 200',
              years: '2023–present',
              priceBand: '€48,000–€62,000 used',
              specs: {
                engine: '2.0L Turbo Petrol + 48V',
                engineCode: 'M254',
                displacementCc: 1999,
                cylinders: '4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 320,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'RWD',
                acceleration0100: 7.6,
                topSpeedKmh: 240,
                consumptionL100: 6.8,
                co2Gkm: 154
              },
              dimensions: {
                lengthMm: 4949,
                widthMm: 1880,
                heightMm: 1468,
                wheelbaseMm: 2961,
                bootLitres: 540,
                weightKg: 1745,
                tankLitres: 66
              },
              options: safetyComfort(['MBUX Superscreen', 'augmented reality HUD', 'active ambient lighting']),
              knownFor: ['MBUX Superscreen tech', 'spacious rear cabin', 'mild-hybrid efficiency', 'refined ride'],
              watchOut: ['heavy reliance on touchscreen controls', 'expensive list price', 'optional rear-axle steering pricey']
            },
            {
              id: 'mercedes-benz-e-class-w214-e220d',
              name: 'E 220 d',
              years: '2023–present',
              priceBand: '€52,000–€66,000 used',
              specs: {
                engine: '2.0L Diesel + 48V',
                engineCode: 'OM654M',
                displacementCc: 1993,
                cylinders: '4',
                powerHp: 197,
                powerKw: 145,
                torqueNm: 440,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'RWD',
                acceleration0100: 7.3,
                topSpeedKmh: 240,
                consumptionL100: 5.0,
                co2Gkm: 131
              },
              dimensions: {
                lengthMm: 4949,
                widthMm: 1880,
                heightMm: 1468,
                wheelbaseMm: 2961,
                bootLitres: 540,
                weightKg: 1800,
                tankLitres: 66
              },
              options: safetyComfort(['active parking assist', 'surround camera', 'Burmester 4D sound']),
              knownFor: ['48V mild hybrid diesel', 'class-leading fuel economy', 'whisper-quiet motorway cruising', 'huge estate boot optional'],
              watchOut: ['complex new platform less proven', 'expensive servicing', 'touchscreen-heavy controls']
            },
            {
              id: 'mercedes-benz-e-class-w214-e300e',
              name: 'E 300 e',
              years: '2023–present',
              priceBand: '€58,000–€75,000 used',
              specs: {
                engine: '2.0L Turbo Petrol + Electric Motor',
                engineCode: 'M254 + EM',
                displacementCc: 1999,
                cylinders: '4',
                powerHp: 313,
                powerKw: 230,
                torqueNm: 550,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'RWD',
                acceleration0100: 5.9,
                topSpeedKmh: 250,
                consumptionL100: 1.4,
                electricRangeKm: 100,
                co2Gkm: 31
              },
              dimensions: {
                lengthMm: 4949,
                widthMm: 1880,
                heightMm: 1468,
                wheelbaseMm: 2961,
                bootLitres: 370,
                weightKg: 2050,
                tankLitres: 50
              },
              options: safetyComfort(['wireless charging', 'remote battery pre-conditioning', 'AMG line package']),
              knownFor: ['100 km EV range', 'company car friendly emissions', 'strong combined output', 'executive EV capability'],
              watchOut: ['very heavy', 'smaller boot than standard', 'charging infrastructure dependency']
            },
            {
              id: 'mercedes-benz-e-class-w214-e450',
              name: 'E 450',
              years: '2023–present',
              priceBand: '€65,000–€82,000 used',
              specs: {
                engine: '3.0L Turbo Petrol + 48V',
                engineCode: 'M256',
                displacementCc: 2999,
                cylinders: '6',
                powerHp: 381,
                powerKw: 280,
                torqueNm: 500,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 250,
                consumptionL100: 9.5,
                co2Gkm: 216
              },
              dimensions: {
                lengthMm: 4949,
                widthMm: 1880,
                heightMm: 1468,
                wheelbaseMm: 2961,
                bootLitres: 540,
                weightKg: 1940,
                tankLitres: 66
              },
              options: safetyComfort(['AMG line', 'rear-axle steering', 'Burmester 4D surround sound', 'executive rear package']),
              knownFor: ['inline-six refinement', 'effortless performance', 'smooth 4MATIC AWD', 'near-S-Class luxury'],
              watchOut: ['high fuel consumption', 'significant price premium over six', 'weight affects dynamics']
            }
          ]
        }
      ]
    },
    {
      id: 's-class',
      name: 'S-Class',
      segment: 'Luxury Full-Size Saloon',
      description: 'The S-Class is Mercedes-Benz\'s flagship saloon, the ultimate expression of luxury, technology and safety. Every feature debuted here eventually trickles down across the range.',
      tags: ['luxury', 'flagship', 'sedan', 'technology', 'executive'],
      generations: [
        {
          id: 's-class-w223',
          name: 'W223 (Eighth Generation)',
          years: '2020–present',
          platform: 'MSA',
          bodyStyles: ['Sedan'],
          summary: 'The W223 S-Class raises the bar with a revolutionary Hyperscreen option spanning the entire dashboard, rear-axle steering, E-Active Body Control air suspension, and an array of safety and driver assistance technologies.',
          heroImage: 'https://images.unsplash.com/photo-1609520505218-7421df82bb8c?w=1200',
          variants: [
            {
              id: 'mercedes-benz-s-class-w223-s400d',
              name: 'S 400 d',
              years: '2021–present',
              priceBand: '€75,000–€110,000 used',
              specs: {
                engine: '3.0L Inline-Six Diesel + 48V',
                engineCode: 'OM656',
                displacementCc: 2925,
                cylinders: '6',
                powerHp: 330,
                powerKw: 243,
                torqueNm: 700,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 5.4,
                topSpeedKmh: 250,
                consumptionL100: 6.5,
                co2Gkm: 170
              },
              dimensions: {
                lengthMm: 5179,
                widthMm: 1954,
                heightMm: 1503,
                wheelbaseMm: 3106,
                bootLitres: 550,
                weightKg: 2180,
                tankLitres: 75
              },
              options: safetyComfort(['MBUX Hyperscreen', 'E-Active Body Control', 'rear-axle steering', 'executive rear seat package', 'Burmester 4D High-End sound']),
              knownFor: ['pinnacle diesel refinement', 'magic carpet ride', 'extensive active safety', 'ultra-long wheelbase comfort'],
              watchOut: ['extremely complex electronics', 'very high running costs', 'depreciation on used examples', 'AdBlue every 15,000 km']
            },
            {
              id: 'mercedes-benz-s-class-w223-s500',
              name: 'S 500',
              years: '2020–present',
              priceBand: '€85,000–€130,000 used',
              specs: {
                engine: '3.0L Inline-Six Petrol + 48V EQ Boost',
                engineCode: 'M256',
                displacementCc: 2999,
                cylinders: '6',
                powerHp: 435,
                powerKw: 320,
                torqueNm: 520,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 250,
                consumptionL100: 10.2,
                co2Gkm: 232
              },
              dimensions: {
                lengthMm: 5179,
                widthMm: 1954,
                heightMm: 1503,
                wheelbaseMm: 3106,
                bootLitres: 550,
                weightKg: 2155,
                tankLitres: 75
              },
              options: safetyComfort(['MBUX Hyperscreen', 'massaging rear seats', 'ambient fragrance system', 'head-up display with AR', 'night vision assistant']),
              knownFor: ['benchmark interior luxury', 'seamless performance delivery', 'technology showcase', 'supreme long-distance comfort'],
              watchOut: ['petrol fuel costs significant', 'high servicing bills', 'complexity of options confusing', 'heavy kerb weight']
            }
          ]
        }
      ]
    },
    {
      id: 'cla',
      name: 'CLA',
      segment: 'Premium Compact Coupe-Saloon',
      description: 'The CLA is Mercedes-Benz\'s entry-level four-door coupe, combining sleek shooting brake styling with compact dimensions and a range of efficient powertrains.',
      tags: ['coupe', 'compact', 'premium', 'shooting brake', 'AMG'],
      generations: [
        {
          id: 'cla-c118',
          name: 'C118 (Second Generation)',
          years: '2019–present',
          platform: 'MFA2',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'The C118 CLA brings a more premium interior and MBUX infotainment to the four-door coupe body. Available as CLA Coupé (C118) and CLA Shooting Brake (X118). AMG 45 S tops the range with 421 hp.',
          heroImage: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200',
          variants: [
            {
              id: 'mercedes-benz-cla-c118-cla200',
              name: 'CLA 200',
              years: '2019–present',
              priceBand: '€22,000–€34,000 used',
              specs: {
                engine: '1.3L Turbo Petrol',
                engineCode: 'M282',
                displacementCc: 1332,
                cylinders: '4',
                powerHp: 163,
                powerKw: 120,
                torqueNm: 250,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.0,
                topSpeedKmh: 230,
                consumptionL100: 6.4,
                co2Gkm: 146
              },
              dimensions: {
                lengthMm: 4688,
                widthMm: 1830,
                heightMm: 1439,
                wheelbaseMm: 2729,
                bootLitres: 460,
                weightKg: 1415,
                tankLitres: 43
              },
              options: safetyComfort(['MBUX augmented reality navigation', 'widescreen cockpit display']),
              knownFor: ['sleek coupe styling', 'MBUX tech', 'practical shooting brake option', 'strong resale value'],
              watchOut: ['limited rear headroom', 'small boot for size', 'front-wheel drive limits sportiness']
            },
            {
              id: 'mercedes-benz-cla-c118-cla220d',
              name: 'CLA 220 d',
              years: '2019–present',
              priceBand: '€25,000–€37,000 used',
              specs: {
                engine: '2.0L Diesel',
                engineCode: 'OM654q',
                displacementCc: 1950,
                cylinders: '4',
                powerHp: 190,
                powerKw: 140,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 7.5,
                topSpeedKmh: 240,
                consumptionL100: 4.3,
                co2Gkm: 112
              },
              dimensions: {
                lengthMm: 4688,
                widthMm: 1830,
                heightMm: 1439,
                wheelbaseMm: 2729,
                bootLitres: 460,
                weightKg: 1500,
                tankLitres: 43
              },
              options: safetyComfort(['head-up display', 'panoramic sunroof', 'LED headlights']),
              knownFor: ['impressive fuel economy', 'coupe looks with diesel frugality', 'refined diesel engine', 'excellent real-world range'],
              watchOut: ['diesel noise at startup', 'DPF needs long runs', 'tight rear passenger space']
            },
            {
              id: 'mercedes-benz-cla-c118-cla45amg',
              name: 'CLA 45 S AMG',
              years: '2019–present',
              priceBand: '€52,000–€70,000 used',
              specs: {
                engine: '2.0L Turbo Petrol AMG',
                engineCode: 'M139',
                displacementCc: 1991,
                cylinders: '4',
                powerHp: 421,
                powerKw: 310,
                torqueNm: 500,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 4.0,
                topSpeedKmh: 270,
                consumptionL100: 10.5,
                co2Gkm: 240
              },
              dimensions: {
                lengthMm: 4688,
                widthMm: 1830,
                heightMm: 1439,
                wheelbaseMm: 2729,
                bootLitres: 460,
                weightKg: 1595,
                tankLitres: 43
              },
              options: safetyComfort(['AMG performance exhaust', 'AMG ceramic brakes', 'drift mode', 'AMG track pace']),
              knownFor: ['world\'s most powerful production 4-cylinder', 'AMG-Speedshift 8DCT', '4MATIC+ torque vectoring', 'aggressive aerodynamics'],
              watchOut: ['extremely stiff ride', 'very expensive options', 'high fuel costs', 'impractical for daily use in traffic']
            }
          ]
        }
      ]
    },
    {
      id: 'cle',
      name: 'CLE',
      segment: 'Premium Mid-Size Coupe',
      description: 'The CLE replaces both the C-Class Coupe and E-Class Coupe, combining their best elements into one premium coupe and cabriolet range with elegant proportions and advanced powertrain technology.',
      tags: ['coupe', 'convertible', 'premium', 'AMG', 'elegant'],
      generations: [
        {
          id: 'cle-c236',
          name: 'C236 (First Generation)',
          years: '2023–present',
          platform: 'MRA2',
          bodyStyles: ['Coupe', 'Convertible'],
          summary: 'The C236 CLE debuts as Mercedes-Benz\'s all-new coupe replacing the C-Class and E-Class coupes. It offers a stretched coupe body, MBUX infotainment, and 48V mild-hybrid petrol engines, with a cabriolet (A236) joining in 2024.',
          heroImage: 'https://images.unsplash.com/photo-1686833614787-a0dac0c64dce?w=1200',
          variants: [
            {
              id: 'mercedes-benz-cle-c236-cle200',
              name: 'CLE 200',
              years: '2023–present',
              priceBand: '€48,000–€62,000 used',
              specs: {
                engine: '1.5L EQ Boost Petrol + 48V',
                engineCode: 'M254',
                displacementCc: 1497,
                cylinders: '4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 300,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'RWD',
                acceleration0100: 7.6,
                topSpeedKmh: 240,
                consumptionL100: 7.0,
                co2Gkm: 158
              },
              dimensions: {
                lengthMm: 4850,
                widthMm: 1860,
                heightMm: 1397,
                wheelbaseMm: 2865,
                bootLitres: 420,
                weightKg: 1700,
                tankLitres: 66
              },
              options: safetyComfort(['MBUX widescreen', 'Burmester sound', 'AMG line package']),
              knownFor: ['elegant proportions', 'practical 2+2 seating', 'modern MBUX system', 'smooth mild-hybrid drive'],
              watchOut: ['heavy for a coupe', 'limited rear access', 'pricey compared to C-Class sedan']
            },
            {
              id: 'mercedes-benz-cle-c236-cle300',
              name: 'CLE 300',
              years: '2023–present',
              priceBand: '€56,000–€72,000 used',
              specs: {
                engine: '2.0L Turbo Petrol + 48V',
                engineCode: 'M254',
                displacementCc: 1999,
                cylinders: '4',
                powerHp: 258,
                powerKw: 190,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 5.9,
                topSpeedKmh: 250,
                consumptionL100: 8.1,
                co2Gkm: 184
              },
              dimensions: {
                lengthMm: 4850,
                widthMm: 1860,
                heightMm: 1397,
                wheelbaseMm: 2865,
                bootLitres: 420,
                weightKg: 1790,
                tankLitres: 66
              },
              options: safetyComfort(['4MATIC AWD', 'AMG line exterior', 'active parking pilot', 'panoramic roof']),
              knownFor: ['strong performance', '4MATIC security', 'premium coupe experience', 'advanced driver assistance'],
              watchOut: ['premium fuel required', 'options escalate quickly', 'rear access remains tight']
            }
          ]
        }
      ]
    },
    {
      id: 'gla',
      name: 'GLA',
      segment: 'Premium Compact SUV',
      description: 'The GLA is Mercedes-Benz\'s entry-level compact SUV based on the A-Class platform, offering raised ride height, versatile packaging and urban-friendly dimensions alongside premium brand values.',
      tags: ['compact-SUV', 'premium', 'urban', 'FWD', '4MATIC'],
      generations: [
        {
          id: 'gla-h247',
          name: 'H247 (Second Generation)',
          years: '2020–present',
          platform: 'MFA2',
          bodyStyles: ['SUV'],
          summary: 'The H247 GLA grew slightly over its predecessor to offer improved rear headroom and a significantly upgraded interior with MBUX. Available with optional 4MATIC on higher-powered variants. AMG GLA 45 also offered.',
          heroImage: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200',
          variants: [
            {
              id: 'mercedes-benz-gla-h247-gla200',
              name: 'GLA 200',
              years: '2020–present',
              priceBand: '€26,000–€38,000 used',
              specs: {
                engine: '1.3L Turbo Petrol',
                engineCode: 'M282',
                displacementCc: 1332,
                cylinders: '4',
                powerHp: 163,
                powerKw: 120,
                torqueNm: 250,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.3,
                topSpeedKmh: 222,
                consumptionL100: 6.8,
                co2Gkm: 155
              },
              dimensions: {
                lengthMm: 4410,
                widthMm: 1834,
                heightMm: 1611,
                wheelbaseMm: 2729,
                bootLitres: 435,
                weightKg: 1490,
                tankLitres: 43
              },
              options: safetyComfort(['parking pilot', 'panoramic sunroof', 'MBUX navigation']),
              knownFor: ['MBUX tech in SUV', 'stylish compact proportions', 'urban-friendly size', 'comfortable ride height'],
              watchOut: ['FWD only limits off-road', 'small boot for SUV class', 'rear headroom tight']
            },
            {
              id: 'mercedes-benz-gla-h247-gla220d',
              name: 'GLA 220 d',
              years: '2020–present',
              priceBand: '€30,000–€42,000 used',
              specs: {
                engine: '2.0L Diesel',
                engineCode: 'OM654q',
                displacementCc: 1950,
                cylinders: '4',
                powerHp: 190,
                powerKw: 140,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 7.2,
                topSpeedKmh: 228,
                consumptionL100: 5.3,
                co2Gkm: 140
              },
              dimensions: {
                lengthMm: 4410,
                widthMm: 1834,
                heightMm: 1611,
                wheelbaseMm: 2729,
                bootLitres: 435,
                weightKg: 1590,
                tankLitres: 43
              },
              options: safetyComfort(['4MATIC AWD', 'off-road engineering package', 'tow bar']),
              knownFor: ['capable 4MATIC in all weather', 'efficient diesel for SUV', 'strong torque for towing', 'good real-world economy'],
              watchOut: ['firm diesel sound in cabin', 'DPF maintenance needed', 'limited cargo versatility']
            }
          ]
        }
      ]
    },
    {
      id: 'glb',
      name: 'GLB',
      segment: 'Premium Compact 7-Seat SUV',
      description: 'The GLB is Mercedes-Benz\'s boxy compact SUV with an optional third row of seats, offering genuine seven-seat capability in a compact footprint alongside practical cargo flexibility.',
      tags: ['compact-SUV', '7-seat', 'practical', 'family', 'premium'],
      generations: [
        {
          id: 'glb-x247',
          name: 'X247 (First Generation)',
          years: '2019–present',
          platform: 'MFA2',
          bodyStyles: ['SUV'],
          summary: 'The X247 GLB offers a more upright, boxy body style compared to the GLA, enabling an optional third row of seats. It uses the same MFA2 platform and MBUX infotainment but provides considerably more interior flexibility.',
          heroImage: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200',
          variants: [
            {
              id: 'mercedes-benz-glb-x247-glb200d',
              name: 'GLB 200 d',
              years: '2019–present',
              priceBand: '€28,000–€42,000 used',
              specs: {
                engine: '2.0L Diesel',
                engineCode: 'OM654q',
                displacementCc: 1950,
                cylinders: '4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 320,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 9.5,
                topSpeedKmh: 206,
                consumptionL100: 5.0,
                co2Gkm: 131
              },
              dimensions: {
                lengthMm: 4634,
                widthMm: 1834,
                heightMm: 1659,
                wheelbaseMm: 2829,
                bootLitres: 560,
                weightKg: 1580,
                tankLitres: 43
              },
              options: safetyComfort(['7-seat third row', 'panoramic sunroof', 'off-road engineering package']),
              knownFor: ['optional seven seats', 'tall boxy practical body', 'flexible boot', 'efficient diesel'],
              watchOut: ['third row cramped for adults', 'heavier than GLA', 'less stylish than GLA']
            },
            {
              id: 'mercedes-benz-glb-x247-glb250',
              name: 'GLB 250',
              years: '2019–present',
              priceBand: '€30,000–€45,000 used',
              specs: {
                engine: '2.0L Turbo Petrol',
                engineCode: 'M260',
                displacementCc: 1991,
                cylinders: '4',
                powerHp: 224,
                powerKw: 165,
                torqueNm: 350,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 6.8,
                topSpeedKmh: 240,
                consumptionL100: 8.2,
                co2Gkm: 186
              },
              dimensions: {
                lengthMm: 4634,
                widthMm: 1834,
                heightMm: 1659,
                wheelbaseMm: 2829,
                bootLitres: 560,
                weightKg: 1665,
                tankLitres: 43
              },
              options: safetyComfort(['4MATIC AWD', '7-seat package', 'AMG line', 'tow package']),
              knownFor: ['strong performance for family SUV', '4MATIC AWD versatility', 'spacious interior', 'practical family transport'],
              watchOut: ['higher fuel consumption', 'premium fuel needed', 'options list adds cost quickly']
            }
          ]
        }
      ]
    },
    {
      id: 'glc',
      name: 'GLC',
      segment: 'Premium Mid-Size SUV',
      description: 'The GLC is Mercedes-Benz\'s best-selling SUV, offering a premium mid-size package with exceptional refinement, advanced technology and a broad powertrain range from efficient diesel to performance AMG.',
      tags: ['mid-SUV', 'premium', 'bestseller', 'PHEV', 'AMG', '4MATIC'],
      generations: [
        {
          id: 'glc-x253',
          name: 'X253 (First Generation)',
          years: '2015–2023',
          platform: 'MRA',
          bodyStyles: ['SUV'],
          summary: 'The X253 GLC replaced the GLK with a more rounded, premium design and significantly upgraded interior. C-Class derived powertrains, 4MATIC all-wheel drive standard on most variants, with coupe (C253) also available.',
          heroImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200',
          variants: [
            {
              id: 'mercedes-benz-glc-x253-glc220d',
              name: 'GLC 220 d',
              years: '2015–2023',
              priceBand: '€22,000–€38,000 used',
              specs: {
                engine: '2.0L Diesel',
                engineCode: 'OM654',
                displacementCc: 1950,
                cylinders: '4',
                powerHp: 194,
                powerKw: 143,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 7.4,
                topSpeedKmh: 218,
                consumptionL100: 5.6,
                co2Gkm: 147
              },
              dimensions: {
                lengthMm: 4656,
                widthMm: 1890,
                heightMm: 1639,
                wheelbaseMm: 2873,
                bootLitres: 550,
                weightKg: 1790,
                tankLitres: 50
              },
              options: safetyComfort(['Distronic Plus', 'panoramic sunroof', 'off-road engineering package', 'towbar']),
              knownFor: ['best-selling mid-SUV', 'refined diesel performance', 'standard 4MATIC AWD', 'comfortable family transport'],
              watchOut: ['early 9G-Tronic can be jerky', 'interior feels dated vs W206', 'AdBlue required']
            }
          ]
        },
        {
          id: 'glc-x254',
          name: 'X254 (Second Generation)',
          years: '2022–present',
          platform: 'MRA2',
          bodyStyles: ['SUV'],
          summary: 'The X254 GLC is a complete redesign featuring the new portrait touchscreen MBUX system, all-electrified powertrains (mild hybrid or PHEV), and optional third row of seats in some markets.',
          heroImage: 'https://images.unsplash.com/photo-1669215420018-b7cb26f3e89d?w=1200',
          variants: [
            {
              id: 'mercedes-benz-glc-x254-glc220d',
              name: 'GLC 220 d',
              years: '2022–present',
              priceBand: '€45,000–€60,000 used',
              specs: {
                engine: '2.0L Diesel + 48V',
                engineCode: 'OM654M',
                displacementCc: 1993,
                cylinders: '4',
                powerHp: 197,
                powerKw: 145,
                torqueNm: 440,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 7.5,
                topSpeedKmh: 222,
                consumptionL100: 6.2,
                co2Gkm: 163
              },
              dimensions: {
                lengthMm: 4716,
                widthMm: 1890,
                heightMm: 1640,
                wheelbaseMm: 2888,
                bootLitres: 620,
                weightKg: 1945,
                tankLitres: 50
              },
              options: safetyComfort(['MBUX portrait screen', 'driving assistance package plus', 'panoramic roof', 'Burmester sound']),
              knownFor: ['portrait MBUX screen', 'class-leading boot space', '48V diesel efficiency', 'premium build quality'],
              watchOut: ['touchscreen-only controls', 'heavy at 1,945 kg', 'expensive options', 'large turning circle']
            },
            {
              id: 'mercedes-benz-glc-x254-glc300e',
              name: 'GLC 300 e',
              years: '2022–present',
              priceBand: '€52,000–€68,000 used',
              specs: {
                engine: '2.0L Turbo Petrol + Electric Motor',
                engineCode: 'M254 + EM',
                displacementCc: 1999,
                cylinders: '4',
                powerHp: 313,
                powerKw: 230,
                torqueNm: 550,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 6.0,
                topSpeedKmh: 235,
                consumptionL100: 1.4,
                electricRangeKm: 100,
                co2Gkm: 33
              },
              dimensions: {
                lengthMm: 4716,
                widthMm: 1890,
                heightMm: 1640,
                wheelbaseMm: 2888,
                bootLitres: 505,
                weightKg: 2165,
                tankLitres: 50
              },
              options: safetyComfort(['wireless charging', 'energy recuperation displays', 'AMG line', 'off-road package']),
              knownFor: ['100 km EV range in SUV', 'strong combined power', 'tax-efficient PHEV', 'versatile all-weather AWD'],
              watchOut: ['very heavy at 2,165 kg', 'reduced boot vs standard GLC', 'charging infrastructure dependent']
            },
            {
              id: 'mercedes-benz-glc-x254-glc43amg',
              name: 'GLC 43 AMG',
              years: '2023–present',
              priceBand: '€72,000–€88,000 used',
              specs: {
                engine: '2.0L Turbo Petrol AMG + 48V',
                engineCode: 'M139l',
                displacementCc: 1999,
                cylinders: '4',
                powerHp: 421,
                powerKw: 310,
                torqueNm: 500,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 5.0,
                topSpeedKmh: 250,
                consumptionL100: 10.7,
                co2Gkm: 244
              },
              dimensions: {
                lengthMm: 4716,
                widthMm: 1890,
                heightMm: 1640,
                wheelbaseMm: 2888,
                bootLitres: 620,
                weightKg: 2100,
                tankLitres: 66
              },
              options: safetyComfort(['AMG ride control suspension', 'AMG performance exhaust', 'carbon fibre interior trim', 'AMG track pace']),
              knownFor: ['AMG performance in SUV body', 'dramatic AMG exhaust sound', 'sharp steering', 'sports suspension'],
              watchOut: ['very high fuel consumption', 'stiff ride on standard 20-inch wheels', 'expensive to run and service']
            }
          ]
        }
      ]
    },
    {
      id: 'gle',
      name: 'GLE',
      segment: 'Premium Large SUV',
      description: 'The GLE is Mercedes-Benz\'s large SUV offering, bridging executive luxury with genuine off-road capability. Available with seven seats, air suspension and a range of powerful engines from smooth diesel to AMG performance.',
      tags: ['large-SUV', 'luxury', '7-seat', 'air-suspension', 'PHEV', 'AMG'],
      generations: [
        {
          id: 'gle-w167',
          name: 'W167 (Third Generation)',
          years: '2018–present',
          platform: 'MSP',
          bodyStyles: ['SUV'],
          summary: 'The W167 GLE offers a more refined and spacious interior with optional third row of seats, standard 4MATIC AWD, and available E-Active Body Control air suspension with active roll stabilisation.',
          heroImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200',
          variants: [
            {
              id: 'mercedes-benz-gle-w167-gle300d',
              name: 'GLE 300 d',
              years: '2019–present',
              priceBand: '€48,000–€65,000 used',
              specs: {
                engine: '2.0L Diesel + 48V',
                engineCode: 'OM654M',
                displacementCc: 1993,
                cylinders: '4',
                powerHp: 245,
                powerKw: 180,
                torqueNm: 500,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 7.2,
                topSpeedKmh: 230,
                consumptionL100: 7.3,
                co2Gkm: 191
              },
              dimensions: {
                lengthMm: 4924,
                widthMm: 1976,
                heightMm: 1772,
                wheelbaseMm: 2995,
                bootLitres: 825,
                weightKg: 2145,
                tankLitres: 85
              },
              options: safetyComfort(['7-seat option', 'air suspension', 'off-road engineering package', 'tow package up to 3,500 kg']),
              knownFor: ['comfortable large-family SUV', 'seven-seat option', 'strong diesel torque', 'genuine towing capability'],
              watchOut: ['heavy fuel consumption real world', 'large dimensions in city', 'tyre costs significant']
            },
            {
              id: 'mercedes-benz-gle-w167-gle400e',
              name: 'GLE 400 e',
              years: '2020–present',
              priceBand: '€58,000–€78,000 used',
              specs: {
                engine: '3.0L Turbo Petrol + Electric Motor',
                engineCode: 'M256 + EM',
                displacementCc: 2999,
                cylinders: '6',
                powerHp: 381,
                powerKw: 280,
                torqueNm: 650,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 5.7,
                topSpeedKmh: 250,
                consumptionL100: 2.1,
                electricRangeKm: 82,
                co2Gkm: 48
              },
              dimensions: {
                lengthMm: 4924,
                widthMm: 1976,
                heightMm: 1772,
                wheelbaseMm: 2995,
                bootLitres: 660,
                weightKg: 2640,
                tankLitres: 75
              },
              options: safetyComfort(['E-Active Body Control', 'wireless charging', 'executive rear seat package', 'AMG line']),
              knownFor: ['inline-six PHEV efficiency', 'strong combined performance', 'luxury PHEV SUV', 'low official CO2'],
              watchOut: ['extremely heavy at 2,640 kg', 'reduced towing vs diesel', 'EV range limited by weight', 'very expensive']
            },
            {
              id: 'mercedes-benz-gle-w167-gle53amg',
              name: 'GLE 53 AMG',
              years: '2019–present',
              priceBand: '€72,000–€95,000 used',
              specs: {
                engine: '3.0L Turbo Petrol AMG + 48V EQ Boost',
                engineCode: 'M256',
                displacementCc: 2999,
                cylinders: '6',
                powerHp: 435,
                powerKw: 320,
                torqueNm: 520,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 5.3,
                topSpeedKmh: 250,
                consumptionL100: 11.8,
                co2Gkm: 269
              },
              dimensions: {
                lengthMm: 4924,
                widthMm: 1976,
                heightMm: 1772,
                wheelbaseMm: 2995,
                bootLitres: 825,
                weightKg: 2270,
                tankLitres: 85
              },
              options: safetyComfort(['AMG ride control air suspension', 'AMG performance exhaust', 'AMG carbon fibre trim', 'night package']),
              knownFor: ['AMG performance with SUV practicality', 'smooth inline-six sound', 'capable sports SUV', 'air suspension comfort'],
              watchOut: ['significant fuel consumption', 'high road and VED tax', 'heavy dynamic penalty', 'running costs very high']
            }
          ]
        }
      ]
    },
    {
      id: 'gls',
      name: 'GLS',
      segment: 'Luxury Full-Size SUV',
      description: 'The GLS is Mercedes-Benz\'s flagship SUV, offering S-Class levels of luxury in a seven-seat full-size body. It combines genuine off-road capability with limousine-like interior refinement.',
      tags: ['full-size-SUV', 'luxury', 'flagship', '7-seat', 'AMG'],
      generations: [
        {
          id: 'gls-x167',
          name: 'X167 (Third Generation)',
          years: '2019–present',
          platform: 'MSP',
          bodyStyles: ['SUV'],
          summary: 'The X167 GLS offers standard seven seats, E-Active Body Control air suspension, MBUX infotainment, and a range of potent petrol and diesel powertrains. The AMG GLS 63 uses a twin-turbo V8.',
          heroImage: 'https://images.unsplash.com/photo-1609520505218-7421df82bb8c?w=1200',
          variants: [
            {
              id: 'mercedes-benz-gls-x167-gls400d',
              name: 'GLS 400 d',
              years: '2019–present',
              priceBand: '€72,000–€105,000 used',
              specs: {
                engine: '3.0L Inline-Six Diesel + 48V',
                engineCode: 'OM656',
                displacementCc: 2925,
                cylinders: '6',
                powerHp: 330,
                powerKw: 243,
                torqueNm: 700,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 6.1,
                topSpeedKmh: 240,
                consumptionL100: 8.2,
                co2Gkm: 216
              },
              dimensions: {
                lengthMm: 5207,
                widthMm: 1956,
                heightMm: 1823,
                wheelbaseMm: 3135,
                bootLitres: 680,
                weightKg: 2535,
                tankLitres: 95
              },
              options: safetyComfort(['E-Active Body Control', 'executive rear seat package', 'night vision assistant', 'Burmester 3D Surround', 'tow package 3,500 kg']),
              knownFor: ['S-Class luxury in SUV format', 'seven standard seats', 'smooth inline-six diesel', 'genuine off-road capability'],
              watchOut: ['enormous dimensions challenging in cities', 'very high fuel costs', 'tyre and service bills substantial', 'parking difficult']
            }
          ]
        }
      ]
    },
    {
      id: 'g-class',
      name: 'G-Class',
      segment: 'Luxury Off-Road SUV',
      description: 'The G-Class (Geländewagen) is Mercedes-Benz\'s legendary off-road icon, produced since 1979 in a continuously evolved but unmistakeable box-shaped body combining extreme off-road capability with modern luxury.',
      tags: ['off-road', 'iconic', 'luxury', 'SUV', 'AMG', 'V8'],
      generations: [
        {
          id: 'g-class-w463',
          name: 'W463 (Modern Era)',
          years: '2018–present',
          platform: 'W463',
          bodyStyles: ['SUV'],
          summary: 'The thoroughly updated W463 retains the iconic boxy shape while gaining a completely new interior with MBUX, a new independent front suspension for improved road manners, and 4MATIC with three differential locks.',
          heroImage: 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=1200',
          variants: [
            {
              id: 'mercedes-benz-g-class-w463-g400d',
              name: 'G 400 d',
              years: '2020–present',
              priceBand: '€115,000–€155,000 used',
              specs: {
                engine: '3.0L Inline-Six Diesel + 48V',
                engineCode: 'OM656',
                displacementCc: 2925,
                cylinders: '6',
                powerHp: 330,
                powerKw: 243,
                torqueNm: 700,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: '4x4',
                acceleration0100: 6.4,
                topSpeedKmh: 210,
                consumptionL100: 10.5,
                co2Gkm: 277
              },
              dimensions: {
                lengthMm: 4624,
                widthMm: 1931,
                heightMm: 1969,
                wheelbaseMm: 2890,
                bootLitres: 667,
                weightKg: 2505,
                tankLitres: 75
              },
              options: safetyComfort(['three differential locks', '360-degree camera', 'off-road cockpit display', 'Burmester sound', 'exclusive nappa leather']),
              knownFor: ['legendary off-road capability', 'three locking differentials', 'iconic boxy styling', 'modern luxury inside'],
              watchOut: ['very high purchase price', 'enormous fuel consumption', 'wide body challenging in lanes', 'wind noise at motorway speed']
            },
            {
              id: 'mercedes-benz-g-class-w463-g63amg',
              name: 'G 63 AMG',
              years: '2018–present',
              priceBand: '€160,000–€240,000 used',
              specs: {
                engine: '4.0L Twin-Turbo V8 AMG',
                engineCode: 'M177',
                displacementCc: 3982,
                cylinders: 'V8',
                powerHp: 585,
                powerKw: 430,
                torqueNm: 850,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: '4x4',
                acceleration0100: 4.5,
                topSpeedKmh: 220,
                consumptionL100: 14.9,
                co2Gkm: 340
              },
              dimensions: {
                lengthMm: 4624,
                widthMm: 1984,
                heightMm: 1969,
                wheelbaseMm: 2890,
                bootLitres: 667,
                weightKg: 2560,
                tankLitres: 100
              },
              options: safetyComfort(['AMG performance exhaust', 'AMG night package', 'exclusive designo leather', 'carbon fibre trim', 'AMG TV entertainment']),
              knownFor: ['V8 performance with off-road legend', 'spectacular AMG exhaust', 'celebrity status symbol', 'brutally effective AWD'],
              watchOut: ['stratospheric fuel consumption', 'extremely expensive to run', 'high depreciation at this price', 'poor aerodynamics at speed']
            }
          ]
        }
      ]
    },
    {
      id: 'sl',
      name: 'SL',
      segment: 'Luxury Grand Tourer',
      description: 'The SL (Sport Leicht) is Mercedes-Benz\'s iconic luxury grand tourer, now exclusively AMG-developed, featuring a fabric convertible roof and rear +2 seats for the first time since the R230 generation.',
      tags: ['grand-tourer', 'convertible', 'AMG', 'luxury', 'performance'],
      generations: [
        {
          id: 'sl-r232',
          name: 'R232 (Seventh Generation)',
          years: '2022–present',
          platform: 'MSA',
          bodyStyles: ['Convertible'],
          summary: 'The R232 SL is developed exclusively by AMG for the first time, featuring a fabric soft-top, 2+2 seating layout, 4MATIC AWD on most variants, and the AMG-tuned inline-six and V8 powertrains.',
          heroImage: 'https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?w=1200',
          variants: [
            {
              id: 'mercedes-benz-sl-r232-sl55amg',
              name: 'SL 55 AMG',
              years: '2022–present',
              priceBand: '€120,000–€160,000 used',
              specs: {
                engine: '4.0L Twin-Turbo V8 AMG',
                engineCode: 'M177',
                displacementCc: 3982,
                cylinders: 'V8',
                powerHp: 476,
                powerKw: 350,
                torqueNm: 700,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 3.9,
                topSpeedKmh: 295,
                consumptionL100: 13.0,
                co2Gkm: 296
              },
              dimensions: {
                lengthMm: 4705,
                widthMm: 1915,
                heightMm: 1306,
                wheelbaseMm: 2700,
                bootLitres: 213,
                weightKg: 1990,
                tankLitres: 72
              },
              options: safetyComfort(['AMG ride control suspension', 'AMG performance exhaust', 'nappa leather', 'neck scarf heating', 'Burmester 3D surround']),
              knownFor: ['AMG-exclusive development', 'V8 GT sound', '2+2 rear seats', 'fabric roof with 15-second operation'],
              watchOut: ['very small boot for grand tourer', 'very heavy at 1,990 kg', 'expensive options', 'complex roof mechanism maintenance']
            }
          ]
        }
      ]
    },
    {
      id: 'amg-gt',
      name: 'AMG GT',
      segment: 'High-Performance Sports Coupe',
      description: 'The AMG GT is Mercedes-AMG\'s dedicated sports car, featuring a front mid-engine layout, long bonnet, short tail design, and available as a coupe with bespoke AMG V8 powertrains.',
      tags: ['sports-car', 'AMG', 'coupe', 'V8', 'performance', 'track'],
      generations: [
        {
          id: 'amg-gt-c192',
          name: 'C192 (Second Generation GT 4-Door)',
          years: '2023–present',
          platform: 'MSA',
          bodyStyles: ['Coupe'],
          summary: 'The new AMG GT Coupe (C192) replaces both the C190 GT sports car and the X290 4-Door Coupe in one body. It uses AMG\'s twin-turbo V8, with the GT 63 offering 585 hp and optional rear-axle steering.',
          heroImage: 'https://images.unsplash.com/photo-1686833614787-a0dac0c64dce?w=1200',
          variants: [
            {
              id: 'mercedes-benz-amg-gt-c192-gt63',
              name: 'AMG GT 63',
              years: '2023–present',
              priceBand: '€150,000–€195,000 used',
              specs: {
                engine: '4.0L Twin-Turbo V8 AMG',
                engineCode: 'M177',
                displacementCc: 3982,
                cylinders: 'V8',
                powerHp: 585,
                powerKw: 430,
                torqueNm: 800,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 3.2,
                topSpeedKmh: 315,
                consumptionL100: 13.8,
                co2Gkm: 314
              },
              dimensions: {
                lengthMm: 4730,
                widthMm: 1984,
                heightMm: 1353,
                wheelbaseMm: 2820,
                bootLitres: 390,
                weightKg: 2055,
                tankLitres: 80
              },
              options: safetyComfort(['AMG ceramic brakes', 'AMG track pace app', 'Burmester High-End', 'carbon fibre aero package', 'Michelin Pilot Sport Cup 2']),
              knownFor: ['blistering V8 performance', 'practical 4-seat GT', 'AMG Speedshift DCT 9', 'track-capable daily driver'],
              watchOut: ['very heavy for a GT', 'high fuel costs at pace', 'firm ride in comfort mode', 'extremely expensive']
            }
          ]
        }
      ]
    },
    {
      id: 'eqa',
      name: 'EQA',
      segment: 'Premium Electric Compact SUV',
      description: 'The EQA is Mercedes-Benz\'s entry electric SUV based on the GLA platform, offering zero-emission urban mobility with premium brand values and the choice of single or dual motor configurations.',
      tags: ['electric', 'compact-SUV', 'EV', 'zero-emission', 'premium'],
      generations: [
        {
          id: 'eqa-h243',
          name: 'H243 (First Generation)',
          years: '2021–present',
          platform: 'MFA2-EV',
          bodyStyles: ['SUV'],
          summary: 'The H243 EQA uses a modified MFA2 platform with an underfloor battery, sharing bodywork with the GLA. The EQA 250 front-wheel drive offers 426 km WLTP range; 4MATIC dual-motor variants also available.',
          heroImage: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200',
          variants: [
            {
              id: 'mercedes-benz-eqa-h243-eqa250',
              name: 'EQA 250',
              years: '2021–present',
              priceBand: '€32,000–€45,000 used',
              specs: {
                engine: 'Single Electric Motor',
                powerHp: 190,
                powerKw: 140,
                torqueNm: 375,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.9,
                topSpeedKmh: 160,
                electricRangeKm: 426
              },
              dimensions: {
                lengthMm: 4463,
                widthMm: 1834,
                heightMm: 1620,
                wheelbaseMm: 2729,
                bootLitres: 340,
                weightKg: 2040
              },
              options: evComfort(['Mercedes me Charge', 'MBUX augmented reality', 'heat pump']),
              knownFor: ['MBUX in an EV', 'premium build quality', '426 km WLTP range', 'smooth one-pedal driving'],
              watchOut: ['smaller boot than GLA due to battery', 'DC fast charging limited to 100 kW', 'heavier than ICE equivalent']
            }
          ]
        }
      ]
    },
    {
      id: 'eqb',
      name: 'EQB',
      segment: 'Premium Electric Compact 7-Seat SUV',
      description: 'The EQB is Mercedes-Benz\'s electric compact SUV based on the GLB, offering an optional third row of seats and available 4MATIC dual-motor all-wheel drive in a practical box-shaped body.',
      tags: ['electric', 'compact-SUV', '7-seat', 'EV', 'premium', '4MATIC'],
      generations: [
        {
          id: 'eqb-x243',
          name: 'X243 (First Generation)',
          years: '2022–present',
          platform: 'MFA2-EV',
          bodyStyles: ['SUV'],
          summary: 'The X243 EQB shares the GLB\'s boxy proportions and optional seven-seat layout with an electrified drivetrain. The EQB 300 4MATIC uses dual motors for all-wheel drive and offers up to 419 km WLTP range.',
          heroImage: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200',
          variants: [
            {
              id: 'mercedes-benz-eqb-x243-eqb300-4matic',
              name: 'EQB 300 4MATIC',
              years: '2022–present',
              priceBand: '€38,000–€52,000 used',
              specs: {
                engine: 'Dual Electric Motors',
                powerHp: 228,
                powerKw: 168,
                torqueNm: 390,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 8.0,
                topSpeedKmh: 180,
                electricRangeKm: 419
              },
              dimensions: {
                lengthMm: 4684,
                widthMm: 1834,
                heightMm: 1667,
                wheelbaseMm: 2829,
                bootLitres: 495,
                weightKg: 2180
              },
              options: evComfort(['7-seat package', 'Mercedes me Charge', 'MBUX navigation with EV routing', 'Burmester sound']),
              knownFor: ['7-seat EV option', '4MATIC AWD versatility', 'practical boxy body', 'MBUX in electric package'],
              watchOut: ['DC charging limited to 100 kW', 'seven seats cramped for adults', 'heavy at 2,180 kg', 'boot reduced with third row']
            }
          ]
        }
      ]
    },
    {
      id: 'eqe',
      name: 'EQE',
      segment: 'Premium Electric Executive',
      description: 'The EQE is Mercedes-Benz\'s dedicated electric executive saloon, built on the EVA2 platform shared with the EQS. It offers a spacious interior, long range and available optional MBUX Hyperscreen.',
      tags: ['electric', 'executive', 'sedan', 'EV', 'AMG', 'long-range'],
      generations: [
        {
          id: 'eqe-v295',
          name: 'V295 (First Generation)',
          years: '2022–present',
          platform: 'EVA2',
          bodyStyles: ['Sedan'],
          summary: 'The V295 EQE is built on the dedicated EVA2 electric platform featuring a one-bow body design, rear-axle steering, optional MBUX Hyperscreen, and up to 660 km WLTP range in standard spec.',
          heroImage: 'https://images.unsplash.com/photo-1704975640849-1ef59e5d6e69?w=1200',
          variants: [
            {
              id: 'mercedes-benz-eqe-v295-eqe350plus',
              name: 'EQE 350+',
              years: '2022–present',
              priceBand: '€55,000–€75,000 used',
              specs: {
                engine: 'Single Rear Electric Motor',
                powerHp: 292,
                powerKw: 215,
                torqueNm: 565,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 6.4,
                topSpeedKmh: 210,
                electricRangeKm: 660
              },
              dimensions: {
                lengthMm: 4946,
                widthMm: 1906,
                heightMm: 1512,
                wheelbaseMm: 3120,
                bootLitres: 430,
                weightKg: 2375
              },
              options: evComfort(['MBUX Hyperscreen optional', 'rear-axle steering', 'Burmester 3D Surround', 'augmented reality HUD']),
              knownFor: ['class-leading 660 km range', 'spacious EVA2 platform cabin', 'smooth electric power delivery', 'advanced driver assistance'],
              watchOut: ['very heavy at 2,375 kg', 'significant depreciation on EVs', 'DC charging 170 kW maximum', 'no frunk']
            },
            {
              id: 'mercedes-benz-eqe-v295-amgeqe53',
              name: 'AMG EQE 53 4MATIC+',
              years: '2022–present',
              priceBand: '€85,000–€115,000 used',
              specs: {
                engine: 'Dual Electric Motors AMG',
                powerHp: 625,
                powerKw: 460,
                torqueNm: 950,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 3.5,
                topSpeedKmh: 250,
                electricRangeKm: 480
              },
              dimensions: {
                lengthMm: 4946,
                widthMm: 1906,
                heightMm: 1512,
                wheelbaseMm: 3120,
                bootLitres: 430,
                weightKg: 2620
              },
              options: evComfort(['AMG ride control suspension', 'AMG track pace', 'Burmester High-End', 'carbon fibre aero', 'AMG performance seats']),
              knownFor: ['electric AMG performance', 'dramatic acceleration', 'AWD torque vectoring', 'luxury sports saloon EV'],
              watchOut: ['very heavy reducing range', 'reduced range vs EQE 350+', 'extremely high purchase price', 'high depreciation']
            }
          ]
        }
      ]
    },
    {
      id: 'eqs',
      name: 'EQS',
      segment: 'Luxury Electric Flagship Saloon',
      description: 'The EQS is Mercedes-Benz\'s electric flagship saloon, built on the dedicated EVA2 platform. It features the optional stunning MBUX Hyperscreen dashboard, over 700 km WLTP range and S-Class luxury in a clean electric architecture.',
      tags: ['electric', 'flagship', 'luxury', 'sedan', 'EV', 'long-range', 'AMG'],
      generations: [
        {
          id: 'eqs-v297',
          name: 'V297 (First Generation)',
          years: '2021–present',
          platform: 'EVA2',
          bodyStyles: ['Sedan'],
          summary: 'The V297 EQS is Mercedes-Benz\'s first dedicated luxury electric saloon. The one-bow body minimises drag (Cd 0.20), while the interior can feature a 141 cm MBUX Hyperscreen spanning the full dashboard.',
          heroImage: 'https://images.unsplash.com/photo-1704975640849-1ef59e5d6e69?w=1200',
          variants: [
            {
              id: 'mercedes-benz-eqs-v297-eqs450plus',
              name: 'EQS 450+',
              years: '2021–present',
              priceBand: '€80,000–€110,000 used',
              specs: {
                engine: 'Single Rear Electric Motor',
                powerHp: 333,
                powerKw: 245,
                torqueNm: 568,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 6.2,
                topSpeedKmh: 210,
                electricRangeKm: 770
              },
              dimensions: {
                lengthMm: 5216,
                widthMm: 1926,
                heightMm: 1512,
                wheelbaseMm: 3210,
                bootLitres: 610,
                weightKg: 2480
              },
              options: evComfort(['MBUX Hyperscreen', 'rear-axle steering', 'executive rear seat package', 'Burmester 4D High-End', 'massaging seats']),
              knownFor: ['770 km WLTP range', 'world-class Hyperscreen interior', 'S-Class luxury meets EV', 'ultra-low Cd 0.20 drag'],
              watchOut: ['very expensive', 'large dimensions challenging to park', 'rapid depreciation', '200 kW max charging slower than rivals']
            },
            {
              id: 'mercedes-benz-eqs-v297-eqs580',
              name: 'EQS 580 4MATIC',
              years: '2021–present',
              priceBand: '€95,000–€135,000 used',
              specs: {
                engine: 'Dual Electric Motors',
                powerHp: 523,
                powerKw: 385,
                torqueNm: 855,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.3,
                topSpeedKmh: 210,
                electricRangeKm: 700
              },
              dimensions: {
                lengthMm: 5216,
                widthMm: 1926,
                heightMm: 1512,
                wheelbaseMm: 3210,
                bootLitres: 610,
                weightKg: 2585
              },
              options: evComfort(['MBUX Hyperscreen', 'executive rear lounge', 'active ambient lighting 64-colour', 'Burmester 3D Surround', 'rear-axle steering 10 degrees']),
              knownFor: ['potent AWD electric performance', '700 km range with AWD', 'opulent interior possible', 'near-silent motorway cruising'],
              watchOut: ['extremely heavy at 2,585 kg', 'high depreciation', 'enormous price with options', 'charging speed limitation']
            }
          ]
        }
      ]
    }
  ]
};
