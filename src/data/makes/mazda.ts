import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const mazda: CarMake = {
  id: 'mazda',
  name: 'Mazda',
  country: 'Japan',
  logoText: 'M',
  models: [
    {
      id: 'mazda2',
      name: 'Mazda2',
      segment: 'B-segment supermini',
      description: 'The Mazda2 is a B-segment supermini offering Mazda\'s Kodo design language and driving refinement at an accessible price. The current DJ generation is joined by a hybrid variant based on the Toyota Yaris platform for EU buyers seeking electrified motoring.',
      tags: ['supermini', 'city car', 'hybrid', 'affordable'],
      generations: [
        {
          id: 'mazda2-dj',
          name: 'DJ / Mazda2 Hybrid',
          years: '2015–present',
          platform: 'Mazda Skyactiv / Toyota TNGA-B (Hybrid)',
          bodyStyles: ['Hatchback'],
          summary: 'The third-generation Mazda2 (DJ) offers a refined 1.5 Skyactiv-G petrol, while the Mazda2 Hybrid — a rebadged Toyota Yaris — provides a full self-charging hybrid option that is exclusively sold in Europe.',
          heroImage: 'mazda-mazda2-dj',
          variants: [
            {
              id: 'mazda-mazda2-dj-15-skyactiv-g',
              name: '1.5 Skyactiv-G 90 Exclusive-Line',
              years: '2015–present',
              priceBand: '€9,000–€18,000 used',
              specs: {
                engine: '1.5-litre naturally aspirated Skyactiv-G petrol',
                engineCode: 'P5-VPS',
                displacementCc: 1496,
                cylinders: '4',
                powerHp: 90,
                powerKw: 66,
                torqueNm: 148,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.8,
                topSpeedKmh: 175,
                consumptionL100: 5.5,
                co2Gkm: 126
              },
              dimensions: {
                lengthMm: 4060,
                widthMm: 1695,
                heightMm: 1500,
                wheelbaseMm: 2570,
                bootLitres: 280,
                weightKg: 1035,
                tankLitres: 44
              },
              options: safetyComfort(['Mazda i-Activsense', 'traffic sign recognition', 'lane departure warning']),
              knownFor: ['premium feel for supermini segment', 'nimble and precise city handling', 'low running costs', 'excellent build quality for class'],
              watchOut: ['small boot limits luggage', 'tight rear legroom', 'no turbocharged engine option', 'no hybrid until Hybrid variant']
            },
            {
              id: 'mazda-mazda2-dj-hybrid',
              name: 'Mazda2 Hybrid 116 PS',
              years: '2022–present',
              priceBand: '€16,000–€22,000 used',
              specs: {
                engine: '1.5-litre three-cylinder Atkinson hybrid (Toyota Yaris architecture)',
                engineCode: 'M15A-FXE',
                displacementCc: 1490,
                cylinders: '3',
                powerHp: 116,
                powerKw: 85,
                torqueNm: 141,
                fuel: 'Hybrid',
                gearbox: 'CVT',
                drive: 'FWD',
                acceleration0100: 9.7,
                topSpeedKmh: 175,
                consumptionL100: 3.8,
                co2Gkm: 87
              },
              dimensions: {
                lengthMm: 3940,
                widthMm: 1745,
                heightMm: 1500,
                wheelbaseMm: 2560,
                bootLitres: 286,
                weightKg: 1185,
                tankLitres: 36
              },
              options: safetyComfort(['Toyota Safety Sense suite', 'heated front seats', 'wireless Apple CarPlay/Android Auto']),
              knownFor: ['class-leading hybrid fuel economy', 'smooth CVT in urban traffic', 'sub-90 g/km CO2', 'reliable Toyota hybrid drivetrain'],
              watchOut: ['Toyota Yaris underneath despite Mazda badge', 'CVT lacks manual engagement', 'small 36-litre fuel tank', 'limited boot space']
            }
          ]
        }
      ]
    },
    {
      id: 'mazda3',
      name: 'Mazda3',
      segment: 'C-segment hatchback/saloon',
      description: 'The Mazda3 is a premium-leaning C-segment car renowned for its Kodo design, driving dynamics, and Mazda\'s innovative Skyactiv-X compression-ignition petrol engine. It offers both hatchback and fastback saloon body styles.',
      tags: ['hatchback', 'premium', 'sporty', 'efficient'],
      generations: [
        {
          id: 'mazda3-bp',
          name: 'BP (Fourth Generation)',
          years: '2019–present',
          platform: 'Mazda Skyactiv Vehicle Architecture',
          bodyStyles: ['Hatchback', 'Sedan'],
          summary: 'The fourth-generation Mazda3 elevates the C-segment with premium interior materials, advanced Skyactiv-G and unique Skyactiv-X mild-hybrid petrol engines, and a sophisticated multi-link rear suspension.',
          heroImage: 'mazda-mazda3-bp',
          variants: [
            {
              id: 'mazda-mazda3-bp-20-skyactiv-g',
              name: '2.0 Skyactiv-G 122 Exclusive-Line',
              years: '2019–present',
              priceBand: '€14,000–€24,000 used',
              specs: {
                engine: '2.0-litre naturally aspirated Skyactiv-G petrol',
                engineCode: 'PE-VPS',
                displacementCc: 1998,
                cylinders: '4',
                powerHp: 122,
                powerKw: 90,
                torqueNm: 213,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.1,
                topSpeedKmh: 200,
                consumptionL100: 6.0,
                co2Gkm: 137
              },
              dimensions: {
                lengthMm: 4460,
                widthMm: 1797,
                heightMm: 1440,
                wheelbaseMm: 2726,
                bootLitres: 358,
                weightKg: 1336,
                tankLitres: 51
              },
              options: safetyComfort(['Mazda i-Activsense', 'Bose sound system', 'head-up display']),
              knownFor: ['premium interior quality for segment', 'smooth naturally aspirated engine', 'Kodo design award-winner', 'composed multi-link rear suspension'],
              watchOut: ['no turbocharged option at base power', 'infotainment cannot be touched while moving', 'boot on the small side for class', 'naturally aspirated feels short of power above 100 km/h']
            },
            {
              id: 'mazda-mazda3-bp-20-skyactiv-x',
              name: '2.0 Skyactiv-X 180 e-Skyactiv',
              years: '2019–present',
              priceBand: '€17,000–€28,000 used',
              specs: {
                engine: '2.0-litre Skyactiv-X SPCCI mild-hybrid petrol',
                engineCode: 'PE-VPX',
                displacementCc: 1998,
                cylinders: '4',
                powerHp: 180,
                powerKw: 132,
                torqueNm: 224,
                fuel: 'Hybrid',
                gearbox: 'Manual',
                gears: 6,
                drive: 'AWD',
                acceleration0100: 7.9,
                topSpeedKmh: 215,
                consumptionL100: 5.7,
                co2Gkm: 130
              },
              dimensions: {
                lengthMm: 4460,
                widthMm: 1797,
                heightMm: 1440,
                wheelbaseMm: 2726,
                bootLitres: 358,
                weightKg: 1430,
                tankLitres: 51
              },
              options: safetyComfort(['Mazda i-Activsense', 'Bose sound system', 'head-up display', 'Mi-Drive mode selector']),
              knownFor: ['world-first SPCCI compression-ignition petrol', 'diesel-like torque with petrol refinement', 'refined 48V M Hybrid mild-hybrid assist', 'AWD stability in wet conditions'],
              watchOut: ['complex engine requires dealer specialist', 'premium 95 RON fuel recommended', 'real-world economy below claimed', 'AWD adds weight and cost']
            }
          ]
        }
      ]
    },
    {
      id: 'cx-30',
      name: 'CX-30',
      segment: 'B/C-segment crossover SUV',
      description: 'The CX-30 slots between the CX-3 and CX-5 in Mazda\'s SUV lineup, offering premium quality and Skyactiv-X technology in a practical crossover package with a distinctive low-slung coupe-SUV silhouette.',
      tags: ['crossover', 'SUV', 'premium', 'compact'],
      generations: [
        {
          id: 'cx-30-dm',
          name: 'DM (First Generation)',
          years: '2019–present',
          platform: 'Mazda Skyactiv Vehicle Architecture',
          bodyStyles: ['SUV'],
          summary: 'The CX-30 was the first model on Mazda\'s new Skyactiv Vehicle Architecture platform. It offers the full range of Skyactiv petrol engines including Skyactiv-X, with a low-slung coupe-SUV roofline and an elevated driving position over the Mazda3.',
          heroImage: 'mazda-cx-30-dm',
          variants: [
            {
              id: 'mazda-cx-30-dm-20-skyactiv-g',
              name: '2.0 Skyactiv-G 122 Exclusive-Line',
              years: '2019–present',
              priceBand: '€16,000–€26,000 used',
              specs: {
                engine: '2.0-litre naturally aspirated Skyactiv-G petrol',
                engineCode: 'PE-VPS',
                displacementCc: 1998,
                cylinders: '4',
                powerHp: 122,
                powerKw: 90,
                torqueNm: 213,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.0,
                topSpeedKmh: 195,
                consumptionL100: 6.4,
                co2Gkm: 146
              },
              dimensions: {
                lengthMm: 4395,
                widthMm: 1795,
                heightMm: 1540,
                wheelbaseMm: 2655,
                bootLitres: 422,
                weightKg: 1385,
                tankLitres: 51
              },
              options: safetyComfort(['Mazda i-Activsense', 'head-up display', 'Bose sound system']),
              knownFor: ['premium material quality for crossover class', 'smooth naturally aspirated drive', 'stylish SUV proportions and stance', 'composed chassis for an SUV'],
              watchOut: ['boot floor high due to platform packaging', 'limited rear visibility', 'no diesel available for CX-30', 'lacks turbocharged urge at motorway speeds']
            },
            {
              id: 'mazda-cx-30-dm-20-skyactiv-x',
              name: '2.0 Skyactiv-X 186 AWD',
              years: '2020–present',
              priceBand: '€20,000–€30,000 used',
              specs: {
                engine: '2.0-litre Skyactiv-X SPCCI mild-hybrid petrol',
                engineCode: 'PE-VPX',
                displacementCc: 1998,
                cylinders: '4',
                powerHp: 186,
                powerKw: 137,
                torqueNm: 240,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 6,
                drive: 'AWD',
                acceleration0100: 8.2,
                topSpeedKmh: 210,
                consumptionL100: 6.3,
                co2Gkm: 144
              },
              dimensions: {
                lengthMm: 4395,
                widthMm: 1795,
                heightMm: 1540,
                wheelbaseMm: 2655,
                bootLitres: 422,
                weightKg: 1500,
                tankLitres: 51
              },
              options: safetyComfort(['Mazda i-Activsense', 'head-up display', 'Bose premium audio', 'Mi-Drive', 'panoramic sunroof']),
              knownFor: ['Skyactiv-X plus AWD for confident all-weather grip', 'smooth automatic gearbox choice', 'premium crossover feel throughout', 'strong resale values'],
              watchOut: ['Skyactiv-X complexity adds ownership risk', 'premium fuel recommended', 'heavier than FWD petrol variant', 'expensive compared to Korean competition']
            }
          ]
        }
      ]
    },
    {
      id: 'cx-5',
      name: 'CX-5',
      segment: 'C/D-segment SUV',
      description: 'Mazda\'s bestselling SUV worldwide, the CX-5 is praised for its driving refinement, premium interior, and wide engine range including AWD diesel and petrol options. The KF generation remains highly competitive against newer rivals.',
      tags: ['SUV', 'AWD', 'premium', 'family'],
      generations: [
        {
          id: 'cx-5-kf',
          name: 'KF (Second Generation)',
          years: '2017–present',
          platform: 'Mazda Skyactiv platform',
          bodyStyles: ['SUV'],
          summary: 'The second-generation CX-5 raised refinement levels with Mazda\'s Kodo-Soul of Motion design, i-Activsense safety tech, and 2.5 Skyactiv-G AWD as the flagship variant. The 2.2 Skyactiv-D diesel with AWD remains a strong long-distance choice.',
          heroImage: 'mazda-cx-5-kf',
          variants: [
            {
              id: 'mazda-cx-5-kf-20-skyactiv-g',
              name: '2.0 Skyactiv-G 165 Exclusive-Line',
              years: '2017–present',
              priceBand: '€15,000–€26,000 used',
              specs: {
                engine: '2.0-litre naturally aspirated Skyactiv-G petrol',
                engineCode: 'PE-VPS',
                displacementCc: 1998,
                cylinders: '4',
                powerHp: 165,
                powerKw: 121,
                torqueNm: 213,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.4,
                topSpeedKmh: 192,
                consumptionL100: 6.8,
                co2Gkm: 155
              },
              dimensions: {
                lengthMm: 4550,
                widthMm: 1841,
                heightMm: 1680,
                wheelbaseMm: 2700,
                bootLitres: 442,
                weightKg: 1502,
                tankLitres: 58
              },
              options: safetyComfort(['Mazda i-Activsense', 'Bose sound system', 'head-up display', 'panoramic sunroof']),
              knownFor: ['premium SUV interior quality', 'smooth six-speed automatic', 'composed handling for an SUV', 'strong residual values'],
              watchOut: ['FWD only on base petrol — no AWD', 'higher fuel use than diesel rival', 'boot smaller than segment average', 'naturally aspirated lacks urgency when loaded']
            },
            {
              id: 'mazda-cx-5-kf-25-skyactiv-g-awd',
              name: '2.5 Skyactiv-G 194 AWD Signature',
              years: '2017–present',
              priceBand: '€20,000–€32,000 used',
              specs: {
                engine: '2.5-litre naturally aspirated Skyactiv-G petrol',
                engineCode: 'PY-VPS',
                displacementCc: 2488,
                cylinders: '4',
                powerHp: 194,
                powerKw: 143,
                torqueNm: 258,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 6,
                drive: 'AWD',
                acceleration0100: 8.7,
                topSpeedKmh: 200,
                consumptionL100: 8.1,
                co2Gkm: 185
              },
              dimensions: {
                lengthMm: 4550,
                widthMm: 1841,
                heightMm: 1680,
                wheelbaseMm: 2700,
                bootLitres: 442,
                weightKg: 1659,
                tankLitres: 58
              },
              options: safetyComfort(['Mazda i-Activsense', 'Bose premium sound', 'Nappa leather', 'head-up display']),
              knownFor: ['Mazda i-Activ AWD system engages proactively', 'premium Signature trim levels', 'composed and engaging SUV driving feel', 'strong resale values'],
              watchOut: ['high fuel consumption with AWD petrol', 'no mild-hybrid assist unlike rivals', 'expensive at Signature trim level', 'CO2 penalty for business users']
            },
            {
              id: 'mazda-cx-5-kf-22-skyactiv-d-awd',
              name: '2.2 Skyactiv-D 184 AWD Exclusive-Line',
              years: '2017–present',
              priceBand: '€18,000–€30,000 used',
              specs: {
                engine: '2.2-litre twin-turbo Skyactiv-D diesel',
                engineCode: 'SH-VPTS',
                displacementCc: 2191,
                cylinders: '4',
                powerHp: 184,
                powerKw: 135,
                torqueNm: 445,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 6,
                drive: 'AWD',
                acceleration0100: 8.7,
                topSpeedKmh: 202,
                consumptionL100: 5.5,
                co2Gkm: 144
              },
              dimensions: {
                lengthMm: 4550,
                widthMm: 1841,
                heightMm: 1680,
                wheelbaseMm: 2700,
                bootLitres: 442,
                weightKg: 1710,
                tankLitres: 58
              },
              options: safetyComfort(['Mazda i-Activsense', 'Bose sound', 'head-up display', 'power liftgate']),
              knownFor: ['best-in-class diesel torque 445 Nm', 'frugal motorway fuel economy', 'excellent towing capability up to 2,000 kg', 'AWD confidence in adverse conditions'],
              watchOut: ['DPF concerns on exclusively short journeys', 'diesel less desirable in current market', 'heavier than petrol variants', 'higher used price than petrol models']
            }
          ]
        }
      ]
    },
    {
      id: 'cx-60',
      name: 'CX-60',
      segment: 'D-segment SUV',
      description: 'The Mazda CX-60 is a premium large SUV launched in 2022, introducing inline-six engines and rear-wheel-drive architecture to Mazda\'s lineup. It offers a 3.3-litre inline-six diesel and a PHEV combining a 2.5-litre Skyactiv-G with a 100 kW electric motor.',
      tags: ['SUV', 'premium', 'PHEV', 'diesel', 'AWD'],
      generations: [
        {
          id: 'cx-60-kh',
          name: 'KH (First Generation)',
          years: '2022–present',
          platform: 'Mazda Large Platform (FR-based)',
          bodyStyles: ['SUV'],
          summary: 'The CX-60 marks a new era for Mazda with longitudinally mounted engines and rear-biased AWD. The e-Skyactiv D 3.3 mild-hybrid diesel and e-Skyactiv PHEV are the headline powertrains targeting premium European buyers.',
          heroImage: 'mazda-cx-60-kh',
          variants: [
            {
              id: 'mazda-cx-60-kh-33d',
              name: '3.3 e-Skyactiv D 200 AWD',
              years: '2022–present',
              priceBand: '€30,000–€46,000 used',
              specs: {
                engine: '3.3-litre inline-six mild-hybrid diesel (e-Skyactiv D)',
                engineCode: 'S8-XDSA',
                displacementCc: 3283,
                cylinders: '6',
                powerHp: 200,
                powerKw: 147,
                torqueNm: 450,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 8.0,
                topSpeedKmh: 215,
                consumptionL100: 5.6,
                co2Gkm: 148
              },
              dimensions: {
                lengthMm: 4745,
                widthMm: 1890,
                heightMm: 1686,
                wheelbaseMm: 2870,
                bootLitres: 570,
                weightKg: 1940,
                tankLitres: 62
              },
              options: safetyComfort(['Mazda i-Activsense 360', 'head-up display', 'Bose Audiopilot 12-speaker', 'wireless charging', 'panoramic roof']),
              knownFor: ['smooth inline-six diesel refinement', 'rear-biased AWD for driver engagement', 'premium cabin quality approaching luxury brands', 'excellent long-distance touring comfort'],
              watchOut: ['early software issues reported on launch cars', 'heavy at nearly two tonnes', 'ride can be firm on low-profile tyres', 'premium pricing well above Korean SUV rivals']
            },
            {
              id: 'mazda-cx-60-kh-phev',
              name: '2.5 e-Skyactiv PHEV 327 PS AWD',
              years: '2022–present',
              priceBand: '€36,000–€52,000 used',
              specs: {
                engine: '2.5-litre Skyactiv-G + 100 kW electric motor + 17.8 kWh battery (e-Skyactiv PHEV)',
                engineCode: 'PY-VPS',
                displacementCc: 2488,
                cylinders: '4',
                powerHp: 327,
                powerKw: 240,
                torqueNm: 500,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.8,
                topSpeedKmh: 200,
                consumptionL100: 1.5,
                electricRangeKm: 63,
                co2Gkm: 33
              },
              dimensions: {
                lengthMm: 4745,
                widthMm: 1890,
                heightMm: 1686,
                wheelbaseMm: 2870,
                bootLitres: 504,
                weightKg: 2080,
                tankLitres: 50
              },
              options: safetyComfort(['Mazda i-Activsense 360', 'AC charging 7.2 kW onboard', 'head-up display', 'Bose Audiopilot', 'panoramic roof', 'Nappa leather']),
              knownFor: ['63 km EV range covers most daily commutes', 'very low official CO2 for business use', 'strong combined 327 PS performance', 'premium feel comparable to German rivals'],
              watchOut: ['very heavy at over two tonnes', 'boot reduced vs diesel model', 'early production software and NVH issues', 'charge-depleted consumption rises significantly']
            }
          ]
        }
      ]
    },
    {
      id: 'mx-5',
      name: 'MX-5',
      segment: 'B/C-segment sports roadster',
      description: 'The Mazda MX-5 (Miata) is the world\'s best-selling open-top sports car, a lightweight two-seat roadster that perfectly balances driver engagement with everyday usability. The ND generation is available as a soft-top Roadster or retractable hard-top RF.',
      tags: ['convertible', 'sports', 'roadster', 'lightweight'],
      generations: [
        {
          id: 'mx-5-nd',
          name: 'ND (Fourth Generation)',
          years: '2015–present',
          platform: 'Mazda Skyactiv Vehicle Architecture (roadster)',
          bodyStyles: ['Convertible'],
          summary: 'The fourth-generation MX-5 is the lightest version in decades, with KODO design, a front-mid engine layout, and a choice of 1.5 or 2.0-litre Skyactiv-G engines. The RF variant adds a retractable fastback hard-top.',
          heroImage: 'mazda-mx-5-nd',
          variants: [
            {
              id: 'mazda-mx-5-nd-15-skyactiv-g',
              name: '1.5 Skyactiv-G 132 PS Roadster',
              years: '2015–present',
              priceBand: '€16,000–€26,000 used',
              specs: {
                engine: '1.5-litre naturally aspirated Skyactiv-G petrol',
                engineCode: 'P5-VPR',
                displacementCc: 1496,
                cylinders: '4',
                powerHp: 132,
                powerKw: 97,
                torqueNm: 150,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'RWD',
                acceleration0100: 8.3,
                topSpeedKmh: 200,
                consumptionL100: 6.2,
                co2Gkm: 142
              },
              dimensions: {
                lengthMm: 3915,
                widthMm: 1735,
                heightMm: 1235,
                wheelbaseMm: 2310,
                bootLitres: 130,
                weightKg: 975,
                tankLitres: 45
              },
              options: safetyComfort(['limited-slip differential option', 'Bose audio', 'leather interior']),
              knownFor: ['lightest sports car in its class', 'perfectly balanced 50/50 weight distribution', 'sublime short-throw six-speed manual', 'affordable open-top sports car ownership'],
              watchOut: ['very small boot limits touring', 'tight cabin for tall drivers', '1.5 engine needs to be worked hard for pace', 'soft-top hood requires manual operation']
            },
            {
              id: 'mazda-mx-5-nd-20-skyactiv-g',
              name: '2.0 Skyactiv-G 184 PS RF',
              years: '2016–present',
              priceBand: '€20,000–€32,000 used',
              specs: {
                engine: '2.0-litre naturally aspirated Skyactiv-G petrol',
                engineCode: 'PE-VPR',
                displacementCc: 1998,
                cylinders: '4',
                powerHp: 184,
                powerKw: 135,
                torqueNm: 205,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'RWD',
                acceleration0100: 7.0,
                topSpeedKmh: 219,
                consumptionL100: 6.7,
                co2Gkm: 153
              },
              dimensions: {
                lengthMm: 3915,
                widthMm: 1735,
                heightMm: 1235,
                wheelbaseMm: 2310,
                bootLitres: 127,
                weightKg: 1035,
                tankLitres: 45
              },
              options: safetyComfort(['Bilstein dampers', 'Recaro seats', 'Bose Matsuri audio', 'limited-slip differential']),
              knownFor: ['RF retractable fastback adds all-weather comfort', 'more urgent 2.0-litre at high revs', 'classic sports car driving purity', 'strong motorsport and club competition heritage'],
              watchOut: ['RF adds weight and cost over Roadster', 'rear flying buttresses limit rear visibility', 'still a small impractical boot', 'higher price premium for power increase']
            }
          ]
        }
      ]
    },
    {
      id: 'mx-30',
      name: 'MX-30',
      segment: 'B-segment electric crossover',
      description: 'The Mazda MX-30 is Mazda\'s first fully electric production car for Europe, featuring distinctive freestyle rear doors, cork-element interior details, and a compact 35.5 kWh battery. A range-extender rotary version (R-EV) was added later.',
      tags: ['electric', 'SUV', 'design-led', 'compact'],
      generations: [
        {
          id: 'mx-30-dr',
          name: 'DR (First Generation)',
          years: '2020–present',
          platform: 'Mazda e-Skyactiv EV platform',
          bodyStyles: ['SUV'],
          summary: 'The MX-30 BEV uses a 35.5 kWh battery and 143 PS front motor for up to 200 km WLTP range. The DR generation emphasises urban sustainability with cork-derived interior panels and freestyle rear doors reminiscent of the original RX-8.',
          heroImage: 'mazda-mx-30-dr',
          variants: [
            {
              id: 'mazda-mx-30-dr-ev',
              name: '35.5 kWh e-Skyactiv 143 PS',
              years: '2020–present',
              priceBand: '€18,000–€28,000 used',
              specs: {
                engine: 'single front electric motor e-Skyactiv 107 kW',
                powerHp: 143,
                powerKw: 107,
                torqueNm: 271,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 9.7,
                topSpeedKmh: 140,
                electricRangeKm: 200
              },
              dimensions: {
                lengthMm: 4395,
                widthMm: 1795,
                heightMm: 1555,
                wheelbaseMm: 2655,
                bootLitres: 341,
                weightKg: 1845
              },
              options: evComfort(['CCS DC charging 50 kW', 'Mazda i-Activsense', 'cork-trim interior details', 'Bose sound system']),
              knownFor: ['unique freestyle rear door design', 'cork interior panels eco-credentials', 'smooth quiet urban EV drive', 'Mazda interior quality in EV segment'],
              watchOut: ['200 km WLTP range limits longer trips', 'rear doors impractical for rear passengers alone', 'heavy at 1,845 kg for its size', 'DC charging capped at 50 kW']
            }
          ]
        }
      ]
    }
  ]
};
