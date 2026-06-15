import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const bmw: CarMake = {
  id: 'bmw',
  name: 'BMW',
  country: 'Germany',
  logoText: 'BMW',
  models: [
    {
      id: '1-series',
      name: '1 Series',
      segment: 'Premium compact',
      description: 'Premium front-wheel-drive hatchback with sporty handling and strong engines.',
      tags: ['premium', 'hatchback', 'daily'],
      generations: [
        {
          id: 'f40',
          name: 'F40',
          years: '2019–present',
          platform: 'FAAR',
          bodyStyles: ['Hatchback'],
          summary: 'Third-gen 1 Series; switched to front-wheel-drive architecture with more cabin space.',
          heroImage: 'bmw-1-f40',
          variants: [
            {
              id: 'bmw-1-series-f40-118i',
              name: '118i',
              years: '2019–present',
              priceBand: '€22,000–€34,000 used',
              specs: { engine: '1.5 turbo petrol', engineCode: 'B38', displacementCc: 1499, cylinders: 'Inline-3', powerHp: 136, powerKw: 100, torqueNm: 230, fuel: 'Petrol', gearbox: 'DCT', gears: 7, drive: 'FWD', acceleration0100: 8.5, topSpeedKmh: 213, consumptionL100: 5.8, co2Gkm: 131 },
              dimensions: { lengthMm: 4319, widthMm: 1799, heightMm: 1434, wheelbaseMm: 2670, bootLitres: 380, weightKg: 1365, tankLitres: 50 },
              options: safetyComfort(['Live Cockpit Plus', 'LED headlights']),
              knownFor: ['agile handling', 'efficient 3-cylinder', 'premium cabin'],
              watchOut: ['3-cyl thrum', 'firm ride on M Sport', 'timing chain checks']
            },
            {
              id: 'bmw-1-series-f40-120d',
              name: '120d xDrive',
              years: '2019–present',
              priceBand: '€26,000–€38,000 used',
              specs: { engine: '2.0 turbo diesel', engineCode: 'B47', displacementCc: 1995, cylinders: 'Inline-4', powerHp: 190, powerKw: 140, torqueNm: 400, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 7.0, topSpeedKmh: 230, consumptionL100: 4.7, co2Gkm: 124 },
              dimensions: { lengthMm: 4319, widthMm: 1799, heightMm: 1434, wheelbaseMm: 2670, bootLitres: 380, weightKg: 1525, tankLitres: 50 },
              options: safetyComfort(['xDrive AWD', 'adaptive suspension']),
              knownFor: ['strong diesel torque', 'all-weather traction', 'long-distance economy'],
              watchOut: ['AdBlue system', 'DPF on short trips', 'service history']
            },
            {
              id: 'bmw-1-series-f40-m135i',
              name: 'M135i xDrive',
              years: '2019–present',
              priceBand: '€30,000–€45,000 used',
              specs: { engine: '2.0 turbo petrol', engineCode: 'B48', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 306, powerKw: 225, torqueNm: 450, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 4.8, topSpeedKmh: 250, consumptionL100: 7.5, co2Gkm: 170 },
              dimensions: { lengthMm: 4330, widthMm: 1799, heightMm: 1442, wheelbaseMm: 2670, bootLitres: 380, weightKg: 1525, tankLitres: 50 },
              options: safetyComfort(['M Sport differential', 'adaptive M suspension']),
              knownFor: ['hot-hatch pace', 'strong AWD traction', 'everyday usability'],
              watchOut: ['front tyre wear', 'fuel use when driven hard', 'modified examples']
            }
          ]
        }
      ]
    },
    {
      id: '2-series-coupe',
      name: '2 Series Coupe',
      segment: 'Compact sports coupe',
      description: 'Rear-drive compact coupe — the enthusiast’s small BMW with inline engines.',
      tags: ['premium', 'sport', 'coupe', 'rwd'],
      generations: [
        {
          id: 'g42',
          name: 'G42',
          years: '2021–present',
          platform: 'CLAR',
          bodyStyles: ['Coupe'],
          summary: 'Rear-wheel-drive compact coupe sharing hardware with the 3/4 Series.',
          heroImage: 'bmw-2-g42',
          variants: [
            {
              id: 'bmw-2-series-coupe-g42-220i',
              name: '220i',
              years: '2021–present',
              priceBand: '€33,000–€45,000 used',
              specs: { engine: '2.0 turbo petrol', engineCode: 'B48', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 184, powerKw: 135, torqueNm: 300, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 7.5, topSpeedKmh: 235, consumptionL100: 6.5, co2Gkm: 148 },
              dimensions: { lengthMm: 4537, widthMm: 1838, heightMm: 1390, wheelbaseMm: 2741, bootLitres: 390, weightKg: 1490, tankLitres: 52 },
              options: safetyComfort(['M Sport package', 'sport seats']),
              knownFor: ['balanced rear-drive chassis', 'compact and quick', 'inline engines'],
              watchOut: ['firm ride', 'rear space', 'run-flat tyres']
            },
            {
              id: 'bmw-2-series-coupe-g42-m240i',
              name: 'M240i xDrive',
              years: '2021–present',
              priceBand: '€42,000–€56,000 used',
              specs: { engine: '3.0 turbo petrol', engineCode: 'B58', displacementCc: 2998, cylinders: 'Inline-6', powerHp: 374, powerKw: 275, torqueNm: 500, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 4.3, topSpeedKmh: 250, consumptionL100: 7.9, co2Gkm: 180 },
              dimensions: { lengthMm: 4537, widthMm: 1838, heightMm: 1390, wheelbaseMm: 2741, bootLitres: 390, weightKg: 1690, tankLitres: 52 },
              options: safetyComfort(['M Sport differential', 'adaptive M suspension']),
              knownFor: ['B58 inline-six punch', 'huge real-world pace', 'tuning potential'],
              watchOut: ['tyre and brake costs', 'fuel use', 'check for abuse']
            }
          ]
        }
      ]
    },
    {
      id: '2-series-gran-coupe',
      name: '2 Series Gran Coupe',
      segment: 'Compact sedan',
      description: 'Four-door coupe-styled compact sedan on the front-drive platform.',
      tags: ['premium', 'sedan', 'daily'],
      generations: [
        {
          id: 'f44',
          name: 'F44',
          years: '2020–present',
          platform: 'FAAR',
          bodyStyles: ['Sedan'],
          summary: 'Style-led compact four-door sharing mechanicals with the 1 Series.',
          heroImage: 'bmw-2gc-f44',
          variants: [
            {
              id: 'bmw-2-series-gran-coupe-f44-218i',
              name: '218i',
              years: '2020–present',
              priceBand: '€24,000–€34,000 used',
              specs: { engine: '1.5 turbo petrol', engineCode: 'B38', displacementCc: 1499, cylinders: 'Inline-3', powerHp: 140, powerKw: 103, torqueNm: 220, fuel: 'Petrol', gearbox: 'DCT', gears: 7, drive: 'FWD', acceleration0100: 8.7, topSpeedKmh: 213, consumptionL100: 5.9, co2Gkm: 134 },
              dimensions: { lengthMm: 4526, widthMm: 1800, heightMm: 1420, wheelbaseMm: 2670, bootLitres: 430, weightKg: 1440, tankLitres: 50 },
              options: safetyComfort(['frameless doors', 'LED headlights']),
              knownFor: ['sleek styling', 'usable boot', 'efficient'],
              watchOut: ['rear headroom', '3-cyl noise', 'firm M Sport ride']
            },
            {
              id: 'bmw-2-series-gran-coupe-f44-220d',
              name: '220d',
              years: '2020–present',
              priceBand: '€27,000–€37,000 used',
              specs: { engine: '2.0 turbo diesel', engineCode: 'B47', displacementCc: 1995, cylinders: 'Inline-4', powerHp: 190, powerKw: 140, torqueNm: 400, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'FWD', acceleration0100: 7.5, topSpeedKmh: 235, consumptionL100: 4.7, co2Gkm: 124 },
              dimensions: { lengthMm: 4526, widthMm: 1800, heightMm: 1420, wheelbaseMm: 2670, bootLitres: 430, weightKg: 1525, tankLitres: 50 },
              options: safetyComfort(['adaptive cruise', 'sport seats']),
              knownFor: ['efficient cruiser', 'good torque', 'comfortable highway car'],
              watchOut: ['AdBlue', 'DPF', 'service history']
            }
          ]
        }
      ]
    },
    {
      id: '3-series',
      name: '3 Series',
      segment: 'Premium sport sedan',
      description: 'The benchmark sport sedan and Touring wagon, with diesel, petrol and PHEV power.',
      tags: ['premium', 'sport', 'sedan', 'wagon', 'diesel'],
      generations: [
        {
          id: 'g20',
          name: 'G20/G21',
          years: '2019–present',
          platform: 'CLAR',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'Current 3 Series; sharp chassis, modern iDrive and a broad engine range.',
          heroImage: 'bmw-3-g20',
          variants: [
            {
              id: 'bmw-3-series-g20-320i',
              name: '320i',
              years: '2019–present',
              priceBand: '€28,000–€42,000 used',
              specs: { engine: '2.0 turbo petrol', engineCode: 'B48', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 184, powerKw: 135, torqueNm: 300, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 7.1, topSpeedKmh: 240, consumptionL100: 6.4, co2Gkm: 146 },
              dimensions: { lengthMm: 4709, widthMm: 1827, heightMm: 1442, wheelbaseMm: 2851, bootLitres: 480, weightKg: 1545, tankLitres: 59 },
              options: safetyComfort(['Live Cockpit Professional', 'M Sport package']),
              knownFor: ['sharp handling', 'refined petrol', 'great all-rounder'],
              watchOut: ['run-flat ride', 'options pricing', 'cooling system']
            },
            {
              id: 'bmw-3-series-g20-320d',
              name: '320d',
              years: '2019–present',
              priceBand: '€27,000–€44,000 used',
              specs: { engine: '2.0 turbo diesel mild hybrid', engineCode: 'B47', displacementCc: 1995, cylinders: 'Inline-4', powerHp: 190, powerKw: 140, torqueNm: 400, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 6.8, topSpeedKmh: 240, consumptionL100: 4.5, co2Gkm: 119 },
              dimensions: { lengthMm: 4709, widthMm: 1827, heightMm: 1442, wheelbaseMm: 2851, bootLitres: 480, weightKg: 1570, tankLitres: 59 },
              options: safetyComfort(['driving assistant professional', 'adaptive suspension']),
              knownFor: ['excellent economy', 'effortless torque', 'great long-distance car'],
              watchOut: ['AdBlue/NOx sensors', 'EGR', 'expensive tyres']
            },
            {
              id: 'bmw-3-series-g20-330e',
              name: '330e',
              years: '2019–present',
              priceBand: '€30,000–€46,000 used',
              specs: { engine: '2.0 turbo petrol plug-in hybrid', engineCode: 'B48 + e', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 292, powerKw: 215, torqueNm: 420, fuel: 'Plug-in Hybrid', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 5.9, topSpeedKmh: 230, consumptionL100: 1.9, electricRangeKm: 60, co2Gkm: 43 },
              dimensions: { lengthMm: 4709, widthMm: 1827, heightMm: 1442, wheelbaseMm: 2851, bootLitres: 375, weightKg: 1760, tankLitres: 40 },
              options: safetyComfort(['XtraBoost', 'home charging cable']),
              knownFor: ['low company-car tax', 'silent EV commuting', 'strong combined power'],
              watchOut: ['battery health', 'reduced boot', 'charge habits matter']
            },
            {
              id: 'bmw-3-series-g20-330i',
              name: '330i',
              years: '2019–present',
              priceBand: '€31,000–€48,000 used',
              specs: { engine: '2.0 turbo petrol', engineCode: 'B48', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 245, powerKw: 180, torqueNm: 400, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 5.8, topSpeedKmh: 250, consumptionL100: 6.6, co2Gkm: 151 },
              dimensions: { lengthMm: 4709, widthMm: 1827, heightMm: 1442, wheelbaseMm: 2851, bootLitres: 480, weightKg: 1570, tankLitres: 59 },
              options: safetyComfort(['M Sport package', 'Harman Kardon audio']),
              knownFor: ['quick and refined', 'strong resale', 'tuning headroom'],
              watchOut: ['tyre costs', 'service history', 'modified cars']
            }
          ]
        },
        {
          id: 'f30',
          name: 'F30/F31',
          years: '2012–2019',
          platform: 'F3x',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'Hugely popular previous generation; strong used value, especially diesels.',
          heroImage: 'bmw-3-f30',
          variants: [
            {
              id: 'bmw-3-series-f30-320d',
              name: '320d',
              years: '2012–2019',
              priceBand: '€11,000–€20,000 used',
              specs: { engine: '2.0 turbo diesel', engineCode: 'B47 / N47', displacementCc: 1995, cylinders: 'Inline-4', powerHp: 190, powerKw: 140, torqueNm: 400, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 7.1, topSpeedKmh: 230, consumptionL100: 4.4, co2Gkm: 116 },
              dimensions: { lengthMm: 4633, widthMm: 1811, heightMm: 1429, wheelbaseMm: 2810, bootLitres: 480, weightKg: 1505, tankLitres: 57 },
              options: safetyComfort(['ZF 8-speed automatic']),
              knownFor: ['cheap used buy', 'great ZF auto', 'frugal yet quick'],
              watchOut: ['timing chain on early N47', 'swirl flaps/EGR', 'rust on older cars']
            }
          ]
        }
      ]
    },
    {
      id: '4-series',
      name: '4 Series',
      segment: 'Premium coupe',
      description: 'Coupe and Gran Coupe sibling of the 3 Series with a bolder grille.',
      tags: ['premium', 'sport', 'coupe'],
      generations: [
        {
          id: 'g22',
          name: 'G22',
          years: '2020–present',
          platform: 'CLAR',
          bodyStyles: ['Coupe'],
          summary: 'Style-focused two-door 3 Series with rear- or all-wheel drive.',
          heroImage: 'bmw-4-g22',
          variants: [
            {
              id: 'bmw-4-series-g22-420i',
              name: '420i',
              years: '2020–present',
              priceBand: '€34,000–€48,000 used',
              specs: { engine: '2.0 turbo petrol', engineCode: 'B48', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 184, powerKw: 135, torqueNm: 300, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 7.5, topSpeedKmh: 240, consumptionL100: 6.6, co2Gkm: 150 },
              dimensions: { lengthMm: 4768, widthMm: 1852, heightMm: 1383, wheelbaseMm: 2851, bootLitres: 440, weightKg: 1580, tankLitres: 59 },
              options: safetyComfort(['M Sport package', 'sport seats']),
              knownFor: ['stylish coupe', 'comfortable GT', 'refined drivetrain'],
              watchOut: ['polarising grille', 'rear space', 'run-flats']
            },
            {
              id: 'bmw-4-series-g22-430i',
              name: '430i',
              years: '2020–present',
              priceBand: '€38,000–€54,000 used',
              specs: { engine: '2.0 turbo petrol', engineCode: 'B48', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 245, powerKw: 180, torqueNm: 400, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 5.8, topSpeedKmh: 250, consumptionL100: 6.7, co2Gkm: 153 },
              dimensions: { lengthMm: 4768, widthMm: 1852, heightMm: 1383, wheelbaseMm: 2851, bootLitres: 440, weightKg: 1600, tankLitres: 59 },
              options: safetyComfort(['adaptive M suspension', 'Harman Kardon audio']),
              knownFor: ['strong four-cylinder', 'long-legged cruiser', 'good economy for pace'],
              watchOut: ['tyre costs', 'options dependency', 'service records']
            }
          ]
        }
      ]
    },
    {
      id: '5-series',
      name: '5 Series',
      segment: 'Executive sedan',
      description: 'Executive sedan and Touring wagon balancing comfort, tech and pace.',
      tags: ['premium', 'comfort', 'sedan', 'wagon'],
      generations: [
        {
          id: 'g60',
          name: 'G60',
          years: '2023–present',
          platform: 'CLAR',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'Latest 5 Series, larger and more digital, with mild-hybrid and PHEV options.',
          heroImage: 'bmw-5-g60',
          variants: [
            {
              id: 'bmw-5-series-g60-520i',
              name: '520i',
              years: '2023–present',
              priceBand: '€48,000–€65,000 used',
              specs: { engine: '2.0 turbo petrol mild hybrid', engineCode: 'B48', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 208, powerKw: 153, torqueNm: 330, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 7.5, topSpeedKmh: 230, consumptionL100: 6.4, co2Gkm: 146 },
              dimensions: { lengthMm: 5060, widthMm: 1900, heightMm: 1515, wheelbaseMm: 2995, bootLitres: 520, weightKg: 1700, tankLitres: 60 },
              options: safetyComfort(['curved display', 'driving assistant professional']),
              knownFor: ['quiet refinement', 'spacious', 'modern tech'],
              watchOut: ['large footprint', 'screen-heavy controls', 'options pricing']
            },
            {
              id: 'bmw-5-series-g60-520d',
              name: '520d',
              years: '2023–present',
              priceBand: '€50,000–€66,000 used',
              specs: { engine: '2.0 turbo diesel mild hybrid', engineCode: 'B47', displacementCc: 1995, cylinders: 'Inline-4', powerHp: 197, powerKw: 145, torqueNm: 400, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 7.3, topSpeedKmh: 233, consumptionL100: 4.9, co2Gkm: 129 },
              dimensions: { lengthMm: 5060, widthMm: 1900, heightMm: 1515, wheelbaseMm: 2995, bootLitres: 520, weightKg: 1750, tankLitres: 60 },
              options: safetyComfort(['adaptive cruise', 'comfort seats']),
              knownFor: ['superb motorway economy', 'effortless torque', 'comfortable'],
              watchOut: ['AdBlue', 'tyre costs', 'complex electronics']
            },
            {
              id: 'bmw-5-series-g60-530e',
              name: '530e',
              years: '2023–present',
              priceBand: '€54,000–€70,000 used',
              specs: { engine: '2.0 turbo petrol plug-in hybrid', engineCode: 'B48 + e', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 299, powerKw: 220, torqueNm: 450, fuel: 'Plug-in Hybrid', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 6.3, topSpeedKmh: 230, consumptionL100: 0.6, electricRangeKm: 100, co2Gkm: 14 },
              dimensions: { lengthMm: 5060, widthMm: 1900, heightMm: 1515, wheelbaseMm: 2995, bootLitres: 510, weightKg: 1935, tankLitres: 60 },
              options: safetyComfort(['100 km electric range', 'home charging cable']),
              knownFor: ['big EV-only range', 'low tax', 'smooth and quiet'],
              watchOut: ['battery health', 'charge to benefit', 'heavier kerb weight']
            }
          ]
        },
        {
          id: 'g30',
          name: 'G30',
          years: '2017–2023',
          platform: 'CLAR',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'Previous 5 Series; excellent used executive value with strong straight-six diesels.',
          heroImage: 'bmw-5-g30',
          variants: [
            {
              id: 'bmw-5-series-g30-530d',
              name: '530d xDrive',
              years: '2017–2023',
              priceBand: '€26,000–€45,000 used',
              specs: { engine: '3.0 turbo diesel', engineCode: 'B57', displacementCc: 2993, cylinders: 'Inline-6', powerHp: 286, powerKw: 210, torqueNm: 650, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 5.7, topSpeedKmh: 250, consumptionL100: 5.5, co2Gkm: 144 },
              dimensions: { lengthMm: 4963, widthMm: 1868, heightMm: 1479, wheelbaseMm: 2975, bootLitres: 530, weightKg: 1755, tankLitres: 68 },
              options: safetyComfort(['inline-six diesel', 'adaptive suspension']),
              knownFor: ['effortless six-cylinder torque', 'superb GT car', 'great value used'],
              watchOut: ['timing chain checks', 'AdBlue', 'air suspension if fitted']
            }
          ]
        }
      ]
    },
    {
      id: '7-series',
      name: '7 Series',
      segment: 'Luxury sedan',
      description: 'Flagship luxury sedan with the latest tech, comfort and powertrains.',
      tags: ['luxury', 'comfort', 'sedan'],
      generations: [
        {
          id: 'g70',
          name: 'G70',
          years: '2022–present',
          platform: 'CLAR',
          bodyStyles: ['Sedan'],
          summary: 'Bold, tech-laden flagship with diesel, PHEV and full-electric (i7) options.',
          heroImage: 'bmw-7-g70',
          variants: [
            {
              id: 'bmw-7-series-g70-740d',
              name: '740d xDrive',
              years: '2022–present',
              priceBand: '€78,000–€110,000 used',
              specs: { engine: '3.0 turbo diesel mild hybrid', engineCode: 'B57', displacementCc: 2993, cylinders: 'Inline-6', powerHp: 300, powerKw: 221, torqueNm: 670, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 5.8, topSpeedKmh: 250, consumptionL100: 6.0, co2Gkm: 158 },
              dimensions: { lengthMm: 5391, widthMm: 1950, heightMm: 1544, wheelbaseMm: 3215, bootLitres: 540, weightKg: 2105, tankLitres: 66 },
              options: safetyComfort(['executive lounge', 'theatre screen', 'air suspension']),
              knownFor: ['limousine comfort', 'effortless diesel', 'cutting-edge tech'],
              watchOut: ['depreciation', 'complex tech', 'tyre/repair costs']
            },
            {
              id: 'bmw-7-series-g70-750e',
              name: '750e xDrive',
              years: '2022–present',
              priceBand: '€90,000–€125,000 used',
              specs: { engine: '3.0 turbo petrol plug-in hybrid', engineCode: 'B58 + e', displacementCc: 2998, cylinders: 'Inline-6', powerHp: 489, powerKw: 360, torqueNm: 700, fuel: 'Plug-in Hybrid', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 4.9, topSpeedKmh: 250, consumptionL100: 0.8, electricRangeKm: 87, co2Gkm: 18 },
              dimensions: { lengthMm: 5391, widthMm: 1950, heightMm: 1544, wheelbaseMm: 3215, bootLitres: 525, weightKg: 2410, tankLitres: 66 },
              options: safetyComfort(['executive drive pro', 'Bowers & Wilkins audio']),
              knownFor: ['silent EV running', 'strong performance', 'flagship luxury'],
              watchOut: ['weight', 'battery health', 'running costs']
            }
          ]
        }
      ]
    },
    {
      id: '8-series',
      name: '8 Series',
      segment: 'Grand tourer',
      description: 'Large luxury grand-touring coupe and convertible.',
      tags: ['luxury', 'sport', 'coupe', 'gt'],
      generations: [
        {
          id: 'g15',
          name: 'G15',
          years: '2018–present',
          platform: 'CLAR',
          bodyStyles: ['Coupe', 'Convertible'],
          summary: 'Flagship GT coupe/convertible with potent six- and eight-cylinder engines.',
          heroImage: 'bmw-8-g15',
          variants: [
            {
              id: 'bmw-8-series-g15-840i',
              name: '840i',
              years: '2018–present',
              priceBand: '€55,000–€85,000 used',
              specs: { engine: '3.0 turbo petrol', engineCode: 'B58', displacementCc: 2998, cylinders: 'Inline-6', powerHp: 333, powerKw: 245, torqueNm: 500, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 5.2, topSpeedKmh: 250, consumptionL100: 8.0, co2Gkm: 182 },
              dimensions: { lengthMm: 4851, widthMm: 1902, heightMm: 1346, wheelbaseMm: 2822, bootLitres: 420, weightKg: 1805, tankLitres: 68 },
              options: safetyComfort(['adaptive M suspension', 'laser headlights']),
              knownFor: ['smooth grand tourer', 'beautiful interior', 'inline-six refinement'],
              watchOut: ['depreciation', 'tyre costs', 'low rear space']
            },
            {
              id: 'bmw-8-series-g15-m850i',
              name: 'M850i xDrive',
              years: '2018–present',
              priceBand: '€65,000–€100,000 used',
              specs: { engine: '4.4 twin-turbo V8', engineCode: 'N63', displacementCc: 4395, cylinders: 'V8', powerHp: 530, powerKw: 390, torqueNm: 750, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 3.7, topSpeedKmh: 250, consumptionL100: 10.0, co2Gkm: 229 },
              dimensions: { lengthMm: 4851, widthMm: 1902, heightMm: 1346, wheelbaseMm: 2822, bootLitres: 420, weightKg: 1965, tankLitres: 68 },
              options: safetyComfort(['M Sport differential', 'integral active steering']),
              knownFor: ['effortless V8 pace', 'AWD all-weather grip', 'luxury GT comfort'],
              watchOut: ['high fuel use', 'N63 maintenance', 'expensive consumables']
            }
          ]
        }
      ]
    },
    {
      id: 'x1',
      name: 'X1',
      segment: 'Compact premium SUV',
      description: 'Practical premium compact SUV with petrol, diesel and electric (iX1) options.',
      tags: ['premium', 'suv', 'family'],
      generations: [
        {
          id: 'u11',
          name: 'U11',
          years: '2022–present',
          platform: 'FAAR',
          bodyStyles: ['SUV'],
          summary: 'Roomy, upright compact SUV with a modern cabin and wide engine range.',
          heroImage: 'bmw-x1-u11',
          variants: [
            {
              id: 'bmw-x1-u11-sdrive18d',
              name: 'sDrive18d',
              years: '2022–present',
              priceBand: '€32,000–€44,000 used',
              specs: { engine: '2.0 turbo diesel', engineCode: 'B47', displacementCc: 1995, cylinders: 'Inline-4', powerHp: 150, powerKw: 110, torqueNm: 360, fuel: 'Diesel', gearbox: 'DCT', gears: 7, drive: 'FWD', acceleration0100: 8.9, topSpeedKmh: 207, consumptionL100: 4.9, co2Gkm: 129 },
              dimensions: { lengthMm: 4500, widthMm: 1845, heightMm: 1642, wheelbaseMm: 2692, bootLitres: 540, weightKg: 1610, tankLitres: 54 },
              options: safetyComfort(['power tailgate', 'parking assistant']),
              knownFor: ['practical and efficient', 'roomy cabin', 'easy to drive'],
              watchOut: ['7-speed DCT servicing', 'AdBlue', 'firm ride on big wheels']
            },
            {
              id: 'bmw-x1-u11-xdrive23i',
              name: 'xDrive23i',
              years: '2022–present',
              priceBand: '€36,000–€48,000 used',
              specs: { engine: '2.0 turbo petrol mild hybrid', engineCode: 'B48', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 218, powerKw: 160, torqueNm: 360, fuel: 'Petrol', gearbox: 'DCT', gears: 7, drive: 'AWD', acceleration0100: 7.1, topSpeedKmh: 235, consumptionL100: 6.6, co2Gkm: 150 },
              dimensions: { lengthMm: 4500, widthMm: 1845, heightMm: 1642, wheelbaseMm: 2692, bootLitres: 540, weightKg: 1690, tankLitres: 54 },
              options: safetyComfort(['xDrive AWD', 'panoramic roof']),
              knownFor: ['brisk and smooth', 'all-weather grip', 'family friendly'],
              watchOut: ['fuel use vs diesel', 'DCT service', 'options pricing']
            }
          ]
        }
      ]
    },
    {
      id: 'x2',
      name: 'X2',
      segment: 'Compact coupe-SUV',
      description: 'Sportier, lower-roofline take on the X1 compact SUV.',
      tags: ['premium', 'suv', 'sport'],
      generations: [
        {
          id: 'u10',
          name: 'U10',
          years: '2024–present',
          platform: 'FAAR',
          bodyStyles: ['SUV'],
          summary: 'Coupe-styled compact crossover with sloping roof and bold design.',
          heroImage: 'bmw-x2-u10',
          variants: [
            {
              id: 'bmw-x2-u10-sdrive20i',
              name: 'sDrive20i',
              years: '2024–present',
              priceBand: '€38,000–€48,000 used',
              specs: { engine: '2.0 turbo petrol mild hybrid', engineCode: 'B48', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 170, powerKw: 125, torqueNm: 280, fuel: 'Petrol', gearbox: 'DCT', gears: 7, drive: 'FWD', acceleration0100: 8.3, topSpeedKmh: 224, consumptionL100: 6.5, co2Gkm: 148 },
              dimensions: { lengthMm: 4554, widthMm: 1845, heightMm: 1560, wheelbaseMm: 2692, bootLitres: 560, weightKg: 1560, tankLitres: 54 },
              options: safetyComfort(['M Sport package', 'sport seats']),
              knownFor: ['sharp styling', 'good boot for class', 'agile'],
              watchOut: ['rear headroom', 'firm ride', 'DCT service']
            },
            {
              id: 'bmw-x2-u10-xdrive20d',
              name: 'xDrive20d',
              years: '2024–present',
              priceBand: '€41,000–€51,000 used',
              specs: { engine: '2.0 turbo diesel', engineCode: 'B47', displacementCc: 1995, cylinders: 'Inline-4', powerHp: 163, powerKw: 120, torqueNm: 360, fuel: 'Diesel', gearbox: 'DCT', gears: 7, drive: 'AWD', acceleration0100: 8.1, topSpeedKmh: 217, consumptionL100: 5.0, co2Gkm: 131 },
              dimensions: { lengthMm: 4554, widthMm: 1845, heightMm: 1560, wheelbaseMm: 2692, bootLitres: 560, weightKg: 1680, tankLitres: 54 },
              options: safetyComfort(['xDrive AWD', 'adaptive cruise']),
              knownFor: ['efficient diesel', 'all-weather traction', 'practical'],
              watchOut: ['AdBlue', 'DCT service', 'options pricing']
            }
          ]
        }
      ]
    },
    {
      id: 'x3',
      name: 'X3',
      segment: 'Premium midsize SUV',
      description: 'Hugely popular premium SUV with diesel, petrol, PHEV and M Performance options.',
      tags: ['premium', 'suv', 'family', 'awd'],
      generations: [
        {
          id: 'g45',
          name: 'G45',
          years: '2024–present',
          platform: 'CLAR',
          bodyStyles: ['SUV'],
          summary: 'Latest X3; sleeker design, mild-hybrid and PHEV power, big tech upgrade.',
          heroImage: 'bmw-x3-g45',
          variants: [
            {
              id: 'bmw-x3-g45-xdrive20d',
              name: 'xDrive20d',
              years: '2024–present',
              priceBand: '€52,000–€66,000 used',
              specs: { engine: '2.0 turbo diesel mild hybrid', engineCode: 'B47', displacementCc: 1995, cylinders: 'Inline-4', powerHp: 197, powerKw: 145, torqueNm: 400, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 7.8, topSpeedKmh: 213, consumptionL100: 5.5, co2Gkm: 144 },
              dimensions: { lengthMm: 4755, widthMm: 1920, heightMm: 1660, wheelbaseMm: 2865, bootLitres: 570, weightKg: 1880, tankLitres: 60 },
              options: safetyComfort(['xDrive AWD', 'panoramic roof']),
              knownFor: ['practical and efficient', 'comfortable cruiser', 'strong residuals'],
              watchOut: ['AdBlue', 'large alloy ride', 'options pricing']
            },
            {
              id: 'bmw-x3-g45-xdrive30e',
              name: 'xDrive30e',
              years: '2024–present',
              priceBand: '€56,000–€70,000 used',
              specs: { engine: '2.0 turbo petrol plug-in hybrid', engineCode: 'B48 + e', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 299, powerKw: 220, torqueNm: 450, fuel: 'Plug-in Hybrid', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 6.2, topSpeedKmh: 215, consumptionL100: 1.2, electricRangeKm: 90, co2Gkm: 27 },
              dimensions: { lengthMm: 4755, widthMm: 1920, heightMm: 1660, wheelbaseMm: 2865, bootLitres: 460, weightKg: 2070, tankLitres: 50 },
              options: safetyComfort(['90 km electric range', 'home charging cable']),
              knownFor: ['long EV range', 'low company-car tax', 'refined'],
              watchOut: ['reduced boot', 'battery health', 'kerb weight']
            },
            {
              id: 'bmw-x3-g45-m40i',
              name: 'M40i xDrive',
              years: '2024–present',
              priceBand: '€62,000–€78,000 used',
              specs: { engine: '3.0 turbo petrol mild hybrid', engineCode: 'B58', displacementCc: 2998, cylinders: 'Inline-6', powerHp: 360, powerKw: 265, torqueNm: 500, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 4.6, topSpeedKmh: 250, consumptionL100: 8.5, co2Gkm: 195 },
              dimensions: { lengthMm: 4755, widthMm: 1920, heightMm: 1660, wheelbaseMm: 2865, bootLitres: 570, weightKg: 1990, tankLitres: 60 },
              options: safetyComfort(['M Sport differential', 'adaptive M suspension']),
              knownFor: ['inline-six pace', 'SUV practicality', 'great soundtrack'],
              watchOut: ['fuel use', 'tyre costs', 'check for abuse']
            }
          ]
        }
      ]
    },
    {
      id: 'x4',
      name: 'X4',
      segment: 'Midsize coupe-SUV',
      description: 'Coupe-roofline version of the X3 with a sportier look.',
      tags: ['premium', 'suv', 'sport'],
      generations: [
        {
          id: 'g02',
          name: 'G02',
          years: '2018–present',
          platform: 'CLAR',
          bodyStyles: ['SUV'],
          summary: 'Sloping-roof X3 alternative trading some practicality for style.',
          heroImage: 'bmw-x4-g02',
          variants: [
            {
              id: 'bmw-x4-g02-xdrive20d',
              name: 'xDrive20d',
              years: '2018–present',
              priceBand: '€34,000–€52,000 used',
              specs: { engine: '2.0 turbo diesel', engineCode: 'B47', displacementCc: 1995, cylinders: 'Inline-4', powerHp: 190, powerKw: 140, torqueNm: 400, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 8.0, topSpeedKmh: 213, consumptionL100: 5.4, co2Gkm: 143 },
              dimensions: { lengthMm: 4752, widthMm: 1918, heightMm: 1621, wheelbaseMm: 2864, bootLitres: 525, weightKg: 1840, tankLitres: 65 },
              options: safetyComfort(['xDrive AWD', 'M Sport package']),
              knownFor: ['sporty looks', 'composed handling', 'strong diesel'],
              watchOut: ['reduced boot vs X3', 'rear headroom', 'AdBlue']
            },
            {
              id: 'bmw-x4-g02-m40i',
              name: 'M40i',
              years: '2018–present',
              priceBand: '€42,000–€62,000 used',
              specs: { engine: '3.0 turbo petrol', engineCode: 'B58', displacementCc: 2998, cylinders: 'Inline-6', powerHp: 360, powerKw: 265, torqueNm: 500, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 4.8, topSpeedKmh: 250, consumptionL100: 9.2, co2Gkm: 209 },
              dimensions: { lengthMm: 4752, widthMm: 1918, heightMm: 1621, wheelbaseMm: 2864, bootLitres: 525, weightKg: 1930, tankLitres: 65 },
              options: safetyComfort(['M Sport differential', 'adaptive suspension']),
              knownFor: ['quick inline-six', 'all-weather grip', 'distinctive styling'],
              watchOut: ['fuel use', 'tyre costs', 'firm ride']
            }
          ]
        }
      ]
    },
    {
      id: 'x5',
      name: 'X5',
      segment: 'Premium large SUV',
      description: 'Large luxury SUV with strong diesel, petrol and plug-in hybrid powertrains.',
      tags: ['premium', 'suv', 'family', 'awd'],
      generations: [
        {
          id: 'g05',
          name: 'G05',
          years: '2018–present',
          platform: 'CLAR',
          bodyStyles: ['SUV'],
          summary: 'Comfortable, powerful and tech-rich large SUV; ownership costs are premium.',
          heroImage: 'bmw-x5-g05',
          variants: [
            {
              id: 'bmw-x5-g05-xdrive30d',
              name: 'xDrive30d',
              years: '2018–present',
              priceBand: '€45,000–€80,000 used',
              specs: { engine: '3.0 turbo diesel', engineCode: 'B57', displacementCc: 2993, cylinders: 'Inline-6', powerHp: 286, powerKw: 210, torqueNm: 650, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 6.1, topSpeedKmh: 230, consumptionL100: 6.8, co2Gkm: 179 },
              dimensions: { lengthMm: 4935, widthMm: 2004, heightMm: 1765, wheelbaseMm: 2975, bootLitres: 650, weightKg: 2110, tankLitres: 80 },
              options: safetyComfort(['air suspension', 'third-row seats']),
              knownFor: ['strong inline-six diesel', 'luxury cabin', 'excellent long trips'],
              watchOut: ['air suspension', 'large tyre costs', 'EGR/AdBlue']
            },
            {
              id: 'bmw-x5-g05-xdrive45e',
              name: 'xDrive45e',
              years: '2019–present',
              priceBand: '€52,000–€88,000 used',
              specs: { engine: '3.0 turbo petrol plug-in hybrid', engineCode: 'B58 + e', displacementCc: 2998, cylinders: 'Inline-6', powerHp: 394, powerKw: 290, torqueNm: 600, fuel: 'Plug-in Hybrid', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 5.6, topSpeedKmh: 235, consumptionL100: 1.2, electricRangeKm: 88, co2Gkm: 27 },
              dimensions: { lengthMm: 4935, widthMm: 2004, heightMm: 1765, wheelbaseMm: 2975, bootLitres: 500, weightKg: 2510, tankLitres: 69 },
              options: safetyComfort(['88 km electric range', 'air suspension']),
              knownFor: ['silent EV running', 'strong six-cylinder PHEV', 'low company tax'],
              watchOut: ['kerb weight', 'reduced boot', 'battery health']
            },
            {
              id: 'bmw-x5-g05-m60i',
              name: 'M60i xDrive',
              years: '2022–present',
              priceBand: '€70,000–€105,000 used',
              specs: { engine: '4.4 twin-turbo V8 mild hybrid', engineCode: 'S68', displacementCc: 4395, cylinders: 'V8', powerHp: 530, powerKw: 390, torqueNm: 750, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 4.3, topSpeedKmh: 250, consumptionL100: 12.0, co2Gkm: 272 },
              dimensions: { lengthMm: 4935, widthMm: 2004, heightMm: 1765, wheelbaseMm: 2975, bootLitres: 650, weightKg: 2310, tankLitres: 83 },
              options: safetyComfort(['M Sport differential', 'air suspension']),
              knownFor: ['effortless V8 pace', 'luxury and tech', 'great soundtrack'],
              watchOut: ['fuel use', 'tyre/brake costs', 'complex electronics']
            }
          ]
        }
      ]
    },
    {
      id: 'x6',
      name: 'X6',
      segment: 'Large coupe-SUV',
      description: 'Coupe-roofline sibling of the X5 with a sportier silhouette.',
      tags: ['premium', 'suv', 'sport'],
      generations: [
        {
          id: 'g06',
          name: 'G06',
          years: '2019–present',
          platform: 'CLAR',
          bodyStyles: ['SUV'],
          summary: 'Style-led large SUV-coupe trading some practicality for road presence.',
          heroImage: 'bmw-x6-g06',
          variants: [
            {
              id: 'bmw-x6-g06-xdrive30d',
              name: 'xDrive30d',
              years: '2019–present',
              priceBand: '€50,000–€85,000 used',
              specs: { engine: '3.0 turbo diesel', engineCode: 'B57', displacementCc: 2993, cylinders: 'Inline-6', powerHp: 286, powerKw: 210, torqueNm: 650, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 6.1, topSpeedKmh: 230, consumptionL100: 7.0, co2Gkm: 184 },
              dimensions: { lengthMm: 4930, widthMm: 2004, heightMm: 1696, wheelbaseMm: 2975, bootLitres: 580, weightKg: 2155, tankLitres: 80 },
              options: safetyComfort(['air suspension', 'M Sport package']),
              knownFor: ['road presence', 'strong six-cylinder diesel', 'comfortable cruiser'],
              watchOut: ['reduced boot vs X5', 'tyre costs', 'air suspension']
            },
            {
              id: 'bmw-x6-g06-m60i',
              name: 'M60i xDrive',
              years: '2022–present',
              priceBand: '€72,000–€108,000 used',
              specs: { engine: '4.4 twin-turbo V8 mild hybrid', engineCode: 'S68', displacementCc: 4395, cylinders: 'V8', powerHp: 530, powerKw: 390, torqueNm: 750, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 4.3, topSpeedKmh: 250, consumptionL100: 12.5, co2Gkm: 283 },
              dimensions: { lengthMm: 4930, widthMm: 2004, heightMm: 1696, wheelbaseMm: 2975, bootLitres: 580, weightKg: 2340, tankLitres: 83 },
              options: safetyComfort(['M Sport differential', 'air suspension']),
              knownFor: ['V8 muscle', 'imposing looks', 'all-weather grip'],
              watchOut: ['fuel use', 'consumables', 'depreciation']
            }
          ]
        }
      ]
    },
    {
      id: 'x7',
      name: 'X7',
      segment: 'Full-size luxury SUV',
      description: 'BMW’s largest, most luxurious seven-seat SUV.',
      tags: ['luxury', 'suv', 'family', '7-seat'],
      generations: [
        {
          id: 'g07',
          name: 'G07',
          years: '2018–present',
          platform: 'CLAR',
          bodyStyles: ['SUV'],
          summary: 'Imposing three-row flagship SUV with limousine-grade comfort.',
          heroImage: 'bmw-x7-g07',
          variants: [
            {
              id: 'bmw-x7-g07-xdrive40d',
              name: 'xDrive40d',
              years: '2018–present',
              priceBand: '€65,000–€110,000 used',
              specs: { engine: '3.0 turbo diesel mild hybrid', engineCode: 'B57', displacementCc: 2993, cylinders: 'Inline-6', powerHp: 352, powerKw: 259, torqueNm: 720, fuel: 'Diesel', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 5.9, topSpeedKmh: 250, consumptionL100: 7.5, co2Gkm: 197 },
              dimensions: { lengthMm: 5181, widthMm: 2000, heightMm: 1805, wheelbaseMm: 3105, bootLitres: 750, weightKg: 2320, tankLitres: 83 },
              options: safetyComfort(['executive lounge seating', 'air suspension', 'six/seven seats']),
              knownFor: ['massive interior space', 'effortless diesel torque', 'luxury comfort'],
              watchOut: ['size in cities', 'tyre costs', 'depreciation']
            }
          ]
        }
      ]
    },
    {
      id: 'z4',
      name: 'Z4',
      segment: 'Roadster',
      description: 'Two-seat soft-top roadster with inline four and six engines.',
      tags: ['sport', 'convertible', 'rwd'],
      generations: [
        {
          id: 'g29',
          name: 'G29',
          years: '2018–present',
          platform: 'CLAR',
          bodyStyles: ['Convertible'],
          summary: 'Rear-drive roadster co-developed with the Toyota Supra.',
          heroImage: 'bmw-z4-g29',
          variants: [
            {
              id: 'bmw-z4-g29-sdrive20i',
              name: 'sDrive20i',
              years: '2018–present',
              priceBand: '€34,000–€48,000 used',
              specs: { engine: '2.0 turbo petrol', engineCode: 'B48', displacementCc: 1998, cylinders: 'Inline-4', powerHp: 197, powerKw: 145, torqueNm: 320, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 6.6, topSpeedKmh: 240, consumptionL100: 6.5, co2Gkm: 148 },
              dimensions: { lengthMm: 4324, widthMm: 1864, heightMm: 1304, wheelbaseMm: 2470, bootLitres: 281, weightKg: 1405, tankLitres: 52 },
              options: safetyComfort(['electric soft top', 'sport seats']),
              knownFor: ['open-top fun', 'quick soft-top operation', 'balanced chassis'],
              watchOut: ['small boot', 'cabin storage', 'soft-top wear']
            },
            {
              id: 'bmw-z4-g29-m40i',
              name: 'M40i',
              years: '2018–present',
              priceBand: '€44,000–€62,000 used',
              specs: { engine: '3.0 turbo petrol', engineCode: 'B58', displacementCc: 2998, cylinders: 'Inline-6', powerHp: 340, powerKw: 250, torqueNm: 500, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 4.5, topSpeedKmh: 250, consumptionL100: 7.4, co2Gkm: 168 },
              dimensions: { lengthMm: 4324, widthMm: 1864, heightMm: 1304, wheelbaseMm: 2470, bootLitres: 281, weightKg: 1535, tankLitres: 52 },
              options: safetyComfort(['M Sport differential', 'adaptive M suspension']),
              knownFor: ['rapid inline-six roadster', 'great soundtrack', 'engaging drive'],
              watchOut: ['tyre wear', 'small boot', 'check for abuse']
            }
          ]
        }
      ]
    },
    {
      id: 'i4',
      name: 'i4',
      segment: 'Electric gran coupe',
      description: 'Fully electric four-door gran coupe based on the 4 Series Gran Coupe.',
      tags: ['electric', 'premium', 'sport'],
      generations: [
        {
          id: 'g26',
          name: 'G26',
          years: '2021–present',
          platform: 'CLAR (BEV)',
          bodyStyles: ['Sedan'],
          summary: 'BMW’s electric gran coupe; sharp to drive with strong real-world range.',
          heroImage: 'bmw-i4-g26',
          variants: [
            {
              id: 'bmw-i4-g26-edrive40',
              name: 'eDrive40',
              years: '2021–present',
              priceBand: '€42,000–€60,000 used',
              specs: { engine: 'single rear motor', powerHp: 340, powerKw: 250, torqueNm: 430, fuel: 'Electric', gearbox: 'Automatic', drive: 'RWD', acceleration0100: 5.7, topSpeedKmh: 190, electricRangeKm: 590 },
              dimensions: { lengthMm: 4783, widthMm: 1852, heightMm: 1448, wheelbaseMm: 2856, bootLitres: 470, weightKg: 2050 },
              options: evComfort(['curved display', 'heat pump']),
              knownFor: ['long real-world range', 'sharp handling', 'refined and quiet'],
              watchOut: ['weight', 'firm ride on big wheels', 'charging speed vs rivals']
            },
            {
              id: 'bmw-i4-g26-m50',
              name: 'M50',
              years: '2021–present',
              priceBand: '€52,000–€72,000 used',
              specs: { engine: 'dual motor', powerHp: 544, powerKw: 400, torqueNm: 795, fuel: 'Electric', gearbox: 'Automatic', drive: 'AWD', acceleration0100: 3.9, topSpeedKmh: 225, electricRangeKm: 510 },
              dimensions: { lengthMm: 4783, widthMm: 1852, heightMm: 1448, wheelbaseMm: 2856, bootLitres: 470, weightKg: 2215 },
              options: evComfort(['M Sport package', 'adaptive suspension']),
              knownFor: ['savage straight-line pace', 'AWD traction', 'everyday usability'],
              watchOut: ['range drops when pushed', 'tyre costs', 'kerb weight']
            }
          ]
        }
      ]
    },
    {
      id: 'i5',
      name: 'i5',
      segment: 'Electric executive sedan',
      description: 'Fully electric 5 Series sedan and Touring wagon.',
      tags: ['electric', 'premium', 'comfort'],
      generations: [
        {
          id: 'g60-bev',
          name: 'G60 (i5)',
          years: '2023–present',
          platform: 'CLAR (BEV)',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'Electric executive sedan/Touring with serene comfort and strong tech.',
          heroImage: 'bmw-i5-g60',
          variants: [
            {
              id: 'bmw-i5-g60-bev-edrive40',
              name: 'eDrive40',
              years: '2023–present',
              priceBand: '€56,000–€74,000 used',
              specs: { engine: 'single rear motor', powerHp: 340, powerKw: 250, torqueNm: 430, fuel: 'Electric', gearbox: 'Automatic', drive: 'RWD', acceleration0100: 6.0, topSpeedKmh: 193, electricRangeKm: 582 },
              dimensions: { lengthMm: 5060, widthMm: 1900, heightMm: 1505, wheelbaseMm: 2995, bootLitres: 490, weightKg: 2200 },
              options: evComfort(['curved display', 'heat pump', 'air suspension (rear)']),
              knownFor: ['hushed comfort', 'long range', 'beautiful cabin'],
              watchOut: ['size', 'screen-led controls', 'charging speed']
            },
            {
              id: 'bmw-i5-g60-bev-m60',
              name: 'M60 xDrive',
              years: '2023–present',
              priceBand: '€74,000–€95,000 used',
              specs: { engine: 'dual motor', powerHp: 601, powerKw: 442, torqueNm: 820, fuel: 'Electric', gearbox: 'Automatic', drive: 'AWD', acceleration0100: 3.8, topSpeedKmh: 230, electricRangeKm: 516 },
              dimensions: { lengthMm: 5060, widthMm: 1900, heightMm: 1505, wheelbaseMm: 2995, bootLitres: 490, weightKg: 2380 },
              options: evComfort(['M Sport package', 'adaptive suspension']),
              knownFor: ['supercar pace', 'comfort plus performance', 'AWD grip'],
              watchOut: ['weight', 'range when pushed', 'tyre costs']
            }
          ]
        }
      ]
    },
    {
      id: 'ix',
      name: 'iX',
      segment: 'Electric flagship SUV',
      description: 'Technology-flagship electric SUV with long range and a lounge-like cabin.',
      tags: ['electric', 'luxury', 'suv'],
      generations: [
        {
          id: 'i20',
          name: 'I20',
          years: '2021–present',
          platform: 'BEV',
          bodyStyles: ['SUV'],
          summary: 'Bold electric SUV showcasing BMW’s latest tech and materials.',
          heroImage: 'bmw-ix-i20',
          variants: [
            {
              id: 'bmw-ix-i20-xdrive40',
              name: 'xDrive40',
              years: '2021–present',
              priceBand: '€55,000–€78,000 used',
              specs: { engine: 'dual motor', powerHp: 326, powerKw: 240, torqueNm: 630, fuel: 'Electric', gearbox: 'Automatic', drive: 'AWD', acceleration0100: 6.1, topSpeedKmh: 200, electricRangeKm: 425 },
              dimensions: { lengthMm: 4953, widthMm: 1967, heightMm: 1696, wheelbaseMm: 3000, bootLitres: 500, weightKg: 2440 },
              options: evComfort(['heat pump', 'panoramic glass roof']),
              knownFor: ['lounge-like cabin', 'refined and quiet', 'fast charging'],
              watchOut: ['polarising design', 'kerb weight', 'tyre costs']
            },
            {
              id: 'bmw-ix-i20-xdrive50',
              name: 'xDrive50',
              years: '2021–present',
              priceBand: '€68,000–€95,000 used',
              specs: { engine: 'dual motor', powerHp: 523, powerKw: 385, torqueNm: 765, fuel: 'Electric', gearbox: 'Automatic', drive: 'AWD', acceleration0100: 4.6, topSpeedKmh: 200, electricRangeKm: 630 },
              dimensions: { lengthMm: 4953, widthMm: 1967, heightMm: 1696, wheelbaseMm: 3000, bootLitres: 500, weightKg: 2510 },
              options: evComfort(['Bowers & Wilkins audio', 'air suspension']),
              knownFor: ['very long range', 'strong performance', 'serene comfort'],
              watchOut: ['price', 'weight', 'big-wheel ride']
            }
          ]
        }
      ]
    },
    {
      id: 'ix1',
      name: 'iX1',
      segment: 'Compact electric SUV',
      description: 'Fully electric version of the X1 compact SUV.',
      tags: ['electric', 'premium', 'suv'],
      generations: [
        {
          id: 'u11-bev',
          name: 'U11 (iX1)',
          years: '2022–present',
          platform: 'FAAR (BEV)',
          bodyStyles: ['SUV'],
          summary: 'Practical, quick electric compact SUV with a roomy cabin.',
          heroImage: 'bmw-ix1-u11',
          variants: [
            {
              id: 'bmw-ix1-u11-bev-xdrive30',
              name: 'xDrive30',
              years: '2022–present',
              priceBand: '€40,000–€55,000 used',
              specs: { engine: 'dual motor', powerHp: 313, powerKw: 230, torqueNm: 494, fuel: 'Electric', gearbox: 'Automatic', drive: 'AWD', acceleration0100: 5.6, topSpeedKmh: 180, electricRangeKm: 440 },
              dimensions: { lengthMm: 4500, widthMm: 1845, heightMm: 1642, wheelbaseMm: 2692, bootLitres: 490, weightKg: 2010 },
              options: evComfort(['heat pump', 'power tailgate']),
              knownFor: ['brisk and practical', 'roomy cabin', 'easy to live with'],
              watchOut: ['range vs price', 'firm ride on big wheels', 'charging speed']
            }
          ]
        }
      ]
    },
    {
      id: 'ix3',
      name: 'iX3',
      segment: 'Midsize electric SUV',
      description: 'Electric version of the previous-generation X3.',
      tags: ['electric', 'premium', 'suv'],
      generations: [
        {
          id: 'g08',
          name: 'G08',
          years: '2021–present',
          platform: 'CLAR (BEV)',
          bodyStyles: ['SUV'],
          summary: 'Efficient rear-drive electric SUV based on the X3 body.',
          heroImage: 'bmw-ix3-g08',
          variants: [
            {
              id: 'bmw-ix3-g08-impressive',
              name: 'iX3',
              years: '2021–present',
              priceBand: '€42,000–€58,000 used',
              specs: { engine: 'single rear motor', powerHp: 286, powerKw: 210, torqueNm: 400, fuel: 'Electric', gearbox: 'Automatic', drive: 'RWD', acceleration0100: 6.8, topSpeedKmh: 180, electricRangeKm: 460 },
              dimensions: { lengthMm: 4734, widthMm: 1891, heightMm: 1668, wheelbaseMm: 2864, bootLitres: 510, weightKg: 2185 },
              options: evComfort(['heat pump', 'adaptive suspension']),
              knownFor: ['efficient', 'familiar X3 practicality', 'smooth and quiet'],
              watchOut: ['single-motor traction in snow', 'charging speed', 'tyre costs']
            }
          ]
        }
      ]
    },
    {
      id: 'm2',
      name: 'M2',
      segment: 'Compact M car',
      description: 'The smallest, purest M car — rear-drive inline-six coupe.',
      tags: ['m', 'sport', 'coupe', 'rwd'],
      generations: [
        {
          id: 'g87',
          name: 'G87',
          years: '2022–present',
          platform: 'CLAR',
          bodyStyles: ['Coupe'],
          summary: 'Rear-drive M coupe with the S58 twin-turbo six and a manual option.',
          heroImage: 'bmw-m2-g87',
          variants: [
            {
              id: 'bmw-m2-g87-coupe',
              name: 'M2 Coupe',
              years: '2022–present',
              priceBand: '€62,000–€80,000 used',
              specs: { engine: '3.0 twin-turbo petrol', engineCode: 'S58', displacementCc: 2993, cylinders: 'Inline-6', powerHp: 460, powerKw: 338, torqueNm: 550, fuel: 'Petrol', gearbox: 'Manual', gears: 6, drive: 'RWD', acceleration0100: 4.1, topSpeedKmh: 250, consumptionL100: 9.8, co2Gkm: 223 },
              dimensions: { lengthMm: 4580, widthMm: 1887, heightMm: 1403, wheelbaseMm: 2747, bootLitres: 390, weightKg: 1725, tankLitres: 52 },
              options: safetyComfort(['M differential', 'adaptive M suspension', '6-speed manual']),
              knownFor: ['rear-drive purity', 'manual option', 'huge tuning scene'],
              watchOut: ['firm ride', 'tyre wear', 'check for track abuse']
            }
          ]
        }
      ]
    },
    {
      id: 'm3',
      name: 'M3',
      segment: 'M sport sedan',
      description: 'High-performance 3 Series sedan and Touring with the S58 twin-turbo six.',
      tags: ['m', 'sport', 'sedan', 'wagon'],
      generations: [
        {
          id: 'g80',
          name: 'G80/G81',
          years: '2021–present',
          platform: 'CLAR',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'M3 sedan and (first-ever) Touring wagon with rear- or all-wheel drive.',
          heroImage: 'bmw-m3-g80',
          variants: [
            {
              id: 'bmw-m3-g80-competition',
              name: 'M3 Competition xDrive',
              years: '2021–present',
              priceBand: '€72,000–€95,000 used',
              specs: { engine: '3.0 twin-turbo petrol', engineCode: 'S58', displacementCc: 2993, cylinders: 'Inline-6', powerHp: 510, powerKw: 375, torqueNm: 650, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 3.5, topSpeedKmh: 290, consumptionL100: 10.0, co2Gkm: 228 },
              dimensions: { lengthMm: 4794, widthMm: 1903, heightMm: 1433, wheelbaseMm: 2857, bootLitres: 480, weightKg: 1780, tankLitres: 59 },
              options: safetyComfort(['M xDrive (RWD switchable)', 'carbon bucket seats', 'M Drive Professional']),
              knownFor: ['blistering all-weather pace', 'Touring practicality option', 'everyday usability'],
              watchOut: ['polarising grille', 'tyre costs', 'firm ride']
            },
            {
              id: 'bmw-m3-g80-cs',
              name: 'M3 CS',
              years: '2023–present',
              priceBand: '€95,000–€130,000 used',
              specs: { engine: '3.0 twin-turbo petrol', engineCode: 'S58', displacementCc: 2993, cylinders: 'Inline-6', powerHp: 550, powerKw: 405, torqueNm: 650, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 3.4, topSpeedKmh: 302, consumptionL100: 10.1, co2Gkm: 230 },
              dimensions: { lengthMm: 4794, widthMm: 1903, heightMm: 1433, wheelbaseMm: 2857, bootLitres: 480, weightKg: 1765, tankLitres: 59 },
              options: safetyComfort(['carbon-fibre weight savings', 'M carbon ceramic brakes']),
              knownFor: ['lighter, sharper M3', 'huge pace', 'collectible'],
              watchOut: ['price premium', 'firm ride', 'limited supply']
            }
          ]
        }
      ]
    },
    {
      id: 'm4',
      name: 'M4',
      segment: 'M sports coupe',
      description: 'High-performance 4 Series coupe and convertible — the M2/M3’s two-door sibling.',
      tags: ['m', 'sport', 'coupe'],
      generations: [
        {
          id: 'g82',
          name: 'G82/G83',
          years: '2021–present',
          platform: 'CLAR',
          bodyStyles: ['Coupe', 'Convertible'],
          summary: 'M4 coupe and convertible; rear- or all-wheel drive with the S58 six.',
          heroImage: 'bmw-m4-g82',
          variants: [
            {
              id: 'bmw-m4-g82-competition',
              name: 'M4 Competition',
              years: '2021–present',
              priceBand: '€74,000–€98,000 used',
              specs: { engine: '3.0 twin-turbo petrol', engineCode: 'S58', displacementCc: 2993, cylinders: 'Inline-6', powerHp: 510, powerKw: 375, torqueNm: 650, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'RWD', acceleration0100: 3.9, topSpeedKmh: 250, consumptionL100: 9.8, co2Gkm: 224 },
              dimensions: { lengthMm: 4794, widthMm: 1887, heightMm: 1393, wheelbaseMm: 2855, bootLitres: 440, weightKg: 1725, tankLitres: 59 },
              options: safetyComfort(['M carbon bucket seats', 'adaptive M suspension', 'M Drive Professional']),
              knownFor: ['savage straight-line pace', 'rear-drive thrills', 'strong tuning support'],
              watchOut: ['polarising grille', 'tyre costs', 'check for track use']
            },
            {
              id: 'bmw-m4-g82-cs',
              name: 'M4 CS',
              years: '2023–present',
              priceBand: '€100,000–€135,000 used',
              specs: { engine: '3.0 twin-turbo petrol', engineCode: 'S58', displacementCc: 2993, cylinders: 'Inline-6', powerHp: 550, powerKw: 405, torqueNm: 650, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 3.4, topSpeedKmh: 302, consumptionL100: 10.0, co2Gkm: 229 },
              dimensions: { lengthMm: 4794, widthMm: 1887, heightMm: 1393, wheelbaseMm: 2855, bootLitres: 440, weightKg: 1765, tankLitres: 59 },
              options: safetyComfort(['carbon-fibre bonnet & roof', 'M carbon ceramic brakes']),
              knownFor: ['track-focused M4', 'lighter and sharper', 'rare and collectible'],
              watchOut: ['price', 'firm ride', 'limited availability']
            }
          ]
        }
      ]
    },
    {
      id: 'm5',
      name: 'M5',
      segment: 'M super-sedan',
      description: 'The definitive super-sedan — now a 700+ hp V8 plug-in hybrid.',
      tags: ['m', 'sport', 'sedan', 'phev'],
      generations: [
        {
          id: 'g90',
          name: 'G90',
          years: '2024–present',
          platform: 'CLAR',
          bodyStyles: ['Sedan', 'Wagon'],
          summary: 'Latest M5; a V8 plug-in hybrid super-sedan (and Touring) with huge power.',
          heroImage: 'bmw-m5-g90',
          variants: [
            {
              id: 'bmw-m5-g90-phev',
              name: 'M5',
              years: '2024–present',
              priceBand: '€120,000–€155,000 used',
              specs: { engine: '4.4 twin-turbo V8 plug-in hybrid', engineCode: 'S68 + e', displacementCc: 4395, cylinders: 'V8', powerHp: 727, powerKw: 535, torqueNm: 1000, fuel: 'Plug-in Hybrid', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 3.5, topSpeedKmh: 250, consumptionL100: 1.7, electricRangeKm: 69, co2Gkm: 39 },
              dimensions: { lengthMm: 5096, widthMm: 1970, heightMm: 1510, wheelbaseMm: 3006, bootLitres: 466, weightKg: 2435, tankLitres: 60 },
              options: safetyComfort(['M xDrive', 'M carbon ceramic brakes', 'electric-only running']),
              knownFor: ['monumental power', 'EV-only commuting', 'super-sedan comfort'],
              watchOut: ['heavy kerb weight', 'tyre costs', 'fuel use off-charge']
            }
          ]
        },
        {
          id: 'f90',
          name: 'F90',
          years: '2017–2023',
          platform: 'CLAR',
          bodyStyles: ['Sedan'],
          summary: 'Previous M5; a 600+ hp twin-turbo V8 super-sedan, superb used buy.',
          heroImage: 'bmw-m5-f90',
          variants: [
            {
              id: 'bmw-m5-f90-competition',
              name: 'M5 Competition',
              years: '2018–2023',
              priceBand: '€60,000–€95,000 used',
              specs: { engine: '4.4 twin-turbo V8', engineCode: 'S63', displacementCc: 4395, cylinders: 'V8', powerHp: 625, powerKw: 460, torqueNm: 750, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 3.3, topSpeedKmh: 305, consumptionL100: 10.6, co2Gkm: 241 },
              dimensions: { lengthMm: 4983, widthMm: 1903, heightMm: 1473, wheelbaseMm: 2982, bootLitres: 530, weightKg: 1865, tankLitres: 68 },
              options: safetyComfort(['M xDrive (RWD mode)', 'M carbon ceramic brakes']),
              knownFor: ['ballistic V8 pace', 'switchable RWD', 'everyday super-sedan'],
              watchOut: ['tyre/brake costs', 'fuel use', 'check service history']
            }
          ]
        }
      ]
    },
    {
      id: 'm8',
      name: 'M8',
      segment: 'M grand tourer',
      description: 'Flagship M grand tourer coupe with a twin-turbo V8.',
      tags: ['m', 'sport', 'coupe', 'gt'],
      generations: [
        {
          id: 'f92',
          name: 'F92',
          years: '2019–present',
          platform: 'CLAR',
          bodyStyles: ['Coupe', 'Convertible'],
          summary: 'Most powerful 8 Series; a luxurious yet ferociously fast M GT.',
          heroImage: 'bmw-m8-f92',
          variants: [
            {
              id: 'bmw-m8-f92-competition',
              name: 'M8 Competition',
              years: '2019–present',
              priceBand: '€90,000–€140,000 used',
              specs: { engine: '4.4 twin-turbo V8', engineCode: 'S63', displacementCc: 4395, cylinders: 'V8', powerHp: 625, powerKw: 460, torqueNm: 750, fuel: 'Petrol', gearbox: 'Automatic', gears: 8, drive: 'AWD', acceleration0100: 3.2, topSpeedKmh: 305, consumptionL100: 10.5, co2Gkm: 238 },
              dimensions: { lengthMm: 4867, widthMm: 1907, heightMm: 1362, wheelbaseMm: 2827, bootLitres: 420, weightKg: 2010, tankLitres: 68 },
              options: safetyComfort(['M carbon ceramic brakes', 'Merino leather', 'M Driver’s package']),
              knownFor: ['effortless V8 grand touring', 'huge pace', 'luxury cabin'],
              watchOut: ['depreciation', 'fuel/tyre costs', 'low rear space']
            }
          ]
        }
      ]
    }
  ]
};
