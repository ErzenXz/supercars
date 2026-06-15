import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const audi: CarMake = {
  id: 'audi',
  name: 'Audi',
  country: 'Germany',
  logoText: '◎◎◎◎',
  models: [
    {
      id: 'a1',
      name: 'A1',
      segment: 'Supermini',
      description: 'The Audi A1 is the brand\'s entry-level premium supermini. The second-generation GB model rides on the VW Group MQB-A0 platform and offers sophisticated styling, a high-quality interior, and efficient turbocharged petrol engines in a compact package.',
      tags: ['supermini', 'premium', 'compact', 'city', 'petrol', 'turbocharged'],
      generations: [
        {
          id: 'a1-gb',
          name: 'A1 GB (2nd gen)',
          years: '2018–present',
          platform: 'Volkswagen Group MQB-A0',
          bodyStyles: ['Hatchback'],
          summary: 'The GB-generation A1 ditched the three-door body and went five-door only. It grew in footprint versus the predecessor, bringing a larger Virtual Cockpit digital instrument cluster, a new 10.1-inch MMI touchscreen, and turbocharged three-cylinder petrol engines with S tronic dual-clutch options.',
          heroImage: 'a1-gb',
          variants: [
            {
              id: 'audi-a1-gb-25tfsi',
              name: 'A1 25 TFSI',
              years: '2018–present',
              priceBand: '€14,000–€22,000 used',
              specs: {
                engine: '1.0 TFSI three-cylinder turbo',
                engineCode: 'DKJA',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 95,
                powerKw: 70,
                torqueNm: 175,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 5,
                drive: 'FWD',
                acceleration0100: 10.9,
                topSpeedKmh: 183,
                consumptionL100: 4.9,
                co2Gkm: 111
              },
              dimensions: {
                lengthMm: 4029,
                widthMm: 1740,
                heightMm: 1416,
                wheelbaseMm: 2563,
                bootLitres: 335,
                weightKg: 1115,
                tankLitres: 40
              },
              options: safetyComfort(['front collision warning', 'rear parking sensors']),
              knownFor: ['premium interior quality for the segment', 'frugal three-cylinder engine', 'comfortable urban ride', 'Audi Virtual Cockpit standard on higher trims'],
              watchOut: ['underpowered on motorway inclines', 'small boot for city car', 'rear legroom limited', 'options expensive relative to base price']
            },
            {
              id: 'audi-a1-gb-30tfsi',
              name: 'A1 30 TFSI',
              years: '2018–present',
              priceBand: '€16,000–€26,000 used',
              specs: {
                engine: '1.0 TFSI three-cylinder turbo',
                engineCode: 'DKRF',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 116,
                powerKw: 85,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.0,
                topSpeedKmh: 197,
                consumptionL100: 5.1,
                co2Gkm: 116
              },
              dimensions: {
                lengthMm: 4029,
                widthMm: 1740,
                heightMm: 1416,
                wheelbaseMm: 2563,
                bootLitres: 335,
                weightKg: 1140,
                tankLitres: 40
              },
              options: safetyComfort(['adaptive cruise control', 'lane departure warning', 'parking sensors front and rear']),
              knownFor: ['punchy performance for a city car', 'slick S tronic dual-clutch gearbox', 'refined highway cruiser', 'strong resale values'],
              watchOut: ['three-cylinder can feel unrefined at low revs', 'S tronic not ideal for slow traffic creep', 'limited practicality vs B-segment rivals', 'premium pricing']
            }
          ]
        }
      ]
    },
    {
      id: 'a3',
      name: 'A3',
      segment: 'Compact Premium',
      description: 'The Audi A3 is the brand\'s best-selling compact car, offering a premium interior, advanced driver assistance technology, and a wide powertrain range including a plug-in hybrid and the hot hatch S3. The 8Y generation brings MMI touch response, digital matrix LED lighting, and class-leading interior quality.',
      tags: ['compact', 'premium', 'hatchback', 'sedan', 'PHEV', 'quattro'],
      generations: [
        {
          id: 'a3-8y',
          name: 'A3 8Y (4th gen)',
          years: '2020–present',
          platform: 'Volkswagen Group MQB Evo',
          bodyStyles: ['Hatchback', 'Sedan'],
          summary: 'The 8Y A3 is the most technologically advanced compact Audi ever: MMI touch response with haptic feedback, optional OLED rear lighting, digital matrix LED headlights, and a 10.1-inch infotainment system. The powertrain range spans efficient turbocharged petrol and diesel units to the 40 TFSIe PHEV and the 310 hp S3.',
          heroImage: 'a3-8y',
          variants: [
            {
              id: 'audi-a3-8y-30tfsi',
              name: 'A3 30 TFSI',
              years: '2020–present',
              priceBand: '€18,000–€28,000 used',
              specs: {
                engine: '1.0 TFSI three-cylinder turbo',
                engineCode: 'DLAA',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 110,
                powerKw: 81,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.9,
                topSpeedKmh: 196,
                consumptionL100: 5.2,
                co2Gkm: 119
              },
              dimensions: {
                lengthMm: 4343,
                widthMm: 1816,
                heightMm: 1428,
                wheelbaseMm: 2636,
                bootLitres: 380,
                weightKg: 1265,
                tankLitres: 50
              },
              options: safetyComfort(['adaptive cruise control', 'rear view camera']),
              knownFor: ['best-in-class interior quality', 'crisp 10.1-inch MMI touchscreen', 'efficient turbocharged engine', 'refined motorway cruiser'],
              watchOut: ['entry engine can feel strained on A-roads', 'capacitive touch controls distracting to use', 'boot smaller than class average', 'service costs above rivals']
            },
            {
              id: 'audi-a3-8y-35tdi',
              name: 'A3 35 TDI',
              years: '2020–present',
              priceBand: '€20,000–€32,000 used',
              specs: {
                engine: '2.0 TDI four-cylinder turbo',
                engineCode: 'DFCA',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 360,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.4,
                topSpeedKmh: 222,
                consumptionL100: 4.3,
                co2Gkm: 113
              },
              dimensions: {
                lengthMm: 4343,
                widthMm: 1816,
                heightMm: 1428,
                wheelbaseMm: 2636,
                bootLitres: 380,
                weightKg: 1365,
                tankLitres: 50
              },
              options: safetyComfort(['lane keeping assist', 'traffic sign recognition', 'matrix LED headlights']),
              knownFor: ['strong torque for relaxed driving', 'excellent real-world fuel economy', 'well-suited for long distance commuting', 'diesel smooth at highway speeds'],
              watchOut: ['higher purchase price than petrol equivalent', 'DPF issues if driven mostly short trips', 'diesel demand falling with charging infrastructure growth', 'not ideal for city-only use']
            },
            {
              id: 'audi-a3-8y-40tfsie',
              name: 'A3 40 TFSIe PHEV',
              years: '2021–present',
              priceBand: '€26,000–€38,000 used',
              specs: {
                engine: '1.4 TFSI + e-motor PHEV',
                engineCode: 'DGEA hybrid',
                displacementCc: 1395,
                cylinders: 'Inline-4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 350,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 7.6,
                topSpeedKmh: 227,
                consumptionL100: 1.4,
                electricRangeKm: 70,
                co2Gkm: 32
              },
              dimensions: {
                lengthMm: 4343,
                widthMm: 1816,
                heightMm: 1441,
                wheelbaseMm: 2636,
                bootLitres: 280,
                weightKg: 1610,
                tankLitres: 40
              },
              options: safetyComfort(['heated front seats', 'rear parking camera', 'e-route planner', 'matrix LED headlights']),
              knownFor: ['low company car BIK rates in UK and EU', 'up to 70 km EV-only range for commuters', 'combined performance when needed', 'smooth PHEV transition logic'],
              watchOut: ['reduced boot space due to battery', 'heavier than standard A3', 'electric range degrades in cold weather', 'requires charging to deliver claimed economy']
            },
            {
              id: 'audi-a3-8y-s3',
              name: 'A3 S3',
              years: '2020–present',
              priceBand: '€36,000–€50,000 used',
              specs: {
                engine: '2.0 TFSI four-cylinder turbo',
                engineCode: 'DNUE',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 310,
                powerKw: 228,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 4.8,
                topSpeedKmh: 250,
                consumptionL100: 7.5,
                co2Gkm: 170
              },
              dimensions: {
                lengthMm: 4343,
                widthMm: 1816,
                heightMm: 1421,
                wheelbaseMm: 2636,
                bootLitres: 380,
                weightKg: 1480,
                tankLitres: 50
              },
              options: safetyComfort(['magnetic ride adaptive dampers', 'Bose premium sound', 'sport differential', 'matrix LED headlights']),
              knownFor: ['potent 310 hp all-wheel-drive performance', 'quattro traction in all conditions', 'understated hot hatch styling', 'exceptional everyday usability'],
              watchOut: ['firm ride on 19-inch wheels', 'less characterful than Golf R rival', 'consumptionL100 rises sharply when pressed', 'limited steering feel']
            }
          ]
        }
      ]
    },
    {
      id: 'a4',
      name: 'A4',
      segment: 'Compact Executive',
      description: 'The Audi A4 is the quintessential compact executive saloon and Avant estate, competing in the heart of the premium D-segment. The B9 generation brought Virtual Cockpit, a driver-focused interior, and quattro all-wheel drive on performance variants. The Avant wagon is a perennial favourite for its blend of practicality and premium feel.',
      tags: ['executive', 'sedan', 'wagon', 'avant', 'quattro', 'diesel', 'premium'],
      generations: [
        {
          id: 'a4-b9',
          name: 'A4 B9 (5th gen)',
          years: '2015–2023',
          platform: 'Volkswagen Group MLB Evo',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'The B9 A4 introduced the MLB Evo platform, shedding up to 120 kg versus its predecessor via extensive aluminium usage. It debuted Audi\'s Virtual Cockpit 12.3-inch digital instrument cluster, MMI Navigation plus, and a thoroughly revised powertrain range. The 2019 facelift brought mild-hybrid 48V MHEV technology and updated headlight designs.',
          heroImage: 'a4-b9',
          variants: [
            {
              id: 'audi-a4-b9-35tfsi',
              name: 'A4 35 TFSI',
              years: '2015–2023',
              priceBand: '€15,000–€32,000 used',
              specs: {
                engine: '2.0 TFSI four-cylinder turbo',
                engineCode: 'CYRD',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 270,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.8,
                topSpeedKmh: 221,
                consumptionL100: 6.3,
                co2Gkm: 143
              },
              dimensions: {
                lengthMm: 4762,
                widthMm: 1842,
                heightMm: 1427,
                wheelbaseMm: 2820,
                bootLitres: 480,
                weightKg: 1370,
                tankLitres: 54
              },
              options: safetyComfort(['adaptive cruise control', 'rear view camera', 'heated seats', 'virtual cockpit']),
              knownFor: ['roomy and comfortable cabin', 'highly practical Avant estate option', 'smooth S tronic dual-clutch', 'strong residual values'],
              watchOut: ['base engine feels lethargic fully laden', 'infotainment aging in later facelift', 'road noise on large wheels', 'tight depreciation new but not used']
            },
            {
              id: 'audi-a4-b9-35tdi',
              name: 'A4 35 TDI',
              years: '2015–2023',
              priceBand: '€14,000–€30,000 used',
              specs: {
                engine: '2.0 TDI four-cylinder turbo',
                engineCode: 'DFHA',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 163,
                powerKw: 120,
                torqueNm: 380,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.3,
                topSpeedKmh: 225,
                consumptionL100: 4.5,
                co2Gkm: 118
              },
              dimensions: {
                lengthMm: 4762,
                widthMm: 1842,
                heightMm: 1427,
                wheelbaseMm: 2820,
                bootLitres: 480,
                weightKg: 1435,
                tankLitres: 54
              },
              options: safetyComfort(['lane assist', 'blind spot monitoring', 'virtual cockpit', 'parking plus']),
              knownFor: ['excellent long-distance fuel economy', 'muscular torque for overtaking', 'ideal long-haul fleet car', 'refined diesel smoothness'],
              watchOut: ['diesel emissions scrutiny in some EU cities', 'DPF regeneration needed on short trips', 'not ideal if charging infrastructure good', 'older pre-facelift lacks 48V MHEV']
            },
            {
              id: 'audi-a4-b9-40tdi-quattro',
              name: 'A4 40 TDI quattro',
              years: '2016–2023',
              priceBand: '€18,000–€38,000 used',
              specs: {
                engine: '2.0 TDI four-cylinder turbo',
                engineCode: 'DETA',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 190,
                powerKw: 140,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 7.3,
                topSpeedKmh: 240,
                consumptionL100: 5.0,
                co2Gkm: 131
              },
              dimensions: {
                lengthMm: 4762,
                widthMm: 1842,
                heightMm: 1427,
                wheelbaseMm: 2820,
                bootLitres: 480,
                weightKg: 1560,
                tankLitres: 54
              },
              options: safetyComfort(['quattro sport differential', 'adaptive air suspension', 'matrix LED headlights', 'Bang & Olufsen audio']),
              knownFor: ['quattro all-weather traction on slippery roads', 'strong diesel performance with economy', 'outstanding Avant cargo capacity', 'composed long-distance motorway car'],
              watchOut: ['quattro adds weight and complexity', 'real-world consumption higher than stated', 'DPF and adblue maintenance ongoing', 'tyre wear on quattro above average']
            },
            {
              id: 'audi-a4-b9-s4',
              name: 'A4 S4',
              years: '2016–2023',
              priceBand: '€30,000–€55,000 used',
              specs: {
                engine: '3.0 V6 TFSI turbo',
                engineCode: 'DAUA',
                displacementCc: 2995,
                cylinders: 'V6',
                powerHp: 354,
                powerKw: 260,
                torqueNm: 500,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 4.7,
                topSpeedKmh: 250,
                consumptionL100: 8.7,
                co2Gkm: 199
              },
              dimensions: {
                lengthMm: 4762,
                widthMm: 1842,
                heightMm: 1413,
                wheelbaseMm: 2820,
                bootLitres: 480,
                weightKg: 1700,
                tankLitres: 54
              },
              options: safetyComfort(['sport differential', 'adaptive damper control', 'carbon ceramic brakes', 'Bang & Olufsen 3D audio']),
              knownFor: ['effortless V6 turbo performance', 'subtle everyday practicality of a super-estate', 'quattro permanent all-wheel drive', 'sports seats comfort on long journeys'],
              watchOut: ['high fuel consumption at performance driving', 'torque converter auto less engaging than DCT', 'heavy vehicle weight', 'expensive options inflate final price']
            }
          ]
        }
      ]
    },
    {
      id: 'a5',
      name: 'A5',
      segment: 'Compact Executive Coupe / Sportback',
      description: 'The Audi A5 provides the stylish coupe and five-door Sportback alternatives to the A4 saloon. Sharing the MLB Evo platform, it adds sporting aesthetics with a sloped roofline while maintaining genuine practicality. The A5 Sportback is particularly popular as a stylish compact executive car with good usability.',
      tags: ['coupe', 'sportback', 'premium', 'executive', 'stylish', 'diesel'],
      generations: [
        {
          id: 'a5-f5',
          name: 'A5 F5 (2nd gen)',
          years: '2016–present',
          platform: 'Volkswagen Group MLB Evo',
          bodyStyles: ['Coupe', 'Sedan'],
          summary: 'The F5 second-generation A5 brought a more organic exterior design, Virtual Cockpit digital instruments, and a significantly lighter body through aluminium-intensive construction. Available as a two-door Coupe and five-door Sportback, it shares its engine range with the B9 A4 but is tuned for a sportier character.',
          heroImage: 'a5-f5',
          variants: [
            {
              id: 'audi-a5-f5-40tfsi',
              name: 'A5 40 TFSI Sportback',
              years: '2016–present',
              priceBand: '€20,000–€38,000 used',
              specs: {
                engine: '2.0 TFSI four-cylinder turbo',
                engineCode: 'CYRD',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 190,
                powerKw: 140,
                torqueNm: 320,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 7.4,
                topSpeedKmh: 237,
                consumptionL100: 6.8,
                co2Gkm: 154
              },
              dimensions: {
                lengthMm: 4726,
                widthMm: 1843,
                heightMm: 1392,
                wheelbaseMm: 2820,
                bootLitres: 465,
                weightKg: 1490,
                tankLitres: 54
              },
              options: safetyComfort(['adaptive cruise control', 'matrix LED headlights', 'heated sport seats', 'virtual cockpit plus']),
              knownFor: ['sleek Sportback styling with usable rear seats', 'smooth TFSI petrol response', 'premium cabin feel', 'strong residual values'],
              watchOut: ['roof slope reduces rear headroom', 'smaller boot than A4 Avant', 'front-wheel drive limits wet weather traction vs quattro', 'feels similar to A4 underneath']
            },
            {
              id: 'audi-a5-f5-45tdi',
              name: 'A5 45 TDI quattro',
              years: '2018–present',
              priceBand: '€24,000–€44,000 used',
              specs: {
                engine: '3.0 TDI V6 turbo',
                engineCode: 'CVMD',
                displacementCc: 2967,
                cylinders: 'V6',
                powerHp: 231,
                powerKw: 170,
                torqueNm: 500,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 6.3,
                topSpeedKmh: 249,
                consumptionL100: 5.7,
                co2Gkm: 149
              },
              dimensions: {
                lengthMm: 4726,
                widthMm: 1843,
                heightMm: 1386,
                wheelbaseMm: 2820,
                bootLitres: 465,
                weightKg: 1680,
                tankLitres: 54
              },
              options: safetyComfort(['sport differential', 'adaptive air suspension', 'Bang & Olufsen audio', 'matrix LED headlights']),
              knownFor: ['effortless V6 diesel torque', 'quattro confidence in winter conditions', 'smooth 8-speed tiptronic', 'refined high-speed cruiser'],
              watchOut: ['V6 diesel heavier on tax in some EU countries', 'adblue maintenance adds ongoing cost', 'large engine less relevant for city use', 'complex drivetrain service costs']
            }
          ]
        }
      ]
    },
    {
      id: 'a6',
      name: 'A6',
      segment: 'Executive',
      description: 'The Audi A6 is a full-size executive car competing against the BMW 5 Series and Mercedes E-Class. The C8 generation is the most technically advanced A6 ever, featuring 48V mild-hybrid technology across the range, a twin-screen MMI interior with haptic feedback, and a comprehensive plug-in hybrid variant.',
      tags: ['executive', 'sedan', 'wagon', 'avant', '48V', 'PHEV', 'luxury', 'business'],
      generations: [
        {
          id: 'a6-c8',
          name: 'A6 C8 (5th gen)',
          years: '2018–present',
          platform: 'Volkswagen Group MLB Evo',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'The C8 A6 brings a completely new interior with two large curved touchscreens, standard 48V MHEV mild-hybrid technology on all engines, optional predictive efficiency assistant, and the comprehensive quattro ultra AWD system. The Avant estate is a design highlight with a near-seamless roof and generous 565-litre boot.',
          heroImage: 'a6-c8',
          variants: [
            {
              id: 'audi-a6-c8-40tdi',
              name: 'A6 40 TDI',
              years: '2018–present',
              priceBand: '€25,000–€48,000 used',
              specs: {
                engine: '2.0 TDI four-cylinder turbo 48V MHEV',
                engineCode: 'DFAS',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 7.9,
                topSpeedKmh: 243,
                consumptionL100: 4.9,
                co2Gkm: 128
              },
              dimensions: {
                lengthMm: 4939,
                widthMm: 1886,
                heightMm: 1457,
                wheelbaseMm: 2924,
                bootLitres: 530,
                weightKg: 1670,
                tankLitres: 73
              },
              options: safetyComfort(['adaptive cruise assist', 'night vision', 'rear view camera', 'massaging seats']),
              knownFor: ['impressive executive interior quality', 'long range between fills on diesel', '48V MHEV coasting function saves fuel', 'roomy rear passenger space'],
              watchOut: ['touchscreen controls take getting used to', 'base diesel can feel strained fully laden', 'parking sensors and cameras often factory options', 'fuel costs above smaller rivals']
            },
            {
              id: 'audi-a6-c8-45tfsi',
              name: 'A6 45 TFSI',
              years: '2018–present',
              priceBand: '€28,000–€52,000 used',
              specs: {
                engine: '2.0 TFSI four-cylinder turbo 48V MHEV',
                engineCode: 'DKTB',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 245,
                powerKw: 180,
                torqueNm: 370,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 6.6,
                topSpeedKmh: 250,
                consumptionL100: 7.4,
                co2Gkm: 168
              },
              dimensions: {
                lengthMm: 4939,
                widthMm: 1886,
                heightMm: 1457,
                wheelbaseMm: 2924,
                bootLitres: 530,
                weightKg: 1645,
                tankLitres: 73
              },
              options: safetyComfort(['lane change warning', 'matrix LED headlights', 'Bose audio', 'panoramic sunroof']),
              knownFor: ['refined petrol alternative for lower mileage users', 'smooth 7-speed S tronic', 'elegant exterior design', 'class-leading digital interior'],
              watchOut: ['petrol consumption higher than diesel for high mileage', 'FWD limits traction in severe winter weather', 'slightly firm ride on 19-inch wheels', 'complex twin-screen MMI takes time to learn']
            },
            {
              id: 'audi-a6-c8-55tfsie',
              name: 'A6 55 TFSIe PHEV',
              years: '2020–present',
              priceBand: '€38,000–€62,000 used',
              specs: {
                engine: '2.0 TFSI + e-motor PHEV',
                engineCode: 'DKNA hybrid',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 367,
                powerKw: 270,
                torqueNm: 500,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 5.7,
                topSpeedKmh: 250,
                consumptionL100: 2.1,
                electricRangeKm: 62,
                co2Gkm: 47
              },
              dimensions: {
                lengthMm: 4939,
                widthMm: 1886,
                heightMm: 1457,
                wheelbaseMm: 2924,
                bootLitres: 405,
                weightKg: 1930,
                tankLitres: 54
              },
              options: safetyComfort(['massaging seats', 'predictive efficiency assistant', 'e-route planner', 'panoramic roof']),
              knownFor: ['low BIK emissions for company car users', 'EV commuting combined with long-range touring', 'powerful combined system output', 'prestige cabin meets eco credentials'],
              watchOut: ['battery reduces boot significantly', 'heavy at nearly 1.9 tonnes', 'electric range degrades in winter', 'charging infrastructure still required to realise economy claims']
            }
          ]
        }
      ]
    },
    {
      id: 'a7',
      name: 'A7',
      segment: 'Executive Sportback',
      description: 'The Audi A7 Sportback is a four-door gran turismo coupé that blends striking fastback styling with executive car practicality. The second-generation C8 A7 shares its platform with the A6 but adds a more muscular presence, a power bootlid, and a wider powertrain range including powerful V6 diesel and petrol options.',
      tags: ['gran-turismo', 'sportback', 'executive', 'luxury', 'V6', 'diesel'],
      generations: [
        {
          id: 'a7-c8',
          name: 'A7 C8 Sportback (2nd gen)',
          years: '2018–present',
          platform: 'Volkswagen Group MLB Evo',
          bodyStyles: ['Sedan'],
          summary: 'The C8 A7 brings Audi\'s signature twin-touchscreen MMI interface, 48V mild-hybrid technology, matrix LED headlights with OLED rear lights, and a wide powertrain range. The fastback body with electric bootlid and pass-through rear seats makes it more practical than its sleek silhouette suggests.',
          heroImage: 'a7-c8',
          variants: [
            {
              id: 'audi-a7-c8-50tdi',
              name: 'A7 50 TDI quattro',
              years: '2018–present',
              priceBand: '€38,000–€65,000 used',
              specs: {
                engine: '3.0 TDI V6 turbo 48V MHEV',
                engineCode: 'CSWB',
                displacementCc: 2967,
                cylinders: 'V6',
                powerHp: 286,
                powerKw: 210,
                torqueNm: 620,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.7,
                topSpeedKmh: 250,
                consumptionL100: 6.1,
                co2Gkm: 160
              },
              dimensions: {
                lengthMm: 4969,
                widthMm: 1908,
                heightMm: 1422,
                wheelbaseMm: 2926,
                bootLitres: 535,
                weightKg: 1935,
                tankLitres: 73
              },
              options: safetyComfort(['night vision', 'adaptive air suspension', 'Bang & Olufsen 3D audio', 'rear axle steering', 'massaging seats']),
              knownFor: ['stunning fastback silhouette', 'effortless V6 diesel torque', 'luxurious interior rival to S-Class', 'practical pass-through rear seats'],
              watchOut: ['heavy at nearly 2 tonnes', 'V6 diesel maintenance costs', 'touchscreen-heavy interior distracting', 'real-world consumption higher than claimed']
            },
            {
              id: 'audi-a7-c8-55tfsi',
              name: 'A7 55 TFSI quattro',
              years: '2018–present',
              priceBand: '€42,000–€72,000 used',
              specs: {
                engine: '3.0 V6 TFSI turbo 48V MHEV',
                engineCode: 'DKTB',
                displacementCc: 2995,
                cylinders: 'V6',
                powerHp: 340,
                powerKw: 250,
                torqueNm: 500,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.1,
                topSpeedKmh: 250,
                consumptionL100: 8.8,
                co2Gkm: 200
              },
              dimensions: {
                lengthMm: 4969,
                widthMm: 1908,
                heightMm: 1422,
                wheelbaseMm: 2926,
                bootLitres: 535,
                weightKg: 1960,
                tankLitres: 73
              },
              options: safetyComfort(['rear axle steering', 'adaptive air suspension', 'night vision', 'head-up display', 'Bose sound system']),
              knownFor: ['smooth V6 petrol character at motorway speeds', 'four-door coupe versatility', 'strong gran turismo presence', 'quattro all-season confidence'],
              watchOut: ['high fuel consumption under spirited driving', 'depreciation faster than A6', 'premium options push price to near-S8 territory', 'heavier than similarly powered rivals']
            }
          ]
        }
      ]
    },
    {
      id: 'a8',
      name: 'A8',
      segment: 'Full-size Luxury',
      description: 'The Audi A8 is the flagship luxury limousine with an all-aluminium space-frame body, predictive active suspension, and an available rear-seat relaxation package. The D5 generation introduced Level 2+ autonomous features and sets the technical benchmark alongside the Mercedes S-Class and BMW 7 Series.',
      tags: ['flagship', 'luxury', 'limousine', 'aluminium', 'PHEV', 'autonomous', 'business'],
      generations: [
        {
          id: 'a8-d5',
          name: 'A8 D5 (4th gen)',
          years: '2017–present',
          platform: 'Volkswagen Group MLB Evo (aluminium-intensive)',
          bodyStyles: ['Sedan'],
          summary: 'The D5 A8 uses an all-aluminium space-frame construction, a 48V predictive active suspension system, and an extensive array of driver assistance systems. It debuted with the world\'s first Level 3 autonomous driving system (pending regulatory approval) and offers an outstanding rear-passenger experience with the optional relaxation package.',
          heroImage: 'a8-d5',
          variants: [
            {
              id: 'audi-a8-d5-50tdi',
              name: 'A8 50 TDI quattro',
              years: '2017–present',
              priceBand: '€45,000–€85,000 used',
              specs: {
                engine: '3.0 TDI V6 turbo 48V MHEV',
                engineCode: 'CZAC',
                displacementCc: 2967,
                cylinders: 'V6',
                powerHp: 286,
                powerKw: 210,
                torqueNm: 600,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.9,
                topSpeedKmh: 250,
                consumptionL100: 6.3,
                co2Gkm: 165
              },
              dimensions: {
                lengthMm: 5172,
                widthMm: 1945,
                heightMm: 1488,
                wheelbaseMm: 3128,
                bootLitres: 505,
                weightKg: 2045,
                tankLitres: 73
              },
              options: safetyComfort(['predictive active suspension', 'night vision', 'massaging rear seats', 'Bang & Olufsen 3D audio', 'rear-axle steering']),
              knownFor: ['supreme ride comfort from predictive suspension', 'lavish interior detail and materials', 'strong diesel range between fills', 'commanding road presence'],
              watchOut: ['very heavy vehicle', 'high complexity means elevated maintenance bills', 'tech-heavy interior can overwhelm', 'depreciation steep from new price']
            },
            {
              id: 'audi-a8-d5-60tfsie',
              name: 'A8 60 TFSIe PHEV',
              years: '2019–present',
              priceBand: '€58,000–€100,000 used',
              specs: {
                engine: '3.0 V6 TFSI turbo + e-motor PHEV',
                engineCode: 'CSJL hybrid',
                displacementCc: 2995,
                cylinders: 'V6',
                powerHp: 449,
                powerKw: 330,
                torqueNm: 700,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 250,
                consumptionL100: 2.7,
                electricRangeKm: 46,
                co2Gkm: 61
              },
              dimensions: {
                lengthMm: 5172,
                widthMm: 1945,
                heightMm: 1488,
                wheelbaseMm: 3128,
                bootLitres: 405,
                weightKg: 2355,
                tankLitres: 60
              },
              options: safetyComfort(['relaxation rear seat package', 'predictive active suspension', 'massaging front and rear', 'OLED rear lighting', 'night vision plus']),
              knownFor: ['performance limousine performance metrics', 'low CO2 for executive tax purposes', 'PHEV electric city commuting', 'unmatched interior luxury'],
              watchOut: ['very heavy at over 2.3 tonnes', 'reduced boot due to PHEV battery', 'real EV range shorter in cold climates', 'maintenance costs at very high level']
            }
          ]
        }
      ]
    },
    {
      id: 'q2',
      name: 'Q2',
      segment: 'Subcompact Premium SUV',
      description: 'The Audi Q2 is the brand\'s smallest crossover SUV, offering distinctive styling with contrast-colour C-pillar treatment and a high-quality interior in a compact package. It sits below the Q3 and appeals to urban buyers seeking premium brand values in a manoeuvrable, efficient compact SUV.',
      tags: ['compact-SUV', 'urban', 'premium', 'crossover', 'petrol', 'diesel'],
      generations: [
        {
          id: 'q2-ga',
          name: 'Q2 GA (1st gen)',
          years: '2016–present',
          platform: 'Volkswagen Group MQB A1',
          bodyStyles: ['SUV'],
          summary: 'The first-generation Q2 introduced Audi\'s contrasting blade C-pillar design element, a floating island MMI screen, and Virtual Cockpit optional instrumentation to the subcompact SUV segment. The 2020 facelift brought an updated MMI with natural voice control and standard virtual cockpit.',
          heroImage: 'q2-ga',
          variants: [
            {
              id: 'audi-q2-ga-30tfsi',
              name: 'Q2 30 TFSI',
              years: '2016–present',
              priceBand: '€14,000–€26,000 used',
              specs: {
                engine: '1.0 TFSI three-cylinder turbo',
                engineCode: 'CHZB',
                displacementCc: 999,
                cylinders: 'Inline-3',
                powerHp: 116,
                powerKw: 85,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.5,
                topSpeedKmh: 195,
                consumptionL100: 4.9,
                co2Gkm: 112
              },
              dimensions: {
                lengthMm: 4191,
                widthMm: 1794,
                heightMm: 1508,
                wheelbaseMm: 2601,
                bootLitres: 405,
                weightKg: 1190,
                tankLitres: 45
              },
              options: safetyComfort(['rear parking sensors', 'rear view camera', 'contrast C-pillar colour']),
              knownFor: ['distinctive contrasting C-pillar styling', 'practical for the size', 'Audi build quality in urban package', 'efficient three-cylinder engine'],
              watchOut: ['three-cylinder not the most refined', 'infotainment showing age on early cars', 'boot narrower than figures suggest', 'premium pricing versus mainstream rivals']
            },
            {
              id: 'audi-q2-ga-35tdi',
              name: 'Q2 35 TDI',
              years: '2016–present',
              priceBand: '€16,000–€30,000 used',
              specs: {
                engine: '2.0 TDI four-cylinder turbo',
                engineCode: 'CUNA',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 340,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 8.3,
                topSpeedKmh: 210,
                consumptionL100: 4.2,
                co2Gkm: 111
              },
              dimensions: {
                lengthMm: 4191,
                widthMm: 1794,
                heightMm: 1508,
                wheelbaseMm: 2601,
                bootLitres: 405,
                weightKg: 1340,
                tankLitres: 45
              },
              options: safetyComfort(['adaptive cruise control', 'virtual cockpit', 'parking system plus']),
              knownFor: ['excellent fuel economy for the class', 'nippy diesel performance in urban use', 'smooth S tronic dual-clutch', 'practical small SUV'],
              watchOut: ['diesel noise at idle versus petrol', 'DPF issues if short journey only', 'higher upfront cost over petrol', 'small interior versus class']
            }
          ]
        }
      ]
    },
    {
      id: 'q3',
      name: 'Q3',
      segment: 'Compact Premium SUV',
      description: 'The Audi Q3 is the brand\'s compact premium crossover, upgraded to the MQB platform in its F3 second generation with significant improvements in interior quality, technology, and practicality. The Sportback body style adds a sloped coupe-style roofline alongside the standard model.',
      tags: ['compact-SUV', 'crossover', 'premium', 'MQB', 'PHEV', 'family'],
      generations: [
        {
          id: 'q3-f3',
          name: 'Q3 F3 (2nd gen)',
          years: '2018–present',
          platform: 'Volkswagen Group MQB',
          bodyStyles: ['SUV'],
          summary: 'The F3 second-generation Q3 moved to the more advanced MQB platform, bringing a dramatically improved interior inspired by the A7 with large floating MMI screen, Virtual Cockpit instruments, and significantly more rear passenger and boot space. The TFSIe PHEV joined the range in 2020.',
          heroImage: 'q3-f3',
          variants: [
            {
              id: 'audi-q3-f3-35tfsi',
              name: 'Q3 35 TFSI',
              years: '2018–present',
              priceBand: '€18,000–€32,000 used',
              specs: {
                engine: '1.5 TFSI four-cylinder turbo',
                engineCode: 'DADA',
                displacementCc: 1498,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 250,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.9,
                topSpeedKmh: 217,
                consumptionL100: 5.7,
                co2Gkm: 130
              },
              dimensions: {
                lengthMm: 4485,
                widthMm: 1856,
                heightMm: 1616,
                wheelbaseMm: 2679,
                bootLitres: 530,
                weightKg: 1425,
                tankLitres: 50
              },
              options: safetyComfort(['adaptive cruise assist', 'lane departure warning', 'virtual cockpit plus', 'parking sensors']),
              knownFor: ['practical 530-litre boot', 'significant interior quality step up from gen 1', 'efficient 1.5 TFSI cylinder deactivation', 'elevated driving position'],
              watchOut: ['firm ride on larger wheel options', 'interior screen fingerprint magnet', '1.5 TFSI can feel vocal under hard acceleration', 'limited torque when loaded']
            },
            {
              id: 'audi-q3-f3-35tdi',
              name: 'Q3 35 TDI',
              years: '2018–present',
              priceBand: '€20,000–€34,000 used',
              specs: {
                engine: '2.0 TDI four-cylinder turbo',
                engineCode: 'DFCA',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 360,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.6,
                topSpeedKmh: 218,
                consumptionL100: 4.5,
                co2Gkm: 118
              },
              dimensions: {
                lengthMm: 4485,
                widthMm: 1856,
                heightMm: 1616,
                wheelbaseMm: 2679,
                bootLitres: 530,
                weightKg: 1535,
                tankLitres: 50
              },
              options: safetyComfort(['matrix LED headlights', 'rear view camera', 'adaptive cruise control']),
              knownFor: ['strong torque for relaxed family driving', 'superb fuel economy on motorway runs', 'practical family crossover dimensions', 'refined diesel manners'],
              watchOut: ['diesel clatter on cold starts', 'not suited for predominantly city use', 'adblue refill required periodically', 'heavier than petrol equivalent']
            },
            {
              id: 'audi-q3-f3-45tfsie',
              name: 'Q3 45 TFSIe PHEV',
              years: '2020–present',
              priceBand: '€28,000–€42,000 used',
              specs: {
                engine: '1.4 TFSI + e-motor PHEV',
                engineCode: 'DGEA hybrid',
                displacementCc: 1395,
                cylinders: 'Inline-4',
                powerHp: 245,
                powerKw: 180,
                torqueNm: 400,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 7.3,
                topSpeedKmh: 220,
                consumptionL100: 1.5,
                electricRangeKm: 62,
                co2Gkm: 33
              },
              dimensions: {
                lengthMm: 4485,
                widthMm: 1856,
                heightMm: 1616,
                wheelbaseMm: 2679,
                bootLitres: 400,
                weightKg: 1720,
                tankLitres: 40
              },
              options: safetyComfort(['e-route planner', 'heated front seats', 'rear view camera', 'panoramic sunroof']),
              knownFor: ['low BIK tax for company car drivers', 'EV range covers typical daily commute', 'quick combined performance', 'user-friendly PHEV management system'],
              watchOut: ['reduced boot space versus standard Q3', 'electric range shortens in cold weather', 'charging cable management required', 'needs charging to beat diesel economy']
            }
          ]
        }
      ]
    },
    {
      id: 'q5',
      name: 'Q5',
      segment: 'Mid-size Premium SUV',
      description: 'The Audi Q5 is one of the brand\'s best-selling models globally, offering a well-balanced mid-size premium SUV with excellent build quality, a comfortable ride, and a comprehensive powertrain range. The FY second generation brought significant technology improvements and the high-performance SQ5 variant.',
      tags: ['mid-size-SUV', 'quattro', 'premium', 'diesel', 'PHEV', 'performance', 'family'],
      generations: [
        {
          id: 'q5-fy',
          name: 'Q5 FY (2nd gen)',
          years: '2016–present',
          platform: 'Volkswagen Group MLB Evo',
          bodyStyles: ['SUV'],
          summary: 'The FY Q5 moved to the MLB Evo platform, shedding weight and introducing quattro ultra intelligent AWD which can disconnect the rear axle for efficiency. The 2020 facelift brought the new single-frame octagonal grille, OLED tail lights, and extended mild-hybrid MHEV technology across the range.',
          heroImage: 'q5-fy',
          variants: [
            {
              id: 'audi-q5-fy-40tdi-quattro',
              name: 'Q5 40 TDI quattro',
              years: '2016–present',
              priceBand: '€22,000–€45,000 used',
              specs: {
                engine: '2.0 TDI four-cylinder turbo 48V MHEV',
                engineCode: 'DFAZ',
                displacementCc: 1968,
                cylinders: 'Inline-4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 7.1,
                topSpeedKmh: 218,
                consumptionL100: 5.3,
                co2Gkm: 139
              },
              dimensions: {
                lengthMm: 4663,
                widthMm: 1893,
                heightMm: 1659,
                wheelbaseMm: 2820,
                bootLitres: 550,
                weightKg: 1800,
                tankLitres: 65
              },
              options: safetyComfort(['adaptive air suspension', 'matrix LED headlights', 'rear view camera', 'virtual cockpit']),
              knownFor: ['benchmark mid-size SUV dynamics', 'quattro ultra intelligent AWD', 'premium interior quality', 'excellent real-world diesel economy'],
              watchOut: ['options list can add €10k easily', 'real-world MPG lower than official with quattro engaged', 'adblue tank requires periodic refilling', 'S tronic can be jerky in slow traffic']
            },
            {
              id: 'audi-q5-fy-55tfsie',
              name: 'Q5 55 TFSIe PHEV',
              years: '2020–present',
              priceBand: '€35,000–€58,000 used',
              specs: {
                engine: '2.0 TFSI + e-motor PHEV',
                engineCode: 'DNUA hybrid',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 367,
                powerKw: 270,
                torqueNm: 500,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 5.3,
                topSpeedKmh: 230,
                consumptionL100: 1.9,
                electricRangeKm: 56,
                co2Gkm: 44
              },
              dimensions: {
                lengthMm: 4663,
                widthMm: 1893,
                heightMm: 1659,
                wheelbaseMm: 2820,
                bootLitres: 460,
                weightKg: 2050,
                tankLitres: 50
              },
              options: safetyComfort(['e-route planner', 'adaptive air suspension', 'massage seats', 'matrix LED headlights']),
              knownFor: ['excellent company car tax savings', 'EV-capable for daily commuting', 'quattro performance when needed', 'flagship powertrain technology'],
              watchOut: ['over 2 tonnes kerb weight', 'reduced boot versus standard Q5', 'electric range shortens in winter', 'charging needed to achieve stated economy']
            },
            {
              id: 'audi-q5-fy-sq5',
              name: 'SQ5 TDI',
              years: '2017–present',
              priceBand: '€38,000–€65,000 used',
              specs: {
                engine: '3.0 TDI V6 turbo 48V MHEV',
                engineCode: 'CVMD',
                displacementCc: 2967,
                cylinders: 'V6',
                powerHp: 347,
                powerKw: 255,
                torqueNm: 700,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.1,
                topSpeedKmh: 250,
                consumptionL100: 7.3,
                co2Gkm: 191
              },
              dimensions: {
                lengthMm: 4679,
                widthMm: 1893,
                heightMm: 1645,
                wheelbaseMm: 2820,
                bootLitres: 550,
                weightKg: 1990,
                tankLitres: 65
              },
              options: safetyComfort(['sport differential', 'adaptive air suspension', 'Bang & Olufsen audio', 'carbon-look trim', 'panoramic sunroof']),
              knownFor: ['enormous V6 diesel torque', 'SUV performance matching some sports cars', 'sports exhaust note unique in class', 'understated performance SUV look'],
              watchOut: ['real-world fuel economy disappointing under hard use', 'V6 diesel maintenance premiums', 'very heavy vehicle dynamics at limits', 'depreciation sharper than standard Q5']
            }
          ]
        }
      ]
    },
    {
      id: 'q7',
      name: 'Q7',
      segment: 'Large Premium SUV',
      description: 'The Audi Q7 is the brand\'s large seven-seat premium SUV, offering genuine third-row seating, a commanding presence, and a range of powerful V6 diesel and PHEV powertrains. The second-generation 4M model uses the MLB Evo platform, bringing significant weight savings over its predecessor despite the massive dimensions.',
      tags: ['large-SUV', 'seven-seat', 'quattro', 'premium', 'diesel', 'PHEV', 'family'],
      generations: [
        {
          id: 'q7-4m',
          name: 'Q7 4M (2nd gen)',
          years: '2015–present',
          platform: 'Volkswagen Group MLB Evo',
          bodyStyles: ['SUV'],
          summary: 'The 4M Q7 shed up to 325 kg versus its predecessor through aluminium and high-strength steel construction. It features optional rear-axle steering for improved manoeuvrability, a comprehensive driver assistance suite, and the Audi Virtual Cockpit. The 2019 facelift updated the interior to match the A6/A7 twin-screen design.',
          heroImage: 'q7-4m',
          variants: [
            {
              id: 'audi-q7-4m-45tdi-quattro',
              name: 'Q7 45 TDI quattro',
              years: '2015–present',
              priceBand: '€30,000–€60,000 used',
              specs: {
                engine: '3.0 TDI V6 turbo 48V MHEV',
                engineCode: 'CSWB',
                displacementCc: 2967,
                cylinders: 'V6',
                powerHp: 231,
                powerKw: 170,
                torqueNm: 500,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 7.1,
                topSpeedKmh: 235,
                consumptionL100: 6.8,
                co2Gkm: 179
              },
              dimensions: {
                lengthMm: 5063,
                widthMm: 1968,
                heightMm: 1741,
                wheelbaseMm: 2994,
                bootLitres: 865,
                weightKg: 2135,
                tankLitres: 85
              },
              options: safetyComfort(['air suspension with adaptive damping', 'rear axle steering', 'panoramic sunroof', 'seven-seat configuration', 'trailer assist']),
              knownFor: ['genuine seven-seat family capability', 'enormous boot space with seats folded', 'smooth V6 diesel for long motorway trips', 'premium interior for the segment'],
              watchOut: ['very large dimensions challenge city parking', 'heavy fuel bill on full load', 'third row best suited for children only', 'high CO2 for large diesel SUV']
            },
            {
              id: 'audi-q7-4m-55tfsie',
              name: 'Q7 55 TFSIe PHEV',
              years: '2019–present',
              priceBand: '€42,000–€75,000 used',
              specs: {
                engine: '3.0 V6 TFSI turbo + e-motor PHEV',
                engineCode: 'DCPA hybrid',
                displacementCc: 2995,
                cylinders: 'V6',
                powerHp: 449,
                powerKw: 330,
                torqueNm: 700,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.9,
                topSpeedKmh: 250,
                consumptionL100: 3.4,
                electricRangeKm: 43,
                co2Gkm: 79
              },
              dimensions: {
                lengthMm: 5063,
                widthMm: 1968,
                heightMm: 1741,
                wheelbaseMm: 2994,
                bootLitres: 740,
                weightKg: 2525,
                tankLitres: 75
              },
              options: safetyComfort(['seven-seat configuration', 'massaging front seats', 'night vision', 'Bang & Olufsen audio', 'e-route planner']),
              knownFor: ['impressive PHEV performance for the size', 'V6 power alongside EV capability', 'usable seven-seat family PHEV', 'low CO2 versus diesel-only Q7'],
              watchOut: ['extremely heavy at over 2.5 tonnes', 'reduced seven-seat boot with PHEV battery', 'electric range modest for such a large vehicle', 'running costs remain high']
            }
          ]
        }
      ]
    },
    {
      id: 'q8',
      name: 'Q8',
      segment: 'Large Premium SUV Coupe',
      description: 'The Audi Q8 is the flagship coupe-style SUV, combining the full size of the Q7 with a rakish fastback roofline in a two-row body. It uses the MLB Evo platform with the latest twin-touchscreen MMI interior, and the high-performance SQ8 TDI offers a genuine performance SUV alternative to the Porsche Cayenne.',
      tags: ['luxury-SUV', 'coupe-SUV', 'flagship', 'quattro', 'diesel', 'performance'],
      generations: [
        {
          id: 'q8-4m',
          name: 'Q8 4M (1st gen)',
          years: '2018–present',
          platform: 'Volkswagen Group MLB Evo',
          bodyStyles: ['SUV'],
          summary: 'The first Q8 introduced Audi\'s flagship SUV coupe concept to the brand. Based on the same MLB Evo platform as the Q7, it features a 2+2 interior layout (no third row), twin touchscreen MMI, and the full range of Audi technology. The SQ8 TDI with 435 hp is among the quickest diesel SUVs available.',
          heroImage: 'q8-4m',
          variants: [
            {
              id: 'audi-q8-4m-50tdi-quattro',
              name: 'Q8 50 TDI quattro',
              years: '2018–present',
              priceBand: '€42,000–€78,000 used',
              specs: {
                engine: '3.0 TDI V6 turbo 48V MHEV',
                engineCode: 'CSWB',
                displacementCc: 2967,
                cylinders: 'V6',
                powerHp: 286,
                powerKw: 210,
                torqueNm: 600,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 6.3,
                topSpeedKmh: 250,
                consumptionL100: 7.3,
                co2Gkm: 192
              },
              dimensions: {
                lengthMm: 4986,
                widthMm: 1995,
                heightMm: 1705,
                wheelbaseMm: 2995,
                bootLitres: 605,
                weightKg: 2130,
                tankLitres: 85
              },
              options: safetyComfort(['adaptive air suspension', 'rear axle steering', 'matrix LED headlights', 'Bang & Olufsen audio', 'panoramic sunroof']),
              knownFor: ['striking coupe-style SUV presence', 'flagship Audi interior ambience', 'powerful V6 diesel effortless cruising', 'practical rear-seat space for the body style'],
              watchOut: ['compromised boot versus Q7 for same exterior length', 'high CO2 emissions', 'heavy options list at launch', 'depreciation steep new']
            },
            {
              id: 'audi-q8-4m-sq8',
              name: 'SQ8 TDI',
              years: '2019–present',
              priceBand: '€58,000–€95,000 used',
              specs: {
                engine: '4.0 V8 TDI biturbo 48V MHEV',
                engineCode: 'CWSE',
                displacementCc: 3956,
                cylinders: 'V8',
                powerHp: 435,
                powerKw: 320,
                torqueNm: 900,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 4.8,
                topSpeedKmh: 250,
                consumptionL100: 9.8,
                co2Gkm: 258
              },
              dimensions: {
                lengthMm: 4996,
                widthMm: 1995,
                heightMm: 1701,
                wheelbaseMm: 2995,
                bootLitres: 605,
                weightKg: 2380,
                tankLitres: 85
              },
              options: safetyComfort(['carbon ceramic brakes', 'sport differential', 'active roll stabilisation', 'sport exhaust', 'adaptive air suspension sport']),
              knownFor: ['900 Nm V8 diesel torque overwhelming', 'supercar pace in a luxury SUV', '48V active anti-roll bars absorb body movement', 'understated performance SUV styling'],
              watchOut: ['extremely high fuel consumption under use', 'very heavy over 2.3 tonnes', 'high CO2 penalties in some EU countries', 'maintenance cost of V8 diesel complex powertrain']
            }
          ]
        }
      ]
    },
    {
      id: 'tt',
      name: 'TT',
      segment: 'Sports Coupe',
      description: 'The Audi TT is the brand\'s iconic compact sports car in coupe and roadster form. The third-generation 8S model brought a revolutionary interior with all-digital Virtual Cockpit replacing traditional dashboard controls, and available quattro all-wheel drive with the turbocharged 2.0 TFSI engine in the TTS variant.',
      tags: ['sports', 'coupe', 'iconic', 'turbocharged', 'quattro', 'virtual-cockpit'],
      generations: [
        {
          id: 'tt-8s',
          name: 'TT 8S (3rd gen)',
          years: '2014–2023',
          platform: 'Volkswagen Group MQB',
          bodyStyles: ['Coupe'],
          summary: 'The 8S TT introduced the landmark TT virtual cockpit, relocating all infotainment to the 12.3-inch digital instrument cluster and removing the central screen. The revised exterior retained the classic TT shape while modernising the proportions. Production ended in 2023 as Audi transitioned the sports car lineup toward electric platforms.',
          heroImage: 'tt-8s',
          variants: [
            {
              id: 'audi-tt-8s-45tfsi',
              name: 'TT 45 TFSI',
              years: '2014–2023',
              priceBand: '€22,000–€40,000 used',
              specs: {
                engine: '2.0 TFSI four-cylinder turbo',
                engineCode: 'CHHB',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 230,
                powerKw: 169,
                torqueNm: 370,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 6.0,
                topSpeedKmh: 250,
                consumptionL100: 7.3,
                co2Gkm: 165
              },
              dimensions: {
                lengthMm: 4177,
                widthMm: 1832,
                heightMm: 1353,
                wheelbaseMm: 2505,
                bootLitres: 305,
                weightKg: 1280,
                tankLitres: 55
              },
              options: safetyComfort(['magnetic ride adaptive dampers', 'Bang & Olufsen audio', 'dynamic steering', 'sport exhaust']),
              knownFor: ['landmark all-digital Virtual Cockpit interior', 'compact and nimble handling', 'timeless TT design language', 'fun daily sports car'],
              watchOut: ['limited rear seat and boot practicality', 'production ended 2023 limits new supply', 'FWD can understeer near limits', 'small interior for taller drivers']
            },
            {
              id: 'audi-tt-8s-tts',
              name: 'TTS Coupe',
              years: '2014–2023',
              priceBand: '€28,000–€48,000 used',
              specs: {
                engine: '2.0 TFSI four-cylinder turbo',
                engineCode: 'CJXC',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 306,
                powerKw: 225,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 6,
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 250,
                consumptionL100: 7.6,
                co2Gkm: 174
              },
              dimensions: {
                lengthMm: 4177,
                widthMm: 1832,
                heightMm: 1353,
                wheelbaseMm: 2505,
                bootLitres: 305,
                weightKg: 1410,
                tankLitres: 55
              },
              options: safetyComfort(['magnetic ride', 'ceramic brakes', 'sport exhaust system', 'Bang & Olufsen audio']),
              knownFor: ['quattro all-weather sports car capability', 'sharp DCT gearbox response', 'distinctive fixed rear spoiler styling', 'punchy performance from compact dimensions'],
              watchOut: ['heavy for a compact sports car with quattro', 'tight cockpit for larger adults', 'running costs above mainstream sports cars', 'production ended 2023']
            }
          ]
        }
      ]
    },
    {
      id: 'r8',
      name: 'R8',
      segment: 'Supercar',
      description: 'The Audi R8 is the brand\'s mid-engine supercar, sharing its naturally aspirated V10 with the Lamborghini Huracán. The second-generation Type 4S model brought carbon-fibre-reinforced polymer body panels, a sharper aluminium space-frame, and the magnificent 5.2-litre V10 engine in standard and Performance variants.',
      tags: ['supercar', 'V10', 'mid-engine', 'naturally-aspirated', 'quattro', 'performance', 'limited'],
      generations: [
        {
          id: 'r8-4s',
          name: 'R8 4S (2nd gen)',
          years: '2015–2023',
          platform: 'Audi Space Frame (ASF) aluminium/CFRP',
          bodyStyles: ['Coupe'],
          summary: 'The second-generation R8 used an advanced space frame combining aluminium and CFRP, reducing weight by 50 kg versus its predecessor. The V10 engine was shared with the Lamborghini Huracán LP 610-4, and the S tronic dual-clutch replaced the R tronic sequential. The R8 Performance arrived in 2017 with 620 hp.',
          heroImage: 'r8-4s',
          variants: [
            {
              id: 'audi-r8-4s-v10-performance',
              name: 'R8 V10 performance',
              years: '2017–2023',
              priceBand: '€120,000–€185,000 used',
              specs: {
                engine: '5.2 FSI V10 naturally aspirated',
                engineCode: 'DLCA',
                displacementCc: 5204,
                cylinders: 'V10',
                powerHp: 620,
                powerKw: 456,
                torqueNm: 580,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 3.1,
                topSpeedKmh: 331,
                consumptionL100: 13.5,
                co2Gkm: 308
              },
              dimensions: {
                lengthMm: 4426,
                widthMm: 1940,
                heightMm: 1240,
                wheelbaseMm: 2650,
                bootLitres: 226,
                weightKg: 1555,
                tankLitres: 83
              },
              options: safetyComfort(['carbon ceramic brakes', 'magnetic ride suspension', 'dynamic steering', 'sport exhaust', 'laser headlights']),
              knownFor: ['intoxicating naturally aspirated V10 sound', 'mid-engine balance and high-speed stability', 'usable everyday supercar', 'shared DNA with Lamborghini Huracán'],
              watchOut: ['very high fuel consumption', 'production ended 2023', 'servicing costs at supercar level', 'limited front storage only']
            }
          ]
        }
      ]
    },
    {
      id: 'rs6',
      name: 'RS6',
      segment: 'Performance Wagon',
      description: 'The Audi RS6 Avant is the definitive performance estate wagon, combining a 630 hp 4.0 V8 biturbo engine with all-wheel drive, adaptive air suspension, and a palatial 565-litre boot. The C8 generation adds 48V mild-hybrid technology and carbon ceramic brakes as options, making it simultaneously more economical and more capable than ever.',
      tags: ['performance', 'wagon', 'avant', 'V8', 'quattro', 'daily-driver', 'practical-performance'],
      generations: [
        {
          id: 'rs6-c8',
          name: 'RS6 Avant C8 (4th gen)',
          years: '2019–present',
          platform: 'Volkswagen Group MLB Evo',
          bodyStyles: ['Wagon'],
          summary: 'The C8 RS6 Avant employs a biturbo 4.0-litre V8 with 48V mild-hybrid assist and cylinder deactivation, enabling it to produce 600 hp while achieving better fuel economy than the outgoing C7 model. The new generation features a wider body with flared wheel arches, the latest twin-screen MMI, and optional carbon ceramic brakes for 300 km/h stopping power.',
          heroImage: 'rs6-c8',
          variants: [
            {
              id: 'audi-rs6-c8-avant',
              name: 'RS6 Avant',
              years: '2019–present',
              priceBand: '€75,000–€130,000 used',
              specs: {
                engine: '4.0 V8 TFSI biturbo 48V MHEV',
                engineCode: 'DKUA',
                displacementCc: 3996,
                cylinders: 'V8',
                powerHp: 600,
                powerKw: 441,
                torqueNm: 800,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.6,
                topSpeedKmh: 305,
                consumptionL100: 11.7,
                co2Gkm: 268
              },
              dimensions: {
                lengthMm: 5018,
                widthMm: 1951,
                heightMm: 1487,
                wheelbaseMm: 2924,
                bootLitres: 565,
                weightKg: 2075,
                tankLitres: 73
              },
              options: safetyComfort(['carbon ceramic brakes', 'dynamic ride control', 'sport differential', 'Bang & Olufsen 3D audio', 'head-up display']),
              knownFor: ['supercar performance with estate practicality', 'V8 sound at full throttle', '565-litre Avant boot with split folding seats', 'iconic RS wheel arch flares'],
              watchOut: ['very high fuel consumption when driven hard', 'extremely heavy at 2 tonnes plus', 'premium cost for service items', 'high road tax in some EU countries']
            }
          ]
        }
      ]
    },
    {
      id: 'e-tron-gt',
      name: 'e-tron GT',
      segment: 'Electric Gran Turismo',
      description: 'The Audi e-tron GT is a four-door electric gran turismo built on the same J1 800V platform as the Porsche Taycan. It combines striking fastback styling inspired by the e-tron GT concept, ultra-fast 270 kW DC charging, and a choice of GT quattro and RS e-tron GT variants with up to 646 hp.',
      tags: ['electric', 'gran-turismo', '800V', 'fast-charging', 'performance', 'quattro'],
      generations: [
        {
          id: 'e-tron-gt-j1',
          name: 'e-tron GT (J1 platform)',
          years: '2021–present',
          platform: 'Porsche J1 (800V)',
          bodyStyles: ['Sedan'],
          summary: 'Built on the Porsche J1 800V electric platform, the e-tron GT offers 270 kW DC fast charging, a two-speed rear transmission, and available quattro all-wheel drive. The RS variant is the highest-performance production Audi ever, with a boosted overboost power of 646 hp available for short durations, 0–100 in 3.3 seconds, and a 250 km/h top speed.',
          heroImage: 'e-tron-gt-j1',
          variants: [
            {
              id: 'audi-e-tron-gt-j1-quattro',
              name: 'e-tron GT quattro',
              years: '2021–present',
              priceBand: '€75,000–€110,000 used',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 476,
                powerKw: 350,
                torqueNm: 630,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.1,
                topSpeedKmh: 245,
                electricRangeKm: 488
              },
              dimensions: {
                lengthMm: 4989,
                widthMm: 1964,
                heightMm: 1396,
                wheelbaseMm: 2900,
                bootLitres: 405,
                weightKg: 2340
              },
              options: evComfort(['matrix LED headlights', 'carbon fibre package', 'rear axle steering', 'Bang & Olufsen 3D audio', 'sport suspension']),
              knownFor: ['800V ultra-fast DC charging to 80% in 23 min', 'gorgeous four-door GT styling', 'genuine sports car performance', 'real-world range among best in segment'],
              watchOut: ['very heavy at over 2.3 tonnes', 'limited boot space for the size', 'charging network compatibility for 800V', 'rear headroom limited by fastback roofline']
            },
            {
              id: 'audi-e-tron-gt-j1-rs',
              name: 'RS e-tron GT',
              years: '2021–present',
              priceBand: '€95,000–€140,000 used',
              specs: {
                engine: 'dual permanent-magnet synchronous motors (overboost)',
                powerHp: 598,
                powerKw: 440,
                torqueNm: 830,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 3.3,
                topSpeedKmh: 250,
                electricRangeKm: 472
              },
              dimensions: {
                lengthMm: 4989,
                widthMm: 1964,
                heightMm: 1396,
                wheelbaseMm: 2900,
                bootLitres: 405,
                weightKg: 2360
              },
              options: evComfort(['carbon ceramic brakes', 'RS sport suspension plus', 'carbon fibre roof', 'Bang & Olufsen 3D audio', 'RS design package']),
              knownFor: ['most powerful production Audi at launch', 'spine-tingling acceleration', 'RS red brake callipers distinctive', '800V platform ultra-fast charging'],
              watchOut: ['highest priced e-tron GT', 'sport suspension noticeably firm', 'overboost peak power only available briefly', 'very heavy for a performance car']
            }
          ]
        }
      ]
    },
    {
      id: 'q4-e-tron',
      name: 'Q4 e-tron',
      segment: 'Compact Electric SUV',
      description: 'The Audi Q4 e-tron is the brand\'s first fully electric compact SUV, built on the Volkswagen Group MEB electric platform. It offers a practical family-sized interior with a class-leading 520-litre boot, a driver-focused augmented reality head-up display, and available quattro all-wheel drive in the 50 quattro variant.',
      tags: ['electric', 'compact-SUV', 'MEB', 'family', 'AWD', 'practical'],
      generations: [
        {
          id: 'q4-e-tron-meb',
          name: 'Q4 e-tron (MEB platform)',
          years: '2021–present',
          platform: 'Volkswagen Group MEB',
          bodyStyles: ['SUV'],
          summary: 'The Q4 e-tron uses the MEB platform developed by Volkswagen Group, enabling a long wheelbase relative to the body for outstanding interior space efficiency. Available in standard SUV and Sportback coupe-SUV body styles, it features optional augmented reality head-up display, ID.Light front and rear LED signature, and OTA software updates.',
          heroImage: 'q4-e-tron-meb',
          variants: [
            {
              id: 'audi-q4-e-tron-meb-q4-40',
              name: 'Q4 40 e-tron',
              years: '2021–present',
              priceBand: '€38,000–€52,000 used',
              specs: {
                engine: 'single permanent-magnet synchronous motor (rear)',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 310,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 8.5,
                topSpeedKmh: 160,
                electricRangeKm: 520
              },
              dimensions: {
                lengthMm: 4588,
                widthMm: 1865,
                heightMm: 1632,
                wheelbaseMm: 2764,
                bootLitres: 520,
                weightKg: 2045
              },
              options: evComfort(['augmented reality head-up display', 'matrix LED headlights', 'panoramic glass roof', 'app-connect wireless']),
              knownFor: ['exceptional range up to 520 km', 'spacious interior for the exterior size', 'augmented reality HUD available', 'accessible Audi EV entry price'],
              watchOut: ['limited top speed of 160 km/h', 'base infotainment slower than rivals', 'suspension firm on larger wheels', 'not all features standard at base trim']
            },
            {
              id: 'audi-q4-e-tron-meb-q4-50-quattro',
              name: 'Q4 50 e-tron quattro',
              years: '2021–present',
              priceBand: '€46,000–€62,000 used',
              specs: {
                engine: 'dual permanent-magnet synchronous motors (front + rear)',
                powerHp: 299,
                powerKw: 220,
                torqueNm: 460,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 6.2,
                topSpeedKmh: 180,
                electricRangeKm: 491
              },
              dimensions: {
                lengthMm: 4588,
                widthMm: 1865,
                heightMm: 1632,
                wheelbaseMm: 2764,
                bootLitres: 520,
                weightKg: 2155
              },
              options: evComfort(['augmented reality HUD', 'sport suspension', 'matrix LED headlights', 'panoramic roof', 'fast charging 125 kW']),
              knownFor: ['quattro AWD traction in winter conditions', 'brisk acceleration for the class', 'strong range for an AWD EV', 'premium Audi interior in accessible EV package'],
              watchOut: ['range penalty versus rear-wheel-drive 40', 'heavier than single-motor variant', 'higher starting price', 'top speed capped at 180 km/h']
            }
          ]
        }
      ]
    },
    {
      id: 'q8-e-tron',
      name: 'Q8 e-tron',
      segment: 'Large Electric SUV',
      description: 'The Audi Q8 e-tron (previously e-tron) is the brand\'s flagship electric SUV, now updated with more power, higher charging speeds up to 170 kW, and improved range versus the original e-tron. Available as a standard SUV and Sportback, the 55 quattro variant offers the longest range in the lineup.',
      tags: ['electric', 'large-SUV', 'quattro', 'luxury', 'flagship', 'fast-charging'],
      generations: [
        {
          id: 'q8-e-tron-gc',
          name: 'Q8 e-tron (GC platform)',
          years: '2022–present',
          platform: 'Volkswagen Group MLB Evo (modified for EV)',
          bodyStyles: ['SUV'],
          summary: 'Evolved from the original e-tron, the Q8 e-tron brought a comprehensive update including up to 170 kW AC/DC combined charging capability, extended range via new battery technology, revised aerodynamics including active grille shutters, and the latest Audi MMI interface. The Sportback coupe body is available alongside the standard SUV.',
          heroImage: 'q8-e-tron-gc',
          variants: [
            {
              id: 'audi-q8-e-tron-gc-55-quattro',
              name: 'Q8 55 e-tron quattro',
              years: '2022–present',
              priceBand: '€65,000–€100,000 used',
              specs: {
                engine: 'dual asynchronous induction motors (front + rear)',
                powerHp: 408,
                powerKw: 300,
                torqueNm: 664,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 5.6,
                topSpeedKmh: 200,
                electricRangeKm: 582
              },
              dimensions: {
                lengthMm: 4915,
                widthMm: 1937,
                heightMm: 1616,
                wheelbaseMm: 2928,
                bootLitres: 569,
                weightKg: 2585
              },
              options: evComfort(['adaptive air suspension', 'matrix LED headlights', 'Bang & Olufsen audio', 'panoramic sunroof', 'head-up display']),
              knownFor: ['outstanding range for a large AWD electric SUV', '170 kW fast charging', 'premium luxury cabin at Audi flagship level', 'quattro electric AWD in all weathers'],
              watchOut: ['very heavy platform from pre-EV MLB', 'charging speed below newer dedicated EV platforms', 'running costs high for premium SUV', 'high list price']
            }
          ]
        }
      ]
    }
  ]
};
