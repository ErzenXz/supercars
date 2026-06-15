import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const landRover: CarMake = {
  id: 'land-rover',
  name: 'Land Rover',
  country: 'United Kingdom',
  logoText: 'LR',
  models: [
    {
      id: 'defender',
      name: 'Defender',
      segment: 'Off-Road SUV',
      description: 'The Land Rover Defender is an iconic off-road vehicle reborn on a modern aluminium platform. Available in 90, 110 and 130 body lengths, it combines genuine off-road capability with 21st-century technology and luxury interior options.',
      tags: ['off-road', 'SUV', 'iconic', 'PHEV', 'expedition', 'tough'],
      generations: [
        {
          id: 'defender-l663',
          name: 'Defender (L663)',
          years: '2020–present',
          platform: 'Jaguar Land Rover D7x aluminium',
          bodyStyles: ['SUV'],
          summary: 'The new Defender debuted on an all-new aluminium D7x platform, retaining the traditional boxy silhouette but adding an advanced air suspension, twin-speed transfer case, and Wade programming for river crossing. Available in 90 and 110 body lengths.',
          heroImage: 'defender-l663',
          variants: [
            {
              id: 'land-rover-defender-l663-d300',
              name: 'Defender 110 D300',
              years: '2020–present',
              priceBand: '€55,000+ new',
              specs: {
                engine: '3.0 I6 mild-hybrid diesel',
                engineCode: 'AJ300D6',
                displacementCc: 2997,
                cylinders: 'I6',
                powerHp: 300,
                powerKw: 221,
                torqueNm: 650,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: '4x4',
                acceleration0100: 7.0,
                topSpeedKmh: 191,
                consumptionL100: 8.7,
                co2Gkm: 228
              },
              dimensions: {
                lengthMm: 5018,
                widthMm: 2008,
                heightMm: 1967,
                wheelbaseMm: 3022,
                bootLitres: 1075,
                weightKg: 2250,
                tankLitres: 90
              },
              options: safetyComfort(['wade sensing', 'ClearSight ground view', 'air suspension', 'expedition roof rack', 'tow assist']),
              knownFor: ['genuine Class IV off-road capability', 'smooth 6-cylinder diesel torque', 'flexible body length options', 'modern luxury meets expedition toughness'],
              watchOut: ['high fuel consumption off-road', 'air suspension complexity and cost', 'very large for urban driving', 'high purchase and running costs']
            },
            {
              id: 'land-rover-defender-l663-p400e',
              name: 'Defender 110 P400e',
              years: '2021–present',
              priceBand: '€75,000+ new',
              specs: {
                engine: '2.0 turbo petrol + e-motor',
                engineCode: 'AJ200P hybrid',
                displacementCc: 1997,
                cylinders: 'I4',
                powerHp: 404,
                powerKw: 297,
                torqueNm: 640,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: '4x4',
                acceleration0100: 5.6,
                topSpeedKmh: 191,
                electricRangeKm: 43,
                consumptionL100: 3.0,
                co2Gkm: 74
              },
              dimensions: {
                lengthMm: 5018,
                widthMm: 2008,
                heightMm: 1967,
                wheelbaseMm: 3022,
                bootLitres: 1023,
                weightKg: 2465,
                tankLitres: 72
              },
              options: safetyComfort(['wade sensing', 'air suspension', 'ClearSight ground view', 'expedition accessories', 'premium audio']),
              knownFor: ['reduced CO2 for tax benefits', 'off-road credentials maintained with PHEV', 'EV commuting with weekend adventure capability', 'fast-charging support'],
              watchOut: ['electric range reduced off-road', 'battery weight penalty on difficult terrain', 'complex charging logistics on expeditions', 'premium price over diesel']
            }
          ]
        }
      ]
    },
    {
      id: 'discovery',
      name: 'Discovery',
      segment: 'Large Family SUV',
      description: 'The Land Rover Discovery is a premium large family SUV with genuine seven-seat capability and impressive off-road ability. The fifth generation sits on an all-aluminium platform, shedding significant weight while improving dynamics.',
      tags: ['large-SUV', 'seven-seat', 'family', 'off-road', 'diesel', 'premium'],
      generations: [
        {
          id: 'discovery-l462',
          name: 'Discovery 5 (L462)',
          years: '2017–present',
          platform: 'Jaguar Land Rover D7a aluminium',
          bodyStyles: ['SUV'],
          summary: 'The fifth Discovery moved to an aluminium-intensive platform, shedding 480 kg over its predecessor. A distinctive stepped roofline ensures all three rows of seats get natural light. The Ingenium diesel provides efficiency alongside a robust 4x4 drivetrain.',
          heroImage: 'discovery-l462',
          variants: [
            {
              id: 'land-rover-discovery-l462-d300',
              name: 'Discovery D300',
              years: '2017–present',
              priceBand: '€45,000+ new',
              specs: {
                engine: '3.0 I6 mild-hybrid diesel',
                engineCode: 'AJ300D6',
                displacementCc: 2997,
                cylinders: 'I6',
                powerHp: 300,
                powerKw: 221,
                torqueNm: 650,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: '4x4',
                acceleration0100: 7.2,
                topSpeedKmh: 201,
                consumptionL100: 8.5,
                co2Gkm: 222
              },
              dimensions: {
                lengthMm: 4970,
                widthMm: 2073,
                heightMm: 1888,
                wheelbaseMm: 2923,
                bootLitres: 1231,
                weightKg: 2195,
                tankLitres: 85
              },
              options: safetyComfort(['seven-seat configuration', 'air suspension', 'wade sensing', 'InControl Touch Pro Duo', 'tow assist']),
              knownFor: ['genuine 7-seat practicality', 'impressive off-road ability', 'smooth 6-cylinder torque', 'aluminium construction reducing weight vs predecessor'],
              watchOut: ['real-world fuel consumption', 'tight third row for adults', 'complex technology can have reliability issues', 'high service costs']
            }
          ]
        }
      ]
    },
    {
      id: 'discovery-sport',
      name: 'Discovery Sport',
      segment: 'Compact Family SUV',
      description: 'The Land Rover Discovery Sport is a compact family SUV offering optional seven seats, mild hybrid technology, and Land Rover\'s Terrain Response system for off-road capability in a more urban-friendly package.',
      tags: ['compact-SUV', 'family', 'seven-seat', 'mild-hybrid', 'off-road'],
      generations: [
        {
          id: 'discovery-sport-l550',
          name: 'Discovery Sport (L550)',
          years: '2014–present',
          platform: 'Jaguar Land Rover D8 platform',
          bodyStyles: ['SUV'],
          summary: 'The Discovery Sport replaced the Freelander 2, offering optional 5+2 seating, Terrain Response, and a range of Ingenium engines. A 2019 facelift brought mild hybrid technology and the PIVI Pro infotainment system.',
          heroImage: 'discovery-sport-l550',
          variants: [
            {
              id: 'land-rover-discovery-sport-l550-d200',
              name: 'Discovery Sport D200',
              years: '2019–present',
              priceBand: '€28,000+ used',
              specs: {
                engine: '2.0 Ingenium mild-hybrid diesel',
                engineCode: 'AJ204D MHEV',
                displacementCc: 1999,
                cylinders: 'I4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 430,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 8.4,
                topSpeedKmh: 206,
                consumptionL100: 6.2,
                co2Gkm: 164
              },
              dimensions: {
                lengthMm: 4599,
                widthMm: 2064,
                heightMm: 1724,
                wheelbaseMm: 2741,
                bootLitres: 981,
                weightKg: 1935,
                tankLitres: 64
              },
              options: safetyComfort(['Terrain Response 2', 'ClearSight rear-view mirror', 'panoramic sunroof', 'PIVI Pro navigation', 'wade sensing']),
              knownFor: ['optional 5+2 seating', 'Terrain Response off-road system', 'MHEV fuel savings in urban use', 'practical family-friendly packaging'],
              watchOut: ['third row too tight for adults', 'interior quality below German rivals', 'some infotainment bugs on early units', 'depreciation faster than some rivals']
            }
          ]
        }
      ]
    },
    {
      id: 'range-rover',
      name: 'Range Rover',
      segment: 'Large Luxury SUV',
      description: 'The Range Rover is the definitive luxury SUV, combining unparalleled off-road capability with limousine-grade comfort. Now in its fifth generation on an aluminium platform, it offers diesel, petrol, and plug-in hybrid powertrains.',
      tags: ['luxury-SUV', 'flagship', 'off-road', 'PHEV', 'premium', 'iconic'],
      generations: [
        {
          id: 'range-rover-l460',
          name: 'Range Rover V (L460)',
          years: '2022–present',
          platform: 'Jaguar Land Rover MLA Flex aluminium',
          bodyStyles: ['SUV'],
          summary: 'The fifth-generation Range Rover debuted on the new MLA Flex platform, enabling full EV capability in the future. The interior represents a substantial upgrade with twin curved screens, ultra-quiet cabin, and available SWB and LWB body lengths.',
          heroImage: 'range-rover-l460',
          variants: [
            {
              id: 'land-rover-range-rover-l460-d350',
              name: 'Range Rover D350',
              years: '2022–present',
              priceBand: '€110,000+ new',
              specs: {
                engine: '3.0 I6 mild-hybrid diesel',
                engineCode: 'AJ300D6',
                displacementCc: 2997,
                cylinders: 'I6',
                powerHp: 350,
                powerKw: 257,
                torqueNm: 700,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: '4x4',
                acceleration0100: 6.4,
                topSpeedKmh: 225,
                consumptionL100: 8.9,
                co2Gkm: 234
              },
              dimensions: {
                lengthMm: 5052,
                widthMm: 2073,
                heightMm: 1870,
                wheelbaseMm: 2997,
                bootLitres: 818,
                weightKg: 2450,
                tankLitres: 105
              },
              options: safetyComfort(['terrain response 2', 'air suspension', 'ClearSight ground view', 'rear-seat entertainment', 'Meridian Signature audio']),
              knownFor: ['unrivalled combination of luxury and off-road', 'imperious elevated seating position', 'class-leading cabin refinement', 'strong diesel torque'],
              watchOut: ['very high running costs', 'size challenging in cities', 'software reliability on early L460 units', 'air suspension expensive to repair']
            },
            {
              id: 'land-rover-range-rover-l460-p510e',
              name: 'Range Rover P510e',
              years: '2022–present',
              priceBand: '€140,000+ new',
              specs: {
                engine: '3.0 I6 turbo petrol + e-motor',
                engineCode: 'AJ300P6 hybrid',
                displacementCc: 2997,
                cylinders: 'I6',
                powerHp: 510,
                powerKw: 375,
                torqueNm: 700,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: '4x4',
                acceleration0100: 5.6,
                topSpeedKmh: 225,
                electricRangeKm: 113,
                consumptionL100: 3.6,
                co2Gkm: 82
              },
              dimensions: {
                lengthMm: 5052,
                widthMm: 2073,
                heightMm: 1870,
                wheelbaseMm: 2997,
                bootLitres: 818,
                weightKg: 2720,
                tankLitres: 90
              },
              options: safetyComfort(['terrain response 2', 'air suspension', 'panoramic roof', 'Meridian Signature 3D audio', 'massage seats', 'four-zone climate']),
              knownFor: ['market-leading PHEV range in luxury SUV class', 'strong combined system performance', 'low-emission zone access in cities', 'off-road capability preserved with PHEV'],
              watchOut: ['battery weight adds to already heavy vehicle', 'long recharge time on slow charger', 'range reduced significantly off-road', 'very high price for PHEV premium']
            }
          ]
        }
      ]
    },
    {
      id: 'range-rover-sport',
      name: 'Range Rover Sport',
      segment: 'Large Performance SUV',
      description: 'The Range Rover Sport is the more dynamic sibling of the full-size Range Rover, focusing on driver engagement alongside luxury. The third generation offers diesel, petrol, and plug-in hybrid powertrains with available seven seats.',
      tags: ['performance-SUV', 'luxury', 'PHEV', 'sporty', 'seven-seat'],
      generations: [
        {
          id: 'range-rover-sport-l461',
          name: 'Range Rover Sport III (L461)',
          years: '2022–present',
          platform: 'Jaguar Land Rover MLA Flex aluminium',
          bodyStyles: ['SUV'],
          summary: 'The third-generation Range Rover Sport adopted the MLA Flex platform from the full-size Range Rover. A Dynamic mode stiffens suspension and adjusts steering for a sportier character, while the P510e PHEV offers over 100 km of electric range.',
          heroImage: 'range-rover-sport-l461',
          variants: [
            {
              id: 'land-rover-range-rover-sport-l461-d350',
              name: 'Range Rover Sport D350',
              years: '2022–present',
              priceBand: '€85,000+ new',
              specs: {
                engine: '3.0 I6 mild-hybrid diesel',
                engineCode: 'AJ300D6',
                displacementCc: 2997,
                cylinders: 'I6',
                powerHp: 350,
                powerKw: 257,
                torqueNm: 700,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: '4x4',
                acceleration0100: 6.2,
                topSpeedKmh: 225,
                consumptionL100: 8.4,
                co2Gkm: 221
              },
              dimensions: {
                lengthMm: 4959,
                widthMm: 2004,
                heightMm: 1820,
                wheelbaseMm: 2997,
                bootLitres: 780,
                weightKg: 2315,
                tankLitres: 90
              },
              options: safetyComfort(['terrain response 2', 'air suspension', 'ClearSight ground view', 'Meridian Surround audio', 'dynamic air suspension']),
              knownFor: ['sporty character with off-road prowess', 'smooth 6-cylinder diesel', 'premium MLA Flex platform', 'optional 7-seat configuration'],
              watchOut: ['high running costs vs non-luxury rivals', 'fuel consumption under hard use', 'software teething issues on early units', 'heavy despite aluminium platform']
            },
            {
              id: 'land-rover-range-rover-sport-l461-p510e',
              name: 'Range Rover Sport P510e',
              years: '2022–present',
              priceBand: '€105,000+ new',
              specs: {
                engine: '3.0 I6 turbo petrol + e-motor',
                engineCode: 'AJ300P6 hybrid',
                displacementCc: 2997,
                cylinders: 'I6',
                powerHp: 510,
                powerKw: 375,
                torqueNm: 700,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: '4x4',
                acceleration0100: 5.4,
                topSpeedKmh: 242,
                electricRangeKm: 113,
                consumptionL100: 3.4,
                co2Gkm: 78
              },
              dimensions: {
                lengthMm: 4959,
                widthMm: 2004,
                heightMm: 1820,
                wheelbaseMm: 2997,
                bootLitres: 680,
                weightKg: 2580,
                tankLitres: 75
              },
              options: safetyComfort(['terrain response 2', 'air suspension', 'carbon fibre trim', 'Meridian Signature audio', 'dynamic air suspension']),
              knownFor: ['supercar-rivalling performance in luxury SUV body', 'extensive EV range for daily commuting', 'low CO2 for company car tax', 'combined system power'],
              watchOut: ['heaviest in class with battery', 'EV range drops significantly off-road', 'expensive to run on petrol if not regularly charged', 'premium over diesel substantial']
            }
          ]
        }
      ]
    },
    {
      id: 'range-rover-velar',
      name: 'Range Rover Velar',
      segment: 'Mid-size Luxury SUV',
      description: 'The Range Rover Velar is the design-focused mid-sizer in the Range Rover family, sitting between the Evoque and Sport. Its minimalist interior with dual touchscreens and flush door handles set a new benchmark for interior design.',
      tags: ['luxury-SUV', 'design', 'mid-size', 'minimalist', 'stylish'],
      generations: [
        {
          id: 'range-rover-velar-l560',
          name: 'Range Rover Velar (L560)',
          years: '2017–present',
          platform: 'Jaguar Land Rover D7a aluminium',
          bodyStyles: ['SUV'],
          summary: 'The Velar debuted in 2017 as a clean-sheet design with flush door handles, a full-width rear light strip, and a minimalist twin-screen interior. Built on the same aluminium D7a platform as the Discovery 5, it introduced InControl Touch Pro Duo.',
          heroImage: 'range-rover-velar-l560',
          variants: [
            {
              id: 'land-rover-range-rover-velar-l560-d200',
              name: 'Range Rover Velar D200',
              years: '2017–present',
              priceBand: '€35,000+ used',
              specs: {
                engine: '2.0 Ingenium diesel',
                engineCode: 'AJ204D',
                displacementCc: 1999,
                cylinders: 'I4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 430,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 8.0,
                topSpeedKmh: 213,
                consumptionL100: 6.4,
                co2Gkm: 168
              },
              dimensions: {
                lengthMm: 4803,
                widthMm: 2032,
                heightMm: 1665,
                wheelbaseMm: 2874,
                bootLitres: 558,
                weightKg: 1891,
                tankLitres: 73
              },
              options: safetyComfort(['InControl Touch Pro Duo', 'configurable ambient lighting', 'air suspension', 'panoramic glass roof', 'Meridian audio']),
              knownFor: ['outstanding interior design', 'flush door handles and clean exterior', 'class-leading dual touchscreen system', 'AWD competence'],
              watchOut: ['touchscreen-only controls can be distracting', 'interior practicality below class average', 'fuel consumption in real use', 'infotainment reliability early models']
            }
          ]
        }
      ]
    },
    {
      id: 'range-rover-evoque',
      name: 'Range Rover Evoque',
      segment: 'Compact Luxury SUV',
      description: 'The Range Rover Evoque is a compact luxury SUV that democratised Range Rover design language. The second generation introduced mild hybrid technology and the innovative ClearSight Ground View camera system.',
      tags: ['compact-SUV', 'luxury', 'mild-hybrid', 'PHEV', 'stylish', 'city'],
      generations: [
        {
          id: 'range-rover-evoque-l551',
          name: 'Range Rover Evoque II (L551)',
          years: '2019–present',
          platform: 'Jaguar Land Rover Premium Transverse Architecture',
          bodyStyles: ['SUV'],
          summary: 'The second-generation Evoque was redesigned on the new PTA platform with standard mild hybrid technology, ClearSight rear-view camera display, and available P300e plug-in hybrid. Interior quality made a significant step forward over the first generation.',
          heroImage: 'range-rover-evoque-l551',
          variants: [
            {
              id: 'land-rover-range-rover-evoque-l551-d200',
              name: 'Evoque D200 MHEV',
              years: '2019–present',
              priceBand: '€28,000+ used',
              specs: {
                engine: '2.0 Ingenium mild-hybrid diesel',
                engineCode: 'AJ204D MHEV',
                displacementCc: 1999,
                cylinders: 'I4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 430,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 8.0,
                topSpeedKmh: 210,
                consumptionL100: 6.1,
                co2Gkm: 161
              },
              dimensions: {
                lengthMm: 4371,
                widthMm: 2036,
                heightMm: 1649,
                wheelbaseMm: 2681,
                bootLitres: 591,
                weightKg: 1897,
                tankLitres: 54
              },
              options: safetyComfort(['ClearSight rear-view mirror', 'ClearSight ground view', 'air suspension', 'panoramic roof', 'PIVI Pro infotainment']),
              knownFor: ['premium design in compact SUV class', 'ClearSight camera system', 'improved interior over first generation', 'MHEV efficiency gains in urban driving'],
              watchOut: ['boot smaller than rivals in class', 'rear headroom tight for tall passengers', 'fuel consumption higher than non-MHEV rivals', 'running costs above class average']
            },
            {
              id: 'land-rover-range-rover-evoque-l551-p300e',
              name: 'Evoque P300e PHEV',
              years: '2020–present',
              priceBand: '€40,000+ new',
              specs: {
                engine: '1.5 3-cyl turbo petrol + e-motor',
                engineCode: 'AJ133 PHEV',
                displacementCc: 1497,
                cylinders: 'I3',
                powerHp: 309,
                powerKw: 227,
                torqueNm: 540,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 6,
                drive: 'AWD',
                acceleration0100: 6.4,
                topSpeedKmh: 213,
                electricRangeKm: 66,
                consumptionL100: 1.5,
                co2Gkm: 34
              },
              dimensions: {
                lengthMm: 4371,
                widthMm: 2036,
                heightMm: 1649,
                wheelbaseMm: 2681,
                bootLitres: 420,
                weightKg: 2015,
                tankLitres: 44
              },
              options: safetyComfort(['ClearSight rear-view mirror', 'terrain response', 'PIVI Pro navigation', 'panoramic roof', 'heated seats']),
              knownFor: ['very low CO2 for premium SUV', 'competitive electric-only range', 'performance from combined system', 'city-friendly with EV mode'],
              watchOut: ['boot significantly reduced by battery', 'rear AWD via electric motor only', 'small 3-cylinder engine on long runs', 'higher entry price than diesel']
            }
          ]
        }
      ]
    }
  ]
};
