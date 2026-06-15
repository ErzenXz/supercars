import type { CarMake } from '../../types';
import { safetyComfort } from '../_shared';

export const dacia: CarMake = {
  id: 'dacia',
  name: 'Dacia',
  country: 'Romania',
  logoText: 'D',
  models: [
    {
      id: 'sandero',
      name: 'Sandero',
      segment: 'B-segment supermini',
      description: 'Consistently one of Europe\'s cheapest new cars, the Sandero offers remarkable value with modern safety equipment, a practical hatchback body, and efficient TCe turbo petrol engines.',
      tags: ['supermini', 'value', 'city car', 'affordable', 'practical'],
      generations: [
        {
          id: 'sandero-iii',
          name: 'Sandero III',
          years: '2020–present',
          platform: 'CMF-B',
          bodyStyles: ['Hatchback'],
          summary: 'Built on the same CMF-B platform as the Renault Clio V, the third-generation Sandero brought a massive leap in perceived quality, safety tech, and infotainment while keeping prices remarkably low.',
          heroImage: 'sandero-iii',
          variants: [
            {
              id: 'dacia-sandero-iii-tce-90',
              name: 'TCe 90 Essential',
              years: '2020–present',
              priceBand: '€8,500–€14,500 used/new',
              specs: {
                engine: '1.0 TCe turbo petrol',
                engineCode: 'H4D',
                displacementCc: 999,
                cylinders: 'Inline-3',
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
              knownFor: ['cheapest new car in Europe', 'surprising interior space', 'low insurance costs', 'simple and reliable mechanicals'],
              watchOut: ['basic interior materials', 'no factory sat-nav', 'limited sound deadening', 'timing chain longevity on high-mileage examples']
            },
            {
              id: 'dacia-sandero-iii-tce-90-stepway',
              name: 'Stepway TCe 90 Comfort',
              years: '2021–present',
              priceBand: '€11,000–€17,000 used/new',
              specs: {
                engine: '1.0 TCe turbo petrol',
                engineCode: 'H4D',
                displacementCc: 999,
                cylinders: 'Inline-3',
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
              options: safetyComfort(['Media Nav 8" screen', 'Apple CarPlay', 'Android Auto', 'roof rails']),
              knownFor: ['raised SUV styling at low price', 'improved ground clearance', 'CarPlay standard on Comfort', 'practical roof rails'],
              watchOut: ['heavier than base Sandero', 'limited off-road capability despite looks', 'no AWD option', 'rear seat space tighter vs standard']
            }
          ]
        }
      ]
    },
    {
      id: 'duster',
      name: 'Duster',
      segment: 'B-segment compact SUV',
      description: 'The Duster is Dacia\'s iconic budget SUV offering genuine 4x4 capability at an accessible price point, making it hugely popular across Europe for both urban and rural buyers.',
      tags: ['SUV', '4x4', 'affordable', 'off-road', 'practical'],
      generations: [
        {
          id: 'duster-ii',
          name: 'Duster II',
          years: '2017–present',
          platform: 'Renault M-Zero',
          bodyStyles: ['SUV'],
          summary: 'The second Duster improved refinement and interior quality substantially while maintaining the first generation\'s legendary value-for-money and real-world 4x4 credentials.',
          heroImage: 'duster-ii',
          variants: [
            {
              id: 'dacia-duster-ii-15-bluedci-115-4x4',
              name: '1.5 Blue dCi 115 4x4 Comfort',
              years: '2018–present',
              priceBand: '€13,000–€21,000 used',
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
              options: safetyComfort(['Media Nav 8" screen', 'hill descent control', 'mud/sand/snow terrain modes']),
              knownFor: ['genuine 4x4 capability at budget price', 'very frugal diesel', 'high ground clearance 210 mm', 'robust and repairable'],
              watchOut: ['DPF on short journeys', 'diesel particulate filter service cost', 'dated cabin design', 'NVH higher than rivals']
            },
            {
              id: 'dacia-duster-ii-tce-150-4x4',
              name: 'TCe 150 4x4 Prestige',
              years: '2019–present',
              priceBand: '€15,000–€24,000 used/new',
              specs: {
                engine: '1.3 TCe turbo petrol',
                engineCode: 'H5H',
                displacementCc: 1332,
                cylinders: 'Inline-4',
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
              options: safetyComfort(['Media Nav 8" touchscreen', 'rear camera', 'terrain control modes', 'leather seats']),
              knownFor: ['strong petrol performance', 'true 4x4 traction system', 'best-equipped Duster spec', 'no DPF complications'],
              watchOut: ['higher fuel consumption in 4x4 mode', 'timing chain service required', 'some road noise at speed', 'higher price erodes value proposition']
            }
          ]
        }
      ]
    },
    {
      id: 'jogger',
      name: 'Jogger',
      segment: 'B-segment MPV/crossover',
      description: 'The Jogger is Dacia\'s seven-seat budget MPV-crossover hybrid, offering an affordable family solution with generous space, roof rails, and a choice of LPG or petrol engines.',
      tags: ['MPV', 'seven-seat', 'family', 'value', 'practical'],
      generations: [
        {
          id: 'jogger-i',
          name: 'Jogger I',
          years: '2022–present',
          platform: 'CMF-B',
          bodyStyles: ['MPV'],
          summary: 'Dacia\'s answer to the affordable seven-seat family car, the Jogger combines the CMF-B platform with a longer body, third-row seating, and the option of a highly economical LPG Bi-Fuel variant.',
          heroImage: 'jogger-i',
          variants: [
            {
              id: 'dacia-jogger-i-tce-110',
              name: 'TCe 110 Extreme',
              years: '2022–present',
              priceBand: '€14,000–€21,000 used/new',
              specs: {
                engine: '1.0 TCe turbo petrol',
                engineCode: 'H4D',
                displacementCc: 999,
                cylinders: 'Inline-3',
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
              options: safetyComfort(['Media Nav 8" screen', 'Apple CarPlay', 'Android Auto', 'roof bars standard']),
              knownFor: ['7-seat capacity at budget price', 'enormous 708L boot with 5 seats', 'roof bars standard fit', 'long wheelbase for rear legroom'],
              watchOut: ['third row for children only', 'no AWD available', 'entry engine can feel strained loaded', 'basic safety tech vs mainstream rivals']
            }
          ]
        }
      ]
    }
  ]
};
