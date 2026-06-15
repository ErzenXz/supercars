import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const ferrari: CarMake = {
  id: 'ferrari',
  name: 'Ferrari',
  country: 'Italy',
  logoText: '🐎',
  models: [
    {
      id: 'roma',
      name: 'Roma',
      segment: 'Grand Tourer',
      description: 'The Ferrari Roma is a front-engined 2+ coupe that revives the spirit of elegant, effortless Italian GT motoring. Powered by a twin-turbo V8 and paired with an 8-speed DCT, it blends sculpted beauty with genuine Ferrari performance.',
      tags: ['grand-tourer', 'V8', 'elegant', 'front-engine', 'DCT', 'coupe'],
      generations: [
        {
          id: 'roma-i',
          name: 'Roma I',
          years: '2020–present',
          platform: 'Ferrari front-mid V8 platform',
          bodyStyles: ['Coupe'],
          summary: 'Launched in 2019, the Roma uses the same 3.9-litre twin-turbo V8 found in the California T successor, delivering 620 hp through Ferrari\'s 8-speed DCT. Its clean, fastback silhouette and driver-focused interior brought new buyers to the brand.',
          heroImage: 'roma-i',
          variants: [
            {
              id: 'ferrari-roma-i-620hp',
              name: 'Roma 620',
              years: '2020–present',
              priceBand: '€220,000+ new',
              specs: {
                engine: '3.9 V8 twin-turbo',
                engineCode: 'F154CD',
                displacementCc: 3855,
                cylinders: 'V8',
                powerHp: 620,
                powerKw: 456,
                torqueNm: 760,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 3.4,
                topSpeedKmh: 320,
                consumptionL100: 11.0,
                co2Gkm: 249
              },
              dimensions: {
                lengthMm: 4656,
                widthMm: 1974,
                heightMm: 1301,
                wheelbaseMm: 2670,
                bootLitres: 272,
                weightKg: 1472,
                tankLitres: 69
              },
              options: safetyComfort(['carbon ceramic brakes', 'Daytona-style racing seats', 'carbon fibre trim package', 'JBL premium audio']),
              knownFor: ['stunning Italian design language', 'effortless V8 torque delivery', 'excellent GT comfort for a Ferrari', 'clean fastback silhouette'],
              watchOut: ['tight rear 2+ seating', 'options inflate price significantly', 'carbon ceramic brakes noisy when cold', 'high servicing costs']
            }
          ]
        }
      ]
    },
    {
      id: 'portofino-m',
      name: 'Portofino M',
      segment: 'Grand Tourer Convertible',
      description: 'The Portofino M is Ferrari\'s entry-level open-top grand tourer, offering a folding hard-top convertible body with a 620 hp twin-turbo V8. The \'M\' (Modificata) update brought a new 8-speed DCT and a fifth driving mode for a sharper dynamic edge.',
      tags: ['convertible', 'grand-tourer', 'V8', 'twin-turbo', 'front-engine', 'entry-level'],
      generations: [
        {
          id: 'portofino-m-i',
          name: 'Portofino M',
          years: '2021–present',
          platform: 'Ferrari front-mid V8 platform',
          bodyStyles: ['Convertible'],
          summary: 'The Modificata update over the Portofino brought the 8-speed DCT replacing the 7-speed unit, 620 hp, a fifth Bumpy Road driving mode, and revised bumpers. It remains Ferrari\'s most accessible open-air sports car.',
          heroImage: 'portofino-m-i',
          variants: [
            {
              id: 'ferrari-portofino-m-i-620hp',
              name: 'Portofino M 620',
              years: '2021–present',
              priceBand: '€230,000+ new',
              specs: {
                engine: '3.9 V8 twin-turbo',
                engineCode: 'F154CD',
                displacementCc: 3855,
                cylinders: 'V8',
                powerHp: 620,
                powerKw: 456,
                torqueNm: 760,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 3.45,
                topSpeedKmh: 320,
                consumptionL100: 11.4,
                co2Gkm: 261
              },
              dimensions: {
                lengthMm: 4589,
                widthMm: 1938,
                heightMm: 1318,
                wheelbaseMm: 2670,
                bootLitres: 200,
                weightKg: 1545,
                tankLitres: 69
              },
              options: safetyComfort(['carbon ceramic brakes', 'Daytona-style seats', 'wind deflector', 'JBL premium audio', 'full electric folding roof']),
              knownFor: ['open-air Ferrari experience at entry price', 'beautiful folding hard-top', 'usable 2+2 seating', 'responsive V8 with wide torque band'],
              watchOut: ['boot space very limited with roof folded', 'heavier than the Roma coupe', 'rear seats barely usable for adults', 'ownership costs significant']
            }
          ]
        }
      ]
    },
    {
      id: '296-gtb',
      name: '296 GTB',
      segment: 'Sports Car',
      description: 'The Ferrari 296 GTB introduces a brand-new 3.0-litre twin-turbo V6 paired with an electric motor for a combined 830 hp in a compact plug-in hybrid package. It represents Ferrari\'s vision of the future: electrification as a performance multiplier.',
      tags: ['PHEV', 'V6', 'hybrid', 'sports', 'mid-engine', 'innovative', 'coupe'],
      generations: [
        {
          id: '296-gtb-i',
          name: '296 GTB I',
          years: '2022–present',
          platform: 'Ferrari 296 platform',
          bodyStyles: ['Coupe'],
          summary: 'The 296 GTB uses a new 120-degree V6 engine producing 663 hp, combined with a 122 kW electric motor for 830 hp total. An 8-speed DCT drives the rear wheels. It is lighter and more agile than the V8-powered F8 it partially replaces.',
          heroImage: '296-gtb-i',
          variants: [
            {
              id: 'ferrari-296-gtb-i-phev',
              name: '296 GTB PHEV',
              years: '2022–present',
              priceBand: '€320,000+ new',
              specs: {
                engine: '3.0 V6 twin-turbo + e-motor',
                engineCode: 'F163',
                displacementCc: 2992,
                cylinders: 'V6',
                powerHp: 830,
                powerKw: 610,
                torqueNm: 740,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 2.9,
                topSpeedKmh: 330,
                electricRangeKm: 25,
                consumptionL100: 7.1,
                co2Gkm: 161
              },
              dimensions: {
                lengthMm: 4565,
                widthMm: 1958,
                heightMm: 1188,
                wheelbaseMm: 2600,
                bootLitres: 0,
                weightKg: 1470,
                tankLitres: 65
              },
              options: safetyComfort(['Assetto Fiorano handling package', 'carbon ceramic brakes', 'titanium exhaust', 'carbon fibre wheels']),
              knownFor: ['revolutionary V6 PHEV powertrain', 'extraordinary performance-to-weight', 'electric-only city driving', 'new benchmark mid-engined Ferrari'],
              watchOut: ['no luggage space', 'limited electric range', 'very high purchase price', 'specialist tyres and consumables expensive']
            }
          ]
        }
      ]
    },
    {
      id: '296-gts',
      name: '296 GTS',
      segment: 'Sports Car Convertible',
      description: 'The 296 GTS is the open-top Spider version of the 296 GTB, sharing its ground-breaking V6 PHEV powertrain with 830 hp total system output. A retractable hard-top roof adds minimal weight while delivering the Ferrari open-air experience.',
      tags: ['PHEV', 'V6', 'convertible', 'spider', 'hybrid', 'mid-engine', 'open-top'],
      generations: [
        {
          id: '296-gts-i',
          name: '296 GTS I',
          years: '2023–present',
          platform: 'Ferrari 296 platform',
          bodyStyles: ['Convertible'],
          summary: 'Retaining the full 830 hp V6 PHEV of the GTB, the GTS adds a retractable hardtop that stows in 14 seconds. Weight is just 70 kg more than the coupe, preserving the dynamic character of the GTB in open-air form.',
          heroImage: '296-gts-i',
          variants: [
            {
              id: 'ferrari-296-gts-i-phev',
              name: '296 GTS PHEV',
              years: '2023–present',
              priceBand: '€360,000+ new',
              specs: {
                engine: '3.0 V6 twin-turbo + e-motor',
                engineCode: 'F163',
                displacementCc: 2992,
                cylinders: 'V6',
                powerHp: 830,
                powerKw: 610,
                torqueNm: 740,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 8,
                drive: 'RWD',
                acceleration0100: 2.9,
                topSpeedKmh: 330,
                electricRangeKm: 25,
                consumptionL100: 7.5,
                co2Gkm: 170
              },
              dimensions: {
                lengthMm: 4565,
                widthMm: 1958,
                heightMm: 1199,
                wheelbaseMm: 2600,
                bootLitres: 0,
                weightKg: 1540,
                tankLitres: 65
              },
              options: safetyComfort(['Assetto Fiorano handling package', 'carbon ceramic brakes', 'titanium exhaust', 'wind deflector']),
              knownFor: ['V6 PHEV performance in open-air form', 'rapid retractable hard-top', 'full GTB performance with Spider usability', 'distinctive exhaust note'],
              watchOut: ['no luggage space whatsoever', 'very limited electric range', 'premium over GTB coupe significant', 'high ownership and insurance costs']
            }
          ]
        }
      ]
    },
    {
      id: 'sf90-stradale',
      name: 'SF90 Stradale',
      segment: 'Supercar',
      description: 'The SF90 Stradale is Ferrari\'s most powerful road car at its launch: a 1,000 hp plug-in hybrid combining a 769 hp twin-turbo V8 with three electric motors. Named after the 90th anniversary of Scuderia Ferrari, it demonstrates full electrification at the pinnacle of road car performance.',
      tags: ['PHEV', 'supercar', 'V8', 'electric', 'flagship', 'mid-engine', '1000hp'],
      generations: [
        {
          id: 'sf90-i',
          name: 'SF90 Stradale I',
          years: '2020–present',
          platform: 'Ferrari SF90 platform',
          bodyStyles: ['Coupe'],
          summary: 'The SF90 uses a 4.0-litre twin-turbo V8 producing 769 hp plus three electric motors (two on the front axle, one between engine and gearbox) for 1,000 hp total. An 8-speed DCT and electric AWD make it devastatingly fast with 2.5 s to 100 km/h.',
          heroImage: 'sf90-i',
          variants: [
            {
              id: 'ferrari-sf90-i-phev',
              name: 'SF90 Stradale PHEV',
              years: '2020–present',
              priceBand: '€500,000+ new',
              specs: {
                engine: '4.0 V8 twin-turbo + 3 e-motors',
                engineCode: 'F154FD',
                displacementCc: 3990,
                cylinders: 'V8',
                powerHp: 1000,
                powerKw: 735,
                torqueNm: 800,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 2.5,
                topSpeedKmh: 340,
                electricRangeKm: 25,
                consumptionL100: 8.0,
                co2Gkm: 182
              },
              dimensions: {
                lengthMm: 4712,
                widthMm: 1972,
                heightMm: 1186,
                wheelbaseMm: 2650,
                bootLitres: 0,
                weightKg: 1570,
                tankLitres: 68
              },
              options: safetyComfort(['Assetto Fiorano track package', 'carbon ceramic brakes', 'Lexan polycarbonate rear screen', 'carbon fibre interior', 'titanium exhausts']),
              knownFor: ['1,000 hp in a road-legal Ferrari', 'electric AWD traction system', 'fastest street Ferrari ever at launch', 'Formula 1-derived aerodynamics'],
              watchOut: ['enormously expensive new and used', 'complex systems require careful maintenance', 'limited practical storage', 'resale value volatile at this price tier']
            }
          ]
        }
      ]
    },
    {
      id: '812-superfast',
      name: '812 Superfast',
      segment: 'Supercar',
      description: 'The 812 Superfast is Ferrari\'s front-engined V12 masterpiece, producing 800 hp from a naturally aspirated 6.5-litre unit. It is one of the last great front-engined V12 sports cars, combining breathtaking straight-line performance with rear-wheel steering.',
      tags: ['V12', 'supercar', 'front-engine', 'naturally-aspirated', 'RWD', 'flagship'],
      generations: [
        {
          id: '812-superfast-i',
          name: '812 Superfast',
          years: '2017–2022',
          platform: 'Ferrari F140 platform',
          bodyStyles: ['Coupe'],
          summary: 'Successor to the F12berlinetta, the 812 raises the bar with 800 hp at 8,500 rpm from a 6.5-litre V12, 7-speed DCT, and Ferrari Virtual Short Wheelbase rear-wheel steering. The GTS Spider version followed in 2020.',
          heroImage: '812-superfast-i',
          variants: [
            {
              id: 'ferrari-812-superfast-i-v12',
              name: '812 Superfast',
              years: '2017–2022',
              priceBand: '€350,000+ used',
              specs: {
                engine: '6.5 V12 naturally aspirated',
                engineCode: 'F140GA',
                displacementCc: 6496,
                cylinders: 'V12',
                powerHp: 800,
                powerKw: 588,
                torqueNm: 718,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'RWD',
                acceleration0100: 2.9,
                topSpeedKmh: 340,
                consumptionL100: 15.0,
                co2Gkm: 340
              },
              dimensions: {
                lengthMm: 4657,
                widthMm: 1971,
                heightMm: 1276,
                wheelbaseMm: 2720,
                bootLitres: 320,
                weightKg: 1525,
                tankLitres: 92
              },
              options: safetyComfort(['carbon ceramic brakes', 'carbon fibre racing seats', 'carbon fibre exterior package', 'Burmester audio']),
              knownFor: ['800 hp naturally aspirated V12 screaming to 8,500 rpm', 'last of the great front-V12 Ferraris', 'rear-wheel steering precision', 'visceral, unfiltered driving experience'],
              watchOut: ['one of the most demanding Ferraris to drive quickly', 'fuel consumption very high', 'production ended; values rising', 'extremely high insurance and running costs']
            }
          ]
        }
      ]
    },
    {
      id: 'purosangue',
      name: 'Purosangue',
      segment: 'Luxury Performance SUV',
      description: 'The Purosangue is Ferrari\'s first ever SUV — a four-door, four-seat car powered by a naturally aspirated 725 hp V12 mounted in a front-mid position. Ferrari insists it is not an SUV but a Ferrari FUV (Ferrari Utility Vehicle).',
      tags: ['SUV', 'V12', 'naturally-aspirated', 'luxury', 'four-door', 'AWD'],
      generations: [
        {
          id: 'purosangue-i',
          name: 'Purosangue I',
          years: '2023–present',
          platform: 'Ferrari Purosangue platform',
          bodyStyles: ['SUV'],
          summary: 'The Purosangue uses a front-mid mounted 6.5-litre V12 driving all four wheels through a rear transaxle 8-speed DCT. Rear-hinged back doors allow proper passenger access. Active suspension keeps body roll minimal despite the higher ride height.',
          heroImage: 'purosangue-i',
          variants: [
            {
              id: 'ferrari-purosangue-i-v12',
              name: 'Purosangue V12',
              years: '2023–present',
              priceBand: '€400,000+ new',
              specs: {
                engine: '6.5 V12 naturally aspirated',
                engineCode: 'F140IA',
                displacementCc: 6496,
                cylinders: 'V12',
                powerHp: 725,
                powerKw: 533,
                torqueNm: 716,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 3.3,
                topSpeedKmh: 310,
                consumptionL100: 14.9,
                co2Gkm: 340
              },
              dimensions: {
                lengthMm: 4973,
                widthMm: 2028,
                heightMm: 1589,
                wheelbaseMm: 3018,
                bootLitres: 473,
                weightKg: 2033,
                tankLitres: 100
              },
              options: safetyComfort(['active suspension lift', 'carbon ceramic brakes', 'carbon fibre interior', 'Burmester 3D audio', 'full panoramic roof']),
              knownFor: ['naturally aspirated V12 in an SUV body', 'rear-hinged back doors for passenger access', 'genuinely practical Ferrari', 'extraordinary performance per weight for class'],
              watchOut: ['limited production allocation', 'very high fuel consumption', 'enormous price', 'some question whether it dilutes the Ferrari brand']
            }
          ]
        }
      ]
    },
    {
      id: 'f8-tributo',
      name: 'F8 Tributo',
      segment: 'Sports Car',
      description: 'The F8 Tributo is Ferrari\'s mid-engined V8 sports car and tribute to the most successful Ferrari V8 engine family. It succeeded the 488 GTB with 720 hp, an S-duct aerodynamic package from the 488 Pista, and a sharper driver-focused chassis.',
      tags: ['V8', 'sports', 'mid-engine', 'twin-turbo', 'coupe', 'tribute'],
      generations: [
        {
          id: 'f8-tributo-i',
          name: 'F8 Tributo I',
          years: '2019–2022',
          platform: 'Ferrari F154 platform',
          bodyStyles: ['Coupe'],
          summary: 'The F8 replaced the 488 GTB with 720 hp from the same 3.9-litre twin-turbo V8 but with a 50 hp increase, S-duct aero from the 488 Pista, and a simplified interior layout. The Spider version adds a retractable hard-top.',
          heroImage: 'f8-tributo-i',
          variants: [
            {
              id: 'ferrari-f8-tributo-i-720hp',
              name: 'F8 Tributo 720',
              years: '2019–2022',
              priceBand: '€280,000+ used',
              specs: {
                engine: '3.9 V8 twin-turbo',
                engineCode: 'F154CB',
                displacementCc: 3855,
                cylinders: 'V8',
                powerHp: 720,
                powerKw: 529,
                torqueNm: 770,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'RWD',
                acceleration0100: 2.9,
                topSpeedKmh: 340,
                consumptionL100: 11.4,
                co2Gkm: 260
              },
              dimensions: {
                lengthMm: 4611,
                widthMm: 1979,
                heightMm: 1213,
                wheelbaseMm: 2650,
                bootLitres: 0,
                weightKg: 1330,
                tankLitres: 78
              },
              options: safetyComfort(['carbon ceramic brakes', 'carbon fibre racing seats', 'S-duct active aero', 'carbon fibre exterior package', 'Pista-derived suspension']),
              knownFor: ['spectacular twin-turbo V8 soundtrack', 'S-duct aerodynamic downforce', 'lighter than the 488 it replaces', 'benchmark mid-engined supercar handling'],
              watchOut: ['no luggage compartment at all', 'production ended making servicing future consideration', 'traction overwhelming in wet without care', 'extremely high running costs']
            }
          ]
        }
      ]
    }
  ]
};
