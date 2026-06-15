import type { CarMake } from '../../types';
import { safetyComfort } from '../_shared';

export const seat: CarMake = {
  id: 'seat',
  name: 'SEAT',
  country: 'Spain',
  logoText: 'S',
  models: [
    {
      id: 'ibiza',
      name: 'Ibiza',
      segment: 'Supermini / B-segment',
      description: 'The SEAT Ibiza is the brand\'s entry-level supermini, sharing the MQB-A0 platform with the VW Polo and Škoda Fabia from 2017 onwards. It offers sporty styling, a wide options list, and the FR performance trim.',
      tags: ['supermini', 'sporty', 'city', 'youthful', 'value'],
      generations: [
        {
          id: 'ibiza-mk5',
          name: 'Ibiza Mk5 (KJ)',
          years: '2017–present',
          platform: 'VW Group MQB-A0',
          bodyStyles: ['Hatchback'],
          summary: 'The fifth-generation Ibiza moved to the MQB-A0 platform, gaining a significantly improved interior, full-width dashboard design, and turbocharged three-cylinder TSI engines as standard. The FR trim brought sportier styling and a punchy 110 hp three-cylinder.',
          heroImage: 'ibiza-mk5',
          variants: [
            {
              id: 'seat-ibiza-mk5-10-tsi-95',
              name: '1.0 TSI 95 Style',
              years: '2017–present',
              priceBand: '€9,000–€17,000 used',
              specs: {
                engine: '1.0 TSI',
                engineCode: 'DLAC / CHZL family',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 95,
                powerKw: 70,
                torqueNm: 175,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 5,
                drive: 'FWD',
                acceleration0100: 11.5,
                topSpeedKmh: 186,
                consumptionL100: 4.9,
                co2Gkm: 110
              },
              dimensions: {
                lengthMm: 4059,
                widthMm: 1780,
                heightMm: 1444,
                wheelbaseMm: 2564,
                bootLitres: 355,
                weightKg: 1125,
                tankLitres: 40
              },
              options: safetyComfort(['full-colour touchscreen', 'rear parking sensors']),
              knownFor: ['low fuel costs', 'practical daily city car', 'good Euro NCAP safety rating', 'affordable running costs'],
              watchOut: ['underpowered on motorway when loaded', 'limited top-end performance', 'small boot for five occupants', 'base trim lacks features']
            },
            {
              id: 'seat-ibiza-mk5-10-tsi-110-fr',
              name: '1.0 TSI 110 FR',
              years: '2017–present',
              priceBand: '€10,000–€19,000 used',
              specs: {
                engine: '1.0 TSI',
                engineCode: 'CHZL / DLAC family',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 110,
                powerKw: 81,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.0,
                topSpeedKmh: 196,
                consumptionL100: 5.1,
                co2Gkm: 115
              },
              dimensions: {
                lengthMm: 4059,
                widthMm: 1780,
                heightMm: 1444,
                wheelbaseMm: 2564,
                bootLitres: 355,
                weightKg: 1150,
                tankLitres: 40
              },
              options: safetyComfort(['FR body kit', 'sport seats', 'full LED headlights']),
              knownFor: ['sporty FR looks on a budget', 'punchy three-cylinder', 'good urban agility', 'stylish interior for segment'],
              watchOut: ['three-cylinder vibration at idle', 'no diesel option after 2018 MY', 'limited rear headroom', 'small 355 L boot']
            }
          ]
        }
      ]
    },
    {
      id: 'arona',
      name: 'Arona',
      segment: 'Subcompact SUV / B-SUV',
      description: 'The SEAT Arona is a subcompact crossover SUV based on the MQB-A0 platform, essentially an elevated Ibiza body with a higher driving position and slightly more boot space. It targets young families who want SUV styling without the running costs of a larger model.',
      tags: ['SUV', 'crossover', 'B-segment', 'city', 'efficient'],
      generations: [
        {
          id: 'arona-mk1',
          name: 'Arona Mk1',
          years: '2017–present',
          platform: 'VW Group MQB-A0',
          bodyStyles: ['SUV'],
          summary: 'The first-generation Arona launched as SEAT\'s B-segment SUV, sharing the MQB-A0 underpinnings with the Ibiza. Its key appeal is a two-tone colour scheme option, raised ride height, and a roomy cabin. A 2021 facelift updated the infotainment and added a new digital cockpit.',
          heroImage: 'arona-mk1',
          variants: [
            {
              id: 'seat-arona-mk1-10-tsi-110-fr',
              name: '1.0 TSI 110 FR DSG',
              years: '2017–present',
              priceBand: '€12,000–€22,000 used',
              specs: {
                engine: '1.0 TSI',
                engineCode: 'CHZL / DLAC family',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 110,
                powerKw: 81,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 10.2,
                topSpeedKmh: 194,
                consumptionL100: 5.4,
                co2Gkm: 123
              },
              dimensions: {
                lengthMm: 4138,
                widthMm: 1780,
                heightMm: 1549,
                wheelbaseMm: 2564,
                bootLitres: 400,
                weightKg: 1220,
                tankLitres: 40
              },
              options: safetyComfort(['two-tone roof', 'FR sport body kit', 'digital cockpit', 'wireless CarPlay']),
              knownFor: ['stylish two-tone exterior options', 'higher driving position vs Ibiza', 'sporty FR specification', 'practical 400 L boot'],
              watchOut: ['smaller than rivals at 4.1 m', 'no AWD option available', 'three-cylinder vibration at idle', 'limited rear headroom for tall adults']
            }
          ]
        }
      ]
    },
    {
      id: 'leon',
      name: 'Leon',
      segment: 'Compact / C-segment',
      description: 'The Leon is SEAT\'s core model and the brand\'s best-seller, blending Spanish design flair with VW Group engineering. Available as a hatchback and Sportstourer estate, it competes directly with the Golf and Octavia on the same MQB platform.',
      tags: ['sporty', 'design', 'efficient', 'family', 'hot-hatch'],
      generations: [
        {
          id: 'leon-mk3',
          name: 'Leon Mk3 (5F)',
          years: '2012–2020',
          platform: 'VW Group MQB A5',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The third-generation Leon on MQB brought sharper styling, a wider engine range, and the reintroduction of the FR performance line. Available as 3-door SC, 5-door, and ST estate. The 2.0 TDI remained the fleet best-seller.',
          heroImage: 'leon-mk3',
          variants: [
            {
              id: 'seat-leon-mk3-16-tdi-115',
              name: '1.6 TDI 115 Style',
              years: '2013–2020',
              priceBand: '€7,000–€16,000 used',
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
                acceleration0100: 10.3,
                topSpeedKmh: 200,
                consumptionL100: 4.2,
                co2Gkm: 109
              },
              dimensions: {
                lengthMm: 4263,
                widthMm: 1816,
                heightMm: 1459,
                wheelbaseMm: 2636,
                bootLitres: 380,
                weightKg: 1310,
                tankLitres: 50
              },
              options: safetyComfort(['SEAT Drive Profile', 'rear parking sensors']),
              knownFor: ['low running costs', 'sharp SEAT styling', 'frugal EA288 diesel', 'strong used-car value'],
              watchOut: ['EGR valve deposits', 'DPF on short urban trips', 'timing belt schedule', 'infotainment on early cars']
            },
            {
              id: 'seat-leon-mk3-fr-20-tdi-150',
              name: 'Leon FR 2.0 TDI 150 DSG',
              years: '2015–2020',
              priceBand: '€10,000–€19,000 used',
              specs: {
                engine: '2.0 TDI',
                engineCode: 'DFG / CUNA family',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 340,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 8.5,
                topSpeedKmh: 218,
                consumptionL100: 4.8,
                co2Gkm: 126
              },
              dimensions: {
                lengthMm: 4263,
                widthMm: 1816,
                heightMm: 1443,
                wheelbaseMm: 2636,
                bootLitres: 380,
                weightKg: 1420,
                tankLitres: 50
              },
              options: safetyComfort(['FR sport seats', 'DCC adaptive chassis', 'SEAT Full LED headlights']),
              knownFor: ['sporty FR specification', 'frugal diesel with performance feel', 'FR sport seats', 'DSG smooth gearchanges'],
              watchOut: ['DSG clutch pack wear check', 'DPF/AdBlue maintenance', 'suspension wear on FR spec', 'check service stamp history']
            }
          ]
        },
        {
          id: 'leon-mk4',
          name: 'Leon Mk4 (KL)',
          years: '2020–present',
          platform: 'VW Group MQB Evo',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The fourth-generation Leon moved to an entirely touchscreen-based interior architecture, improved aero, and added mild-hybrid and plug-in hybrid options. The estate Sportstourer retained its large 617 L boot and added a longer wheelbase for extra rear legroom.',
          heroImage: 'leon-mk4',
          variants: [
            {
              id: 'seat-leon-mk4-15-tsi-150',
              name: '1.5 TSI 150 FR DSG',
              years: '2020–present',
              priceBand: '€16,000–€28,000 used',
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
                acceleration0100: 8.1,
                topSpeedKmh: 222,
                consumptionL100: 5.7,
                co2Gkm: 128
              },
              dimensions: {
                lengthMm: 4368,
                widthMm: 1799,
                heightMm: 1462,
                wheelbaseMm: 2686,
                bootLitres: 385,
                weightKg: 1378,
                tankLitres: 50
              },
              options: safetyComfort(['FR sport seats', 'Digital Cockpit', 'Travel Assist']),
              knownFor: ['sharp FR specification', 'smooth 7-speed DSG', 'sportier look vs Golf', 'good infotainment standard kit'],
              watchOut: ['touchscreen-only controls divisive', 'cylinder deactivation occasional roughness', 'water pump on evo2 engine', 'smaller boot than Octavia']
            },
            {
              id: 'seat-leon-mk4-20-tdi-150',
              name: '2.0 TDI 150 Sportstourer DSG',
              years: '2020–present',
              priceBand: '€18,000–€30,000 used',
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
                co2Gkm: 121
              },
              dimensions: {
                lengthMm: 4642,
                widthMm: 1799,
                heightMm: 1448,
                wheelbaseMm: 2686,
                bootLitres: 617,
                weightKg: 1480,
                tankLitres: 50
              },
              options: safetyComfort(['Sportstourer estate body', 'roof rails', 'Travel Assist']),
              knownFor: ['617 L estate boot', 'efficient diesel for long runs', 'practical family Sportstourer', 'strong fleet appeal'],
              watchOut: ['DSG service history check', 'DPF maintenance on diesels', 'AdBlue consumption', 'infotainment touchscreen-only layout']
            },
            {
              id: 'seat-leon-mk4-fr-20-tsi-ehybrid',
              name: 'Leon FR eHybrid 204 DSG',
              years: '2020–present',
              priceBand: '€20,000–€34,000 used',
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
                acceleration0100: 7.5,
                topSpeedKmh: 225,
                consumptionL100: 1.6,
                electricRangeKm: 60,
                co2Gkm: 36
              },
              dimensions: {
                lengthMm: 4368,
                widthMm: 1799,
                heightMm: 1462,
                wheelbaseMm: 2686,
                bootLitres: 270,
                weightKg: 1609,
                tankLitres: 40
              },
              options: safetyComfort(['FR sport seats', 'e-mode selector', 'charge port door', 'Digital Cockpit Pro']),
              knownFor: ['low company car BIK tax', '60 km electric range for commuting', 'strong combined system performance', 'FR sporty aesthetics'],
              watchOut: ['boot reduced to 270 L due to battery', 'battery degradation on older cars', 'requires regular charging to achieve stated economy', 'PHEV premium over standard Leon']
            }
          ]
        }
      ]
    },
    {
      id: 'ateca',
      name: 'Ateca',
      segment: 'Compact SUV / C-SUV',
      description: 'The Ateca was SEAT\'s first SUV, launched in 2016 on the MQB A5 platform shared with the Tiguan. It struck a good balance between sporty looks, everyday usability, and competitive pricing versus the class average.',
      tags: ['SUV', 'compact', 'practical', 'sporty', 'family'],
      generations: [
        {
          id: 'ateca-mk1',
          name: 'Ateca Mk1',
          years: '2016–present',
          platform: 'VW Group MQB A5',
          bodyStyles: ['SUV'],
          summary: 'SEAT\'s inaugural SUV arrived with the brand\'s signature angular design and a full range of TSI petrol and TDI diesel options. The FR trim added sportier styling, while the Xperience variant brought mild off-road credentials. A 2020 facelift refreshed the exterior and updated the infotainment.',
          heroImage: 'ateca-mk1',
          variants: [
            {
              id: 'seat-ateca-mk1-15-tsi-150',
              name: '1.5 TSI 150 FR DSG',
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
                acceleration0100: 8.4,
                topSpeedKmh: 212,
                consumptionL100: 6.0,
                co2Gkm: 136
              },
              dimensions: {
                lengthMm: 4363,
                widthMm: 1841,
                heightMm: 1611,
                wheelbaseMm: 2630,
                bootLitres: 510,
                weightKg: 1445,
                tankLitres: 55
              },
              options: safetyComfort(['FR sport package', 'full LED headlights', 'virtual cockpit', 'DCC adaptive suspension']),
              knownFor: ['sporty SUV styling', 'excellent driving dynamics for SUV', 'practical 510 L boot', 'good value versus German rivals'],
              watchOut: ['cylinder deactivation shudder', 'DSG service history check', 'rear seat space tighter than Tiguan', 'facelift 2020 for updated infotainment']
            },
            {
              id: 'seat-ateca-mk1-20-tdi-150-4drive',
              name: '2.0 TDI 150 Xperience 4Drive DSG',
              years: '2016–present',
              priceBand: '€16,000–€31,000 used',
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
                drive: '4x4',
                acceleration0100: 9.0,
                topSpeedKmh: 208,
                consumptionL100: 5.5,
                co2Gkm: 145
              },
              dimensions: {
                lengthMm: 4363,
                widthMm: 1841,
                heightMm: 1619,
                wheelbaseMm: 2630,
                bootLitres: 510,
                weightKg: 1618,
                tankLitres: 55
              },
              options: safetyComfort(['Xperience off-road mode', 'all-terrain tyres option', 'roof rails', 'tow bar prep']),
              knownFor: ['all-weather 4Drive traction', 'Xperience raised ride height', 'efficient diesel for touring', 'good towing capability'],
              watchOut: ['Haldex AWD service every 60k km', 'higher CO2 and fuel costs', 'AdBlue diesel maintenance', 'heavier than FWD variant']
            }
          ]
        }
      ]
    },
    {
      id: 'tarraco',
      name: 'Tarraco',
      segment: 'Large SUV / D-SUV',
      description: 'The Tarraco is SEAT\'s largest SUV, positioned above the Ateca with optional seven-seat capability. Based on the MQB A5 platform shared with the Tiguan Allspace and Škoda Kodiaq, it offers a large cabin and premium-feel interior at a competitive price point.',
      tags: ['SUV', 'seven-seat', 'family', 'large', 'practical'],
      generations: [
        {
          id: 'tarraco-mk1',
          name: 'Tarraco Mk1',
          years: '2019–present',
          platform: 'VW Group MQB A5',
          bodyStyles: ['SUV'],
          summary: 'SEAT\'s flagship SUV launched in 2019 competing with the Škoda Kodiaq and VW Tiguan Allspace. The Tarraco offers seven optional seats, a 700 L five-seat boot, and a plug-in hybrid eHybrid option added in 2021 which delivers 245 hp and 50 km of electric range.',
          heroImage: 'tarraco-mk1',
          variants: [
            {
              id: 'seat-tarraco-mk1-20-tdi-150',
              name: '2.0 TDI 150 Style DSG',
              years: '2019–present',
              priceBand: '€19,000–€38,000 used',
              specs: {
                engine: '2.0 TDI',
                engineCode: 'DGTE / DFG family',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 340,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.8,
                topSpeedKmh: 199,
                consumptionL100: 5.5,
                co2Gkm: 144
              },
              dimensions: {
                lengthMm: 4735,
                widthMm: 1839,
                heightMm: 1685,
                wheelbaseMm: 2790,
                bootLitres: 700,
                weightKg: 1758,
                tankLitres: 60
              },
              options: safetyComfort(['optional seven seats', 'trailer assist', 'panoramic sunroof', 'Canton sound']),
              knownFor: ['700 L five-seat boot', 'optional seven-seat layout', 'comfortable long-distance cruiser', 'competitive pricing vs Kodiaq'],
              watchOut: ['DPF on urban short trips', 'seven-seat option cramped for adults', 'DSG service cost', 'AdBlue consumption check']
            },
            {
              id: 'seat-tarraco-mk1-ehybrid-245',
              name: 'Tarraco eHybrid 245 DSG',
              years: '2021–present',
              priceBand: '€28,000–€46,000 used',
              specs: {
                engine: '1.4 TSI + 85 kW electric',
                engineCode: 'DGEA family',
                displacementCc: 1395,
                cylinders: 'Inline-4',
                powerHp: 245,
                powerKw: 180,
                torqueNm: 400,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'AWD',
                acceleration0100: 7.5,
                topSpeedKmh: 220,
                consumptionL100: 2.3,
                electricRangeKm: 50,
                co2Gkm: 52
              },
              dimensions: {
                lengthMm: 4735,
                widthMm: 1839,
                heightMm: 1685,
                wheelbaseMm: 2790,
                bootLitres: 455,
                weightKg: 1970,
                tankLitres: 40
              },
              options: safetyComfort(['e-mode selector', 'charge port', 'Travel Assist', 'panoramic sunroof']),
              knownFor: ['50 km electric range for daily use', 'AWD via electric rear axle', 'low BIK company car tax', 'strong system performance'],
              watchOut: ['boot reduced to 455 L due to battery', 'no seven seats available on eHybrid', 'heavier curb weight', 'requires charging for economy claims']
            }
          ]
        }
      ]
    }
  ]
};
