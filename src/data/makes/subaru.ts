import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const subaru: CarMake = {
  id: 'subaru',
  name: 'Subaru',
  country: 'Japan',
  logoText: 'S',
  models: [
    {
      id: 'impreza',
      name: 'Impreza',
      segment: 'C-segment hatchback',
      description: 'The Subaru Impreza is a compact all-wheel-drive hatchback underpinned by Subaru\'s Symmetrical AWD. The sixth-generation GU adopts the e-Boxer mild-hybrid system, pairing a 2.0-litre horizontally opposed engine with a small motor-generator for improved efficiency.',
      tags: ['hatchback', 'AWD', 'hybrid', 'all-weather'],
      generations: [
        {
          id: 'impreza-gu',
          name: 'GU (Sixth Generation)',
          years: '2023–present',
          platform: 'Subaru Global Platform (SGP) evolved',
          bodyStyles: ['Hatchback'],
          summary: 'The GU Impreza arrives with e-Boxer mild-hybrid technology, Symmetrical AWD as standard, and EyeSight driver assistance. It is exclusively a five-door hatchback in the European market, dropping the saloon body from Europe.',
          heroImage: 'subaru-impreza-gu',
          variants: [
            {
              id: 'subaru-impreza-gu-20-eboxer',
              name: '2.0 e-Boxer 150 PS AWD',
              years: '2023–present',
              priceBand: '€22,000–€30,000 used',
              specs: {
                engine: '2.0-litre horizontally opposed four-cylinder + e-Boxer motor-generator',
                engineCode: 'FB20E',
                displacementCc: 1995,
                cylinders: 'H4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 194,
                fuel: 'Hybrid',
                gearbox: 'CVT',
                drive: 'AWD',
                acceleration0100: 10.5,
                topSpeedKmh: 195,
                consumptionL100: 6.5,
                co2Gkm: 149
              },
              dimensions: {
                lengthMm: 4475,
                widthMm: 1820,
                heightMm: 1440,
                wheelbaseMm: 2670,
                bootLitres: 345,
                weightKg: 1500,
                tankLitres: 48
              },
              options: safetyComfort(['Subaru EyeSight driver assist', 'heated front seats', 'rear-view camera', 'wireless Apple CarPlay/Android Auto']),
              knownFor: ['Symmetrical AWD confidence in all conditions', 'flat-four characteristic engine note', 'EyeSight safety suite as standard', 'low centre of gravity from boxer engine'],
              watchOut: ['CVT dulls driver engagement', 'e-Boxer mild-hybrid modest fuel saving', 'small boot for C-segment hatchback', 'limited EU dealer network']
            }
          ]
        }
      ]
    },
    {
      id: 'crosstrek',
      name: 'Crosstrek',
      segment: 'B/C-segment crossover SUV',
      description: 'The Subaru Crosstrek (XV in some markets) is a raised Impreza hatchback with SUV styling and Subaru\'s Symmetrical AWD. The third-generation KU adopts the e-Boxer mild-hybrid system, improving efficiency while retaining the proven AWD capability.',
      tags: ['SUV', 'AWD', 'hybrid', 'crossover', 'all-terrain'],
      generations: [
        {
          id: 'crosstrek-ku',
          name: 'KU (Third Generation)',
          years: '2023–present',
          platform: 'Subaru Global Platform (SGP)',
          bodyStyles: ['SUV'],
          summary: 'The third-generation Crosstrek raises the e-Boxer hybrid technology to 17.8 kW of electric assist, while maintaining the ground clearance and approach angles that suit light off-road use. Subaru EyeSight is standard.',
          heroImage: 'subaru-crosstrek-ku',
          variants: [
            {
              id: 'subaru-crosstrek-ku-20-eboxer',
              name: '2.0 e-Boxer 150 PS AWD',
              years: '2023–present',
              priceBand: '€24,000–€33,000 used',
              specs: {
                engine: '2.0-litre horizontally opposed four-cylinder + e-Boxer motor-generator',
                engineCode: 'FB20E',
                displacementCc: 1995,
                cylinders: 'H4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 194,
                fuel: 'Hybrid',
                gearbox: 'CVT',
                drive: 'AWD',
                acceleration0100: 10.9,
                topSpeedKmh: 188,
                consumptionL100: 6.7,
                co2Gkm: 152
              },
              dimensions: {
                lengthMm: 4480,
                widthMm: 1800,
                heightMm: 1575,
                wheelbaseMm: 2670,
                bootLitres: 385,
                weightKg: 1580,
                tankLitres: 48
              },
              options: safetyComfort(['Subaru EyeSight', 'X-Mode off-road system', 'heated front seats', 'rear-view camera']),
              knownFor: ['Symmetrical AWD plus X-Mode for light off-road', 'raised ground clearance 220 mm', 'EyeSight standard on all trims', 'proven reliability record'],
              watchOut: ['CVT removes engaging driving feel', 'e-Boxer mild-hybrid modest economy improvement', 'higher ride height increases body roll', 'average boot space for the class']
            },
            {
              id: 'subaru-crosstrek-ku-20-eboxer-sport',
              name: '2.0 e-Boxer 150 PS AWD Sport',
              years: '2023–present',
              priceBand: '€27,000–€36,000 used',
              specs: {
                engine: '2.0-litre horizontally opposed four-cylinder + e-Boxer motor-generator',
                engineCode: 'FB20E',
                displacementCc: 1995,
                cylinders: 'H4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 194,
                fuel: 'Hybrid',
                gearbox: 'CVT',
                drive: 'AWD',
                acceleration0100: 10.9,
                topSpeedKmh: 188,
                consumptionL100: 6.8,
                co2Gkm: 154
              },
              dimensions: {
                lengthMm: 4480,
                widthMm: 1800,
                heightMm: 1575,
                wheelbaseMm: 2670,
                bootLitres: 385,
                weightKg: 1590,
                tankLitres: 48
              },
              options: safetyComfort(['Subaru EyeSight', 'X-Mode with hill descent', 'heated leather seats', 'Harman Kardon audio', 'wireless charging']),
              knownFor: ['sport trim adds Harman Kardon audio', 'heated leather seats for comfort', 'comprehensive X-Mode off-road modes', 'higher specification without price premium over rivals'],
              watchOut: ['same drivetrain as base trim', 'sport label is equipment not performance', 'heavier than entry trim', 'no manual gearbox available']
            }
          ]
        }
      ]
    },
    {
      id: 'forester',
      name: 'Forester',
      segment: 'C/D-segment SUV',
      description: 'The Subaru Forester is a practical family SUV with class-leading headroom and driver visibility. The sixth-generation SK uses the e-Boxer mild-hybrid system with Symmetrical AWD, EyeSight, and a large panoramic sunroof on higher trims.',
      tags: ['SUV', 'AWD', 'hybrid', 'family', 'practical'],
      generations: [
        {
          id: 'forester-sk',
          name: 'SK (Fifth Generation)',
          years: '2018–present',
          platform: 'Subaru Global Platform (SGP)',
          bodyStyles: ['SUV'],
          summary: 'The fifth-generation Forester adopts the Subaru Global Platform with standard EyeSight on all trims and the e-Boxer mild-hybrid option. It maintains the Forester tradition of exceptional headroom and driving visibility.',
          heroImage: 'subaru-forester-sk',
          variants: [
            {
              id: 'subaru-forester-sk-20-eboxer',
              name: '2.0 e-Boxer 150 PS AWD e-Boxer',
              years: '2019–present',
              priceBand: '€22,000–€34,000 used',
              specs: {
                engine: '2.0-litre horizontally opposed four-cylinder + e-Boxer 12.3 kW motor-generator',
                engineCode: 'FB20E',
                displacementCc: 1995,
                cylinders: 'H4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 194,
                fuel: 'Hybrid',
                gearbox: 'CVT',
                drive: 'AWD',
                acceleration0100: 11.9,
                topSpeedKmh: 188,
                consumptionL100: 6.7,
                co2Gkm: 153
              },
              dimensions: {
                lengthMm: 4640,
                widthMm: 1815,
                heightMm: 1730,
                wheelbaseMm: 2670,
                bootLitres: 520,
                weightKg: 1620,
                tankLitres: 63
              },
              options: safetyComfort(['Subaru EyeSight', 'X-Mode dual-mode off-road', 'heated front seats', 'panoramic power moonroof', 'Harman Kardon audio']),
              knownFor: ['class-leading interior headroom and visibility', 'X-Mode light off-road capability', '520-litre boot for family use', 'proven Subaru reliability and longevity'],
              watchOut: ['e-Boxer mild-hybrid gives modest fuel savings only', 'CVT removes driver engagement', 'fuel consumption higher than European diesel rivals', 'premium price for Japanese brand']
            },
            {
              id: 'subaru-forester-sk-20-eboxer-top',
              name: '2.0 e-Boxer 150 PS AWD Platinum',
              years: '2021–present',
              priceBand: '€28,000–€40,000 used',
              specs: {
                engine: '2.0-litre horizontally opposed four-cylinder + e-Boxer motor-generator',
                engineCode: 'FB20E',
                displacementCc: 1995,
                cylinders: 'H4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 194,
                fuel: 'Hybrid',
                gearbox: 'CVT',
                drive: 'AWD',
                acceleration0100: 11.9,
                topSpeedKmh: 188,
                consumptionL100: 6.8,
                co2Gkm: 155
              },
              dimensions: {
                lengthMm: 4640,
                widthMm: 1815,
                heightMm: 1730,
                wheelbaseMm: 2670,
                bootLitres: 520,
                weightKg: 1640,
                tankLitres: 63
              },
              options: safetyComfort(['Subaru EyeSight 360', 'X-Mode dual off-road modes', 'Nappa leather', 'panoramic glass roof', 'Harman Kardon 8-speaker', 'heads-up display']),
              knownFor: ['panoramic glass roof exceptional interior light', 'comprehensive Platinum specification', 'X-Mode and EyeSight full suite', 'Nappa leather and premium audio'],
              watchOut: ['same powertrain throughout the range', 'expensive Platinum pricing versus rivals', 'heavier top spec reduces performance', 'fuel economy unchanged from lower trims']
            }
          ]
        }
      ]
    },
    {
      id: 'outback',
      name: 'Outback',
      segment: 'D-segment wagon/SUV',
      description: 'The Subaru Outback is a raised all-wheel-drive wagon combining estate car practicality with SUV ground clearance. The sixth-generation BT uses a 2.5-litre horizontally opposed naturally aspirated engine with a Lineartronic CVT and Symmetrical AWD.',
      tags: ['Wagon', 'SUV', 'AWD', 'practical', 'touring'],
      generations: [
        {
          id: 'outback-bt',
          name: 'BT (Sixth Generation)',
          years: '2021–present',
          platform: 'Subaru Global Platform (SGP)',
          bodyStyles: ['Wagon', 'SUV'],
          summary: 'The sixth-generation Outback gains a 11.6-inch portrait touchscreen and full EyeSight standard safety technology. The 2.5-litre Boxer engine with Lineartronic CVT is the sole powertrain for Europe, offering a relaxed touring character.',
          heroImage: 'subaru-outback-bt',
          variants: [
            {
              id: 'subaru-outback-bt-25-lineartronic',
              name: '2.5 Boxer 169 PS AWD Lineartronic',
              years: '2021–present',
              priceBand: '€26,000–€38,000 used',
              specs: {
                engine: '2.5-litre naturally aspirated horizontally opposed four-cylinder',
                engineCode: 'FB25',
                displacementCc: 2498,
                cylinders: 'H4',
                powerHp: 169,
                powerKw: 124,
                torqueNm: 252,
                fuel: 'Petrol',
                gearbox: 'CVT',
                drive: 'AWD',
                acceleration0100: 10.0,
                topSpeedKmh: 200,
                consumptionL100: 7.8,
                co2Gkm: 178
              },
              dimensions: {
                lengthMm: 4870,
                widthMm: 1875,
                heightMm: 1675,
                wheelbaseMm: 2745,
                bootLitres: 560,
                weightKg: 1700,
                tankLitres: 63
              },
              options: safetyComfort(['Subaru EyeSight', 'X-Mode', 'power liftgate', 'Harman Kardon 12-speaker', 'heads-up display', 'heated and ventilated seats']),
              knownFor: ['560-litre estate-sized boot', '213 mm ground clearance for gravel roads', 'comfortable long-distance touring', 'EyeSight full driver assistance suite'],
              watchOut: ['high fuel consumption for a large petrol', 'CVT dulls driving dynamics', 'no diesel available in current generation', 'large dimensions limit urban manoeuvrability']
            },
            {
              id: 'subaru-outback-bt-25-premium',
              name: '2.5 Boxer 169 PS AWD Premium',
              years: '2021–present',
              priceBand: '€30,000–€42,000 used',
              specs: {
                engine: '2.5-litre naturally aspirated horizontally opposed four-cylinder',
                engineCode: 'FB25',
                displacementCc: 2498,
                cylinders: 'H4',
                powerHp: 169,
                powerKw: 124,
                torqueNm: 252,
                fuel: 'Petrol',
                gearbox: 'CVT',
                drive: 'AWD',
                acceleration0100: 10.0,
                topSpeedKmh: 200,
                consumptionL100: 8.0,
                co2Gkm: 182
              },
              dimensions: {
                lengthMm: 4870,
                widthMm: 1875,
                heightMm: 1675,
                wheelbaseMm: 2745,
                bootLitres: 560,
                weightKg: 1720,
                tankLitres: 63
              },
              options: safetyComfort(['Subaru EyeSight 360', 'X-Mode with hill descent control', 'Nappa leather', 'panoramic roof', 'Harman Kardon premium sound', 'wireless charging', 'power liftgate']),
              knownFor: ['panoramic roof floods cabin with light', 'Nappa leather exceptional for the price', 'comprehensive EyeSight 360 safety package', 'best-in-class estate ground clearance'],
              watchOut: ['same powertrain as entry trim', 'heavy at 1,720 kg impacts economy', 'premium pricing competes with German premium wagons', 'CO2 penalty for business drivers']
            }
          ]
        }
      ]
    },
    {
      id: 'wrx',
      name: 'WRX',
      segment: 'C/D-segment performance sedan',
      description: 'The Subaru WRX is a performance-focused all-wheel-drive sedan descended from the legendary World Rally Championship-winning lineage. The VB generation uses a new 2.4-litre turbocharged Boxer engine making 272 PS with a manual or sport Lineartronic transmission.',
      tags: ['Sedan', 'performance', 'AWD', 'turbocharged', 'rally'],
      generations: [
        {
          id: 'wrx-vb',
          name: 'VB (Current Generation)',
          years: '2021–present',
          platform: 'Subaru Global Platform (SGP) sport',
          bodyStyles: ['Sedan'],
          summary: 'The fifth-generation WRX debuts a larger 2.4-litre FA24F turbocharged Boxer and a new 8-speed sport Lineartronic CVT alongside the traditional six-speed manual. The suspension is comprehensively overhauled for sharper handling.',
          heroImage: 'subaru-wrx-vb',
          variants: [
            {
              id: 'subaru-wrx-vb-24-manual',
              name: '2.4 Turbo 272 PS AWD Manual',
              years: '2022–present',
              priceBand: '€34,000–€46,000 used',
              specs: {
                engine: '2.4-litre turbocharged horizontally opposed four-cylinder (FA24F)',
                engineCode: 'FA24F',
                displacementCc: 2387,
                cylinders: 'H4',
                powerHp: 272,
                powerKw: 200,
                torqueNm: 350,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'AWD',
                acceleration0100: 5.5,
                topSpeedKmh: 240,
                consumptionL100: 9.5,
                co2Gkm: 217
              },
              dimensions: {
                lengthMm: 4670,
                widthMm: 1825,
                heightMm: 1455,
                wheelbaseMm: 2670,
                bootLitres: 360,
                weightKg: 1555,
                tankLitres: 60
              },
              options: safetyComfort(['Subaru EyeSight', 'Brembo front brakes', 'STI Sport suspension', 'DCCD AWD system', 'Recaro front seats option']),
              knownFor: ['iconic turbocharged flat-four rumble and response', 'Symmetrical AWD for all-weather performance', 'rally-derived driving character', 'Recaro seat option enhances driver connection'],
              watchOut: ['high fuel consumption on performance use', 'firm ride on standard roads', 'limited EU sales volume affects resale values', 'no manual option with traction control as standard everywhere']
            },
            {
              id: 'subaru-wrx-vb-24-sport-lineartronic',
              name: '2.4 Turbo 272 PS AWD Sport Lineartronic',
              years: '2022–present',
              priceBand: '€36,000–€48,000 used',
              specs: {
                engine: '2.4-litre turbocharged horizontally opposed four-cylinder (FA24F)',
                engineCode: 'FA24F',
                displacementCc: 2387,
                cylinders: 'H4',
                powerHp: 272,
                powerKw: 200,
                torqueNm: 350,
                fuel: 'Petrol',
                gearbox: 'CVT',
                drive: 'AWD',
                acceleration0100: 5.4,
                topSpeedKmh: 240,
                consumptionL100: 9.2,
                co2Gkm: 211
              },
              dimensions: {
                lengthMm: 4670,
                widthMm: 1825,
                heightMm: 1455,
                wheelbaseMm: 2670,
                bootLitres: 360,
                weightKg: 1570,
                tankLitres: 60
              },
              options: safetyComfort(['Subaru EyeSight', 'Brembo front brakes', 'STI Sport suspension', 'DCCD AWD system', 'Sport Lineartronic paddle shifters']),
              knownFor: ['quicker 0–100 km/h than manual variant', 'Sport Lineartronic with paddle shifters', 'same Brembo brakes as manual', 'smooth and fast gearchanges under power'],
              watchOut: ['Sport Lineartronic lacks manual satisfaction', 'CVT stigma among WRX enthusiasts', 'same high fuel consumption as manual', 'premium over manual variant considerable']
            }
          ]
        }
      ]
    },
    {
      id: 'brz',
      name: 'BRZ',
      segment: 'C-segment sports coupe',
      description: 'The Subaru BRZ is a rear-wheel-drive lightweight sports coupe co-developed with Toyota (GR86). The second-generation ZD8 uses a larger 2.4-litre Boxer engine for significantly improved performance over its predecessor.',
      tags: ['Coupe', 'sports', 'RWD', 'lightweight', 'driver\'s car'],
      generations: [
        {
          id: 'brz-zd8',
          name: 'ZD8 (Second Generation)',
          years: '2021–present',
          platform: 'Subaru/Toyota ZD8 rear-wheel-drive sports platform',
          bodyStyles: ['Coupe'],
          summary: 'The second-generation BRZ finally addresses the original\'s power deficit with a 2.4-litre naturally aspirated Boxer producing 234 PS. The ZD8 retains the lightweight philosophy and low centre of gravity that made the first generation a driver\'s favourite.',
          heroImage: 'subaru-brz-zd8',
          variants: [
            {
              id: 'subaru-brz-zd8-24-manual',
              name: '2.4 Boxer 234 PS RWD Manual',
              years: '2021–present',
              priceBand: '€26,000–€36,000 used',
              specs: {
                engine: '2.4-litre naturally aspirated horizontally opposed four-cylinder (FA24)',
                engineCode: 'FA24',
                displacementCc: 2387,
                cylinders: 'H4',
                powerHp: 234,
                powerKw: 172,
                torqueNm: 250,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'RWD',
                acceleration0100: 6.3,
                topSpeedKmh: 226,
                consumptionL100: 9.0,
                co2Gkm: 205
              },
              dimensions: {
                lengthMm: 4265,
                widthMm: 1775,
                heightMm: 1310,
                wheelbaseMm: 2575,
                bootLitres: 237,
                weightKg: 1270,
                tankLitres: 50
              },
              options: safetyComfort(['Subaru EyeSight', 'Sachs performance dampers', 'Brembo front brakes', 'limited-slip differential', 'sport Alcantara seats']),
              knownFor: ['natural-feeling RWD balance and agility', 'low 1,270 kg kerb weight', 'precise Torsen limited-slip differential', 'accessible performance coupe pricing'],
              watchOut: ['naturally aspirated means rev it hard for performance', 'rear seats token only — too small for adults', 'no turbocharged variant like some rivals', 'firm ride on daily commuting roads']
            },
            {
              id: 'subaru-brz-zd8-24-auto',
              name: '2.4 Boxer 234 PS RWD Automatic',
              years: '2021–present',
              priceBand: '€27,000–€37,000 used',
              specs: {
                engine: '2.4-litre naturally aspirated horizontally opposed four-cylinder (FA24)',
                engineCode: 'FA24',
                displacementCc: 2387,
                cylinders: 'H4',
                powerHp: 234,
                powerKw: 172,
                torqueNm: 250,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 6,
                drive: 'RWD',
                acceleration0100: 6.9,
                topSpeedKmh: 226,
                consumptionL100: 8.6,
                co2Gkm: 198
              },
              dimensions: {
                lengthMm: 4265,
                widthMm: 1775,
                heightMm: 1310,
                wheelbaseMm: 2575,
                bootLitres: 237,
                weightKg: 1285,
                tankLitres: 50
              },
              options: safetyComfort(['Subaru EyeSight', 'paddle shifters', 'Brembo brakes', 'limited-slip differential', 'sport Alcantara']),
              knownFor: ['automatic broadens buyer appeal', 'paddle shifters maintain engagement', 'slightly lower fuel consumption than manual', 'good option for urban sports car buyers'],
              watchOut: ['0–100 slower than manual', 'automatic dilutes sports car purity', 'higher price than manual variant', 'same limited rear seat practicality']
            }
          ]
        }
      ]
    },
    {
      id: 'solterra',
      name: 'Solterra',
      segment: 'D-segment electric SUV',
      description: 'The Subaru Solterra is Subaru\'s first fully electric vehicle, co-developed with Toyota (bZ4X). It features dual electric motors for symmetrical AWD, a 71.4 kWh battery, and up to 466 km WLTP range.',
      tags: ['electric', 'SUV', 'AWD', 'new'],
      generations: [
        {
          id: 'solterra-e5',
          name: 'E5 (First Generation)',
          years: '2022–present',
          platform: 'Subaru/Toyota e-Subaru Global Platform (e-SGP)',
          bodyStyles: ['SUV'],
          summary: 'The Solterra debuts Subaru\'s electric era with the e-SGP co-developed with Toyota. Dual motors provide genuine Symmetrical AWD, while the 71.4 kWh battery delivers a competitive range for the segment.',
          heroImage: 'subaru-solterra-e5',
          variants: [
            {
              id: 'subaru-solterra-e5-awd',
              name: '71.4 kWh 218 PS AWD',
              years: '2022–present',
              priceBand: '€36,000–€50,000 used',
              specs: {
                engine: 'dual electric motors — front 80 kW + rear 80 kW',
                powerHp: 218,
                powerKw: 160,
                torqueNm: 336,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 6.9,
                topSpeedKmh: 160,
                electricRangeKm: 466
              },
              dimensions: {
                lengthMm: 4690,
                widthMm: 1860,
                heightMm: 1650,
                wheelbaseMm: 2850,
                bootLitres: 452,
                weightKg: 2010
              },
              options: evComfort(['CCS DC fast charging 150 kW', 'Subaru EyeSight', 'X-Mode off-road assist', 'panoramic roof', 'wireless charging']),
              knownFor: ['genuine Symmetrical AWD from dual motors', '466 km WLTP range covers long trips', 'Subaru EyeSight full safety suite', 'X-Mode retains off-road credibility'],
              watchOut: ['heavy at over two tonnes affects dynamics', 'top speed limited to 160 km/h', 'shared Toyota bZ4X underpinnings', 'DC charging only at 150 kW — below segment leaders']
            },
            {
              id: 'subaru-solterra-e5-premium',
              name: '71.4 kWh 218 PS AWD Premium',
              years: '2023–present',
              priceBand: '€40,000–€54,000 used',
              specs: {
                engine: 'dual electric motors — front 80 kW + rear 80 kW',
                powerHp: 218,
                powerKw: 160,
                torqueNm: 336,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 6.9,
                topSpeedKmh: 160,
                electricRangeKm: 460
              },
              dimensions: {
                lengthMm: 4690,
                widthMm: 1860,
                heightMm: 1650,
                wheelbaseMm: 2850,
                bootLitres: 452,
                weightKg: 2030
              },
              options: evComfort(['CCS DC fast charging 150 kW', 'Subaru EyeSight 360', 'X-Mode', 'panoramic glass roof', 'heated front and rear seats', 'Harman Kardon audio', 'heads-up display']),
              knownFor: ['Harman Kardon sound system', 'heated rear seats for passengers', 'panoramic glass roof premium feel', 'comprehensive EyeSight 360 safety'],
              watchOut: ['same range as base model', 'heated rear seats reduce range slightly', 'very expensive at top specification', 'charging speed unchanged from entry trim']
            }
          ]
        }
      ]
    }
  ]
};
