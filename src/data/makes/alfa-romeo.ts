import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const alfaRomeo: CarMake = {
  id: 'alfa-romeo',
  name: 'Alfa Romeo',
  country: 'Italy',
  logoText: 'A',
  models: [
    {
      id: 'giulia',
      name: 'Giulia',
      segment: 'Executive Sedan',
      description: 'The Alfa Romeo Giulia is the brand\'s flagship executive saloon built on the Giorgio rear-wheel drive platform. Available in 2.0T, Veloce, and the legendary 510 hp Quadrifoglio, it offers one of the most engaging drives in the executive car class.',
      tags: ['sedan', 'executive', 'RWD', 'Giorgio-platform', 'driver-focused', 'Italian'],
      generations: [
        {
          id: 'giulia-i',
          name: 'Giulia I (952)',
          years: '2016–present',
          platform: 'Alfa Romeo Giorgio (RWD)',
          bodyStyles: ['Sedan'],
          summary: 'The Giulia marked Alfa Romeo\'s return to rear-wheel drive with the purpose-developed Giorgio platform. The base 2.0T offers 200 hp, the Veloce brings 280 hp, and the Quadrifoglio uses a Ferrari-derived 2.9-litre twin-turbo V6 for 510 hp and a 3.9-second 0-100 time.',
          heroImage: 'giulia-i',
          variants: [
            {
              id: 'alfa-romeo-giulia-i-2t',
              name: 'Giulia 2.0T',
              years: '2016–present',
              priceBand: '€25,000+ used',
              specs: {
                engine: '2.0 turbocharged four-cylinder',
                engineCode: 'GME',
                displacementCc: 1995,
                cylinders: 'Inline-4',
                powerHp: 200,
                powerKw: 147,
                torqueNm: 330,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 6.6,
                topSpeedKmh: 230,
                consumptionL100: 6.8,
                co2Gkm: 154
              },
              dimensions: {
                lengthMm: 4643,
                widthMm: 1869,
                heightMm: 1436,
                wheelbaseMm: 2820,
                bootLitres: 480,
                weightKg: 1524,
                tankLitres: 58
              },
              options: safetyComfort(['adaptive cruise control', 'lane keeping assist', 'Harman Kardon audio', 'panoramic sunroof', 'carbon fibre steering wheel']),
              knownFor: ['best handling car in its class', 'elegant Italian fastback design', 'genuine rear-wheel drive balance', 'class-leading steering feel'],
              watchOut: ['infotainment quality below BMW/Mercedes rivals', 'long-term reliability a concern historically', 'smaller boot than some executive saloon rivals', 'dealer network limited outside major cities']
            },
            {
              id: 'alfa-romeo-giulia-i-veloce',
              name: 'Giulia Veloce',
              years: '2017–present',
              priceBand: '€35,000+ used',
              specs: {
                engine: '2.0 turbocharged four-cylinder',
                engineCode: 'GME',
                displacementCc: 1995,
                cylinders: 'Inline-4',
                powerHp: 280,
                powerKw: 206,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.4,
                topSpeedKmh: 240,
                consumptionL100: 7.6,
                co2Gkm: 172
              },
              dimensions: {
                lengthMm: 4643,
                widthMm: 1869,
                heightMm: 1436,
                wheelbaseMm: 2820,
                bootLitres: 480,
                weightKg: 1596,
                tankLitres: 58
              },
              options: safetyComfort(['Alfa Romeo DNA Pro driving modes', 'Brembo performance brakes', 'Harman Kardon audio', 'Veloce sport suspension', 'carbon fibre interior pack']),
              knownFor: ['280 hp with all-weather AWD', 'sharp handling with Veloce sport setup', 'more accessible Alfa driving experience', 'attractive pricing vs German competition'],
              watchOut: ['AWD adds weight compared to RWD base', 'real-world fuel consumption higher than claimed', 'parts availability in some markets', 'software updates slower than German rivals']
            },
            {
              id: 'alfa-romeo-giulia-i-qv',
              name: 'Giulia Quadrifoglio',
              years: '2016–present',
              priceBand: '€60,000+ used',
              specs: {
                engine: '2.9 V6 biturbo Ferrari-derived',
                engineCode: 'M157',
                displacementCc: 2891,
                cylinders: 'V6',
                powerHp: 510,
                powerKw: 375,
                torqueNm: 600,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 3.9,
                topSpeedKmh: 307,
                consumptionL100: 11.4,
                co2Gkm: 261
              },
              dimensions: {
                lengthMm: 4643,
                widthMm: 1869,
                heightMm: 1436,
                wheelbaseMm: 2820,
                bootLitres: 480,
                weightKg: 1660,
                tankLitres: 58
              },
              options: safetyComfort(['carbon ceramic brakes', 'Brembo brakes standard', 'active exhaust system', 'carbon fibre bonnet', 'carbon fibre interior package', 'Harman Kardon Quantum Logic']),
              knownFor: ['held Nürburgring sedan lap record at launch', 'Ferrari-derived V6 soundtrack', 'purist rear-wheel drive sports saloon', 'most driver-focused executive sedan available'],
              watchOut: ['high fuel and running costs', 'tyres specialised and expensive', 'carbon ceramic brakes can squeal when cold', 'production slow so limited used examples']
            }
          ]
        }
      ]
    },
    {
      id: 'stelvio',
      name: 'Stelvio',
      segment: 'Executive SUV',
      description: 'The Alfa Romeo Stelvio is the SUV sibling of the Giulia, sharing the Giorgio rear-wheel drive platform. It offers the same range of powertrains including the 510 hp Quadrifoglio variant, making it one of the fastest and most dynamically accomplished luxury SUVs available.',
      tags: ['SUV', 'executive', 'Giorgio-platform', 'AWD', 'performance', 'Italian'],
      generations: [
        {
          id: 'stelvio-i',
          name: 'Stelvio I (949)',
          years: '2017–present',
          platform: 'Alfa Romeo Giorgio (RWD-based AWD)',
          bodyStyles: ['SUV'],
          summary: 'The Stelvio adapts the Giorgio platform for SUV proportions with a taller body and standard AWD. The diesel and 2.0T variants provide efficient daily use, while the Quadrifoglio with its Ferrari-derived V6 delivers performance matching dedicated sports SUVs at a lower price.',
          heroImage: 'stelvio-i',
          variants: [
            {
              id: 'alfa-romeo-stelvio-i-22d',
              name: 'Stelvio 2.2d',
              years: '2017–present',
              priceBand: '€20,000+ used',
              specs: {
                engine: '2.2 turbodiesel four-cylinder',
                engineCode: 'GMJ',
                displacementCc: 2143,
                cylinders: 'Inline-4',
                powerHp: 190,
                powerKw: 140,
                torqueNm: 450,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 7.1,
                topSpeedKmh: 215,
                consumptionL100: 5.9,
                co2Gkm: 155
              },
              dimensions: {
                lengthMm: 4687,
                widthMm: 1903,
                heightMm: 1651,
                wheelbaseMm: 2818,
                bootLitres: 525,
                weightKg: 1780,
                tankLitres: 64
              },
              options: safetyComfort(['Alfa Connect infotainment', 'AWD with torque vectoring', 'adaptive cruise control', 'lane keeping assist', 'LED headlights']),
              knownFor: ['strong diesel torque for effortless cruising', 'excellent real-world fuel economy', 'Italian SUV alternative to German norm', 'class-leading SUV handling balance'],
              watchOut: ['diesel demand declining in some markets', 'infotainment quality below rivals', 'reliability perception needs rebuilding', 'limited dealer network']
            },
            {
              id: 'alfa-romeo-stelvio-i-2t',
              name: 'Stelvio 2.0T',
              years: '2017–present',
              priceBand: '€28,000+ used',
              specs: {
                engine: '2.0 turbocharged four-cylinder',
                engineCode: 'GME',
                displacementCc: 1995,
                cylinders: 'Inline-4',
                powerHp: 280,
                powerKw: 206,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.7,
                topSpeedKmh: 230,
                consumptionL100: 8.2,
                co2Gkm: 186
              },
              dimensions: {
                lengthMm: 4687,
                widthMm: 1903,
                heightMm: 1651,
                wheelbaseMm: 2818,
                bootLitres: 525,
                weightKg: 1830,
                tankLitres: 64
              },
              options: safetyComfort(['Alfa Romeo DNA Pro with Race mode', 'Harman Kardon audio', 'panoramic sunroof', 'adaptive headlights', 'AWD torque vectoring']),
              knownFor: ['best handling petrol executive SUV in class', 'comfortable ride quality with sport feel', 'elegant Italian exterior styling', 'competitive value proposition'],
              watchOut: ['boot slightly smaller than Porsche Macan', '3rd row seating not available', 'fuel consumption vs diesel variant', 'optional equipment pricing higher than expected']
            },
            {
              id: 'alfa-romeo-stelvio-i-qv',
              name: 'Stelvio Quadrifoglio',
              years: '2017–present',
              priceBand: '€70,000+ used',
              specs: {
                engine: '2.9 V6 biturbo Ferrari-derived',
                engineCode: 'M157',
                displacementCc: 2891,
                cylinders: 'V6',
                powerHp: 510,
                powerKw: 375,
                torqueNm: 600,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.8,
                topSpeedKmh: 283,
                consumptionL100: 12.8,
                co2Gkm: 295
              },
              dimensions: {
                lengthMm: 4687,
                widthMm: 1903,
                heightMm: 1651,
                wheelbaseMm: 2818,
                bootLitres: 525,
                weightKg: 1830,
                tankLitres: 64
              },
              options: safetyComfort(['carbon ceramic brakes', 'Brembo performance brakes', 'carbon fibre exterior package', 'active exhaust', 'Harman Kardon Quantum Logic']),
              knownFor: ['fastest SUV around Nürburgring at launch', 'Ferrari V6 sound in an everyday SUV', 'practical enough for family use', 'distinctive Italian character in a performance SUV'],
              watchOut: ['high fuel consumption under sport driving', 'running costs significant', 'Porsche Cayenne Turbo has larger dealer network', 'heavy front end can feel light at limits']
            }
          ]
        }
      ]
    },
    {
      id: 'tonale',
      name: 'Tonale',
      segment: 'Compact SUV',
      description: 'The Alfa Romeo Tonale is the brand\'s first hybrid compact SUV and first foray into the premium C-SUV segment. Available as a mild-hybrid and a plug-in hybrid, it uses Stellantis\'s STLA platform and introduces a unique NFT-based service record tied to the car\'s data.',
      tags: ['SUV', 'compact', 'hybrid', 'PHEV', 'mild-hybrid', 'Stellantis', 'modern'],
      generations: [
        {
          id: 'tonale-i',
          name: 'Tonale I',
          years: '2022–present',
          platform: 'Stellantis STLA Small platform',
          bodyStyles: ['SUV'],
          summary: 'Built on the Stellantis STLA Small platform, the Tonale offers a 1.5-litre mild-hybrid and a 1.3-litre PHEV with 280 hp system output and up to 80 km of electric range. Its styling reflects Alfa\'s design renaissance with LED biscione motifs and a driver-focused cockpit.',
          heroImage: 'tonale-i',
          variants: [
            {
              id: 'alfa-romeo-tonale-i-15-hybrid',
              name: 'Tonale 1.5 Hybrid',
              years: '2022–present',
              priceBand: '€40,000+ new',
              specs: {
                engine: '1.5 turbocharged mild-hybrid',
                engineCode: 'GSE',
                displacementCc: 1469,
                cylinders: 'Inline-4',
                powerHp: 160,
                powerKw: 118,
                torqueNm: 240,
                fuel: 'Hybrid',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.8,
                topSpeedKmh: 210,
                consumptionL100: 6.2,
                co2Gkm: 141
              },
              dimensions: {
                lengthMm: 4528,
                widthMm: 1835,
                heightMm: 1604,
                wheelbaseMm: 2636,
                bootLitres: 500,
                weightKg: 1520,
                tankLitres: 48
              },
              options: safetyComfort(['Alfa Connect 10.25-inch infotainment', 'wireless Apple CarPlay', 'lane centering', 'adaptive cruise control', 'panoramic sunroof']),
              knownFor: ['attractive Alfa Romeo SUV at accessible price', 'efficient mild-hybrid powertrain', 'stylish Italian design in compact SUV segment', 'NFT digital service record innovation'],
              watchOut: ['FWD only limits all-weather appeal', 'power modest for the premium segment', 'mild-hybrid savings limited in pure city use', 'smaller than key SUV rivals']
            },
            {
              id: 'alfa-romeo-tonale-i-phev',
              name: 'Tonale PHEV',
              years: '2022–present',
              priceBand: '€55,000+ new',
              specs: {
                engine: '1.3 turbocharged + e-motor PHEV',
                engineCode: 'GSC',
                displacementCc: 1268,
                cylinders: 'Inline-4',
                powerHp: 280,
                powerKw: 206,
                torqueNm: 550,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 6,
                drive: 'AWD',
                acceleration0100: 6.2,
                topSpeedKmh: 200,
                electricRangeKm: 80,
                consumptionL100: 1.4,
                co2Gkm: 32
              },
              dimensions: {
                lengthMm: 4528,
                widthMm: 1835,
                heightMm: 1604,
                wheelbaseMm: 2636,
                bootLitres: 405,
                weightKg: 1820,
                tankLitres: 40
              },
              options: safetyComfort(['electric AWD torque vectoring', 'panoramic sunroof', 'Harman Kardon audio', 'regenerative braking modes', 'Level 2 AC charging']),
              knownFor: ['AWD via electric rear motor', 'up to 80 km EV range for daily commuting', 'low CO2 for company car tax advantages', 'practical compact PHEV with Italian flair'],
              watchOut: ['reduced boot space due to battery pack', 'electric range overstated in cold weather', 'heavier than mild-hybrid by 300 kg', 'charging cable management awkward in some markets']
            }
          ]
        }
      ]
    },
    {
      id: 'junior',
      name: 'Junior',
      segment: 'Subcompact SUV',
      description: 'The Alfa Romeo Junior (formerly Milano, renamed due to naming regulations) is the brand\'s smallest SUV and its first fully electric model. Available with a 1.2-litre mild-hybrid and a 156 kW electric motor, it targets younger premium buyers with Italian design at an accessible price.',
      tags: ['SUV', 'subcompact', 'electric', 'hybrid', 'entry-level', 'modern', 'small'],
      generations: [
        {
          id: 'junior-i',
          name: 'Junior I',
          years: '2024–present',
          platform: 'Stellantis STLA Small platform',
          bodyStyles: ['SUV'],
          summary: 'Launched as \'Milano\' but renamed \'Junior\' following Italian government objections to a non-Italian built car bearing an Italian city name, the Junior offers a 1.2T mild-hybrid and a fully electric Elettrica variant with 156 kW and up to 410 km of range.',
          heroImage: 'junior-i',
          variants: [
            {
              id: 'alfa-romeo-junior-i-hybrid',
              name: 'Junior Ibrida',
              years: '2024–present',
              priceBand: '€32,000+ new',
              specs: {
                engine: '1.2 turbocharged mild-hybrid',
                engineCode: 'PureTech',
                displacementCc: 1199,
                cylinders: 'Inline-3',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 230,
                fuel: 'Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.5,
                topSpeedKmh: 200,
                consumptionL100: 5.4,
                co2Gkm: 122
              },
              dimensions: {
                lengthMm: 4173,
                widthMm: 1789,
                heightMm: 1500,
                wheelbaseMm: 2570,
                bootLitres: 400,
                weightKg: 1335,
                tankLitres: 44
              },
              options: safetyComfort(['10.25-inch infotainment', 'wireless CarPlay/Android Auto', 'adaptive cruise control', 'lane centering assist', 'Alfa Romeo DNA modes']),
              knownFor: ['Alfa Romeo design at accessible price point', 'efficient mild-hybrid 3-cylinder', 'impressive standard equipment level', 'distinctive Italian character in B-SUV segment'],
              watchOut: ['three-cylinder refinement below inline-4 rivals', 'small boot for family use', 'Stellantis platform shared with many rivals', 'brand perception adjustment after name change']
            },
            {
              id: 'alfa-romeo-junior-i-elettrica',
              name: 'Junior Elettrica',
              years: '2024–present',
              priceBand: '€42,000+ new',
              specs: {
                engine: 'single permanent-magnet synchronous motor',
                powerHp: 212,
                powerKw: 156,
                torqueNm: 345,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 5.9,
                topSpeedKmh: 150,
                electricRangeKm: 410
              },
              dimensions: {
                lengthMm: 4173,
                widthMm: 1789,
                heightMm: 1500,
                wheelbaseMm: 2570,
                bootLitres: 400,
                weightKg: 1650
              },
              options: evComfort(['11 kW onboard AC charging', 'wireless Apple CarPlay', 'adaptive cruise control', 'heat pump', 'Alfa telemetry-inspired drive modes']),
              knownFor: ['Alfa Romeo\'s first fully electric car', '410 km range competitive for the class', 'striking design stands out among EV SUVs', '212 hp for spirited city driving'],
              watchOut: ['150 km/h top speed limit disappoints on motorways', 'no AWD option available yet', 'boot size smaller than petrol equivalent', 'charging speed capped at 100 kW DC']
            }
          ]
        }
      ]
    }
  ]
};
