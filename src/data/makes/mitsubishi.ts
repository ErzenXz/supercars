import type { CarMake } from '../../types';
import { safetyComfort } from '../_shared';

export const mitsubishi: CarMake = {
  id: 'mitsubishi',
  name: 'Mitsubishi',
  country: 'Japan',
  logoText: 'M',
  models: [
    {
      id: 'space-star',
      name: 'Space Star',
      segment: 'A-segment city car',
      description: 'The Mitsubishi Space Star is a budget-friendly A/B-segment city car offering simple, reliable transport. Sold in Europe with 1.0 and 1.2-litre petrol engines, it targets buyers seeking an economical and easy-to-park urban runabout.',
      tags: ['city car', 'affordable', 'urban', 'petrol'],
      generations: [
        {
          id: 'space-star-a0x',
          name: 'A0X (Current Generation)',
          years: '2012–present',
          platform: 'Mitsubishi JATCO platform',
          bodyStyles: ['Hatchback'],
          summary: 'The current Space Star is a long-running but regularly updated city car offering minimal running costs and simple reliability. The 1.2-litre MIVEC engine with the CVT automatic is the most popular combination in Europe.',
          heroImage: 'mitsubishi-spacestar-a0x',
          variants: [
            {
              id: 'mitsubishi-spacestar-a0x-10',
              name: '1.0 MIVEC 71 PS',
              years: '2012–present',
              priceBand: '€5,000–€12,000 used',
              specs: {
                engine: '1.0-litre MIVEC three-cylinder petrol',
                engineCode: '3A90',
                displacementCc: 998,
                cylinders: '3',
                powerHp: 71,
                powerKw: 52,
                torqueNm: 88,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 5,
                drive: 'FWD',
                acceleration0100: 13.4,
                topSpeedKmh: 160,
                consumptionL100: 4.9,
                co2Gkm: 112
              },
              dimensions: {
                lengthMm: 3845,
                widthMm: 1665,
                heightMm: 1530,
                wheelbaseMm: 2450,
                bootLitres: 235,
                weightKg: 895,
                tankLitres: 35
              },
              options: safetyComfort(['rear parking sensors', 'lane departure warning']),
              knownFor: ['very low purchase price', 'low fuel consumption for city use', 'easy urban parking', 'simple reliable mechanicals'],
              watchOut: ['very slow on motorways', 'dated interior design', 'small boot', 'limited safety technology']
            },
            {
              id: 'mitsubishi-spacestar-a0x-12',
              name: '1.2 MIVEC 80 PS CVT',
              years: '2015–present',
              priceBand: '€7,000–€14,000 used',
              specs: {
                engine: '1.2-litre MIVEC four-cylinder petrol',
                engineCode: '3B20',
                displacementCc: 1193,
                cylinders: '4',
                powerHp: 80,
                powerKw: 59,
                torqueNm: 106,
                fuel: 'Petrol',
                gearbox: 'CVT',
                drive: 'FWD',
                acceleration0100: 12.4,
                topSpeedKmh: 167,
                consumptionL100: 5.3,
                co2Gkm: 122
              },
              dimensions: {
                lengthMm: 3845,
                widthMm: 1665,
                heightMm: 1530,
                wheelbaseMm: 2450,
                bootLitres: 235,
                weightKg: 945,
                tankLitres: 35
              },
              options: safetyComfort(['rear parking sensors', 'automatic climate control', 'cruise control']),
              knownFor: ['smooth CVT in city traffic', 'affordable automatic alternative', 'extra cylinder smoothness vs 1.0', 'reasonable urban fuel economy'],
              watchOut: ['CVT loses efficiency at higher speeds', 'still not fast enough for comfortable motorway', 'higher price for minimal equipment', 'interior quality basic']
            }
          ]
        }
      ]
    },
    {
      id: 'asx',
      name: 'ASX',
      segment: 'B/C-segment crossover SUV',
      description: 'The Mitsubishi ASX is a compact crossover SUV that has been refreshed for Europe by adopting Renault-Nissan Alliance platforms. The current generation is a rebadged Renault Captur offering 1.0 mild-hybrid petrol, 1.6 full hybrid, and a plug-in hybrid option.',
      tags: ['SUV', 'crossover', 'hybrid', 'urban'],
      generations: [
        {
          id: 'asx-ga3w',
          name: 'GA3W (Third Generation)',
          years: '2023–present',
          platform: 'Renault CMF-B',
          bodyStyles: ['SUV'],
          summary: 'The third-generation ASX is built on the Renault CMF-B platform as a Renault Captur sibling. It brings a modern Mitsubishi face and three electrified powertrains: a 1.0 mild-hybrid, a 1.6 full self-charging hybrid, and a 1.6 plug-in hybrid.',
          heroImage: 'mitsubishi-asx-ga3w',
          variants: [
            {
              id: 'mitsubishi-asx-ga3w-10',
              name: '1.0 TCe 92 PS Mild Hybrid',
              years: '2023–present',
              priceBand: '€16,000–€24,000 used',
              specs: {
                engine: '1.0-litre turbocharged three-cylinder petrol with 12V mild-hybrid',
                engineCode: 'H4D-F4',
                displacementCc: 999,
                cylinders: '3',
                powerHp: 92,
                powerKw: 68,
                torqueNm: 160,
                fuel: 'Hybrid',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 13.0,
                topSpeedKmh: 170,
                consumptionL100: 5.4,
                co2Gkm: 122
              },
              dimensions: {
                lengthMm: 4225,
                widthMm: 1797,
                heightMm: 1571,
                wheelbaseMm: 2639,
                bootLitres: 422,
                weightKg: 1254,
                tankLitres: 48
              },
              options: safetyComfort(['rear-view camera', 'lane departure warning', 'traffic sign recognition']),
              knownFor: ['modern Renault-based platform', 'more premium cabin than outgoing ASX', 'reasonable urban economy with mild-hybrid', 'generous standard safety tech'],
              watchOut: ['underpowered for motorway use', 'essentially a rebadged Renault Captur', 'no AWD option', 'mild hybrid saving modest vs full hybrid']
            },
            {
              id: 'mitsubishi-asx-ga3w-16-hybrid',
              name: '1.6 E-Tech 143 PS Full Hybrid',
              years: '2023–present',
              priceBand: '€20,000–€28,000 used',
              specs: {
                engine: '1.6-litre Atkinson four-cylinder + dual electric motors (E-Tech Hybrid)',
                engineCode: 'H4M',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 143,
                powerKw: 105,
                torqueNm: 205,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 10.3,
                topSpeedKmh: 175,
                consumptionL100: 4.7,
                co2Gkm: 107
              },
              dimensions: {
                lengthMm: 4225,
                widthMm: 1797,
                heightMm: 1571,
                wheelbaseMm: 2639,
                bootLitres: 422,
                weightKg: 1450,
                tankLitres: 48
              },
              options: safetyComfort(['Mitsubishi Smartphone Link Display Audio', 'wireless charging', 'heated front seats', 'rear-view camera']),
              knownFor: ['excellent city fuel economy with full hybrid', 'smooth automatic operation in traffic', 'lower CO2 for company car taxation', 'Renault E-Tech proven reliability'],
              watchOut: ['no AWD available', 'essentially a rebadged Renault Captur E-Tech', 'slightly slow highway performance', 'boot identical to mild-hybrid variant']
            }
          ]
        }
      ]
    },
    {
      id: 'eclipse-cross',
      name: 'Eclipse Cross',
      segment: 'C-segment SUV',
      description: 'The Mitsubishi Eclipse Cross is a stylish C-segment SUV with a distinctive coupe-like roofline. The PHEV version combines a 2.4-litre petrol engine with twin electric motors and a 13.8 kWh battery for genuine AWD capability and electric-only commuting.',
      tags: ['SUV', 'PHEV', 'AWD', 'stylish'],
      generations: [
        {
          id: 'eclipse-cross-gl',
          name: 'GL (Current Generation)',
          years: '2017–present',
          platform: 'Mitsubishi C-segment platform',
          bodyStyles: ['SUV'],
          summary: 'The Eclipse Cross facelifted in 2021 with a revised rear end and PHEV powertrain updated to 13.8 kWh. The S-AWC (Super All-Wheel Control) system with twin electric motors provides active torque vectoring between rear wheels.',
          heroImage: 'mitsubishi-eclipsecross-gl',
          variants: [
            {
              id: 'mitsubishi-eclipsecross-gl-phev',
              name: '2.4 PHEV S-AWC 188 PS',
              years: '2021–present',
              priceBand: '€22,000–€36,000 used',
              specs: {
                engine: '2.4-litre MIVEC Atkinson + front and rear electric motors + 13.8 kWh battery (PHEV)',
                engineCode: '4B12',
                displacementCc: 2360,
                cylinders: '4',
                powerHp: 188,
                powerKw: 138,
                torqueNm: 332,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 8.5,
                topSpeedKmh: 180,
                consumptionL100: 1.8,
                electricRangeKm: 55,
                co2Gkm: 41
              },
              dimensions: {
                lengthMm: 4545,
                widthMm: 1805,
                heightMm: 1685,
                wheelbaseMm: 2670,
                bootLitres: 378,
                weightKg: 1960,
                tankLitres: 45
              },
              options: safetyComfort(['Mitsubishi e-Assist safety suite', 'S-AWC torque vectoring', 'heated front seats', 'wireless charging', 'panoramic roof']),
              knownFor: ['S-AWC torque vectoring AWD system', '55 km EV range covers daily use', 'twin motor AWD without mechanical propshaft', 'strong combined performance'],
              watchOut: ['heavy at nearly two tonnes', 'boot reduced by battery packaging', 'AC charging limited to 3.7 kW', 'resale values below European rivals']
            },
            {
              id: 'mitsubishi-eclipsecross-gl-phev-intense',
              name: '2.4 PHEV S-AWC 188 PS Intense+',
              years: '2021–present',
              priceBand: '€26,000–€40,000 used',
              specs: {
                engine: '2.4-litre MIVEC Atkinson + front and rear electric motors + 13.8 kWh battery (PHEV)',
                engineCode: '4B12',
                displacementCc: 2360,
                cylinders: '4',
                powerHp: 188,
                powerKw: 138,
                torqueNm: 332,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 8.5,
                topSpeedKmh: 180,
                consumptionL100: 1.8,
                electricRangeKm: 55,
                co2Gkm: 41
              },
              dimensions: {
                lengthMm: 4545,
                widthMm: 1805,
                heightMm: 1685,
                wheelbaseMm: 2670,
                bootLitres: 378,
                weightKg: 1975,
                tankLitres: 45
              },
              options: safetyComfort(['Mitsubishi e-Assist full suite', 'Rockford Fosgate premium audio', 'Nappa leather', 'panoramic sunroof', 'wireless charging']),
              knownFor: ['top-spec Rockford Fosgate audio system', 'premium Nappa leather interior', 'comprehensive safety suite', 'maximum AWD confidence in winter'],
              watchOut: ['same PHEV powertrain as lower trim', 'heavy pricing competes with more prestigious brands', 'same boot space limitation', 'fuel use rises sharply with depleted battery']
            }
          ]
        }
      ]
    },
    {
      id: 'outlander',
      name: 'Outlander',
      segment: 'D-segment SUV',
      description: 'The Mitsubishi Outlander is a D-segment family SUV with available seven-seat configuration. The third generation PHEV was a pioneer for plug-in hybrid SUVs in Europe; the current fourth generation built on the Nissan X-Trail platform raises tech levels.',
      tags: ['SUV', 'PHEV', 'AWD', 'seven-seat', 'family'],
      generations: [
        {
          id: 'outlander-gc',
          name: 'GC (Fourth Generation)',
          years: '2021–present',
          platform: 'Nissan CMF-CD (Large)',
          bodyStyles: ['SUV'],
          summary: 'The fourth-generation Outlander is built on the Nissan X-Trail CMF-CD platform and features an updated PHEV system with a larger 20 kWh battery providing up to 84 km WLTP electric range. Optional third row extends seating to seven.',
          heroImage: 'mitsubishi-outlander-gc',
          variants: [
            {
              id: 'mitsubishi-outlander-gc-phev',
              name: '2.4 PHEV S-AWC 96 PS + 2x85 PS',
              years: '2021–present',
              priceBand: '€28,000–€46,000 used',
              specs: {
                engine: '2.4-litre MIVEC Atkinson + front 85 kW + rear 100 kW motors + 20 kWh battery (PHEV)',
                engineCode: '4B12',
                displacementCc: 2360,
                cylinders: '4',
                powerHp: 302,
                powerKw: 222,
                torqueNm: 450,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 6.7,
                topSpeedKmh: 180,
                consumptionL100: 2.0,
                electricRangeKm: 84,
                co2Gkm: 46
              },
              dimensions: {
                lengthMm: 4710,
                widthMm: 1862,
                heightMm: 1745,
                wheelbaseMm: 2705,
                bootLitres: 477,
                weightKg: 2090,
                tankLitres: 56
              },
              options: safetyComfort(['Mitsubishi e-Assist full suite', 'S-AWC torque vectoring', 'AC charging 7.4 kW', 'panoramic sunroof', 'optional 7-seat third row']),
              knownFor: ['84 km WLTP electric range leads PHEV SUV class', 'S-AWC twin-motor AWD with torque vectoring', 'optional seven-seat layout', 'strong all-weather capability'],
              watchOut: ['very heavy at over two tonnes', 'ride comfort suffers with full load', 'third row only suitable for children', 'charge-depleted fuel consumption above 9 L/100 km']
            },
            {
              id: 'mitsubishi-outlander-gc-phev-top',
              name: '2.4 PHEV S-AWC 302 PS Instyle+',
              years: '2022–present',
              priceBand: '€34,000–€52,000 used',
              specs: {
                engine: '2.4-litre MIVEC Atkinson + front 85 kW + rear 100 kW motors + 20 kWh battery (PHEV)',
                engineCode: '4B12',
                displacementCc: 2360,
                cylinders: '4',
                powerHp: 302,
                powerKw: 222,
                torqueNm: 450,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 6.7,
                topSpeedKmh: 180,
                consumptionL100: 2.0,
                electricRangeKm: 84,
                co2Gkm: 46
              },
              dimensions: {
                lengthMm: 4710,
                widthMm: 1862,
                heightMm: 1745,
                wheelbaseMm: 2705,
                bootLitres: 477,
                weightKg: 2100,
                tankLitres: 56
              },
              options: safetyComfort(['Mitsubishi e-Assist 360', 'Yamaha premium sound system', 'Nappa leather', 'panoramic sunroof', 'wireless charging', 'heads-up display']),
              knownFor: ['Yamaha premium audio system', 'comprehensive Nappa leather trim', 'maximum comfort and tech specification', 'class-leading PHEV range'],
              watchOut: ['same mechanical package as base PHEV', 'pricing approaches premium European SUV territory', 'very heavy top-spec model', 'limited dealer network in some EU countries']
            }
          ]
        }
      ]
    },
    {
      id: 'colt',
      name: 'Colt',
      segment: 'B-segment hatchback',
      description: 'The Mitsubishi Colt returned to Europe in 2023 as a B-segment hatchback built on the Renault CMF-B platform as a sibling to the Renault Clio. It offers a 1.0 mild-hybrid petrol and a 1.6 full hybrid, reviving a classic nameplate with modern electrified credentials.',
      tags: ['hatchback', 'hybrid', 'affordable', 'new'],
      generations: [
        {
          id: 'colt-z30',
          name: 'Z30 (Sixth Generation)',
          years: '2023–present',
          platform: 'Renault CMF-B',
          bodyStyles: ['Hatchback'],
          summary: 'The new sixth-generation Colt is built on the Renault CMF-B platform as a Clio twin. Mitsubishi-specific styling themes and two electrified powertrain choices mark its European relaunch.',
          heroImage: 'mitsubishi-colt-z30',
          variants: [
            {
              id: 'mitsubishi-colt-z30-10',
              name: '1.0 TCe 91 PS Mild Hybrid',
              years: '2023–present',
              priceBand: '€14,000–€20,000 used',
              specs: {
                engine: '1.0-litre turbocharged three-cylinder petrol with 12V mild-hybrid',
                engineCode: 'H4D-F4',
                displacementCc: 999,
                cylinders: '3',
                powerHp: 91,
                powerKw: 67,
                torqueNm: 160,
                fuel: 'Hybrid',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 12.0,
                topSpeedKmh: 172,
                consumptionL100: 5.2,
                co2Gkm: 118
              },
              dimensions: {
                lengthMm: 4050,
                widthMm: 1798,
                heightMm: 1473,
                wheelbaseMm: 2583,
                bootLitres: 391,
                weightKg: 1227,
                tankLitres: 45
              },
              options: safetyComfort(['Mitsubishi safety package', 'rear parking camera', 'lane departure warning', 'traffic sign recognition']),
              knownFor: ['affordable entry price for B-segment', 'good boot space for class', 'proven Renault CMF-B platform reliability', 'modern safety tech standard'],
              watchOut: ['essentially a rebadged Renault Clio', 'mild-hybrid system modest in real-world savings', 'underpowered compared to turbocharged rivals', 'limited Mitsubishi differentiation vs donor car']
            },
            {
              id: 'mitsubishi-colt-z30-16-hybrid',
              name: '1.6 E-Tech 143 PS Full Hybrid',
              years: '2023–present',
              priceBand: '€18,000–€25,000 used',
              specs: {
                engine: '1.6-litre Atkinson four-cylinder + dual electric motors (E-Tech Full Hybrid)',
                engineCode: 'H4M',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 143,
                powerKw: 105,
                torqueNm: 205,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 10.3,
                topSpeedKmh: 175,
                consumptionL100: 4.5,
                co2Gkm: 99
              },
              dimensions: {
                lengthMm: 4050,
                widthMm: 1798,
                heightMm: 1473,
                wheelbaseMm: 2583,
                bootLitres: 300,
                weightKg: 1410,
                tankLitres: 36
              },
              options: safetyComfort(['Mitsubishi safety package', 'wireless Apple CarPlay/Android Auto', 'heated front seats', 'wireless charging pad']),
              knownFor: ['sub-100 g/km CO2 for B-segment', 'smooth E-Tech hybrid in urban traffic', 'excellent city fuel economy', 'modern infotainment system from Renault-Nissan'],
              watchOut: ['full hybrid reduces boot to 300 litres', 'smaller fuel tank than mild-hybrid', 'same Renault Clio E-Tech underpinnings', 'no manual gearbox with full hybrid']
            }
          ]
        }
      ]
    }
  ]
};
