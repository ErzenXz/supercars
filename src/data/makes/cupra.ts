import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const cupra: CarMake = {
  id: 'cupra',
  name: 'Cupra',
  country: 'Spain',
  logoText: '▲',
  models: [
    {
      id: 'formentor',
      name: 'Formentor',
      segment: 'Compact SUV Coupé / C-SUV',
      description: 'The Formentor was Cupra\'s first model designed independently from the start, rather than being a rebadged SEAT. It combines coupé SUV styling with performance-oriented engines up to 310 hp, and was positioned as the brand\'s halo product at launch.',
      tags: ['performance', 'SUV-coupe', 'sporty', 'turbo', 'all-wheel-drive'],
      generations: [
        {
          id: 'formentor-mk1',
          name: 'Formentor Mk1',
          years: '2020–present',
          platform: 'VW Group MQB Evo',
          bodyStyles: ['SUV'],
          summary: 'Launched as Cupra\'s debut standalone model, the Formentor offers a range of TSI petrol engines from 150 hp to 310 hp, with the flagship VZ5 sharing its 2.5 TSI five-cylinder with the Audi RS3. The 2.0 TSI 310 4Drive is the performance sweet spot.',
          heroImage: 'formentor-mk1',
          variants: [
            {
              id: 'cupra-formentor-mk1-20-tsi-310-4drive',
              name: '2.0 TSI 310 VZ 4Drive DSG',
              years: '2021–present',
              priceBand: '€28,000–€48,000 used',
              specs: {
                engine: '2.0 TSI',
                engineCode: 'DKZ family',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 310,
                powerKw: 228,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 250,
                consumptionL100: 8.6,
                co2Gkm: 196
              },
              dimensions: {
                lengthMm: 4450,
                widthMm: 1873,
                heightMm: 1511,
                wheelbaseMm: 2686,
                bootLitres: 420,
                weightKg: 1670,
                tankLitres: 55
              },
              options: safetyComfort(['Akrapovic exhaust', 'Brembo brakes', 'DCC adaptive suspension', 'augmented-reality HUD']),
              knownFor: ['supercar-rivalling acceleration for the class', 'Akrapovic exhaust note', 'distinctive Cupra copper styling', 'practical SUV-coupé packaging'],
              watchOut: ['high CO2 and road tax band', 'DSG DQ381 service cost', 'Haldex AWD service interval', 'fuel costs at performance pace']
            },
            {
              id: 'cupra-formentor-mk1-15-tsi-150',
              name: '1.5 TSI 150 DSG',
              years: '2020–present',
              priceBand: '€20,000–€33,000 used',
              specs: {
                engine: '1.5 TSI evo2',
                engineCode: 'DPCA family',
                displacementCc: 1498,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 250,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.3,
                topSpeedKmh: 218,
                consumptionL100: 6.1,
                co2Gkm: 138
              },
              dimensions: {
                lengthMm: 4450,
                widthMm: 1873,
                heightMm: 1511,
                wheelbaseMm: 2686,
                bootLitres: 420,
                weightKg: 1435,
                tankLitres: 55
              },
              options: safetyComfort(['Cupra drive profile', 'full LED matrix headlights', 'wireless CarPlay']),
              knownFor: ['entry-level Cupra pricing', 'distinctive copper badge styling', 'comfortable everyday SUV', 'sharp infotainment system'],
              watchOut: ['performance gap versus VZ variants', 'cylinder deactivation shudder', 'smaller wheel options less imposing', 'check DSG fluid service']
            }
          ]
        }
      ]
    },
    {
      id: 'leon-cupra',
      name: 'Leon',
      segment: 'Compact / C-segment performance',
      description: 'The Cupra Leon represents the performance variant of the SEAT Leon Mk4, spun off into the Cupra brand following SEAT\'s decision to elevate Cupra to a standalone marque in 2018. The VZ specification targets the Golf GTI and Honda Civic Type R market.',
      tags: ['hot-hatch', 'performance', 'sporty', 'turbo', 'practical'],
      generations: [
        {
          id: 'leon-cupra-mk4',
          name: 'Cupra Leon Mk4 (KL)',
          years: '2020–present',
          platform: 'VW Group MQB Evo',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The Cupra Leon on the MQB Evo platform is offered as a hatchback and Sportstourer estate. The 2.0 TSI engine in 300 hp VZ specification uses the DQ381 DSG and optional 4Drive AWD, positioning it against the Golf R in terms of performance but with a sportier aesthetic.',
          heroImage: 'leon-cupra-mk4',
          variants: [
            {
              id: 'cupra-leon-mk4-vz-20-tsi-300',
              name: '2.0 TSI VZ 300 DSG',
              years: '2021–present',
              priceBand: '€26,000–€42,000 used',
              specs: {
                engine: '2.0 TSI',
                engineCode: 'DKZ family',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 300,
                powerKw: 221,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 5.7,
                topSpeedKmh: 250,
                consumptionL100: 8.1,
                co2Gkm: 183
              },
              dimensions: {
                lengthMm: 4368,
                widthMm: 1799,
                heightMm: 1462,
                wheelbaseMm: 2686,
                bootLitres: 385,
                weightKg: 1529,
                tankLitres: 50
              },
              options: safetyComfort(['Cupra bucket seats', 'Akrapovic exhaust upgrade', 'Brembo front brakes', 'DCC adaptive suspension']),
              knownFor: ['exceptional front-wheel-drive performance', 'Akrapovic exhaust option', 'practical hot-hatch format', 'strong DSG launch control'],
              watchOut: ['torque steer under hard acceleration', 'DSG DQ381 service cost', 'front tyres wear quickly in sport mode', 'check for track-day use history']
            },
            {
              id: 'cupra-leon-mk4-vz-20-tsi-300-4drive',
              name: '2.0 TSI VZ 300 4Drive DSG',
              years: '2021–present',
              priceBand: '€29,000–€46,000 used',
              specs: {
                engine: '2.0 TSI 4Drive',
                engineCode: 'DKZ family',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 300,
                powerKw: 221,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 250,
                consumptionL100: 8.4,
                co2Gkm: 191
              },
              dimensions: {
                lengthMm: 4368,
                widthMm: 1799,
                heightMm: 1462,
                wheelbaseMm: 2686,
                bootLitres: 385,
                weightKg: 1590,
                tankLitres: 50
              },
              options: safetyComfort(['Cupra bucket seats', 'Brembo brakes', 'DCC adaptive suspension', 'head-up display']),
              knownFor: ['Golf R competitor at lower price', 'all-weather AWD performance', 'sub-5-second 0–100', 'Cupra brand exclusivity'],
              watchOut: ['Haldex AWD service interval', 'higher road tax CO2 band', 'heavy front axle weight', 'resale vs Golf R']
            }
          ]
        }
      ]
    },
    {
      id: 'born',
      name: 'Born',
      segment: 'Compact EV / C-segment electric',
      description: 'The Cupra Born is Cupra\'s first fully electric model, sharing its MEB platform with the VW ID.3. It differentiates itself with sportier styling, a lower stance, and Cupra-tuned chassis settings. Available with multiple battery sizes, the e-Boost versions offer up to 231 hp.',
      tags: ['electric', 'EV', 'performance', 'sporty', 'MEB'],
      generations: [
        {
          id: 'born-mk1',
          name: 'Born Mk1',
          years: '2021–present',
          platform: 'VW Group MEB',
          bodyStyles: ['Hatchback'],
          summary: 'Based on the VW MEB platform, the Born shares its underpinnings with the ID.3 but with sportier suspension tuning, copper accent styling, and Cupra-specific driving modes. The e-Boost button temporarily unlocks maximum power for overtaking or performance driving.',
          heroImage: 'born-mk1',
          variants: [
            {
              id: 'cupra-born-mk1-58kwh-204',
              name: '58 kWh e-Boost 204 hp',
              years: '2021–present',
              priceBand: '€22,000–€35,000 used',
              specs: {
                engine: 'Single rear electric motor',
                displacementCc: undefined,
                cylinders: undefined,
                powerHp: 204,
                powerKw: 150,
                torqueNm: 310,
                fuel: 'Electric',
                gearbox: 'Automatic',
                gears: 1,
                drive: 'RWD',
                acceleration0100: 6.6,
                topSpeedKmh: 160,
                electricRangeKm: 424,
                co2Gkm: 0
              },
              dimensions: {
                lengthMm: 4322,
                widthMm: 1809,
                heightMm: 1439,
                wheelbaseMm: 2765,
                bootLitres: 385,
                weightKg: 1825,
                tankLitres: undefined
              },
              options: evComfort(['augmented-reality head-up display', 'Cupra copper interior accents', 'travel assist']),
              knownFor: ['sporty EV alternative to ID.3', 'e-Boost performance mode', 'rear-wheel-drive handling balance', 'distinctive Cupra styling'],
              watchOut: ['slower AC charging speed vs competitors', 'no heat pump standard on all trims', 'OTA updates required for best performance', '130 kW DC charging cap lower than some rivals']
            }
          ]
        }
      ]
    }
  ]
};
