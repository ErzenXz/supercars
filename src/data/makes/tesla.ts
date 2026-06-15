import type { CarMake } from '../../types';
import { evComfort } from '../_shared';

export const tesla: CarMake = {
  id: 'tesla',
  name: 'Tesla',
  country: 'United States',
  logoText: '⊺',
  models: [
    {
      id: 'model-3',
      name: 'Model 3',
      segment: 'Compact Executive Sedan',
      description: 'The Model 3 brought Tesla\'s technology to a broader audience, becoming Europe\'s best-selling electric car in multiple years. It offers exceptional range, rapid Supercharging, and over-the-air software updates in a refined fastback sedan body.',
      tags: ['electric', 'sedan', 'performance', 'efficient', 'supercharging', 'OTA'],
      generations: [
        {
          id: 'model-3-gen1',
          name: 'Model 3 (Highland facelift)',
          years: '2017–present',
          platform: 'Tesla Model 3 platform',
          bodyStyles: ['Sedan'],
          summary: 'The original Model 3 launched in 2017 and received a significant interior and exterior refresh known as Highland in 2023, with a revised front end, upgraded interior materials, and improved efficiency. All variants are rear-wheel or all-wheel drive electric.',
          heroImage: 'model-3-highland',
          variants: [
            {
              id: 'tesla-model3-rwd',
              name: 'Model 3 RWD',
              years: '2021–present',
              priceBand: '€28,000–€42,000 used',
              specs: {
                engine: 'single rear permanent-magnet motor',
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
              options: evComfort(['Autopilot', 'glass roof', '15-inch center touchscreen']),
              knownFor: ['excellent efficiency', 'fast Supercharging network', 'strong performance', 'frequent OTA updates'],
              watchOut: ['build quality / panel-gap variance', 'firm ride on large wheels', 'paint softness', 'phantom braking complaints']
            },
            {
              id: 'tesla-model3-long-range-awd',
              name: 'Model 3 Long Range AWD',
              years: '2019–present',
              priceBand: '€36,000–€52,000 used',
              specs: {
                engine: 'dual permanent-magnet motors (front + rear)',
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
              options: evComfort(['Autopilot', 'Enhanced Autopilot', 'glass roof', 'premium audio']),
              knownFor: ['class-leading range', 'capable AWD traction', 'fast charging speeds', 'refined long-distance cruiser'],
              watchOut: ['premium over RWD significant', 'weight increase vs base', 'wind noise at motorway speed', 'software bugs post-update']
            },
            {
              id: 'tesla-model3-performance',
              name: 'Model 3 Performance',
              years: '2018–present',
              priceBand: '€40,000–€58,000 used',
              specs: {
                engine: 'dual high-performance permanent-magnet motors',
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
              options: evComfort(['Full Self-Driving capability', 'Autopilot', 'track mode', 'performance brakes', 'lowered sport suspension']),
              knownFor: ['supercar-rivalling acceleration', 'track mode for spirited driving', 'over-the-air performance updates', 'daily usability with sports performance'],
              watchOut: ['tyre wear accelerated by performance', 'firm lowered suspension', 'range sacrificed for performance', 'insurance costs elevated']
            }
          ]
        }
      ]
    },
    {
      id: 'model-y',
      name: 'Model Y',
      segment: 'Compact Electric SUV',
      description: 'The Model Y is Tesla\'s best-selling vehicle worldwide, offering the practicality of a compact SUV on the Model 3 platform with an optional third-row seat. It dominates EV sales charts in Europe and combines efficiency with ample cargo space.',
      tags: ['electric', 'SUV', 'family', 'practical', 'bestseller', 'AWD'],
      generations: [
        {
          id: 'model-y-gen1',
          name: 'Model Y',
          years: '2020–present',
          platform: 'Tesla Model 3 platform (modified)',
          bodyStyles: ['SUV'],
          summary: 'The Model Y arrived in Europe in 2021 and became the continent\'s best-selling vehicle overall in 2023. Built at Gigafactory Berlin, European-spec cars use 4680-cell battery technology and structural pack design.',
          heroImage: 'model-y',
          variants: [
            {
              id: 'tesla-modely-long-range-awd',
              name: 'Model Y Long Range AWD',
              years: '2021–present',
              priceBand: '€38,000–€58,000 used',
              specs: {
                engine: 'dual permanent-magnet motors (front + rear)',
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
              options: evComfort(['Autopilot', 'panoramic glass roof', 'tow bar', 'third-row seat option', 'premium audio']),
              knownFor: ['huge cargo space', 'strong AWD traction', 'excellent charging infrastructure', 'class-leading EV range'],
              watchOut: ['ride quality on 20-inch wheels', 'interior build finish varies', 'panel alignment issues reported', 'wind noise above 130 km/h']
            },
            {
              id: 'tesla-modely-performance',
              name: 'Model Y Performance',
              years: '2021–present',
              priceBand: '€46,000–€64,000 used',
              specs: {
                engine: 'dual high-performance permanent-magnet motors',
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
              options: evComfort(['Full Self-Driving capability', 'Autopilot', 'track mode', 'performance brakes', 'lowered suspension']),
              knownFor: ['blistering SUV performance', 'practical cargo space', 'over-the-air updates', 'family SUV with sports car pace'],
              watchOut: ['harsh ride on lowered suspension', 'tyre wear on performance spec', 'elevated insurance premiums', 'range reduced vs Long Range']
            }
          ]
        }
      ]
    },
    {
      id: 'model-s',
      name: 'Model S',
      segment: 'Full-size Luxury Sedan',
      description: 'The Model S pioneered the modern electric luxury sedan when it launched in 2012. Its 2021 refresh brought the Plaid triple-motor variant, a new yoke steering wheel, and refreshed interior, cementing its status as one of the world\'s fastest production cars.',
      tags: ['electric', 'luxury', 'sedan', 'flagship', 'performance', 'long-range'],
      generations: [
        {
          id: 'model-s-refresh',
          name: 'Model S (2021 Refresh)',
          years: '2012–present',
          platform: 'Tesla Model S platform',
          bodyStyles: ['Sedan'],
          summary: 'The extensively refreshed 2021 Model S introduced a new interior with a landscape touchscreen, optional yoke steering, and the tri-motor Plaid variant capable of 0–100 km/h in under 2.1 seconds. It remains the benchmark for electric luxury sedans.',
          heroImage: 'model-s-refresh',
          variants: [
            {
              id: 'tesla-models-plaid',
              name: 'Model S Plaid',
              years: '2021–present',
              priceBand: '€105,000–€140,000 new',
              specs: {
                engine: 'tri permanent-magnet motors (front + dual rear)',
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
              options: evComfort(['Full Self-Driving capability', 'yoke steering wheel', '17-inch landscape touchscreen', 'tri-motor setup', 'carbon fibre trim']),
              knownFor: ['world\'s fastest production sedan', 'huge 600 km real-world range', 'OTA updates extend feature set', 'genuinely usable daily luxury car'],
              watchOut: ['yoke steering divisive ergonomics', 'high purchase price', 'tyre costs at this performance level', 'US quality control perception']
            }
          ]
        }
      ]
    },
    {
      id: 'model-x',
      name: 'Model X',
      segment: 'Full-size Electric SUV',
      description: 'The Model X is Tesla\'s flagship SUV, distinguished by its distinctive Falcon Wing rear doors, optional six or seven-seat configuration, and impressive range for its size. The 2021 refresh brought interior updates shared with the Model S.',
      tags: ['electric', 'SUV', 'luxury', 'flagship', 'falcon-wing', 'seven-seat'],
      generations: [
        {
          id: 'model-x-refresh',
          name: 'Model X (2021 Refresh)',
          years: '2015–present',
          platform: 'Tesla Model X platform',
          bodyStyles: ['SUV'],
          summary: 'The refreshed Model X received the same interior treatment as the Model S, with a 17-inch landscape touchscreen and updated powertrain. The Falcon Wing doors remain a signature feature and the SUV offers up to 7 seats.',
          heroImage: 'model-x-refresh',
          variants: [
            {
              id: 'tesla-modelx-long-range',
              name: 'Model X Long Range AWD',
              years: '2021–present',
              priceBand: '€95,000–€125,000 new',
              specs: {
                engine: 'dual permanent-magnet motors (front + rear)',
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
              options: evComfort(['Full Self-Driving capability', 'Autopilot', 'Falcon Wing doors', '17-inch touchscreen', 'tow hitch', 'HEPA air filtration']),
              knownFor: ['Falcon Wing doors as conversation piece', 'enormous total cargo volume', 'class-leading towing capacity for an EV', 'comfortable 7-seat SUV'],
              watchOut: ['very high purchase price', 'Falcon Wing doors slow in cold weather', 'heavy weight affects efficiency', 'repair costs and parts availability']
            }
          ]
        }
      ]
    }
  ]
};
