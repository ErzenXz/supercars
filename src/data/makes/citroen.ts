import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const citroen: CarMake = {
  id: 'citroen',
  name: 'Citroën',
  country: 'France',
  logoText: 'C',
  models: [
    {
      id: 'c3',
      name: 'C3',
      segment: 'Supermini',
      description: 'The Citroën C3 is the brand\'s volume supermini, celebrated for its distinctive design, soft and comfortable ride, and the new ë-C3 fully electric version that brings EV motoring to a genuinely affordable price point. The Mk4 generation offers a choice of petrol or electric on the same body.',
      tags: ['supermini', 'comfortable', 'affordable', 'electric'],
      generations: [
        {
          id: 'c3-mk3',
          name: 'Mk3 (Third Generation)',
          years: '2016–2023',
          platform: 'Stellantis PF1',
          bodyStyles: ['Hatchback'],
          summary: 'The Mk3 C3 distinguished itself with bold personalisation options including contrasting roof colours, a wide colour palette, and the trademark Airbump door protectors. The 1.2 PureTech 82 and 110 engines provide city-friendly efficiency with Citroën\'s signature pillowy ride quality.',
          heroImage: 'citroen-c3-mk3',
          variants: [
            {
              id: 'citroen-c3-mk3-12puretech83',
              name: '1.2 PureTech 83 PS',
              years: '2016–2023',
              priceBand: '€7,000–€15,000 used',
              specs: {
                engine: '1.2-litre turbocharged three-cylinder petrol',
                engineCode: 'EB2DT',
                displacementCc: 1199,
                cylinders: '3',
                powerHp: 83,
                powerKw: 61,
                torqueNm: 160,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 5,
                drive: 'FWD',
                acceleration0100: 13.0,
                topSpeedKmh: 170,
                consumptionL100: 5.0,
                co2Gkm: 114
              },
              dimensions: {
                lengthMm: 3995,
                widthMm: 1748,
                heightMm: 1477,
                wheelbaseMm: 2537,
                bootLitres: 300,
                weightKg: 1071,
                tankLitres: 45
              },
              options: safetyComfort(['Airbump door protectors', 'ConnectNav 7-inch screen', 'rear parking sensors']),
              knownFor: ['signature pillowy-soft Citroën ride', 'bold personalisation with two-tone roof', 'Airbump scuff protection', 'cheerful easy-driving character'],
              watchOut: ['83 PS feels slightly breathless on motorway', 'PureTech timing belt service required', 'small boot for the class', 'limited rear legroom']
            },
            {
              id: 'citroen-c3-mk3-12puretech110',
              name: '1.2 PureTech 110 PS EAT6',
              years: '2017–2023',
              priceBand: '€9,000–€18,000 used',
              specs: {
                engine: '1.2-litre turbocharged three-cylinder petrol',
                engineCode: 'EB2ADTS',
                displacementCc: 1199,
                cylinders: '3',
                powerHp: 110,
                powerKw: 81,
                torqueNm: 205,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.6,
                topSpeedKmh: 190,
                consumptionL100: 5.5,
                co2Gkm: 124
              },
              dimensions: {
                lengthMm: 3995,
                widthMm: 1748,
                heightMm: 1477,
                wheelbaseMm: 2537,
                bootLitres: 300,
                weightKg: 1134,
                tankLitres: 45
              },
              options: safetyComfort(['ConnectNav 7-inch screen', 'rearview camera', 'full LED headlights', 'wireless charging']),
              knownFor: ['smooth 6-speed auto ideal for city', 'punchy for city driving', 'comfortable supermini ride', 'distinctive roof contrast options'],
              watchOut: ['PureTech timing belt intervals critical', '6-speed auto hunts on hilly roads', 'small boot for the class', 'auto adds weight vs manual']
            }
          ]
        },
        {
          id: 'c3-mk4',
          name: 'Mk4 (Fourth Generation)',
          years: '2024–present',
          platform: 'Stellantis eSmart',
          bodyStyles: ['Hatchback'],
          summary: 'The Mk4 C3 launched with both a 1.2 PureTech 100 petrol and the all-electric ë-C3 on the same eSmart platform. The ë-C3 targets the affordable EV mass market at under €25,000, with a 44 kWh battery and 326 km WLTP range. Both share a more upright, spacious SUV-inspired silhouette.',
          heroImage: 'citroen-c3-mk4',
          variants: [
            {
              id: 'citroen-c3-mk4-12puretech100',
              name: '1.2 PureTech 100 PS',
              years: '2024–present',
              priceBand: '€15,000–€22,000 used',
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
                acceleration0100: 10.5,
                topSpeedKmh: 186,
                consumptionL100: 5.4,
                co2Gkm: 122
              },
              dimensions: {
                lengthMm: 4015,
                widthMm: 1755,
                heightMm: 1577,
                wheelbaseMm: 2540,
                bootLitres: 310,
                weightKg: 1115,
                tankLitres: 44
              },
              options: safetyComfort(['10.25-inch infotainment screen', 'rear camera', 'speed sign recognition']),
              knownFor: ['raised new-generation SUV-inspired styling', 'more upright cabin improves headroom', 'Citroën Progressive Hydraulic Cushions ride', 'affordable new price'],
              watchOut: ['small boot unchanged from Mk3', 'PureTech timing belt intervals essential', 'no AWD option', 'limited driver customisation vs Mk3']
            },
            {
              id: 'citroen-c3-mk4-ec3-113',
              name: 'ë-C3 113 PS Electric',
              years: '2024–present',
              priceBand: '€18,000–€26,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 113,
                powerKw: 83,
                torqueNm: 120,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 11.0,
                topSpeedKmh: 135,
                electricRangeKm: 326
              },
              dimensions: {
                lengthMm: 4015,
                widthMm: 1755,
                heightMm: 1577,
                wheelbaseMm: 2540,
                bootLitres: 310,
                weightKg: 1416
              },
              options: evComfort(['100 kW DC fast charging', 'heated front seats', 'wireless smartphone charging']),
              knownFor: ['most affordable new EV in Europe at launch', '326 km WLTP range for daily use', 'same spacious new body as petrol version', 'low urban running costs'],
              watchOut: ['top speed limited to 135 km/h', 'boot smaller than class average', 'range below par in cold weather', 'no heat pump standard on base trim']
            }
          ]
        }
      ]
    },
    {
      id: 'c3-aircross',
      name: 'C3 Aircross',
      segment: 'Subcompact SUV',
      description: 'The Citroën C3 Aircross is a compact crossover that brings extra height, roof rails, and versatile interior modularity to the C3 platform. Known for its modular second row, large boot, and Citroën\'s famously comfortable ride, it is a practical and affordable family choice.',
      tags: ['SUV', 'compact', 'practical', 'family'],
      generations: [
        {
          id: 'c3-aircross-mk2',
          name: 'Mk2 (Second Generation)',
          years: '2024–present',
          platform: 'Stellantis eSmart',
          bodyStyles: ['SUV'],
          summary: 'The new C3 Aircross grows up on the eSmart platform with a longer wheelbase, genuine 5+2 seating with a usable third row for children, and both petrol and electric powertrains. It shares the ë-C3 electric drivetrain and replaces the original C3 Aircross with a significantly more spacious offering.',
          heroImage: 'citroen-c3-aircross-mk2',
          variants: [
            {
              id: 'citroen-c3-aircross-mk2-12puretech100',
              name: '1.2 PureTech 100 PS',
              years: '2024–present',
              priceBand: '€17,000–€26,000 used',
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
                acceleration0100: 11.2,
                topSpeedKmh: 183,
                consumptionL100: 5.7,
                co2Gkm: 129
              },
              dimensions: {
                lengthMm: 4395,
                widthMm: 1795,
                heightMm: 1660,
                wheelbaseMm: 2671,
                bootLitres: 460,
                weightKg: 1250,
                tankLitres: 44
              },
              options: safetyComfort(['10.25-inch infotainment screen', 'roof rails standard', 'rear privacy glass', 'rear camera']),
              knownFor: ['optional 7-seat layout with 3rd row', 'generous 460-litre boot in 5-seat mode', 'Citroën signature soft ride quality', 'practical roof rails standard'],
              watchOut: ['third row very tight even for children', 'no AWD option', 'PureTech timing belt service required', '100 PS feels modest when loaded']
            },
            {
              id: 'citroen-c3-aircross-mk2-ec3-aircross-113',
              name: 'ë-C3 Aircross 113 PS Electric',
              years: '2024–present',
              priceBand: '€22,000–€32,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 113,
                powerKw: 83,
                torqueNm: 120,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 11.5,
                topSpeedKmh: 135,
                electricRangeKm: 310
              },
              dimensions: {
                lengthMm: 4395,
                widthMm: 1795,
                heightMm: 1660,
                wheelbaseMm: 2671,
                bootLitres: 460,
                weightKg: 1550
              },
              options: evComfort(['100 kW DC fast charging', 'heated seats', '7-seat third-row option']),
              knownFor: ['affordable electric family SUV', '310 km WLTP range for family use', '7-seat EV option at accessible price', 'same soft comfortable ride as petrol'],
              watchOut: ['135 km/h top speed limits some overtaking', 'range drops in cold weather', 'third row reduces range when loaded', 'no AWD option available']
            }
          ]
        }
      ]
    },
    {
      id: 'c4',
      name: 'C4',
      segment: 'Compact',
      description: 'The Citroën C4 is the brand\'s compact offering in an unconventional SUV-hatchback crossover body. Available in petrol, diesel, and all-electric ë-C4 forms on the CMP platform, it combines distinctive styling, Citroën\'s acclaimed ride quality, and progressive safety technology.',
      tags: ['compact', 'crossover', 'electric', 'comfortable'],
      generations: [
        {
          id: 'c4-mk3',
          name: 'Mk3 (Third Generation)',
          years: '2020–present',
          platform: 'Stellantis CMP',
          bodyStyles: ['Hatchback', 'SUV'],
          summary: 'The third-generation C4 adopts a crossover-hatchback body that is neither a pure SUV nor a traditional hatchback. It launched simultaneously with the ë-C4 electric version, sharing an identical body. Progressive Hydraulic Cushions damping delivers an outstandingly smooth ride for the class.',
          heroImage: 'citroen-c4-mk3',
          variants: [
            {
              id: 'citroen-c4-mk3-12puretech130',
              name: '1.2 PureTech 130 PS EAT8',
              years: '2020–present',
              priceBand: '€14,000–€24,000 used',
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
                consumptionL100: 5.9,
                co2Gkm: 134
              },
              dimensions: {
                lengthMm: 4360,
                widthMm: 1800,
                heightMm: 1500,
                wheelbaseMm: 2670,
                bootLitres: 380,
                weightKg: 1289,
                tankLitres: 50
              },
              options: safetyComfort(['10-inch touchscreen', 'Highway Driver Assist', 'full LED headlights', 'rear camera']),
              knownFor: ['best-in-class ride comfort via PHC dampers', 'smooth 8-speed automatic', 'generous standard safety equipment', 'distinctive SUV-crossover silhouette'],
              watchOut: ['PureTech timing belt intervals critical', 'sloping roofline limits rear headroom', 'smaller boot than traditional hatchback rivals', 'no AWD option']
            },
            {
              id: 'citroen-c4-mk3-15bluehdi110',
              name: '1.5 BlueHDi 110 PS',
              years: '2020–present',
              priceBand: '€13,000–€22,000 used',
              specs: {
                engine: '1.5-litre turbodiesel four-cylinder',
                engineCode: 'DV5RD',
                displacementCc: 1499,
                cylinders: '4',
                powerHp: 110,
                powerKw: 81,
                torqueNm: 250,
                fuel: 'Diesel',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.5,
                topSpeedKmh: 192,
                consumptionL100: 4.3,
                co2Gkm: 112
              },
              dimensions: {
                lengthMm: 4360,
                widthMm: 1800,
                heightMm: 1500,
                wheelbaseMm: 2670,
                bootLitres: 380,
                weightKg: 1359,
                tankLitres: 50
              },
              options: safetyComfort(['10-inch infotainment', 'rear parking sensors', 'cruise control']),
              knownFor: ['excellent real-world diesel economy', 'long motorway range on one tank', 'smooth progressive ride quality', 'proven BlueHDi reliability'],
              watchOut: ['DPF needs regular motorway regeneration', 'EGR fouling on short-journey cars', 'heavier than petrol equivalent', 'diesel less relevant for urban use']
            },
            {
              id: 'citroen-c4-mk3-ec4-136',
              name: 'ë-C4 136 PS Electric',
              years: '2020–present',
              priceBand: '€18,000–€32,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 260,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 9.7,
                topSpeedKmh: 150,
                electricRangeKm: 355
              },
              dimensions: {
                lengthMm: 4360,
                widthMm: 1800,
                heightMm: 1500,
                wheelbaseMm: 2670,
                bootLitres: 380,
                weightKg: 1596
              },
              options: evComfort(['100 kW DC fast charging', 'heat pump', 'Highway Driver Assist', 'wireless charging']),
              knownFor: ['355 km WLTP range for a compact', 'remarkable ride comfort for an EV', 'quiet and refined cabin at all speeds', 'same practical body as petrol C4'],
              watchOut: ['DC charging limited to 100 kW', 'range drops noticeably in winter', 'heavier than ICE version affects agility', 'no AWD option available']
            }
          ]
        }
      ]
    },
    {
      id: 'c5-aircross',
      name: 'C5 Aircross',
      segment: 'Compact SUV',
      description: 'The Citroën C5 Aircross is the brand\'s compact SUV flagship, blending a distinctive design with Citroën\'s most advanced Progressive Hydraulic Cushions suspension for a car-like ride comfort. Available with PureTech petrol, BlueHDi diesel, and Plug-in Hybrid 225 versions.',
      tags: ['SUV', 'comfortable', 'family', 'PHEV'],
      generations: [
        {
          id: 'c5-aircross-mk1',
          name: 'First Generation',
          years: '2018–present',
          platform: 'Stellantis EMP2',
          bodyStyles: ['SUV'],
          summary: 'The C5 Aircross introduced Advanced Comfort seats, Progressive Hydraulic Cushions suspension, and bold design to the competitive compact SUV segment. The plug-in hybrid variant adds 50 km electric range while maintaining the same spacious interior and raised stance.',
          heroImage: 'citroen-c5-aircross-mk1',
          variants: [
            {
              id: 'citroen-c5-aircross-mk1-12puretech130',
              name: '1.2 PureTech 130 PS EAT8',
              years: '2018–present',
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
                acceleration0100: 10.5,
                topSpeedKmh: 200,
                consumptionL100: 6.3,
                co2Gkm: 143
              },
              dimensions: {
                lengthMm: 4500,
                widthMm: 1839,
                heightMm: 1673,
                wheelbaseMm: 2730,
                bootLitres: 580,
                weightKg: 1412,
                tankLitres: 53
              },
              options: safetyComfort(['8-inch touchscreen', 'rear camera', 'full LED headlights', 'Advanced Comfort seats']),
              knownFor: ['outstanding ride comfort via PHC suspension', 'Advanced Comfort ultra-soft seats', 'generous 580-litre boot', 'modular rear bench slides and folds'],
              watchOut: ['PureTech timing belt intervals critical', 'three-cylinder can feel lacking at full load', 'no AWD option', 'EAT8 occasionally hunts on hills']
            },
            {
              id: 'citroen-c5-aircross-mk1-hybrid225phev',
              name: 'Hybrid 225 PS PHEV',
              years: '2020–present',
              priceBand: '€20,000–€36,000 used',
              specs: {
                engine: '1.6-litre PureTech turbo + 110 kW electric motor + 13.2 kWh battery',
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
                consumptionL100: 1.5,
                electricRangeKm: 50,
                co2Gkm: 34
              },
              dimensions: {
                lengthMm: 4500,
                widthMm: 1839,
                heightMm: 1673,
                wheelbaseMm: 2730,
                bootLitres: 460,
                weightKg: 1855,
                tankLitres: 43
              },
              options: safetyComfort(['wireless charging', 'panoramic sunroof', 'hands-free parking', 'Advanced Comfort seats']),
              knownFor: ['50 km electric range covers urban commutes', 'low CO2 for company-car benefit-in-kind', 'strong combined performance', 'Citroën comfort preserved in PHEV form'],
              watchOut: ['boot reduced by 120 litres vs petrol', 'significantly heavier than petrol variant', 'fuel tank smaller than petrol version', 'complex drivetrain service costs']
            }
          ]
        }
      ]
    },
    {
      id: 'c5-x',
      name: 'C5 X',
      segment: 'Large fastback SUV',
      description: 'The Citroën C5 X is the brand\'s flagship model — a large fastback crossover that blends saloon comfort, estate practicality, and SUV ground clearance into one striking package. Available with plug-in hybrid powertrain as the volume variant, it targets premium buyers with Citroën\'s advanced suspension technology.',
      tags: ['flagship', 'fastback', 'PHEV', 'premium'],
      generations: [
        {
          id: 'c5-x-mk1',
          name: 'First Generation',
          years: '2022–present',
          platform: 'Stellantis EMP2',
          bodyStyles: ['Hatchback', 'SUV'],
          summary: 'The C5 X is Citroën\'s largest and most technically sophisticated model, combining flush door handles, a panoramic windscreen, Advanced Comfort seats, and Progressive Hydraulic Cushions with plug-in hybrid powertrains. It targets buyers who might otherwise consider premium German fastbacks.',
          heroImage: 'citroen-c5-x-mk1',
          variants: [
            {
              id: 'citroen-c5-x-mk1-12puretech130',
              name: '1.2 PureTech 130 PS EAT8',
              years: '2022–present',
              priceBand: '€22,000–€34,000 used',
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
                acceleration0100: 10.4,
                topSpeedKmh: 202,
                consumptionL100: 6.4,
                co2Gkm: 146
              },
              dimensions: {
                lengthMm: 4805,
                widthMm: 1892,
                heightMm: 1485,
                wheelbaseMm: 2785,
                bootLitres: 545,
                weightKg: 1530,
                tankLitres: 60
              },
              options: safetyComfort(['12-inch touchscreen', 'Highway Driver Assist Plus', 'matrix LED headlights', 'panoramic glass roof']),
              knownFor: ['flagship Citroën ride comfort benchmark', 'Advanced Comfort adjustable-density seats', 'panoramic wide-angle windscreen', 'generous 545-litre boot'],
              watchOut: ['PureTech timing belt service essential', 'three-cylinder NVH audible under full load', 'large dimensions challenge narrow city streets', 'no AWD option']
            },
            {
              id: 'citroen-c5-x-mk1-hybrid225phev',
              name: 'Hybrid 225 PS PHEV',
              years: '2022–present',
              priceBand: '€28,000–€44,000 used',
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
                acceleration0100: 7.9,
                topSpeedKmh: 230,
                consumptionL100: 1.5,
                electricRangeKm: 55,
                co2Gkm: 33
              },
              dimensions: {
                lengthMm: 4805,
                widthMm: 1892,
                heightMm: 1485,
                wheelbaseMm: 2785,
                bootLitres: 485,
                weightKg: 1895,
                tankLitres: 43
              },
              options: safetyComfort(['wireless charging', 'massage front seats', 'Focal audio system', 'night-vision camera']),
              knownFor: ['55 km electric range for near-silent commuting', 'flagship Citroën comfort at near-premium price', 'strong combined output', 'very low CO2 for large car tax'],
              watchOut: ['boot reduced by 60 litres vs petrol', 'significantly heavier affects handling', 'no AWD option on PHEV', 'large overall footprint']
            }
          ]
        }
      ]
    },
    {
      id: 'berlingo',
      name: 'Berlingo',
      segment: 'Compact MPV / Van',
      description: 'The Citroën Berlingo is a versatile compact MPV and van that has been a European staple for over 25 years. The third generation brought a more car-like interior, sliding rear doors, and generous practicality for families or tradespeople. An all-electric ë-Berlingo version provides zero-emission urban versatility.',
      tags: ['MPV', 'van', 'practical', 'family', 'electric'],
      generations: [
        {
          id: 'berlingo-mk3',
          name: 'Mk3 (Third Generation)',
          years: '2018–present',
          platform: 'Stellantis EMP2 van',
          bodyStyles: ['MPV', 'Van'],
          summary: 'The third-generation Berlingo moved upmarket with a more refined cab, the ConnectedCam integrated dashcam, and a more car-like dashboard. Available as a five-seat MPV or XL seven-seat variant. The ë-Berlingo Electric offers the same practicality with zero-emissions running up to 280 km.',
          heroImage: 'citroen-berlingo-mk3',
          variants: [
            {
              id: 'citroen-berlingo-mk3-12puretech110',
              name: '1.2 PureTech 110 PS',
              years: '2018–present',
              priceBand: '€12,000–€24,000 used',
              specs: {
                engine: '1.2-litre turbocharged three-cylinder petrol',
                engineCode: 'EB2ADTS',
                displacementCc: 1199,
                cylinders: '3',
                powerHp: 110,
                powerKw: 81,
                torqueNm: 205,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.8,
                topSpeedKmh: 180,
                consumptionL100: 6.1,
                co2Gkm: 138
              },
              dimensions: {
                lengthMm: 4403,
                widthMm: 1848,
                heightMm: 1842,
                wheelbaseMm: 2785,
                bootLitres: 775,
                weightKg: 1360,
                tankLitres: 50
              },
              options: safetyComfort(['ConnectedCam dashcam', 'sliding rear doors', 'modular Magic Flat floor', 'rear camera']),
              knownFor: ['vast 775-litre boot easily extends to 3,000 litres', 'sliding doors ideal for tight parking', 'ConnectedCam integrated dashcam', 'practical Magic Flat floor'],
              watchOut: ['PureTech timing belt service required', 'van-derived road noise', 'high driving position visibility challenges', 'limited equipment on base trim']
            },
            {
              id: 'citroen-berlingo-mk3-15bluehdi100',
              name: '1.5 BlueHDi 100 PS',
              years: '2018–present',
              priceBand: '€13,000–€24,000 used',
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
                acceleration0100: 13.0,
                topSpeedKmh: 172,
                consumptionL100: 4.8,
                co2Gkm: 126
              },
              dimensions: {
                lengthMm: 4403,
                widthMm: 1848,
                heightMm: 1842,
                wheelbaseMm: 2785,
                bootLitres: 775,
                weightKg: 1465,
                tankLitres: 50
              },
              options: safetyComfort(['rear parking sensors', 'cruise control', 'Magic Flat floor system', 'roof bars']),
              knownFor: ['excellent diesel economy for a van-based MPV', 'strong 250 Nm torque for loading', 'low long-distance running costs', 'durable and repairable build'],
              watchOut: ['DPF requires motorway use to regenerate', 'EGR valve fouling in city-only use', 'hard cabin materials in base spec', 'NVH higher than car-based MPVs']
            },
            {
              id: 'citroen-berlingo-mk3-eberlingo-136',
              name: 'ë-Berlingo 136 PS Electric',
              years: '2021–present',
              priceBand: '€22,000–€36,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 136,
                powerKw: 100,
                torqueNm: 260,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 11.2,
                topSpeedKmh: 130,
                electricRangeKm: 280
              },
              dimensions: {
                lengthMm: 4403,
                widthMm: 1848,
                heightMm: 1842,
                wheelbaseMm: 2785,
                bootLitres: 775,
                weightKg: 1690
              },
              options: evComfort(['7.4 kW AC onboard charger', '100 kW DC fast charging', 'fleet telematics', 'sliding rear doors']),
              knownFor: ['zero-emission urban delivery or family use', '280 km range suitable for trade use', 'identical practicality to diesel version', 'low urban running costs for fleets'],
              watchOut: ['130 km/h top speed limits motorway use', 'range falls with full payload', 'heavier than diesel version', 'commercial charging infrastructure gaps']
            }
          ]
        }
      ]
    }
  ]
};
