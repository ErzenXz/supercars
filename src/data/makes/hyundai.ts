import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const hyundai: CarMake = {
  id: 'hyundai',
  name: 'Hyundai',
  country: 'South Korea',
  logoText: 'H',
  models: [
    {
      id: 'i30',
      name: 'i30',
      segment: 'C-segment hatchback',
      description: 'The Hyundai i30 is a mainstream C-segment hatchback competing with the Golf and Focus. The PD generation brought sharper styling, a stronger safety record (Euro NCAP 5-star), and a range of efficient petrol and diesel engines suited to European tastes.',
      tags: ['hatchback', 'family', 'practical', 'efficient'],
      generations: [
        {
          id: 'i30-pd',
          name: 'PD (Third Generation)',
          years: '2017–present',
          platform: 'K2 platform',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The PD generation i30 raised the bar with a mature interior, comprehensive standard safety, and a choice of 1.0 T-GDI, 1.5 T-GDI petrol and 1.6 CRDi diesel engines. Practical packaging and strong value make it a popular fleet and private choice.',
          heroImage: 'hyundai-i30-pd',
          variants: [
            {
              id: 'hyundai-i30-pd-10tgdi',
              name: '1.0 T-GDI 120 PS',
              years: '2017–present',
              priceBand: '€9,000–€20,000 used',
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
                acceleration0100: 10.5,
                topSpeedKmh: 186,
                consumptionL100: 5.6,
                co2Gkm: 127
              },
              dimensions: {
                lengthMm: 4340,
                widthMm: 1795,
                heightMm: 1455,
                wheelbaseMm: 2650,
                bootLitres: 395,
                weightKg: 1240,
                tankLitres: 50
              },
              options: safetyComfort(['rear parking sensors']),
              knownFor: ['frugal real-world consumption', 'punchy for its size', 'light steering in town', 'strong warranty support'],
              watchOut: ['engine can feel strained on motorways', 'road noise at high speed', 'no factory sat-nav on entry trim']
            },
            {
              id: 'hyundai-i30-pd-15tgdi',
              name: '1.5 T-GDI 160 PS DCT',
              years: '2020–present',
              priceBand: '€12,000–€24,000 used',
              specs: {
                engine: '1.5-litre turbocharged four-cylinder petrol',
                engineCode: 'G4LD',
                displacementCc: 1482,
                cylinders: '4',
                powerHp: 160,
                powerKw: 118,
                torqueNm: 253,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.5,
                topSpeedKmh: 210,
                consumptionL100: 6.2,
                co2Gkm: 141
              },
              dimensions: {
                lengthMm: 4340,
                widthMm: 1795,
                heightMm: 1455,
                wheelbaseMm: 2650,
                bootLitres: 395,
                weightKg: 1310,
                tankLitres: 50
              },
              options: safetyComfort(['adaptive cruise control with stop-and-go', 'wireless charging']),
              knownFor: ['smooth DCT gearbox', 'brisk performance for a family hatch', 'well-equipped mid-trims', 'composed motorway cruiser'],
              watchOut: ['DCT can be jerky in slow traffic', 'higher fuel costs than 1.0', 'infotainment screen resolution dated']
            },
            {
              id: 'hyundai-i30-pd-16crdi',
              name: '1.6 CRDi 136 PS',
              years: '2017–2023',
              priceBand: '€8,500–€19,000 used',
              specs: {
                engine: '1.6-litre turbodiesel four-cylinder',
                engineCode: 'D4FB',
                displacementCc: 1582,
                cylinders: '4',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 320,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.5,
                topSpeedKmh: 210,
                consumptionL100: 4.4,
                co2Gkm: 116
              },
              dimensions: {
                lengthMm: 4340,
                widthMm: 1795,
                heightMm: 1455,
                wheelbaseMm: 2650,
                bootLitres: 395,
                weightKg: 1330,
                tankLitres: 50
              },
              options: safetyComfort(['rear camera', 'heated seats']),
              knownFor: ['excellent long-distance economy', 'strong low-down torque', 'large boot for the class', 'five-year warranty peace of mind'],
              watchOut: ['diesel particulate filter needs motorway runs', 'heavier than petrol versions', 'reduced diesel residuals']
            }
          ]
        }
      ]
    },
    {
      id: 'tucson',
      name: 'Tucson',
      segment: 'Compact SUV',
      description: 'The Hyundai Tucson is one of Europe\'s most popular compact SUVs. The NX4 generation arrived in 2021 with radical styling, a genuinely premium interior, and a comprehensive mild-hybrid and plug-in hybrid lineup that keeps it competitive in a congested market.',
      tags: ['SUV', 'family', 'hybrid', 'premium-value'],
      generations: [
        {
          id: 'tucson-nx4',
          name: 'NX4 (Fourth Generation)',
          years: '2021–present',
          platform: 'Hyundai N3 platform',
          bodyStyles: ['SUV'],
          summary: 'The NX4 Tucson made headlines with its parametric jewel-pattern grille and hidden air vents. A 48 V mild-hybrid system is standard on the 1.6 T-GDI petrol, while a plug-in hybrid version offers over 50 km of EV range. Build quality and infotainment took a clear step up.',
          heroImage: 'hyundai-tucson-nx4',
          variants: [
            {
              id: 'hyundai-tucson-nx4-16tgdi-mhev',
              name: '1.6 T-GDI 150 PS 48V MHEV',
              years: '2021–present',
              priceBand: '€18,000–€35,000 used',
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
                acceleration0100: 9.5,
                topSpeedKmh: 200,
                consumptionL100: 6.1,
                co2Gkm: 139
              },
              dimensions: {
                lengthMm: 4500,
                widthMm: 1865,
                heightMm: 1650,
                wheelbaseMm: 2680,
                bootLitres: 539,
                weightKg: 1520,
                tankLitres: 54
              },
              options: safetyComfort(['surround-view camera', 'wireless Apple CarPlay', 'heated rear seats']),
              knownFor: ['bold avant-garde styling', 'hidden air vent interior', 'good value vs European rivals', 'spacious rear seats'],
              watchOut: ['DCT can hunt in stop-start traffic', 'mild hybrid does not cut fuel costs dramatically', 'rear visibility restricted by thick pillars']
            },
            {
              id: 'hyundai-tucson-nx4-16crdi-48v',
              name: '1.6 CRDi 136 PS 48V MHEV',
              years: '2021–present',
              priceBand: '€17,000–€33,000 used',
              specs: {
                engine: '1.6-litre turbodiesel + 48 V mild-hybrid',
                engineCode: 'D4FD',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 320,
                fuel: 'Hybrid',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.5,
                topSpeedKmh: 192,
                consumptionL100: 5.0,
                co2Gkm: 130
              },
              dimensions: {
                lengthMm: 4500,
                widthMm: 1865,
                heightMm: 1650,
                wheelbaseMm: 2680,
                bootLitres: 539,
                weightKg: 1530,
                tankLitres: 54
              },
              options: safetyComfort(['adaptive cruise control', 'blind spot monitor', 'rear cross-traffic alert']),
              knownFor: ['low real-world fuel consumption', 'ample towing ability', 'refined ride on motorway', 'class-leading boot space'],
              watchOut: ['diesel becoming less popular at resale', 'DPF issues if mostly city driven', 'DCT not available on diesel']
            }
          ]
        }
      ]
    },
    {
      id: 'kona',
      name: 'Kona',
      segment: 'Subcompact SUV',
      description: 'The Hyundai Kona brought Hyundai into the booming subcompact SUV segment and quickly became one of Europe\'s bestsellers. Its unique styling and the availability of a fully electric variant — the Kona Electric — gave it a competitive edge. The second generation arrived in 2023 with a larger body and improved EV range.',
      tags: ['SUV', 'electric', 'city', 'youthful'],
      generations: [
        {
          id: 'kona-os',
          name: 'OS (First Generation)',
          years: '2017–2023',
          platform: 'Hyundai K2 platform',
          bodyStyles: ['SUV'],
          summary: 'The original Kona offered a bold design, confident handling, and the groundbreaking Kona Electric with up to 484 km WLTP range. Petrol variants used 1.0 and 1.6 T-GDI units. Strong Euro NCAP scores and a long warranty helped it stand out.',
          heroImage: 'hyundai-kona-os',
          variants: [
            {
              id: 'hyundai-kona-os-10tgdi',
              name: '1.0 T-GDI 120 PS',
              years: '2017–2023',
              priceBand: '€8,000–€18,000 used',
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
                acceleration0100: 11.0,
                topSpeedKmh: 182,
                consumptionL100: 5.7,
                co2Gkm: 130
              },
              dimensions: {
                lengthMm: 4165,
                widthMm: 1800,
                heightMm: 1550,
                wheelbaseMm: 2600,
                bootLitres: 361,
                weightKg: 1215,
                tankLitres: 50
              },
              options: safetyComfort(['rear parking sensors', 'keyless entry']),
              knownFor: ['compact size ideal for city driving', 'funky two-tone colour options', 'five-year warranty', 'low running costs'],
              watchOut: ['small boot versus class rivals', 'engine strained fully loaded', 'relatively high driving position for visibility']
            },
            {
              id: 'hyundai-kona-os-ev64',
              name: 'Electric 64 kWh 204 PS',
              years: '2019–2023',
              priceBand: '€15,000–€30,000 used',
              specs: {
                engine: 'single front motor',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 395,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 7.9,
                topSpeedKmh: 167,
                electricRangeKm: 484
              },
              dimensions: {
                lengthMm: 4180,
                widthMm: 1800,
                heightMm: 1570,
                wheelbaseMm: 2600,
                bootLitres: 332,
                weightKg: 1685
              },
              options: evComfort(['vehicle-to-load (V2L)', 'heated steering wheel', 'ventilated front seats']),
              knownFor: ['impressive 484 km WLTP range', 'quick urban acceleration', 'lower running costs vs petrol', 'compact footprint in cities'],
              watchOut: ['smaller boot than ICE Kona due to battery', 'AC charging limited to 7.2 kW', 'early cars had software glitches', 'heavier than expected']
            }
          ]
        }
      ]
    },
    {
      id: 'ioniq5',
      name: 'Ioniq 5',
      segment: 'Midsize electric SUV',
      description: 'The Ioniq 5 launched Hyundai\'s dedicated BEV sub-brand. Built on the 800 V-capable E-GMP platform, it delivers ultra-fast charging, a radical retro-futurist design, and a genuinely spacious flat-floor interior. Widely regarded as one of the best electric vehicles of the 2020s.',
      tags: ['electric', 'fast-charging', 'SUV', 'premium'],
      generations: [
        {
          id: 'ioniq5-ng',
          name: 'NE (First Generation)',
          years: '2021–present',
          platform: 'E-GMP',
          bodyStyles: ['SUV'],
          summary: 'The Ioniq 5 is built on Hyundai\'s 800 V E-GMP platform, enabling 350 kW DC rapid charging. Available in Standard Range 58 kWh and Long Range 77 kWh variants, in RWD or AWD. Its pixelated lighting, flat floor with sliding console, and V2L capability made it a 2021 Car of the Year contender.',
          heroImage: 'hyundai-ioniq5-ng',
          variants: [
            {
              id: 'hyundai-ioniq5-ng-rwd-77',
              name: '77 kWh RWD Techniq',
              years: '2022–present',
              priceBand: '€28,000–€45,000 used',
              specs: {
                engine: 'single rear motor',
                powerHp: 229,
                powerKw: 168,
                torqueNm: 350,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 7.4,
                topSpeedKmh: 185,
                electricRangeKm: 507
              },
              dimensions: {
                lengthMm: 4635,
                widthMm: 1890,
                heightMm: 1605,
                wheelbaseMm: 3000,
                bootLitres: 527,
                weightKg: 1985
              },
              options: evComfort(['vehicle-to-load (V2L)', '800V ultra-fast charging']),
              knownFor: ['very fast 800V charging', 'spacious flat-floor cabin', 'comfortable ride', 'strong efficiency'],
              watchOut: ['ICCU 12V charging recall on early cars', 'tire wear higher than expected', 'limited rear visibility', 'price of DC fast charging sessions']
            },
            {
              id: 'hyundai-ioniq5-ng-awd-77',
              name: '77 kWh AWD Project 45',
              years: '2021–present',
              priceBand: '€32,000–€52,000 used',
              specs: {
                engine: 'dual motor AWD',
                powerHp: 306,
                powerKw: 225,
                torqueNm: 605,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 5.1,
                topSpeedKmh: 185,
                electricRangeKm: 454
              },
              dimensions: {
                lengthMm: 4635,
                widthMm: 1890,
                heightMm: 1605,
                wheelbaseMm: 3000,
                bootLitres: 527,
                weightKg: 2100
              },
              options: evComfort(['vehicle-to-load (V2L)', '800V ultra-fast charging', 'augmented reality heads-up display']),
              knownFor: ['rapid 0–100 km/h in 5.1 s', 'sure-footed all-weather traction', 'V2L for camping and outdoor use', 'premium materials in cabin'],
              watchOut: ['higher real-world consumption than RWD', 'heavier weight affects dynamics', 'slightly reduced range', 'pricier to insure']
            }
          ]
        }
      ]
    }
  ]
};
