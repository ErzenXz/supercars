import type { CarMake } from '../../types';
import { safetyComfort } from '../_shared';

export const renault: CarMake = {
  id: 'renault',
  name: 'Renault',
  country: 'France',
  logoText: '◈',
  models: [
    {
      id: 'clio',
      name: 'Clio',
      segment: 'B-segment supermini',
      description: 'One of Europe\'s best-selling superminis, the Clio balances city agility with practical interior space and a wide range of efficient petrol, diesel, and hybrid powertrains.',
      tags: ['supermini', 'city car', 'efficient', 'popular', 'hybrid'],
      generations: [
        {
          id: 'clio-iv',
          name: 'Clio IV',
          years: '2012–2019',
          platform: 'Renault B platform',
          bodyStyles: ['Hatchback'],
          summary: 'The fourth-generation Clio brought a significant quality leap with a more premium interior, improved dynamics, and a broad engine range including frugal dCi diesels and TCe turbos.',
          heroImage: 'clio-iv',
          variants: [
            {
              id: 'renault-clio-iv-15-dci-90',
              name: '1.5 dCi 90 Expression',
              years: '2012–2019',
              priceBand: '€5,000–€11,000 used',
              specs: {
                engine: '1.5 dCi diesel',
                engineCode: 'K9K',
                displacementCc: 1461,
                cylinders: 'Inline-4',
                powerHp: 90,
                powerKw: 66,
                torqueNm: 220,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 12.3,
                topSpeedKmh: 183,
                consumptionL100: 3.8,
                co2Gkm: 99
              },
              dimensions: {
                lengthMm: 4062,
                widthMm: 1732,
                heightMm: 1446,
                wheelbaseMm: 2589,
                bootLitres: 300,
                weightKg: 1175,
                tankLitres: 45
              },
              options: safetyComfort(['MediaNav 7" screen', 'rear parking sensors']),
              knownFor: ['excellent fuel economy', 'punchy for city driving', 'wide dealer network', 'good residuals'],
              watchOut: ['DPF clogging on short trips', 'injector wear at high mileage', 'electrical niggles on early cars', 'gearbox synchro wear']
            },
            {
              id: 'renault-clio-iv-09-tce-90',
              name: '0.9 TCe 90 Dynamique',
              years: '2013–2019',
              priceBand: '€5,500–€12,000 used',
              specs: {
                engine: '0.9 TCe turbo petrol',
                engineCode: 'H4Bt',
                displacementCc: 898,
                cylinders: 'Inline-3',
                powerHp: 90,
                powerKw: 66,
                torqueNm: 135,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 5,
                drive: 'FWD',
                acceleration0100: 11.5,
                topSpeedKmh: 182,
                consumptionL100: 5.0,
                co2Gkm: 116
              },
              dimensions: {
                lengthMm: 4062,
                widthMm: 1732,
                heightMm: 1446,
                wheelbaseMm: 2589,
                bootLitres: 300,
                weightKg: 1097,
                tankLitres: 45
              },
              options: safetyComfort(['MediaNav 7" screen', 'cruise control']),
              knownFor: ['light and agile', 'low tax band', 'decent urban performance', 'affordable running costs'],
              watchOut: ['timing chain stretch on early units', 'thirsty when pushed hard', 'limited motorway refinement', 'small boot']
            }
          ]
        },
        {
          id: 'clio-v',
          name: 'Clio V',
          years: '2019–present',
          platform: 'CMF-B',
          bodyStyles: ['Hatchback'],
          summary: 'The fifth-generation Clio raised the bar with a near-premium cabin, larger infotainment, and the introduction of E-Tech full hybrid technology, delivering class-leading urban fuel economy.',
          heroImage: 'clio-v',
          variants: [
            {
              id: 'renault-clio-v-10-tce-100',
              name: '1.0 TCe 100 Zen',
              years: '2019–present',
              priceBand: '€11,000–€19,000 used/new',
              specs: {
                engine: '1.0 TCe turbo petrol',
                engineCode: 'H4D',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 100,
                powerKw: 74,
                torqueNm: 160,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.0,
                topSpeedKmh: 185,
                consumptionL100: 5.3,
                co2Gkm: 120
              },
              dimensions: {
                lengthMm: 4050,
                widthMm: 1798,
                heightMm: 1440,
                wheelbaseMm: 2583,
                bootLitres: 391,
                weightKg: 1160,
                tankLitres: 42
              },
              options: safetyComfort(['Easy Link 9.3" screen', 'rear camera']),
              knownFor: ['refined cabin quality', 'large boot for class', 'smooth gearbox', 'excellent infotainment'],
              watchOut: ['timing chain service interval', 'oil consumption on some units', 'smaller engine can feel flat on motorway', 'automatic unavailable on base trims']
            },
            {
              id: 'renault-clio-v-etech-145',
              name: 'E-Tech Full Hybrid 145',
              years: '2020–present',
              priceBand: '€16,500–€24,000 used/new',
              specs: {
                engine: '1.6 E-Tech full hybrid',
                engineCode: 'H4M + electric motors',
                displacementCc: 1598,
                cylinders: 'Inline-4',
                powerHp: 145,
                powerKw: 107,
                torqueNm: 205,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 9.8,
                topSpeedKmh: 180,
                consumptionL100: 4.6,
                co2Gkm: 104
              },
              dimensions: {
                lengthMm: 4050,
                widthMm: 1798,
                heightMm: 1440,
                wheelbaseMm: 2583,
                bootLitres: 391,
                weightKg: 1273,
                tankLitres: 42
              },
              options: safetyComfort(['highway driver assist', 'heat pump prep', 'Easy Link 9.3"']),
              knownFor: ['outstanding urban fuel economy', 'smooth e-CVT gearbox', 'no plug-in needed', 'quiet city running'],
              watchOut: ['complex drivetrain for DIY mechanics', 'modest motorway efficiency', 'higher purchase price', 'battery warranty terms vary']
            }
          ]
        }
      ]
    },
    {
      id: 'megane',
      name: 'Megane',
      segment: 'C-segment hatchback',
      description: 'A mainstay of Renault\'s lineup, the Megane offers a compelling mix of style, practicality, and driver engagement including the iconic hot Megane R.S. variant.',
      tags: ['hatchback', 'family', 'sporty', 'efficient', 'hot hatch'],
      generations: [
        {
          id: 'megane-iv',
          name: 'Megane IV',
          years: '2016–present',
          platform: 'CMF-C/D',
          bodyStyles: ['Hatchback', 'Wagon', 'Sedan'],
          summary: 'The fourth-generation Megane brought striking styling, a new range of efficient 1.3 TCe and 1.5 dCi engines, plus the return of the legendary Megane R.S. with 300 hp.',
          heroImage: 'megane-iv',
          variants: [
            {
              id: 'renault-megane-iv-15-dci-115',
              name: '1.5 Blue dCi 115 Business',
              years: '2017–present',
              priceBand: '€10,000–€20,000 used',
              specs: {
                engine: '1.5 Blue dCi diesel',
                engineCode: 'K9K',
                displacementCc: 1461,
                cylinders: 'Inline-4',
                powerHp: 115,
                powerKw: 85,
                torqueNm: 260,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.2,
                topSpeedKmh: 195,
                consumptionL100: 4.1,
                co2Gkm: 107
              },
              dimensions: {
                lengthMm: 4359,
                widthMm: 1814,
                heightMm: 1445,
                wheelbaseMm: 2669,
                bootLitres: 384,
                weightKg: 1367,
                tankLitres: 47
              },
              options: safetyComfort(['Easy Link 8.7" screen', 'rear parking camera', 'full LED headlights']),
              knownFor: ['strong torque', 'very frugal on long runs', 'spacious interior', 'good motorway cruiser'],
              watchOut: ['DPF issues in city use', 'EGR valve fouling', 'higher insurance group vs petrol', 'timing chain tensioner']
            },
            {
              id: 'renault-megane-iv-13-tce-140',
              name: '1.3 TCe 140 Intens',
              years: '2018–present',
              priceBand: '€12,000–€22,000 used/new',
              specs: {
                engine: '1.3 TCe turbo petrol',
                engineCode: 'H5H',
                displacementCc: 1332,
                cylinders: 'Inline-4',
                powerHp: 140,
                powerKw: 103,
                torqueNm: 260,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.0,
                topSpeedKmh: 207,
                consumptionL100: 6.2,
                co2Gkm: 140
              },
              dimensions: {
                lengthMm: 4359,
                widthMm: 1814,
                heightMm: 1445,
                wheelbaseMm: 2669,
                bootLitres: 384,
                weightKg: 1390,
                tankLitres: 47
              },
              options: safetyComfort(['9.3" Easy Link portrait screen', 'electric parking brake', 'wireless charging']),
              knownFor: ['refined EDC gearbox', 'strong mid-range pull', 'premium cabin feel', 'good safety scores'],
              watchOut: ['DCT can judder in traffic', 'some reports of injector sooting', 'infotainment complexity', 'moderate fuel economy vs diesel']
            },
            {
              id: 'renault-megane-iv-rs-300',
              name: 'Megane R.S. 300 Trophy',
              years: '2018–present',
              priceBand: '€22,000–€38,000 used/new',
              specs: {
                engine: '1.8 TCe turbo petrol',
                engineCode: 'M5P',
                displacementCc: 1798,
                cylinders: 'Inline-4',
                powerHp: 300,
                powerKw: 221,
                torqueNm: 420,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 5.7,
                topSpeedKmh: 260,
                consumptionL100: 8.9,
                co2Gkm: 204
              },
              dimensions: {
                lengthMm: 4359,
                widthMm: 1814,
                heightMm: 1421,
                wheelbaseMm: 2669,
                bootLitres: 363,
                weightKg: 1495,
                tankLitres: 47
              },
              options: safetyComfort(['Brembo brake upgrade', 'Torsen limited-slip diff', 'Öhlins dampers', 'Akrapovic exhaust']),
              knownFor: ['Nürburgring FWD lap record holder', 'pure driver engagement', 'four-wheel steering', 'exceptional balance'],
              watchOut: ['firm ride on poor roads', 'high running costs', 'limited rear headroom', 'heavy front end']
            }
          ]
        }
      ]
    },
    {
      id: 'captur',
      name: 'Captur',
      segment: 'B-segment crossover SUV',
      description: 'Renault\'s best-selling crossover combines stylish looks with a raised driving position, practical interior, and a modern range of efficient engines including plug-in hybrid.',
      tags: ['crossover', 'SUV', 'family', 'stylish', 'efficient'],
      generations: [
        {
          id: 'captur-ii',
          name: 'Captur II',
          years: '2019–present',
          platform: 'CMF-B',
          bodyStyles: ['SUV'],
          summary: 'The second-generation Captur moved upmarket with a significantly more premium interior, longer wheelbase for extra rear legroom, and added a plug-in hybrid option for the first time.',
          heroImage: 'captur-ii',
          variants: [
            {
              id: 'renault-captur-ii-10-tce-100',
              name: '1.0 TCe 100 Techno',
              years: '2019–present',
              priceBand: '€14,000–€22,000 used/new',
              specs: {
                engine: '1.0 TCe turbo petrol',
                engineCode: 'H4D',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 100,
                powerKw: 74,
                torqueNm: 160,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.6,
                topSpeedKmh: 183,
                consumptionL100: 5.8,
                co2Gkm: 131
              },
              dimensions: {
                lengthMm: 4227,
                widthMm: 1797,
                heightMm: 1576,
                wheelbaseMm: 2639,
                bootLitres: 422,
                weightKg: 1257,
                tankLitres: 48
              },
              options: safetyComfort(['Easy Link 9.3" screen', 'sliding rear bench', 'roof rails']),
              knownFor: ['stylish exterior design', 'premium interior quality', 'practical sliding rear seat', 'user-friendly infotainment'],
              watchOut: ['entry engine can feel underpowered laden', 'no AWD option', 'firm rear suspension', 'timing chain service cost']
            }
          ]
        }
      ]
    },
    {
      id: 'austral',
      name: 'Austral',
      segment: 'C-segment crossover SUV',
      description: 'The Austral replaces the Kadjar as Renault\'s mid-size crossover, featuring a bold new design language, advanced hybrid powertrains, and a tech-forward OpenR portrait screen.',
      tags: ['crossover', 'SUV', 'hybrid', 'tech', 'family'],
      generations: [
        {
          id: 'austral-i',
          name: 'Austral I',
          years: '2022–present',
          platform: 'CMF-CD',
          bodyStyles: ['SUV'],
          summary: 'Renault\'s most technologically advanced combustion-engined model at launch, featuring a 12.3" OpenR screen, 20" wheels, and full hybrid 200 hp powertrain as flagship.',
          heroImage: 'austral-i',
          variants: [
            {
              id: 'renault-austral-i-13-tce-140',
              name: '1.3 TCe mild hybrid 140 Techno',
              years: '2022–present',
              priceBand: '€22,000–€32,000 used/new',
              specs: {
                engine: '1.3 TCe mild hybrid petrol',
                engineCode: 'H5Ht',
                displacementCc: 1332,
                cylinders: 'Inline-4',
                powerHp: 140,
                powerKw: 103,
                torqueNm: 270,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.9,
                topSpeedKmh: 198,
                consumptionL100: 6.0,
                co2Gkm: 136
              },
              dimensions: {
                lengthMm: 4510,
                widthMm: 1836,
                heightMm: 1627,
                wheelbaseMm: 2668,
                bootLitres: 500,
                weightKg: 1471,
                tankLitres: 55
              },
              options: safetyComfort(['OpenR 12.3" portrait screen', 'multiview camera', '20" diamond-cut alloys']),
              knownFor: ['striking interior design', 'large boot space', 'advanced driver aids', 'comfortable motorway manners'],
              watchOut: ['touchscreen learning curve', 'mild hybrid benefit modest vs full hybrid', 'large turning circle', 'higher fuel use than claimed']
            }
          ]
        }
      ]
    }
  ]
};
