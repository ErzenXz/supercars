import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const peugeot: CarMake = {
  id: 'peugeot',
  name: 'Peugeot',
  country: 'France',
  logoText: '🦁',
  models: [
    {
      id: '208',
      name: '208',
      segment: 'Supermini',
      description: 'The Peugeot 208 is the brand\'s award-winning supermini, renowned for its bold feline styling, class-leading i-Cockpit driver interface, and the unique ability to be ordered as an identical petrol, diesel, or fully electric e-208 — all sharing the same body.',
      tags: ['supermini', 'stylish', 'electric', 'efficient'],
      generations: [
        {
          id: '208-mk2',
          name: 'Mk2 (Second Generation)',
          years: '2019–present',
          platform: 'Stellantis CMP',
          bodyStyles: ['Hatchback'],
          summary: 'The second-generation 208 won European Car of the Year 2020 with its striking lion-claw design, innovative i-Cockpit interior, and was the first 208 offered as a pure EV (e-208). Three powertrains share one body: PureTech petrol, BlueHDi diesel, and the electric e-208.',
          heroImage: 'peugeot-208-mk2',
          variants: [
            {
              id: 'peugeot-208-mk2-12puretech100',
              name: '1.2 PureTech 100 PS Allure',
              years: '2019–present',
              priceBand: '€10,000–€20,000 used',
              specs: {
                engine: '1.2-litre turbocharged three-cylinder petrol',
                engineCode: 'EB2ADTS',
                displacementCc: 1199,
                cylinders: '3',
                powerHp: 100,
                powerKw: 74,
                torqueNm: 205,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.9,
                topSpeedKmh: 189,
                consumptionL100: 5.5,
                co2Gkm: 124
              },
              dimensions: {
                lengthMm: 4055,
                widthMm: 1745,
                heightMm: 1430,
                wheelbaseMm: 2538,
                bootLitres: 311,
                weightKg: 1107,
                tankLitres: 44
              },
              options: safetyComfort(['10-inch touchscreen', 'rear parking sensors', 'full LED headlights']),
              knownFor: ['award-winning i-Cockpit design', 'punchy for displacement', 'comfortable ride', 'low running costs'],
              watchOut: ['timing belt replacement cost on high-mileage examples', 'small boot for the class', 'i-Cockpit can divide opinion on visibility', 'cabin plastics basic on entry trims']
            },
            {
              id: 'peugeot-208-mk2-15bluehdi100',
              name: '1.5 BlueHDi 100 PS Active',
              years: '2019–present',
              priceBand: '€10,000–€19,000 used',
              specs: {
                engine: '1.5-litre turbodiesel four-cylinder',
                engineCode: 'DV5RD',
                displacementCc: 1499,
                cylinders: '4',
                powerHp: 100,
                powerKw: 74,
                torqueNm: 250,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.2,
                topSpeedKmh: 185,
                consumptionL100: 3.8,
                co2Gkm: 99
              },
              dimensions: {
                lengthMm: 4055,
                widthMm: 1745,
                heightMm: 1430,
                wheelbaseMm: 2538,
                bootLitres: 311,
                weightKg: 1198,
                tankLitres: 44
              },
              options: safetyComfort(['8-inch touchscreen', 'cruise control', 'rear parking sensors']),
              knownFor: ['exceptional real-world economy under 4 L/100km', 'strong diesel torque', 'low CO2 for tax savings', 'refined long-distance motorway comfort'],
              watchOut: ['DPF needs regular motorway runs to regenerate', 'EGR valve carbon buildup on city-only cars', 'heavier feel than petrol version', 'limited city appeal vs e-208']
            },
            {
              id: 'peugeot-208-mk2-e208-136',
              name: 'e-208 GT 136 PS Electric',
              years: '2019–present',
              priceBand: '€18,000–€32,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 260,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.1,
                topSpeedKmh: 150,
                electricRangeKm: 362
              },
              dimensions: {
                lengthMm: 4055,
                widthMm: 1745,
                heightMm: 1430,
                wheelbaseMm: 2538,
                bootLitres: 311,
                weightKg: 1530
              },
              options: evComfort(['heat pump', 'vehicle-to-load prep', '100 kW DC fast charging']),
              knownFor: ['excellent urban EV range for the class', 'immediate torque from standstill', 'very low running costs', 'cohesive i-Cockpit EV experience'],
              watchOut: ['real range reduced significantly in cold weather', 'DC charging speed modest vs newer rivals', 'heavier weight affects corner balance', 'charger network dependency for longer trips']
            }
          ]
        }
      ]
    },
    {
      id: '2008',
      name: '2008',
      segment: 'Subcompact SUV',
      description: 'The Peugeot 2008 is the brand\'s popular small SUV, sharing the 208\'s CMP platform with a raised body, larger boot, and the option of an all-electric e-2008. Bold styling, the i-Cockpit interior, and genuine practicality make it a top seller in its segment across Europe.',
      tags: ['SUV', 'city', 'electric', 'stylish'],
      generations: [
        {
          id: '2008-mk2',
          name: 'Mk2 (Second Generation)',
          years: '2019–present',
          platform: 'Stellantis CMP',
          bodyStyles: ['SUV'],
          summary: 'The second 2008 generation debuted on the new CMP platform with dramatic lion-claw exterior styling and the full i-Cockpit interior. Available with PureTech petrol, BlueHDi diesel, and all-electric e-2008 variants. The raised SUV body adds 43 litres of boot space over the 208.',
          heroImage: 'peugeot-2008-mk2',
          variants: [
            {
              id: 'peugeot-2008-mk2-12puretech130',
              name: '1.2 PureTech 130 PS Allure',
              years: '2019–present',
              priceBand: '€14,000–€25,000 used',
              specs: {
                engine: '1.2-litre turbocharged three-cylinder petrol',
                engineCode: 'EB2ADTS',
                displacementCc: 1199,
                cylinders: '3',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 230,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 9.3,
                topSpeedKmh: 205,
                consumptionL100: 6.2,
                co2Gkm: 141
              },
              dimensions: {
                lengthMm: 4300,
                widthMm: 1770,
                heightMm: 1550,
                wheelbaseMm: 2605,
                bootLitres: 434,
                weightKg: 1265,
                tankLitres: 44
              },
              options: safetyComfort(['10-inch touchscreen', 'rear camera', 'full LED headlamps']),
              knownFor: ['stylish i-Cockpit interior design', 'comfortable raised ride height', 'good 434-litre boot capacity', 'refined 8-speed automatic'],
              watchOut: ['timing belt intervals must be respected', 'PureTech known to consume oil on some units', 'no AWD option available', 'small rear windows reduce rearward visibility']
            },
            {
              id: 'peugeot-2008-mk2-e2008-136',
              name: 'e-2008 GT 136 PS Electric',
              years: '2019–present',
              priceBand: '€20,000–€35,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 260,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.5,
                topSpeedKmh: 150,
                electricRangeKm: 340
              },
              dimensions: {
                lengthMm: 4300,
                widthMm: 1770,
                heightMm: 1550,
                wheelbaseMm: 2605,
                bootLitres: 434,
                weightKg: 1585
              },
              options: evComfort(['heat pump optional', '100 kW DC fast charging', 'vehicle-to-load ready']),
              knownFor: ['340 km WLTP range for an urban SUV', 'identical practicality to petrol version', 'strong instant torque from standstill', 'very low urban running costs'],
              watchOut: ['heavier than petrol 2008 affects agility', 'winter range reduction significant', 'DC charge speed limited to 100 kW', 'heat pump not standard on base trims']
            }
          ]
        }
      ]
    },
    {
      id: '308',
      name: '308',
      segment: 'Compact',
      description: 'A mainstay of European family motoring, the Peugeot 308 competes in the C-segment with strong safety scores, efficient petrol and diesel engines, and an upscale i-Cockpit cabin. The third generation added plug-in hybrid capability and a distinctive new exterior with hidden door handles.',
      tags: ['compact', 'family', 'safe', 'efficient', 'PHEV'],
      generations: [
        {
          id: '308-mk2',
          name: 'Mk2 (Second Generation)',
          years: '2013–2021',
          platform: 'Stellantis EMP2',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The 308 Mk2 claimed Euro NCAP 5-star ratings and multiple Car of the Year nominations. It introduced the i-Cockpit layout to the compact segment and offered the frugal 1.5 BlueHDi and versatile 1.2 PureTech petrol, available as hatchback or SW estate.',
          heroImage: 'peugeot-308-mk2',
          variants: [
            {
              id: 'peugeot-308-mk2-15bluehdi130',
              name: '1.5 BlueHDi 130 PS GT Line',
              years: '2017–2021',
              priceBand: '€9,000–€19,000 used',
              specs: {
                engine: '1.5-litre turbodiesel four-cylinder',
                engineCode: 'DV5RC',
                displacementCc: 1499,
                cylinders: '4',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 300,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 9.7,
                topSpeedKmh: 209,
                consumptionL100: 4.3,
                co2Gkm: 113
              },
              dimensions: {
                lengthMm: 4253,
                widthMm: 1804,
                heightMm: 1456,
                wheelbaseMm: 2620,
                bootLitres: 470,
                weightKg: 1351,
                tankLitres: 53
              },
              options: safetyComfort(['9.7-inch capacitive touchscreen', 'full LED headlights', 'lane-keeping assist']),
              knownFor: ['generous 470-litre boot space', 'refined motorway cruiser', 'strong diesel torque', 'premium feel for the price'],
              watchOut: ['EGR valve fouling in urban use', 'DPF clogs on short-journey cars', 'some suspension noise at high mileage', 'touchscreen response can lag on pre-2019 cars']
            },
            {
              id: 'peugeot-308-mk2-12puretech130',
              name: '1.2 PureTech 130 PS EAT8',
              years: '2017–2021',
              priceBand: '€10,000–€20,000 used',
              specs: {
                engine: '1.2-litre turbocharged three-cylinder petrol',
                engineCode: 'EB2ADTS',
                displacementCc: 1199,
                cylinders: '3',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 230,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 9.5,
                topSpeedKmh: 207,
                consumptionL100: 5.8,
                co2Gkm: 133
              },
              dimensions: {
                lengthMm: 4253,
                widthMm: 1804,
                heightMm: 1456,
                wheelbaseMm: 2620,
                bootLitres: 470,
                weightKg: 1265,
                tankLitres: 53
              },
              options: safetyComfort(['9.7-inch touchscreen', 'wireless charging', 'adaptive cruise control']),
              knownFor: ['punchy output for a 1.2 three-cylinder', 'smooth 8-speed automatic gearbox', 'light and pleasant to drive', 'good value used pricing'],
              watchOut: ['PureTech timing belt intervals critical', 'oil consumption reported on some examples', 'turbo boost lag under 1,500 rpm', 'auto gearbox occasionally hunts on hills']
            }
          ]
        },
        {
          id: '308-mk3',
          name: 'Mk3 (Third Generation)',
          years: '2021–present',
          platform: 'Stellantis EMP2 evolved',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The third-generation 308 introduced a completely new exterior with concealed door handles, a dramatic panoramic i-Cockpit with dual screens, and plug-in hybrid powertrains. It earned 5-star Euro NCAP and offers petrol, diesel, and PHEV options for hatchback and SW estate.',
          heroImage: 'peugeot-308-mk3',
          variants: [
            {
              id: 'peugeot-308-mk3-12puretech130',
              name: '1.2 PureTech 130 PS Allure',
              years: '2021–present',
              priceBand: '€17,000–€28,000 used',
              specs: {
                engine: '1.2-litre turbocharged three-cylinder petrol',
                engineCode: 'EB2ADTS',
                displacementCc: 1199,
                cylinders: '3',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 230,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 9.4,
                topSpeedKmh: 207,
                consumptionL100: 6.1,
                co2Gkm: 140
              },
              dimensions: {
                lengthMm: 4362,
                widthMm: 1852,
                heightMm: 1444,
                wheelbaseMm: 2675,
                bootLitres: 412,
                weightKg: 1358,
                tankLitres: 54
              },
              options: safetyComfort(['10-inch panoramic i-Cockpit', 'adaptive LED matrix lights', 'night-vision camera prep']),
              knownFor: ['dramatic hidden-handle exterior styling', 'class-leading dual-screen interior design', 'smooth 8-speed automatic', 'strong Euro NCAP safety package'],
              watchOut: ['timing belt service interval critical on PureTech', 'oil consumption on some examples', 'touchscreen controls most functions blocking physical buttons', 'stiff ride on 18-inch wheels']
            },
            {
              id: 'peugeot-308-mk3-hybrid225phev',
              name: 'Hybrid 225 PS e-EAT8 PHEV',
              years: '2022–present',
              priceBand: '€22,000–€38,000 used',
              specs: {
                engine: '1.6-litre PureTech turbo petrol + 110 kW electric motor + 12.4 kWh battery',
                engineCode: 'EP6FDTX',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 225,
                powerKw: 165,
                torqueNm: 360,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 7.5,
                topSpeedKmh: 225,
                consumptionL100: 1.3,
                electricRangeKm: 60,
                co2Gkm: 29
              },
              dimensions: {
                lengthMm: 4362,
                widthMm: 1852,
                heightMm: 1444,
                wheelbaseMm: 2675,
                bootLitres: 361,
                weightKg: 1755,
                tankLitres: 43
              },
              options: safetyComfort(['adaptive cruise with stop-and-go', 'panoramic roof', 'Focal premium audio', 'night-vision camera']),
              knownFor: ['60 km electric range covers most daily commutes', 'very low CO2 for company-car tax', 'strong combined performance', 'premium dual-screen interior'],
              watchOut: ['boot reduced 50 litres vs petrol due to battery', 'significantly heavier than petrol version', 'high purchase price', 'battery range degrades over years if not maintained']
            }
          ]
        }
      ]
    },
    {
      id: '408',
      name: '408',
      segment: 'Compact fastback SUV',
      description: 'The Peugeot 408 is a bold fastback-SUV crossover that sits between a saloon and an SUV in execution. Available exclusively with plug-in hybrid and petrol powertrains, it targets buyers who want distinctive styling and low running costs in a practical four-door package.',
      tags: ['fastback', 'SUV', 'PHEV', 'design-led'],
      generations: [
        {
          id: '408-mk1',
          name: 'First Generation',
          years: '2022–present',
          platform: 'Stellantis EMP2 evolved',
          bodyStyles: ['Hatchback', 'SUV'],
          summary: 'The new 408 is a high-riding fastback that combines SUV ground clearance with a coupé-like silhouette. It features the panoramic i-Cockpit interior and offers three powertrains: 1.2 PureTech 130, plug-in hybrid 180, and plug-in hybrid 225.',
          heroImage: 'peugeot-408-mk1',
          variants: [
            {
              id: 'peugeot-408-mk1-12puretech130',
              name: '1.2 PureTech 130 PS EAT8',
              years: '2022–present',
              priceBand: '€20,000–€32,000 used',
              specs: {
                engine: '1.2-litre turbocharged three-cylinder petrol',
                engineCode: 'EB2ADTS',
                displacementCc: 1199,
                cylinders: '3',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 230,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 9.7,
                topSpeedKmh: 207,
                consumptionL100: 6.3,
                co2Gkm: 143
              },
              dimensions: {
                lengthMm: 4685,
                widthMm: 1848,
                heightMm: 1500,
                wheelbaseMm: 2785,
                bootLitres: 536,
                weightKg: 1390,
                tankLitres: 54
              },
              options: safetyComfort(['10-inch i-Cockpit screen', 'full LED matrix headlights', 'blind spot monitoring', 'rear cross-traffic alert']),
              knownFor: ['bold crossover fastback styling', 'excellent 536-litre boot', 'smooth 8-speed automatic', 'class-leading interior design'],
              watchOut: ['PureTech timing belt service essential', 'oil consumption on some examples', 'high roofline limits rear headroom', 'no AWD option']
            },
            {
              id: 'peugeot-408-mk1-hybrid225phev',
              name: 'Hybrid 225 PS PHEV e-EAT8',
              years: '2022–present',
              priceBand: '€27,000–€42,000 used',
              specs: {
                engine: '1.6-litre PureTech turbo + 110 kW electric motor + 12.4 kWh battery',
                engineCode: 'EP6FDTX',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 225,
                powerKw: 165,
                torqueNm: 360,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 7.4,
                topSpeedKmh: 230,
                consumptionL100: 1.2,
                electricRangeKm: 60,
                co2Gkm: 28
              },
              dimensions: {
                lengthMm: 4685,
                widthMm: 1848,
                heightMm: 1500,
                wheelbaseMm: 2785,
                bootLitres: 471,
                weightKg: 1760,
                tankLitres: 43
              },
              options: safetyComfort(['adaptive cruise with hands-free lane change', 'night-vision camera', 'Focal premium audio', 'panoramic glass roof']),
              knownFor: ['60 km electric range for daily driving', 'exceptionally low 28 g/km CO2', 'strong 225 hp combined output', 'distinctive long fastback profile'],
              watchOut: ['heavier than petrol version affects agility', 'boot reduced by 65 litres vs petrol', 'high purchase premium', 'charging cable storage awkward']
            }
          ]
        }
      ]
    },
    {
      id: '508',
      name: '508',
      segment: 'Large fastback / Wagon',
      description: 'The Peugeot 508 is the brand\'s top executive fastback, offering near-premium quality at mainstream prices. Available as a fastback saloon or SW estate, it features petrol, diesel, and plug-in hybrid powertrains including the range-topping 508 PSE with 360 hp.',
      tags: ['executive', 'fastback', 'diesel', 'PHEV', 'estate'],
      generations: [
        {
          id: '508-mk2',
          name: 'Mk2 (Second Generation)',
          years: '2018–present',
          platform: 'Stellantis EMP2',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The second-generation 508 fastback and SW estate brought a genuinely distinctive design, flush door handles, a panoramic i-Cockpit, and a wide powertrain range. The Plug-in Hybrid variants became increasingly important for fleet customers. The 508 PSE arrives with 360 hp AWD.',
          heroImage: 'peugeot-508-mk2',
          variants: [
            {
              id: 'peugeot-508-mk2-15bluehdi130',
              name: '1.5 BlueHDi 130 PS EAT8',
              years: '2018–present',
              priceBand: '€16,000–€28,000 used',
              specs: {
                engine: '1.5-litre turbodiesel four-cylinder',
                engineCode: 'DV5RC',
                displacementCc: 1499,
                cylinders: '4',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 300,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 10.6,
                topSpeedKmh: 210,
                consumptionL100: 4.6,
                co2Gkm: 120
              },
              dimensions: {
                lengthMm: 4750,
                widthMm: 1859,
                heightMm: 1403,
                wheelbaseMm: 2793,
                bootLitres: 487,
                weightKg: 1510,
                tankLitres: 62
              },
              options: safetyComfort(['10-inch i-Cockpit', 'full LED matrix headlights', 'adaptive cruise control', 'hands-free parking']),
              knownFor: ['striking flush-handle fastback design', 'genuine executive interior quality', 'very efficient diesel with 62-litre tank', 'smooth 8-speed automatic'],
              watchOut: ['low roofline limits rear headroom', 'EGR fouling on city-heavy use', 'DPF regeneration required regularly', 'repairs can be costly outside warranty']
            },
            {
              id: 'peugeot-508-mk2-pse360phev',
              name: '508 PSE 360 PS PHEV AWD',
              years: '2021–present',
              priceBand: '€32,000–€52,000 used',
              specs: {
                engine: '1.6-litre PureTech + front and rear electric motors + 11.8 kWh battery',
                engineCode: 'EP6FDTX',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 360,
                powerKw: 265,
                torqueNm: 520,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.2,
                topSpeedKmh: 250,
                consumptionL100: 1.7,
                electricRangeKm: 42,
                co2Gkm: 40
              },
              dimensions: {
                lengthMm: 4750,
                widthMm: 1859,
                heightMm: 1403,
                wheelbaseMm: 2793,
                bootLitres: 390,
                weightKg: 1970,
                tankLitres: 43
              },
              options: safetyComfort(['adaptive matrix LED', 'Focal Utopia premium audio', 'Alcantara sports seats', 'sport suspension tuning']),
              knownFor: ['360 hp AWD performance for executive class', '5.2-second 0-100 km/h sprint', 'distinctive PSE sport styling package', 'low CO2 for company-car drivers'],
              watchOut: ['42 km electric range limited vs full PHEV rivals', 'significantly heavier than standard 508', 'boot reduced substantially by battery', 'very high purchase price']
            }
          ]
        }
      ]
    },
    {
      id: '3008',
      name: '3008',
      segment: 'Compact SUV',
      description: 'One of Peugeot\'s most successful models globally, the 3008 offers a genuinely premium feel, spacious interior, and efficient hybrid powertrains in a bold SUV package. The second generation won European Car of the Year 2017; the third generation transitions fully to electric.',
      tags: ['SUV', 'family', 'premium', 'hybrid', 'Electric'],
      generations: [
        {
          id: '3008-mk2',
          name: 'Mk2 (Second Generation)',
          years: '2016–2024',
          platform: 'Stellantis EMP2',
          bodyStyles: ['SUV'],
          summary: 'European Car of the Year 2017, the 3008 Mk2 redefined the family SUV segment with a truly premium interior, strong safety technology, and a range of efficient engines including plug-in hybrid from 2019. Grip Control with hill descent makes it surprisingly capable off the beaten track.',
          heroImage: 'peugeot-3008-mk2',
          variants: [
            {
              id: 'peugeot-3008-mk2-15bluehdi130',
              name: '1.5 BlueHDi 130 PS Active',
              years: '2016–2024',
              priceBand: '€13,000–€25,000 used',
              specs: {
                engine: '1.5-litre turbodiesel four-cylinder',
                engineCode: 'DV5RC',
                displacementCc: 1499,
                cylinders: '4',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 300,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.3,
                topSpeedKmh: 200,
                consumptionL100: 4.8,
                co2Gkm: 126
              },
              dimensions: {
                lengthMm: 4447,
                widthMm: 1841,
                heightMm: 1624,
                wheelbaseMm: 2675,
                bootLitres: 520,
                weightKg: 1476,
                tankLitres: 53
              },
              options: safetyComfort(['8-inch touchscreen', 'rear camera', 'Grip Control', 'roof rails']),
              knownFor: ['genuinely premium cabin for the price', 'excellent 520-litre boot space', 'comfortable long-distance ride quality', 'strong used value retention'],
              watchOut: ['DPF issues on urban-only use', 'EGR fouling at high mileage', 'infotainment can lag on early cars', 'limited ground clearance for genuine off-road']
            },
            {
              id: 'peugeot-3008-mk2-hybrid225phev',
              name: 'Hybrid 225 PS e-EAT8 PHEV',
              years: '2019–2024',
              priceBand: '€20,000–€36,000 used',
              specs: {
                engine: '1.6-litre PureTech + 110 kW electric motor + 13.2 kWh battery',
                engineCode: 'EP6FDTX',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 225,
                powerKw: 165,
                torqueNm: 360,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 7.6,
                topSpeedKmh: 225,
                consumptionL100: 1.5,
                electricRangeKm: 58,
                co2Gkm: 34
              },
              dimensions: {
                lengthMm: 4447,
                widthMm: 1841,
                heightMm: 1624,
                wheelbaseMm: 2675,
                bootLitres: 395,
                weightKg: 1845,
                tankLitres: 43
              },
              options: safetyComfort(['adaptive cruise control', 'night-vision camera', 'panoramic roof', 'Focal premium audio']),
              knownFor: ['low company-car tax CO2 rating', 'strong combined performance', 'electric-only urban commuting', 'premium-feel throughout'],
              watchOut: ['boot reduced to 395 litres (battery under floor)', 'heavier weight affects dynamics', 'high purchase price', 'battery range degrades over years']
            }
          ]
        },
        {
          id: '3008-mk3',
          name: 'Mk3 E-3008 (Third Generation)',
          years: '2024–present',
          platform: 'Stellantis STLA Medium',
          bodyStyles: ['SUV'],
          summary: 'The third-generation 3008 transitions fully to the STLA Medium EV platform as the e-3008, offering 73 kWh or 98 kWh battery options with up to 700 km range. A dual-motor AWD variant is available. The interior gains a panoramic i-Cockpit with the widest screen arrangement in the segment.',
          heroImage: 'peugeot-3008-mk3',
          variants: [
            {
              id: 'peugeot-3008-mk3-e3008-210',
              name: 'e-3008 210 PS Long Range',
              years: '2024–present',
              priceBand: '€34,000–€50,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 210,
                powerKw: 157,
                torqueNm: 345,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 8.8,
                topSpeedKmh: 170,
                electricRangeKm: 700
              },
              dimensions: {
                lengthMm: 4542,
                widthMm: 1895,
                heightMm: 1641,
                wheelbaseMm: 2895,
                bootLitres: 520,
                weightKg: 2014
              },
              options: evComfort(['160 kW DC fast charging', 'V2L vehicle-to-load', 'bidirectional charging', 'panoramic i-Cockpit 21-inch screen']),
              knownFor: ['class-leading 700 km WLTP range', 'panoramic 21-inch i-Cockpit screen', 'comfortable spacious SUV interior', '160 kW DC fast charging capability'],
              watchOut: ['very heavy at over 2 tonnes', 'large dimensions affect urban manoeuvrability', 'no AWD on base battery', 'premium pricing in segment']
            }
          ]
        }
      ]
    },
    {
      id: '5008',
      name: '5008',
      segment: 'Large SUV / 7-seat',
      description: 'The Peugeot 5008 is the brand\'s large seven-seat SUV, offering a premium interior, practical third-row seating, and a broad powertrain range including BlueHDi diesel and plug-in hybrid. Praised for its genuine interior quality and spacious second and third rows.',
      tags: ['SUV', 'seven-seat', 'family', 'diesel', 'spacious'],
      generations: [
        {
          id: '5008-mk2',
          name: 'Mk2 (Second Generation)',
          years: '2016–2024',
          platform: 'Stellantis EMP2',
          bodyStyles: ['SUV'],
          summary: 'The Mk2 5008 transformed from an MPV to a proper SUV with optional seven seats, a premium i-Cockpit interior, and a range of efficient engines. Grip Control with mud/sand/snow modes adds light off-road capability. Available in petrol, diesel, and plug-in hybrid.',
          heroImage: 'peugeot-5008-mk2',
          variants: [
            {
              id: 'peugeot-5008-mk2-15bluehdi130',
              name: '1.5 BlueHDi 130 PS Active',
              years: '2017–2024',
              priceBand: '€16,000–€30,000 used',
              specs: {
                engine: '1.5-litre turbodiesel four-cylinder',
                engineCode: 'DV5RC',
                displacementCc: 1499,
                cylinders: '4',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 300,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.0,
                topSpeedKmh: 195,
                consumptionL100: 5.1,
                co2Gkm: 133
              },
              dimensions: {
                lengthMm: 4641,
                widthMm: 1844,
                heightMm: 1646,
                wheelbaseMm: 2840,
                bootLitres: 702,
                weightKg: 1567,
                tankLitres: 53
              },
              options: safetyComfort(['7-seat third row', 'Grip Control', 'panoramic roof', 'rear privacy glass']),
              knownFor: ['true 7-seat SUV at mainstream price', 'generous 702-litre boot in 5-seat mode', 'premium i-Cockpit interior quality', 'smooth refined diesel motorway cruiser'],
              watchOut: ['third row of seats suitable for children only', 'EGR valve fouling in city use', 'DPF needs motorway runs', 'no AWD available in EU spec']
            },
            {
              id: 'peugeot-5008-mk2-20bluehdi180',
              name: '2.0 BlueHDi 180 PS EAT8',
              years: '2017–2024',
              priceBand: '€20,000–€36,000 used',
              specs: {
                engine: '2.0-litre turbodiesel four-cylinder',
                engineCode: 'DW10',
                displacementCc: 1997,
                cylinders: '4',
                powerHp: 180,
                powerKw: 132,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 9.1,
                topSpeedKmh: 215,
                consumptionL100: 5.5,
                co2Gkm: 144
              },
              dimensions: {
                lengthMm: 4641,
                widthMm: 1844,
                heightMm: 1646,
                wheelbaseMm: 2840,
                bootLitres: 702,
                weightKg: 1685,
                tankLitres: 53
              },
              options: safetyComfort(['7-seat third row', 'full LED matrix headlights', 'adaptive cruise control', 'massaging front seats']),
              knownFor: ['strong 400 Nm torque for towing', 'smooth 8-speed automatic with 7 seats', 'refined effortless motorway pace', 'premium specification level'],
              watchOut: ['higher CO2 than 1.5 BlueHDi', 'DW10 diesel more expensive to service', 'heavier weight vs 1.5 variant', 'higher fuel costs on longer runs']
            }
          ]
        }
      ]
    }
  ]
};
