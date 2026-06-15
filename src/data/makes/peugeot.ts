import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const peugeot: CarMake = {
  id: 'peugeot',
  name: 'Peugeot',
  country: 'France',
  logoText: '🦁',
  models: [
    {
      id: '208',
      name: '208',
      segment: 'B-segment supermini',
      description: 'The 208 is Peugeot\'s award-winning supermini, renowned for its bold styling, class-leading i-Cockpit driver interface, and availability as both a petrol/diesel and fully electric e-208.',
      tags: ['supermini', 'city car', 'stylish', 'electric', 'efficient'],
      generations: [
        {
          id: '208-ii',
          name: '208 II',
          years: '2019–present',
          platform: 'CMP (EMP1)',
          bodyStyles: ['Hatchback'],
          summary: 'The second-generation 208 won European Car of the Year 2020 with its striking design, innovative i-Cockpit interior, and was the first 208 offered as a pure electric vehicle (e-208).',
          heroImage: '208-ii',
          variants: [
            {
              id: 'peugeot-208-ii-12-puretech-100',
              name: '1.2 PureTech 100 Allure',
              years: '2019–present',
              priceBand: '€12,000–€21,000 used/new',
              specs: {
                engine: '1.2 PureTech turbo petrol',
                engineCode: 'EB2ADTS',
                displacementCc: 1199,
                cylinders: 'Inline-3',
                powerHp: 100,
                powerKw: 74,
                torqueNm: 205,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.9,
                topSpeedKmh: 189,
                consumptionL100: 5.5,
                co2Gkm: 124
              },
              dimensions: {
                lengthMm: 4055,
                widthMm: 1745,
                heightMm: 1430,
                wheelbaseMm: 2538,
                bootLitres: 311,
                weightKg: 1107,
                tankLitres: 44
              },
              options: safetyComfort(['10" touchscreen', 'rear parking sensors', 'LED headlights']),
              knownFor: ['award-winning i-Cockpit design', 'punchy for displacement', 'comfortable ride', 'low running costs'],
              watchOut: ['timing belt replacement cost', 'small boot for class', 'i-Cockpit visibility can divide opinion', 'cabin plastic quality on base trims']
            },
            {
              id: 'peugeot-208-ii-15-bluehdi-100',
              name: '1.5 BlueHDi 100 Active',
              years: '2019–present',
              priceBand: '€11,500–€20,000 used/new',
              specs: {
                engine: '1.5 BlueHDi diesel',
                engineCode: 'DV5RD',
                displacementCc: 1499,
                cylinders: 'Inline-4',
                powerHp: 100,
                powerKw: 74,
                torqueNm: 250,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.2,
                topSpeedKmh: 185,
                consumptionL100: 3.8,
                co2Gkm: 99
              },
              dimensions: {
                lengthMm: 4055,
                widthMm: 1745,
                heightMm: 1430,
                wheelbaseMm: 2538,
                bootLitres: 311,
                weightKg: 1198,
                tankLitres: 44
              },
              options: safetyComfort(['8" touchscreen', 'cruise control', 'rear sensors']),
              knownFor: ['exceptional real-world economy', 'strong diesel torque', 'low CO2 for tax savings', 'good long-distance comfort'],
              watchOut: ['DPF needs regular motorway runs', 'EGR valve carbon buildup', 'heavier feel than petrol', 'limited city appeal vs e-208']
            },
            {
              id: 'peugeot-208-ii-e208-136',
              name: 'e-208 GT 136',
              years: '2019–present',
              priceBand: '€18,000–€32,000 used/new',
              specs: {
                engine: 'Electric motor 136 hp',
                displacementCc: 0,
                powerHp: 136,
                powerKw: 100,
                torqueNm: 260,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.1,
                topSpeedKmh: 150,
                consumptionL100: 0,
                electricRangeKm: 362,
                co2Gkm: 0
              },
              dimensions: {
                lengthMm: 4055,
                widthMm: 1745,
                heightMm: 1430,
                wheelbaseMm: 2538,
                bootLitres: 311,
                weightKg: 1530,
                tankLitres: 0
              },
              options: evComfort(['heat pump', 'vehicle-to-load prep']),
              knownFor: ['excellent urban EV range', 'immediate torque delivery', 'low running costs', 'cohesive i-Cockpit EV experience'],
              watchOut: ['reduced real range in cold weather', 'slower DC charging vs rivals', 'heavier weight affects cornering', 'charge point network dependency']
            }
          ]
        }
      ]
    },
    {
      id: '308',
      name: '308',
      segment: 'C-segment hatchback',
      description: 'A staple of European family motoring, the 308 competes in the competitive C-segment with strong safety scores, efficient engines, and an upscale Peugeot i-Cockpit cabin.',
      tags: ['hatchback', 'family', 'safe', 'efficient', 'practical'],
      generations: [
        {
          id: '308-ii',
          name: '308 II',
          years: '2013–2021',
          platform: 'EMP2',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'Euro NCAP 5-star and multiple Car of the Year awards defined the 308 II era. It introduced the acclaimed i-Cockpit layout and the frugal 1.5 BlueHDi engine range.',
          heroImage: '308-ii',
          variants: [
            {
              id: 'peugeot-308-ii-15-bluehdi-130',
              name: '1.5 BlueHDi 130 GT Line',
              years: '2017–2021',
              priceBand: '€10,000–€19,000 used',
              specs: {
                engine: '1.5 BlueHDi diesel',
                engineCode: 'DV5RC',
                displacementCc: 1499,
                cylinders: 'Inline-4',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 300,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.7,
                topSpeedKmh: 209,
                consumptionL100: 4.3,
                co2Gkm: 113
              },
              dimensions: {
                lengthMm: 4253,
                widthMm: 1804,
                heightMm: 1456,
                wheelbaseMm: 2620,
                bootLitres: 470,
                weightKg: 1351,
                tankLitres: 53
              },
              options: safetyComfort(['9.7" capacitive touchscreen', 'full LED headlights', 'lane keeping assist']),
              knownFor: ['generous boot space', 'refined motorway cruiser', 'strong diesel performance', 'premium feel for price'],
              watchOut: ['EGR valve fouling', 'DPF clogs in short-journey use', 'some suspension noise on high mileage', 'touchscreen response can lag']
            }
          ]
        },
        {
          id: '308-iii',
          name: '308 III',
          years: '2021–present',
          platform: 'EMP2 evolved',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The third-generation 308 brought a completely new exterior with hidden door handles, a dramatic panoramic i-Cockpit interior, plug-in hybrid powertrains, and strong Euro NCAP scores.',
          heroImage: '308-iii',
          variants: [
            {
              id: 'peugeot-308-iii-12-puretech-130',
              name: '1.2 PureTech 130 Allure',
              years: '2021–present',
              priceBand: '€18,000–€28,000 used/new',
              specs: {
                engine: '1.2 PureTech turbo petrol',
                engineCode: 'EB2ADTS',
                displacementCc: 1199,
                cylinders: 'Inline-3',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 230,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 9.4,
                topSpeedKmh: 207,
                consumptionL100: 6.1,
                co2Gkm: 140
              },
              dimensions: {
                lengthMm: 4362,
                widthMm: 1852,
                heightMm: 1444,
                wheelbaseMm: 2675,
                bootLitres: 412,
                weightKg: 1358,
                tankLitres: 54
              },
              options: safetyComfort(['10" panoramic i-Cockpit', 'night vision prep', 'adaptive LED matrix lights']),
              knownFor: ['dramatic hidden-handle styling', 'class-leading interior design', 'smooth 8-speed auto', 'strong safety package'],
              watchOut: ['timing belt service interval critical', 'some reports of PureTech oil consumption', 'touchscreen blocks most controls', 'stiff ride on 18" wheels']
            }
          ]
        }
      ]
    },
    {
      id: '2008',
      name: '2008',
      segment: 'B-segment crossover SUV',
      description: 'The 2008 is Peugeot\'s popular small SUV, sharing the 208\'s platform but with a raised body, larger boot, and available as an electric e-2008 with identical range to the e-208.',
      tags: ['crossover', 'SUV', 'city', 'electric', 'stylish'],
      generations: [
        {
          id: '2008-ii',
          name: '2008 II',
          years: '2019–present',
          platform: 'CMP (EMP1)',
          bodyStyles: ['SUV'],
          summary: 'The second 2008 generation debuted on the new CMP platform and adopted the dramatic lion-claw exterior design language alongside the full i-Cockpit interior layout.',
          heroImage: '2008-ii',
          variants: [
            {
              id: 'peugeot-2008-ii-12-puretech-130',
              name: '1.2 PureTech 130 Allure',
              years: '2019–present',
              priceBand: '€16,000–€26,000 used/new',
              specs: {
                engine: '1.2 PureTech turbo petrol',
                engineCode: 'EB2ADTS',
                displacementCc: 1199,
                cylinders: 'Inline-3',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 230,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 9.3,
                topSpeedKmh: 205,
                consumptionL100: 6.2,
                co2Gkm: 141
              },
              dimensions: {
                lengthMm: 4300,
                widthMm: 1770,
                heightMm: 1550,
                wheelbaseMm: 2605,
                bootLitres: 434,
                weightKg: 1265,
                tankLitres: 44
              },
              options: safetyComfort(['10" touchscreen', 'rear camera', 'full LED headlamps']),
              knownFor: ['stylish interior design', 'comfortable raised ride height', 'good boot capacity', 'refined 8-speed auto'],
              watchOut: ['timing belt intervals must be respected', 'PureTech can consume oil', 'no AWD option', 'small rear windows limit visibility']
            }
          ]
        }
      ]
    },
    {
      id: '3008',
      name: '3008',
      segment: 'C-segment crossover SUV',
      description: 'The 3008 is one of Peugeot\'s most successful models globally, offering a genuinely premium feel, spacious interior, and efficient hybrid powertrains in a bold SUV package.',
      tags: ['SUV', 'family', 'premium', 'hybrid', 'spacious'],
      generations: [
        {
          id: '3008-ii',
          name: '3008 II',
          years: '2016–present',
          platform: 'EMP2',
          bodyStyles: ['SUV'],
          summary: 'European Car of the Year 2017, the 3008 II redefined the family SUV segment with its truly premium interior, strong safety tech, and a range of efficient engines including plug-in hybrid.',
          heroImage: '3008-ii',
          variants: [
            {
              id: 'peugeot-3008-ii-15-bluehdi-130',
              name: '1.5 BlueHDi 130 Active',
              years: '2016–present',
              priceBand: '€15,000–€27,000 used',
              specs: {
                engine: '1.5 BlueHDi diesel',
                engineCode: 'DV5RC',
                displacementCc: 1499,
                cylinders: 'Inline-4',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 300,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.3,
                topSpeedKmh: 200,
                consumptionL100: 4.8,
                co2Gkm: 126
              },
              dimensions: {
                lengthMm: 4447,
                widthMm: 1841,
                heightMm: 1624,
                wheelbaseMm: 2675,
                bootLitres: 520,
                weightKg: 1476,
                tankLitres: 53
              },
              options: safetyComfort(['8" touchscreen', 'rear camera', 'grip control', 'roof rails']),
              knownFor: ['genuinely premium cabin', 'excellent boot space', 'comfortable long-distance ride', 'strong used value retention'],
              watchOut: ['DPF issues in urban use', 'EGR fouling at high mileage', 'infotainment can be laggy', 'limited ground clearance for off-road']
            },
            {
              id: 'peugeot-3008-ii-16-hybrid-225',
              name: '1.6 Hybrid 225 e-EAT8',
              years: '2019–present',
              priceBand: '€22,000–€38,000 used/new',
              specs: {
                engine: '1.6 PureTech + 110 kW electric motor',
                engineCode: 'EP6FDTX',
                displacementCc: 1598,
                cylinders: 'Inline-4',
                powerHp: 225,
                powerKw: 165,
                torqueNm: 360,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 7.6,
                topSpeedKmh: 225,
                consumptionL100: 1.5,
                electricRangeKm: 58,
                co2Gkm: 34
              },
              dimensions: {
                lengthMm: 4447,
                widthMm: 1841,
                heightMm: 1624,
                wheelbaseMm: 2675,
                bootLitres: 395,
                weightKg: 1845,
                tankLitres: 43
              },
              options: safetyComfort(['adaptive cruise control', 'night vision camera', 'panoramic roof', 'Focal premium audio']),
              knownFor: ['low company-car tax rating', 'strong performance', 'electric-only urban commuting', 'premium feel throughout'],
              watchOut: ['reduced boot vs diesel (battery under floor)', 'heavier weight affects dynamics', 'high purchase price', 'battery range degrades over years']
            }
          ]
        }
      ]
    }
  ]
};
