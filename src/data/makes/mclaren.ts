import type { CarMake } from '../../types';
import { safetyComfort } from '../_shared';

export const mclaren: CarMake = {
  id: 'mclaren',
  name: 'McLaren',
  country: 'United Kingdom',
  logoText: 'M',
  models: [
    {
      id: 'artura',
      name: 'Artura',
      segment: 'Supercar',
      description: 'The McLaren Artura is the brand\'s first series-production High Performance Hybrid, combining a new twin-turbo V6 with an e-motor to produce 680 hp. Built on an all-new carbon fibre architecture, it represents the next chapter of McLaren performance.',
      tags: ['supercar', 'PHEV', 'plug-in-hybrid', 'V6', 'carbon-fibre', 'track'],
      generations: [
        {
          id: 'artura-gen1',
          name: 'Artura',
          years: '2022–present',
          platform: 'McLaren MCLA carbon fibre monocoque',
          bodyStyles: ['Coupe'],
          summary: 'The Artura introduced McLaren\'s first all-new V6 engine in decades, a twin-turbo 3.0-litre unit paired with an axial-flux e-motor for a combined 680 hp. An 8-speed DCT and a 7.4 kWh battery enable 30 km of pure EV driving. The MCLA carbon architecture debuts here.',
          heroImage: 'artura-gen1',
          variants: [
            {
              id: 'mclaren-artura-gen1-hpv',
              name: 'Artura HPH',
              years: '2022–present',
              priceBand: '€220,000+ new',
              specs: {
                engine: '3.0 V6 twin-turbo + axial-flux e-motor',
                engineCode: 'M630T',
                displacementCc: 2993,
                cylinders: 'V6',
                powerHp: 680,
                powerKw: 500,
                torqueNm: 720,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 3.0,
                topSpeedKmh: 330,
                electricRangeKm: 30,
                consumptionL100: 9.0,
                co2Gkm: 204
              },
              dimensions: {
                lengthMm: 4539,
                widthMm: 2161,
                heightMm: 1193,
                wheelbaseMm: 2640,
                bootLitres: 150,
                weightKg: 1498,
                tankLitres: 55
              },
              options: safetyComfort(['McLaren Track Telemetry', 'carbon ceramic brakes', 'sports exhaust system', 'Bowers & Wilkins audio', 'MSO exterior upgrade']),
              knownFor: ['first McLaren series PHEV supercar', 'incredibly low weight for a PHEV', 'new V6 with instant e-motor response', 'MCLA carbon monocoque architecture'],
              watchOut: ['early production reliability teething issues', 'limited EV range practical use only', 'high service costs', 'dealer network limited outside key markets']
            }
          ]
        }
      ]
    },
    {
      id: '750s',
      name: '750S',
      segment: 'Supercar',
      description: 'The McLaren 750S is the pinnacle of the Sports Series, replacing the 720S. With 750 hp from the twin-turbo V8 and available as Coupe and Spider convertible, it offers the most complete expression of McLaren\'s driver-focused supercar philosophy.',
      tags: ['supercar', 'V8', 'twin-turbo', 'track', 'coupe', 'convertible'],
      generations: [
        {
          id: '750s-gen1',
          name: '750S',
          years: '2023–present',
          platform: 'McLaren MonoCell II-T carbon tub',
          bodyStyles: ['Coupe', 'Convertible'],
          summary: 'The 750S builds on the 720S with an uprated 750 hp V8, revised aerodynamics including a new front bumper and active rear wing, and suspension updates. The Spider variant uses a retractable hard top that opens at speeds up to 50 km/h.',
          heroImage: '750s-gen1',
          variants: [
            {
              id: 'mclaren-750s-gen1-coupe',
              name: '750S Coupe',
              years: '2023–present',
              priceBand: '€260,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'M840TE',
                displacementCc: 3994,
                cylinders: 'V8',
                powerHp: 750,
                powerKw: 551,
                torqueNm: 800,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'RWD',
                acceleration0100: 2.8,
                topSpeedKmh: 332,
                consumptionL100: 14.0,
                co2Gkm: 318
              },
              dimensions: {
                lengthMm: 4546,
                widthMm: 2161,
                heightMm: 1196,
                wheelbaseMm: 2670,
                bootLitres: 150,
                weightKg: 1277,
                tankLitres: 72
              },
              options: safetyComfort(['McLaren Track Telemetry', 'carbon ceramic brakes', 'titanium exhaust', 'Bowers & Wilkins audio', 'MSO Bespoke', 'carbon fibre interior']),
              knownFor: ['one of the fastest road cars in production', 'exceptional power-to-weight ratio', 'active aerodynamics and suspension', 'pure driver-focused supercar'],
              watchOut: ['extremely high running costs', 'minimal luggage space', 'unforgiving on road imperfections', 'very expensive service intervals']
            },
            {
              id: 'mclaren-750s-gen1-spider',
              name: '750S Spider',
              years: '2023–present',
              priceBand: '€285,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'M840TE',
                displacementCc: 3994,
                cylinders: 'V8',
                powerHp: 750,
                powerKw: 551,
                torqueNm: 800,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'RWD',
                acceleration0100: 2.8,
                topSpeedKmh: 329,
                consumptionL100: 14.2,
                co2Gkm: 323
              },
              dimensions: {
                lengthMm: 4546,
                widthMm: 2161,
                heightMm: 1196,
                wheelbaseMm: 2670,
                bootLitres: 150,
                weightKg: 1332,
                tankLitres: 72
              },
              options: safetyComfort(['McLaren Track Telemetry', 'carbon ceramic brakes', 'titanium exhaust', 'Bowers & Wilkins audio', 'MSO Bespoke', 'electrochromic glass']),
              knownFor: ['open-top supercar with hard-top structural rigidity', 'retractable hardtop opens at 50 km/h', 'V8 soundtrack amplified with roof down', 'performance matched to Coupe'],
              watchOut: ['slight weight penalty vs Coupe', 'rear pillar restricts visibility slightly', 'very high cost of ownership', 'limited boot space even for the class']
            }
          ]
        }
      ]
    },
    {
      id: 'gt',
      name: 'GT',
      segment: 'Grand Touring Supercar',
      description: 'The McLaren GT is the most accommodating model in the lineup, designed for effortless long-distance grand touring without sacrificing supercar performance. Its increased luggage space and refined suspension make it the most practical McLaren available.',
      tags: ['grand-tourer', 'GT', 'coupe', 'V8', 'touring', 'comfortable'],
      generations: [
        {
          id: 'gt-gen1',
          name: 'GT',
          years: '2019–present',
          platform: 'McLaren MonoCell II carbon tub',
          bodyStyles: ['Coupe'],
          summary: 'The GT introduced a new front-hinged glass tailgate giving access to a proper luggage area, making it the only McLaren with meaningful touring practicality. A 620 hp V8 provides supercar performance while a softer suspension setup maximises comfort.',
          heroImage: 'gt-gen1',
          variants: [
            {
              id: 'mclaren-gt-gen1-v8',
              name: 'GT',
              years: '2019–present',
              priceBand: '€195,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'M840TE GT',
                displacementCc: 3994,
                cylinders: 'V8',
                powerHp: 620,
                powerKw: 456,
                torqueNm: 630,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'RWD',
                acceleration0100: 3.2,
                topSpeedKmh: 326,
                consumptionL100: 13.4,
                co2Gkm: 305
              },
              dimensions: {
                lengthMm: 4683,
                widthMm: 2045,
                heightMm: 1213,
                wheelbaseMm: 2675,
                bootLitres: 570,
                weightKg: 1466,
                tankLitres: 72
              },
              options: safetyComfort(['McLaren Track Telemetry', 'carbon ceramic brakes', 'Bowers & Wilkins audio', 'sports exhaust', 'MSO Bespoke colour', 'memory seats']),
              knownFor: ['most usable McLaren with real luggage space', 'comfortable long-distance touring ability', 'supercar performance without compromise', 'elegant grand tourer proportions'],
              watchOut: ['slightly softer feel than driver-focused McLarens', 'still demanding in terms of maintenance cost', 'entry price high for the grand tourer segment', 'visibility remains limited as with all McLarens']
            }
          ]
        }
      ]
    }
  ]
};
