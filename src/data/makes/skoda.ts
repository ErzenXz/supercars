import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const skoda: CarMake = {
  id: 'skoda',
  name: 'Škoda',
  country: 'Czechia',
  logoText: '✦',
  models: [
    {
      id: 'fabia',
      name: 'Fabia',
      segment: 'Supermini / B-segment',
      description: 'The Fabia is Škoda\'s entry-level supermini, grown considerably in its fourth generation to offer near-Golf interior space. The Mk4 moved to the MQB-A0 platform shared with the Polo and Ibiza, and dropped the estate variant entirely.',
      tags: ['supermini', 'city', 'efficient', 'value', 'practical'],
      generations: [
        {
          id: 'fabia-mk4',
          name: 'Fabia Mk4',
          years: '2021–present',
          platform: 'VW Group MQB-A0',
          bodyStyles: ['Hatchback'],
          summary: 'The fourth-generation Fabia grew significantly on the MQB-A0 platform, now matching older-generation Golf dimensions in wheelbase. Only offered as a hatchback, it dropped the estate variant. Engines are exclusively TSI petrols. The interior quality took a major step forward.',
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
              watchOut: ['three-cylinder vibration at low revs', 'no diesel option in Mk4', 'infotainment screen size on base trim', 'limited rear visibility']
            }
          ]
        }
      ]
    },
    {
      id: 'scala',
      name: 'Scala',
      segment: 'Compact / C-segment hatchback',
      description: 'The Škoda Scala is a practical compact hatchback positioned between the Fabia and Octavia. Built on MQB-A0 in a longer body, it offers near-Golf space in a more affordable and stylish package. It targets young buyers who want a grown-up hatchback without the Octavia price.',
      tags: ['hatchback', 'practical', 'value', 'compact', 'youthful'],
      generations: [
        {
          id: 'scala-mk1',
          name: 'Scala Mk1',
          years: '2019–present',
          platform: 'VW Group MQB-A0',
          bodyStyles: ['Hatchback'],
          summary: 'The Scala arrived as Škoda\'s replacement for the Rapid, with a longer wheelbase and more style. It uses an extended MQB-A0 platform and offers 467 L of boot space, beating many cars one segment up. A 2024 facelift added revised styling and updated infotainment.',
          heroImage: 'scala-mk1',
          variants: [
            {
              id: 'skoda-scala-mk1-10-tsi-95',
              name: '1.0 TSI 95 Ambition',
              years: '2019–present',
              priceBand: '€11,000–€19,000 used',
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
                acceleration0100: 11.8,
                topSpeedKmh: 181,
                consumptionL100: 5.2,
                co2Gkm: 118
              },
              dimensions: {
                lengthMm: 4362,
                widthMm: 1793,
                heightMm: 1471,
                wheelbaseMm: 2649,
                bootLitres: 467,
                weightKg: 1280,
                tankLitres: 50
              },
              options: safetyComfort(['rear parking sensors', 'LED headlights', 'digital cockpit']),
              knownFor: ['467 L boot for the segment', 'practical daily commuter', 'good safety rating', 'affordable to run'],
              watchOut: ['three-cylinder vibration', 'underpowered on motorway', 'no AWD available', 'interior not as premium as Octavia']
            },
            {
              id: 'skoda-scala-mk1-15-tsi-150',
              name: '1.5 TSI 150 Style DSG',
              years: '2019–present',
              priceBand: '€14,000–€24,000 used',
              specs: {
                engine: '1.5 TSI evo',
                engineCode: 'DADA family',
                displacementCc: 1498,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 250,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.4,
                topSpeedKmh: 220,
                consumptionL100: 6.0,
                co2Gkm: 137
              },
              dimensions: {
                lengthMm: 4362,
                widthMm: 1793,
                heightMm: 1471,
                wheelbaseMm: 2649,
                bootLitres: 467,
                weightKg: 1325,
                tankLitres: 50
              },
              options: safetyComfort(['digital cockpit pro', 'full LED matrix headlights', 'wireless CarPlay']),
              knownFor: ['strong 150 hp petrol', 'smooth DSG gearbox', 'big boot vs class', 'feels punchy for the size'],
              watchOut: ['cylinder deactivation occasional roughness', 'no Octavia interior quality', 'limited rear headroom for tall occupants', 'check DSG service history']
            }
          ]
        }
      ]
    },
    {
      id: 'kamiq',
      name: 'Kamiq',
      segment: 'Subcompact SUV / B-SUV',
      description: 'The Kamiq is Škoda\'s entry-level SUV, based on the MQB-A0 platform and positioned below the Karoq. It targets urban buyers wanting SUV styling and a higher seating position without the size or cost of a larger crossover.',
      tags: ['SUV', 'city', 'compact', 'efficient', 'B-segment'],
      generations: [
        {
          id: 'kamiq-mk1',
          name: 'Kamiq Mk1',
          years: '2019–present',
          platform: 'VW Group MQB-A0',
          bodyStyles: ['SUV'],
          summary: 'The Kamiq arrived as Škoda\'s B-segment SUV to fill the gap below the Karoq. It shares the MQB-A0 platform with the Arona and T-Cross. An extended wheelbase gives it a genuinely spacious interior for the size, with 400 L of boot space. A 2024 facelift updated the lighting and infotainment.',
          heroImage: 'kamiq-mk1',
          variants: [
            {
              id: 'skoda-kamiq-mk1-10-tsi-110',
              name: '1.0 TSI 110 Style DSG',
              years: '2019–present',
              priceBand: '€13,000–€23,000 used',
              specs: {
                engine: '1.0 TSI',
                engineCode: 'CHZL family',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 110,
                powerKw: 81,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 10.3,
                topSpeedKmh: 193,
                consumptionL100: 5.3,
                co2Gkm: 121
              },
              dimensions: {
                lengthMm: 4241,
                widthMm: 1793,
                heightMm: 1576,
                wheelbaseMm: 2651,
                bootLitres: 400,
                weightKg: 1275,
                tankLitres: 40
              },
              options: safetyComfort(['Simply Clever features', 'LED headlights', 'virtual cockpit']),
              knownFor: ['compact SUV with generous space', 'frugal three-cylinder engine', 'Simply Clever storage', 'good value for B-SUV segment'],
              watchOut: ['no AWD available', 'three-cylinder vibration', 'limited rear headroom for tall adults', 'DSG service required']
            }
          ]
        }
      ]
    },
    {
      id: 'octavia',
      name: 'Octavia',
      segment: 'Compact / C-D segment',
      description: 'The Octavia is Škoda\'s best-selling model and one of Europe\'s most practical family cars, consistently praised for its enormous boot, spacious rear cabin, and value-for-money positioning within the VW Group.',
      tags: ['practical', 'family', 'efficient', 'spacious-boot', 'value'],
      generations: [
        {
          id: 'octavia-mk3',
          name: 'Octavia Mk3 (5E)',
          years: '2013–2020',
          platform: 'VW Group MQB A5',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'Third-generation Octavia on the MQB platform brought a larger body, significantly improved refinement, and a wide range of efficient TSI and TDI engines. The estate (Combi) version offered one of the largest boots in its class at 610 L.',
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
          summary: 'The fourth-generation Octavia brought a redesigned interior with a new infotainment architecture, mild-hybrid options, and an even larger 600 L hatchback boot. The RS retained the performance mantle with petrol and diesel options. The Combi estate gains 640 L of cargo space.',
          heroImage: 'octavia-mk4',
          variants: [
            {
              id: 'skoda-octavia-mk4-15-tsi-150',
              name: '1.5 TSI 150 Style DSG',
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
              name: '2.0 TDI 150 Combi DSG',
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
                heightMm: 1480,
                wheelbaseMm: 2686,
                bootLitres: 640,
                weightKg: 1471,
                tankLitres: 45
              },
              options: safetyComfort(['Travel Assist', 'Canton sound', 'roof rails']),
              knownFor: ['640 L Combi estate boot', 'efficient diesel for long runs', 'practical family car', 'strong resale value'],
              watchOut: ['DSG service history', 'DPF/AdBlue on diesels', 'infotainment software', 'water pump on EA288']
            },
            {
              id: 'skoda-octavia-mk4-rs-20-tsi-245',
              name: 'Octavia RS 2.0 TSI 245 DSG',
              years: '2020–present',
              priceBand: '€23,000–€38,000 used',
              specs: {
                engine: '2.0 TSI RS',
                engineCode: 'DKZ family',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 245,
                powerKw: 180,
                torqueNm: 370,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 6.5,
                topSpeedKmh: 250,
                consumptionL100: 7.5,
                co2Gkm: 171
              },
              dimensions: {
                lengthMm: 4689,
                widthMm: 1829,
                heightMm: 1461,
                wheelbaseMm: 2686,
                bootLitres: 600,
                weightKg: 1497,
                tankLitres: 45
              },
              options: safetyComfort(['RS sport seats', 'DCC adaptive suspension', 'Canton audio', 'Brembo brakes option']),
              knownFor: ['245 hp hot-hatch performance', 'massive 600 L boot', 'understated RS aesthetics', 'superb everyday practicality'],
              watchOut: ['torque steer on wet roads', 'DSG DQ381 oil service schedule', 'front tyre wear in sport mode', 'check for track or hard use history']
            },
            {
              id: 'skoda-octavia-mk4-iv-phev-204',
              name: 'Octavia iV PHEV 204 DSG',
              years: '2020–present',
              priceBand: '€20,000–€33,000 used',
              specs: {
                engine: '1.4 TSI + 80 kW electric',
                engineCode: 'DGEA family',
                displacementCc: 1395,
                cylinders: 'Inline-4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 350,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 7.3,
                topSpeedKmh: 225,
                consumptionL100: 1.4,
                electricRangeKm: 60,
                co2Gkm: 32
              },
              dimensions: {
                lengthMm: 4689,
                widthMm: 1829,
                heightMm: 1470,
                wheelbaseMm: 2686,
                bootLitres: 490,
                weightKg: 1660,
                tankLitres: 40
              },
              options: safetyComfort(['charge port', 'virtual cockpit', 'Travel Assist', 'Canton sound']),
              knownFor: ['60 km EV range', 'low company car tax', 'strong combined performance', 'hatchback or Combi estate option'],
              watchOut: ['boot reduced to 490 L vs 600 L ICE', 'battery health on older cars', 'charging needed for stated economy', 'heavier than petrol Octavia']
            }
          ]
        }
      ]
    },
    {
      id: 'superb',
      name: 'Superb',
      segment: 'Large / E-segment',
      description: 'The Superb is Škoda\'s flagship saloon and estate, offering near-limousine rear-seat space and a vast boot at a significantly lower price than premium German rivals. It sits on the MQB platform and shares engines with the Passat.',
      tags: ['flagship', 'spacious', 'executive', 'long-distance', 'diesel'],
      generations: [
        {
          id: 'superb-b8',
          name: 'Superb B8 / III',
          years: '2015–present',
          platform: 'VW Group MQB A6',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'The third-generation Superb grew in every dimension versus the B6, with a class-defying rear cabin, 625 L boot in saloon form, and a comprehensive infotainment system. The 2.0 TDI became the fleet best-seller across Europe. A 2024 fourth-generation model moved to the new platform.',
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
              id: 'skoda-superb-b8-iv-phev-218',
              name: 'Superb iV PHEV 218 DSG Combi',
              years: '2019–present',
              priceBand: '€16,000–€36,000 used',
              specs: {
                engine: '1.4 TSI + 85 kW electric',
                engineCode: 'DGEA family',
                displacementCc: 1395,
                cylinders: 'Inline-4',
                powerHp: 218,
                powerKw: 160,
                torqueNm: 350,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 7.8,
                topSpeedKmh: 225,
                consumptionL100: 1.7,
                electricRangeKm: 58,
                co2Gkm: 40
              },
              dimensions: {
                lengthMm: 4869,
                widthMm: 1864,
                heightMm: 1474,
                wheelbaseMm: 2841,
                bootLitres: 485,
                weightKg: 1788,
                tankLitres: 45
              },
              options: safetyComfort(['Canton sound', 'panoramic roof', 'charge port', 'Canton sound upgrade']),
              knownFor: ['flagship size with PHEV economy', '58 km electric range for commuting', 'very low company car tax', 'spacious estate practicality'],
              watchOut: ['boot reduced to 485 L vs 660 L standard Combi', 'battery health on older examples', 'requires charging for economy', 'PHEV service complexity']
            }
          ]
        }
      ]
    },
    {
      id: 'karoq',
      name: 'Karoq',
      segment: 'Compact SUV / C-SUV',
      description: 'The Karoq is Škoda\'s compact SUV, replacing the Yeti from 2017. Built on the MQB A5 platform and closely related to the VW Tiguan and SEAT Ateca, it offers a larger boot than both, along with the VarioFlex rear seat system that allows each rear seat to be removed individually.',
      tags: ['SUV', 'compact', 'practical', 'family', 'VarioFlex'],
      generations: [
        {
          id: 'karoq-mk1',
          name: 'Karoq Mk1 (NU7)',
          years: '2017–present',
          platform: 'VW Group MQB A5',
          bodyStyles: ['SUV'],
          summary: 'The first-generation Karoq offered an impressive combination of boot space, VarioFlex flexible seating, and a wide engine range. The 1.5 TSI is the sweet spot for most buyers, while the 2.0 TDI with 4x4 covers those needing all-weather capability or towing.',
          heroImage: 'karoq-mk1',
          variants: [
            {
              id: 'skoda-karoq-mk1-15-tsi-150',
              name: '1.5 TSI 150 Style DSG',
              years: '2018–present',
              priceBand: '€14,000–€28,000 used',
              specs: {
                engine: '1.5 TSI evo',
                engineCode: 'DADA family',
                displacementCc: 1498,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 250,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.6,
                topSpeedKmh: 210,
                consumptionL100: 6.1,
                co2Gkm: 140
              },
              dimensions: {
                lengthMm: 4382,
                widthMm: 1841,
                heightMm: 1603,
                wheelbaseMm: 2638,
                bootLitres: 521,
                weightKg: 1437,
                tankLitres: 55
              },
              options: safetyComfort(['VarioFlex rear seats', 'virtual cockpit', 'Canton sound']),
              knownFor: ['VarioFlex individual rear seat removal', 'larger boot than Tiguan and Ateca', 'practical family SUV', 'Simply Clever details throughout'],
              watchOut: ['cylinder deactivation shudder', 'DSG service history', 'smaller than Kodiaq for seven seats', 'infotainment on pre-facelift cars']
            },
            {
              id: 'skoda-karoq-mk1-20-tdi-150-4x4',
              name: '2.0 TDI 150 Sportline 4x4 DSG',
              years: '2017–present',
              priceBand: '€17,000–€32,000 used',
              specs: {
                engine: '2.0 TDI',
                engineCode: 'DGTE family',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 340,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: '4x4',
                acceleration0100: 9.4,
                topSpeedKmh: 207,
                consumptionL100: 5.8,
                co2Gkm: 152
              },
              dimensions: {
                lengthMm: 4382,
                widthMm: 1841,
                heightMm: 1611,
                wheelbaseMm: 2638,
                bootLitres: 479,
                weightKg: 1617,
                tankLitres: 58
              },
              options: safetyComfort(['Sportline sport package', 'off-road mode', 'trailer prep', 'roof rails']),
              knownFor: ['all-weather 4x4 traction', 'efficient diesel for long haul', 'practical Sportline spec', 'strong towing capability'],
              watchOut: ['Haldex AWD service every 60k km', 'AdBlue diesel maintenance', 'DPF on urban cycles', 'boot reduced vs FWD due to diff']
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
          name: 'Kodiaq Mk1 (NS7)',
          years: '2017–2023',
          platform: 'VW Group MQB A5',
          bodyStyles: ['SUV'],
          summary: 'Škoda\'s first proper large SUV delivered on the brand\'s value promise with optional seven seats, a 720 L boot in five-seat mode, and a wide engine choice. The 2.0 TDI with 4x4 became the preferred configuration for families and fleet buyers.',
          heroImage: 'kodiaq-ns7',
          variants: [
            {
              id: 'skoda-kodiaq-ns7-20-tdi-150',
              name: '2.0 TDI 150 Style DSG',
              years: '2017–2023',
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
              id: 'skoda-kodiaq-ns7-rs-20-tsi-245',
              name: 'Kodiaq RS 2.0 TSI 245 4x4 DSG',
              years: '2019–2023',
              priceBand: '€22,000–€42,000 used',
              specs: {
                engine: '2.0 TSI RS',
                engineCode: 'DKZ family',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 245,
                powerKw: 180,
                torqueNm: 370,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: '4x4',
                acceleration0100: 6.7,
                topSpeedKmh: 225,
                consumptionL100: 9.2,
                co2Gkm: 209
              },
              dimensions: {
                lengthMm: 4697,
                widthMm: 1882,
                heightMm: 1671,
                wheelbaseMm: 2791,
                bootLitres: 720,
                weightKg: 1875,
                tankLitres: 58
              },
              options: safetyComfort(['RS sport seats', 'Canton sound', 'DCC adaptive suspension', 'SportLine body kit']),
              knownFor: ['large SUV hot performance', 'RS badge on a family hauler', '4x4 AWD standard', 'sporty RS cabin trim'],
              watchOut: ['very high CO2 road tax', 'fuel costs at RS pace', 'Haldex AWD service', 'check for wear on sport suspension']
            }
          ]
        }
      ]
    },
    {
      id: 'enyaq',
      name: 'Enyaq',
      segment: 'Compact-Medium EV SUV',
      description: 'The Enyaq iV is Škoda\'s first purpose-built battery electric vehicle, based on the VW Group MEB platform. It is available as a conventional SUV body and as the Enyaq Coupé with a fastback roofline. Battery options range from 60 kWh to 82 kWh.',
      tags: ['electric', 'EV', 'SUV', 'MEB', 'practical'],
      generations: [
        {
          id: 'enyaq-mk1',
          name: 'Enyaq iV Mk1',
          years: '2021–present',
          platform: 'VW Group MEB',
          bodyStyles: ['SUV', 'Coupe'],
          summary: 'The Enyaq was Škoda\'s flagship EV launch, offering genuine family SUV space on the MEB platform. The SUV body provides a large 585 L boot. The Coupé RS variant adds a sport-lowered suspension and dual-motor AWD with 299 hp for performance-oriented buyers.',
          heroImage: 'enyaq-mk1',
          variants: [
            {
              id: 'skoda-enyaq-mk1-80-rwd',
              name: 'Enyaq iV 80 RWD',
              years: '2021–present',
              priceBand: '€28,000–€44,000 used',
              specs: {
                engine: 'Single rear electric motor 150 kW',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 310,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 8.7,
                topSpeedKmh: 160,
                electricRangeKm: 534
              },
              dimensions: {
                lengthMm: 4648,
                widthMm: 1879,
                heightMm: 1616,
                wheelbaseMm: 2765,
                bootLitres: 585,
                weightKg: 2060
              },
              options: evComfort(['panoramic sunroof', 'Canton sound', 'Simply Clever EV features', 'trailer tow bar']),
              knownFor: ['534 km WLTP range', 'very large 585 L boot', 'practical family EV size', 'smooth refined ride quality'],
              watchOut: ['slower 135 kW DC charging vs some rivals', 'heavy at 2,060 kg', 'limited charging network vs Tesla', 'roof height limits some car parks']
            },
            {
              id: 'skoda-enyaq-mk1-coupe-rs-82kwh-awd',
              name: 'Enyaq Coupé RS iV 299 AWD',
              years: '2022–present',
              priceBand: '€40,000–€56,000 used',
              specs: {
                engine: 'Dual electric motor AWD 220 kW',
                powerHp: 299,
                powerKw: 220,
                torqueNm: 460,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 6.5,
                topSpeedKmh: 180,
                electricRangeKm: 490
              },
              dimensions: {
                lengthMm: 4653,
                widthMm: 1879,
                heightMm: 1594,
                wheelbaseMm: 2765,
                bootLitres: 570,
                weightKg: 2230
              },
              options: evComfort(['RS sport seats', 'DCC adaptive suspension', 'Canton sound', 'panoramic glass roof']),
              knownFor: ['299 hp AWD performance EV', 'Coupé fastback roofline', 'RS performance credentials', 'practical SUV boot despite Coupé shape'],
              watchOut: ['very heavy at 2,230 kg', 'higher price point', 'Coupé roofline limits rear headroom', 'charging speed 135 kW cap']
            }
          ]
        }
      ]
    }
  ]
};
