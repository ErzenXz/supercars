import type { CarMake } from '../../types';
import { safetyComfort } from '../_shared';

export const lamborghini: CarMake = {
  id: 'lamborghini',
  name: 'Lamborghini',
  country: 'Italy',
  logoText: 'L',
  models: [
    {
      id: 'huracan',
      name: 'Huracán',
      segment: 'Supercar',
      description: 'The Lamborghini Huracán is the successor to the Gallardo and uses a naturally aspirated 5.2-litre V10. Available in multiple variants ranging from the all-wheel drive LP 610-4 to the hardcore STO and Tecnica rear-drive models, it is the most successful Lamborghini in history.',
      tags: ['supercar', 'V10', 'naturally-aspirated', 'mid-engine', 'coupe', 'rear-drive'],
      generations: [
        {
          id: 'huracan-i',
          name: 'Huracán (LB724)',
          years: '2014–2024',
          platform: 'Lamborghini LB724 / VW Group MLB',
          bodyStyles: ['Coupe'],
          summary: 'Built on a carbon-aluminium composite chassis, the Huracán uses a 5.2-litre naturally aspirated V10 mated to a 7-speed LDF dual-clutch gearbox. The STO (Super Trofeo Omologata) and Tecnica brought rear-drive purity and track-focused aerodynamics to the range.',
          heroImage: 'huracan-i',
          variants: [
            {
              id: 'lamborghini-huracan-i-tecnica',
              name: 'Huracán Tecnica',
              years: '2022–2024',
              priceBand: '€240,000+ new',
              specs: {
                engine: '5.2 V10 naturally aspirated',
                engineCode: 'LP640-2',
                displacementCc: 5204,
                cylinders: 'V10',
                powerHp: 640,
                powerKw: 470,
                torqueNm: 565,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'RWD',
                acceleration0100: 3.2,
                topSpeedKmh: 325,
                consumptionL100: 14.7,
                co2Gkm: 336
              },
              dimensions: {
                lengthMm: 4520,
                widthMm: 1933,
                heightMm: 1165,
                wheelbaseMm: 2620,
                bootLitres: 100,
                weightKg: 1379,
                tankLitres: 83
              },
              options: safetyComfort(['Lamborghini Dinamica Veicolo Integrata LDVI', 'carbon ceramic brakes CCBS', 'Sensonum premium audio', 'Lamborghini telemetry system', 'carbon fibre lightweight package']),
              knownFor: ['screaming naturally aspirated V10 to 8,000 rpm', 'pure rear-wheel drive dynamics', 'Huracán STO-derived aerodynamics', 'balance of road usability and track ability'],
              watchOut: ['very loud at full throttle in traffic', 'rear seats absent — pure two-seater', 'running costs significant', 'manual option not available']
            },
            {
              id: 'lamborghini-huracan-i-sto',
              name: 'Huracán STO',
              years: '2021–2024',
              priceBand: '€290,000+ new',
              specs: {
                engine: '5.2 V10 naturally aspirated',
                engineCode: 'LP640-2',
                displacementCc: 5204,
                cylinders: 'V10',
                powerHp: 640,
                powerKw: 470,
                torqueNm: 565,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'RWD',
                acceleration0100: 3.0,
                topSpeedKmh: 310,
                consumptionL100: 14.9,
                co2Gkm: 340
              },
              dimensions: {
                lengthMm: 4549,
                widthMm: 1945,
                heightMm: 1220,
                wheelbaseMm: 2620,
                bootLitres: 0,
                weightKg: 1339,
                tankLitres: 83
              },
              options: safetyComfort(['Lamborghini telemetry data logger', 'ALA 2.0 active aerodynamics', 'carbon fibre one-piece bonnet-front fenders', 'racing harness preparation', 'racing bucket seats']),
              knownFor: ['90% carbon fibre bodywork from Super Trofeo race car', 'active aerodynamics ALA 2.0 system', 'lightest rear-drive Huracán', 'approved for circuit use with road registration'],
              watchOut: ['firm ride on road surfaces', 'near-zero boot space', 'loud interior due to weight-saving', 'limited colour and option flexibility vs standard Huracán']
            }
          ]
        }
      ]
    },
    {
      id: 'revuelto',
      name: 'Revuelto',
      segment: 'Hypercar',
      description: 'The Lamborghini Revuelto is the successor to the Aventador and the brand\'s first plug-in hybrid. It combines a naturally aspirated 6.5-litre V12 with three electric motors for 1,015 hp total, representing a revolution in Lamborghini\'s V12 bloodline.',
      tags: ['hypercar', 'V12', 'PHEV', 'hybrid', 'mid-engine', 'coupe', 'flagship'],
      generations: [
        {
          id: 'revuelto-i',
          name: 'Revuelto I',
          years: '2023–present',
          platform: 'Lamborghini HPEV platform',
          bodyStyles: ['Coupe'],
          summary: 'The Revuelto uses a revised 6.5-litre V12 producing 825 hp at 9,250 rpm plus three electric motors: two on the front axle and one integrated with the 8-speed single-clutch gearbox. The carbon fibre monocoque saves weight while accommodating the high-voltage battery.',
          heroImage: 'revuelto-i',
          variants: [
            {
              id: 'lamborghini-revuelto-i-phev',
              name: 'Revuelto PHEV',
              years: '2023–present',
              priceBand: '€500,000+ new',
              specs: {
                engine: '6.5 V12 naturally aspirated + 3 e-motors',
                engineCode: 'L545',
                displacementCc: 6498,
                cylinders: 'V12',
                powerHp: 1015,
                powerKw: 746,
                torqueNm: 730,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 2.5,
                topSpeedKmh: 350,
                electricRangeKm: 10,
                consumptionL100: 10.0,
                co2Gkm: 228
              },
              dimensions: {
                lengthMm: 4947,
                widthMm: 2033,
                heightMm: 1160,
                wheelbaseMm: 2700,
                bootLitres: 0,
                weightKg: 1772,
                tankLitres: 90
              },
              options: safetyComfort(['Lamborghini active aerodynamics', 'carbon ceramic brakes', 'carbon fibre monocoque', 'Sensonum premium audio', 'telemetry racing system']),
              knownFor: ['1,015 hp V12 PHEV screaming to 9,250 rpm', 'electric AWD torque vectoring', 'successor to the legendary Aventador', 'most powerful Lamborghini production car'],
              watchOut: ['limited electric-only range of 10 km', 'single-clutch gearbox can be jerky at low speed', 'very long waiting list at launch', 'ownership costs extraordinary']
            }
          ]
        }
      ]
    },
    {
      id: 'urus',
      name: 'Urus',
      segment: 'Super SUV',
      description: 'The Lamborghini Urus is the brand\'s first SUV since the LM002 and uses a twin-turbo 4.0-litre V8 producing 650 hp in S guise and 666 hp in the Performante. Built on the Volkswagen Group MLB Evo platform, it is Lamborghini\'s best-selling model by far.',
      tags: ['SUV', 'V8', 'twin-turbo', 'performance-SUV', 'AWD', 'luxury'],
      generations: [
        {
          id: 'urus-i',
          name: 'Urus I',
          years: '2018–present',
          platform: 'Volkswagen Group MLB Evo',
          bodyStyles: ['SUV'],
          summary: 'The Urus uses the Volkswagen Group\'s MLB Evo platform with extensive Lamborghini modifications. The Urus S replaced the original in 2023 with 666 hp and revised suspension, while the Performante adds track-focused aero, Pirelli Trofeo R tyres, and a stiffened chassis.',
          heroImage: 'urus-i',
          variants: [
            {
              id: 'lamborghini-urus-i-s',
              name: 'Urus S',
              years: '2023–present',
              priceBand: '€230,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'DYS',
                displacementCc: 3996,
                cylinders: 'V8',
                powerHp: 666,
                powerKw: 490,
                torqueNm: 850,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.5,
                topSpeedKmh: 305,
                consumptionL100: 14.0,
                co2Gkm: 325
              },
              dimensions: {
                lengthMm: 5112,
                widthMm: 2016,
                heightMm: 1638,
                wheelbaseMm: 3003,
                bootLitres: 616,
                weightKg: 2197,
                tankLitres: 85
              },
              options: safetyComfort(['active roll stabilisation ARCS', 'carbon ceramic brakes', 'Lamborghini telemetry', 'Sensonum / Bang & Olufsen audio', 'rear entertainment system']),
              knownFor: ['fastest production SUV at launch', 'Lamborghini design drama in SUV form', 'genuinely usable daily driver', 'enormous road presence'],
              watchOut: ['very high fuel consumption', 'large dimensions challenge tight parking', 'depreciates faster than Porsche Cayenne rival', 'road tax significant in many markets']
            },
            {
              id: 'lamborghini-urus-i-performante',
              name: 'Urus Performante',
              years: '2022–present',
              priceBand: '€270,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo',
                engineCode: 'DYS',
                displacementCc: 3996,
                cylinders: 'V8',
                powerHp: 666,
                powerKw: 490,
                torqueNm: 850,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.3,
                topSpeedKmh: 306,
                consumptionL100: 14.5,
                co2Gkm: 335
              },
              dimensions: {
                lengthMm: 5112,
                widthMm: 2016,
                heightMm: 1616,
                wheelbaseMm: 3003,
                bootLitres: 616,
                weightKg: 2150,
                tankLitres: 85
              },
              options: safetyComfort(['Pirelli P Zero Trofeo R tyres', 'carbon ceramic brakes standard', 'carbon fibre front bumper, bonnet, roof', 'stiffened sport suspension', 'roll cage preparation']),
              knownFor: ['lighter and sharper than standard Urus', 'Pirelli Trofeo R tyres for track use', 'aggressive aero body kit', 'track-oriented SUV with practical interior'],
              watchOut: ['Trofeo R tyres unsuitable for wet winter driving', 'very stiff ride in urban environments', 'limited boot with spare wheel', 'premium over Urus S substantial']
            }
          ]
        }
      ]
    }
  ]
};
