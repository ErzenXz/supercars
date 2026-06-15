import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const nissan: CarMake = {
  id: 'nissan',
  name: 'Nissan',
  country: 'Japan',
  logoText: 'N',
  models: [
    {
      id: 'qashqai',
      name: 'Qashqai',
      segment: 'Compact SUV',
      description: 'The Nissan Qashqai essentially created the compact SUV segment in Europe when it launched in 2007. The J11 cemented its popularity, and the J12 generation raised the game with an e-Power series-hybrid powertrain, sharper styling, and improved interior quality.',
      tags: ['SUV', 'family', 'hybrid', 'pioneer'],
      generations: [
        {
          id: 'qashqai-j11',
          name: 'J11 (Second Generation)',
          years: '2013–2021',
          platform: 'Nissan CMF-CD',
          bodyStyles: ['SUV'],
          summary: 'The J11 Qashqai consolidated its segment lead with a refined ride, a well-appointed cabin, and the choice of 1.3 DIG-T petrol and 1.5 dCi diesel. Later updates added ProPilot semi-autonomous driving assistance, making it one of the better-value ADAS packages in the class.',
          heroImage: 'nissan-qashqai-j11',
          variants: [
            {
              id: 'nissan-qashqai-j11-15dci',
              name: '1.5 dCi 115 PS',
              years: '2014–2021',
              priceBand: '€7,000–€18,000 used',
              specs: {
                engine: '1.5-litre turbodiesel four-cylinder',
                engineCode: 'K9K',
                displacementCc: 1461,
                cylinders: '4',
                powerHp: 115,
                powerKw: 85,
                torqueNm: 260,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.5,
                topSpeedKmh: 186,
                consumptionL100: 4.2,
                co2Gkm: 110
              },
              dimensions: {
                lengthMm: 4377,
                widthMm: 1806,
                heightMm: 1590,
                wheelbaseMm: 2646,
                bootLitres: 430,
                weightKg: 1365,
                tankLitres: 55
              },
              options: safetyComfort(['ProPilot highway assist', '360-degree around-view monitor']),
              knownFor: ['segment-defining practicality', 'class-leading fuel economy', 'smooth ride on poor surfaces', 'large for the class boot'],
              watchOut: ['K9K diesel timing chain wear on high-mileage examples', 'DPF issues if used in cities only', 'dated infotainment on pre-2017 cars', 'no AWD on diesel']
            },
            {
              id: 'nissan-qashqai-j11-13digt',
              name: '1.3 DIG-T 140 PS',
              years: '2019–2021',
              priceBand: '€10,000–€22,000 used',
              specs: {
                engine: '1.3-litre turbocharged four-cylinder petrol (Renault-Nissan HR13)',
                engineCode: 'HR13DDT',
                displacementCc: 1332,
                cylinders: '4',
                powerHp: 140,
                powerKw: 103,
                torqueNm: 240,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.9,
                topSpeedKmh: 198,
                consumptionL100: 6.1,
                co2Gkm: 139
              },
              dimensions: {
                lengthMm: 4377,
                widthMm: 1806,
                heightMm: 1590,
                wheelbaseMm: 2646,
                bootLitres: 430,
                weightKg: 1350,
                tankLitres: 55
              },
              options: safetyComfort(['ProPilot with Navi-link', 'wireless charging pad', 'heated front seats']),
              knownFor: ['modern refined petrol engine', 'light and responsive controls', 'ProPilot reduces motorway fatigue', 'good equipment value'],
              watchOut: ['turbo lag noticeable below 1,800 rpm', 'shared Renault engine — oil consumption worth monitoring', 'higher fuel costs vs diesel over long distances']
            }
          ]
        },
        {
          id: 'qashqai-j12',
          name: 'J12 (Third Generation)',
          years: '2021–present',
          platform: 'Nissan CMF-CD (evolved)',
          bodyStyles: ['SUV'],
          summary: 'The J12 Qashqai grew slightly and adopted Nissan\'s e-Power technology — a series-hybrid where a 1.5-litre three-cylinder engine acts purely as a generator, driving the front wheels through a single electric motor. The result is a smooth, quiet drive with near-EV refinement without needing to plug in.',
          heroImage: 'nissan-qashqai-j12',
          variants: [
            {
              id: 'nissan-qashqai-j12-epower',
              name: '1.5 e-Power 190 PS',
              years: '2021–present',
              priceBand: '€20,000–€38,000 used',
              specs: {
                engine: '1.5-litre three-cylinder generator + 150 kW electric motor (e-Power)',
                engineCode: 'KR15DDT',
                displacementCc: 1497,
                cylinders: '3',
                powerHp: 190,
                powerKw: 140,
                torqueNm: 330,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 7.9,
                topSpeedKmh: 170,
                consumptionL100: 5.5,
                co2Gkm: 126
              },
              dimensions: {
                lengthMm: 4425,
                widthMm: 1838,
                heightMm: 1625,
                wheelbaseMm: 2666,
                bootLitres: 504,
                weightKg: 1595,
                tankLitres: 55
              },
              options: safetyComfort(['ProPilot 2.0 with hands-off motorway', 'heads-up display', 'Bose premium sound']),
              knownFor: ['near-EV refinement without charging', 'smooth linear acceleration', 'good motorway fuel consumption', 'quiet and relaxing to drive'],
              watchOut: ['engine note intrusive under hard acceleration', 'no AWD on e-Power FWD (4WD separate)', 'heavy for its class', 'no plug-in capability']
            }
          ]
        }
      ]
    },
    {
      id: 'juke',
      name: 'Juke',
      segment: 'Subcompact SUV',
      description: 'The Nissan Juke pioneered the fun-sized urban SUV when it launched in 2010. The second-generation F16 arrived in 2019 with a more conventional but still quirky design, a larger boot, and a much more spacious interior, while retaining the playful character of the original.',
      tags: ['SUV', 'urban', 'youthful', 'design-led'],
      generations: [
        {
          id: 'juke-f16',
          name: 'F16 (Second Generation)',
          years: '2019–present',
          platform: 'Renault-Nissan CMF-B',
          bodyStyles: ['SUV'],
          summary: 'The F16 Juke grew up without losing its character. Built on the CMF-B platform shared with the Clio and Captur, it brought a more refined 1.0 DIG-T turbopetrol, a larger 422-litre boot, and a host of optional ADAS technology. Available in manual or dual-clutch automatic.',
          heroImage: 'nissan-juke-f16',
          variants: [
            {
              id: 'nissan-juke-f16-10digt-manual',
              name: '1.0 DIG-T 114 PS Manual',
              years: '2019–present',
              priceBand: '€12,000–€25,000 used',
              specs: {
                engine: '1.0-litre turbocharged three-cylinder petrol',
                engineCode: 'H4D-F4',
                displacementCc: 999,
                cylinders: '3',
                powerHp: 114,
                powerKw: 84,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.3,
                topSpeedKmh: 183,
                consumptionL100: 5.6,
                co2Gkm: 127
              },
              dimensions: {
                lengthMm: 4210,
                widthMm: 1800,
                heightMm: 1595,
                wheelbaseMm: 2636,
                bootLitres: 422,
                weightKg: 1245,
                tankLitres: 45
              },
              options: safetyComfort(['rear parking camera', 'traffic sign recognition', 'intelligent emergency braking']),
              knownFor: ['larger boot than F15 predecessor', 'playful handling for an SUV', 'frugal city motoring', 'colourful interior options'],
              watchOut: ['no AWD available on F16', 'tight rear legroom for tall adults', '1.0 turbo can feel breathless fully loaded', 'small fuel tank']
            },
            {
              id: 'nissan-juke-f16-10digt-dct',
              name: '1.0 DIG-T 114 PS DCT',
              years: '2019–present',
              priceBand: '€13,500–€27,000 used',
              specs: {
                engine: '1.0-litre turbocharged three-cylinder petrol',
                engineCode: 'H4D-F4',
                displacementCc: 999,
                cylinders: '3',
                powerHp: 114,
                powerKw: 84,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 10.9,
                topSpeedKmh: 180,
                consumptionL100: 5.8,
                co2Gkm: 132
              },
              dimensions: {
                lengthMm: 4210,
                widthMm: 1800,
                heightMm: 1595,
                wheelbaseMm: 2636,
                bootLitres: 422,
                weightKg: 1265,
                tankLitres: 45
              },
              options: safetyComfort(['ProPilot highway assist', 'wireless Apple CarPlay/Android Auto', 'Bose personal sound system']),
              knownFor: ['smooth automatic in city stop-start', 'generous standard kit on mid-trims', 'funky distinctive cabin design', 'class-competitive tech'],
              watchOut: ['DCT slower from standstill than expected', 'higher fuel use than manual', 'no sport mode depth to driving', 'cramped rear for adults']
            }
          ]
        }
      ]
    },
    {
      id: 'x-trail',
      name: 'X-Trail',
      segment: 'Midsize SUV',
      description: 'The Nissan X-Trail is a family-focused midsize SUV with optional seven-seat configuration. The T33 generation adopted the e-Power series-hybrid system from the Qashqai, offering quiet driving manners and decent efficiency. It was also one of the few seven-seat family SUVs with hybrid tech at its launch.',
      tags: ['SUV', 'seven-seat', 'hybrid', 'family'],
      generations: [
        {
          id: 'xtrail-t33',
          name: 'T33 (Fourth Generation)',
          years: '2022–present',
          platform: 'Nissan CMF-CD (Large)',
          bodyStyles: ['SUV'],
          summary: 'The T33 X-Trail brought e-Power to the midsize SUV class, with a front-wheel-drive 204 PS variant and a twin-motor 4WD version. Optional third row seating extends the audience. The interior adopted a cleaner, more upmarket layout with a portrait-format touchscreen.',
          heroImage: 'nissan-xtrail-t33',
          variants: [
            {
              id: 'nissan-xtrail-t33-epower-fwd',
              name: '1.5 e-Power 204 PS FWD',
              years: '2022–present',
              priceBand: '€26,000–€42,000 used',
              specs: {
                engine: '1.5-litre three-cylinder generator + electric motor (e-Power)',
                engineCode: 'KR15DDT',
                displacementCc: 1497,
                cylinders: '3',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 330,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.1,
                topSpeedKmh: 170,
                consumptionL100: 5.9,
                co2Gkm: 133
              },
              dimensions: {
                lengthMm: 4680,
                widthMm: 1840,
                heightMm: 1720,
                wheelbaseMm: 2705,
                bootLitres: 575,
                weightKg: 1815,
                tankLitres: 55
              },
              options: safetyComfort(['ProPilot 2.0 with Navi-link', 'head-up display', 'heated and ventilated front seats', 'optional 7-seat third row']),
              knownFor: ['EV-like refinement without plugging in', 'optional seven seats', 'large practical family boot', 'very quiet at motorway speeds'],
              watchOut: ['heavier than equivalent petrol SUV', 'third row tight for adults', 'no true off-road capability', 'engine audible under hard acceleration']
            }
          ]
        }
      ]
    },
    {
      id: 'leaf',
      name: 'Leaf',
      segment: 'Compact electric hatchback',
      description: 'The Nissan Leaf is one of the world\'s best-selling electric cars, having launched in 2010 as the first mass-market EV. The ZE1 second generation brought a more sophisticated design and the option of a 62 kWh battery. Despite CHAdeMO charging (rather than CCS) limiting European public charging compatibility, it remains a popular and affordable entry to electric motoring.',
      tags: ['electric', 'pioneer', 'affordable', 'hatchback'],
      generations: [
        {
          id: 'leaf-ze1',
          name: 'ZE1 (Second Generation)',
          years: '2017–present',
          platform: 'Nissan ZE1 EV platform',
          bodyStyles: ['Hatchback'],
          summary: 'The ZE1 Leaf added a 40 kWh or 62 kWh battery, boosting range significantly over the first generation. ProPilot semi-autonomous driving was a class first. CHAdeMO DC charging at up to 50 kW (40 kWh) or 100 kW (62 kWh e+) is the main compatibility caveat versus CCS-equipped rivals.',
          heroImage: 'nissan-leaf-ze1',
          variants: [
            {
              id: 'nissan-leaf-ze1-40kwh',
              name: '40 kWh 150 PS',
              years: '2017–present',
              priceBand: '€10,000–€22,000 used',
              specs: {
                engine: 'single front motor (EM57)',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 320,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 7.9,
                topSpeedKmh: 150,
                electricRangeKm: 270
              },
              dimensions: {
                lengthMm: 4490,
                widthMm: 1788,
                heightMm: 1540,
                wheelbaseMm: 2700,
                bootLitres: 435,
                weightKg: 1580
              },
              options: evComfort(['CHAdeMO DC rapid charging (50 kW)', 'ProPilot highway assist', 'e-Pedal one-pedal driving']),
              knownFor: ['affordable EV entry point', 'e-Pedal one-pedal driving', 'roomy five-door practicality', 'well-proven reliability record'],
              watchOut: ['CHAdeMO incompatible with most new EU public chargers', 'battery degradation on older examples', 'passive battery cooling limits fast-charge consistency', 'range modest for longer trips']
            },
            {
              id: 'nissan-leaf-ze1-62kwh',
              name: '62 kWh e+ 217 PS',
              years: '2019–present',
              priceBand: '€14,000–€28,000 used',
              specs: {
                engine: 'single front motor (EM57 high-output)',
                powerHp: 217,
                powerKw: 160,
                torqueNm: 340,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 6.5,
                topSpeedKmh: 157,
                electricRangeKm: 385
              },
              dimensions: {
                lengthMm: 4490,
                widthMm: 1788,
                heightMm: 1540,
                wheelbaseMm: 2700,
                bootLitres: 435,
                weightKg: 1710
              },
              options: evComfort(['CHAdeMO DC rapid charging (100 kW)', 'ProPilot with Navi-link', 'e-Pedal one-pedal driving', 'Bose sound system']),
              knownFor: ['385 km WLTP range usable day-to-day', 'strong performance for a hatchback EV', 'generous standard equipment', 'reliable drivetrain'],
              watchOut: ['CHAdeMO charger network shrinking in EU', 'no thermal battery management reduces peak charge rate over time', 'heavy for a hatchback', 'wider body limits some parking spots']
            }
          ]
        }
      ]
    }
  ]
};
