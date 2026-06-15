import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const dacia: CarMake = {
  id: 'dacia',
  name: 'Dacia',
  country: 'Romania',
  logoText: 'D',
  models: [
    {
      id: 'sandero',
      name: 'Sandero',
      segment: 'Supermini',
      description: 'Consistently the cheapest new car on sale in Europe, the Dacia Sandero offers remarkable value with modern safety equipment, a practical hatchback body, and efficient TCe turbo-petrol engines. The third generation on CMF-B is a genuine quality leap without abandoning the essential low-price formula.',
      tags: ['supermini', 'value', 'affordable', 'practical'],
      generations: [
        {
          id: 'sandero-mk3',
          name: 'Mk3 (Third Generation)',
          years: '2020–present',
          platform: 'Renault CMF-B',
          bodyStyles: ['Hatchback'],
          summary: 'Built on the same CMF-B platform as the Renault Clio V, the third-generation Sandero brought a massive leap in perceived quality, safety technology, and infotainment while keeping prices remarkably low. The Stepway crossover variant adds raised suspension and SUV styling at minimal cost.',
          heroImage: 'dacia-sandero-mk3',
          variants: [
            {
              id: 'dacia-sandero-mk3-10tce90',
              name: '1.0 TCe 90 PS Essential',
              years: '2020–present',
              priceBand: '€8,500–€14,500 used',
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
                acceleration0100: 12.2,
                topSpeedKmh: 178,
                consumptionL100: 5.4,
                co2Gkm: 123
              },
              dimensions: {
                lengthMm: 4088,
                widthMm: 1734,
                heightMm: 1497,
                wheelbaseMm: 2588,
                bootLitres: 328,
                weightKg: 1067,
                tankLitres: 42
              },
              options: safetyComfort(['Media Control smartphone holder', 'rear parking sensors', 'cruise control']),
              knownFor: ['cheapest new car in Europe', 'surprising interior space for price', 'low insurance costs', 'simple and reliable mechanicals'],
              watchOut: ['basic interior materials', 'no factory satellite navigation', 'limited sound deadening', 'timing chain longevity on high-mileage examples']
            },
            {
              id: 'dacia-sandero-mk3-stepway-10tce90',
              name: 'Stepway 1.0 TCe 90 PS Comfort',
              years: '2021–present',
              priceBand: '€11,000–€17,000 used',
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
                topSpeedKmh: 175,
                consumptionL100: 5.6,
                co2Gkm: 127
              },
              dimensions: {
                lengthMm: 4088,
                widthMm: 1734,
                heightMm: 1560,
                wheelbaseMm: 2588,
                bootLitres: 328,
                weightKg: 1118,
                tankLitres: 42
              },
              options: safetyComfort(['Media Nav 8-inch screen', 'Apple CarPlay', 'Android Auto', 'roof rails']),
              knownFor: ['raised SUV styling at supermini price', 'improved ground clearance over standard', 'CarPlay and Android Auto standard on Comfort', 'practical roof rails included'],
              watchOut: ['heavier than base Sandero', 'limited genuine off-road capability despite looks', 'no AWD option', 'rear seat space slightly tighter vs standard']
            },
            {
              id: 'dacia-sandero-mk3-10tce100-cvt',
              name: '1.0 TCe 100 PS CVT',
              years: '2021–present',
              priceBand: '€10,000–€16,500 used',
              specs: {
                engine: '1.0-litre turbocharged three-cylinder petrol',
                engineCode: 'H4D-F4',
                displacementCc: 999,
                cylinders: '3',
                powerHp: 100,
                powerKw: 74,
                torqueNm: 160,
                fuel: 'Petrol',
                gearbox: 'CVT',
                drive: 'FWD',
                acceleration0100: 13.0,
                topSpeedKmh: 175,
                consumptionL100: 5.9,
                co2Gkm: 134
              },
              dimensions: {
                lengthMm: 4088,
                widthMm: 1734,
                heightMm: 1497,
                wheelbaseMm: 2588,
                bootLitres: 328,
                weightKg: 1115,
                tankLitres: 42
              },
              options: safetyComfort(['Media Nav 8-inch screen', 'rear parking sensors', 'cruise control']),
              knownFor: ['automatic convenience at Dacia pricing', 'smooth city driving without manual shifts', 'simple and affordable running', 'no clutch fatigue in traffic'],
              watchOut: ['CVT droning noise under acceleration', 'slower 0-100 vs manual', 'higher fuel consumption than manual', 'CVT long-term reliability less proven than manual']
            }
          ]
        }
      ]
    },
    {
      id: 'logan',
      name: 'Logan',
      segment: 'Compact sedan',
      description: 'The Dacia Logan is a no-frills compact saloon offering class-leading boot space and exceptional value for money. Popular across Central and Eastern Europe and in markets where boot space matters over styling, the third generation on CMF-B brings improved quality without abandoning the core value mission.',
      tags: ['sedan', 'value', 'spacious', 'practical'],
      generations: [
        {
          id: 'logan-mk3',
          name: 'Mk3 (Third Generation)',
          years: '2020–present',
          platform: 'Renault CMF-B',
          bodyStyles: ['Sedan'],
          summary: 'The third-generation Logan retains the value-first formula with an updated CMF-B platform, improved interior quality, and a modern TCe petrol engine range. Its 528-litre boot is class-competitive for a compact saloon, and pricing undercuts all European rivals substantially.',
          heroImage: 'dacia-logan-mk3',
          variants: [
            {
              id: 'dacia-logan-mk3-10tce90',
              name: '1.0 TCe 90 PS Essential',
              years: '2020–present',
              priceBand: '€9,000–€15,500 used',
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
                acceleration0100: 13.0,
                topSpeedKmh: 173,
                consumptionL100: 5.5,
                co2Gkm: 125
              },
              dimensions: {
                lengthMm: 4431,
                widthMm: 1734,
                heightMm: 1516,
                wheelbaseMm: 2661,
                bootLitres: 528,
                weightKg: 1121,
                tankLitres: 50
              },
              options: safetyComfort(['Media Control', 'rear parking sensors', 'cruise control']),
              knownFor: ['528-litre boot exceptional for price', 'lowest-cost new saloon in Europe', 'simple reliable mechanicals', 'easy to service and maintain'],
              watchOut: ['basic interior trim quality', 'no touchscreen on Essential', 'limited sound insulation', 'narrow body limits adult rear comfort']
            },
            {
              id: 'dacia-logan-mk3-10tce100-expression',
              name: '1.0 TCe 100 PS Expression',
              years: '2021–present',
              priceBand: '€11,000–€17,000 used',
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
                acceleration0100: 12.5,
                topSpeedKmh: 180,
                consumptionL100: 5.6,
                co2Gkm: 127
              },
              dimensions: {
                lengthMm: 4431,
                widthMm: 1734,
                heightMm: 1516,
                wheelbaseMm: 2661,
                bootLitres: 528,
                weightKg: 1135,
                tankLitres: 50
              },
              options: safetyComfort(['8-inch Media Nav screen', 'Apple CarPlay', 'Android Auto', 'rear camera']),
              knownFor: ['class-leading boot for the money', 'Apple CarPlay at low price', 'practical long-distance value', 'low insurance and running costs'],
              watchOut: ['limited handling engagement', 'road noise at motorway speeds', 'modest cabin quality vs mainstream rivals', 'resale value lower than Renault equivalents']
            }
          ]
        }
      ]
    },
    {
      id: 'jogger',
      name: 'Jogger',
      segment: 'Compact MPV',
      description: 'The Dacia Jogger is the brand\'s affordable seven-seat MPV-crossover, combining CMF-B practicality with an elongated body, roof rails, and the option of a 1.6 E-Tech full hybrid. It offers the only sub-€20,000 seven-seat hybrid in Europe, making family motoring accessible without a premium price tag.',
      tags: ['MPV', 'seven-seat', 'family', 'value', 'hybrid'],
      generations: [
        {
          id: 'jogger-mk1',
          name: 'First Generation',
          years: '2022–present',
          platform: 'Renault CMF-B',
          bodyStyles: ['MPV'],
          summary: 'Dacia\'s answer to the affordable seven-seat family car, the Jogger combines the CMF-B platform with a longer body, third-row seating, and optional LPG Bi-Fuel or 1.6 E-Tech hybrid powertrains. It is the only seven-seat hybrid car available under €25,000 in Europe.',
          heroImage: 'dacia-jogger-mk1',
          variants: [
            {
              id: 'dacia-jogger-mk1-10tce110',
              name: '1.0 TCe 110 PS Extreme',
              years: '2022–present',
              priceBand: '€14,000–€21,000 used',
              specs: {
                engine: '1.0-litre turbocharged three-cylinder petrol',
                engineCode: 'H4D-F4',
                displacementCc: 999,
                cylinders: '3',
                powerHp: 110,
                powerKw: 81,
                torqueNm: 200,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 11.2,
                topSpeedKmh: 183,
                consumptionL100: 6.1,
                co2Gkm: 139
              },
              dimensions: {
                lengthMm: 4547,
                widthMm: 1784,
                heightMm: 1632,
                wheelbaseMm: 2897,
                bootLitres: 708,
                weightKg: 1311,
                tankLitres: 50
              },
              options: safetyComfort(['Media Nav 8-inch screen', 'Apple CarPlay', 'Android Auto', 'roof bars standard']),
              knownFor: ['7-seat capacity at budget price', 'enormous 708-litre boot with 5 seats', 'roof bars standard fit', 'long wheelbase for rear legroom'],
              watchOut: ['third row only suitable for children', 'no AWD available', 'entry engine strained when fully loaded', 'basic safety tech vs mainstream rivals']
            },
            {
              id: 'dacia-jogger-mk1-etech140',
              name: '1.6 E-Tech 140 PS Hybrid',
              years: '2023–present',
              priceBand: '€18,000–€26,000 used',
              specs: {
                engine: '1.6-litre Atkinson-cycle petrol + two electric motors',
                engineCode: 'H4M',
                displacementCc: 1598,
                cylinders: '4',
                powerHp: 140,
                powerKw: 103,
                torqueNm: 205,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 10.5,
                topSpeedKmh: 175,
                consumptionL100: 4.8,
                co2Gkm: 110
              },
              dimensions: {
                lengthMm: 4547,
                widthMm: 1784,
                heightMm: 1632,
                wheelbaseMm: 2897,
                bootLitres: 708,
                weightKg: 1479,
                tankLitres: 45
              },
              options: safetyComfort(['Media Nav 8-inch screen', 'Apple CarPlay', 'Android Auto', 'roof bars standard']),
              knownFor: ['only sub-€25,000 seven-seat hybrid in Europe', 'excellent city fuel economy for an MPV', 'no-plug hybrid simplicity', 'smooth multimode automatic gearbox'],
              watchOut: ['heavier than TCe version', 'multimode gearbox hesitates uphill', 'higher purchase price erodes value advantage', 'third row children-only']
            }
          ]
        }
      ]
    },
    {
      id: 'duster',
      name: 'Duster',
      segment: 'Compact SUV',
      description: 'The Dacia Duster is an iconic budget SUV offering genuine 4x4 capability and high ground clearance at prices that undercut all mainstream rivals. Hugely popular across Europe for rural and urban buyers alike, the third generation on CMF-B brings improved quality and hybrid powertrains without abandoning the accessible pricing.',
      tags: ['SUV', '4x4', 'affordable', 'off-road', 'practical'],
      generations: [
        {
          id: 'duster-mk2',
          name: 'Mk2 (Second Generation)',
          years: '2017–2024',
          platform: 'Renault M-Zero',
          bodyStyles: ['SUV'],
          summary: 'The second Duster improved refinement and interior quality substantially while maintaining the first generation\'s legendary value-for-money and real-world 4x4 credentials. Available with TCe petrol, Blue dCi diesel, and optional 4x4 transmission on both.',
          heroImage: 'dacia-duster-mk2',
          variants: [
            {
              id: 'dacia-duster-mk2-15bluedci115-4x4',
              name: '1.5 Blue dCi 115 PS 4x4 Comfort',
              years: '2018–2024',
              priceBand: '€12,000–€21,000 used',
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
                drive: '4x4',
                acceleration0100: 10.9,
                topSpeedKmh: 170,
                consumptionL100: 5.2,
                co2Gkm: 136
              },
              dimensions: {
                lengthMm: 4341,
                widthMm: 1804,
                heightMm: 1693,
                wheelbaseMm: 2673,
                bootLitres: 445,
                weightKg: 1448,
                tankLitres: 50
              },
              options: safetyComfort(['Media Nav 8-inch screen', 'hill descent control', 'mud/sand/snow terrain modes']),
              knownFor: ['genuine 4x4 capability at budget price', 'frugal diesel with 210 mm ground clearance', 'robust and easily repairable', 'durable and dependable build quality'],
              watchOut: ['DPF issues on short urban journeys', 'dated cabin design vs mainstream rivals', 'NVH higher than class leaders', 'K9K diesel can rattle when cold']
            },
            {
              id: 'dacia-duster-mk2-13tce150-4x4',
              name: '1.3 TCe 150 PS 4x4 Prestige',
              years: '2019–2024',
              priceBand: '€14,000–€24,000 used',
              specs: {
                engine: '1.3-litre turbocharged four-cylinder petrol',
                engineCode: 'H5H',
                displacementCc: 1332,
                cylinders: '4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 250,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: '4x4',
                acceleration0100: 9.5,
                topSpeedKmh: 185,
                consumptionL100: 7.2,
                co2Gkm: 164
              },
              dimensions: {
                lengthMm: 4341,
                widthMm: 1804,
                heightMm: 1693,
                wheelbaseMm: 2673,
                bootLitres: 445,
                weightKg: 1400,
                tankLitres: 50
              },
              options: safetyComfort(['Media Nav 8-inch touchscreen', 'rear camera', 'terrain control modes', 'leather seat option']),
              knownFor: ['strong petrol performance with 4x4 traction', 'no DPF complications vs diesel', 'best-equipped Duster specification', 'sporty character for a budget SUV'],
              watchOut: ['higher fuel consumption in 4x4 mode', 'timing chain service required', 'road noise at motorway speeds', 'higher price reduces value advantage']
            }
          ]
        },
        {
          id: 'duster-mk3',
          name: 'Mk3 (Third Generation)',
          years: '2024–present',
          platform: 'Renault CMF-B',
          bodyStyles: ['SUV'],
          summary: 'The third-generation Duster on CMF-B brings a significantly more premium interior, the Renault E-Tech full hybrid drivetrain, and a modern design language. The 4x4 version retains genuine off-road capability including hill descent control and 210 mm ground clearance.',
          heroImage: 'dacia-duster-mk3',
          variants: [
            {
              id: 'dacia-duster-mk3-10tce130',
              name: '1.0 TCe 130 PS',
              years: '2024–present',
              priceBand: '€17,000–€26,000 used',
              specs: {
                engine: '1.0-litre turbocharged three-cylinder petrol 48V mild hybrid',
                engineCode: 'H4D-H4',
                displacementCc: 999,
                cylinders: '3',
                powerHp: 130,
                powerKw: 96,
                torqueNm: 230,
                fuel: 'Petrol',
                gearbox: 'Manual',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 10.2,
                topSpeedKmh: 190,
                consumptionL100: 5.8,
                co2Gkm: 131
              },
              dimensions: {
                lengthMm: 4341,
                widthMm: 1833,
                heightMm: 1694,
                wheelbaseMm: 2682,
                bootLitres: 472,
                weightKg: 1250,
                tankLitres: 50
              },
              options: safetyComfort(['10.1-inch Media Display screen', 'wireless Apple CarPlay', 'rear camera', 'blind spot monitoring']),
              knownFor: ['significantly improved Mk3 interior quality', 'affordable new-generation SUV', 'mild hybrid reduces fuel costs', 'enhanced safety vs Mk2'],
              watchOut: ['three-cylinder can be noisy under load', 'no AWD on 1.0 TCe', 'still behind mainstream on refinement', 'basic rear seat comfort on long trips']
            },
            {
              id: 'dacia-duster-mk3-etech4x4-hybrid',
              name: '1.6 E-Tech Hybrid 4x4',
              years: '2024–present',
              priceBand: '€22,000–€32,000 used',
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
                drive: '4x4',
                acceleration0100: 10.0,
                topSpeedKmh: 175,
                consumptionL100: 5.0,
                co2Gkm: 113
              },
              dimensions: {
                lengthMm: 4341,
                widthMm: 1833,
                heightMm: 1694,
                wheelbaseMm: 2682,
                bootLitres: 472,
                weightKg: 1530,
                tankLitres: 45
              },
              options: safetyComfort(['10.1-inch Media Display', 'wireless CarPlay', 'hill descent control', 'terrain modes: sand/mud/snow']),
              knownFor: ['4x4 hybrid SUV at unprecedented price', 'genuine off-road capability with hybrid efficiency', 'smooth automatic for an affordable SUV', 'low running costs on combined roads'],
              watchOut: ['heavier than TCe Mk3', 'multimode gearbox hesitates on steep inclines', 'complex hybrid powertrain for budget positioning', 'smaller fuel tank vs Mk2 diesel']
            }
          ]
        }
      ]
    },
    {
      id: 'spring',
      name: 'Spring',
      segment: 'City electric car',
      description: 'The Dacia Spring is the most affordable electric car in Europe, designed for urban use with a small 26.8 kWh battery and a modest 120 km real-world range. It targets urban commuters and second-car owners who need an affordable EV for short daily trips and city centre access.',
      tags: ['electric', 'city', 'affordable', 'urban', 'EV'],
      generations: [
        {
          id: 'spring-mk1',
          name: 'First Generation',
          years: '2021–present',
          platform: 'Renault CMF-A+',
          bodyStyles: ['Hatchback', 'SUV'],
          summary: 'The Spring offers entry-level EV motoring at a price previously unachievable in Europe. Built on a modified Renault CMF-A+ platform, it uses a small 26.8 kWh battery and a single 65 hp or 45 hp motor. The 2023 facelift brought 65 hp Extreme variant and improved infotainment.',
          heroImage: 'dacia-spring-mk1',
          variants: [
            {
              id: 'dacia-spring-mk1-electric65',
              name: 'Electric 65 PS Extreme',
              years: '2023–present',
              priceBand: '€10,000–€18,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 65,
                powerKw: 48,
                torqueNm: 113,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 13.7,
                topSpeedKmh: 125,
                electricRangeKm: 225
              },
              dimensions: {
                lengthMm: 3734,
                widthMm: 1622,
                heightMm: 1516,
                wheelbaseMm: 2423,
                bootLitres: 290,
                weightKg: 984
              },
              options: evComfort(['30 kW DC fast charging', 'rear camera', 'Media Display 10-inch screen']),
              knownFor: ['cheapest electric car in Europe', '225 km covers urban daily use', 'very low city running costs', 'easy city parking in small footprint'],
              watchOut: ['125 km/h top speed limits motorway use', 'range drops to 150 km real-world in cold weather', '30 kW DC charge cap is slow', 'small interior and boot for passengers']
            },
            {
              id: 'dacia-spring-mk1-electric45',
              name: 'Electric 45 PS Essential',
              years: '2021–present',
              priceBand: '€8,500–€14,000 used',
              specs: {
                engine: 'Single front electric motor',
                powerHp: 45,
                powerKw: 33,
                torqueNm: 125,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'FWD',
                acceleration0100: 19.1,
                topSpeedKmh: 125,
                electricRangeKm: 230
              },
              dimensions: {
                lengthMm: 3734,
                widthMm: 1622,
                heightMm: 1516,
                wheelbaseMm: 2423,
                bootLitres: 290,
                weightKg: 970
              },
              options: evComfort(['30 kW DC charging', 'basic infotainment screen']),
              knownFor: ['most affordable EV in Europe after grants', '230 km WLTP range for city use', 'tiny and easy to park', 'zero running costs in urban zones'],
              watchOut: ['very slow acceleration limits safety at junctions', '125 km/h cap means motorway journey reluctance', 'minimal comfort features on Essential', 'basic interior quality throughout']
            }
          ]
        }
      ]
    }
  ]
};
