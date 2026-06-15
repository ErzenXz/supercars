import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const honda: CarMake = {
  id: 'honda',
  name: 'Honda',
  country: 'Japan',
  logoText: 'H',
  models: [
    {
      id: 'jazz',
      name: 'Jazz',
      segment: 'B-segment hatchback',
      description: 'The Honda Jazz is a B-segment hatchback famed for its clever Magic Seat system and outstanding interior versatility for its class. The fifth-generation e:HEV is exclusively hybrid in Europe, offering a near-silent city drive through Honda\'s series-parallel two-motor hybrid system.',
      tags: ['hatchback', 'hybrid', 'versatile', 'city'],
      generations: [
        {
          id: 'jazz-ge',
          name: 'GE (Fifth Generation)',
          years: '2020–present',
          platform: 'Honda e:HEV platform',
          bodyStyles: ['Hatchback'],
          summary: 'The fifth-generation Jazz dropped all non-hybrid engines for Europe, relying entirely on Honda\'s e:HEV two-motor hybrid system. The 1.5-litre Atkinson-cycle engine acts primarily as a generator, with the electric motor driving the wheels in most conditions for smooth, quiet urban progress.',
          heroImage: 'honda-jazz-ge',
          variants: [
            {
              id: 'honda-jazz-ge-ehev-elegance',
              name: '1.5 e:HEV 109 PS Elegance',
              years: '2020–present',
              priceBand: '€14,000–€22,000 used',
              specs: {
                engine: '1.5-litre Atkinson i-VTEC + dual electric motors (e:HEV)',
                engineCode: 'LEB',
                displacementCc: 1498,
                cylinders: '4',
                powerHp: 109,
                powerKw: 80,
                torqueNm: 253,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 9.4,
                topSpeedKmh: 175,
                consumptionL100: 4.5,
                co2Gkm: 102
              },
              dimensions: {
                lengthMm: 3999,
                widthMm: 1694,
                heightMm: 1525,
                wheelbaseMm: 2530,
                bootLitres: 298,
                weightKg: 1195,
                tankLitres: 40
              },
              options: safetyComfort(['Honda Sensing suite', 'rear parking sensors', 'traffic sign recognition']),
              knownFor: ['Magic Seat flexibility with fold-flat rear', 'near-silent low-speed EV driving', 'class-leading fuel economy', 'user-friendly Honda Sensing safety'],
              watchOut: ['no manual gearbox option', 'small boot compared to class rivals', 'rear legroom tight for adults', 'higher price premium vs non-hybrid B-cars']
            },
            {
              id: 'honda-jazz-ge-ehev-advance',
              name: '1.5 e:HEV 109 PS Advance Sport',
              years: '2020–present',
              priceBand: '€16,000–€25,000 used',
              specs: {
                engine: '1.5-litre Atkinson i-VTEC + dual electric motors (e:HEV)',
                engineCode: 'LEB',
                displacementCc: 1498,
                cylinders: '4',
                powerHp: 109,
                powerKw: 80,
                torqueNm: 253,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 9.4,
                topSpeedKmh: 175,
                consumptionL100: 4.5,
                co2Gkm: 102
              },
              dimensions: {
                lengthMm: 3999,
                widthMm: 1694,
                heightMm: 1525,
                wheelbaseMm: 2530,
                bootLitres: 298,
                weightKg: 1205,
                tankLitres: 40
              },
              options: safetyComfort(['Honda Sensing full suite', 'wireless Apple CarPlay', 'heated front seats', 'sport body styling']),
              knownFor: ['sport visual pack differentiates trim', 'Honda Sensing standard across range', 'refined hybrid drive at all speeds', 'strong city resale values'],
              watchOut: ['power unchanged from lower trims', 'firm suspension tune on poor roads', 'premium price for supermini segment', 'limited sporty character despite Sport badge']
            }
          ]
        }
      ]
    },
    {
      id: 'civic',
      name: 'Civic',
      segment: 'C-segment hatchback',
      description: 'The Honda Civic is a long-running C-segment icon combining practicality with driver engagement. The eleventh generation offers a full e:HEV hybrid hatchback alongside the high-performance Type R, which remains the benchmark hot hatch at the Nürburgring.',
      tags: ['hatchback', 'hybrid', 'hot hatch', 'iconic'],
      generations: [
        {
          id: 'civic-fl',
          name: 'FL (Eleventh Generation)',
          years: '2022–present',
          platform: 'Honda e:HEV advanced platform',
          bodyStyles: ['Hatchback'],
          summary: 'The eleventh-generation Civic returns to a cleaner, more conventional design and adopts Honda\'s e:HEV two-motor hybrid as the sole non-Type R powertrain in Europe. A 2.0-litre Atkinson cycle engine combined with two electric motors delivers smooth, near-silent low-speed driving.',
          heroImage: 'honda-civic-fl',
          variants: [
            {
              id: 'honda-civic-fl-ehev',
              name: '2.0 e:HEV 184 PS',
              years: '2022–present',
              priceBand: '€22,000–€34,000 used',
              specs: {
                engine: '2.0-litre Atkinson DOHC i-VTEC + dual electric motors (e:HEV)',
                engineCode: 'LFC',
                displacementCc: 1993,
                cylinders: '4',
                powerHp: 184,
                powerKw: 135,
                torqueNm: 315,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.4,
                topSpeedKmh: 180,
                consumptionL100: 4.7,
                co2Gkm: 107
              },
              dimensions: {
                lengthMm: 4549,
                widthMm: 1802,
                heightMm: 1415,
                wheelbaseMm: 2735,
                bootLitres: 410,
                weightKg: 1430,
                tankLitres: 46
              },
              options: safetyComfort(['Honda Sensing 360', 'wireless charging pad', 'Bose 12-speaker audio', 'heads-up display']),
              knownFor: ['smooth e:HEV drive quality in traffic', 'excellent highway fuel consumption', 'spacious rear cabin for C-segment', 'strong Honda Sensing safety suite'],
              watchOut: ['no manual gearbox available', 'infotainment touchscreen slow to respond', 'lower driving engagement than predecessors', 'no AWD option']
            },
            {
              id: 'honda-civic-fl-typer',
              name: '2.0 VTEC Turbo Type R 329 PS',
              years: '2023–present',
              priceBand: '€38,000–€52,000 used',
              specs: {
                engine: '2.0-litre turbocharged DOHC VTEC',
                engineCode: 'K20C1',
                displacementCc: 1996,
                cylinders: '4',
                powerHp: 329,
                powerKw: 242,
                torqueNm: 420,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 5.4,
                topSpeedKmh: 275,
                consumptionL100: 8.9,
                co2Gkm: 203
              },
              dimensions: {
                lengthMm: 4591,
                widthMm: 1890,
                heightMm: 1396,
                wheelbaseMm: 2735,
                bootLitres: 344,
                weightKg: 1432,
                tankLitres: 46
              },
              options: safetyComfort(['rev-matching manual', 'Brembo front brakes', 'adaptive Öhlins dampers', 'Nürburgring-tuned suspension geometry']),
              knownFor: ['fastest FWD production car around Nürburgring', 'precision steering feel', 'track-capable with daily usability', 'rev-matching manual gearbox'],
              watchOut: ['firm ride on standard roads', 'polarising aggressive exterior styling', 'premium pricing for hot hatch segment', 'heavy fuel use on track days']
            }
          ]
        }
      ]
    },
    {
      id: 'hr-v',
      name: 'HR-V',
      segment: 'B/C-segment crossover SUV',
      description: 'The Honda HR-V is a stylish B/C-segment crossover that uses Honda\'s e:HEV two-motor hybrid exclusively in Europe. The third generation adopts a sleek fastback silhouette and places the hybrid drivetrain front and centre.',
      tags: ['SUV', 'hybrid', 'stylish', 'crossover'],
      generations: [
        {
          id: 'hrv-ru',
          name: 'RU (Third Generation)',
          years: '2021–present',
          platform: 'Honda e:HEV SUV platform',
          bodyStyles: ['SUV'],
          summary: 'The third-generation HR-V abandons turbopetrol options in Europe in favour of an e:HEV-only lineup. The sleek coupe-SUV roofline limits rear headroom slightly but creates a distinctive look, while the e:HEV delivers refined low-speed EV operation.',
          heroImage: 'honda-hrv-ru',
          variants: [
            {
              id: 'honda-hrv-ru-ehev-elegance',
              name: '1.5 e:HEV 131 PS Elegance',
              years: '2021–present',
              priceBand: '€20,000–€30,000 used',
              specs: {
                engine: '1.5-litre Atkinson i-VTEC + dual electric motors (e:HEV)',
                engineCode: 'LEB',
                displacementCc: 1498,
                cylinders: '4',
                powerHp: 131,
                powerKw: 96,
                torqueNm: 253,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 10.0,
                topSpeedKmh: 170,
                consumptionL100: 5.1,
                co2Gkm: 116
              },
              dimensions: {
                lengthMm: 4330,
                widthMm: 1790,
                heightMm: 1590,
                wheelbaseMm: 2610,
                bootLitres: 319,
                weightKg: 1380,
                tankLitres: 40
              },
              options: safetyComfort(['Honda Sensing full suite', 'heated front seats', 'wireless Apple CarPlay/Android Auto']),
              knownFor: ['distinctive fastback SUV styling', 'smooth e:HEV city driving', 'practical Magic Seat rear configuration', 'Honda Sensing comprehensive safety'],
              watchOut: ['fastback roof limits rear headroom', 'boot smaller than class rivals', 'no AWD option in range', 'engine audible under hard acceleration']
            },
            {
              id: 'honda-hrv-ru-ehev-advance',
              name: '1.5 e:HEV 131 PS Advance',
              years: '2021–present',
              priceBand: '€22,000–€33,000 used',
              specs: {
                engine: '1.5-litre Atkinson i-VTEC + dual electric motors (e:HEV)',
                engineCode: 'LEB',
                displacementCc: 1498,
                cylinders: '4',
                powerHp: 131,
                powerKw: 96,
                torqueNm: 253,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 10.0,
                topSpeedKmh: 170,
                consumptionL100: 5.2,
                co2Gkm: 118
              },
              dimensions: {
                lengthMm: 4330,
                widthMm: 1790,
                heightMm: 1590,
                wheelbaseMm: 2610,
                bootLitres: 319,
                weightKg: 1395,
                tankLitres: 40
              },
              options: safetyComfort(['Honda Sensing 360', 'panoramic roof', 'heads-up display', 'wireless charging']),
              knownFor: ['higher-spec Advance adds panoramic roof', 'quiet and comfortable motorway cruiser', 'competitive fuel economy', 'quality interior materials'],
              watchOut: ['same power output as lower trim', 'panoramic roof reduces headroom further', 'priced into CR-V territory', 'no sportier driving mode available']
            }
          ]
        }
      ]
    },
    {
      id: 'cr-v',
      name: 'CR-V',
      segment: 'C/D-segment SUV',
      description: 'The Honda CR-V is a practical family SUV that now offers both e:HEV full-hybrid and e:PHEV plug-in hybrid in Europe. The sixth-generation adds seven-seat options and a much-improved interior.',
      tags: ['SUV', 'hybrid', 'PHEV', 'family', 'seven-seat'],
      generations: [
        {
          id: 'crv-rs',
          name: 'RS (Sixth Generation)',
          years: '2023–present',
          platform: 'Honda SUV Global Platform',
          bodyStyles: ['SUV'],
          summary: 'The sixth-generation CR-V adopts a cleaner exterior design and introduces the e:PHEV plug-in hybrid to Europe alongside the established e:HEV. An optional third row extends seating to seven, rare for the class.',
          heroImage: 'honda-crv-rs',
          variants: [
            {
              id: 'honda-crv-rs-ehev',
              name: '2.0 e:HEV 204 PS AWD',
              years: '2023–present',
              priceBand: '€28,000–€42,000 used',
              specs: {
                engine: '2.0-litre Atkinson DOHC + dual electric motors (e:HEV)',
                engineCode: 'LFC',
                displacementCc: 1993,
                cylinders: '4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 335,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 8.1,
                topSpeedKmh: 180,
                consumptionL100: 5.5,
                co2Gkm: 126
              },
              dimensions: {
                lengthMm: 4694,
                widthMm: 1866,
                heightMm: 1689,
                wheelbaseMm: 2701,
                bootLitres: 589,
                weightKg: 1825,
                tankLitres: 57
              },
              options: safetyComfort(['Honda Sensing 360', 'panoramic sunroof', 'wireless charging', 'heads-up display', 'optional seven-seat third row']),
              knownFor: ['real AWD for winter confidence', 'large practical boot', 'smooth e:HEV refinement', 'optional seven-seat layout'],
              watchOut: ['heavy for a hybrid SUV', 'third row very tight for adults', 'infotainment system criticized', 'premium pricing']
            },
            {
              id: 'honda-crv-rs-phev',
              name: '2.0 e:PHEV 204 PS AWD',
              years: '2023–present',
              priceBand: '€32,000–€46,000 used',
              specs: {
                engine: '2.0-litre Atkinson DOHC + dual electric motors + 17.7 kWh battery (e:PHEV)',
                engineCode: 'LFC',
                displacementCc: 1993,
                cylinders: '4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 335,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 7.8,
                topSpeedKmh: 180,
                consumptionL100: 1.5,
                electricRangeKm: 81,
                co2Gkm: 34
              },
              dimensions: {
                lengthMm: 4694,
                widthMm: 1866,
                heightMm: 1689,
                wheelbaseMm: 2701,
                bootLitres: 541,
                weightKg: 1990,
                tankLitres: 57
              },
              options: safetyComfort(['Honda Sensing 360', 'AC charging 3.7 kW', 'panoramic roof', 'heads-up display']),
              knownFor: ['81 km WLTP electric range covers daily commutes', 'low official CO2 for company car taxation', 'real AWD with electric rear motor assist', 'quiet EV mode in urban areas'],
              watchOut: ['heavy battery reduces boot space vs e:HEV', 'no seven-seat option on PHEV', 'AC charging limited to 3.7 kW', 'expensive new price']
            }
          ]
        }
      ]
    },
    {
      id: 'zr-v',
      name: 'ZR-V',
      segment: 'C-segment SUV',
      description: 'The Honda ZR-V is a sporty C-segment SUV positioned between the HR-V and CR-V. Launched in 2023, it uses Honda\'s 2.0-litre e:HEV system for a spirited yet efficient drive.',
      tags: ['SUV', 'hybrid', 'sporty', 'new'],
      generations: [
        {
          id: 'zrv-rz',
          name: 'RZ (First Generation)',
          years: '2023–present',
          platform: 'Honda e:HEV SUV platform',
          bodyStyles: ['SUV'],
          summary: 'The ZR-V fills a gap in Honda\'s lineup with a sportier, more driver-focused C-segment SUV. The 2.0-litre e:HEV two-motor hybrid delivers 184 PS with a smooth automatic character and composed chassis.',
          heroImage: 'honda-zrv-rz',
          variants: [
            {
              id: 'honda-zrv-rz-ehev',
              name: '2.0 e:HEV 184 PS Elegance',
              years: '2023–present',
              priceBand: '€26,000–€36,000 used',
              specs: {
                engine: '2.0-litre Atkinson DOHC i-VTEC + dual electric motors (e:HEV)',
                engineCode: 'LFC',
                displacementCc: 1993,
                cylinders: '4',
                powerHp: 184,
                powerKw: 135,
                torqueNm: 315,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.6,
                topSpeedKmh: 180,
                consumptionL100: 5.2,
                co2Gkm: 118
              },
              dimensions: {
                lengthMm: 4568,
                widthMm: 1840,
                heightMm: 1620,
                wheelbaseMm: 2655,
                bootLitres: 380,
                weightKg: 1555,
                tankLitres: 46
              },
              options: safetyComfort(['Honda Sensing 360', 'wireless charging pad', 'panoramic sunroof', 'Bose sound system']),
              knownFor: ['sporty SUV with genuine driver appeal', 'smooth e:HEV urban performance', 'clean exterior design', 'comprehensive Honda Sensing safety'],
              watchOut: ['FWD only — no AWD option for ZR-V in EU', 'boot smaller than CR-V rival', 'high entry price for the class', 'limited production history so far']
            },
            {
              id: 'honda-zrv-rz-ehev-advance',
              name: '2.0 e:HEV 184 PS Advance Sport',
              years: '2023–present',
              priceBand: '€28,000–€38,000 used',
              specs: {
                engine: '2.0-litre Atkinson DOHC i-VTEC + dual electric motors (e:HEV)',
                engineCode: 'LFC',
                displacementCc: 1993,
                cylinders: '4',
                powerHp: 184,
                powerKw: 135,
                torqueNm: 315,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.6,
                topSpeedKmh: 180,
                consumptionL100: 5.3,
                co2Gkm: 119
              },
              dimensions: {
                lengthMm: 4568,
                widthMm: 1840,
                heightMm: 1620,
                wheelbaseMm: 2655,
                bootLitres: 380,
                weightKg: 1565,
                tankLitres: 46
              },
              options: safetyComfort(['Honda Sensing 360', 'heads-up display', 'sport body kit', '18-inch alloys', 'ambient lighting']),
              knownFor: ['sport kit enhances kerb appeal', 'top-spec comfort and convenience', 'advanced safety as standard', 'strong expected resale values'],
              watchOut: ['sport pack is cosmetic only — no performance upgrade', 'same powertrain as Elegance trim', 'premium pricing requires justification', 'firm suspension on rough surfaces']
            }
          ]
        }
      ]
    },
    {
      id: 'e-ny1',
      name: 'e:Ny1',
      segment: 'B/C-segment electric SUV',
      description: 'The Honda e:Ny1 is Honda\'s first mass-market electric SUV for Europe, based on the HR-V platform. It offers a 68.8 kWh battery with around 412 km WLTP range and DC fast charging at up to 78 kW.',
      tags: ['electric', 'SUV', 'new', 'crossover'],
      generations: [
        {
          id: 'eny1-rp',
          name: 'RP (First Generation)',
          years: '2023–present',
          platform: 'Honda e:N Architecture F',
          bodyStyles: ['SUV'],
          summary: 'The e:Ny1 enters Honda\'s European EV lineup as a practical B/C-segment electric SUV. The 68.8 kWh battery and 150 kW front motor target family buyers who want zero-emission motoring with a familiar SUV body.',
          heroImage: 'honda-eny1-rp',
          variants: [
            {
              id: 'honda-eny1-rp-68kwh',
              name: '68.8 kWh 204 PS FWD',
              years: '2023–present',
              priceBand: '€30,000–€44,000 used',
              specs: {
                engine: 'single front electric motor 150 kW',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 310,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 7.7,
                topSpeedKmh: 160,
                electricRangeKm: 412
              },
              dimensions: {
                lengthMm: 4387,
                widthMm: 1790,
                heightMm: 1590,
                wheelbaseMm: 2610,
                bootLitres: 361,
                weightKg: 1840
              },
              options: evComfort(['CCS DC fast charging 78 kW', 'Honda Sensing safety suite', 'wireless Apple CarPlay/Android Auto']),
              knownFor: ['412 km WLTP range for family trips', 'smooth one-pedal driving mode', 'familiar SUV packaging and driving position', 'comprehensive Honda Sensing safety'],
              watchOut: ['DC charging limited to 78 kW vs class rivals', 'boot smaller than petrol HR-V due to battery', 'no AWD variant in Europe', 'high starting price vs Korean competitors']
            }
          ]
        }
      ]
    },
    {
      id: 'honda-e',
      name: 'Honda e',
      segment: 'B-segment electric city car',
      description: 'The Honda e is a stylish retro-inspired urban electric car with rear-wheel drive, a 35.5 kWh battery, and a maximum range of around 220 km WLTP. It targets design-conscious city buyers despite limited range.',
      tags: ['electric', 'city', 'retro', 'design-led'],
      generations: [
        {
          id: 'hondae-zc7',
          name: 'ZC7 (First Generation)',
          years: '2020–2024',
          platform: 'Honda e dedicated EV platform',
          bodyStyles: ['Hatchback'],
          summary: 'The Honda e uses a rear-wheel-drive electric drivetrain with a 35.5 kWh battery. Its round retro-inspired exterior, digital side mirrors, and panoramic interior dashboard make it one of the most distinctive EVs on sale, though its short range limits long-distance appeal.',
          heroImage: 'honda-e-zc7',
          variants: [
            {
              id: 'honda-hondae-zc7-advance',
              name: '35.5 kWh 136 PS Advance',
              years: '2020–2024',
              priceBand: '€18,000–€28,000 used',
              specs: {
                engine: 'single rear electric motor 100 kW',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 315,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 8.3,
                topSpeedKmh: 145,
                electricRangeKm: 222
              },
              dimensions: {
                lengthMm: 3894,
                widthMm: 1752,
                heightMm: 1512,
                wheelbaseMm: 2530,
                bootLitres: 171,
                weightKg: 1513
              },
              options: evComfort(['DC fast charging 50 kW CCS', 'digital camera door mirrors', 'wide panoramic interior display']),
              knownFor: ['unique retro exterior design', 'rear-wheel drive for fun handling balance', 'stunning five-screen interior concept', 'ultra-tight turning circle for city parking'],
              watchOut: ['222 km range falls short in winter', 'very small boot limits practicality', 'premium pricing for limited range', 'production ended 2024 — no direct successor']
            },
            {
              id: 'honda-hondae-zc7-advance-sport',
              name: '35.5 kWh 154 PS Advance Sport',
              years: '2020–2024',
              priceBand: '€20,000–€30,000 used',
              specs: {
                engine: 'single rear electric motor 113 kW',
                powerHp: 154,
                powerKw: 113,
                torqueNm: 315,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 8.3,
                topSpeedKmh: 150,
                electricRangeKm: 210
              },
              dimensions: {
                lengthMm: 3894,
                widthMm: 1752,
                heightMm: 1512,
                wheelbaseMm: 2530,
                bootLitres: 171,
                weightKg: 1543
              },
              options: evComfort(['DC fast charging 50 kW CCS', 'digital door mirrors', 'sport exterior accents', 'heads-up display']),
              knownFor: ['higher-output motor adds extra urgency off the line', 'distinctive sport exterior details', 'collector interest as a discontinued model', 'excellent urban EV experience'],
              watchOut: ['slightly lower range than base due to added weight', 'sport designation is cosmetic not mechanical', 'same range concerns apply as 136 PS', 'discontinued — long-term parts supply uncertain']
            }
          ]
        }
      ]
    }
  ]
};
