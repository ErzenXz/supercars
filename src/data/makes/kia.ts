import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const kia: CarMake = {
  id: 'kia',
  name: 'Kia',
  country: 'South Korea',
  logoText: 'K',
  models: [
    {
      id: 'ceed',
      name: 'Ceed',
      segment: 'C-segment hatchback',
      description: 'The Kia Ceed is a well-rounded C-segment hatchback designed specifically for the European market. The CD generation brought composed handling, a spacious cabin for its class, and a wide engine range. Kia\'s seven-year warranty is a key differentiator over rivals.',
      tags: ['hatchback', 'family', 'practical', 'warranty'],
      generations: [
        {
          id: 'ceed-cd',
          name: 'CD (Third Generation)',
          years: '2018–present',
          platform: 'Kia C-segment platform',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The CD Ceed is Kia\'s European-developed hatchback built at its Žilina, Slovakia plant. Available as a five-door hatchback, ProCeed shooting brake, and Ceed SW estate. Engines range from the 1.0 T-GDI through 1.4 T-GDI and 1.6 CRDi diesel.',
          heroImage: 'kia-ceed-cd',
          variants: [
            {
              id: 'kia-ceed-cd-10tgdi',
              name: '1.0 T-GDI 120 PS',
              years: '2018–present',
              priceBand: '€8,500–€19,000 used',
              specs: {
                engine: '1.0-litre turbocharged three-cylinder petrol',
                engineCode: 'G3LC',
                displacementCc: 998,
                cylinders: '3',
                powerHp: 120,
                powerKw: 88,
                torqueNm: 172,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.9,
                topSpeedKmh: 185,
                consumptionL100: 5.7,
                co2Gkm: 129
              },
              dimensions: {
                lengthMm: 4310,
                widthMm: 1800,
                heightMm: 1450,
                wheelbaseMm: 2650,
                bootLitres: 395,
                weightKg: 1250,
                tankLitres: 50
              },
              options: safetyComfort(['rear parking camera', 'heated front seats']),
              knownFor: ['seven-year warranty', 'European-tuned chassis', 'comfortable ride quality', 'competitive pricing'],
              watchOut: ['engine strained on steep inclines', 'no automatic gearbox on this variant', 'infotainment can feel dated on lower trims']
            },
            {
              id: 'kia-ceed-cd-16crdi',
              name: '1.6 CRDi 136 PS DCT',
              years: '2018–2023',
              priceBand: '€9,000–€21,000 used',
              specs: {
                engine: '1.6-litre turbodiesel four-cylinder',
                engineCode: 'D4FB',
                displacementCc: 1582,
                cylinders: '4',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 320,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.3,
                topSpeedKmh: 210,
                consumptionL100: 4.3,
                co2Gkm: 114
              },
              dimensions: {
                lengthMm: 4310,
                widthMm: 1800,
                heightMm: 1450,
                wheelbaseMm: 2650,
                bootLitres: 395,
                weightKg: 1370,
                tankLitres: 50
              },
              options: safetyComfort(['adaptive cruise control', 'lane keeping assist', 'blind spot collision warning']),
              knownFor: ['outstanding fuel efficiency on long runs', 'smooth DCT gearbox at speed', 'generous torque for overtaking', 'seven-year warranty reassurance'],
              watchOut: ['DPF clogging risk in urban use', 'diesel surcharge in city LEZs', 'heavier than petrol', 'resale values impacted by diesel sentiment']
            }
          ]
        }
      ]
    },
    {
      id: 'sportage',
      name: 'Sportage',
      segment: 'Compact SUV',
      description: 'The Kia Sportage is a globally successful compact SUV that competes in one of Europe\'s largest segments. The NQ5 generation introduced Kia\'s "Opposites United" design language with a bold interior layout, a digital cockpit, and hybrid powertrains standard across much of the range.',
      tags: ['SUV', 'hybrid', 'family', 'tech'],
      generations: [
        {
          id: 'sportage-nq5',
          name: 'NQ5 (Fifth Generation)',
          years: '2021–present',
          platform: 'Hyundai-Kia N3 platform',
          bodyStyles: ['SUV'],
          summary: 'The NQ5 Sportage replaced a hugely popular predecessor with more dramatic styling, a dual-screen cockpit and standard 48 V mild-hybrid tech. A plug-in hybrid and a turbocharged 1.6 T-GDI hybrid with HTRAC AWD form the powertrain highlights.',
          heroImage: 'kia-sportage-nq5',
          variants: [
            {
              id: 'kia-sportage-nq5-15tgdi-48v',
              name: '1.6 T-GDI 150 PS 48V MHEV',
              years: '2021–present',
              priceBand: '€19,000–€36,000 used',
              specs: {
                engine: '1.6-litre turbopetrol + 48 V mild-hybrid',
                engineCode: 'G4FJ',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 253,
                fuel: 'Hybrid',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.8,
                topSpeedKmh: 200,
                consumptionL100: 6.4,
                co2Gkm: 145
              },
              dimensions: {
                lengthMm: 4515,
                widthMm: 1865,
                heightMm: 1660,
                wheelbaseMm: 2680,
                bootLitres: 587,
                weightKg: 1540,
                tankLitres: 54
              },
              options: safetyComfort(['surround-view monitor', 'heated and ventilated seats', 'wireless phone charging']),
              knownFor: ['stunning dual-screen cockpit', 'large boot for the class', 'seven-year warranty', 'smooth mild-hybrid at low speed'],
              watchOut: ['DCT can be jerky in dense traffic', 'touchscreen can be slow to respond', 'mild hybrid does not allow all-electric running', 'wide body needs parking space']
            },
            {
              id: 'kia-sportage-nq5-16tgdi-hybrid-awd',
              name: '1.6 T-GDI 230 PS Hybrid HTRAC AWD',
              years: '2022–present',
              priceBand: '€24,000–€42,000 used',
              specs: {
                engine: '1.6-litre turbopetrol full hybrid + HTRAC AWD',
                engineCode: 'G4FJ',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 230,
                powerKw: 169,
                torqueNm: 350,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 6,
                drive: 'AWD',
                acceleration0100: 8.0,
                topSpeedKmh: 193,
                consumptionL100: 6.1,
                co2Gkm: 139
              },
              dimensions: {
                lengthMm: 4515,
                widthMm: 1865,
                heightMm: 1660,
                wheelbaseMm: 2680,
                bootLitres: 587,
                weightKg: 1720,
                tankLitres: 54
              },
              options: safetyComfort(['highway driving assist', 'remote smart parking assist', 'head-up display']),
              knownFor: ['confident HTRAC AWD traction', 'efficient full hybrid drivetrain', 'premium cabin feel', 'capable light off-road use'],
              watchOut: ['higher list price than mild-hybrid', 'hybrid battery warranty worth checking used', 'heavier than FWD variants', 'fuel savings modest vs mild-hybrid']
            }
          ]
        }
      ]
    },
    {
      id: 'niro',
      name: 'Niro',
      segment: 'Subcompact hybrid crossover',
      description: 'The Kia Niro was one of Europe\'s first dedicated hybrid crossovers, offering full hybrid, plug-in hybrid, and pure electric variants on a single bespoke platform. The second generation launched in 2022 with more distinctive styling and improved technology.',
      tags: ['hybrid', 'crossover', 'eco', 'versatile'],
      generations: [
        {
          id: 'niro-de',
          name: 'DE (First Generation)',
          years: '2016–2022',
          platform: 'Kia eco-dedicated platform',
          bodyStyles: ['SUV'],
          summary: 'The original Niro proved the concept of a practical hybrid crossover. Its 1.6-litre full hybrid system, combined with a 6-speed dual-clutch gearbox, returned excellent real-world efficiency. The Niro EV offered up to 455 km WLTP range in its updated form.',
          heroImage: 'kia-niro-de',
          variants: [
            {
              id: 'kia-niro-de-16-hybrid',
              name: '1.6 GDI Hybrid 141 PS',
              years: '2016–2022',
              priceBand: '€10,000–€22,000 used',
              specs: {
                engine: '1.6-litre GDI petrol + electric motor hybrid',
                engineCode: 'G4LE',
                displacementCc: 1580,
                cylinders: '4',
                powerHp: 141,
                powerKw: 104,
                torqueNm: 265,
                fuel: 'Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.1,
                topSpeedKmh: 162,
                consumptionL100: 4.3,
                co2Gkm: 97
              },
              dimensions: {
                lengthMm: 4355,
                widthMm: 1805,
                heightMm: 1545,
                wheelbaseMm: 2700,
                bootLitres: 427,
                weightKg: 1425,
                tankLitres: 45
              },
              options: safetyComfort(['rear cross-traffic alert', 'around-view monitor']),
              knownFor: ['class-leading real-world fuel economy', 'smooth hybrid transitions', 'practical boot and cabin', 'low CO2 emissions'],
              watchOut: ['performance modest for a 141 PS claim', 'DCT can hesitate from standstill', 'no AWD available', 'smaller fuel tank than average']
            }
          ]
        }
      ]
    },
    {
      id: 'ev6',
      name: 'EV6',
      segment: 'Midsize electric crossover',
      description: 'The Kia EV6 is the brand\'s first dedicated BEV built on the 800 V-capable E-GMP platform, sharing underpinnings with the Hyundai Ioniq 5 and Genesis GV60. It earned European Car of the Year 2022 and stands out with its sleek cross-SUV body, ultra-fast charging, and powerful GT variants.',
      tags: ['electric', 'fast-charging', 'car-of-the-year', 'performance'],
      generations: [
        {
          id: 'ev6-cv',
          name: 'CV (First Generation)',
          years: '2021–present',
          platform: 'E-GMP',
          bodyStyles: ['SUV'],
          summary: 'The EV6 launched as Kia\'s most important new model in decades. The 77.4 kWh long-range battery is available in RWD or AWD, with the GT variant pushing 585 PS. All variants benefit from 800 V architecture enabling 350 kW DC charging and V2L capability.',
          heroImage: 'kia-ev6-cv',
          variants: [
            {
              id: 'kia-ev6-cv-rwd-77',
              name: '77.4 kWh RWD GT-Line',
              years: '2021–present',
              priceBand: '€28,000–€46,000 used',
              specs: {
                engine: 'single rear motor',
                powerHp: 229,
                powerKw: 168,
                torqueNm: 350,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 7.3,
                topSpeedKmh: 185,
                electricRangeKm: 528
              },
              dimensions: {
                lengthMm: 4695,
                widthMm: 1880,
                heightMm: 1550,
                wheelbaseMm: 2900,
                bootLitres: 490,
                weightKg: 2015
              },
              options: evComfort(['vehicle-to-load (V2L)', '800V ultra-fast charging', 'augmented reality head-up display']),
              knownFor: ['Car of the Year 2022', 'excellent 528 km WLTP range', 'sporty low-slung silhouette', 'roomy rear cabin'],
              watchOut: ['boot access awkward due to low roofline', 'rear headroom tight for tall passengers', 'early software updates needed', 'ICCU recall shared with Ioniq 5']
            },
            {
              id: 'kia-ev6-cv-awd-77-gtline',
              name: '77.4 kWh AWD GT-Line',
              years: '2021–present',
              priceBand: '€32,000–€52,000 used',
              specs: {
                engine: 'dual motor AWD',
                powerHp: 325,
                powerKw: 239,
                torqueNm: 605,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 5.2,
                topSpeedKmh: 185,
                electricRangeKm: 484
              },
              dimensions: {
                lengthMm: 4695,
                widthMm: 1880,
                heightMm: 1550,
                wheelbaseMm: 2900,
                bootLitres: 490,
                weightKg: 2140
              },
              options: evComfort(['vehicle-to-load (V2L)', 'meridian premium sound', 'panoramic glass roof']),
              knownFor: ['brisk 5.2 s to 100 km/h', 'sure-footed AWD in all conditions', 'premium GT-Line interior finish', 'engaging sporty driving character'],
              watchOut: ['higher energy consumption vs RWD', 'heavier weight affects ride comfort', 'reduced range in winter', 'premium pricing over RWD']
            }
          ]
        }
      ]
    }
  ]
};
