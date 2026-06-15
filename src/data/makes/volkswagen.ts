import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const volkswagen: CarMake = {
  id: 'volkswagen',
  name: 'Volkswagen',
  country: 'Germany',
  logoText: 'VW',
  models: [
    {
      id: 'up',
      name: 'up!',
      segment: 'City car / A-segment',
      description: 'The up! is Volkswagen\'s entry-level city car, designed to revive the spirit of the original Beetle as an affordable, no-nonsense urban runabout. Sharing its platform with the SEAT Mii and Škoda Citigo, the up! offers typical VW build quality in the smallest possible package.',
      tags: ['city', 'economy', 'entry-level', 'urban', 'efficient'],
      generations: [
        {
          id: 'up-mk1',
          name: 'up! Mk1',
          years: '2012–2023',
          platform: 'Volkswagen Group NSF',
          bodyStyles: ['Hatchback'],
          summary: 'The first-generation up! launched as a three-door then gained a five-door in 2013. It features a 1.0-litre three-cylinder engine, an upright city-optimised seating position, and a surprisingly refined interior for its class. The GTI hot variant arrived in 2018.',
          heroImage: 'up-mk1',
          variants: [
            {
              id: 'volkswagen-up-mk1-10-mpi-65',
              name: '1.0 MPI 65 Move up!',
              years: '2012–2023',
              priceBand: '€5,000–€12,000 used',
              specs: {
                engine: '1.0 MPI',
                engineCode: 'CHYA',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 65,
                powerKw: 48,
                torqueNm: 95,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 5,
                drive: 'FWD',
                acceleration0100: 14.4,
                topSpeedKmh: 163,
                consumptionL100: 4.8,
                co2Gkm: 111
              },
              dimensions: {
                lengthMm: 3600,
                widthMm: 1641,
                heightMm: 1489,
                wheelbaseMm: 2420,
                bootLitres: 251,
                weightKg: 934,
                tankLitres: 35
              },
              options: safetyComfort(['rear parking sensors', 'city emergency braking']),
              knownFor: ['extremely low running costs', 'tight urban manoeuvrability', 'quality feel above class average', 'zippy city performance'],
              watchOut: ['very small boot at 251 L', 'no automatic option in base trim', 'limited motorway comfort', 'three-cylinder vibration at idle']
            },
            {
              id: 'volkswagen-up-mk1-gti',
              name: 'up! GTI',
              years: '2018–2023',
              priceBand: '€10,000–€18,000 used',
              specs: {
                engine: '1.0 TSI GTI',
                engineCode: 'DKRA',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 115,
                powerKw: 85,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 8.8,
                topSpeedKmh: 196,
                consumptionL100: 5.2,
                co2Gkm: 118
              },
              dimensions: {
                lengthMm: 3600,
                widthMm: 1641,
                heightMm: 1478,
                wheelbaseMm: 2420,
                bootLitres: 251,
                weightKg: 1000,
                tankLitres: 35
              },
              options: safetyComfort(['GTI sport seats', 'Koni FSD dampers', 'rear disc brakes']),
              knownFor: ['pure hot-hatch fun in tiny package', 'rev-happy turbocharged three-cylinder', 'iconic GTI heritage styling', 'sub-€20k performance value'],
              watchOut: ['only two doors', 'basic infotainment', 'no adaptive cruise available', 'turbo adds maintenance complexity']
            }
          ]
        }
      ]
    },
    {
      id: 'polo',
      name: 'Polo',
      segment: 'Supermini / B-segment',
      description: 'The Volkswagen Polo has been a defining European supermini for over four decades. The current Mk6 generation on the MQB A0 platform grew substantially in size while retaining the model\'s reputation for build quality, driving refinement, and interior practicality above its class.',
      tags: ['supermini', 'efficient', 'quality', 'MQB-A0', 'urban'],
      generations: [
        {
          id: 'polo-mk6',
          name: 'Polo Mk6 (AW)',
          years: '2017–present',
          platform: 'VW Group MQB-A0',
          bodyStyles: ['Hatchback'],
          summary: 'The sixth-generation Polo moved to the MQB-A0 platform, sharing architecture with the Seat Ibiza and Škoda Fabia Mk4. It grew to near-Golf Mk6 dimensions, with a much-improved interior, and offered a full range of 1.0 TSI and 2.0 TSI GTI engines.',
          heroImage: 'polo-mk6',
          variants: [
            {
              id: 'volkswagen-polo-mk6-10-tsi-95',
              name: '1.0 TSI 95 Life',
              years: '2017–present',
              priceBand: '€10,000–€20,000 used',
              specs: {
                engine: '1.0 TSI',
                engineCode: 'DLAC',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 95,
                powerKw: 70,
                torqueNm: 175,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 5,
                drive: 'FWD',
                acceleration0100: 10.8,
                topSpeedKmh: 184,
                consumptionL100: 5.0,
                co2Gkm: 114
              },
              dimensions: {
                lengthMm: 4053,
                widthMm: 1751,
                heightMm: 1461,
                wheelbaseMm: 2564,
                bootLitres: 351,
                weightKg: 1139,
                tankLitres: 40
              },
              options: safetyComfort(['front assist', 'lane assist', 'App Connect']),
              knownFor: ['Golf-quality feel in smaller package', 'frugal three-cylinder TSI', 'spacious cabin for class', 'strong resale values'],
              watchOut: ['three-cylinder vibration at low RPM', 'base infotainment lacks wireless CarPlay', 'no rear disc brakes', 'timing chain tensioner early units']
            },
            {
              id: 'volkswagen-polo-mk6-gti',
              name: 'Polo GTI 2.0 TSI 207',
              years: '2018–present',
              priceBand: '€16,000–€28,000 used',
              specs: {
                engine: '2.0 TSI GTI',
                engineCode: 'DKZC',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 207,
                powerKw: 152,
                torqueNm: 320,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 6.5,
                topSpeedKmh: 240,
                consumptionL100: 6.4,
                co2Gkm: 145
              },
              dimensions: {
                lengthMm: 4053,
                widthMm: 1751,
                heightMm: 1446,
                wheelbaseMm: 2564,
                bootLitres: 351,
                weightKg: 1280,
                tankLitres: 40
              },
              options: safetyComfort(['DCC adaptive dampers', 'GTI sport seats', 'Beats audio', 'performance brakes']),
              knownFor: ['genuine hot-hatch performance in B-segment', '2.0 TSI pulled from Golf GTI', 'slick DSG7 gearbox', 'GTI heritage and identity'],
              watchOut: ['DSG clutch pack wear in city traffic', 'relatively small cabin for 4 adults', 'firm ride on larger wheels', 'tyre costs with 215 section fronts']
            }
          ]
        }
      ]
    },
    {
      id: 'golf',
      name: 'Golf',
      segment: 'Compact / C-segment',
      description: 'The Volkswagen Golf is Europe\'s benchmark compact car, in continuous production since 1974. The Mk8 generation brought a dramatically digital interior with touch-sensitive controls, mild-hybrid technology across the range, and the most capable Golf GTI and R variants ever built.',
      tags: ['compact', 'benchmark', 'GTI', 'diesel', 'MQB', 'bestseller'],
      generations: [
        {
          id: 'golf-mk8',
          name: 'Golf Mk8',
          years: '2020–present',
          platform: 'VW Group MQB Evo',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The eighth-generation Golf on MQB Evo introduced 48V mild-hybrid on the 1.5 TSI, a completely digital cabin with touch-sensitive controls, and eTSI mild-hybrid across the range. Software issues dogged early cars but updates resolved most problems.',
          heroImage: 'golf-mk8',
          variants: [
            {
              id: 'volkswagen-golf-mk8-10-tsi-110',
              name: '1.0 TSI 110 Life',
              years: '2020–present',
              priceBand: '€15,000–€26,000 used',
              specs: {
                engine: '1.0 TSI',
                engineCode: 'DLAC',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 110,
                powerKw: 81,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.8,
                topSpeedKmh: 200,
                consumptionL100: 5.3,
                co2Gkm: 122
              },
              dimensions: {
                lengthMm: 4284,
                widthMm: 1789,
                heightMm: 1456,
                wheelbaseMm: 2637,
                bootLitres: 381,
                weightKg: 1290,
                tankLitres: 50
              },
              options: safetyComfort(['Travel Assist', 'Harman Kardon audio', 'panoramic roof', 'head-up display']),
              knownFor: ['class-leading build quality', 'refined motorway cruiser', 'wide dealer network', 'strong used-car values'],
              watchOut: ['touch-sensitive climate controls awkward to use', 'early software bugs on Mk8 infotainment', 'three-cylinder vibration noticeable', 'warm-up fuel consumption higher than claimed']
            },
            {
              id: 'volkswagen-golf-mk8-20-tdi-150',
              name: '2.0 TDI 150 Style DSG',
              years: '2020–present',
              priceBand: '€18,000–€30,000 used',
              specs: {
                engine: '2.0 TDI',
                engineCode: 'DFG',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 360,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.2,
                topSpeedKmh: 225,
                consumptionL100: 4.5,
                co2Gkm: 118
              },
              dimensions: {
                lengthMm: 4284,
                widthMm: 1789,
                heightMm: 1456,
                wheelbaseMm: 2637,
                bootLitres: 381,
                weightKg: 1443,
                tankLitres: 50
              },
              options: safetyComfort(['Travel Assist', 'adaptive cruise with stop & go', 'head-up display']),
              knownFor: ['excellent real-world diesel economy', 'strong mid-range torque', 'ideal long-distance family car', 'low CO2 for fleet users'],
              watchOut: ['AdBlue top-up every ~15,000 km', 'DPF regeneration on short trips', 'DSG DQ381 service at 60k km', 'touch controls less intuitive than physical buttons']
            },
            {
              id: 'volkswagen-golf-mk8-gti',
              name: 'Golf GTI 2.0 TSI 245',
              years: '2020–present',
              priceBand: '€24,000–€38,000 used',
              specs: {
                engine: '2.0 TSI GTI',
                engineCode: 'DNUC',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 245,
                powerKw: 180,
                torqueNm: 370,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 6.3,
                topSpeedKmh: 250,
                consumptionL100: 7.1,
                co2Gkm: 162
              },
              dimensions: {
                lengthMm: 4284,
                widthMm: 1789,
                heightMm: 1452,
                wheelbaseMm: 2637,
                bootLitres: 381,
                weightKg: 1453,
                tankLitres: 50
              },
              options: safetyComfort(['DCC adaptive suspension', 'performance brakes', 'Harman Kardon audio', 'Akrapovič exhaust option', 'Clubsport upgrade']),
              knownFor: ['definitive hot-hatch benchmark', 'everyday usability with real performance', 'satisfying DSG7 response', 'heritage GTI identity inside and out'],
              watchOut: ['touch-sensitive HVAC controls frustrating', 'DQ381 DSG clutch pack service', 'optional DCC worth adding for ride quality', 'front diff under hard use']
            },
            {
              id: 'volkswagen-golf-mk8-r',
              name: 'Golf R 2.0 TSI 320',
              years: '2021–present',
              priceBand: '€35,000–€50,000 used',
              specs: {
                engine: '2.0 TSI R',
                engineCode: 'DNF',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 320,
                powerKw: 235,
                torqueNm: 420,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 4.7,
                topSpeedKmh: 270,
                consumptionL100: 8.0,
                co2Gkm: 183
              },
              dimensions: {
                lengthMm: 4284,
                widthMm: 1789,
                heightMm: 1452,
                wheelbaseMm: 2637,
                bootLitres: 381,
                weightKg: 1565,
                tankLitres: 50
              },
              options: safetyComfort(['DCC adaptive suspension', 'performance brakes with R logo calipers', 'Harman Kardon audio', 'track mode with drift mode', 'Akrapovič exhaust']),
              knownFor: ['fastest Golf ever produced', '4MOTION AWD for all-weather traction', 'drift mode on rear axle', 'daily usability with supercar pace'],
              watchOut: ['highest Golf depreciation curve', 'thirsty under performance driving', '4MOTION adds weight penalty', 'Haldex rear diff service every 60k km']
            }
          ]
        },
        {
          id: 'golf-mk7',
          name: 'Golf Mk7',
          years: '2012–2020',
          platform: 'VW Group MQB A5',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The seventh-generation Golf introduced the MQB platform, reducing weight by up to 100 kg versus the Mk6 while improving rigidity. It set the template for VW Group compact cars and is widely regarded as the best all-round Golf of its era, with a well-resolved interior and an excellent engine range.',
          heroImage: 'golf-mk7',
          variants: [
            {
              id: 'volkswagen-golf-mk7-15-tsi-130',
              name: '1.5 TSI 130 Comfortline',
              years: '2017–2020',
              priceBand: '€11,000–€22,000 used',
              specs: {
                engine: '1.5 TSI ACT',
                engineCode: 'DADA',
                displacementCc: 1498,
                cylinders: 'Inline-4',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.1,
                topSpeedKmh: 218,
                consumptionL100: 5.2,
                co2Gkm: 118
              },
              dimensions: {
                lengthMm: 4255,
                widthMm: 1799,
                heightMm: 1452,
                wheelbaseMm: 2637,
                bootLitres: 380,
                weightKg: 1288,
                tankLitres: 50
              },
              options: safetyComfort(['active cylinder management', 'Discover Navigation', 'adaptive cruise']),
              knownFor: ['physical climate controls on Mk7', 'MQB reliability advantage', 'smooth active-cylinder fuel saving', 'strong secondhand value'],
              watchOut: ['cylinder deactivation shudder on cold engine', 'ACT four-cylinder needs clean fuel', 'water pump EA211 reliability', 'front suspension arm bushes by 120k km']
            },
            {
              id: 'volkswagen-golf-mk7-gti',
              name: 'Golf GTI Mk7 2.0 TSI 230',
              years: '2012–2020',
              priceBand: '€12,000–€27,000 used',
              specs: {
                engine: '2.0 TSI',
                engineCode: 'CHHA',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 230,
                powerKw: 169,
                torqueNm: 350,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 6.4,
                topSpeedKmh: 250,
                consumptionL100: 6.7,
                co2Gkm: 153
              },
              dimensions: {
                lengthMm: 4255,
                widthMm: 1799,
                heightMm: 1452,
                wheelbaseMm: 2637,
                bootLitres: 380,
                weightKg: 1395,
                tankLitres: 50
              },
              options: safetyComfort(['DCC adaptive suspension', 'Performance pack', 'Dynaudio sound']),
              knownFor: ['greatest all-round hot hatch of its era', 'physical climate/audio controls', 'balanced DSG experience', 'accessible performance pricing'],
              watchOut: ['DQ250 DSG mechatronic failures', 'carbon build-up on intake', 'DCC shocks expensive if failed', 'Performance pack diff adds complexity']
            }
          ]
        }
      ]
    },
    {
      id: 't-cross',
      name: 'T-Cross',
      segment: 'Subcompact SUV / B-SUV',
      description: 'The T-Cross is Volkswagen\'s entry-level SUV, positioned below the T-Roc on the MQB-A0 platform. It shares its architecture with the Polo and offers the elevated driving position and SUV styling that B-segment buyers demand, in a compact urban-friendly footprint.',
      tags: ['SUV', 'compact', 'urban', 'entry-level', 'MQB-A0'],
      generations: [
        {
          id: 't-cross-mk1',
          name: 'T-Cross Mk1',
          years: '2019–present',
          platform: 'VW Group MQB-A0',
          bodyStyles: ['SUV'],
          summary: 'The T-Cross brings VW\'s SUV design language to the B-segment, with a sliding rear seat as a clever space-optimisation feature. Available with 1.0 and 1.5 TSI petrol engines, it competes with the Nissan Juke and Peugeot 2008 for urban SUV buyers.',
          heroImage: 't-cross-mk1',
          variants: [
            {
              id: 'volkswagen-t-cross-mk1-10-tsi-95',
              name: '1.0 TSI 95 Life',
              years: '2019–present',
              priceBand: '€12,000–€22,000 used',
              specs: {
                engine: '1.0 TSI',
                engineCode: 'DLAC',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 95,
                powerKw: 70,
                torqueNm: 175,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 5,
                drive: 'FWD',
                acceleration0100: 11.4,
                topSpeedKmh: 183,
                consumptionL100: 5.3,
                co2Gkm: 121
              },
              dimensions: {
                lengthMm: 4108,
                widthMm: 1760,
                heightMm: 1584,
                wheelbaseMm: 2564,
                bootLitres: 385,
                weightKg: 1175,
                tankLitres: 40
              },
              options: safetyComfort(['rear camera', 'park pilot', 'App Connect']),
              knownFor: ['sliding rear seat maximises flexibility', 'high seating position for city driving', 'generous boot for B-SUV', 'VW quality in entry SUV'],
              watchOut: ['no AWD option', 'three-cylinder NVH on long runs', 'limited power on motorway inclines', 'cargo area lip loading high']
            },
            {
              id: 'volkswagen-t-cross-mk1-10-tsi-115',
              name: '1.0 TSI 115 Style DSG',
              years: '2019–present',
              priceBand: '€14,000–€25,000 used',
              specs: {
                engine: '1.0 TSI',
                engineCode: 'DKRF',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 115,
                powerKw: 85,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 10.2,
                topSpeedKmh: 194,
                consumptionL100: 5.5,
                co2Gkm: 124
              },
              dimensions: {
                lengthMm: 4108,
                widthMm: 1760,
                heightMm: 1584,
                wheelbaseMm: 2564,
                bootLitres: 385,
                weightKg: 1215,
                tankLitres: 40
              },
              options: safetyComfort(['front assist', 'lane assist', 'digital cockpit', 'keyless entry']),
              knownFor: ['smooth 7-speed DSG in urban traffic', 'digital cockpit on Style trim', 'competitive lease pricing', 'practical SUV proportions'],
              watchOut: ['DSG low-speed judder on early units', 'three-cylinder hum on motorway', 'small rear windows limit visibility', 'no spare tyre (inflation kit)']
            }
          ]
        }
      ]
    },
    {
      id: 't-roc',
      name: 'T-Roc',
      segment: 'Compact SUV / C-SUV',
      description: 'The T-Roc is Volkswagen\'s stylish compact SUV, positioned as a sportier alternative to the Tiguan with a more coupe-influenced exterior and a wider range of personalisation options. Available from a 1.0 TSI to a 300 hp R version with 4MOTION all-wheel drive.',
      tags: ['SUV', 'sporty', 'style', 'MQB', 'compact'],
      generations: [
        {
          id: 't-roc-mk1',
          name: 'T-Roc Mk1 (A11)',
          years: '2017–present',
          platform: 'VW Group MQB A5',
          bodyStyles: ['SUV'],
          summary: 'The T-Roc was VW\'s first attempt at a style-led compact SUV, competing with the Renault Kadjar and Seat Ateca. The interior contrasts with the Golf\'s conservatism, offering two-tone colour schemes and a high-spec digital cockpit. The 2022 facelift updated infotainment.',
          heroImage: 't-roc-mk1',
          variants: [
            {
              id: 'volkswagen-t-roc-mk1-15-tsi-150',
              name: '1.5 TSI 150 Style DSG',
              years: '2017–present',
              priceBand: '€14,000–€28,000 used',
              specs: {
                engine: '1.5 TSI ACT',
                engineCode: 'DPCA',
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
                topSpeedKmh: 219,
                consumptionL100: 6.0,
                co2Gkm: 138
              },
              dimensions: {
                lengthMm: 4234,
                widthMm: 1819,
                heightMm: 1573,
                wheelbaseMm: 2603,
                bootLitres: 445,
                weightKg: 1381,
                tankLitres: 50
              },
              options: safetyComfort(['two-tone contrasting roof', 'DCC adaptive suspension', 'panoramic roof', 'digital cockpit']),
              knownFor: ['bold exterior personalisation options', 'punchy 1.5 TSI with active cylinders', 'sharp driving character for an SUV', 'competitive value in C-SUV class'],
              watchOut: ['rear legroom tighter than Tiguan', 'cylinder deactivation shudder cold', 'small rear windows reduce visibility', 'coupe roofline limits headroom in back']
            },
            {
              id: 'volkswagen-t-roc-r',
              name: 'T-Roc R 2.0 TSI 300 4MOTION',
              years: '2019–present',
              priceBand: '€28,000–€45,000 used',
              specs: {
                engine: '2.0 TSI R',
                engineCode: 'DNUE',
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
                consumptionL100: 8.5,
                co2Gkm: 194
              },
              dimensions: {
                lengthMm: 4234,
                widthMm: 1819,
                heightMm: 1573,
                wheelbaseMm: 2603,
                bootLitres: 392,
                weightKg: 1567,
                tankLitres: 50
              },
              options: safetyComfort(['DCC adaptive suspension', 'R performance brakes', 'Akrapovič exhaust option', 'heated sports seats']),
              knownFor: ['fastest production T-Roc', '4MOTION all-weather performance', 'unique R styling package', 'near Golf R performance at lower price'],
              watchOut: ['lower ground clearance than standard T-Roc', 'high insurance group', '4MOTION adds 150 kg weight', 'Haldex rear diff service required']
            }
          ]
        }
      ]
    },
    {
      id: 'taigo',
      name: 'Taigo',
      segment: 'Compact SUV Coupé / C-SUV',
      description: 'The Taigo is a coupe-SUV crossover from Volkswagen, sharing its MQB-A0 platform with the Polo. It offers a fastback roofline combined with an SUV ride height, competing with the Renault Arkana and Nissan Juke in the rapidly growing SUV-coupé B-segment.',
      tags: ['SUV', 'coupe', 'fastback', 'MQB-A0', 'compact'],
      generations: [
        {
          id: 'taigo-mk1',
          name: 'Taigo Mk1',
          years: '2021–present',
          platform: 'VW Group MQB-A0',
          bodyStyles: ['SUV'],
          summary: 'The Taigo slots between the T-Cross and T-Roc as a rakish coupe-crossover. Based on the South American Nivus, it offers the coupe-SUV aesthetic without the price premium of the T-Roc R. The 1.0 TSI is the sole engine option in most markets.',
          heroImage: 'taigo-mk1',
          variants: [
            {
              id: 'volkswagen-taigo-mk1-10-tsi-95',
              name: '1.0 TSI 95 Life',
              years: '2021–present',
              priceBand: '€13,000–€23,000 used',
              specs: {
                engine: '1.0 TSI',
                engineCode: 'DLAC',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 95,
                powerKw: 70,
                torqueNm: 175,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.8,
                topSpeedKmh: 183,
                consumptionL100: 5.4,
                co2Gkm: 123
              },
              dimensions: {
                lengthMm: 4266,
                widthMm: 1757,
                heightMm: 1529,
                wheelbaseMm: 2563,
                bootLitres: 438,
                weightKg: 1225,
                tankLitres: 40
              },
              options: safetyComfort(['lane assist', 'rear camera', 'App Connect']),
              knownFor: ['coupe SUV styling at B-segment price', 'practical 438 L coupé boot', 'light and nimble in urban use', 'strong value against Renault Arkana'],
              watchOut: ['sloping roofline limits rear headroom', 'no AWD available', 'three-cylinder vibration', 'no diesel or hybrid option in EU']
            },
            {
              id: 'volkswagen-taigo-mk1-10-tsi-110',
              name: '1.0 TSI 110 Style DSG',
              years: '2021–present',
              priceBand: '€15,000–€26,000 used',
              specs: {
                engine: '1.0 TSI',
                engineCode: 'DKRF',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 110,
                powerKw: 81,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 10.7,
                topSpeedKmh: 196,
                consumptionL100: 5.8,
                co2Gkm: 133
              },
              dimensions: {
                lengthMm: 4266,
                widthMm: 1757,
                heightMm: 1529,
                wheelbaseMm: 2563,
                bootLitres: 438,
                weightKg: 1265,
                tankLitres: 40
              },
              options: safetyComfort(['digital cockpit', 'front assist', 'adaptive cruise control', 'keyless entry']),
              knownFor: ['slick DSG in city traffic', 'stylish exterior relative to price', 'digital cockpit on Style trim', 'lower loading lip than T-Cross'],
              watchOut: ['DSG low-speed creep in stop-go', 'rear seat headroom limited by roofline', 'no spare wheel as standard', 'higher CO2 than T-Cross for same engine']
            }
          ]
        }
      ]
    },
    {
      id: 'tiguan',
      name: 'Tiguan',
      segment: 'Compact SUV / D-SUV',
      description: 'The Volkswagen Tiguan is Europe\'s best-selling SUV and VW\'s most important model globally after the Golf. The second-generation sits on the MQB platform and the new third-generation on MQB Evo brings eTSI mild-hybrids, a refined interior, and the flagship Tiguan R with 320 hp.',
      tags: ['SUV', 'family', 'bestseller', 'MQB', 'diesel', 'plug-in-hybrid'],
      generations: [
        {
          id: 'tiguan-mk3',
          name: 'Tiguan Mk3',
          years: '2024–present',
          platform: 'VW Group MQB Evo',
          bodyStyles: ['SUV'],
          summary: 'The third-generation Tiguan on MQB Evo brings a more upright SUV design, a significantly improved interior with large touchscreen, and a range of eTSI 48V mild-hybrids and a plug-in hybrid eHybrid. The 1.5 eTSI replaced the 2.0 TSI as the volume petrol engine.',
          heroImage: 'tiguan-mk3',
          variants: [
            {
              id: 'volkswagen-tiguan-mk3-20-tdi-150',
              name: '2.0 TDI 150 Life DSG',
              years: '2024–present',
              priceBand: '€30,000–€45,000 new',
              specs: {
                engine: '2.0 TDI',
                engineCode: 'DFG',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 360,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.8,
                topSpeedKmh: 207,
                consumptionL100: 5.5,
                co2Gkm: 144
              },
              dimensions: {
                lengthMm: 4539,
                widthMm: 1842,
                heightMm: 1661,
                wheelbaseMm: 2674,
                bootLitres: 652,
                weightKg: 1726,
                tankLitres: 58
              },
              options: safetyComfort(['Discover Navigation', 'adaptive cruise', 'trailer assist', 'panoramic roof']),
              knownFor: ['class-leading 652 L boot', 'refined long-distance diesel cruiser', 'optional third-row seating', 'VW premium cabin quality'],
              watchOut: ['AdBlue every 20,000 km', 'DPF issues on stop-start routes', 'DSG service at 60k km', 'no spare tyre standard']
            },
            {
              id: 'volkswagen-tiguan-mk3-15-etsi-150',
              name: '1.5 eTSI 150 Style DSG',
              years: '2024–present',
              priceBand: '€32,000–€48,000 new',
              specs: {
                engine: '1.5 eTSI (48V mild hybrid)',
                engineCode: 'DADA',
                displacementCc: 1498,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 250,
                fuel: 'Hybrid',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.0,
                topSpeedKmh: 210,
                consumptionL100: 6.1,
                co2Gkm: 138
              },
              dimensions: {
                lengthMm: 4539,
                widthMm: 1842,
                heightMm: 1661,
                wheelbaseMm: 2674,
                bootLitres: 652,
                weightKg: 1683,
                tankLitres: 58
              },
              options: safetyComfort(['IQ.DRIVE Travel Assist', 'DCC adaptive suspension', 'head-up display', 'panoramic roof']),
              knownFor: ['mild-hybrid fuel saving in urban cycle', 'smooth 7-speed DSG', 'spacious Mk3 cabin improvement', 'strong safety rating NCAP 2024'],
              watchOut: ['mild hybrid does not allow EV driving', 'Active Cylinder Management vibration', 'water pump under warranty watch', 'Touch slider controls tricky to use']
            },
            {
              id: 'volkswagen-tiguan-mk3-r',
              name: 'Tiguan R 2.0 TSI 320 4MOTION',
              years: '2021–present',
              priceBand: '€38,000–€58,000 used',
              specs: {
                engine: '2.0 TSI R',
                engineCode: 'DNF',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 320,
                powerKw: 235,
                torqueNm: 420,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 250,
                consumptionL100: 9.0,
                co2Gkm: 206
              },
              dimensions: {
                lengthMm: 4539,
                widthMm: 1842,
                heightMm: 1655,
                wheelbaseMm: 2674,
                bootLitres: 615,
                weightKg: 1745,
                tankLitres: 58
              },
              options: safetyComfort(['DCC Sport adaptive suspension', 'R performance brakes', 'R sports seats', 'Akrapovič exhaust', 'Harman Kardon audio']),
              knownFor: ['fastest Tiguan ever', 'all-season AWD traction', 'family SUV performance combination', 'usable rear seat for 3 adults'],
              watchOut: ['significant depreciation at list price', 'fuel consumption under performance use', '4MOTION Haldex service 60k km', 'performance tyres expensive to replace']
            }
          ]
        }
      ]
    },
    {
      id: 'touareg',
      name: 'Touareg',
      segment: 'Large Premium SUV',
      description: 'The Volkswagen Touareg is the brand\'s flagship SUV, sharing its MLB Evo platform with the Audi Q7, Porsche Cayenne, and Bentley Bentayga. The third-generation features an Innovision Cockpit interior, air suspension, and an optional 3.0 TDI V6 diesel with 286 hp.',
      tags: ['SUV', 'flagship', 'luxury', 'premium', 'V6-diesel', 'towing'],
      generations: [
        {
          id: 'touareg-cr',
          name: 'Touareg III (CR)',
          years: '2018–present',
          platform: 'VW Group MLB Evo',
          bodyStyles: ['SUV'],
          summary: 'The third-generation Touareg on the MLB Evo platform brought a revolutionary Innovision Cockpit with a 15-inch touchscreen and 12-inch digital instruments, 4D chassis control, and active air suspension as standard on higher trims. The 3.0 TDI remains the most popular powertrain.',
          heroImage: 'touareg-cr',
          variants: [
            {
              id: 'volkswagen-touareg-cr-30-tdi-231',
              name: '3.0 TDI 231 Elegance',
              years: '2018–present',
              priceBand: '€35,000–€65,000 used',
              specs: {
                engine: '3.0 TDI V6',
                engineCode: 'DCWA',
                displacementCc: 2967,
                cylinders: 'V6',
                powerHp: 231,
                powerKw: 170,
                torqueNm: 500,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 7.3,
                topSpeedKmh: 222,
                consumptionL100: 7.2,
                co2Gkm: 189
              },
              dimensions: {
                lengthMm: 4878,
                widthMm: 1984,
                heightMm: 1702,
                wheelbaseMm: 2904,
                bootLitres: 810,
                weightKg: 2155,
                tankLitres: 90
              },
              options: safetyComfort(['4D active chassis control', 'Dynaudio sound', 'night vision camera', 'trailer manoeuvring assist', 'air suspension']),
              knownFor: ['best-in-class Innovision Cockpit', '3.5t towing capacity', 'refined diesel motorway cruiser', 'near-luxury quality at VW price'],
              watchOut: ['air suspension repair cost out of warranty', 'heavy at 2.15 t affects fuel economy', 'AdBlue and DPF maintenance', 'complex electronics can be costly to repair']
            },
            {
              id: 'volkswagen-touareg-cr-30-tdi-286',
              name: '3.0 TDI 286 R-Line',
              years: '2018–present',
              priceBand: '€42,000–€72,000 used',
              specs: {
                engine: '3.0 TDI V6',
                engineCode: 'DCWB',
                displacementCc: 2967,
                cylinders: 'V6',
                powerHp: 286,
                powerKw: 210,
                torqueNm: 600,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 6.1,
                topSpeedKmh: 245,
                consumptionL100: 7.7,
                co2Gkm: 203
              },
              dimensions: {
                lengthMm: 4878,
                widthMm: 1984,
                heightMm: 1702,
                wheelbaseMm: 2904,
                bootLitres: 810,
                weightKg: 2220,
                tankLitres: 90
              },
              options: safetyComfort(['R-Line exterior package', 'air suspension standard', 'head-up display', 'Dynaudio Confidence sound', 'massaging seats']),
              knownFor: ['600 Nm V6 diesel torque', 'fast for a large SUV', 'R-Line sport exterior', 'excellent long-distance capability'],
              watchOut: ['high fuel consumption at pace', 'premium pricing for a VW', 'complex infotainment early software', 'adBlue consumption higher than 231 variant']
            }
          ]
        }
      ]
    },
    {
      id: 'passat',
      name: 'Passat',
      segment: 'Large / D-segment',
      description: 'The Volkswagen Passat has been Europe\'s fleet car of choice for decades. The latest B9 generation switches to an estate-only body, reinforcing its reputation as the practical long-distance cruiser. Available with efficient diesel, 48V mild-hybrid, and a plug-in hybrid GTE powertrain.',
      tags: ['estate', 'fleet', 'diesel', 'plug-in-hybrid', 'executive', 'long-distance'],
      generations: [
        {
          id: 'passat-b9',
          name: 'Passat B9',
          years: '2023–present',
          platform: 'VW Group MQB Evo',
          bodyStyles: ['Wagon'],
          summary: 'The B9 Passat is estate-only, dropping the saloon body, and grows significantly in wheelbase. It borrows Innovision Cockpit elements from the Touareg and offers a GTE plug-in hybrid with up to 100 km of electric range. Produced in Bratislava rather than Emden.',
          heroImage: 'passat-b9',
          variants: [
            {
              id: 'volkswagen-passat-b9-20-tdi-150',
              name: '2.0 TDI 150 Business DSG',
              years: '2023–present',
              priceBand: '€30,000–€45,000 new',
              specs: {
                engine: '2.0 TDI',
                engineCode: 'DFG',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 360,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.0,
                topSpeedKmh: 225,
                consumptionL100: 5.0,
                co2Gkm: 131
              },
              dimensions: {
                lengthMm: 4916,
                widthMm: 1852,
                heightMm: 1505,
                wheelbaseMm: 2841,
                bootLitres: 690,
                weightKg: 1671,
                tankLitres: 58
              },
              options: safetyComfort(['IQ.Drive Travel Assist', 'head-up display', 'panoramic roof', 'trailer assist', 'Harman Kardon audio']),
              knownFor: ['690 L estate boot class-leading', 'genuine 5-seat long-distance comfort', 'efficient fleet diesel', 'excellent safety rating'],
              watchOut: ['estate-only body in B9 generation', 'AdBlue consumption on high mileage', 'Touch infotainment sensitivity in cold', 'DSG service intervals critical']
            },
            {
              id: 'volkswagen-passat-b9-gte-phev',
              name: 'Passat GTE eHybrid',
              years: '2023–present',
              priceBand: '€38,000–€55,000 new',
              specs: {
                engine: '1.5 TSI + e-motor',
                engineCode: 'DPC hybrid',
                displacementCc: 1498,
                cylinders: 'Inline-4',
                powerHp: 272,
                powerKw: 200,
                torqueNm: 400,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 7.0,
                topSpeedKmh: 225,
                electricRangeKm: 100,
                consumptionL100: 1.3,
                co2Gkm: 30
              },
              dimensions: {
                lengthMm: 4916,
                widthMm: 1852,
                heightMm: 1505,
                wheelbaseMm: 2841,
                bootLitres: 571,
                weightKg: 1930,
                tankLitres: 50
              },
              options: safetyComfort(['IQ.Drive', 'GTE sport seats', 'head-up display', 'panoramic roof', 'Harman Kardon audio']),
              knownFor: ['100 km electric range for fleet commuters', 'low CO2 for BIK tax benefit', 'estate practicality with EV commuting', 'quick enough for executive use'],
              watchOut: ['reduced boot vs diesel GTE pack position', 'heavy battery adds 250 kg vs TDI', 'DC fast charging not supported', 'real-world range drops in winter significantly']
            }
          ]
        }
      ]
    },
    {
      id: 'arteon',
      name: 'Arteon',
      segment: 'Executive Fastback / Shooting Brake',
      description: 'The Arteon is Volkswagen\'s flagship passenger car, a four-door fastback that replaced the CC. Available as a fastback and Shooting Brake estate, it combines bold styling with an executive specification and comes with the powerful 2.0 TDI diesel and R performance variant.',
      tags: ['fastback', 'executive', 'shooting-brake', 'flagship', 'R', 'premium'],
      generations: [
        {
          id: 'arteon-mk1',
          name: 'Arteon Mk1',
          years: '2017–present',
          platform: 'VW Group MQB A6',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'The Arteon offered a more stylish alternative to the Passat with its fastback body and premium interior. The Shooting Brake estate followed in 2020. Both share the MQB A6 platform and offer the 2.0 TDI 150/200 diesel and 272 hp R with 4MOTION.',
          heroImage: 'arteon-mk1',
          variants: [
            {
              id: 'volkswagen-arteon-mk1-20-tdi-150',
              name: '2.0 TDI 150 Elegance DSG',
              years: '2017–present',
              priceBand: '€18,000–€35,000 used',
              specs: {
                engine: '2.0 TDI',
                engineCode: 'DFCA',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 340,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.9,
                topSpeedKmh: 223,
                consumptionL100: 5.6,
                co2Gkm: 148
              },
              dimensions: {
                lengthMm: 4862,
                widthMm: 1871,
                heightMm: 1427,
                wheelbaseMm: 2841,
                bootLitres: 563,
                weightKg: 1552,
                tankLitres: 66
              },
              options: safetyComfort(['head-up display', 'DCC adaptive suspension', 'Dynaudio audio', 'panoramic roof', 'massage seats']),
              knownFor: ['distinctive fastback styling among saloons', 'premium interior at mainstream price', 'spacious rear headroom for a fastback', 'strong depreciation value proposition used'],
              watchOut: ['sloping roofline limits rear headroom vs Passat', 'costly options push price close to premium rivals', 'DPF issues on short-run diesel cycles', 'rear camera essential given long boot']
            },
            {
              id: 'volkswagen-arteon-mk1-r',
              name: 'Arteon R 2.0 TSI 320 4MOTION',
              years: '2021–present',
              priceBand: '€35,000–€55,000 used',
              specs: {
                engine: '2.0 TSI R',
                engineCode: 'DNF',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 320,
                powerKw: 235,
                torqueNm: 420,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 250,
                consumptionL100: 8.5,
                co2Gkm: 195
              },
              dimensions: {
                lengthMm: 4862,
                widthMm: 1871,
                heightMm: 1427,
                wheelbaseMm: 2841,
                bootLitres: 563,
                weightKg: 1730,
                tankLitres: 66
              },
              options: safetyComfort(['DCC Sport adaptive suspension', 'R performance brakes', 'R sports seats with massage', 'Akrapovič exhaust', 'panoramic roof']),
              knownFor: ['fastest Arteon available', 'Shooting Brake version uniquely practical', '4MOTION AWD composure in all weathers', 'Golf R performance in executive package'],
              watchOut: ['heavy at 1.73 t affects agility', 'significant depreciation new', 'limited availability used', '4MOTION service adds to running costs']
            }
          ]
        }
      ]
    },
    {
      id: 'id-3',
      name: 'ID.3',
      segment: 'Compact Electric / C-segment EV',
      description: 'The ID.3 is Volkswagen\'s electric Golf equivalent, built on the MEB platform as the first true mass-market EV from the brand. It offers up to 550 km WLTP range and has been updated with improved infotainment and faster charging in its second-generation facelift.',
      tags: ['electric', 'compact', 'MEB', 'zero-emission', 'hatchback', 'EV'],
      generations: [
        {
          id: 'id-3-gen1',
          name: 'ID.3 (E11 / MEB)',
          years: '2020–present',
          platform: 'VW Group MEB',
          bodyStyles: ['Hatchback'],
          summary: 'The ID.3 launched with 45, 58, and 77 kWh battery options. Software bugs plagued early deliveries but were addressed over-the-air. The 2023 facelift brought a new dashboard design, improved graphics and a larger 12.9-inch screen.',
          heroImage: 'id-3-gen1',
          variants: [
            {
              id: 'volkswagen-id-3-gen1-pure-plus',
              name: 'ID.3 Pure+ 45 kWh',
              years: '2020–present',
              priceBand: '€18,000–€28,000 used',
              specs: {
                engine: 'single rear permanent-magnet motor',
                powerHp: 170,
                powerKw: 125,
                torqueNm: 310,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 7.3,
                topSpeedKmh: 160,
                electricRangeKm: 350
              },
              dimensions: {
                lengthMm: 4261,
                widthMm: 1809,
                heightMm: 1568,
                wheelbaseMm: 2771,
                bootLitres: 385,
                weightKg: 1800
              },
              options: evComfort(['travel assist', 'augmented reality HUD option']),
              knownFor: ['pure-EV Golf sizing and concept', 'rear-wheel drive for EV feel', 'spacious interior on MEB long wheelbase', 'competitive entry-level EV price'],
              watchOut: ['50 kW max DC charging on Pure variant', 'software bugs on early 2020 cars', 'small boot at 385 L for the body size', 'no heat pump on base spec']
            },
            {
              id: 'volkswagen-id-3-gen1-pro-s',
              name: 'ID.3 Pro S 77 kWh',
              years: '2020–present',
              priceBand: '€26,000–€40,000 used',
              specs: {
                engine: 'single rear permanent-magnet motor',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 310,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 7.9,
                topSpeedKmh: 160,
                electricRangeKm: 549
              },
              dimensions: {
                lengthMm: 4261,
                widthMm: 1809,
                heightMm: 1568,
                wheelbaseMm: 2771,
                bootLitres: 385,
                weightKg: 1940
              },
              options: evComfort(['panoramic glass roof', 'travel assist', 'augmented reality HUD', 'premium sound', '150 kW DC charging']),
              knownFor: ['class-leading 549 km WLTP range', 'fast 135 kW DC charging on Pro S', 'roomy rear despite C-segment length', 'practical hatchback EV alternative to Tesla'],
              watchOut: ['77 kWh battery adds weight', 'boot stays a modest 385 L', 'early cars had infotainment touchpad issues', 'winter range drops significantly below claim']
            }
          ]
        }
      ]
    },
    {
      id: 'id-4',
      name: 'ID.4',
      segment: 'Compact Electric SUV',
      description: 'The ID.4 is Volkswagen\'s best-selling electric SUV, positioned as an EV replacement for the Tiguan. Built on the MEB platform with a choice of rear- or all-wheel drive via dual-motor configuration, it offers practical SUV packaging with up to 520 km WLTP range.',
      tags: ['electric', 'SUV', 'MEB', 'AWD', 'zero-emission', 'family'],
      generations: [
        {
          id: 'id-4-gen1',
          name: 'ID.4 (E21 / MEB)',
          years: '2021–present',
          platform: 'VW Group MEB',
          bodyStyles: ['SUV'],
          summary: 'The ID.4 built on the ID.3 platform by stretching the MEB architecture into an SUV body. It launched with 58 and 77 kWh batteries; the GTX dual-motor version adds front axle electric motor for AWD. The 2024 facelift improved charging speed to 175 kW.',
          heroImage: 'id-4-gen1',
          variants: [
            {
              id: 'volkswagen-id-4-gen1-pro',
              name: 'ID.4 Pro 77 kWh RWD',
              years: '2021–present',
              priceBand: '€25,000–€42,000 used',
              specs: {
                engine: 'single rear permanent-magnet motor',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 310,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 8.5,
                topSpeedKmh: 160,
                electricRangeKm: 522
              },
              dimensions: {
                lengthMm: 4584,
                widthMm: 1852,
                heightMm: 1640,
                wheelbaseMm: 2771,
                bootLitres: 543,
                weightKg: 2124
              },
              options: evComfort(['heat pump', 'travel assist', 'panoramic roof', 'matrix LED headlights', 'augmented reality HUD']),
              knownFor: ['best-selling EV SUV in Europe', 'spacious cabin on long MEB wheelbase', 'competitive 135 kW charging', 'quiet and refined SUV character'],
              watchOut: ['1600 kg towing limit lower than diesel Tiguan', 'winter range drop significant', 'rear-drive only on base—no AWD option', 'bulky at 2.1 t versus Tiguan']
            },
            {
              id: 'volkswagen-id-4-gen1-gtx',
              name: 'ID.4 GTX 77 kWh AWD',
              years: '2021–present',
              priceBand: '€32,000–€52,000 used',
              specs: {
                engine: 'dual permanent-magnet motors',
                powerHp: 299,
                powerKw: 220,
                torqueNm: 460,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 6.2,
                topSpeedKmh: 180,
                electricRangeKm: 490
              },
              dimensions: {
                lengthMm: 4584,
                widthMm: 1852,
                heightMm: 1640,
                wheelbaseMm: 2771,
                bootLitres: 543,
                weightKg: 2218
              },
              options: evComfort(['GTX sport seats', 'DCC adaptive suspension', 'panoramic roof', 'head-up display', 'Harman Kardon audio']),
              knownFor: ['AWD traction for all-weather driving', 'strong 0–100 in 6.2 s for an SUV', 'GTX sport tuning and styling', 'ID.4 practicality with performance edge'],
              watchOut: ['heavier than RWD version reduces range', 'higher purchase price over Pro', 'front motor regen regeneration setup complex', 'towing limit still 1600 kg AWD']
            }
          ]
        }
      ]
    },
    {
      id: 'id-5',
      name: 'ID.5',
      segment: 'Electric SUV Coupé',
      description: 'The ID.5 is a coupe-bodied SUV version of the ID.4, sharing its MEB platform and powertrains while offering a more aerodynamic roofline. Available in rear-wheel-drive Pro and dual-motor GTX variants, it targets the BMW X4 and Mercedes GLE Coupé from an EV perspective.',
      tags: ['electric', 'coupe-SUV', 'MEB', 'GTX', 'zero-emission'],
      generations: [
        {
          id: 'id-5-gen1',
          name: 'ID.5 (MEB)',
          years: '2022–present',
          platform: 'VW Group MEB',
          bodyStyles: ['SUV'],
          summary: 'The ID.5 uses the same MEB underpinnings as the ID.4 but with a coupe roofline providing a 0.26 Cd drag coefficient—better than the ID.4\'s 0.28—allowing slightly improved range on 77 kWh. The GTX AWD version produces 299 hp and reaches 100 km/h in 6.3 seconds.',
          heroImage: 'id-5-gen1',
          variants: [
            {
              id: 'volkswagen-id-5-gen1-pro',
              name: 'ID.5 Pro 77 kWh',
              years: '2022–present',
              priceBand: '€30,000–€46,000 used',
              specs: {
                engine: 'single rear permanent-magnet motor',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 310,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 8.4,
                topSpeedKmh: 160,
                electricRangeKm: 534
              },
              dimensions: {
                lengthMm: 4599,
                widthMm: 1852,
                heightMm: 1612,
                wheelbaseMm: 2771,
                bootLitres: 549,
                weightKg: 2150
              },
              options: evComfort(['panoramic glass roof', 'head-up display', 'travel assist', 'matrix LED headlights']),
              knownFor: ['more aerodynamic coupe profile than ID.4', 'longer WLTP range than ID.4 Pro', '549 L boot despite coupe roofline', 'premium styling at crossover price'],
              watchOut: ['reduced rear headroom vs ID.4', 'no third-row seating option', 'higher entry price than ID.4', 'same 160 km/h limiter as ID.4']
            },
            {
              id: 'volkswagen-id-5-gen1-gtx',
              name: 'ID.5 GTX 77 kWh AWD',
              years: '2022–present',
              priceBand: '€36,000–€55,000 used',
              specs: {
                engine: 'dual permanent-magnet motors',
                powerHp: 299,
                powerKw: 220,
                torqueNm: 460,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 6.3,
                topSpeedKmh: 180,
                electricRangeKm: 497
              },
              dimensions: {
                lengthMm: 4599,
                widthMm: 1852,
                heightMm: 1612,
                wheelbaseMm: 2771,
                bootLitres: 549,
                weightKg: 2250
              },
              options: evComfort(['GTX sport seats', 'Harman Kardon audio', 'panoramic glass roof', 'DCC adaptive suspension', 'augmented reality HUD']),
              knownFor: ['AWD performance coupe-SUV EV', 'sport tuned suspension GTX', 'BMW X4 competition at lower price', 'quick 6.3 s 0–100 for electric SUV'],
              watchOut: ['coupe roofline compromises rear passenger space', 'AWD reduces range vs RWD', 'heavy 2.25 t kerb weight', 'premium price approaching ICE luxury rivals']
            }
          ]
        }
      ]
    },
    {
      id: 'id-7',
      name: 'ID.7',
      segment: 'Electric Large Saloon / Wagon',
      description: 'The ID.7 is Volkswagen\'s electric flagship saloon, representing the brand\'s most technologically advanced car. Built on MEB+ with an 86 kWh battery, it offers up to 621 km WLTP range, 200 kW DC charging, and a Tourer estate variant for families requiring maximum practicality.',
      tags: ['electric', 'executive', 'sedan', 'MEB-plus', 'long-range', 'flagship'],
      generations: [
        {
          id: 'id-7-gen1',
          name: 'ID.7 (E3H / MEB+)',
          years: '2023–present',
          platform: 'VW Group MEB+',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'The ID.7 on MEB+ features a larger 86 kWh battery and a redesigned interior with a 15-inch portrait touchscreen, 38-colour ambient lighting, and Smart Air vents that direct airflow without visible louvres. The Tourer estate adds a 605 L boot.',
          heroImage: 'id-7-gen1',
          variants: [
            {
              id: 'volkswagen-id-7-gen1-pro-s',
              name: 'ID.7 Pro S 86 kWh',
              years: '2023–present',
              priceBand: '€44,000–€62,000 new',
              specs: {
                engine: 'single rear permanent-magnet motor',
                powerHp: 286,
                powerKw: 210,
                torqueNm: 545,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 6.5,
                topSpeedKmh: 180,
                electricRangeKm: 621
              },
              dimensions: {
                lengthMm: 4961,
                widthMm: 1862,
                heightMm: 1536,
                wheelbaseMm: 2971,
                bootLitres: 532,
                weightKg: 2320
              },
              options: evComfort(['IQ.LIGHT matrix LED', 'ergoActive massaging seats', 'panoramic glass roof', 'Harman Kardon audio', '200 kW DC charging upgrade']),
              knownFor: ['621 km WLTP class-leading range', '200 kW DC fast charging', 'Passat-sized cabin with flagship feel', 'innovative Smart Air vent system'],
              watchOut: ['heavy at 2.32 t', 'real-world winter range well below 621 km', 'no AWD on Pro S version', 'large turning radius for city use']
            },
            {
              id: 'volkswagen-id-7-gen1-gtx',
              name: 'ID.7 GTX AWD',
              years: '2024–present',
              priceBand: '€52,000–€72,000 new',
              specs: {
                engine: 'dual permanent-magnet motors',
                powerHp: 340,
                powerKw: 250,
                torqueNm: 679,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 5.4,
                topSpeedKmh: 200,
                electricRangeKm: 569
              },
              dimensions: {
                lengthMm: 4961,
                widthMm: 1862,
                heightMm: 1536,
                wheelbaseMm: 2971,
                bootLitres: 532,
                weightKg: 2425
              },
              options: evComfort(['DCC adaptive suspension', 'GTX sport seats', 'IQ.LIGHT matrix LED', 'Harman Kardon audio', 'augmented reality HUD']),
              knownFor: ['AWD traction in all conditions', 'strong 340 hp for a saloon EV', 'GTX performance identity on flagship VW', 'confident high-speed motorway cruiser'],
              watchOut: ['range reduction vs RWD Pro S', 'very heavy at 2.4 t', 'high new price close to Audi e-tron territory', '200 km/h limiter still lower than ICE rivals']
            }
          ]
        }
      ]
    },
    {
      id: 'id-buzz',
      name: 'ID. Buzz',
      segment: 'Electric MPV / Van',
      description: 'The ID. Buzz is Volkswagen\'s emotional reimagining of the iconic Type 2 Microbus, now fully electric on the MEB platform. Available as a five-seat MPV or a long-wheelbase seven-seat version, it combines retro-inspired design with modern EV technology and 0–100 in 6.5 seconds.',
      tags: ['electric', 'MPV', 'retro', 'MEB', 'family', 'iconic'],
      generations: [
        {
          id: 'id-buzz-gen1',
          name: 'ID. Buzz (E89 / MEB)',
          years: '2022–present',
          platform: 'VW Group MEB',
          bodyStyles: ['MPV'],
          summary: 'The ID. Buzz launched in standard wheelbase with five seats before the long-wheelbase seven-seat version followed in 2023. An 82 kWh battery provides up to 423 km WLTP range with 170 kW DC charging. The GTX dual-motor version adds AWD from 2024.',
          heroImage: 'id-buzz-gen1',
          variants: [
            {
              id: 'volkswagen-id-buzz-gen1-swb',
              name: 'ID. Buzz Pro 82 kWh',
              years: '2022–present',
              priceBand: '€45,000–€62,000 new',
              specs: {
                engine: 'single rear permanent-magnet motor',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 310,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 10.0,
                topSpeedKmh: 145,
                electricRangeKm: 423
              },
              dimensions: {
                lengthMm: 4712,
                widthMm: 1985,
                heightMm: 1937,
                wheelbaseMm: 2988,
                bootLitres: 1121,
                weightKg: 2459
              },
              options: evComfort(['two-tone body colours', 'sliding rear doors', 'travel assist', 'panoramic roof']),
              knownFor: ['iconic Type 2 Microbus inspired design', 'huge 1121 L boot with seats folded', 'unique MPV EV in the market', 'strong lifestyle and family appeal'],
              watchOut: ['145 km/h top speed limits motorway use', 'very wide at 1985 mm for urban parking', 'higher price than practical MPV rivals', 'heavy at 2.45 t for MEB platform']
            },
            {
              id: 'volkswagen-id-buzz-gen1-lwb',
              name: 'ID. Buzz LWB 7-Seat',
              years: '2023–present',
              priceBand: '€55,000–€75,000 new',
              specs: {
                engine: 'single rear permanent-magnet motor',
                powerHp: 286,
                powerKw: 210,
                torqueNm: 560,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 7.9,
                topSpeedKmh: 160,
                electricRangeKm: 468
              },
              dimensions: {
                lengthMm: 4962,
                widthMm: 1985,
                heightMm: 1941,
                wheelbaseMm: 3239,
                bootLitres: 647,
                weightKg: 2628
              },
              options: evComfort(['seven-seat configuration', 'captain chairs middle row option', 'IQ.DRIVE travel assist', 'matrix LED headlights', 'Harman Kardon audio']),
              knownFor: ['genuine seven-seat electric MPV', 'longer wheelbase for rear passenger space', 'retro design with modern technology', 'only true electric minibus at this price'],
              watchOut: ['very long at 4.96 m for city parking', 'heavy 2.6 t affects range', 'no DC fast charge above 170 kW on LWB', 'third row cramped for tall adults']
            }
          ]
        }
      ]
    }
  ]
};
