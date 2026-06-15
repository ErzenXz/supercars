import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const fiat: CarMake = {
  id: 'fiat',
  name: 'Fiat',
  country: 'Italy',
  logoText: 'F',
  models: [
    {
      id: 'fiat-500',
      name: '500',
      segment: 'City car / A-segment',
      description: 'The Fiat 500 is one of the most recognisable city cars in Europe, revived in 2007 with retro styling inspired by the original 1957 model. The mild-hybrid 1.0 BSG version launched in 2020 provides marginal fuel savings without a full hybrid powertrain.',
      tags: ['city car', 'retro', 'iconic', 'urban', 'stylish'],
      generations: [
        {
          id: 'fiat-500-mk2',
          name: '500 Mk2 (312)',
          years: '2007–present',
          platform: 'Fiat Small Platform',
          bodyStyles: ['Hatchback'],
          summary: 'The third-generation retro 500 has sold over 2 million units across Europe. A significant update in 2020 brought the 1.0 BSG mild-hybrid as the primary petrol option, improving fuel economy modestly. The three-cylinder 999 cc engine with a belt-starter-generator assists under acceleration.',
          heroImage: 'fiat-500-mk2',
          variants: [
            {
              id: 'fiat-fiat-500-mk2-10-hybrid',
              name: '1.0 Hybrid 70 Dolcevita',
              years: '2020–present',
              priceBand: '€8,000–€15,000 used',
              specs: {
                engine: '1.0 BSG Hybrid',
                engineCode: 'GSE T3 family',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 70,
                powerKw: 51,
                torqueNm: 92,
                fuel: 'Hybrid',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 14.4,
                topSpeedKmh: 161,
                consumptionL100: 5.1,
                co2Gkm: 117
              },
              dimensions: {
                lengthMm: 3570,
                widthMm: 1627,
                heightMm: 1488,
                wheelbaseMm: 2300,
                bootLitres: 185,
                weightKg: 1010,
                tankLitres: 35
              },
              options: safetyComfort(['panoramic roof option', 'rear parking sensors', '7-inch touchscreen']),
              knownFor: ['iconic Italian retro styling', 'tiny city dimensions', 'fun to drive in urban traffic', 'strong personalisation options'],
              watchOut: ['very small 185 L boot', 'BSG mild-hybrid limited fuel saving', 'noisy three-cylinder at highway speeds', 'dated interior technology']
            }
          ]
        }
      ]
    },
    {
      id: 'fiat-500e',
      name: '500e',
      segment: 'City car EV / A-segment electric',
      description: 'The Fiat 500e is a purpose-built electric city car launched in 2020, built on an entirely new platform rather than being a conversion of the ICE 500. It offers a 42 kWh battery and up to 320 km WLTP range, with a distinctive design that evolves the classic 500 lines.',
      tags: ['electric', 'EV', 'city car', 'stylish', 'urban'],
      generations: [
        {
          id: 'fiat-500e-mk1',
          name: '500e Mk1 (332)',
          years: '2020–present',
          platform: 'Fiat CMP-BEV',
          bodyStyles: ['Hatchback', 'Convertible'],
          summary: 'The all-new 500e is a ground-up electric design, not a converted 500. Available as a 3+1 hatchback with a unique side door, and as a cabrio convertible. The 42 kWh battery provides up to 320 km WLTP in 3+1 form. A 24 kWh entry-level Action variant targets budget EV buyers.',
          heroImage: 'fiat-500e-mk1',
          variants: [
            {
              id: 'fiat-fiat-500e-mk1-42kwh-118',
              name: '500e 42 kWh Icon 118 hp',
              years: '2020–present',
              priceBand: '€16,000–€26,000 used',
              specs: {
                engine: 'Front electric motor 87 kW',
                powerHp: 118,
                powerKw: 87,
                torqueNm: 220,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 9.0,
                topSpeedKmh: 150,
                electricRangeKm: 320
              },
              dimensions: {
                lengthMm: 3631,
                widthMm: 1683,
                heightMm: 1527,
                wheelbaseMm: 2322,
                bootLitres: 185,
                weightKg: 1375
              },
              options: evComfort(['3+1 rear door option', 'cabrio convertible roof option', 'augmented-reality navigation']),
              knownFor: ['320 km WLTP range', 'unique 3+1 side door design', 'charming Italian EV styling', 'fast 85 kW DC charging'],
              watchOut: ['tiny 185 L boot', 'rear seats cramped for adults', 'no AWD option', 'charging network less extensive than VW Group EV']
            }
          ]
        }
      ]
    },
    {
      id: 'panda',
      name: 'Panda',
      segment: 'City car / A-segment',
      description: 'The Fiat Panda is one of Italy\'s most beloved and best-selling city cars, combining a compact footprint with surprising practicality. The current generation uses a 1.0 BSG mild-hybrid powertrain and offers the Panda Cross variant with 4x4 capability.',
      tags: ['city car', 'practical', 'affordable', 'iconic', 'urban'],
      generations: [
        {
          id: 'panda-mk3',
          name: 'Panda Mk3 (319)',
          years: '2012–present',
          platform: 'Fiat Pandina platform',
          bodyStyles: ['Hatchback'],
          summary: 'The third-generation Panda has been a continuous success, updated significantly in 2020 with the 1.0 BSG mild-hybrid engine replacing older units. Its square, tall body gives it a class-leading interior space-to-footprint ratio. The Cross variant adds raised ride height and 4x4 option.',
          heroImage: 'panda-mk3',
          variants: [
            {
              id: 'fiat-panda-mk3-10-hybrid',
              name: '1.0 Hybrid 70 City Life',
              years: '2020–present',
              priceBand: '€7,000–€14,000 used',
              specs: {
                engine: '1.0 BSG Hybrid',
                engineCode: 'GSE T3 family',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 70,
                powerKw: 51,
                torqueNm: 92,
                fuel: 'Hybrid',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 14.0,
                topSpeedKmh: 159,
                consumptionL100: 5.0,
                co2Gkm: 114
              },
              dimensions: {
                lengthMm: 3653,
                widthMm: 1643,
                heightMm: 1551,
                wheelbaseMm: 2299,
                bootLitres: 225,
                weightKg: 1010,
                tankLitres: 37
              },
              options: safetyComfort(['7-inch infotainment', 'rear parking sensors', 'city brake assist']),
              knownFor: ['very low running costs', 'tall body practical for city', 'affordable entry price', 'easy to park everywhere'],
              watchOut: ['underpowered on motorways', 'ageing interior design', 'basic safety tech on lower trims', 'limited highway comfort']
            }
          ]
        }
      ]
    },
    {
      id: 'tipo',
      name: 'Tipo',
      segment: 'Compact / C-segment',
      description: 'The Fiat Tipo is a practical compact family car available as a hatchback, saloon, and station wagon. The 2023 update replaced the petrol engines with a 1.5 hybrid unit, positioning the Tipo as an affordable yet efficient choice in the C-segment.',
      tags: ['family', 'practical', 'affordable', 'compact', 'efficient'],
      generations: [
        {
          id: 'tipo-mk2',
          name: 'Tipo Mk2 (356)',
          years: '2015–present',
          platform: 'Fiat C-segment platform',
          bodyStyles: ['Hatchback', 'Sedan', 'Wagon'],
          summary: 'The Tipo relaunch in 2015 offered a genuinely spacious and affordable C-segment option in a market dominated by German rivals. A 2022 facelift introduced a revised exterior and, from 2023, a 1.5-litre turbocharged mild-hybrid engine. Available as hatchback, four-door saloon, and station wagon.',
          heroImage: 'tipo-mk2',
          variants: [
            {
              id: 'fiat-tipo-mk2-15-hybrid-130',
              name: '1.5 Hybrid 130 Cross DCT',
              years: '2023–present',
              priceBand: '€14,000–€22,000 used',
              specs: {
                engine: '1.5 e-Hybrid',
                engineCode: 'GSE T4 family',
                displacementCc: 1499,
                cylinders: 'Inline-4',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 240,
                fuel: 'Hybrid',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.5,
                topSpeedKmh: 205,
                consumptionL100: 5.8,
                co2Gkm: 131
              },
              dimensions: {
                lengthMm: 4369,
                widthMm: 1792,
                heightMm: 1504,
                wheelbaseMm: 2636,
                bootLitres: 440,
                weightKg: 1380,
                tankLitres: 48
              },
              options: safetyComfort(['10.25-inch touchscreen', 'wireless CarPlay', 'lane keep assist', 'Cross body kit']),
              knownFor: ['affordable C-segment pricing', 'spacious rear cabin', 'practical 440 L boot', 'efficient hybrid powertrain'],
              watchOut: ['less refined than Golf or Octavia', 'DCT jerkiness in slow traffic', 'mild-hybrid not full hybrid', 'limited dealer network vs VW Group']
            }
          ]
        }
      ]
    },
    {
      id: 'fiat-600',
      name: '600',
      segment: 'Subcompact SUV / B-SUV',
      description: 'The Fiat 600 is a new B-segment SUV launched in 2023, reviving the historic 600 nameplate. Built on the Stellantis CMP platform shared with the Jeep Avenger and Alfa Romeo Junior, it is offered as both a 1.2 T3 mild-hybrid petrol and a fully electric 600e variant.',
      tags: ['SUV', 'crossover', 'modern', 'B-segment', 'hybrid'],
      generations: [
        {
          id: 'fiat-600-mk1',
          name: '600 Mk1',
          years: '2023–present',
          platform: 'Stellantis CMP',
          bodyStyles: ['SUV'],
          summary: 'The new 600 is Fiat\'s answer to the Peugeot 2008 and VW T-Cross. Built on the Stellantis CMP platform, the hybrid version uses a three-cylinder 1.2 T3 petrol with a 48V mild-hybrid system. The 600e uses a 54 kWh battery and delivers up to 410 km WLTP range with 156 hp.',
          heroImage: 'fiat-600-mk1',
          variants: [
            {
              id: 'fiat-fiat-600-mk1-12-hybrid',
              name: '600 1.2 Hybrid 100 DCT',
              years: '2023–present',
              priceBand: '€18,000–€26,000 used',
              specs: {
                engine: '1.2 PureTech e-DCS6 Hybrid',
                engineCode: 'EB2ADTS family',
                displacementCc: 1199,
                cylinders: 'Inline-3',
                powerHp: 100,
                powerKw: 74,
                torqueNm: 205,
                fuel: 'Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.0,
                topSpeedKmh: 182,
                consumptionL100: 5.4,
                co2Gkm: 122
              },
              dimensions: {
                lengthMm: 4171,
                widthMm: 1781,
                heightMm: 1523,
                wheelbaseMm: 2560,
                bootLitres: 385,
                weightKg: 1313,
                tankLitres: 44
              },
              options: safetyComfort(['10.25-inch infotainment', 'wireless CarPlay/Android Auto', 'rear parking camera']),
              knownFor: ['fresh Italian SUV design', 'competitively priced vs rivals', 'practical 385 L boot', 'Stellantis reliability track record'],
              watchOut: ['three-cylinder refinement', 'DCT can be jerky at low speed', 'limited AWD option', 'newer model less proven in long term']
            },
            {
              id: 'fiat-fiat-600-mk1-600e-54kwh',
              name: '600e 54 kWh 156 hp',
              years: '2023–present',
              priceBand: '€24,000–€33,000 used',
              specs: {
                engine: 'Front electric motor 115 kW',
                powerHp: 156,
                powerKw: 115,
                torqueNm: 260,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 9.0,
                topSpeedKmh: 150,
                electricRangeKm: 410
              },
              dimensions: {
                lengthMm: 4171,
                widthMm: 1781,
                heightMm: 1523,
                wheelbaseMm: 2560,
                bootLitres: 360,
                weightKg: 1540
              },
              options: evComfort(['10.25-inch infotainment', 'heat pump option', 'rear parking camera', 'wireless CarPlay']),
              knownFor: ['410 km WLTP range for B-SUV', 'stylish Italian EV design', 'competitive price vs ID.3', 'practical urban SUV package'],
              watchOut: ['FWD only no AWD option', 'boot smaller at 360 L', 'slower DC charging at 100 kW', 'early model software maturity']
            }
          ]
        }
      ]
    },
    {
      id: 'fiat-500x',
      name: '500X',
      segment: 'Subcompact SUV / B-SUV',
      description: 'The Fiat 500X is a compact crossover SUV designed to capitalise on the 500\'s iconic styling in a larger, more practical body. A 2023 update replaced the previous engine lineup with a 1.5 T4 hybrid unit, bringing the 500X in line with EU6d emissions requirements.',
      tags: ['SUV', 'crossover', 'retro-inspired', 'practical', 'B-segment'],
      generations: [
        {
          id: 'fiat-500x-mk1',
          name: '500X Mk1 (334)',
          years: '2015–present',
          platform: 'Fiat/Jeep Small Wide 4x4 platform',
          bodyStyles: ['SUV'],
          summary: 'The 500X extended the 500 family into the SUV segment, competing with the Peugeot 2008 and SEAT Arona. The latest 1.5 T4 hybrid variant uses a 130 hp mild-hybrid system with a 7-speed DCT. It retains the 500\'s distinctive round headlights and retro styling cues in a much larger body.',
          heroImage: 'fiat-500x-mk1',
          variants: [
            {
              id: 'fiat-fiat-500x-mk1-15-hybrid-130',
              name: '500X 1.5 T4 Hybrid 130 DCT',
              years: '2023–present',
              priceBand: '€17,000–€27,000 used',
              specs: {
                engine: '1.5 e-Hybrid T4',
                engineCode: 'GSE T4 family',
                displacementCc: 1499,
                cylinders: 'Inline-4',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 240,
                fuel: 'Hybrid',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.8,
                topSpeedKmh: 200,
                consumptionL100: 6.0,
                co2Gkm: 136
              },
              dimensions: {
                lengthMm: 4274,
                widthMm: 1796,
                heightMm: 1600,
                wheelbaseMm: 2570,
                bootLitres: 350,
                weightKg: 1420,
                tankLitres: 48
              },
              options: safetyComfort(['10.25-inch touchscreen', 'rear parking camera', 'cross body kit', 'panoramic sunroof']),
              knownFor: ['500 family retro styling in SUV form', 'efficient 1.5 hybrid powertrain', 'well-equipped at launch', 'higher driving position'],
              watchOut: ['small 350 L boot for SUV class', 'no AWD after 2020 update', 'less refined than VW Group rivals', 'ageing base platform under new skin']
            }
          ]
        }
      ]
    }
  ]
};
