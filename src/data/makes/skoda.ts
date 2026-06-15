import type { CarMake } from '../../types';
import { safetyComfort } from '../_shared';

export const skoda: CarMake = {
  id: 'skoda',
  name: 'Škoda',
  country: 'Czechia',
  logoText: '✦',
  models: [
    {
      id: 'octavia',
      name: 'Octavia',
      segment: 'Compact / D-segment',
      description: 'The Octavia is Škoda\'s best-selling model and one of Europe\'s most practical family cars, consistently praised for its enormous boot, spacious rear cabin, and value-for-money positioning within the VW Group.',
      tags: ['practical', 'family', 'efficient', 'spacious-boot', 'value'],
      generations: [
        {
          id: 'octavia-mk3',
          name: 'Octavia Mk3 (5E)',
          years: '2013–2020',
          platform: 'VW Group MQB A5',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'Third-generation Octavia on the MQB platform brought a larger body, significantly improved refinement, and a wide range of efficient TSI and TDI engines. The estate version offered one of the largest boots in its class.',
          heroImage: 'octavia-mk3',
          variants: [
            {
              id: 'skoda-octavia-mk3-16-tdi-115',
              name: '1.6 TDI 115 Ambition',
              years: '2013–2020',
              priceBand: '€7,500–€16,000 used',
              specs: {
                engine: '1.6 TDI',
                engineCode: 'DDYA / CRKB family',
                displacementCc: 1598,
                cylinders: 'Inline-4',
                powerHp: 115,
                powerKw: 85,
                torqueNm: 250,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.1,
                topSpeedKmh: 203,
                consumptionL100: 4.1,
                co2Gkm: 108
              },
              dimensions: {
                lengthMm: 4670,
                widthMm: 1814,
                heightMm: 1461,
                wheelbaseMm: 2686,
                bootLitres: 590,
                weightKg: 1352,
                tankLitres: 50
              },
              options: safetyComfort(['Škoda Connect telematics']),
              knownFor: ['exceptional fuel economy', 'huge hatchback boot', 'reliable EA288 diesel', 'strong used-car value'],
              watchOut: ['DPF blockage on short urban trips', 'EGR valve deposits', 'DSG service if automatic', 'timing belt at 200k km']
            },
            {
              id: 'skoda-octavia-mk3-rs-20-tdi-184',
              name: 'Octavia RS 2.0 TDI 184 DSG',
              years: '2015–2020',
              priceBand: '€12,000–€22,000 used',
              specs: {
                engine: '2.0 TDI RS',
                engineCode: 'CUNA family',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 184,
                powerKw: 135,
                torqueNm: 380,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 7.5,
                topSpeedKmh: 235,
                consumptionL100: 5.1,
                co2Gkm: 134
              },
              dimensions: {
                lengthMm: 4670,
                widthMm: 1814,
                heightMm: 1450,
                wheelbaseMm: 2686,
                bootLitres: 590,
                weightKg: 1467,
                tankLitres: 50
              },
              options: safetyComfort(['RS sport seats', 'DCC adaptive suspension', 'Canton sound system']),
              knownFor: ['hot-hatch practicality', 'strong diesel performance', 'RS sport seats', 'understated RS badge'],
              watchOut: ['DSG DQ250 clutch wear', 'DPF/AdBlue maintenance', 'depreciation less than Golf GTI', 'brake dust from performance pads']
            }
          ]
        },
        {
          id: 'octavia-mk4',
          name: 'Octavia Mk4 (NX)',
          years: '2020–present',
          platform: 'VW Group MQB Evo',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The fourth-generation Octavia brought a redesigned interior with a new infotainment architecture, mild-hybrid options, and an even larger boot. The RS retained the performance mantle with petrol and diesel options.',
          heroImage: 'octavia-mk4',
          variants: [
            {
              id: 'skoda-octavia-mk4-15-tsi-150',
              name: '1.5 TSI 150 Style',
              years: '2020–present',
              priceBand: '€16,000–€29,000 used',
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
                acceleration0100: 8.0,
                topSpeedKmh: 224,
                consumptionL100: 5.5,
                co2Gkm: 124
              },
              dimensions: {
                lengthMm: 4689,
                widthMm: 1829,
                heightMm: 1470,
                wheelbaseMm: 2686,
                bootLitres: 600,
                weightKg: 1402,
                tankLitres: 45
              },
              options: safetyComfort(['Travel Assist', 'Canton sound', 'Virtual Cockpit Pro']),
              knownFor: ['600 L boot class-leading', 'smooth 7-speed DSG', 'comfortable long-distance touring', 'Simply Clever storage'],
              watchOut: ['cylinder deactivation occasional roughness', 'infotainment software bugs early builds', 'water pump on EA211 evo2', 'limited rear legroom vs wagon']
            },
            {
              id: 'skoda-octavia-mk4-20-tdi-150',
              name: '2.0 TDI 150 Style DSG',
              years: '2020–present',
              priceBand: '€19,000–€31,000 used',
              specs: {
                engine: '2.0 TDI',
                engineCode: 'DFG family',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 360,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.7,
                topSpeedKmh: 224,
                consumptionL100: 4.6,
                co2Gkm: 120
              },
              dimensions: {
                lengthMm: 4689,
                widthMm: 1829,
                heightMm: 1470,
                wheelbaseMm: 2686,
                bootLitres: 600,
                weightKg: 1471,
                tankLitres: 45
              },
              options: safetyComfort(['Travel Assist', 'Canton sound']),
              knownFor: ['huge boot for the class', 'efficient diesel', 'practical family car', 'strong resale value'],
              watchOut: ['DSG service history', 'DPF/AdBlue on diesels', 'infotainment software', 'water pump on EA288']
            }
          ]
        }
      ]
    },
    {
      id: 'superb',
      name: 'Superb',
      segment: 'Large / E-segment',
      description: 'The Superb is Škoda\'s flagship saloon and estate, offering near-limousine rear-seat space and a vast boot at a significantly lower price than premium German rivals. It sits on the MQB platform and shares engines with Passat.',
      tags: ['flagship', 'spacious', 'executive', 'long-distance', 'diesel'],
      generations: [
        {
          id: 'superb-b8',
          name: 'Superb B8 / III',
          years: '2015–present',
          platform: 'VW Group MQB A6',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'The third-generation Superb grew in every dimension versus the B6, with a class-defying rear cabin, 625 L boot in saloon form, and a comprehensive infotainment system. The 2.0 TDI became the fleet best-seller across Europe.',
          heroImage: 'superb-b8',
          variants: [
            {
              id: 'skoda-superb-b8-20-tdi-190',
              name: '2.0 TDI 190 Style DSG',
              years: '2015–present',
              priceBand: '€12,000–€34,000 used',
              specs: {
                engine: '2.0 TDI',
                engineCode: 'DFGA family',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 190,
                powerKw: 140,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 7.4,
                topSpeedKmh: 240,
                consumptionL100: 5.0,
                co2Gkm: 130
              },
              dimensions: {
                lengthMm: 4861,
                widthMm: 1864,
                heightMm: 1468,
                wheelbaseMm: 2841,
                bootLitres: 625,
                weightKg: 1592,
                tankLitres: 66
              },
              options: safetyComfort(['Head-up display', 'Canton sound', 'panoramic roof', 'adaptive cruise']),
              knownFor: ['near-limousine rear space', 'very large boot', 'refined motorway cruiser', 'premium feel at lower price'],
              watchOut: ['AdBlue consumption on higher-mileage examples', 'DSG oil service interval', 'front suspension wear by 150k km', 'facelift 2019 for revised infotainment']
            },
            {
              id: 'skoda-superb-b8-20-tdi-190-4x4',
              name: '2.0 TDI 190 Scout 4x4 DSG',
              years: '2017–present',
              priceBand: '€14,500–€36,000 used',
              specs: {
                engine: '2.0 TDI',
                engineCode: 'DFGA family',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 190,
                powerKw: 140,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: '4x4',
                acceleration0100: 7.8,
                topSpeedKmh: 237,
                consumptionL100: 5.5,
                co2Gkm: 143
              },
              dimensions: {
                lengthMm: 4869,
                widthMm: 1864,
                heightMm: 1499,
                wheelbaseMm: 2841,
                bootLitres: 620,
                weightKg: 1748,
                tankLitres: 66
              },
              options: safetyComfort(['Scout off-road mode', 'adaptive chassis', 'trailer assist']),
              knownFor: ['all-weather family estate', 'Scout raised ride height', 'strong 4x4 traction', 'estate practicality'],
              watchOut: ['Haldex 4x4 service every 60k km', 'higher fuel consumption vs FWD', 'AdBlue topping up', 'heavier steering feel']
            }
          ]
        }
      ]
    },
    {
      id: 'fabia',
      name: 'Fabia',
      segment: 'Supermini / B-segment',
      description: 'The Fabia is Škoda\'s entry-level supermini, grown considerably in its fourth generation to offer near-Golf interior space. The Mk4 moved to the MQB-A0 platform shared with the Polo and Ibiza.',
      tags: ['supermini', 'city', 'efficient', 'value', 'practical'],
      generations: [
        {
          id: 'fabia-mk4',
          name: 'Fabia Mk4',
          years: '2021–present',
          platform: 'VW Group MQB-A0',
          bodyStyles: ['Hatchback'],
          summary: 'The fourth-generation Fabia grew significantly on the MQB-A0 platform, now matching older-generation Golf dimensions in wheelbase. Only offered as a hatchback, it dropped the estate variant. Engines are exclusively TSI petrols.',
          heroImage: 'fabia-mk4',
          variants: [
            {
              id: 'skoda-fabia-mk4-10-tsi-95',
              name: '1.0 TSI 95 Ambition',
              years: '2021–present',
              priceBand: '€12,000–€20,000 used',
              specs: {
                engine: '1.0 TSI',
                engineCode: 'DLAC family',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 95,
                powerKw: 70,
                torqueNm: 175,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 5,
                drive: 'FWD',
                acceleration0100: 11.6,
                topSpeedKmh: 183,
                consumptionL100: 5.0,
                co2Gkm: 113
              },
              dimensions: {
                lengthMm: 4108,
                widthMm: 1780,
                heightMm: 1459,
                wheelbaseMm: 2564,
                bootLitres: 380,
                weightKg: 1175,
                tankLitres: 40
              },
              options: safetyComfort(['LED headlights', 'rear parking sensors']),
              knownFor: ['grown-up supermini dimensions', 'frugal three-cylinder', 'good standard safety kit', 'Simply Clever storage details'],
              watchOut: ['three-cylinder vibration at low revs', 'no diesel option in Mk4', 'infotainment screen size on base trim', 'rear visibility limited']
            }
          ]
        }
      ]
    },
    {
      id: 'kodiaq',
      name: 'Kodiaq',
      segment: 'Large SUV / D-SUV',
      description: 'The Kodiaq is Škoda\'s large seven-seat SUV, sharing the MQB platform with the VW Tiguan Allspace. It offers optional third-row seating and a vast boot, making it one of the most practical SUVs in its segment.',
      tags: ['SUV', 'seven-seat', 'family', 'practical', 'diesel'],
      generations: [
        {
          id: 'kodiaq-ns7',
          name: 'Kodiaq (NS7 / Mk1)',
          years: '2017–present',
          platform: 'VW Group MQB A5',
          bodyStyles: ['SUV'],
          summary: 'Škoda\'s first proper large SUV delivered on the brand\'s value promise with optional seven seats, a 720 L boot in five-seat mode, and a wide engine choice. The 2.0 TDI with 4x4 became the preferred configuration for families and fleet buyers.',
          heroImage: 'kodiaq-ns7',
          variants: [
            {
              id: 'skoda-kodiaq-ns7-20-tdi-150-fwd',
              name: '2.0 TDI 150 Style',
              years: '2017–present',
              priceBand: '€14,000–€34,000 used',
              specs: {
                engine: '2.0 TDI',
                engineCode: 'DGTE / DDAA family',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 340,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.7,
                topSpeedKmh: 199,
                consumptionL100: 5.3,
                co2Gkm: 140
              },
              dimensions: {
                lengthMm: 4697,
                widthMm: 1882,
                heightMm: 1676,
                wheelbaseMm: 2791,
                bootLitres: 720,
                weightKg: 1693,
                tankLitres: 58
              },
              options: safetyComfort(['roof rails', 'trailer assist', 'third-row seat option']),
              knownFor: ['720 L five-seat boot', 'optional seven seats', 'very practical family SUV', 'competitive fleet pricing'],
              watchOut: ['DPF blockage on short runs', 'seven-seat option cramped for adults', 'DSG service intervals', 'AdBlue consumption']
            },
            {
              id: 'skoda-kodiaq-ns7-20-tdi-190-4x4',
              name: '2.0 TDI 190 SportLine 4x4 DSG',
              years: '2017–present',
              priceBand: '€18,000–€40,000 used',
              specs: {
                engine: '2.0 TDI 4x4',
                engineCode: 'DFHA family',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 190,
                powerKw: 140,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: '4x4',
                acceleration0100: 7.8,
                topSpeedKmh: 210,
                consumptionL100: 6.2,
                co2Gkm: 163
              },
              dimensions: {
                lengthMm: 4697,
                widthMm: 1882,
                heightMm: 1676,
                wheelbaseMm: 2791,
                bootLitres: 720,
                weightKg: 1855,
                tankLitres: 58
              },
              options: safetyComfort(['SportLine body kit', 'adaptive DCC suspension', 'Canton sound', 'head-up display']),
              knownFor: ['strong 4x4 traction in all weather', 'powerful diesel for the class', 'SportLine sportier styling', 'towing up to 2,500 kg'],
              watchOut: ['Haldex 4x4 unit service', 'higher road tax due to CO2', 'fuel costs on longer motorway runs', 'heavier feel vs FWD']
            }
          ]
        }
      ]
    }
  ]
};
