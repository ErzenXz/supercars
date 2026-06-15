import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const porsche: CarMake = {
  id: 'porsche',
  name: 'Porsche',
  country: 'Germany',
  logoText: 'P',
  models: [
    {
      id: '911',
      name: '911',
      segment: 'Sports / Supercar',
      description: 'The Porsche 911 is the definitive sports car, in continuous production since 1963. The 992 generation refines the rear-engined flat-six formula to near perfection, offering a spectrum of variants from the tractable Carrera to the ferocious Turbo S and the pure GT3.',
      tags: ['sports', 'iconic', 'rear-engine', 'flat-six', 'PDK', 'GT3', 'performance'],
      generations: [
        {
          id: '911-992',
          name: '911 992',
          years: '2019–present',
          platform: 'Porsche 911 992 platform',
          bodyStyles: ['Coupe', 'Convertible'],
          summary: 'The 992 generation brought wider body tracks, a new interior with analogue tachometer and 10.9-inch touchscreen, improved aerodynamics with a wider rear wing, and wet-mode traction control. All Carrera variants use a PDK dual-clutch gearbox as standard.',
          heroImage: '911-992',
          variants: [
            {
              id: 'porsche-911-992-carrera',
              name: '911 Carrera',
              years: '2019–present',
              priceBand: '€95,000–€140,000 new',
              specs: {
                engine: '3.0 flat-six twin-turbo',
                engineCode: 'MA176',
                displacementCc: 2981,
                cylinders: 'Flat-6',
                powerHp: 385,
                powerKw: 283,
                torqueNm: 450,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 4.2,
                topSpeedKmh: 293,
                consumptionL100: 10.0,
                co2Gkm: 228
              },
              dimensions: {
                lengthMm: 4519,
                widthMm: 1852,
                heightMm: 1300,
                wheelbaseMm: 2450,
                bootLitres: 132,
                weightKg: 1428,
                tankLitres: 64
              },
              options: safetyComfort(['PASM adaptive suspension', 'Sport Chrono package', 'PDLS matrix headlights', 'Bose audio', 'rear-wheel steering']),
              knownFor: ['most accessible 911 with pure driving character', 'flat-six soundtrack unlike any other car', 'daily usable sports car benchmark', 'extraordinary long-term resale value'],
              watchOut: ['options list inflates price dramatically', 'tight rear seats for adults', 'theft target in some European markets', 'fuel consumption significant under spirited driving']
            },
            {
              id: 'porsche-911-992-carrera-s',
              name: '911 Carrera S',
              years: '2019–present',
              priceBand: '€120,000–€175,000 new',
              specs: {
                engine: '3.0 flat-six twin-turbo',
                engineCode: 'MA176S',
                displacementCc: 2981,
                cylinders: 'Flat-6',
                powerHp: 450,
                powerKw: 331,
                torqueNm: 530,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 3.7,
                topSpeedKmh: 308,
                consumptionL100: 10.4,
                co2Gkm: 236
              },
              dimensions: {
                lengthMm: 4519,
                widthMm: 1852,
                heightMm: 1300,
                wheelbaseMm: 2450,
                bootLitres: 132,
                weightKg: 1480,
                tankLitres: 64
              },
              options: safetyComfort(['PASM adaptive suspension', 'Sport Chrono package', 'PDLS+ matrix headlights', 'Burmester audio', 'rear-wheel steering']),
              knownFor: ['peerless driver engagement at road-legal speeds', 'flat-six engine sound world-class', 'everyday usability as a sports car', 'extraordinary resale value'],
              watchOut: ['options list inflates price dramatically', 'fuel consumption significant under spirited driving', 'tight rear seats for adults', 'theft target in some markets']
            },
            {
              id: 'porsche-911-992-turbo-s',
              name: '911 Turbo S',
              years: '2020–present',
              priceBand: '€230,000–€300,000 new',
              specs: {
                engine: '3.8 flat-six twin-turbo',
                engineCode: 'MA177',
                displacementCc: 3745,
                cylinders: 'Flat-6',
                powerHp: 650,
                powerKw: 478,
                torqueNm: 800,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 2.7,
                topSpeedKmh: 330,
                consumptionL100: 11.6,
                co2Gkm: 263
              },
              dimensions: {
                lengthMm: 4535,
                widthMm: 1900,
                heightMm: 1303,
                wheelbaseMm: 2457,
                bootLitres: 132,
                weightKg: 1640,
                tankLitres: 67
              },
              options: safetyComfort(['PASM Sport adaptive suspension', 'Sport Chrono package', 'ceramic composite brakes', 'Burmester 3D surround audio', 'rear-axle steering']),
              knownFor: ['supercar performance with touring car usability', 'AWD launch traction unmatched', 'understated exterior for the performance level', 'engineering benchmark at price point'],
              watchOut: ['very high purchase price', 'insuring at this performance level is costly', 'specialist tyres expensive', 'some find it too capable—lacks the Carrera\'s rawness']
            },
            {
              id: 'porsche-911-992-gt3',
              name: '911 GT3',
              years: '2021–present',
              priceBand: '€180,000–€260,000 new',
              specs: {
                engine: '4.0 flat-six naturally aspirated',
                engineCode: '9A2',
                displacementCc: 3996,
                cylinders: 'Flat-6',
                powerHp: 510,
                powerKw: 375,
                torqueNm: 470,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'RWD',
                acceleration0100: 3.4,
                topSpeedKmh: 318,
                consumptionL100: 13.0,
                co2Gkm: 293
              },
              dimensions: {
                lengthMm: 4535,
                widthMm: 1852,
                heightMm: 1279,
                wheelbaseMm: 2457,
                bootLitres: 125,
                weightKg: 1435,
                tankLitres: 64
              },
              options: safetyComfort(['Weissach package', 'full roll cage option', 'carbon ceramic brakes', 'carbon bucket seats', 'front axle lift system']),
              knownFor: ['naturally aspirated 4.0 screams to 9000 rpm', 'pure driving experience without turbos', 'track-capable road car', 'legendary motorsport GT3 heritage'],
              watchOut: ['dealer allocation often pre-sold', 'very high running costs for a road car', 'stiff ride on UK/German roads', '13 L/100 km fuel use under hard driving']
            }
          ]
        }
      ]
    },
    {
      id: '718-cayman',
      name: '718 Cayman',
      segment: 'Sports Coupe / Mid-engine',
      description: 'The 718 Cayman is Porsche\'s mid-engined sports coupe, universally praised by driving journalists for its handling balance over the 911. The 718 generation switched to turbocharged four-cylinder engines before the GTS and GT4 retained six-cylinders.',
      tags: ['sports', 'mid-engine', 'coupe', 'flat-four', 'GT4', 'handling'],
      generations: [
        {
          id: '718-cayman-982',
          name: '718 Cayman (982)',
          years: '2016–present',
          platform: 'Porsche 718 982 platform',
          bodyStyles: ['Coupe'],
          summary: 'The 982 generation switched from the naturally aspirated flat-six to a turbocharged flat-four, polarising enthusiasts. The GTS 4.0 and GT4 reverted to a 4.0-litre naturally aspirated flat-six from the GT3, satisfying purists and earning universal acclaim.',
          heroImage: '718-cayman-982',
          variants: [
            {
              id: 'porsche-718-cayman-982-s',
              name: '718 Cayman S',
              years: '2016–present',
              priceBand: '€55,000–€90,000 new',
              specs: {
                engine: '2.5 flat-four turbo',
                engineCode: '9A2',
                displacementCc: 2497,
                cylinders: 'Flat-4',
                powerHp: 350,
                powerKw: 257,
                torqueNm: 420,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'RWD',
                acceleration0100: 4.4,
                topSpeedKmh: 285,
                consumptionL100: 9.2,
                co2Gkm: 210
              },
              dimensions: {
                lengthMm: 4379,
                widthMm: 1801,
                heightMm: 1281,
                wheelbaseMm: 2475,
                bootLitres: 275,
                weightKg: 1375,
                tankLitres: 54
              },
              options: safetyComfort(['PASM adaptive dampers', 'Sport Chrono package', 'BOSE audio', 'rear-axle steering', 'Sport Design front']),
              knownFor: ['finest handling balance of any production sports car', 'mid-engine weight distribution perfection', 'lighter and more agile than 911', 'sharp turn-in response'],
              watchOut: ['flat-four engine note lacks six-cylinder character', 'very small 150+125 L split front/rear boots', 'limited storage for daily use', 'options list dramatically increases price']
            },
            {
              id: 'porsche-718-cayman-982-gt4',
              name: '718 Cayman GT4',
              years: '2019–present',
              priceBand: '€100,000–€145,000 new',
              specs: {
                engine: '4.0 flat-six naturally aspirated',
                engineCode: '9A2-GT',
                displacementCc: 3996,
                cylinders: 'Flat-6',
                powerHp: 420,
                powerKw: 309,
                torqueNm: 420,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'RWD',
                acceleration0100: 4.4,
                topSpeedKmh: 304,
                consumptionL100: 12.5,
                co2Gkm: 285
              },
              dimensions: {
                lengthMm: 4379,
                widthMm: 1801,
                heightMm: 1281,
                wheelbaseMm: 2475,
                bootLitres: 275,
                weightKg: 1415,
                tankLitres: 64
              },
              options: safetyComfort(['Weissach package', 'carbon ceramic brakes', 'carbon bucket seats', 'front axle lift', 'Sport Chrono package']),
              knownFor: ['flat-six naturally aspirated music at 8000 rpm', 'the definitive driving purist\'s car', 'better handling balance than any 911', 'manual gearbox engagement sensation'],
              watchOut: ['extreme fuel consumption on track', 'very stiff ride for road use', 'dealer allocation tight globally', 'noisy cabin by design not suitable for touring']
            }
          ]
        }
      ]
    },
    {
      id: '718-boxster',
      name: '718 Boxster',
      segment: 'Sports Convertible / Mid-engine',
      description: 'The 718 Boxster is the open-top sibling to the Cayman, sharing its mid-engine platform. Arguably the finest convertible sports car for driver engagement, it offers the Cayman\'s celebrated handling balance with open-air motoring and a fabric hood that opens in 9 seconds.',
      tags: ['sports', 'convertible', 'mid-engine', 'open-top', 'flat-four', 'GTS'],
      generations: [
        {
          id: '718-boxster-982',
          name: '718 Boxster (982)',
          years: '2016–present',
          platform: 'Porsche 718 982 platform',
          bodyStyles: ['Convertible'],
          summary: 'The 982 Boxster mirrors the Cayman\'s powertrain switch to turbocharged flat-fours, with the GTS 4.0 bringing back the naturally aspirated 4.0-litre six for open-air driving. The fabric hood opens and closes electrically in 9 seconds at speeds up to 50 km/h.',
          heroImage: '718-boxster-982',
          variants: [
            {
              id: 'porsche-718-boxster-982-base',
              name: '718 Boxster',
              years: '2016–present',
              priceBand: '€50,000–€80,000 new',
              specs: {
                engine: '2.0 flat-four turbo',
                engineCode: 'MA254',
                displacementCc: 1988,
                cylinders: 'Flat-4',
                powerHp: 300,
                powerKw: 221,
                torqueNm: 380,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'RWD',
                acceleration0100: 5.1,
                topSpeedKmh: 275,
                consumptionL100: 8.5,
                co2Gkm: 193
              },
              dimensions: {
                lengthMm: 4379,
                widthMm: 1801,
                heightMm: 1281,
                wheelbaseMm: 2475,
                bootLitres: 280,
                weightKg: 1360,
                tankLitres: 54
              },
              options: safetyComfort(['PASM adaptive dampers', 'Sport Chrono package', 'Bose audio', 'leather interior package', 'heated seats']),
              knownFor: ['finest open-top sports car handling', 'mid-engine convertible balance unique in class', 'wind deflector enables comfortable roof-down driving', 'strong depreciation resistance used'],
              watchOut: ['flat-four lacks NA flat-six drama', 'limited cargo space with hood mechanism', 'expensive to service versus competitors', 'hood mechanism complex to repair']
            },
            {
              id: 'porsche-718-boxster-982-gts-40',
              name: '718 Boxster GTS 4.0',
              years: '2020–present',
              priceBand: '€90,000–€125,000 new',
              specs: {
                engine: '4.0 flat-six naturally aspirated',
                engineCode: '9A2-GTS',
                displacementCc: 3996,
                cylinders: 'Flat-6',
                powerHp: 400,
                powerKw: 294,
                torqueNm: 420,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'RWD',
                acceleration0100: 4.5,
                topSpeedKmh: 293,
                consumptionL100: 11.8,
                co2Gkm: 269
              },
              dimensions: {
                lengthMm: 4379,
                widthMm: 1801,
                heightMm: 1281,
                wheelbaseMm: 2475,
                bootLitres: 280,
                weightKg: 1415,
                tankLitres: 64
              },
              options: safetyComfort(['PASM Sport suspension', 'Sport Chrono package', 'carbon ceramic brakes', 'GTS sport seats', 'Bose surround audio']),
              knownFor: ['naturally aspirated 4.0 flat-six in a convertible', 'sound and engagement above Cayman S', 'GTS sport tuning and specification level', 'driving nirvana in open air'],
              watchOut: ['high CO2 means strong BIK penalties for company users', 'manual gearbox only increases engagement but reduces accessibility', 'very expensive to insure', 'hood adds weight versus Cayman GT4']
            }
          ]
        }
      ]
    },
    {
      id: 'cayenne',
      name: 'Cayenne',
      segment: 'Large Premium SUV',
      description: 'The Cayenne proved that Porsche could build a proper sports car and a proper SUV simultaneously. Now in its third generation on the MLB Evo platform, it combines genuine SUV capability with sports car dynamics, available with petrol, turbocharged, and plug-in hybrid powertrains.',
      tags: ['SUV', 'premium', 'luxury', 'performance-SUV', 'plug-in-hybrid', 'towing'],
      generations: [
        {
          id: 'cayenne-iii',
          name: 'Cayenne III (E3)',
          years: '2017–present',
          platform: 'Volkswagen Group MLB Evo',
          bodyStyles: ['SUV'],
          summary: 'The third-generation Cayenne switched to the MLB Evo platform shared with the Audi Q8 and Bentley Bentayga, bringing a more digital interior, improved dynamics, and a comprehensive plug-in hybrid powertrain option delivering 50 km of electric range.',
          heroImage: 'cayenne-iii',
          variants: [
            {
              id: 'porsche-cayenne-iii-s',
              name: 'Cayenne S',
              years: '2017–present',
              priceBand: '€85,000–€130,000 new',
              specs: {
                engine: '2.9 V6 biturbo',
                engineCode: 'DCB',
                displacementCc: 2894,
                cylinders: 'V6',
                powerHp: 440,
                powerKw: 324,
                torqueNm: 550,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.1,
                topSpeedKmh: 263,
                consumptionL100: 11.3,
                co2Gkm: 257
              },
              dimensions: {
                lengthMm: 4926,
                widthMm: 1983,
                heightMm: 1696,
                wheelbaseMm: 2895,
                bootLitres: 770,
                weightKg: 2030,
                tankLitres: 90
              },
              options: safetyComfort(['PASM air suspension', 'Sport Chrono package', 'Bose/Burmester audio', 'rear-axle steering', 'panoramic roof']),
              knownFor: ['remarkable handling for a large SUV', 'powerful V6 biturbo engine', 'premium interior quality', 'strong towing and off-road capability'],
              watchOut: ['heavy options list adds cost quickly', 'real-world fuel consumption higher than claimed', 'large size challenges city parking', 'depreciation steep when new']
            },
            {
              id: 'porsche-cayenne-iii-turbo',
              name: 'Cayenne Turbo',
              years: '2017–present',
              priceBand: '€130,000–€195,000 new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'DBC',
                displacementCc: 3996,
                cylinders: 'V8',
                powerHp: 550,
                powerKw: 404,
                torqueNm: 770,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.9,
                topSpeedKmh: 286,
                consumptionL100: 13.1,
                co2Gkm: 299
              },
              dimensions: {
                lengthMm: 4926,
                widthMm: 1983,
                heightMm: 1696,
                wheelbaseMm: 2895,
                bootLitres: 770,
                weightKg: 2195,
                tankLitres: 90
              },
              options: safetyComfort(['PDCC active roll stabilisation', 'PASM sport air suspension', 'Sport Chrono', 'carbon ceramic brakes', 'Burmester 3D audio']),
              knownFor: ['V8 twin-turbo soundtrack distinctive', 'fastest large SUV handling in class', 'sub-4.0 s acceleration from 2.2 t SUV', 'comprehensive Turbo equipment specification'],
              watchOut: ['very high running costs on V8', 'road tax band highest', 'premium fuel essential', 'air suspension repair costs significant']
            },
            {
              id: 'porsche-cayenne-iii-e-hybrid',
              name: 'Cayenne E-Hybrid',
              years: '2017–present',
              priceBand: '€90,000–€135,000 new',
              specs: {
                engine: '3.0 V6 + e-motor',
                engineCode: 'DCWA hybrid',
                displacementCc: 2995,
                cylinders: 'V6',
                powerHp: 462,
                powerKw: 340,
                torqueNm: 700,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.0,
                topSpeedKmh: 253,
                electricRangeKm: 42,
                consumptionL100: 3.4,
                co2Gkm: 77
              },
              dimensions: {
                lengthMm: 4926,
                widthMm: 1983,
                heightMm: 1696,
                wheelbaseMm: 2895,
                bootLitres: 645,
                weightKg: 2295,
                tankLitres: 90
              },
              options: safetyComfort(['PASM air suspension', 'Sport Chrono package', 'Bose audio', 'panoramic roof', 'rear-axle steering']),
              knownFor: ['low CO2 for premium tax benefits', 'silent EV running in urban areas', 'combined power for performance', 'Cayenne practicality with PHEV credentials'],
              watchOut: ['reduced boot versus petrol due to battery pack', 'real EV range shorter in cold weather', 'battery adds 300 kg over petrol Cayenne', 'DC fast charging not available on Cayenne PHEV']
            }
          ]
        }
      ]
    },
    {
      id: 'macan',
      name: 'Macan',
      segment: 'Compact Premium SUV',
      description: 'The Macan is Porsche\'s compact SUV and the brand\'s best-selling model. The second-generation switched entirely to electric powertrains on the PPE platform, co-developed with Audi, delivering up to 640 km WLTP range and 270 kW DC charging.',
      tags: ['compact-SUV', 'sporty', 'premium', 'electric', 'PPE', 'handling'],
      generations: [
        {
          id: 'macan-ii',
          name: 'Macan II (J1)',
          years: '2024–present',
          platform: 'Volkswagen Group PPE',
          bodyStyles: ['SUV'],
          summary: 'The second-generation Macan abandoned combustion engines entirely, launching exclusively as an EV on the Premium Platform Electric (PPE) architecture. It features a new curved display instrument cluster, 800V charging at 270 kW, and two motor configurations.',
          heroImage: 'macan-ii',
          variants: [
            {
              id: 'porsche-macan-ii-electric',
              name: 'Macan Electric',
              years: '2024–present',
              priceBand: '€65,000–€90,000 new',
              specs: {
                engine: 'single rear permanent-magnet motor',
                powerHp: 408,
                powerKw: 300,
                torqueNm: 520,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 5.7,
                topSpeedKmh: 220,
                electricRangeKm: 516
              },
              dimensions: {
                lengthMm: 4784,
                widthMm: 1938,
                heightMm: 1622,
                wheelbaseMm: 2893,
                bootLitres: 540,
                weightKg: 2180
              },
              options: evComfort(['InnoDrive adaptive cruise', 'Bose audio', 'panoramic roof', '800V charging compatibility', 'PASM adaptive suspension']),
              knownFor: ['800V architecture enables 270 kW DC charging', 'Porsche sports car dynamics in electric compact SUV', 'longer wheelbase vs Macan I improves space', 'class-leading handling for electric SUV'],
              watchOut: ['significantly more expensive than ICE Macan I used', 'no combustion option available in Macan II', 'heavy at 2.18 t vs predecessor', 'charging infrastructure for 800V still developing']
            },
            {
              id: 'porsche-macan-ii-s',
              name: 'Macan 4S',
              years: '2024–present',
              priceBand: '€80,000–€110,000 new',
              specs: {
                engine: 'dual permanent-magnet motors',
                powerHp: 516,
                powerKw: 379,
                torqueNm: 820,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 3.9,
                topSpeedKmh: 240,
                electricRangeKm: 516
              },
              dimensions: {
                lengthMm: 4784,
                widthMm: 1938,
                heightMm: 1622,
                wheelbaseMm: 2893,
                bootLitres: 540,
                weightKg: 2295
              },
              options: evComfort(['Sport Chrono package', 'PASM Sport suspension', 'carbon ceramic brakes', 'Burmester audio', 'head-up display', 'panoramic roof']),
              knownFor: ['sub-4.0 s in a compact SUV', 'AWD traction in all conditions', 'Porsche performance identity in EV', 'supercar acceleration in everyday packaging'],
              watchOut: ['very heavy AWD layout', 'high new price', 'range drops with AWD versus RWD', '800V charging points less common than CCS network']
            }
          ]
        }
      ]
    },
    {
      id: 'panamera',
      name: 'Panamera',
      segment: 'Executive Gran Turismo',
      description: 'The Panamera is Porsche\'s four-door sports saloon and executive Gran Turismo, combining the driving experience of a 911 with the practicality of a luxury sedan. The second generation on the MSB platform offers petrol, turbo, and PHEV powertrains.',
      tags: ['executive', 'gran-turismo', 'luxury', 'plug-in-hybrid', 'four-door', 'performance'],
      generations: [
        {
          id: 'panamera-ii',
          name: 'Panamera II (971)',
          years: '2016–present',
          platform: 'Volkswagen Group MSB',
          bodyStyles: ['Sedan'],
          summary: 'The second-generation Panamera on the MSB platform brought a dramatically more stylish body, a new interior with capacitive touch controls, and a wide range of powertrains including the 4 E-Hybrid with 50 km of electric range and the 700 hp Turbo S.',
          heroImage: 'panamera-ii',
          variants: [
            {
              id: 'porsche-panamera-4-e-hybrid',
              name: 'Panamera 4 E-Hybrid',
              years: '2017–present',
              priceBand: '€100,000–€155,000 new',
              specs: {
                engine: '2.9 V6 biturbo + e-motor',
                engineCode: 'DCB hybrid',
                displacementCc: 2894,
                cylinders: 'V6',
                powerHp: 462,
                powerKw: 340,
                torqueNm: 700,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 4.6,
                topSpeedKmh: 278,
                electricRangeKm: 50,
                consumptionL100: 2.5,
                co2Gkm: 56
              },
              dimensions: {
                lengthMm: 5049,
                widthMm: 1937,
                heightMm: 1423,
                wheelbaseMm: 2950,
                bootLitres: 495,
                weightKg: 2225,
                tankLitres: 80
              },
              options: safetyComfort(['PDCC air suspension', 'Sport Chrono package', 'Burmester audio', 'rear-axle steering', 'night vision assist', 'massaging seats']),
              knownFor: ['grand touring comfort and sports car pace combined', 'low CO2 for company car tax benefits', 'outstanding long-distance grand touring capability', 'practical 4-door Porsche concept'],
              watchOut: ['real-world EV range shorter in winter', 'very heavy at 2.2 tonnes', 'complex infotainment with many capacitive buttons', 'high cost of options']
            },
            {
              id: 'porsche-panamera-turbo-s',
              name: 'Panamera Turbo S',
              years: '2017–present',
              priceBand: '€185,000–€260,000 new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'DBC',
                displacementCc: 3996,
                cylinders: 'V8',
                powerHp: 630,
                powerKw: 463,
                torqueNm: 820,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.1,
                topSpeedKmh: 315,
                consumptionL100: 13.5,
                co2Gkm: 307
              },
              dimensions: {
                lengthMm: 5049,
                widthMm: 1937,
                heightMm: 1423,
                wheelbaseMm: 2950,
                bootLitres: 495,
                weightKg: 2275,
                tankLitres: 80
              },
              options: safetyComfort(['PDCC Sport active roll stabilisation', 'carbon ceramic brakes', 'Burmester 3D high-end audio', 'rear-axle steering', 'Sport Design package', 'rear seat entertainment']),
              knownFor: ['3.1 s 0–100 from an executive saloon', 'V8 sound through a luxury interior', 'remarkable range of GT competence', '630 hp in near-silent luxury'],
              watchOut: ['very high running costs', 'fuel consumption on V8 significant', 'premium insurance group', 'extremely heavy depreciation new']
            }
          ]
        }
      ]
    },
    {
      id: 'taycan',
      name: 'Taycan',
      segment: 'Electric Sports Sedan / Gran Turismo',
      description: 'The Taycan is Porsche\'s fully electric sports car and makes no compromises on driver engagement. Its 800V architecture enables ultra-fast 270 kW charging, while the two-speed rear gearbox and sophisticated chassis deliver genuine sports car dynamics with zero emissions.',
      tags: ['electric', 'sports', 'sedan', 'luxury', '800V', 'fast-charging', 'GT'],
      generations: [
        {
          id: 'taycan-gen1',
          name: 'Taycan (J1 platform)',
          years: '2019–present',
          platform: 'Porsche J1 (800V)',
          bodyStyles: ['Sedan'],
          summary: 'Built on the purpose-designed 800-volt J1 electric platform, the Taycan offers 270 kW DC fast charging, a two-speed transmission on the rear axle, and available all-wheel drive. The Cross Turismo wagon and Sport Turismo variants followed in 2021.',
          heroImage: 'taycan-gen1',
          variants: [
            {
              id: 'porsche-taycan-4s',
              name: 'Taycan 4S',
              years: '2020–present',
              priceBand: '€100,000–€140,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 571,
                powerKw: 420,
                torqueNm: 650,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.0,
                topSpeedKmh: 250,
                electricRangeKm: 464
              },
              dimensions: {
                lengthMm: 4963,
                widthMm: 1966,
                heightMm: 1381,
                wheelbaseMm: 2900,
                bootLitres: 366,
                weightKg: 2295
              },
              options: evComfort(['PDCC active roll stabilisation', 'Sport Chrono package', 'Burmester 3D audio', 'rear-axle steering', 'Performance Battery Plus']),
              knownFor: ['800V ultra-fast 270 kW DC charging', 'genuine sports car dynamics in an EV', 'exceptional build quality', 'two-speed rear gearbox unique in class'],
              watchOut: ['real-world range shorter than stated', 'very heavy despite EV packaging', 'limited boot space for the saloon size', '800V charging infrastructure still limited']
            },
            {
              id: 'porsche-taycan-turbo-s',
              name: 'Taycan Turbo S',
              years: '2020–present',
              priceBand: '€190,000–€260,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 761,
                powerKw: 560,
                torqueNm: 1050,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 2.8,
                topSpeedKmh: 260,
                electricRangeKm: 412
              },
              dimensions: {
                lengthMm: 4963,
                widthMm: 1966,
                heightMm: 1381,
                wheelbaseMm: 2900,
                bootLitres: 366,
                weightKg: 2370
              },
              options: evComfort(['PDCC Sport active chassis', 'carbon ceramic brakes', 'Burmester 3D surround audio', 'Turbo S Sport Design package', 'rear-axle steering', 'Sport Chrono']),
              knownFor: ['2.8 s 0–100 fastest production Taycan', '1050 Nm torque instantaneous delivery', 'electric hypercar performance with daily usability', 'Porsche sports car engineering benchmark for EVs'],
              watchOut: ['very high price for an EV saloon', 'range reduced to 412 km at Turbo S performance level', 'extremely heavy at 2.37 t', 'tyre wear on 20-inch rubber high under performance driving']
            }
          ]
        }
      ]
    }
  ]
};
