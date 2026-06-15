import type { CarMake } from '../../types';
import { evComfort } from '../_shared';

export const polestar: CarMake = {
  id: 'polestar',
  name: 'Polestar',
  country: 'Sweden',
  logoText: 'P',
  models: [
    {
      id: 'polestar-2',
      name: 'Polestar 2',
      segment: 'Compact Premium Electric Fastback',
      description: 'The Polestar 2 is the Swedish brand\'s first standalone volume model, a five-door fastback that competes with the Tesla Model 3 and BMW i4. Built on the CMA platform shared with the Volvo XC40, it combines Scandinavian minimalism with genuine performance credentials and Google Automotive Services as standard.',
      tags: ['electric', 'fastback', 'premium', 'CMA-platform', 'performance', 'Google', 'Scandinavian'],
      generations: [
        {
          id: 'polestar-2-gen1',
          name: 'Polestar 2 Gen 1',
          years: '2020–present',
          platform: 'Volvo CMA',
          bodyStyles: ['Sedan', 'Hatchback'],
          summary: 'The first-generation Polestar 2 launched as a dual-motor all-wheel drive performance EV before expanding to include single-motor rear-wheel drive variants with a larger 82 kWh battery in 2023. A significant 2024 update brought revised front and rear styling, improved efficiency, and a 650 V battery architecture for faster charging.',
          heroImage: 'polestar-2-gen1',
          variants: [
            {
              id: 'polestar-polestar2-gen1-single',
              name: 'Polestar 2 Single Motor Long Range',
              years: '2023–present',
              priceBand: '€38,000–€50,000 new',
              specs: {
                engine: 'single rear permanent-magnet synchronous motor',
                powerHp: 299,
                powerKw: 220,
                torqueNm: 490,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 6.4,
                topSpeedKmh: 205,
                electricRangeKm: 635
              },
              dimensions: {
                lengthMm: 4607,
                widthMm: 1859,
                heightMm: 1479,
                wheelbaseMm: 2735,
                bootLitres: 405,
                weightKg: 2062
              },
              options: evComfort(['Pilot Assist plus', 'heat pump', 'Harman Kardon audio', 'panoramic sunroof', 'performance package', 'park assist cameras']),
              knownFor: ['class-leading 635 km WLTP range for a single-motor EV', 'clean and minimalist Google-native infotainment', 'precise and engaging RWD driving dynamics', 'premium Swedish interior with sustainable material options'],
              watchOut: ['heavier than rivals at over 2 tonnes', 'no frunk for additional storage in nose', 'boot space smaller than Tesla Model 3', 'charging speed below some 800V rivals']
            },
            {
              id: 'polestar-polestar2-gen1-dual',
              name: 'Polestar 2 Dual Motor Long Range',
              years: '2021–present',
              priceBand: '€46,000–€60,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 476,
                powerKw: 350,
                torqueNm: 740,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.5,
                topSpeedKmh: 205,
                electricRangeKm: 551
              },
              dimensions: {
                lengthMm: 4607,
                widthMm: 1859,
                heightMm: 1479,
                wheelbaseMm: 2735,
                bootLitres: 405,
                weightKg: 2182
              },
              options: evComfort(['Pilot Assist plus', 'heat pump', 'Harman Kardon premium audio', 'panoramic sunroof', 'performance package with Brembo brakes and Öhlins suspension', 'park assist cameras']),
              knownFor: ['sharp and precise AWD handling dynamics', 'strong 4.5-second 0-100 in a premium fastback', 'Öhlins adjustable dampers in performance package', 'Google Maps and Assistant deeply integrated'],
              watchOut: ['heavier than single-motor reduces range significantly', 'performance package on top adds substantial cost', 'wind noise noticeable above 120 km/h', 'android system requires Google account']
            },
            {
              id: 'polestar-polestar2-gen1-perf',
              name: 'Polestar 2 BST Edition 270',
              years: '2023',
              priceBand: '€65,000–€75,000 used',
              specs: {
                engine: 'dual performance permanent-magnet synchronous motors',
                powerHp: 476,
                powerKw: 350,
                torqueNm: 740,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.2,
                topSpeedKmh: 205,
                electricRangeKm: 480
              },
              dimensions: {
                lengthMm: 4607,
                widthMm: 1859,
                heightMm: 1479,
                wheelbaseMm: 2735,
                bootLitres: 405,
                weightKg: 2144
              },
              options: evComfort(['Öhlins manually adjustable dampers', 'Brembo 4-piston front brakes', '21-inch forged alloys', 'performance software tune', 'WP Racing front suspension upgrade']),
              knownFor: ['270-unit limited edition with track-honed setup', 'Öhlins and Brembo hardware normally optional here standard', 'sharpest Polestar 2 driving experience available', 'collector value as numbered production run'],
              watchOut: ['extremely limited availability and high used price', 'hard suspension setup compromises daily comfort', 'range penalty from heavier track components', 'collector status means many unlikely to use full potential']
            }
          ]
        }
      ]
    },
    {
      id: 'polestar-3',
      name: 'Polestar 3',
      segment: 'Large Premium Electric SUV',
      description: 'The Polestar 3 is the brand\'s large premium electric SUV, built on the Volvo SPA2 platform and sharing development with the Volvo EX90. It combines a dramatic coupe-SUV silhouette with genuine luxury, standard Pilot Assist semi-autonomous driving, and available LiDAR sensing technology.',
      tags: ['electric', 'large-SUV', 'premium', 'SPA2-platform', 'LiDAR', 'performance', 'luxury'],
      generations: [
        {
          id: 'polestar-3-gen1',
          name: 'Polestar 3 Gen 1',
          years: '2023–present',
          platform: 'Volvo SPA2',
          bodyStyles: ['SUV'],
          summary: 'The Polestar 3 brings the brand\'s performance DNA to the large SUV segment with a 111 kWh battery, dual-motor all-wheel drive, and optional LiDAR for future autonomous capabilities. Built in both China and the United States, it offers a more driver-focused character than the Volvo EX90 despite shared underpinnings.',
          heroImage: 'polestar-3-gen1',
          variants: [
            {
              id: 'polestar-polestar3-gen1-standard',
              name: 'Polestar 3 Long Range Dual Motor',
              years: '2023–present',
              priceBand: '€82,000–€98,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 489,
                powerKw: 360,
                torqueNm: 840,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 5.0,
                topSpeedKmh: 210,
                electricRangeKm: 560
              },
              dimensions: {
                lengthMm: 4900,
                widthMm: 1968,
                heightMm: 1614,
                wheelbaseMm: 2985,
                bootLitres: 484,
                weightKg: 2584
              },
              options: evComfort(['Pilot Assist plus semi-autonomy', 'Bowers & Wilkins audio', 'four-zone climate', 'panoramic glass roof', 'heat pump', 'Smart Zone front camera package']),
              knownFor: ['dramatic coupe-SUV silhouette with athletic proportions', 'sharp and driver-focused dynamics for its size', '560 km WLTP range from the large 111 kWh battery', 'standard Pilot Assist semi-autonomous capability'],
              watchOut: ['very heavy at over 2.5 tonnes', 'high price for a relatively new brand', 'boot space limited by sloping roofline', 'LiDAR requires additional software pack to be useful']
            },
            {
              id: 'polestar-polestar3-gen1-perf',
              name: 'Polestar 3 Long Range Dual Motor Performance',
              years: '2023–present',
              priceBand: '€92,000–€108,000 new',
              specs: {
                engine: 'dual performance permanent-magnet synchronous motors',
                powerHp: 517,
                powerKw: 380,
                torqueNm: 910,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.7,
                topSpeedKmh: 210,
                electricRangeKm: 524
              },
              dimensions: {
                lengthMm: 4900,
                widthMm: 1968,
                heightMm: 1614,
                wheelbaseMm: 2985,
                bootLitres: 484,
                weightKg: 2598
              },
              options: evComfort(['Pilot Assist plus', 'Bowers & Wilkins premium audio', 'four-zone climate', 'panoramic roof', 'performance Brembo brakes', 'LiDAR safety pack', '22-inch performance alloys']),
              knownFor: ['910 Nm torque for relentless motorway performance', 'Brembo brakes matched to the power output', 'sharpest large electric SUV driving dynamics available', 'LiDAR-equipped for future autonomous safety features'],
              watchOut: ['marginal range reduction over standard variant', 'extremely high purchase price', 'weight over 2.5 tonnes limits sportiness', 'large 22-inch wheels make ride firm on poor surfaces']
            }
          ]
        }
      ]
    },
    {
      id: 'polestar-4',
      name: 'Polestar 4',
      segment: 'Mid-size Premium Electric SUV-Coupe',
      description: 'The Polestar 4 is the brand\'s boldest design statement: a mid-size electric SUV-coupe with no rear window, replaced instead by a full-width rear camera display inside. Built on Geely\'s SEA platform, it sits between the Polestar 2 and Polestar 3 in size, combining the space of an SUV with coupe-like style and strong performance.',
      tags: ['electric', 'SUV-coupe', 'no-rear-window', 'SEA-platform', 'performance', 'bold-design', 'premium'],
      generations: [
        {
          id: 'polestar-4-gen1',
          name: 'Polestar 4 Gen 1',
          years: '2023–present',
          platform: 'Geely SEA',
          bodyStyles: ['SUV', 'Coupe'],
          summary: 'The Polestar 4 uses Geely\'s Sustainable Experience Architecture platform for a more affordable entry point than the SPA2-based Polestar 3. Its signature innovation is the elimination of the rear window in favour of a full-width camera and interior display, enabling a fully panoramic glass roof to extend uninterrupted over rear passengers.',
          heroImage: 'polestar-4-gen1',
          variants: [
            {
              id: 'polestar-polestar4-gen1-single',
              name: 'Polestar 4 Single Motor Long Range',
              years: '2024–present',
              priceBand: '€56,000–€68,000 new',
              specs: {
                engine: 'single rear permanent-magnet synchronous motor',
                powerHp: 272,
                powerKw: 200,
                torqueNm: 343,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 7.1,
                topSpeedKmh: 180,
                electricRangeKm: 610
              },
              dimensions: {
                lengthMm: 4839,
                widthMm: 2139,
                heightMm: 1534,
                wheelbaseMm: 2999,
                bootLitres: 526,
                weightKg: 2155
              },
              options: evComfort(['Pilot Assist', 'rear camera display replacing rear window', 'panoramic glass roof full length', 'heat pump', 'Harman Kardon audio']),
              knownFor: ['bold decision to remove rear window entirely', 'uninterrupted panoramic glass roof over rear cabin', 'excellent 610 km WLTP range from single motor', 'spacious rear cabin with excellent headroom'],
              watchOut: ['no rear window requires trust in rear camera system', 'rear camera display quality in bright sunlight debated', 'very wide body at 2.1 metres in mirrors', 'entry-level price still substantial for the brand']
            },
            {
              id: 'polestar-polestar4-gen1-dual',
              name: 'Polestar 4 Dual Motor Long Range',
              years: '2024–present',
              priceBand: '€66,000–€80,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 544,
                powerKw: 400,
                torqueNm: 686,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 3.8,
                topSpeedKmh: 200,
                electricRangeKm: 560
              },
              dimensions: {
                lengthMm: 4839,
                widthMm: 2139,
                heightMm: 1534,
                wheelbaseMm: 2999,
                bootLitres: 526,
                weightKg: 2290
              },
              options: evComfort(['Pilot Assist', 'rear camera display', 'full panoramic glass roof', 'Harman Kardon premium audio', 'heat pump', 'performance Brembo brakes', '22-inch alloys']),
              knownFor: ['remarkably quick 3.8-second 0-100 in a large SUV-coupe', 'innovative roofline with panoramic glass unobstructed by rear glass', 'strong AWD traction and composed chassis', 'distinctive design unlike anything else in the segment'],
              watchOut: ['no rear window takes adjustment for drivers and passengers', 'very wide at 2.1+ metres in wing mirrors', 'range reduced vs single motor variant', 'high price puts it near Polestar 3 territory']
            }
          ]
        }
      ]
    }
  ]
};
