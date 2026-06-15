import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const jaguar: CarMake = {
  id: 'jaguar',
  name: 'Jaguar',
  country: 'United Kingdom',
  logoText: 'J',
  models: [
    {
      id: 'xe',
      name: 'XE',
      segment: 'Compact Executive Sedan',
      description: 'The Jaguar XE is a compact executive sedan that competes with the BMW 3 Series and Mercedes C-Class. Built on an aluminium-intensive platform, it offers sharp handling dynamics and a refined turbocharged four-cylinder petrol engine lineup.',
      tags: ['sedan', 'compact-executive', 'aluminium', 'turbo', 'sporty'],
      generations: [
        {
          id: 'xe-x760',
          name: 'XE (X760)',
          years: '2015–2023',
          platform: 'Jaguar Land Rover iQ[Al] aluminium',
          bodyStyles: ['Sedan'],
          summary: 'Jaguar\'s first compact executive sedan used an all-aluminium monocoque to reduce weight and sharpen dynamics. The 2.0-litre Ingenium petrol and diesel engines provided efficiency alongside the sporty 300 Sport variant.',
          heroImage: 'xe-x760',
          variants: [
            {
              id: 'jaguar-xe-x760-20p',
              name: 'XE 2.0 P250',
              years: '2015–2023',
              priceBand: '€14,000+ used',
              specs: {
                engine: '2.0 Ingenium turbo petrol',
                engineCode: 'AJ200P',
                displacementCc: 1997,
                cylinders: 'I4',
                powerHp: 250,
                powerKw: 184,
                torqueNm: 365,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 6.5,
                topSpeedKmh: 250,
                consumptionL100: 7.6,
                co2Gkm: 173
              },
              dimensions: {
                lengthMm: 4672,
                widthMm: 1850,
                heightMm: 1416,
                wheelbaseMm: 2835,
                bootLitres: 455,
                weightKg: 1595,
                tankLitres: 57
              },
              options: safetyComfort(['adaptive cruise control', 'blind spot assist', 'InControl Touch Pro', 'meridian audio']),
              knownFor: ['sharp steering and handling', 'aluminium lightweight construction', 'refined Ingenium engine', 'competitive executive sedan dynamics'],
              watchOut: ['smaller boot than rivals', 'infotainment system dated on earlier models', 'dealer network smaller than German rivals', 'depreciation can be steep']
            }
          ]
        }
      ]
    },
    {
      id: 'xf',
      name: 'XF',
      segment: 'Executive Sedan',
      description: 'The Jaguar XF is a mid-size executive sedan offering a blend of British elegance and driving dynamics. Powered by Ingenium diesel and petrol engines, it competes with the BMW 5 Series and Mercedes E-Class.',
      tags: ['sedan', 'executive', 'diesel', 'british', 'luxury'],
      generations: [
        {
          id: 'xf-x260',
          name: 'XF (X260)',
          years: '2015–present',
          platform: 'Jaguar Land Rover iQ[Al] aluminium',
          bodyStyles: ['Sedan'],
          summary: 'The second-generation XF moved to an aluminium-intensive architecture reducing weight by up to 190 kg over its predecessor. The 2.0d Ingenium diesel became the fleet favourite with its efficiency and ample torque.',
          heroImage: 'xf-x260',
          variants: [
            {
              id: 'jaguar-xf-x260-20d',
              name: 'XF 2.0d D200',
              years: '2015–present',
              priceBand: '€16,000+ used',
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
                drive: 'RWD',
                acceleration0100: 8.0,
                topSpeedKmh: 233,
                consumptionL100: 5.4,
                co2Gkm: 142
              },
              dimensions: {
                lengthMm: 4954,
                widthMm: 1880,
                heightMm: 1457,
                wheelbaseMm: 2960,
                bootLitres: 540,
                weightKg: 1665,
                tankLitres: 63
              },
              options: safetyComfort(['adaptive cruise control', 'InControl Touch Pro navigation', 'meridian sound', 'head-up display']),
              knownFor: ['elegant British design', 'efficient and torquey diesel', 'lightweight aluminium body', 'refined motorway cruiser'],
              watchOut: ['reliability concerns on some Ingenium units', 'rear legroom tighter than German rivals', 'resale values trail BMW and Mercedes', 'infotainment responsiveness on older units']
            }
          ]
        }
      ]
    },
    {
      id: 'e-pace',
      name: 'E-Pace',
      segment: 'Compact Premium SUV',
      description: 'The Jaguar E-Pace is the brand\'s compact premium SUV, combining Jaguar\'s sporting heritage with everyday practicality. Available with a range of Ingenium petrol and diesel engines and optional all-wheel drive.',
      tags: ['compact-SUV', 'premium', 'sporty', 'turbo', 'family'],
      generations: [
        {
          id: 'e-pace-x540',
          name: 'E-Pace (X540)',
          years: '2017–present',
          platform: 'Jaguar Land Rover D8 platform',
          bodyStyles: ['SUV'],
          summary: 'Jaguar\'s smallest SUV debuted in 2017 on a transverse-engine platform, offering a coupe-inspired roofline and available 9-speed automatic transmission. The 2021 facelift brought a new PIVI Pro infotainment system and updated MHEV technology.',
          heroImage: 'e-pace-x540',
          variants: [
            {
              id: 'jaguar-e-pace-x540-p250',
              name: 'E-Pace P250',
              years: '2017–present',
              priceBand: '€22,000+ used',
              specs: {
                engine: '2.0 Ingenium turbo petrol',
                engineCode: 'AJ200P',
                displacementCc: 1997,
                cylinders: 'I4',
                powerHp: 249,
                powerKw: 183,
                torqueNm: 365,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 9,
                drive: 'AWD',
                acceleration0100: 7.0,
                topSpeedKmh: 222,
                consumptionL100: 8.5,
                co2Gkm: 193
              },
              dimensions: {
                lengthMm: 4395,
                widthMm: 1984,
                heightMm: 1649,
                wheelbaseMm: 2681,
                bootLitres: 577,
                weightKg: 1815,
                tankLitres: 61
              },
              options: safetyComfort(['ClearSight rear-view mirror', 'panoramic sunroof', 'Meridian audio', 'InControl Pro navigation']),
              knownFor: ['sporty SUV proportions', 'engaging steering feel', 'competitive AWD system', 'distinctive Jaguar design language'],
              watchOut: ['smaller boot than rivals in class', 'rear headroom limited by sloping roofline', 'fuel consumption higher than claimed', 'infotainment generation varies by year']
            }
          ]
        }
      ]
    },
    {
      id: 'f-pace',
      name: 'F-Pace',
      segment: 'Mid-size Premium SUV',
      description: 'The Jaguar F-Pace is the brand\'s best-selling model, a mid-size premium SUV that delivers sports car dynamics in an SUV body. Available with Ingenium diesel, petrol, and a plug-in hybrid P400e powertrain.',
      tags: ['SUV', 'premium', 'PHEV', 'plug-in-hybrid', 'sporty', 'family'],
      generations: [
        {
          id: 'f-pace-x761',
          name: 'F-Pace (X761)',
          years: '2016–present',
          platform: 'Jaguar Land Rover iQ[Al] aluminium',
          bodyStyles: ['SUV'],
          summary: 'Jaguar\'s first and most successful SUV, using an aluminium-intensive platform for class-leading weight reduction. The 2021 facelift introduced PIVI Pro infotainment, a revised interior, and expanded the P400e plug-in hybrid to 80 km electric range.',
          heroImage: 'f-pace-x761',
          variants: [
            {
              id: 'jaguar-f-pace-x761-d300',
              name: 'F-Pace D300',
              years: '2016–present',
              priceBand: '€28,000+ used',
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
                drive: 'AWD',
                acceleration0100: 6.4,
                topSpeedKmh: 241,
                consumptionL100: 7.0,
                co2Gkm: 183
              },
              dimensions: {
                lengthMm: 4731,
                widthMm: 1936,
                heightMm: 1656,
                wheelbaseMm: 2874,
                bootLitres: 650,
                weightKg: 1895,
                tankLitres: 82
              },
              options: safetyComfort(['adaptive cruise control', 'head-up display', 'Meridian 3D Surround audio', 'panoramic roof', 'ClearSight ground view']),
              knownFor: ['class-leading handling dynamics for an SUV', 'smooth 6-cylinder diesel', 'premium aluminium construction', 'distinctive British design'],
              watchOut: ['fuel consumption higher in real world', 'infotainment reliability concerns pre-facelift', 'dealer servicing costs above average', 'interior quality falls short of German rivals']
            },
            {
              id: 'jaguar-f-pace-x761-p400e',
              name: 'F-Pace P400e',
              years: '2021–present',
              priceBand: '€45,000+ new',
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
                drive: 'AWD',
                acceleration0100: 5.3,
                topSpeedKmh: 240,
                electricRangeKm: 53,
                consumptionL100: 2.5,
                co2Gkm: 56
              },
              dimensions: {
                lengthMm: 4731,
                widthMm: 1936,
                heightMm: 1656,
                wheelbaseMm: 2874,
                bootLitres: 585,
                weightKg: 2070,
                tankLitres: 65
              },
              options: safetyComfort(['adaptive cruise control', 'head-up display', 'Meridian 3D Surround audio', 'panoramic roof', 'air suspension']),
              knownFor: ['low CO2 for benefit-in-kind taxation', 'AWD performance with EV efficiency', 'fast-charging capability', 'premium PHEV in the class'],
              watchOut: ['real-world electric range shorter in cold weather', 'boot reduced by battery pack', 'heavier than diesel equivalents', 'charging infrastructure dependent']
            }
          ]
        }
      ]
    },
    {
      id: 'i-pace',
      name: 'I-Pace',
      segment: 'Electric Premium SUV',
      description: 'The Jaguar I-Pace was the first fully electric vehicle from the brand and won the World Car of the Year award in 2019. It uses a purpose-designed electric architecture with dual motors and a 90 kWh battery offering around 450 km of range.',
      tags: ['electric', 'SUV', 'premium', 'AWD', 'award-winning'],
      generations: [
        {
          id: 'i-pace-x590',
          name: 'I-Pace (X590)',
          years: '2018–present',
          platform: 'Jaguar I-Pace bespoke EV platform',
          bodyStyles: ['SUV'],
          summary: 'The I-Pace was designed from the ground up as an EV, with dual permanent magnet motors, a 90 kWh battery, and a low centre of gravity for exceptional dynamics. A 2021 update brought faster 11 kW AC charging and updated infotainment.',
          heroImage: 'i-pace-x590',
          variants: [
            {
              id: 'jaguar-i-pace-x590-ev400',
              name: 'I-Pace EV400',
              years: '2018–present',
              priceBand: '€35,000+ used',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 400,
                powerKw: 294,
                torqueNm: 696,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.8,
                topSpeedKmh: 200,
                electricRangeKm: 470
              },
              dimensions: {
                lengthMm: 4682,
                widthMm: 2139,
                heightMm: 1565,
                wheelbaseMm: 2990,
                bootLitres: 656,
                weightKg: 2208
              },
              options: evComfort(['adaptive surface response', 'ClearSight rear-view camera', 'Meridian surround audio', 'air suspension', 'panoramic roof']),
              knownFor: ['World Car of the Year 2019', 'genuine SUV dynamics from an EV', 'strong AWD traction', 'distinctive cab-forward design'],
              watchOut: ['real-world range shorter than WLTP in cold weather', 'DC fast charging limited to 100 kW', 'thermal management of battery in extreme temperatures', 'infotainment updates required on early cars']
            }
          ]
        }
      ]
    },
    {
      id: 'f-type',
      name: 'F-Type',
      segment: 'Sports Car',
      description: 'The Jaguar F-Type is the brand\'s pure sports car, reviving the spirit of the E-Type. Available as a coupe and convertible, with a range of V6 and V8 supercharged engines, it delivers visceral performance and distinctive exhaust character.',
      tags: ['sports', 'coupe', 'convertible', 'supercharged', 'v8', 'iconic'],
      generations: [
        {
          id: 'f-type-x152',
          name: 'F-Type (X152)',
          years: '2013–2024',
          platform: 'Jaguar XK platform derived',
          bodyStyles: ['Coupe', 'Convertible'],
          summary: 'The F-Type debuted as a convertible in 2013 with supercharged V6 and V8 engines, with the coupe following in 2014. A 2020 facelift brought a new 2.0-litre four-cylinder option and updated tech, while the R remained the flagship with 575 hp.',
          heroImage: 'f-type-x152',
          variants: [
            {
              id: 'jaguar-f-type-x152-p450',
              name: 'F-Type P450',
              years: '2020–2024',
              priceBand: '€55,000+ new',
              specs: {
                engine: '5.0 V8 supercharged',
                engineCode: 'AJ133',
                displacementCc: 4999,
                cylinders: 'V8',
                powerHp: 450,
                powerKw: 331,
                torqueNm: 580,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 5.4,
                topSpeedKmh: 275,
                consumptionL100: 13.5,
                co2Gkm: 307
              },
              dimensions: {
                lengthMm: 4470,
                widthMm: 1923,
                heightMm: 1311,
                wheelbaseMm: 2622,
                bootLitres: 196,
                weightKg: 1614,
                tankLitres: 70
              },
              options: safetyComfort(['configurable dynamics', 'Meridian 3D Surround audio', 'sports exhaust', 'carbon fibre trim', 'electronic active rear differential']),
              knownFor: ['iconic exhaust sound', 'visceral V8 performance', 'beautiful coupe proportions', 'true Jaguar sports car lineage'],
              watchOut: ['high fuel consumption', 'minimal interior storage', 'small boot', 'carbon fibre options add significantly to cost']
            },
            {
              id: 'jaguar-f-type-x152-r',
              name: 'F-Type R',
              years: '2014–2024',
              priceBand: '€70,000+ new',
              specs: {
                engine: '5.0 V8 supercharged',
                engineCode: 'AJ133R',
                displacementCc: 4999,
                cylinders: 'V8',
                powerHp: 575,
                powerKw: 423,
                torqueNm: 700,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.7,
                topSpeedKmh: 300,
                consumptionL100: 14.5,
                co2Gkm: 330
              },
              dimensions: {
                lengthMm: 4470,
                widthMm: 1923,
                heightMm: 1311,
                wheelbaseMm: 2622,
                bootLitres: 196,
                weightKg: 1745,
                tankLitres: 70
              },
              options: safetyComfort(['configurable dynamics', 'carbon ceramic brakes', 'Meridian 3D Surround audio', 'sports exhaust', 'carbon fibre package']),
              knownFor: ['supercar-rivalling performance', 'sonorous supercharged V8', 'AWD traction in all conditions', 'theatre of noise and speed'],
              watchOut: ['very high fuel costs', 'carbon ceramic brakes expensive to replace', 'harsh ride on sport settings', 'heavy for a sports coupe with AWD']
            }
          ]
        }
      ]
    }
  ]
};
