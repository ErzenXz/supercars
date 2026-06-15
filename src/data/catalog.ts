import type { CarMake } from '../types';
import { safetyComfort } from './_shared';
import { skoda } from './makes/skoda';
import { seat } from './makes/seat';
import { cupra } from './makes/cupra';
import { renault } from './makes/renault';
import { peugeot } from './makes/peugeot';
import { dacia } from './makes/dacia';
import { hyundai } from './makes/hyundai';
import { kia } from './makes/kia';
import { nissan } from './makes/nissan';
import { ford } from './makes/ford';
import { honda } from './makes/honda';
import { mazda } from './makes/mazda';
import { volvo } from './makes/volvo';
import { tesla } from './makes/tesla';
import { porsche } from './makes/porsche';

const coreMakes: CarMake[] = [
  {
    id: 'opel',
    name: 'Opel',
    country: 'Germany',
    logoText: '⚡',
    models: [
      {
        id: 'astra',
        name: 'Astra',
        segment: 'Compact family car',
        description: 'Practical C-segment hatchback and wagon with strong diesel versions, affordable parts and many trim levels.',
        tags: ['daily', 'diesel', 'wagon', 'budget'],
        generations: [
          {
            id: 'astra-j',
            name: 'Astra J',
            years: '2009–2018',
            platform: 'GM Delta II',
            bodyStyles: ['Hatchback', 'Wagon', 'Sedan', 'Convertible'],
            summary: 'Solid, comfortable and common in Europe. Sports Tourer is the wagon body with extra boot space.',
            heroImage: 'astra-j',
            variants: [
              {
                id: 'opel-astra-j-16-cdti-110-st',
                name: '1.6 CDTI EcoFlex Sports Tourer 110',
                years: '2014–2018',
                priceBand: '€5,500–€9,000 used EU/Kosovo market dependent',
                specs: {
                  engine: '1.6 CDTI turbo diesel',
                  engineCode: 'B16DTE / B16DTL family',
                  displacementCc: 1598,
                  cylinders: 'Inline-4',
                  powerHp: 110,
                  powerKw: 81,
                  torqueNm: 300,
                  fuel: 'Diesel',
                  gearbox: 'Manual',
                  gears: 6,
                  drive: 'FWD',
                  acceleration0100: 11.4,
                  topSpeedKmh: 195,
                  consumptionL100: 3.9,
                  co2Gkm: 104
                },
                dimensions: {
                  lengthMm: 4698,
                  widthMm: 1814,
                  heightMm: 1535,
                  wheelbaseMm: 2685,
                  bootLitres: 500,
                  weightKg: 1503,
                  tankLitres: 56
                },
                options: safetyComfort(['traffic sign recognition']),
                knownFor: ['economical long-distance diesel', 'large wagon boot', 'comfortable suspension', 'cheap used prices'],
                watchOut: ['DPF/EGR condition', 'service history', 'dual-mass flywheel', 'oil leaks', 'timing chain noise on cold start']
              },
              {
                id: 'opel-astra-j-14t-140-hatch',
                name: '1.4 Turbo Hatchback 140',
                years: '2010–2015',
                priceBand: '€4,500–€7,500 used',
                specs: {
                  engine: '1.4 Turbo petrol',
                  engineCode: 'A14NET',
                  displacementCc: 1364,
                  cylinders: 'Inline-4',
                  powerHp: 140,
                  powerKw: 103,
                  torqueNm: 200,
                  fuel: 'Petrol',
                  gearbox: 'Manual',
                  gears: 6,
                  drive: 'FWD',
                  acceleration0100: 9.7,
                  topSpeedKmh: 202,
                  consumptionL100: 5.9,
                  co2Gkm: 139
                },
                dimensions: { lengthMm: 4419, widthMm: 1814, heightMm: 1510, wheelbaseMm: 2685, bootLitres: 370, weightKg: 1393, tankLitres: 56 },
                options: safetyComfort(),
                knownFor: ['smooth petrol engine', 'good power for city and highway', 'common parts'],
                watchOut: ['coolant leaks', 'turbo condition', 'coil packs', 'oil service intervals']
              }
            ]
          },
          {
            id: 'astra-k',
            name: 'Astra K',
            years: '2015–2021',
            platform: 'D2XX',
            bodyStyles: ['Hatchback', 'Wagon'],
            summary: 'Lighter and more modern than Astra J, with better infotainment and stronger efficiency.',
            heroImage: 'astra-k',
            variants: [
              {
                id: 'opel-astra-k-16-cdti-136',
                name: '1.6 CDTI 136 Innovation',
                years: '2015–2019',
                priceBand: '€7,000–€12,000 used',
                specs: { engine: '1.6 CDTI turbo diesel', engineCode: 'B16DTH', displacementCc: 1598, cylinders: 'Inline-4', powerHp: 136, powerKw: 100, torqueNm: 320, fuel: 'Diesel', gearbox: 'Manual', gears: 6, drive: 'FWD', acceleration0100: 9.6, topSpeedKmh: 205, consumptionL100: 3.7, co2Gkm: 99 },
                dimensions: { lengthMm: 4370, widthMm: 1809, heightMm: 1485, wheelbaseMm: 2662, bootLitres: 370, weightKg: 1320, tankLitres: 48 },
                options: safetyComfort(['IntelliLux LED matrix lights']),
                knownFor: ['efficient diesel', 'lighter body', 'modern cabin', 'good highway comfort'],
                watchOut: ['AdBlue/NOx system on some versions', 'DPF use pattern', 'infotainment glitches']
              }
            ]
          }
        ]
      },
      {
        id: 'insignia',
        name: 'Insignia',
        segment: 'Large family car',
        description: 'Bigger Opel with more comfort, often found as diesel sedan, liftback or Sports Tourer.',
        tags: ['comfort', 'wagon', 'diesel', 'family'],
        generations: [
          {
            id: 'insignia-b',
            name: 'Insignia B',
            years: '2017–2022',
            platform: 'E2XX',
            bodyStyles: ['Sedan', 'Wagon'],
            summary: 'Roomy, refined and strong value compared with premium German brands.',
            heroImage: 'insignia-b',
            variants: [
              {
                id: 'opel-insignia-b-20-cdti-170',
                name: '2.0 CDTI 170 Sports Tourer',
                years: '2017–2020',
                priceBand: '€10,000–€17,000 used',
                specs: { engine: '2.0 CDTI turbo diesel', displacementCc: 1956, cylinders: 'Inline-4', powerHp: 170, powerKw: 125, torqueNm: 400, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'FWD', acceleration0100: 8.9, topSpeedKmh: 222, consumptionL100: 5.2, co2Gkm: 136 },
                dimensions: { lengthMm: 4986, widthMm: 1863, heightMm: 1500, wheelbaseMm: 2829, bootLitres: 560, weightKg: 1633, tankLitres: 62 },
                options: safetyComfort(['adaptive FlexRide chassis']),
                knownFor: ['big interior', 'strong diesel torque', 'premium-like comfort'],
                watchOut: ['automatic gearbox servicing', 'DPF/EGR', 'suspension wear on bad roads']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    country: 'Germany',
    logoText: 'VW',
    models: [
      {
        id: 'golf',
        name: 'Golf',
        segment: 'Compact benchmark',
        description: 'The default European hatchback: many engines, trims, parts and generations.',
        tags: ['daily', 'diesel', 'hatchback', 'benchmark'],
        generations: [
          {
            id: 'golf-7',
            name: 'Golf VII',
            years: '2012–2020',
            platform: 'MQB',
            bodyStyles: ['Hatchback', 'Wagon'],
            summary: 'Balanced, premium-feeling compact with wide engine range and strong resale value.',
            heroImage: 'golf-7',
            variants: [
              {
                id: 'vw-golf-7-16-tdi-110',
                name: '1.6 TDI 110 Comfortline',
                years: '2013–2017',
                priceBand: '€7,000–€12,500 used',
                specs: { engine: '1.6 TDI', engineCode: 'CLHA/CXXB family', displacementCc: 1598, cylinders: 'Inline-4', powerHp: 110, powerKw: 81, torqueNm: 250, fuel: 'Diesel', gearbox: 'Manual', gears: 5, drive: 'FWD', acceleration0100: 10.7, topSpeedKmh: 195, consumptionL100: 3.8, co2Gkm: 99 },
                dimensions: { lengthMm: 4255, widthMm: 1799, heightMm: 1452, wheelbaseMm: 2637, bootLitres: 380, weightKg: 1280, tankLitres: 50 },
                options: safetyComfort(['front assist', 'park assist']),
                knownFor: ['very efficient', 'easy to sell', 'good cabin quality'],
                watchOut: ['timing belt history', 'injectors', 'EGR cooler', 'clutch on high mileage cars']
              },
              {
                id: 'vw-golf-7-gti-230',
                name: 'GTI Performance 230',
                years: '2013–2020',
                priceBand: '€16,000–€28,000 used',
                specs: { engine: '2.0 TSI', engineCode: 'EA888', displacementCc: 1984, cylinders: 'Inline-4', powerHp: 230, powerKw: 169, torqueNm: 350, fuel: 'Petrol', gearbox: 'DCT', gears: 6, drive: 'FWD', acceleration0100: 6.4, topSpeedKmh: 250, consumptionL100: 6.4, co2Gkm: 150 },
                dimensions: { lengthMm: 4268, widthMm: 1799, heightMm: 1442, wheelbaseMm: 2631, bootLitres: 380, weightKg: 1382, tankLitres: 50 },
                options: safetyComfort(['limited-slip front differential']),
                knownFor: ['fast but usable', 'DSG option', 'great tuning scene'],
                watchOut: ['water pump/thermostat leaks', 'DSG service', 'modified examples', 'carbon buildup']
              }
            ]
          },
          {
            id: 'golf-8',
            name: 'Golf VIII',
            years: '2019–present',
            platform: 'MQB Evo',
            bodyStyles: ['Hatchback', 'Wagon'],
            summary: 'More digital, safer and newer, but some early cars had software complaints.',
            heroImage: 'golf-8',
            variants: [
              {
                id: 'vw-golf-8-20-tdi-150',
                name: '2.0 TDI 150 Style DSG',
                years: '2020–present',
                priceBand: '€18,000–€30,000 used',
                specs: { engine: '2.0 TDI', displacementCc: 1968, cylinders: 'Inline-4', powerHp: 150, powerKw: 110, torqueNm: 360, fuel: 'Diesel', gearbox: 'DCT', gears: 7, drive: 'FWD', acceleration0100: 8.8, topSpeedKmh: 223, consumptionL100: 4.5, co2Gkm: 119 },
                dimensions: { lengthMm: 4284, widthMm: 1789, heightMm: 1456, wheelbaseMm: 2636, bootLitres: 381, weightKg: 1465, tankLitres: 45 },
                options: safetyComfort(['travel assist', 'IQ.Light LED matrix']),
                knownFor: ['strong diesel', 'modern driver assistance', 'quiet highway driving'],
                watchOut: ['software updates', 'touch-control ergonomics', 'AdBlue sensors']
              }
            ]
          }
        ]
      },
      {
        id: 'passat',
        name: 'Passat',
        segment: 'Large family car',
        description: 'Large, practical and refined VW sedan/wagon with strong diesel reputation.',
        tags: ['family', 'wagon', 'diesel', 'comfort'],
        generations: [
          {
            id: 'passat-b8',
            name: 'Passat B8',
            years: '2014–2023',
            platform: 'MQB',
            bodyStyles: ['Sedan', 'Wagon'],
            summary: 'One of the strongest used-family-car choices if serviced well.',
            heroImage: 'passat-b8',
            variants: [
              {
                id: 'vw-passat-b8-20-tdi-150',
                name: '2.0 TDI 150 Highline Variant',
                years: '2015–2020',
                priceBand: '€12,000–€22,000 used',
                specs: { engine: '2.0 TDI', displacementCc: 1968, cylinders: 'Inline-4', powerHp: 150, powerKw: 110, torqueNm: 340, fuel: 'Diesel', gearbox: 'DCT', gears: 6, drive: 'FWD', acceleration0100: 8.9, topSpeedKmh: 218, consumptionL100: 4.6, co2Gkm: 119 },
                dimensions: { lengthMm: 4767, widthMm: 1832, heightMm: 1516, wheelbaseMm: 2791, bootLitres: 650, weightKg: 1541, tankLitres: 66 },
                options: safetyComfort(['digital cockpit', 'adaptive chassis control']),
                knownFor: ['huge boot', 'excellent highway car', 'premium cabin feel'],
                watchOut: ['DSG service records', 'timing belt history', 'AdBlue system', 'front suspension wear']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'bmw',
    name: 'BMW',
    country: 'Germany',
    logoText: 'BMW',
    models: [
      {
        id: '3-series',
        name: '3 Series',
        segment: 'Premium sport sedan',
        description: 'Sportier premium sedan/wagon with rear-wheel-drive roots and many diesel/petrol engines.',
        tags: ['premium', 'sport', 'sedan', 'diesel'],
        generations: [
          {
            id: 'f30',
            name: 'F30/F31',
            years: '2011–2019',
            platform: 'F3x',
            bodyStyles: ['Sedan', 'Wagon'],
            summary: 'Very popular used BMW generation with strong diesel options and good driving feel.',
            heroImage: 'bmw-f30',
            variants: [
              {
                id: 'bmw-f30-320d-184',
                name: '320d 184 Sport Line',
                years: '2012–2015',
                priceBand: '€12,000–€20,000 used',
                specs: { engine: '2.0 turbo diesel', engineCode: 'N47D20', displacementCc: 1995, cylinders: 'Inline-4', powerHp: 184, powerKw: 135, torqueNm: 380, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 7.4, topSpeedKmh: 235, consumptionL100: 4.5, co2Gkm: 119 },
                dimensions: { lengthMm: 4624, widthMm: 1811, heightMm: 1429, wheelbaseMm: 2810, bootLitres: 480, weightKg: 1495, tankLitres: 57 },
                options: safetyComfort(['M Sport package', 'xDrive AWD']),
                knownFor: ['quick and efficient', 'great ZF 8-speed automatic', 'fun handling'],
                watchOut: ['timing chain noise on N47', 'swirl flaps/EGR', 'run-flat tire wear', 'xDrive transfer case service']
              },
              {
                id: 'bmw-f30-330i-252',
                name: '330i 252 M Sport',
                years: '2015–2019',
                priceBand: '€20,000–€32,000 used',
                specs: { engine: '2.0 turbo petrol', engineCode: 'B48', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 252, powerKw: 185, torqueNm: 350, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 5.8, topSpeedKmh: 250, consumptionL100: 5.8, co2Gkm: 136 },
                dimensions: { lengthMm: 4633, widthMm: 1811, heightMm: 1429, wheelbaseMm: 2810, bootLitres: 480, weightKg: 1525, tankLitres: 60 },
                options: safetyComfort(['M adaptive suspension', 'Harman Kardon audio']),
                knownFor: ['fast petrol performance', 'good reliability when maintained', 'tuning potential'],
                watchOut: ['cooling system leaks', 'oil service history', 'modified examples']
              }
            ]
          },
          {
            id: 'g20',
            name: 'G20/G21',
            years: '2019–present',
            platform: 'CLAR',
            bodyStyles: ['Sedan', 'Wagon'],
            summary: 'More refined, tech-heavy and premium than F30, with excellent engines.',
            heroImage: 'bmw-g20',
            variants: [
              {
                id: 'bmw-g20-320d-190',
                name: '320d 190 M Sport',
                years: '2019–present',
                priceBand: '€25,000–€45,000 used',
                specs: { engine: '2.0 turbo diesel mild hybrid', engineCode: 'B47', displacementCc: 1995, cylinders: 'Inline-4', powerHp: 190, powerKw: 140, torqueNm: 400, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 6.8, topSpeedKmh: 240, consumptionL100: 4.3, co2Gkm: 112 },
                dimensions: { lengthMm: 4709, widthMm: 1827, heightMm: 1442, wheelbaseMm: 2851, bootLitres: 480, weightKg: 1575, tankLitres: 59 },
                options: safetyComfort(['laser lights', 'driving assistant professional']),
                knownFor: ['excellent diesel torque', 'modern iDrive', 'sharp chassis'],
                watchOut: ['AdBlue/NOx sensors', 'expensive tires/brakes', 'software recalls']
              }
            ]
          }
        ]
      },
      {
        id: 'x5',
        name: 'X5',
        segment: 'Premium SUV',
        description: 'Large luxury SUV with strong diesel, petrol and plug-in hybrid powertrains.',
        tags: ['premium', 'suv', 'family', 'awd'],
        generations: [
          {
            id: 'g05',
            name: 'G05',
            years: '2018–present',
            platform: 'CLAR',
            bodyStyles: ['SUV'],
            summary: 'Comfortable, powerful and tech-rich SUV, but ownership costs are premium.',
            heroImage: 'bmw-g05',
            variants: [
              {
                id: 'bmw-g05-x5-30d',
                name: 'xDrive30d M Sport',
                years: '2018–present',
                priceBand: '€45,000–€85,000 used',
                specs: { engine: '3.0 turbo diesel', engineCode: 'B57', displacementCc: 2993, cylinders: 'Inline-6', powerHp: 265, powerKw: 195, torqueNm: 620, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 6.5, topSpeedKmh: 230, consumptionL100: 6.8, co2Gkm: 179 },
                dimensions: { lengthMm: 4922, widthMm: 2004, heightMm: 1745, wheelbaseMm: 2975, bootLitres: 650, weightKg: 2185, tankLitres: 80 },
                options: safetyComfort(['air suspension', 'third row seats']),
                knownFor: ['strong inline-six diesel', 'luxury cabin', 'excellent long trips'],
                watchOut: ['air suspension', 'large tire costs', 'EGR/AdBlue', 'complex electronics']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'mercedes-benz',
    name: 'Mercedes-Benz',
    country: 'Germany',
    logoText: '★',
    models: [
      {
        id: 'c-class',
        name: 'C-Class',
        segment: 'Premium comfort sedan',
        description: 'Comfort-focused premium sedan/wagon with refined diesel and petrol engines.',
        tags: ['premium', 'comfort', 'sedan', 'diesel'],
        generations: [
          {
            id: 'w205',
            name: 'W205/S205',
            years: '2014–2021',
            platform: 'MRA',
            bodyStyles: ['Sedan', 'Wagon', 'Coupe', 'Convertible'],
            summary: 'Elegant interior, strong comfort and broad engine range.',
            heroImage: 'w205',
            variants: [
              {
                id: 'mercedes-w205-c220d',
                name: 'C 220 d Avantgarde',
                years: '2015–2021',
                priceBand: '€18,000–€35,000 used',
                specs: { engine: '2.0/2.1 turbo diesel', engineCode: 'OM651/OM654 family', displacementCc: 2143, cylinders: 'Inline-4', powerHp: 170, powerKw: 125, torqueNm: 400, fuel: 'Diesel', gearbox: 'Automatic', gears: 9, drive: 'RWD', acceleration0100: 7.4, topSpeedKmh: 233, consumptionL100: 4.0, co2Gkm: 109 },
                dimensions: { lengthMm: 4686, widthMm: 1810, heightMm: 1442, wheelbaseMm: 2840, bootLitres: 480, weightKg: 1570, tankLitres: 66 },
                options: safetyComfort(['air body control', 'Burmester audio']),
                knownFor: ['premium interior', 'very comfortable', 'strong diesel torque'],
                watchOut: ['AdBlue/NOx sensors', 'air suspension if equipped', 'service costs', 'infotainment age']
              }
            ]
          }
        ]
      },
      {
        id: 'e-class',
        name: 'E-Class',
        segment: 'Executive car',
        description: 'Large executive sedan/wagon focused on comfort, safety and long-distance refinement.',
        tags: ['luxury', 'comfort', 'sedan', 'wagon'],
        generations: [
          {
            id: 'w213',
            name: 'W213/S213',
            years: '2016–2023',
            platform: 'MRA',
            bodyStyles: ['Sedan', 'Wagon'],
            summary: 'Luxury cabin, excellent safety tech and very strong diesel engines.',
            heroImage: 'w213',
            variants: [
              {
                id: 'mercedes-w213-e220d',
                name: 'E 220 d 9G-Tronic',
                years: '2016–2023',
                priceBand: '€25,000–€50,000 used',
                specs: { engine: '2.0 turbo diesel', engineCode: 'OM654', displacementCc: 1950, cylinders: 'Inline-4', powerHp: 194, powerKw: 143, torqueNm: 400, fuel: 'Diesel', gearbox: 'Automatic', gears: 9, drive: 'RWD', acceleration0100: 7.3, topSpeedKmh: 240, consumptionL100: 4.3, co2Gkm: 112 },
                dimensions: { lengthMm: 4923, widthMm: 1852, heightMm: 1468, wheelbaseMm: 2939, bootLitres: 540, weightKg: 1680, tankLitres: 66 },
                options: safetyComfort(['driver assistance package', 'multibeam LED']),
                knownFor: ['excellent taxi-like durability when maintained', 'comfortable ride', 'high safety tech'],
                watchOut: ['air suspension on estates', 'NOx sensors', 'expensive accident repairs']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'audi',
    name: 'Audi',
    country: 'Germany',
    logoText: '◎◎◎◎',
    models: [
      {
        id: 'a4',
        name: 'A4',
        segment: 'Premium sedan/wagon',
        description: 'Refined premium sedan and Avant wagon with strong quattro options.',
        tags: ['premium', 'wagon', 'diesel', 'quattro'],
        generations: [
          {
            id: 'a4-b9',
            name: 'A4 B9',
            years: '2015–2024',
            platform: 'MLB Evo',
            bodyStyles: ['Sedan', 'Wagon'],
            summary: 'Very refined interior, quiet ride and efficient engines.',
            heroImage: 'a4-b9',
            variants: [
              {
                id: 'audi-a4-b9-20-tdi-150',
                name: '2.0 TDI 150 S tronic',
                years: '2016–2020',
                priceBand: '€18,000–€32,000 used',
                specs: { engine: '2.0 TDI', displacementCc: 1968, cylinders: 'Inline-4', powerHp: 150, powerKw: 110, torqueNm: 320, fuel: 'Diesel', gearbox: 'DCT', gears: 7, drive: 'FWD', acceleration0100: 8.7, topSpeedKmh: 219, consumptionL100: 4.1, co2Gkm: 109 },
                dimensions: { lengthMm: 4726, widthMm: 1842, heightMm: 1427, wheelbaseMm: 2820, bootLitres: 480, weightKg: 1505, tankLitres: 40 },
                options: safetyComfort(['virtual cockpit', 'quattro AWD']),
                knownFor: ['quiet cabin', 'premium materials', 'efficient diesel'],
                watchOut: ['S tronic service', 'AdBlue/NOx', 'front suspension arms', 'high option dependence']
              }
            ]
          }
        ]
      },
      {
        id: 'q5',
        name: 'Q5',
        segment: 'Premium SUV',
        description: 'Midsize premium SUV with quattro image, comfort and strong resale value.',
        tags: ['premium', 'suv', 'awd', 'family'],
        generations: [
          {
            id: 'q5-fy',
            name: 'Q5 FY',
            years: '2017–present',
            platform: 'MLB Evo',
            bodyStyles: ['SUV'],
            summary: 'Comfortable premium SUV with broad engine and hybrid range.',
            heroImage: 'q5-fy',
            variants: [
              {
                id: 'audi-q5-fy-20-tdi-190',
                name: '40 TDI quattro S tronic',
                years: '2017–2020',
                priceBand: '€28,000–€45,000 used',
                specs: { engine: '2.0 TDI', displacementCc: 1968, cylinders: 'Inline-4', powerHp: 190, powerKw: 140, torqueNm: 400, fuel: 'Diesel', gearbox: 'DCT', gears: 7, drive: 'AWD', acceleration0100: 7.9, topSpeedKmh: 218, consumptionL100: 5.4, co2Gkm: 144 },
                dimensions: { lengthMm: 4663, widthMm: 1893, heightMm: 1659, wheelbaseMm: 2819, bootLitres: 550, weightKg: 1845, tankLitres: 70 },
                options: safetyComfort(['adaptive air suspension', 'Bang & Olufsen audio']),
                knownFor: ['premium SUV feel', 'comfortable ride', 'strong quattro traction'],
                watchOut: ['S tronic service', 'expensive tires', 'AdBlue systems', 'panoramic roof leaks']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'toyota',
    name: 'Toyota',
    country: 'Japan',
    logoText: 'T',
    models: [
      {
        id: 'corolla',
        name: 'Corolla',
        segment: 'Reliable compact',
        description: 'Reliability-focused compact car with efficient hybrid engines and simple ownership.',
        tags: ['reliable', 'hybrid', 'daily', 'low-cost'],
        generations: [
          {
            id: 'corolla-e210',
            name: 'E210',
            years: '2018–present',
            platform: 'TNGA-C',
            bodyStyles: ['Hatchback', 'Sedan', 'Wagon'],
            summary: 'Efficient hybrid daily car with strong reliability reputation.',
            heroImage: 'corolla-e210',
            variants: [
              {
                id: 'toyota-corolla-e210-18-hybrid',
                name: '1.8 Hybrid Touring Sports',
                years: '2019–present',
                priceBand: '€18,000–€32,000 used',
                specs: { engine: '1.8 hybrid petrol', displacementCc: 1798, cylinders: 'Inline-4', powerHp: 122, powerKw: 90, torqueNm: 142, fuel: 'Hybrid', gearbox: 'CVT', drive: 'FWD', acceleration0100: 11.1, topSpeedKmh: 180, consumptionL100: 4.4, co2Gkm: 101 },
                dimensions: { lengthMm: 4650, widthMm: 1790, heightMm: 1435, wheelbaseMm: 2700, bootLitres: 598, weightKg: 1400, tankLitres: 43 },
                options: safetyComfort(['Toyota Safety Sense', 'JBL audio']),
                knownFor: ['very efficient city use', 'reliable hybrid system', 'large wagon boot'],
                watchOut: ['hybrid battery warranty status', 'CVT feel', 'rear seat room vs rivals']
              }
            ]
          }
        ]
      },
      {
        id: 'rav4',
        name: 'RAV4',
        segment: 'Family SUV',
        description: 'Reliable midsize SUV, especially popular in hybrid form.',
        tags: ['reliable', 'hybrid', 'suv', 'family'],
        generations: [
          {
            id: 'rav4-xa50',
            name: 'XA50',
            years: '2018–present',
            platform: 'TNGA-K',
            bodyStyles: ['SUV'],
            summary: 'Efficient hybrid SUV with strong resale value and practical cabin.',
            heroImage: 'rav4-xa50',
            variants: [
              {
                id: 'toyota-rav4-xa50-25-hybrid-awd',
                name: '2.5 Hybrid AWD-i',
                years: '2019–present',
                priceBand: '€28,000–€48,000 used',
                specs: { engine: '2.5 hybrid petrol', displacementCc: 2487, cylinders: 'Inline-4', powerHp: 222, powerKw: 163, torqueNm: 221, fuel: 'Hybrid', gearbox: 'CVT', drive: 'AWD', acceleration0100: 8.1, topSpeedKmh: 180, consumptionL100: 5.7, co2Gkm: 131 },
                dimensions: { lengthMm: 4600, widthMm: 1855, heightMm: 1685, wheelbaseMm: 2690, bootLitres: 580, weightKg: 1690, tankLitres: 55 },
                options: safetyComfort(['AWD-i electric rear axle', '360 camera']),
                knownFor: ['low running costs for SUV', 'strong reliability', 'good family space'],
                watchOut: ['cable corrosion on some AWD hybrids', 'higher purchase price', 'CVT noise under hard acceleration']
              }
            ]
          }
        ]
      }
    ]
  }
];

/**
 * Full catalog: the six hand-curated "core" makes plus every modular make file
 * under ./makes. Sorted alphabetically for a tidy make filter and browse order.
 */
export const makes: CarMake[] = [
  ...coreMakes,
  skoda,
  seat,
  cupra,
  renault,
  peugeot,
  dacia,
  hyundai,
  kia,
  nissan,
  ford,
  honda,
  mazda,
  volvo,
  tesla,
  porsche
].sort((a, b) => a.name.localeCompare(b.name));
