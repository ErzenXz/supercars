import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const maserati: CarMake = {
  id: 'maserati',
  name: 'Maserati',
  country: 'Italy',
  logoText: 'M',
  models: [
    {
      id: 'ghibli',
      name: 'Ghibli',
      segment: 'Executive Sedan',
      description: 'The Maserati Ghibli is the brand\'s entry-level executive saloon, offering a choice of Ferrari-derived twin-turbo V6 petrol and diesel engines in a four-door fastback body. It brought Maserati ownership within reach of a wider audience while retaining Italian character.',
      tags: ['sedan', 'executive', 'V6', 'twin-turbo', 'Italian', 'luxury'],
      generations: [
        {
          id: 'ghibli-iii',
          name: 'Ghibli III (M157)',
          years: '2013–2023',
          platform: 'Maserati M157',
          bodyStyles: ['Sedan'],
          summary: 'The third-generation Ghibli revived the nameplate with a stylish fastback body, Ferrari-derived twin-turbo V6 engines in both petrol and diesel form, and an 8-speed ZF automatic. A mild-hybrid Ghibli Hybrid arrived in 2021.',
          heroImage: 'ghibli-iii',
          variants: [
            {
              id: 'maserati-ghibli-iii-gts',
              name: 'Ghibli GTS',
              years: '2016–2023',
              priceBand: '€35,000+ used',
              specs: {
                engine: '3.0 V6 twin-turbo',
                engineCode: 'M156B',
                displacementCc: 2979,
                cylinders: 'V6',
                powerHp: 430,
                powerKw: 316,
                torqueNm: 580,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 4.7,
                topSpeedKmh: 286,
                consumptionL100: 12.3,
                co2Gkm: 280
              },
              dimensions: {
                lengthMm: 4970,
                widthMm: 1945,
                heightMm: 1461,
                wheelbaseMm: 2998,
                bootLitres: 500,
                weightKg: 1820,
                tankLitres: 80
              },
              options: safetyComfort(['Skyhook adaptive suspension', 'Bose/Harman Kardon audio', 'carbon fibre interior trim', 'panoramic sunroof', 'driver assistance package']),
              knownFor: ['Ferrari-derived V6 exhaust sound', 'distinctive Italian design in the class', 'genuine rear-drive balance', 'luxurious interior materials'],
              watchOut: ['reliability below German rivals', 'infotainment dated towards end of production', 'depreciation very steep', 'dealer network smaller than BMW/Mercedes']
            }
          ]
        }
      ]
    },
    {
      id: 'quattroporte',
      name: 'Quattroporte',
      segment: 'Full-Size Luxury Sedan',
      description: 'The Quattroporte is Maserati\'s flagship four-door saloon and one of the most characterful large luxury cars available. In its sixth generation it offers a range of Ferrari-derived V6 and V8 twin-turbo engines with the sporting character Maserati is renowned for.',
      tags: ['sedan', 'flagship', 'luxury', 'V8', 'V6', 'gran-turismo'],
      generations: [
        {
          id: 'quattroporte-vi',
          name: 'Quattroporte VI (M156)',
          years: '2013–2023',
          platform: 'Maserati M156',
          bodyStyles: ['Sedan'],
          summary: 'The sixth-generation Quattroporte uses a stretched version of the Ghibli platform with Ferrari-derived twin-turbo V6 and V8 engines. The GTS and Trofeo trim levels use a 580 hp twin-turbo V8 for genuine sports saloon performance in a large body.',
          heroImage: 'quattroporte-vi',
          variants: [
            {
              id: 'maserati-quattroporte-vi-trofeo',
              name: 'Quattroporte Trofeo',
              years: '2019–2023',
              priceBand: '€60,000+ used',
              specs: {
                engine: '3.8 V8 twin-turbo',
                engineCode: 'M158B',
                displacementCc: 3799,
                cylinders: 'V8',
                powerHp: 580,
                powerKw: 426,
                torqueNm: 730,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 4.5,
                topSpeedKmh: 326,
                consumptionL100: 15.0,
                co2Gkm: 344
              },
              dimensions: {
                lengthMm: 5262,
                widthMm: 1948,
                heightMm: 1481,
                wheelbaseMm: 3171,
                bootLitres: 530,
                weightKg: 1990,
                tankLitres: 80
              },
              options: safetyComfort(['Skyhook adaptive suspension', 'Harman Kardon premium audio', 'full leather interior', 'piano black trim', 'rear seat entertainment']),
              knownFor: ['580 hp V8 with characterful exhaust note', 'generous rear passenger space', 'exotic Italian alternative to S-Class', 'handsome long-wheelbase proportions'],
              watchOut: ['running costs high relative to German rivals', 'ageing interior design at end of run', 'limited dealership network', 'resale values very poor']
            }
          ]
        }
      ]
    },
    {
      id: 'levante',
      name: 'Levante',
      segment: 'Luxury SUV',
      description: 'The Maserati Levante is the brand\'s first SUV in over 50 years, combining an elegantly Italian exterior with a range of twin-turbo V6 and V8 engines. It offers genuine road car dynamics alongside SUV practicality, in a distinctly Italian luxury package.',
      tags: ['SUV', 'luxury', 'V6', 'V8', 'twin-turbo', 'Italian', 'AWD'],
      generations: [
        {
          id: 'levante-i',
          name: 'Levante I (M161)',
          years: '2016–present',
          platform: 'Maserati M161',
          bodyStyles: ['SUV'],
          summary: 'The Levante was built on a modified Ghibli/Quattroporte platform stretched for SUV duty with air suspension and AWD. The Trofeo uses a Ferrari-derived 590 hp V8, while the standard S uses a 430 hp V6 diesel and petrol.',
          heroImage: 'levante-i',
          variants: [
            {
              id: 'maserati-levante-i-trofeo',
              name: 'Levante Trofeo',
              years: '2019–present',
              priceBand: '€70,000+ used',
              specs: {
                engine: '3.8 V8 twin-turbo',
                engineCode: 'M158B',
                displacementCc: 3799,
                cylinders: 'V8',
                powerHp: 590,
                powerKw: 434,
                torqueNm: 730,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 4.1,
                topSpeedKmh: 302,
                consumptionL100: 16.0,
                co2Gkm: 366
              },
              dimensions: {
                lengthMm: 5003,
                widthMm: 2004,
                heightMm: 1679,
                wheelbaseMm: 3004,
                bootLitres: 580,
                weightKg: 2149,
                tankLitres: 90
              },
              options: safetyComfort(['Skyhook air suspension', 'Harman Kardon premium audio', 'carbon fibre exterior trim', 'panoramic sunroof', 'full-size spare wheel']),
              knownFor: ['Ferrari V8 sound in an Italian SUV', 'unique alternative to Porsche Cayenne Turbo', 'beautiful Italian exterior design', 'true AWD with off-road modes'],
              watchOut: ['reliability concerns vs German SUV rivals', 'interior showing age', 'very high fuel consumption', 'limited service network']
            }
          ]
        }
      ]
    },
    {
      id: 'grecale',
      name: 'Grecale',
      segment: 'Compact Luxury SUV',
      description: 'The Maserati Grecale is a compact luxury SUV built on Stellantis\'s Giorgio platform, offering mild-hybrid 4-cylinder petrol engines, a twin-turbo V6 Trofeo, and the fully electric Folgore variant. It represents Maserati\'s entry into the growing premium compact SUV segment.',
      tags: ['SUV', 'compact', 'luxury', 'mild-hybrid', 'electric', 'Folgore', 'AWD'],
      generations: [
        {
          id: 'grecale-i',
          name: 'Grecale I',
          years: '2022–present',
          platform: 'Stellantis Giorgio platform',
          bodyStyles: ['SUV'],
          summary: 'The Grecale on the Giorgio platform offers a 2.0 mild-hybrid GT and Modena, a twin-turbo V6 Trofeo producing 530 hp, and the Folgore all-electric version with 105 kWh battery for approximately 480 km of range.',
          heroImage: 'grecale-i',
          variants: [
            {
              id: 'maserati-grecale-i-trofeo',
              name: 'Grecale Trofeo',
              years: '2022–present',
              priceBand: '€120,000+ new',
              specs: {
                engine: '3.0 V6 twin-turbo Nettuno',
                engineCode: 'M180B',
                displacementCc: 2992,
                cylinders: 'V6',
                powerHp: 530,
                powerKw: 390,
                torqueNm: 620,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.8,
                topSpeedKmh: 285,
                consumptionL100: 12.5,
                co2Gkm: 285
              },
              dimensions: {
                lengthMm: 4846,
                widthMm: 2159,
                heightMm: 1670,
                wheelbaseMm: 2901,
                bootLitres: 535,
                weightKg: 2050,
                tankLitres: 63
              },
              options: safetyComfort(['Sonus Faber audio system', 'panoramic sunroof', 'carbon fibre interior package', 'air suspension lift', 'Maserati Driver Assistance Plus']),
              knownFor: ['Nettuno V6 with F1-derived pre-chamber combustion', 'sharp handling for a compact luxury SUV', 'distinctive Maserati design language', 'strong performance credentials'],
              watchOut: ['smaller boot than some rivals', 'software quality issues reported early on', 'high price for Stellantis platform', 'limited driver assist vs German competition']
            },
            {
              id: 'maserati-grecale-i-folgore',
              name: 'Grecale Folgore',
              years: '2023–present',
              priceBand: '€120,000+ new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 557,
                powerKw: 410,
                torqueNm: 820,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.1,
                topSpeedKmh: 220,
                electricRangeKm: 480
              },
              dimensions: {
                lengthMm: 4846,
                widthMm: 2159,
                heightMm: 1670,
                wheelbaseMm: 2901,
                bootLitres: 535,
                weightKg: 2480
              },
              options: evComfort(['Sonus Faber audio system', 'panoramic sunroof', 'air suspension', 'ultra-fast 150 kW DC charging']),
              knownFor: ['first electric Maserati SUV', 'impressive torque delivery from standstill', 'Italian design in an EV package', 'sophisticated cabin materials'],
              watchOut: ['considerable weight affects dynamics', 'charging network parity with Tesla not yet met', 'high price for the segment', 'real-world range in cold climates reduced']
            }
          ]
        }
      ]
    },
    {
      id: 'granturismo',
      name: 'GranTurismo',
      segment: 'Grand Tourer',
      description: 'The Maserati GranTurismo is the brand\'s iconic 2+2 grand tourer, revived in 2023 with both a new twin-turbo V6 Nettuno petrol engine and the groundbreaking Folgore all-electric powertrain. Beautiful, fast, and distinctly Italian.',
      tags: ['grand-tourer', 'coupe', 'V6', 'electric', 'Nettuno', 'Folgore', '2+2'],
      generations: [
        {
          id: 'granturismo-ii',
          name: 'GranTurismo II',
          years: '2022–present',
          platform: 'Maserati GA platform',
          bodyStyles: ['Coupe'],
          summary: 'The second-generation GranTurismo shares its platform with the MC20. The Modena and Trofeo trim levels use the F1-derived Nettuno V6, while the Folgore variant uses three electric motors for 760 hp and over 400 km of EV range in a stunning coupe body.',
          heroImage: 'granturismo-ii',
          variants: [
            {
              id: 'maserati-granturismo-ii-trofeo',
              name: 'GranTurismo Trofeo',
              years: '2023–present',
              priceBand: '€210,000+ new',
              specs: {
                engine: '3.0 V6 twin-turbo Nettuno',
                engineCode: 'M180',
                displacementCc: 2992,
                cylinders: 'V6',
                powerHp: 550,
                powerKw: 404,
                torqueNm: 650,
                fuel: 'Petrol',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.5,
                topSpeedKmh: 320,
                consumptionL100: 12.0,
                co2Gkm: 275
              },
              dimensions: {
                lengthMm: 4957,
                widthMm: 1957,
                heightMm: 1353,
                wheelbaseMm: 2946,
                bootLitres: 270,
                weightKg: 1855,
                tankLitres: 75
              },
              options: safetyComfort(['Sonus Faber 21-speaker audio', 'carbon fibre roof', 'carbon ceramic brakes', 'Alcantara headliner', 'panoramic glass roof']),
              knownFor: ['Nettuno F1-derived V6 pre-chamber combustion', 'exceptional Italian 2+2 GT proportions', 'genuine AWD performance credentials', 'Sonus Faber concert hall audio'],
              watchOut: ['smaller rear seats than previous generation', 'high servicing costs', 'options list significantly inflates price', 'reliability data early in model life limited']
            },
            {
              id: 'maserati-granturismo-ii-folgore',
              name: 'GranTurismo Folgore',
              years: '2023–present',
              priceBand: '€230,000+ new',
              specs: {
                engine: 'triple permanent-magnet synchronous motors',
                powerHp: 760,
                powerKw: 559,
                torqueNm: 1350,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 2.7,
                topSpeedKmh: 325,
                electricRangeKm: 430
              },
              dimensions: {
                lengthMm: 4957,
                widthMm: 1957,
                heightMm: 1363,
                wheelbaseMm: 2946,
                bootLitres: 270,
                weightKg: 2350
              },
              options: evComfort(['Sonus Faber 21-speaker audio', 'carbon fibre roof', '270 kW DC fast charging', 'Alcantara headliner', 'panoramic glass roof']),
              knownFor: ['760 hp electric grand tourer', '1,350 Nm of instant torque', 'first electric supercar GranTurismo', 'stunning design regardless of powertrain'],
              watchOut: ['substantial weight penalty vs petrol version', '430 km range optimistic in real-world conditions', 'high price for the class', 'charging infrastructure for 270 kW limited']
            }
          ]
        }
      ]
    },
    {
      id: 'mc20',
      name: 'MC20',
      segment: 'Supercar',
      description: 'The Maserati MC20 is the brand\'s first purpose-built supercar since the MC12 of 2004. A mid-engined two-seater with a carbon fibre monocoque, it uses the Nettuno twin-turbo V6 with F1-derived pre-chamber combustion technology to produce 630 hp from 3.0 litres.',
      tags: ['supercar', 'V6', 'Nettuno', 'mid-engine', 'carbon', 'coupe', 'butterfly-doors'],
      generations: [
        {
          id: 'mc20-i',
          name: 'MC20 I',
          years: '2021–present',
          platform: 'Maserati GA (carbon monocoque)',
          bodyStyles: ['Coupe'],
          summary: 'The MC20 was built to reclaim Maserati\'s motorsport heritage. Its carbon fibre monocoque saves weight and adds rigidity, while the Nettuno V6 uses pre-chamber combustion borrowed from Formula 1 to achieve exceptional specific output. Butterfly doors give dramatic visual presence.',
          heroImage: 'mc20-i',
          variants: [
            {
              id: 'maserati-mc20-i-nettuno',
              name: 'MC20 Nettuno',
              years: '2021–present',
              priceBand: '€220,000+ new',
              specs: {
                engine: '3.0 V6 twin-turbo Nettuno',
                engineCode: 'M180',
                displacementCc: 2992,
                cylinders: 'V6',
                powerHp: 630,
                powerKw: 463,
                torqueNm: 730,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 2.9,
                topSpeedKmh: 325,
                consumptionL100: 11.9,
                co2Gkm: 272
              },
              dimensions: {
                lengthMm: 4669,
                widthMm: 1965,
                heightMm: 1220,
                wheelbaseMm: 2700,
                bootLitres: 50,
                weightKg: 1500,
                tankLitres: 68
              },
              options: safetyComfort(['Brembo carbon ceramic brakes', 'Sonus Faber audio system', 'carbon fibre lightweight package', 'titanium exhaust', 'Sabelt racing harness']),
              knownFor: ['F1-derived pre-chamber combustion Nettuno engine', 'dramatic butterfly doors', 'first mid-engine Maserati road car since MC12', 'carbon monocoque for exceptional rigidity'],
              watchOut: ['limited luggage space of just 50 litres', 'servicing requires Maserati specialist', 'small Maserati dealer network', 'long-term reliability track record still building']
            }
          ]
        }
      ]
    }
  ]
};
