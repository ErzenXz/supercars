import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const renault: CarMake = {
  id: 'renault',
  name: 'Renault',
  country: 'France',
  logoText: '◈',
  models: [
    {
      id: 'twingo',
      name: 'Twingo',
      segment: 'City car',
      description: 'The Renault Twingo is a compact city car celebrated for its rear-engine, rear-wheel-drive layout in the third generation, producing an exceptionally tight turning circle ideal for urban environments. Affordable to buy and cheap to run, it targets first-time buyers and urban commuters across Europe.',
      tags: ['city', 'affordable', 'urban', 'compact'],
      generations: [
        {
          id: 'twingo-mk3',
          name: 'Mk3 (Third Generation)',
          years: '2014–2022',
          platform: 'Renault-Smart X52',
          bodyStyles: ['Hatchback'],
          summary: 'The third-generation Twingo moved to a rear-engine, rear-wheel-drive layout co-developed with Smart. The 0.9 TCe three-cylinder turbo made it lively despite its tiny footprint. A turning circle under 8 m made city parking near-effortless.',
          heroImage: 'renault-twingo-mk3',
          variants: [
            {
              id: 'renault-twingo-mk3-09tce90',
              name: '0.9 TCe 90 PS',
              years: '2014–2022',
              priceBand: '€4,500–€12,000 used',
              specs: {
                engine: '0.9-litre turbocharged three-cylinder petrol',
                engineCode: 'H4Bt',
                displacementCc: 898,
                cylinders: '3',
                powerHp: 90,
                powerKw: 66,
                torqueNm: 135,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 5,
                drive: 'RWD',
                acceleration0100: 10.8,
                topSpeedKmh: 170,
                consumptionL100: 4.9,
                co2Gkm: 112
              },
              dimensions: {
                lengthMm: 3615,
                widthMm: 1647,
                heightMm: 1554,
                wheelbaseMm: 2492,
                bootLitres: 188,
                weightKg: 1010,
                tankLitres: 35
              },
              options: safetyComfort(['rear-view camera', 'speed limiter']),
              knownFor: ['sub-8 m turning circle', 'effortless city parking', 'cheerful RWD character', 'low running costs'],
              watchOut: ['rear engine severely limits boot space', 'motorway noise intrusive above 110 km/h', 'RWD traction limited in snow', 'small fuel tank']
            },
            {
              id: 'renault-twingo-mk3-10sce65',
              name: '1.0 SCe 65 PS',
              years: '2014–2022',
              priceBand: '€3,500–€9,500 used',
              specs: {
                engine: '1.0-litre naturally aspirated three-cylinder petrol',
                engineCode: 'H4D-A4',
                displacementCc: 999,
                cylinders: '3',
                powerHp: 65,
                powerKw: 48,
                torqueNm: 95,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 5,
                drive: 'RWD',
                acceleration0100: 14.5,
                topSpeedKmh: 155,
                consumptionL100: 4.6,
                co2Gkm: 103
              },
              dimensions: {
                lengthMm: 3615,
                widthMm: 1647,
                heightMm: 1554,
                wheelbaseMm: 2492,
                bootLitres: 188,
                weightKg: 990,
                tankLitres: 35
              },
              options: safetyComfort(),
              knownFor: ['ultra-low running costs', 'minimal urban emissions', 'simple and easy to drive', 'very affordable purchase price'],
              watchOut: ['very limited power for motorway merging', 'struggles with full passenger load', 'basic cabin materials', 'tiny boot space']
            }
          ]
        }
      ]
    },
    {
      id: 'clio',
      name: 'Clio',
      segment: 'Supermini',
      description: 'One of Europe\'s best-selling superminis, the Renault Clio has been a benchmark small car since 1990. The fifth-generation model raised quality and technology standards significantly, introducing the E-Tech full-hybrid system as a first in the supermini class and delivering a near-premium interior.',
      tags: ['supermini', 'hybrid', 'popular', 'efficient'],
      generations: [
        {
          id: 'clio-mk5',
          name: 'Mk5 (Fifth Generation)',
          years: '2019–present',
          platform: 'Renault CMF-B',
          bodyStyles: ['Hatchback'],
          summary: 'The Mk5 Clio was a significant leap in interior quality, featuring a 9.3-inch touchscreen, a digital instrument cluster, and the option of the brand-new E-Tech 140 full-hybrid powertrain — the first no-plug hybrid in the supermini class. The 1.0 TCe turbo-petrol remains the volume engine.',
          heroImage: 'renault-clio-mk5',
          variants: [
            {
              id: 'renault-clio-mk5-10tce100',
              name: '1.0 TCe 100 PS',
              years: '2019–present',
              priceBand: '€8,000–€18,000 used',
              specs: {
                engine: '1.0-litre turbocharged three-cylinder petrol',
                engineCode: 'H4D-F4',
                displacementCc: 999,
                cylinders: '3',
                powerHp: 100,
                powerKw: 74,
                torqueNm: 160,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.0,
                topSpeedKmh: 182,
                consumptionL100: 5.2,
                co2Gkm: 117
              },
              dimensions: {
                lengthMm: 4050,
                widthMm: 1798,
                heightMm: 1440,
                wheelbaseMm: 2583,
                bootLitres: 391,
                weightKg: 1145,
                tankLitres: 45
              },
              options: safetyComfort(['traffic sign recognition', 'blind spot monitoring', 'rear-view camera']),
              knownFor: ['much-improved interior quality vs Mk4', 'large 9.3-inch EASY LINK touchscreen', 'comfortable supermini ride', 'competitive 391-litre boot'],
              watchOut: ['1.0 turbo can feel coarse under hard use', 'no AWD option', 'touchscreen can be slow to respond', 'fuel economy drops in cold weather']
            },
            {
              id: 'renault-clio-mk5-etech140',
              name: 'E-Tech 140 Full Hybrid',
              years: '2020–present',
              priceBand: '€12,000–€22,000 used',
              specs: {
                engine: '1.6-litre Atkinson-cycle four-cylinder + two electric motors',
                engineCode: 'H4M',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 140,
                powerKw: 103,
                torqueNm: 205,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 9.9,
                topSpeedKmh: 180,
                consumptionL100: 4.2,
                co2Gkm: 96
              },
              dimensions: {
                lengthMm: 4050,
                widthMm: 1798,
                heightMm: 1440,
                wheelbaseMm: 2583,
                bootLitres: 391,
                weightKg: 1315,
                tankLitres: 45
              },
              options: safetyComfort(['adaptive cruise control', 'lane centering', '360-degree cameras']),
              knownFor: ['first no-plug hybrid in supermini class', 'excellent city fuel economy', 'smooth multimode gearbox', 'sub-100 g/km CO2'],
              watchOut: ['multimode gearbox hesitates on steep hill starts', 'heavier than petrol versions', 'higher purchase cost than TCe', 'limited pure-EV range']
            }
          ]
        }
      ]
    },
    {
      id: 'captur',
      name: 'Captur',
      segment: 'Subcompact SUV',
      description: 'France\'s best-selling SUV, the Renault Captur blends supermini practicality with an elevated ride height and bold SUV styling. The second generation added plug-in hybrid capability — unique in the class at launch — alongside the no-plug E-Tech hybrid and a generous sliding rear bench.',
      tags: ['SUV', 'hybrid', 'PHEV', 'popular'],
      generations: [
        {
          id: 'captur-mk2',
          name: 'Mk2 (Second Generation)',
          years: '2019–present',
          platform: 'Renault CMF-B',
          bodyStyles: ['SUV'],
          summary: 'The second-generation Captur grew slightly over its predecessor on the CMF-B platform. It gained the E-Tech plug-in hybrid alongside 1.0 and 1.3 TCe petrols. A sliding rear bench usefully increases either boot volume or rear legroom depending on need.',
          heroImage: 'renault-captur-mk2',
          variants: [
            {
              id: 'renault-captur-mk2-10tce90',
              name: '1.0 TCe 90 PS',
              years: '2019–present',
              priceBand: '€9,000–€19,000 used',
              specs: {
                engine: '1.0-litre turbocharged three-cylinder petrol',
                engineCode: 'H4D-F4',
                displacementCc: 999,
                cylinders: '3',
                powerHp: 90,
                powerKw: 66,
                torqueNm: 160,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 12.5,
                topSpeedKmh: 174,
                consumptionL100: 5.5,
                co2Gkm: 125
              },
              dimensions: {
                lengthMm: 4227,
                widthMm: 1797,
                heightMm: 1576,
                wheelbaseMm: 2639,
                bootLitres: 536,
                weightKg: 1185,
                tankLitres: 48
              },
              options: safetyComfort(['rear parking sensors', 'traffic sign recognition']),
              knownFor: ['sliding rear bench boosts versatility', 'good 536-litre boot for the class', 'efficient TCe engine', 'wide personalisation palette'],
              watchOut: ['90 PS feels underpowered on motorway', 'no AWD available', 'entry-trim cabin materials mixed', 'infotainment can lag on early units']
            },
            {
              id: 'renault-captur-mk2-etech160phev',
              name: 'E-Tech 160 Plug-in Hybrid',
              years: '2020–present',
              priceBand: '€14,000–€27,000 used',
              specs: {
                engine: '1.6-litre Atkinson petrol + 9.8 kWh battery + two electric motors',
                engineCode: 'H4M',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 160,
                powerKw: 118,
                torqueNm: 260,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 7.9,
                topSpeedKmh: 160,
                consumptionL100: 1.5,
                electricRangeKm: 65,
                co2Gkm: 34
              },
              dimensions: {
                lengthMm: 4227,
                widthMm: 1797,
                heightMm: 1576,
                wheelbaseMm: 2639,
                bootLitres: 379,
                weightKg: 1540,
                tankLitres: 35
              },
              options: safetyComfort(['adaptive cruise control', 'hands-free parking', 'Bose sound system']),
              knownFor: ['65 km electric range covers daily commutes', 'very low CO2 for company-car tax', 'strong performance vs non-hybrid rivals', 'first PHEV in subcompact SUV class'],
              watchOut: ['boot reduced vs non-PHEV due to battery', 'smaller fuel tank limits touring range', 'charging cable management awkward', 'significantly heavier than petrol']
            }
          ]
        }
      ]
    },
    {
      id: 'megane',
      name: 'Mégane',
      segment: 'Compact',
      description: 'A French family car institution, the Renault Mégane has anchored the compact segment for three decades. The fourth generation offered a broad powertrain range from efficient diesels to a potent RS hot hatch, combined with sharp styling and a class-competitive interior.',
      tags: ['compact', 'diesel', 'family', 'RS'],
      generations: [
        {
          id: 'megane-mk4',
          name: 'Mk4 (Fourth Generation)',
          years: '2015–2023',
          platform: 'Renault CMF-C/D',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The Mk4 Mégane matured the nameplate with a significantly more upmarket interior, a 7- or 8.7-inch portrait touchscreen, and a wide range of TCe petrol and dCi diesel engines. The RS Trophy variant holds multiple front-wheel-drive Nürburgring records.',
          heroImage: 'renault-megane-mk4',
          variants: [
            {
              id: 'renault-megane-mk4-13tce140',
              name: '1.3 TCe 140 PS',
              years: '2017–2023',
              priceBand: '€8,000–€20,000 used',
              specs: {
                engine: '1.3-litre turbocharged four-cylinder petrol',
                engineCode: 'H5H',
                displacementCc: 1332,
                cylinders: '4',
                powerHp: 140,
                powerKw: 103,
                torqueNm: 240,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.9,
                topSpeedKmh: 200,
                consumptionL100: 5.9,
                co2Gkm: 133
              },
              dimensions: {
                lengthMm: 4359,
                widthMm: 1814,
                heightMm: 1447,
                wheelbaseMm: 2669,
                bootLitres: 384,
                weightKg: 1340,
                tankLitres: 47
              },
              options: safetyComfort(['adaptive cruise control', 'lane centering assist', 'hands-free parking']),
              knownFor: ['sporty driving character', 'smooth 7-speed DCT', 'striking interior design', 'extensive ADAS options'],
              watchOut: ['DCT can jerk in slow stop-start traffic', 'smaller boot than segment average', 'shared engine with multiple brands', 'motorway fuel costs add up']
            },
            {
              id: 'renault-megane-mk4-15dci115',
              name: '1.5 dCi 115 PS',
              years: '2015–2023',
              priceBand: '€7,500–€18,000 used',
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
                acceleration0100: 10.9,
                topSpeedKmh: 192,
                consumptionL100: 3.9,
                co2Gkm: 100
              },
              dimensions: {
                lengthMm: 4359,
                widthMm: 1814,
                heightMm: 1447,
                wheelbaseMm: 2669,
                bootLitres: 384,
                weightKg: 1390,
                tankLitres: 47
              },
              options: safetyComfort(['full LED headlights', 'heated front seats', 'wireless charging']),
              knownFor: ['excellent real-world fuel economy', 'proven reliable K9K diesel', 'sub-100 g/km CO2', 'refined motorway cruiser'],
              watchOut: ['K9K timing chain can rattle when cold', 'DPF needs regular motorway runs', 'diesel less suitable for short urban trips', 'declining resale interest vs EV alternatives']
            },
            {
              id: 'renault-megane-mk4-rs300',
              name: 'Mégane R.S. Trophy 300 PS',
              years: '2018–2023',
              priceBand: '€22,000–€40,000 used',
              specs: {
                engine: '1.8-litre turbocharged four-cylinder petrol',
                engineCode: 'M5P',
                displacementCc: 1798,
                cylinders: '4',
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
              options: safetyComfort(['Torsen limited-slip differential', 'four-wheel steering', 'Brembo brake upgrade', 'Akrapovic titanium exhaust']),
              knownFor: ['Nürburgring FWD lap record holder', 'exceptional front-end agility via 4WS', 'involving driving experience', 'Brembo brakes provide strong fade-free stopping'],
              watchOut: ['firm ride uncomfortable on poor roads', 'high running and insurance costs', 'limited rear headroom', 'heavy nose under hard cornering']
            }
          ]
        }
      ]
    },
    {
      id: 'megane-etech',
      name: 'Mégane E-Tech Electric',
      segment: 'Compact electric',
      description: 'The Mégane E-Tech Electric is Renault\'s most significant EV — a purpose-built all-electric compact on the CMF-EV platform developed jointly with Nissan. It offers distinctive low-slung design, a premium cabin with the innovative OpenR Link infotainment system, and up to 470 km WLTP range.',
      tags: ['electric', 'EV', 'compact', 'premium'],
      generations: [
        {
          id: 'megane-etech-mk1',
          name: 'First Generation',
          years: '2022–present',
          platform: 'Renault-Nissan CMF-EV',
          bodyStyles: ['Hatchback'],
          summary: 'Built ground-up as an EV, the Mégane E-Tech uses a dedicated CMF-EV skateboard platform with a low floor and spacious cabin. The OpenR Link system pairs a 12.3-inch instrument display with a 12-inch portrait touchscreen running Google software natively. Available with 40 kWh or 60 kWh batteries.',
          heroImage: 'renault-megane-etech-mk1',
          variants: [
            {
              id: 'renault-megane-etech-mk1-40kwh130',
              name: '40 kWh 130 PS EV40',
              years: '2022–present',
              priceBand: '€18,000–€30,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 250,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 10.0,
                topSpeedKmh: 150,
                electricRangeKm: 300
              },
              dimensions: {
                lengthMm: 4200,
                widthMm: 1768,
                heightMm: 1505,
                wheelbaseMm: 2685,
                bootLitres: 440,
                weightKg: 1624
              },
              options: evComfort(['Google Maps with native EV routing', 'V2L vehicle-to-load', '100 kW DC fast charging']),
              knownFor: ['elegant low-slung proportions', 'class-leading OpenR Link infotainment', 'spacious interior on compact footprint', 'refined ride quality'],
              watchOut: ['sloping roofline limits rear headroom', 'range drops noticeably in cold weather', '100 kW DC max is modest vs rivals', 'smaller boot than Volkswagen ID.3']
            },
            {
              id: 'renault-megane-etech-mk1-60kwh220',
              name: '60 kWh 220 PS EV60',
              years: '2022–present',
              priceBand: '€22,000–€38,000 used',
              specs: {
                engine: 'Single front electric motor high-output',
                powerHp: 220,
                powerKw: 162,
                torqueNm: 300,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 7.4,
                topSpeedKmh: 160,
                electricRangeKm: 470
              },
              dimensions: {
                lengthMm: 4200,
                widthMm: 1768,
                heightMm: 1505,
                wheelbaseMm: 2685,
                bootLitres: 440,
                weightKg: 1731
              },
              options: evComfort(['Google Assistant built-in', 'adaptive cruise with stop-and-go', 'heat pump standard', '130 kW DC fast charging']),
              knownFor: ['470 km WLTP range covers most needs', 'brisk performance from standstill', 'Google-native maps and apps', 'heat pump standard on long-range'],
              watchOut: ['fast charging capped at 130 kW', 'heavy for a compact', 'no AWD available', 'range drops noticeably in winter']
            }
          ]
        }
      ]
    },
    {
      id: 'arkana',
      name: 'Arkana',
      segment: 'Compact coupe SUV',
      description: 'The Renault Arkana is a coupe-SUV bridging the Captur and Mégane in size, offering a sleek fastback silhouette and—in Europe—exclusively E-Tech hybrid powertrains. It targets style-conscious buyers who want efficiency and visual drama without needing to plug in.',
      tags: ['coupe-SUV', 'hybrid', 'style', 'E-Tech'],
      generations: [
        {
          id: 'arkana-mk1',
          name: 'First Generation',
          years: '2021–present',
          platform: 'Renault CMF-B extended',
          bodyStyles: ['Coupe', 'SUV'],
          summary: 'The Arkana arrived in Europe with E-Tech 145 full hybrid and 1.3 TCe petrol options. The E-Tech version uses the same multimode transmission as the Clio and Captur, offering genuine EV-mode running in city conditions without any plug. The fastback body trades some rear headroom for striking looks.',
          heroImage: 'renault-arkana-mk1',
          variants: [
            {
              id: 'renault-arkana-mk1-etech145',
              name: 'E-Tech 145 Hybrid',
              years: '2021–present',
              priceBand: '€16,000–€28,000 used',
              specs: {
                engine: '1.6-litre Atkinson-cycle petrol + two electric motors',
                engineCode: 'H4M',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 145,
                powerKw: 107,
                torqueNm: 205,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 9.4,
                topSpeedKmh: 175,
                consumptionL100: 4.8,
                co2Gkm: 109
              },
              dimensions: {
                lengthMm: 4568,
                widthMm: 1821,
                heightMm: 1571,
                wheelbaseMm: 2720,
                bootLitres: 513,
                weightKg: 1479,
                tankLitres: 47
              },
              options: safetyComfort(['adaptive cruise control', 'lane centering', 'wireless charging', '9.3-inch EASY LINK touchscreen']),
              knownFor: ['distinctive fastback coupe-SUV styling', 'class-beating city fuel economy', 'no-plug hybrid simplicity', 'generous boot for a coupe-SUV'],
              watchOut: ['rear headroom limited by sloping roofline', 'multimode gearbox hesitates on inclines', 'no AWD available', 'lower ground clearance than Captur']
            },
            {
              id: 'renault-arkana-mk1-13tce140',
              name: '1.3 TCe 140 PS DCT',
              years: '2021–present',
              priceBand: '€13,000–€23,000 used',
              specs: {
                engine: '1.3-litre turbocharged four-cylinder petrol',
                engineCode: 'H5H',
                displacementCc: 1332,
                cylinders: '4',
                powerHp: 140,
                powerKw: 103,
                torqueNm: 240,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 9.5,
                topSpeedKmh: 190,
                consumptionL100: 6.5,
                co2Gkm: 148
              },
              dimensions: {
                lengthMm: 4568,
                widthMm: 1821,
                heightMm: 1571,
                wheelbaseMm: 2720,
                bootLitres: 513,
                weightKg: 1375,
                tankLitres: 47
              },
              options: safetyComfort(['blind spot warning', 'rear cross-traffic alert', 'full-LED headlights']),
              knownFor: ['more affordable entry price', 'sporty 7-speed DCT', 'coupe-SUV visual impact', 'competitive petrol performance'],
              watchOut: ['higher CO2 than hybrid version', 'DCT can jerk at low speed', 'no hybrid efficiency in city', 'fuel costs higher vs E-Tech long-term']
            }
          ]
        }
      ]
    },
    {
      id: 'austral',
      name: 'Austral',
      segment: 'Compact SUV',
      description: 'The Renault Austral replaced the Kadjar in 2022, bringing a new CMF-CD platform with sophisticated E-Tech hybrid powertrains as standard. It features a 12-inch OpenR portrait screen and 12.3-inch digital dash, delivering premium technology to the compact SUV mainstream at competitive prices.',
      tags: ['SUV', 'hybrid', 'PHEV', 'tech'],
      generations: [
        {
          id: 'austral-mk1',
          name: 'First Generation',
          years: '2022–present',
          platform: 'Renault CMF-CD',
          bodyStyles: ['SUV'],
          summary: 'The Austral debuted with a 200 hp E-Tech full hybrid and a 300 hp E-Tech plug-in hybrid variant. Google-based OpenR Link infotainment is standard, and four-wheel steering is available on upper trims. The PHEV version adds AWD traction via a rear electric axle.',
          heroImage: 'renault-austral-mk1',
          variants: [
            {
              id: 'renault-austral-mk1-etech200',
              name: 'E-Tech 200 Full Hybrid',
              years: '2022–present',
              priceBand: '€22,000–€38,000 used',
              specs: {
                engine: '1.2-litre turbocharged three-cylinder petrol + two electric motors',
                engineCode: 'HR12',
                displacementCc: 1199,
                cylinders: '3',
                powerHp: 200,
                powerKw: 147,
                torqueNm: 230,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.4,
                topSpeedKmh: 180,
                consumptionL100: 5.0,
                co2Gkm: 114
              },
              dimensions: {
                lengthMm: 4510,
                widthMm: 1836,
                heightMm: 1628,
                wheelbaseMm: 2754,
                bootLitres: 500,
                weightKg: 1670,
                tankLitres: 50
              },
              options: safetyComfort(['four-wheel steering', 'adaptive cruise with stop-and-go', 'hands-free parking', 'panoramic sunroof']),
              knownFor: ['class-leading OpenR Link infotainment', 'efficient hybrid in mixed driving', 'optional four-wheel steering agility', 'comfortable long-distance ride'],
              watchOut: ['3-cylinder engine sounds busy at full load', 'heavy for a compact SUV', 'no AWD on full-hybrid trim', 'touch-sensitive controls frustrating while moving']
            },
            {
              id: 'renault-austral-mk1-etech300phev',
              name: 'E-Tech 300 Plug-in Hybrid 4WD',
              years: '2023–present',
              priceBand: '€28,000–€46,000 used',
              specs: {
                engine: '1.2-litre turbocharged three-cylinder + 22 kWh battery + two electric motors',
                engineCode: 'HR12',
                displacementCc: 1199,
                cylinders: '3',
                powerHp: 300,
                powerKw: 221,
                torqueNm: 380,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 6.4,
                topSpeedKmh: 200,
                consumptionL100: 1.4,
                electricRangeKm: 100,
                co2Gkm: 32
              },
              dimensions: {
                lengthMm: 4510,
                widthMm: 1836,
                heightMm: 1628,
                wheelbaseMm: 2754,
                bootLitres: 440,
                weightKg: 1940,
                tankLitres: 50
              },
              options: safetyComfort(['adaptive cruise with hands-free', 'matrix LED headlights', 'massaging front seats', 'Harman Kardon audio system']),
              knownFor: ['100 km electric range eliminates most fuel stops', 'AWD traction for all conditions', 'very low company-car CO2', 'strong real-world performance'],
              watchOut: ['significantly heavier than full hybrid', 'reduced boot due to battery pack', 'complex powertrain requires careful servicing', 'premium purchase price vs segment rivals']
            }
          ]
        }
      ]
    },
    {
      id: 'scenic-etech',
      name: 'Scénic E-Tech Electric',
      segment: 'Compact electric SUV',
      description: 'Reinvented as a fully electric compact SUV for 2024, the Scénic E-Tech Electric carries the famous Scénic name in a radically different form — purpose-built on CMF-EV with up to 620 km WLTP range. It won European Car of the Year 2024 and showcases Renault\'s sustainability credentials.',
      tags: ['electric', 'EV', 'SUV', 'Car of the Year'],
      generations: [
        {
          id: 'scenic-etech-mk1',
          name: 'First Generation Electric',
          years: '2024–present',
          platform: 'Renault-Nissan CMF-EV',
          bodyStyles: ['SUV'],
          summary: 'The fifth-generation Scénic abandons its MPV roots for a high-riding electric SUV on CMF-EV. Available with 60 kWh (170 hp) or 87 kWh (220 hp) batteries, the long-range variant achieves up to 620 km WLTP. Seats are made from recycled ocean plastics and sustainable materials feature throughout.',
          heroImage: 'renault-scenic-etech-mk1',
          variants: [
            {
              id: 'renault-scenic-etech-mk1-60kwh170',
              name: '60 kWh 170 PS EV60',
              years: '2024–present',
              priceBand: '€28,000–€40,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 170,
                powerKw: 125,
                torqueNm: 300,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.4,
                topSpeedKmh: 170,
                electricRangeKm: 430
              },
              dimensions: {
                lengthMm: 4470,
                widthMm: 1863,
                heightMm: 1571,
                wheelbaseMm: 2785,
                bootLitres: 545,
                weightKg: 1860
              },
              options: evComfort(['100 kW DC fast charging', 'sustainable recycled-material interior', 'OpenR Link with Google built-in']),
              knownFor: ['European Car of the Year 2024', 'sustainable recycled-materials interior', 'spacious SUV on compact footprint', 'usable 430 km real-world range'],
              watchOut: ['heavier than ICE segment rivals', '100 kW charge cap is modest', 'range drops sharply in cold weather', 'no AWD on standard battery']
            },
            {
              id: 'renault-scenic-etech-mk1-87kwh220',
              name: '87 kWh 220 PS EV87',
              years: '2024–present',
              priceBand: '€34,000–€48,000 used',
              specs: {
                engine: 'Single front electric motor high-output',
                powerHp: 220,
                powerKw: 162,
                torqueNm: 300,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 7.9,
                topSpeedKmh: 180,
                electricRangeKm: 620
              },
              dimensions: {
                lengthMm: 4470,
                widthMm: 1863,
                heightMm: 1571,
                wheelbaseMm: 2785,
                bootLitres: 545,
                weightKg: 1960
              },
              options: evComfort(['150 kW DC fast charging', 'V2G bidirectional charging', 'heat pump standard', 'panoramic glass roof']),
              knownFor: ['class-leading 620 km WLTP range', 'bidirectional V2G capability', '150 kW fast charging reduces stops', 'award-winning interior and exterior design'],
              watchOut: ['premium price point', 'very heavy affects handling', 'no AWD twin-motor option yet', 'large dimensions limit city parking']
            }
          ]
        }
      ]
    },
    {
      id: 'espace',
      name: 'Espace',
      segment: 'Large SUV',
      description: 'The original people-carrier has been reborn as a large seven-seat SUV for its sixth generation. The new Espace uses the Austral\'s CMF-CD platform stretched to accommodate an optional third row, paired exclusively with E-Tech hybrid powertrains and the OpenR Link infotainment system.',
      tags: ['SUV', 'seven-seat', 'hybrid', 'family'],
      generations: [
        {
          id: 'espace-mk6',
          name: 'Mk6 (Sixth Generation)',
          years: '2023–present',
          platform: 'Renault CMF-CD extended',
          bodyStyles: ['SUV', 'MPV'],
          summary: 'The sixth-generation Espace transforms into a large SUV with optional seven-seat capability via a fold-flat third row. It shares the Austral\'s E-Tech 200 hybrid drivetrain, OpenR Link infotainment, and four-wheel steering, at a significant step up in quality from its predecessors.',
          heroImage: 'renault-espace-mk6',
          variants: [
            {
              id: 'renault-espace-mk6-etech200',
              name: 'E-Tech 200 Hybrid 7-Seat',
              years: '2023–present',
              priceBand: '€28,000–€48,000 used',
              specs: {
                engine: '1.2-litre turbocharged three-cylinder petrol + two electric motors',
                engineCode: 'HR12',
                displacementCc: 1199,
                cylinders: '3',
                powerHp: 200,
                powerKw: 147,
                torqueNm: 230,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.6,
                topSpeedKmh: 175,
                consumptionL100: 5.2,
                co2Gkm: 118
              },
              dimensions: {
                lengthMm: 4724,
                widthMm: 1858,
                heightMm: 1680,
                wheelbaseMm: 2898,
                bootLitres: 750,
                weightKg: 1860,
                tankLitres: 55
              },
              options: safetyComfort(['optional 7-seat third row', 'four-wheel steering', 'panoramic sunroof', 'heads-up display', 'adaptive cruise hands-free']),
              knownFor: ['optional true 7-seat SUV configuration', 'generous 750-litre boot in 5-seat mode', 'smooth E-Tech hybrid drivetrain', 'impressive standard technology list'],
              watchOut: ['third row only suitable for children', 'heavy weight impacts fuel economy', 'large dimensions limit urban manoeuvring', 'premium price for the segment']
            }
          ]
        }
      ]
    },
    {
      id: 'kangoo',
      name: 'Kangoo',
      segment: 'Compact MPV / Van',
      description: 'The Renault Kangoo is a practical compact MPV and van that has been a European workhorse for over 25 years. The third generation brought a more refined interior, the innovative OpenSesame side door, and an all-electric E-Tech variant for last-mile urban delivery.',
      tags: ['MPV', 'van', 'practical', 'electric'],
      generations: [
        {
          id: 'kangoo-mk3',
          name: 'Mk3 (Third Generation)',
          years: '2021–present',
          platform: 'Renault CMF-C van',
          bodyStyles: ['MPV', 'Van'],
          summary: 'The third-generation Kangoo brought a much more car-like interior, an OpenSesame wide-opening side door, and an E-Tech Electric van with up to 300 km range. The passenger Kangoo MPV adds versatility for larger families needing practicality without a dedicated van.',
          heroImage: 'renault-kangoo-mk3',
          variants: [
            {
              id: 'renault-kangoo-mk3-13tce130',
              name: '1.3 TCe 130 PS Manual',
              years: '2021–present',
              priceBand: '€12,000–€25,000 used',
              specs: {
                engine: '1.3-litre turbocharged four-cylinder petrol',
                engineCode: 'H5H',
                displacementCc: 1332,
                cylinders: '4',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 240,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.3,
                topSpeedKmh: 182,
                consumptionL100: 6.2,
                co2Gkm: 140
              },
              dimensions: {
                lengthMm: 4486,
                widthMm: 1860,
                heightMm: 1810,
                wheelbaseMm: 2782,
                bootLitres: 775,
                weightKg: 1450,
                tankLitres: 52
              },
              options: safetyComfort(['OpenSesame side door', 'modular cargo floor', 'rear parking camera', 'Easy Link 8-inch screen']),
              knownFor: ['huge 775-litre practical loading volume', 'OpenSesame wide-opening side door', 'comfortable to drive despite van roots', 'flexible passenger or cargo layout'],
              watchOut: ['fuel economy worse than diesel version', 'road noise higher than car-based MPVs', 'hard plastics in van spec cabin', 'limited refinement vs passenger cars']
            },
            {
              id: 'renault-kangoo-mk3-etech-electric',
              name: 'E-Tech Electric 90 kW',
              years: '2022–present',
              priceBand: '€20,000–€35,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 122,
                powerKw: 90,
                torqueNm: 245,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 11.5,
                topSpeedKmh: 130,
                electricRangeKm: 300
              },
              dimensions: {
                lengthMm: 4486,
                widthMm: 1860,
                heightMm: 1810,
                wheelbaseMm: 2782,
                bootLitres: 775,
                weightKg: 1650
              },
              options: evComfort(['7.4 kW AC onboard charger', '80 kW DC fast charging', 'fleet telematics ready']),
              knownFor: ['zero-emission urban delivery', '300 km covers most trade routes', 'same practicality as diesel version', 'low running costs for fleet operators'],
              watchOut: ['top speed limited to 130 km/h on motorway', 'range falls sharply with heavy loads', 'commercial charging infrastructure gaps', 'higher purchase cost vs diesel equivalent']
            }
          ]
        }
      ]
    }
  ]
};
