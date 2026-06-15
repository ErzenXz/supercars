import type { CarMake } from '../../types';
import { evComfort } from '../_shared';

export const tesla: CarMake = {
  id: 'tesla',
  name: 'Tesla',
  country: 'United States',
  logoText: 'T',
  models: [
    {
      id: 'model-3',
      name: 'Model 3',
      segment: 'Compact Executive Sedan',
      description: 'The Model 3 brought Tesla\'s technology to a broader audience, becoming Europe\'s best-selling electric car across multiple years. The Highland refresh in 2023 significantly upgraded the interior quality, refined the exterior, and improved range and efficiency across all variants.',
      tags: ['electric', 'sedan', 'compact', 'performance', 'efficient', 'Supercharging', 'OTA'],
      generations: [
        {
          id: 'model-3-gen1',
          name: 'Model 3 (incl. Highland refresh)',
          years: '2017–present',
          platform: 'Tesla Model 3 platform',
          bodyStyles: ['Sedan'],
          summary: 'The original Model 3 launched in 2017 and received a comprehensive facelift in 2023 known as Highland, bringing a redesigned exterior with flush door handles, a significantly improved interior with ambient lighting and new materials, reduced wind noise, a 15.4-inch touchscreen, and improved WLTP range. All variants are electric-only.',
          heroImage: 'model-3-highland',
          variants: [
            {
              id: 'tesla-model3-gen1-rwd',
              name: 'Model 3 RWD',
              years: '2021–present',
              priceBand: '€28,000–€44,000 used',
              specs: {
                engine: 'single rear permanent-magnet synchronous motor',
                powerHp: 283,
                powerKw: 208,
                torqueNm: 420,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 6.1,
                topSpeedKmh: 225,
                electricRangeKm: 491
              },
              dimensions: {
                lengthMm: 4720,
                widthMm: 1849,
                heightMm: 1442,
                wheelbaseMm: 2875,
                bootLitres: 561,
                weightKg: 1765
              },
              options: evComfort(['Autopilot standard', 'Enhanced Autopilot upgrade', 'Full Self-Driving capability upgrade', 'premium audio', 'glass roof']),
              knownFor: ['class-leading WLTP efficiency for the segment', 'access to vast Tesla Supercharger network', 'OTA updates continuously add features and improve range', 'strong performance despite entry-level positioning'],
              watchOut: ['panel gaps and paint softness complaints on some cars', 'firm ride on 18-inch aero wheels', 'phantom braking incidents reported on some older firmware', 'yoke-style steering optional but divisive ergonomically']
            },
            {
              id: 'tesla-model3-gen1-lrawd',
              name: 'Model 3 Long Range AWD',
              years: '2019–present',
              priceBand: '€36,000–€54,000 used',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 358,
                powerKw: 263,
                torqueNm: 493,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.4,
                topSpeedKmh: 233,
                electricRangeKm: 629
              },
              dimensions: {
                lengthMm: 4720,
                widthMm: 1849,
                heightMm: 1442,
                wheelbaseMm: 2875,
                bootLitres: 561,
                weightKg: 1830
              },
              options: evComfort(['Autopilot standard', 'Enhanced Autopilot', 'Full Self-Driving capability', 'premium audio upgrade', 'glass roof']),
              knownFor: ['629 km WLTP range class-leading for the segment', 'capable AWD traction in all weather conditions', 'fast 250 kW Supercharging speeds', 'refined and hushed long-distance motorway cruiser'],
              watchOut: ['significant price premium over RWD variant', 'heavier than base affects efficiency', 'wind noise above 130 km/h on some examples', 'software bugs possible post major OTA update']
            },
            {
              id: 'tesla-model3-gen1-perf',
              name: 'Model 3 Performance',
              years: '2018–present',
              priceBand: '€44,000–€60,000 used',
              specs: {
                engine: 'dual high-performance permanent-magnet synchronous motors',
                powerHp: 460,
                powerKw: 338,
                torqueNm: 660,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 3.1,
                topSpeedKmh: 262,
                electricRangeKm: 528
              },
              dimensions: {
                lengthMm: 4720,
                widthMm: 1849,
                heightMm: 1442,
                wheelbaseMm: 2875,
                bootLitres: 561,
                weightKg: 1847
              },
              options: evComfort(['Full Self-Driving capability upgrade', 'Autopilot', 'Track Mode', 'performance carbon fibre spoiler', 'sport lowered suspension', 'performance Brembo brakes']),
              knownFor: ['supercar-rivalling 3.1-second 0-100 km/h time', 'Track Mode unlocks full chassis control', 'OTA updates can further improve lap times', 'daily usability combined with genuine sports car performance'],
              watchOut: ['tyre wear dramatically accelerated in performance driving', 'firm lowered suspension tiring on poor EU road surfaces', 'range sacrificed for performance over Long Range AWD', 'insurance costs substantially elevated']
            }
          ]
        }
      ]
    },
    {
      id: 'model-y',
      name: 'Model Y',
      segment: 'Compact Electric SUV',
      description: 'The Model Y is Tesla\'s best-selling vehicle globally and Europe\'s best-selling car of any powertrain in 2023. Built at Gigafactory Berlin for European markets, it combines Model 3 platform efficiency with SUV practicality and an optional third-row seat, using 4680-cell structural battery technology.',
      tags: ['electric', 'SUV', 'family', 'practical', 'bestseller', 'Gigafactory-Berlin', '4680-cells'],
      generations: [
        {
          id: 'model-y-gen1',
          name: 'Model Y',
          years: '2020–present',
          platform: 'Tesla Model 3 platform (modified)',
          bodyStyles: ['SUV'],
          summary: 'The European Model Y is built at Gigafactory Berlin and uses structural battery pack technology with 4680-format cells. Deliveries began in 2021 and it rapidly became the continent\'s most popular car. A Juniper refresh in 2024 updated the exterior styling, improved the interior with ambient lighting, and boosted efficiency.',
          heroImage: 'model-y-juniper',
          variants: [
            {
              id: 'tesla-modely-gen1-rwd',
              name: 'Model Y RWD',
              years: '2023–present',
              priceBand: '€34,000–€46,000 used',
              specs: {
                engine: 'single rear permanent-magnet synchronous motor',
                powerHp: 299,
                powerKw: 220,
                torqueNm: 420,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 6.9,
                topSpeedKmh: 217,
                electricRangeKm: 455
              },
              dimensions: {
                lengthMm: 4751,
                widthMm: 1921,
                heightMm: 1624,
                wheelbaseMm: 2890,
                bootLitres: 854,
                weightKg: 1909
              },
              options: evComfort(['Autopilot standard', 'Full Self-Driving capability upgrade', 'panoramic glass roof', 'tow bar', 'premium audio upgrade']),
              knownFor: ['most affordable Tesla SUV entry point', 'excellent boot and total cargo volume', 'access to world\'s largest fast-charging network', 'OTA updates maintain feature parity'],
              watchOut: ['RWD only in cold climates needs winter tyres', 'range shorter than Long Range AWD significantly', 'interior quality issues reported on early examples', 'panel alignment variance persists on some cars']
            },
            {
              id: 'tesla-modely-gen1-lrawd',
              name: 'Model Y Long Range AWD',
              years: '2021–present',
              priceBand: '€40,000–€58,000 used',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 384,
                powerKw: 282,
                torqueNm: 493,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 5.0,
                topSpeedKmh: 217,
                electricRangeKm: 533
              },
              dimensions: {
                lengthMm: 4751,
                widthMm: 1921,
                heightMm: 1624,
                wheelbaseMm: 2890,
                bootLitres: 854,
                weightKg: 1979
              },
              options: evComfort(['Autopilot standard', 'Enhanced Autopilot upgrade', 'Full Self-Driving capability', 'panoramic glass roof', 'tow bar', 'third-row seat option', 'premium Immersive Sound upgrade']),
              knownFor: ['class-leading 533 km WLTP range in a compact SUV', 'strong AWD traction in all weather', 'vast 854-litre boot space with flat floor', 'seamless Supercharger integration for long journeys'],
              watchOut: ['ride quality harsh on 20-inch wheels with no adaptive suspension', 'interior build quality finish varies between production runs', 'wind noise above 130 km/h in some cars', 'third-row seat option only practical for small children']
            },
            {
              id: 'tesla-modely-gen1-perf',
              name: 'Model Y Performance',
              years: '2021–present',
              priceBand: '€48,000–€66,000 used',
              specs: {
                engine: 'dual high-performance permanent-magnet synchronous motors',
                powerHp: 513,
                powerKw: 377,
                torqueNm: 660,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 3.7,
                topSpeedKmh: 250,
                electricRangeKm: 514
              },
              dimensions: {
                lengthMm: 4751,
                widthMm: 1921,
                heightMm: 1624,
                wheelbaseMm: 2890,
                bootLitres: 854,
                weightKg: 2003
              },
              options: evComfort(['Full Self-Driving capability', 'Autopilot', 'Track Mode', 'performance lowered suspension', 'performance Brembo brakes', 'sport carbon spoiler']),
              knownFor: ['blistering 3.7-second 0-100 in a family SUV', 'practical cargo space unchanged from Long Range', 'OTA updates improve performance over ownership lifetime', 'family SUV packaging with genuine sports car pace'],
              watchOut: ['very firm lowered suspension on European road surfaces', 'tyre wear accelerated significantly in performance use', 'elevated insurance premiums for the performance level', 'range reduced vs Long Range AWD despite same battery']
            }
          ]
        }
      ]
    },
    {
      id: 'model-s',
      name: 'Model S',
      segment: 'Full-size Luxury Electric Sedan',
      description: 'The Model S pioneered the modern electric luxury sedan when it launched in 2012, proving that EVs could be desirable performance cars. The comprehensive 2021 refresh introduced a new interior with a 17-inch landscape touchscreen, optional yoke steering, and the tri-motor Plaid variant, one of the fastest accelerating production cars ever built.',
      tags: ['electric', 'luxury', 'sedan', 'flagship', 'Plaid', 'long-range', 'performance', 'pioneer'],
      generations: [
        {
          id: 'model-s-refresh',
          name: 'Model S (2021 Refresh)',
          years: '2012–present',
          platform: 'Tesla Model S platform',
          bodyStyles: ['Sedan'],
          summary: 'The 2021 refresh transformed the interior with a new landscape-oriented 17-inch touchscreen, a secondary passenger-side display, and optional yoke steering wheel replacing the traditional round wheel. The Plaid tri-motor variant delivers 1020 hp with a claimed 0-100 km/h time under 2.1 seconds, establishing the car as one of the fastest production vehicles ever tested.',
          heroImage: 'model-s-refresh',
          variants: [
            {
              id: 'tesla-models-refresh-lr',
              name: 'Model S Long Range AWD',
              years: '2021–present',
              priceBand: '€85,000–€110,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 670,
                powerKw: 492,
                torqueNm: 950,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 3.2,
                topSpeedKmh: 250,
                electricRangeKm: 652
              },
              dimensions: {
                lengthMm: 4970,
                widthMm: 1964,
                heightMm: 1445,
                wheelbaseMm: 2960,
                bootLitres: 793,
                weightKg: 2072
              },
              options: evComfort(['Full Self-Driving capability', 'Autopilot', 'yoke steering wheel option', '17-inch landscape touchscreen', 'HEPA air filtration system', 'ultra-premium audio upgrade']),
              knownFor: ['class-leading 652 km WLTP range in a luxury sedan', 'OTA updates maintain best-in-class efficiency over time', 'cavernous interior with 17-inch landscape screen', 'Supercharger 250 kW speeds for rapid long-distance charging'],
              watchOut: ['yoke steering ergonomics divisive and takes adjustment', 'very high purchase price for a sedan', 'tyre costs on 21-inch wheels expensive', 'US brand perception and service network patchy in some EU markets']
            },
            {
              id: 'tesla-models-refresh-plaid',
              name: 'Model S Plaid',
              years: '2021–present',
              priceBand: '€105,000–€140,000 new',
              specs: {
                engine: 'tri permanent-magnet synchronous motors (front + dual rear)',
                powerHp: 1020,
                powerKw: 750,
                torqueNm: 1420,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 2.1,
                topSpeedKmh: 322,
                electricRangeKm: 600
              },
              dimensions: {
                lengthMm: 4970,
                widthMm: 1964,
                heightMm: 1445,
                wheelbaseMm: 2960,
                bootLitres: 793,
                weightKg: 2162
              },
              options: evComfort(['Full Self-Driving capability', 'yoke steering wheel', '17-inch landscape touchscreen', 'tri-motor Plaid drivetrain', 'carbon fibre interior trim', 'Track Mode']),
              knownFor: ['one of the fastest accelerating production cars ever built', '600 km WLTP range despite 1020 hp output', 'OTA updates extend performance and feature set continuously', 'daily-usable luxury sedan with hypercar straight-line speed'],
              watchOut: ['yoke steering ergonomically challenging in low-speed manoeuvres', 'very high purchase price', 'specialist tyre costs at this performance level', 'panel gap and fit concerns persist on some production cars']
            }
          ]
        }
      ]
    },
    {
      id: 'model-x',
      name: 'Model X',
      segment: 'Full-size Luxury Electric SUV',
      description: 'The Model X is Tesla\'s flagship SUV, uniquely distinguished by its Falcon Wing rear doors that open vertically for easy access in tight spaces. Available in six or seven-seat configurations with an enormous total cargo volume, the 2021 refresh brought interior updates shared with the Model S.',
      tags: ['electric', 'SUV', 'luxury', 'flagship', 'Falcon-Wing', 'seven-seat', 'towing', 'Plaid'],
      generations: [
        {
          id: 'model-x-refresh',
          name: 'Model X (2021 Refresh)',
          years: '2015–present',
          platform: 'Tesla Model X platform',
          bodyStyles: ['SUV'],
          summary: 'The refreshed Model X received the same interior treatment as the refreshed Model S, with a 17-inch landscape touchscreen, improved materials, and optional yoke steering. The Falcon Wing doors and up to seven seats remain, and the car supports one of the highest towing capacities of any electric vehicle at 2268 kg.',
          heroImage: 'model-x-refresh',
          variants: [
            {
              id: 'tesla-modelx-refresh-lr',
              name: 'Model X Long Range AWD',
              years: '2021–present',
              priceBand: '€95,000–€125,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 670,
                powerKw: 492,
                torqueNm: 950,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 3.9,
                topSpeedKmh: 250,
                electricRangeKm: 560
              },
              dimensions: {
                lengthMm: 5037,
                widthMm: 2070,
                heightMm: 1684,
                wheelbaseMm: 2964,
                bootLitres: 2487,
                weightKg: 2461
              },
              options: evComfort(['Full Self-Driving capability', 'Autopilot', 'Falcon Wing rear doors', '17-inch landscape touchscreen', 'tow hitch 2268 kg rating', 'HEPA air filtration with bioweapon defence mode']),
              knownFor: ['Falcon Wing doors create impression and ease access in confined spaces', 'extraordinary 2487-litre total cargo volume with all seats folded', 'class-leading towing capability for a pure EV', 'seven-seat family SUV with 560 km WLTP range'],
              watchOut: ['extremely high purchase price', 'Falcon Wing doors slow to operate and unreliable in cold weather', 'heavy at 2.5 tonnes impacts efficiency and dynamics', 'repair costs and parts availability challenging in some EU countries']
            },
            {
              id: 'tesla-modelx-refresh-plaid',
              name: 'Model X Plaid',
              years: '2021–present',
              priceBand: '€120,000–€155,000 new',
              specs: {
                engine: 'tri permanent-magnet synchronous motors (front + dual rear)',
                powerHp: 1020,
                powerKw: 750,
                torqueNm: 1420,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 2.6,
                topSpeedKmh: 262,
                electricRangeKm: 528
              },
              dimensions: {
                lengthMm: 5037,
                widthMm: 2070,
                heightMm: 1684,
                wheelbaseMm: 2964,
                bootLitres: 2487,
                weightKg: 2532
              },
              options: evComfort(['Full Self-Driving capability', 'yoke steering option', 'Falcon Wing doors', '17-inch landscape touchscreen', 'Track Mode', 'carbon fibre trim', 'tow hitch']),
              knownFor: ['fastest-accelerating SUV in production at 2.6 seconds to 100 km/h', 'seven-seat family practicality with hypercar performance', 'OTA updates unlock further performance improvements', 'engineering tour de force combining 1020 hp with family utility'],
              watchOut: ['extremely high purchase price', 'very heavy at 2.5 tonnes despite power', 'Falcon Wing door reliability concerns in cold climates', 'range reduced compared to Long Range due to extra motor weight']
            }
          ]
        }
      ]
    }
  ]
};
