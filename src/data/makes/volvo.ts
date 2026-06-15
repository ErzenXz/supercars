import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const volvo: CarMake = {
  id: 'volvo',
  name: 'Volvo',
  country: 'Sweden',
  logoText: '⊘',
  models: [
    {
      id: 'xc40',
      name: 'XC40',
      segment: 'Compact Premium SUV',
      description: 'The XC40 is Volvo\'s entry into the compact premium SUV segment, riding the CMA platform shared with the Polestar 2. It balances Scandinavian design with practical packaging and is available with mild-hybrid petrol, plug-in hybrid, and fully electric powertrains under the Recharge sub-brand.',
      tags: ['compact-SUV', 'premium', 'mild-hybrid', 'PHEV', 'electric', 'Scandinavian', 'safety'],
      generations: [
        {
          id: 'xc40-mk1',
          name: 'XC40 Mk1 (536)',
          years: '2017–present',
          platform: 'Volvo CMA',
          bodyStyles: ['SUV'],
          summary: 'The first-generation XC40 on the CMA platform brought a fresh, youthful design language to Volvo\'s compact SUV range. Its innovative storage solutions, safety credentials, and broad powertrain range made it Car of the Year 2018. A 2022 mid-cycle refresh introduced B-designation mild-hybrid engines and a revised interior.',
          heroImage: 'xc40-mk1',
          variants: [
            {
              id: 'volvo-xc40-mk1-b4-mhev',
              name: 'XC40 B4 Mild Hybrid AWD',
              years: '2020–present',
              priceBand: '€24,000–€40,000 used',
              specs: {
                engine: '2.0 four-cylinder mild-hybrid petrol',
                engineCode: 'B4204T47',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 197,
                powerKw: 145,
                torqueNm: 300,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 7.5,
                topSpeedKmh: 210,
                consumptionL100: 7.3,
                co2Gkm: 166
              },
              dimensions: {
                lengthMm: 4425,
                widthMm: 1863,
                heightMm: 1652,
                wheelbaseMm: 2702,
                bootLitres: 460,
                weightKg: 1685,
                tankLitres: 54
              },
              options: safetyComfort(['Pilot Assist highway semi-autonomy', 'City Safety auto-braking', 'cross traffic alert', 'run-off road mitigation']),
              knownFor: ['Euro NCAP 5-star safety benchmark', 'clever cabin storage and organisation', 'premium Scandinavian interior quality', 'composed and refined ride character'],
              watchOut: ['infotainment portrait screen can be slow under load', 'boot lip higher than some rivals', 'real-world fuel economy below official figures', 'options inflate price towards larger XC60']
            },
            {
              id: 'volvo-xc40-mk1-t8-phev',
              name: 'XC40 Recharge T8 Plug-in Hybrid',
              years: '2020–present',
              priceBand: '€28,000–€46,000 used',
              specs: {
                engine: '1.5 three-cylinder petrol + rear e-motor',
                engineCode: 'B3154T2 hybrid',
                displacementCc: 1477,
                cylinders: 'Inline-3',
                powerHp: 262,
                powerKw: 193,
                torqueNm: 425,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 7.3,
                topSpeedKmh: 180,
                consumptionL100: 1.6,
                electricRangeKm: 48,
                co2Gkm: 36
              },
              dimensions: {
                lengthMm: 4425,
                widthMm: 1863,
                heightMm: 1652,
                wheelbaseMm: 2702,
                bootLitres: 419,
                weightKg: 1850,
                tankLitres: 54
              },
              options: safetyComfort(['Pilot Assist', 'City Safety', 'blind spot information system', 'Harman Kardon audio', 'park assist pilot']),
              knownFor: ['strong combined AWD performance', 'very low official CO2 for company car tax', 'genuine EV-only range for urban commutes', 'clean Scandinavian interior design'],
              watchOut: ['3-cylinder petrol feels strained when battery depleted', 'smaller boot due to battery packaging', 'real EV range shorter in cold temperatures', 'longer AC charge time on 3.7 kW standard']
            },
            {
              id: 'volvo-xc40-mk1-recharge-ev',
              name: 'XC40 Recharge Pure Electric Twin Motor',
              years: '2020–present',
              priceBand: '€26,000–€44,000 used',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 408,
                powerKw: 300,
                torqueNm: 660,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 180,
                electricRangeKm: 418
              },
              dimensions: {
                lengthMm: 4425,
                widthMm: 1863,
                heightMm: 1652,
                wheelbaseMm: 2702,
                bootLitres: 419,
                weightKg: 2200
              },
              options: evComfort(['Pilot Assist', 'City Safety', 'heat pump', 'Google Automotive Services', 'Harman Kardon audio']),
              knownFor: ['quick and effortless AWD performance', 'premium interior for the EV segment', 'OTA software updates keep car current', 'comprehensive safety technology standard'],
              watchOut: ['real-world range below WLTP in Nordic winter climates', 'no frunk for additional storage', 'Android-based infotainment can have software bugs', 'DC fast charging limited to 150 kW']
            }
          ]
        }
      ]
    },
    {
      id: 'ex40',
      name: 'EX40',
      segment: 'Compact Electric SUV',
      description: 'Formerly the XC40 Recharge Pure Electric, the EX40 became a standalone model from 2023 to represent Volvo\'s dedicated electric identity. It shares its CMA platform and bodyshell with the XC40 but is optimised exclusively for battery-electric operation, available in single-motor rear-wheel drive and dual-motor all-wheel drive.',
      tags: ['electric', 'compact-SUV', 'premium', 'CMA-platform', 'Recharge', 'AWD'],
      generations: [
        {
          id: 'ex40-gen1',
          name: 'EX40 Gen 1',
          years: '2023–present',
          platform: 'Volvo CMA',
          bodyStyles: ['SUV'],
          summary: 'The EX40 is a rebadging and refinement of the XC40 Recharge, with updated exterior trim and an improved next-generation infotainment system based on Android Automotive. Available with a 69 kWh usable battery in single-motor extended range or dual-motor performance configurations.',
          heroImage: 'ex40-gen1',
          variants: [
            {
              id: 'volvo-ex40-gen1-single',
              name: 'EX40 Single Motor Extended Range',
              years: '2023–present',
              priceBand: '€34,000–€46,000 new',
              specs: {
                engine: 'single rear permanent-magnet synchronous motor',
                powerHp: 252,
                powerKw: 185,
                torqueNm: 420,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 7.4,
                topSpeedKmh: 180,
                electricRangeKm: 533
              },
              dimensions: {
                lengthMm: 4425,
                widthMm: 1863,
                heightMm: 1652,
                wheelbaseMm: 2702,
                bootLitres: 419,
                weightKg: 2060
              },
              options: evComfort(['Pilot Assist', 'heat pump', 'Harman Kardon audio', 'park assist pilot']),
              knownFor: ['best-in-segment range for a single-motor variant', 'premium Scandinavian interior', 'comprehensive standard safety equipment', 'OTA updates maintain current software'],
              watchOut: ['RWD only requires winter tyres in cold climates', 'DC charging speed limited to 150 kW', 'infotainment can still feel laggy under load', 'no physical climate control buttons']
            },
            {
              id: 'volvo-ex40-gen1-twin',
              name: 'EX40 Twin Motor Performance',
              years: '2023–present',
              priceBand: '€42,000–€55,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 408,
                powerKw: 300,
                torqueNm: 660,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 180,
                electricRangeKm: 440
              },
              dimensions: {
                lengthMm: 4425,
                widthMm: 1863,
                heightMm: 1652,
                wheelbaseMm: 2702,
                bootLitres: 419,
                weightKg: 2200
              },
              options: evComfort(['Pilot Assist', 'heat pump', 'Harman Kardon premium audio', 'park assist cameras', 'panoramic sunroof']),
              knownFor: ['strong all-weather AWD performance', 'composed chassis for the power on offer', 'well-equipped standard specification', 'premium Scandinavian feel throughout'],
              watchOut: ['AWD reduces range noticeably versus single motor', '2.2-tonne weight affects ride and efficiency', 'fast-charging network speed slower than 800V rivals', 'infotainment still divisive in class']
            }
          ]
        }
      ]
    },
    {
      id: 'c40',
      name: 'C40 Recharge',
      segment: 'Compact Electric SUV-Coupe',
      description: 'The C40 Recharge is Volvo\'s electric-only SUV-coupe, sharing CMA platform and mechanicals with the EX40 but featuring a sloping fastback roofline for a more dramatic road presence. It was the first Volvo model sold exclusively as electric from day one, with no ICE equivalent.',
      tags: ['electric', 'SUV-coupe', 'fastback', 'premium', 'CMA-platform', 'Recharge', 'vegan'],
      generations: [
        {
          id: 'c40-gen1',
          name: 'C40 Recharge Gen 1',
          years: '2021–present',
          platform: 'Volvo CMA',
          bodyStyles: ['SUV', 'Coupe'],
          summary: 'The C40 Recharge introduced a coupe-SUV silhouette to Volvo\'s compact electric range, sacrificing some rear headroom and boot space for a more stylish profile. A 2023 update added the single-motor extended range variant and refreshed exterior details, and it was the first Volvo to be offered exclusively online.',
          heroImage: 'c40-gen1',
          variants: [
            {
              id: 'volvo-c40-gen1-single',
              name: 'C40 Single Motor Extended Range',
              years: '2023–present',
              priceBand: '€36,000–€48,000 new',
              specs: {
                engine: 'single rear permanent-magnet synchronous motor',
                powerHp: 252,
                powerKw: 185,
                torqueNm: 420,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 7.4,
                topSpeedKmh: 180,
                electricRangeKm: 530
              },
              dimensions: {
                lengthMm: 4440,
                widthMm: 1873,
                heightMm: 1594,
                wheelbaseMm: 2702,
                bootLitres: 413,
                weightKg: 2073
              },
              options: evComfort(['Pilot Assist', 'heat pump', 'Harman Kardon audio', 'vegan interior option', 'pixel LED headlights']),
              knownFor: ['distinctive SUV-coupe silhouette unique in segment', 'first Volvo ever sold as electric-only from new', 'vegan interior available with no animal products', 'strong single-motor range for an SUV-coupe'],
              watchOut: ['sloping roof noticeably reduces rear headroom', 'smaller boot than box-body XC40 or EX40', 'DC charging capped at 150 kW', 'commands premium over equivalent EX40']
            },
            {
              id: 'volvo-c40-gen1-twin',
              name: 'C40 Twin Motor Performance',
              years: '2021–present',
              priceBand: '€44,000–€58,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 408,
                powerKw: 300,
                torqueNm: 660,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.7,
                topSpeedKmh: 180,
                electricRangeKm: 420
              },
              dimensions: {
                lengthMm: 4440,
                widthMm: 1873,
                heightMm: 1594,
                wheelbaseMm: 2702,
                bootLitres: 413,
                weightKg: 2200
              },
              options: evComfort(['Pilot Assist', 'heat pump', 'Harman Kardon premium audio', 'panoramic sunroof', 'park assist pilot', 'pixel LED headlights']),
              knownFor: ['sharp SUV-coupe styling that turns heads', 'strong AWD performance in a compact body', 'well-equipped standard specification', 'comprehensive active safety suite from standard'],
              watchOut: ['AWD range shorter than single-motor variant', '2.2 tonnes is heavy for the segment', 'rear visibility limited by sloping roofline', 'infotainment portrait screen learning curve']
            }
          ]
        }
      ]
    },
    {
      id: 'xc60',
      name: 'XC60',
      segment: 'Mid-size Premium SUV',
      description: 'The XC60 is Volvo\'s best-selling model globally, the gold standard for Scandinavian premium SUV values. The second generation on SPA raised the bar with superior interior refinement, class-leading safety technology, and a wide range of mild-hybrid diesel and petrol to plug-in hybrid powertrains.',
      tags: ['mid-size-SUV', 'premium', 'mild-hybrid', 'PHEV', 'SPA-platform', 'family', 'safety'],
      generations: [
        {
          id: 'xc60-ii',
          name: 'XC60 II (246)',
          years: '2017–present',
          platform: 'Volvo SPA',
          bodyStyles: ['SUV'],
          summary: 'The SPA-based XC60 II was a step-change over its predecessor, immediately winning multiple Car of the Year awards. A comprehensive mid-cycle refresh in 2021 introduced mild-hybrid B-designation engines replacing the old T-prefix petrols, a revised exterior, and improved infotainment.',
          heroImage: 'xc60-ii',
          variants: [
            {
              id: 'volvo-xc60-ii-b4d',
              name: 'XC60 B4 Diesel AWD',
              years: '2020–present',
              priceBand: '€28,000–€52,000 used',
              specs: {
                engine: '2.0 four-cylinder mild-hybrid diesel',
                engineCode: 'D4204T23',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 197,
                powerKw: 145,
                torqueNm: 440,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 8.3,
                topSpeedKmh: 210,
                consumptionL100: 5.8,
                co2Gkm: 153
              },
              dimensions: {
                lengthMm: 4688,
                widthMm: 1902,
                heightMm: 1658,
                wheelbaseMm: 2865,
                bootLitres: 505,
                weightKg: 1900,
                tankLitres: 71
              },
              options: safetyComfort(['Pilot Assist semi-autonomy', 'City Safety auto-braking', 'cross traffic alert', 'run-off road mitigation', 'Bowers & Wilkins audio']),
              knownFor: ['outstanding real-world diesel fuel economy', 'class-leading safety and Euro NCAP rating', 'spacious and premium SPA interior', 'strong low-down torque for relaxed motorway progress'],
              watchOut: ['diesel faces EU city access restrictions increasingly', 'AdBlue top-up adds maintenance overhead', 'portrait infotainment requires learning', 'used diesel values declining faster than petrol']
            },
            {
              id: 'volvo-xc60-ii-b5',
              name: 'XC60 B5 Petrol AWD',
              years: '2020–present',
              priceBand: '€30,000–€54,000 used',
              specs: {
                engine: '2.0 four-cylinder mild-hybrid petrol',
                engineCode: 'B4204T47',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 250,
                powerKw: 184,
                torqueNm: 350,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 6.9,
                topSpeedKmh: 230,
                consumptionL100: 7.5,
                co2Gkm: 171
              },
              dimensions: {
                lengthMm: 4688,
                widthMm: 1902,
                heightMm: 1658,
                wheelbaseMm: 2865,
                bootLitres: 505,
                weightKg: 1920,
                tankLitres: 71
              },
              options: safetyComfort(['Pilot Assist', 'City Safety', 'Bowers & Wilkins premium audio', 'four-zone climate', 'massaging front seats', 'air suspension']),
              knownFor: ['smooth and refined mild-hybrid petrol powertrain', 'premium cabin materials and build quality', 'all-weather AWD capability', 'composed long-distance motorway character'],
              watchOut: ['fuel consumption above segment average', 'touchscreen-only climate controls divisive', 'rear headroom less generous than German rivals', 'infotainment can lag under processor load']
            },
            {
              id: 'volvo-xc60-ii-t8-phev',
              name: 'XC60 Recharge T8 Plug-in Hybrid',
              years: '2017–present',
              priceBand: '€35,000–€65,000 used',
              specs: {
                engine: '2.0 four-cylinder petrol + rear e-motor',
                engineCode: 'B4204T38',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 455,
                powerKw: 335,
                torqueNm: 709,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 230,
                consumptionL100: 1.7,
                electricRangeKm: 59,
                co2Gkm: 38
              },
              dimensions: {
                lengthMm: 4688,
                widthMm: 1902,
                heightMm: 1658,
                wheelbaseMm: 2865,
                bootLitres: 468,
                weightKg: 2148,
                tankLitres: 71
              },
              options: safetyComfort(['Pilot Assist', 'Bowers & Wilkins audio', 'four-zone climate', 'air suspension', 'head-up display', 'massaging seats', 'panoramic sunroof']),
              knownFor: ['impressive 455 hp combined output in a family SUV', 'very low official CO2 for company car tax savings', 'genuine 50+ km EV range covers most daily commutes', 'rear e-motor provides true AWD torque vectoring'],
              watchOut: ['kerb weight over 2.1 tonnes affects dynamics', 'petrol consumption high when battery depleted', 'real EV range shorter in cold Nordic winters', 'complex hybrid drivetrain expensive out of warranty']
            }
          ]
        }
      ]
    },
    {
      id: 'xc90',
      name: 'XC90',
      segment: 'Large Premium SUV',
      description: 'The XC90 is Volvo\'s seven-seat flagship SUV, reborn in 2015 as the car that saved the brand. On the SPA platform, it set new standards for interior quality and safety in the large premium SUV segment, competing with the BMW X5 and Mercedes GLE with a unique Scandinavian luxury proposition.',
      tags: ['large-SUV', 'seven-seat', 'flagship', 'luxury', 'PHEV', 'SPA-platform', 'safety'],
      generations: [
        {
          id: 'xc90-ii',
          name: 'XC90 II (256)',
          years: '2015–present',
          platform: 'Volvo SPA',
          bodyStyles: ['SUV'],
          summary: 'The SPA XC90 II dramatically elevated Volvo\'s quality and technology. Its Orrefors crystal gear selector and open-pore wood interior became benchmarks. A 2019 facelift refined the face, and a 2022 update brought B5 mild-hybrid engines, a more powerful T8 Recharge PHEV, and Google-based infotainment.',
          heroImage: 'xc90-ii',
          variants: [
            {
              id: 'volvo-xc90-ii-b5',
              name: 'XC90 B5 Petrol AWD',
              years: '2021–present',
              priceBand: '€40,000–€75,000 used',
              specs: {
                engine: '2.0 four-cylinder mild-hybrid petrol',
                engineCode: 'B4204T47',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 250,
                powerKw: 184,
                torqueNm: 350,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 7.8,
                topSpeedKmh: 210,
                consumptionL100: 9.0,
                co2Gkm: 204
              },
              dimensions: {
                lengthMm: 4950,
                widthMm: 1997,
                heightMm: 1776,
                wheelbaseMm: 2984,
                bootLitres: 721,
                weightKg: 2108,
                tankLitres: 70
              },
              options: safetyComfort(['Pilot Assist semi-autonomy', 'City Safety', 'Bowers & Wilkins premium audio', 'four-zone climate', 'massaging front seats', 'panoramic sunroof', '360-degree camera']),
              knownFor: ['proper three-row seven-seat SUV flexibility', 'stunning Scandinavian interior and material quality', 'comprehensive driver assistance technology', 'effortlessly smooth motorway cruiser'],
              watchOut: ['4-cylinder engine feels underpowered in a heavy 7-seater', 'real-world fuel economy disappointing at motorway speed', 'third row best suited to children', 'large dimensions challenging in tight European city parking']
            },
            {
              id: 'volvo-xc90-ii-t8-phev',
              name: 'XC90 Recharge T8 Plug-in Hybrid',
              years: '2017–present',
              priceBand: '€45,000–€85,000 used',
              specs: {
                engine: '2.0 four-cylinder petrol + rear e-motor',
                engineCode: 'B4204T31 hybrid',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 455,
                powerKw: 335,
                torqueNm: 709,
                fuel: 'Plug-in Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 5.8,
                topSpeedKmh: 230,
                consumptionL100: 2.0,
                electricRangeKm: 54,
                co2Gkm: 46
              },
              dimensions: {
                lengthMm: 4950,
                widthMm: 1997,
                heightMm: 1776,
                wheelbaseMm: 2984,
                bootLitres: 640,
                weightKg: 2348,
                tankLitres: 70
              },
              options: safetyComfort(['Pilot Assist', 'Bowers & Wilkins audio', 'four-zone climate', 'air suspension', 'head-up display', '360-degree camera', 'massaging front seats']),
              knownFor: ['powerful combined output in a luxury seven-seater', 'very low CO2 rating benefits company car tax', 'genuine 50+ km EV range for daily use', 'serene long-distance grand tourer character'],
              watchOut: ['very heavy at over 2.3 tonnes affects dynamics', 'third-row access reduced by battery floor packaging', 'complex hybrid drivetrain costly to repair out of warranty', 'real EV range shorter in cold climates']
            }
          ]
        }
      ]
    },
    {
      id: 'v60',
      name: 'V60',
      segment: 'Compact Premium Estate',
      description: 'The V60 is Volvo\'s compact premium estate, delivering Swedish practicality and understated elegance on the SPA platform. Available with a range of mild-hybrid petrols, a mild-hybrid diesel, and the powerful T8 Recharge plug-in hybrid, plus a Cross Country variant with raised ride height for light off-road use.',
      tags: ['estate', 'wagon', 'compact', 'premium', 'mild-hybrid', 'SPA-platform', 'practical', 'touring'],
      generations: [
        {
          id: 'v60-ii',
          name: 'V60 II (225)',
          years: '2018–present',
          platform: 'Volvo SPA',
          bodyStyles: ['Wagon'],
          summary: 'The SPA-based V60 II is a significant quality step over its predecessor, with a dramatically more refined interior, superior ride quality, and the broadest electrified powertrain range in the compact estate segment. The Cross Country variant with raised suspension joined in 2019.',
          heroImage: 'v60-ii',
          variants: [
            {
              id: 'volvo-v60-ii-b4',
              name: 'V60 B4 Petrol FWD',
              years: '2020–present',
              priceBand: '€22,000–€40,000 used',
              specs: {
                engine: '2.0 four-cylinder mild-hybrid petrol',
                engineCode: 'B4204T35',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 197,
                powerKw: 145,
                torqueNm: 300,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 7.9,
                topSpeedKmh: 210,
                consumptionL100: 7.0,
                co2Gkm: 159
              },
              dimensions: {
                lengthMm: 4761,
                widthMm: 1850,
                heightMm: 1432,
                wheelbaseMm: 2872,
                bootLitres: 529,
                weightKg: 1615,
                tankLitres: 60
              },
              options: safetyComfort(['Pilot Assist', 'City Safety', 'run-off road mitigation', 'park assist', 'Harman Kardon audio']),
              knownFor: ['excellent estate practicality with proper boot space', 'elegant minimalist SPA interior quality', 'smooth and refined mild-hybrid petrol', 'strong standard safety technology'],
              watchOut: ['high boot lip entry compared to some rivals', 'portrait infotainment slower than newer systems', 'not as sporty to drive as BMW 3 Series Touring', 'FWD lacks the traction confidence of AWD trims']
            },
            {
              id: 'volvo-v60-ii-xc-b5',
              name: 'V60 Cross Country B5 AWD',
              years: '2019–present',
              priceBand: '€28,000–€48,000 used',
              specs: {
                engine: '2.0 four-cylinder mild-hybrid petrol',
                engineCode: 'B4204T47',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 250,
                powerKw: 184,
                torqueNm: 350,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 7.1,
                topSpeedKmh: 220,
                consumptionL100: 8.1,
                co2Gkm: 183
              },
              dimensions: {
                lengthMm: 4761,
                widthMm: 1855,
                heightMm: 1484,
                wheelbaseMm: 2872,
                bootLitres: 529,
                weightKg: 1780,
                tankLitres: 60
              },
              options: safetyComfort(['Pilot Assist', 'Off-Road driving mode', 'City Safety', 'Bowers & Wilkins audio', 'park assist pilot', 'metallic paint']),
              knownFor: ['raised ride height handles rough terrain and deep snow', 'AWD confidence in all weather conditions', 'rugged styling without a full SUV footprint', 'practical estate boot space with go-anywhere ability'],
              watchOut: ['higher centre of gravity vs standard V60', 'no true off-road capability despite rugged styling', 'heavier than standard V60 increases fuel consumption', 'premium price for what remains an estate car']
            }
          ]
        }
      ]
    },
    {
      id: 'v90',
      name: 'V90',
      segment: 'Large Premium Estate',
      description: 'The V90 is Volvo\'s flagship estate, one of the last great large luxury wagons available in Europe. On the SPA platform, it delivers class-leading interior space, effortless long-distance refinement, and Volvo\'s most advanced technology. Available in standard and rugged Cross Country guises.',
      tags: ['estate', 'wagon', 'large', 'flagship', 'premium', 'SPA-platform', 'touring', 'luxury'],
      generations: [
        {
          id: 'v90-ii',
          name: 'V90 II (235)',
          years: '2016–present',
          platform: 'Volvo SPA',
          bodyStyles: ['Wagon'],
          summary: 'The second-generation V90 is the spiritual successor to the V70 and V80, sitting at the pinnacle of Volvo\'s estate tradition. Its long proportions and low roofline give it genuine road presence, while the SPA interior approaches the quality of more expensive German rivals. A 2020 facelift brought B-designation mild-hybrid engines.',
          heroImage: 'v90-ii',
          variants: [
            {
              id: 'volvo-v90-ii-b5',
              name: 'V90 B5 Petrol AWD',
              years: '2020–present',
              priceBand: '€35,000–€65,000 used',
              specs: {
                engine: '2.0 four-cylinder mild-hybrid petrol',
                engineCode: 'B4204T47',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 250,
                powerKw: 184,
                torqueNm: 350,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 6.7,
                topSpeedKmh: 230,
                consumptionL100: 8.5,
                co2Gkm: 192
              },
              dimensions: {
                lengthMm: 4936,
                widthMm: 1879,
                heightMm: 1475,
                wheelbaseMm: 2941,
                bootLitres: 560,
                weightKg: 1895,
                tankLitres: 70
              },
              options: safetyComfort(['Pilot Assist semi-autonomy', 'Bowers & Wilkins premium audio', 'four-zone climate', 'air suspension', 'head-up display', '360-degree camera', 'massaging front seats']),
              knownFor: ['effortlessly refined long-distance motorway character', 'outstanding 560-litre boot with flat load floor', 'premium interior quality rivalling German flagships', 'comprehensive driver assistance from standard'],
              watchOut: ['4-cylinder engine lacks presence in a large flagship estate', 'real-world fuel economy poor at high motorway speeds', 'high asking price for perceived exclusivity', 'optional air suspension costly if it fails outside warranty']
            }
          ]
        }
      ]
    },
    {
      id: 's60',
      name: 'S60',
      segment: 'Compact Premium Sedan',
      description: 'The S60 is Volvo\'s compact premium sedan, sharing SPA platform and powertrains with the V60 estate but offering a lower, sportier roofline. It is the only Volvo model never offered with a diesel engine from launch, underlining the brand\'s strategic focus on electrification over compression ignition.',
      tags: ['sedan', 'compact', 'premium', 'no-diesel', 'SPA-platform', 'mild-hybrid', 'sporty'],
      generations: [
        {
          id: 's60-iii',
          name: 'S60 III (224)',
          years: '2018–present',
          platform: 'Volvo SPA',
          bodyStyles: ['Sedan'],
          summary: 'The third-generation S60 was the first Volvo sedan built without a diesel option at launch, reflecting the brand\'s electrification strategy. Built at Volvo\'s Charleston, South Carolina plant, it features the latest Drive-E powertrains and a strong Polestar Engineered performance variant.',
          heroImage: 's60-iii',
          variants: [
            {
              id: 'volvo-s60-iii-b5',
              name: 'S60 B5 Petrol AWD',
              years: '2020–present',
              priceBand: '€28,000–€48,000 used',
              specs: {
                engine: '2.0 four-cylinder mild-hybrid petrol',
                engineCode: 'B4204T47',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 250,
                powerKw: 184,
                torqueNm: 350,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 6.6,
                topSpeedKmh: 250,
                consumptionL100: 7.7,
                co2Gkm: 175
              },
              dimensions: {
                lengthMm: 4761,
                widthMm: 1850,
                heightMm: 1431,
                wheelbaseMm: 2872,
                bootLitres: 442,
                weightKg: 1818,
                tankLitres: 60
              },
              options: safetyComfort(['Pilot Assist', 'City Safety', 'Harman Kardon audio', 'park assist', 'panoramic sunroof', 'head-up display']),
              knownFor: ['refined and understated Scandinavian sedan design', 'comprehensive safety technology as standard', 'smooth mild-hybrid petrol powertrain', 'strong residual values for the class'],
              watchOut: ['smaller boot than comparable German sedans', 'not as dynamically engaging as BMW 3 Series', 'no diesel option limits long-distance economy', 'portrait infotainment has a learning curve']
            }
          ]
        }
      ]
    },
    {
      id: 's90',
      name: 'S90',
      segment: 'Large Premium Sedan',
      description: 'The S90 is Volvo\'s flagship sedan, combining Scandinavian luxury with advanced Pilot Assist semi-autonomous driving. Sharing the SPA platform with the XC90 and V90, it competes with the BMW 7 Series and Mercedes E-Class while offering a distinctly calm, minimalist design philosophy.',
      tags: ['sedan', 'large', 'flagship', 'luxury', 'SPA-platform', 'Pilot-Assist', 'Bowers-Wilkins'],
      generations: [
        {
          id: 's90-ii',
          name: 'S90 II (234)',
          years: '2016–present',
          platform: 'Volvo SPA',
          bodyStyles: ['Sedan'],
          summary: 'The second-generation S90 replaced the ageing S80 to immediate critical acclaim for its interior design, quality, and advanced safety technology. Pilot Assist semi-autonomous highway driving was among the most capable at launch. A 2020 facelift brought B-designation mild-hybrid engines and revised exterior details.',
          heroImage: 's90-ii',
          variants: [
            {
              id: 'volvo-s90-ii-b5',
              name: 'S90 B5 Petrol AWD',
              years: '2020–present',
              priceBand: '€38,000–€70,000 used',
              specs: {
                engine: '2.0 four-cylinder mild-hybrid petrol',
                engineCode: 'B4204T47',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 250,
                powerKw: 184,
                torqueNm: 350,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 6.4,
                topSpeedKmh: 230,
                consumptionL100: 8.3,
                co2Gkm: 189
              },
              dimensions: {
                lengthMm: 4963,
                widthMm: 1879,
                heightMm: 1443,
                wheelbaseMm: 2941,
                bootLitres: 500,
                weightKg: 1914,
                tankLitres: 70
              },
              options: safetyComfort(['Pilot Assist semi-autonomy', 'Bowers & Wilkins premium audio', 'four-zone climate', 'air suspension', 'head-up display', '360-degree camera', 'massaging front seats']),
              knownFor: ['exceptional Scandinavian luxury interior design', 'Pilot Assist semi-autonomous highway capability', 'whisper-quiet and refined at motorway speeds', 'distinctive alternative to German luxury sedans'],
              watchOut: ['4-cylinder engine lacks the character expected in a flagship', 'long wheelbase difficult to park in tight European cities', 'many expected luxury features are expensive options', 'smaller boot than Mercedes E-Class rival']
            }
          ]
        }
      ]
    },
    {
      id: 'ex30',
      name: 'EX30',
      segment: 'Subcompact Electric SUV',
      description: 'The EX30 is Volvo\'s smallest and most affordable electric vehicle, built on Geely\'s SEA platform. Despite compact dimensions, it packs premium Volvo interior design, a comprehensive safety suite as standard, and impressive performance in either single or dual-motor configurations, targeting urban buyers entering the premium EV segment.',
      tags: ['electric', 'subcompact-SUV', 'urban', 'entry-premium', 'SEA-platform', 'Geely', 'compact'],
      generations: [
        {
          id: 'ex30-gen1',
          name: 'EX30 Gen 1',
          years: '2023–present',
          platform: 'Geely SEA',
          bodyStyles: ['SUV'],
          summary: 'The EX30 uses Geely\'s Sustainable Experience Architecture, shared with Zeekr and Smart #1. Volvo has developed the car extensively for European tastes, with full Euro NCAP safety compliance and a distinctive interior centred on a single horizontal display. It earned a 5-star Euro NCAP rating in 2023.',
          heroImage: 'ex30-gen1',
          variants: [
            {
              id: 'volvo-ex30-gen1-single',
              name: 'EX30 Single Motor Extended Range',
              years: '2023–present',
              priceBand: '€32,000–€40,000 new',
              specs: {
                engine: 'single rear permanent-magnet synchronous motor',
                powerHp: 272,
                powerKw: 200,
                torqueNm: 343,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 5.7,
                topSpeedKmh: 180,
                electricRangeKm: 476
              },
              dimensions: {
                lengthMm: 4233,
                widthMm: 1837,
                heightMm: 1550,
                wheelbaseMm: 2650,
                bootLitres: 318,
                weightKg: 1800
              },
              options: evComfort(['Harman Kardon audio', 'heat pump', 'panoramic roof', 'park assist sensors']),
              knownFor: ['best WLTP range in the subcompact EV segment', 'premium interior quality despite small footprint', 'impressive 5.7-second 0-100 from a single motor', 'five-star 2023 Euro NCAP safety result'],
              watchOut: ['very compact 318-litre boot limits luggage', 'rear passenger headroom tight for tall adults', 'DC fast charging speed capped at 153 kW', 'no physical climate control buttons whatsoever']
            },
            {
              id: 'volvo-ex30-gen1-twin',
              name: 'EX30 Twin Motor Performance',
              years: '2023–present',
              priceBand: '€38,000–€46,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 428,
                powerKw: 315,
                torqueNm: 543,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 3.6,
                topSpeedKmh: 180,
                electricRangeKm: 394
              },
              dimensions: {
                lengthMm: 4233,
                widthMm: 1837,
                heightMm: 1550,
                wheelbaseMm: 2650,
                bootLitres: 318,
                weightKg: 1870
              },
              options: evComfort(['Harman Kardon audio', 'heat pump', 'panoramic roof', 'park assist pilot', 'performance Brembo brakes']),
              knownFor: ['astonishing 3.6-second 0-100 km/h in a subcompact SUV', 'all-weather AWD traction confidence', 'hot-hatch performance in an urban-friendly package', 'unique door-cavity speaker integration for audio'],
              watchOut: ['AWD reduces range vs single-motor variant', 'ride firm on 20-inch tyres', 'no physical climate buttons a dealbreaker for some', 'early production quality concerns on panel gaps']
            }
          ]
        }
      ]
    },
    {
      id: 'ex90',
      name: 'EX90',
      segment: 'Large Electric SUV',
      description: 'The EX90 is Volvo\'s flagship fully electric seven-seat SUV and the most technologically advanced car the company has ever built. It features a LiDAR sensor on the roof, a comprehensive camera and radar array, a 111 kWh battery with bidirectional charging capability, and twin-motor all-wheel drive.',
      tags: ['electric', 'large-SUV', 'seven-seat', 'flagship', 'LiDAR', 'V2G', 'autonomous-ready', 'luxury'],
      generations: [
        {
          id: 'ex90-gen1',
          name: 'EX90 Gen 1',
          years: '2024–present',
          platform: 'Volvo SPA2',
          bodyStyles: ['SUV'],
          summary: 'The EX90 launches Volvo into the large electric luxury SUV market with an industry-leading sensor suite. Its 111 kWh battery, twin-motor AWD, Android Automotive infotainment, and vehicle-to-grid bidirectional charging set new benchmarks. LiDAR is standard to support future autonomous capability via OTA updates.',
          heroImage: 'ex90-gen1',
          variants: [
            {
              id: 'volvo-ex90-gen1-twin',
              name: 'EX90 Twin Motor',
              years: '2024–present',
              priceBand: '€88,000–€105,000 new',
              specs: {
                engine: 'dual permanent-magnet synchronous motors',
                powerHp: 408,
                powerKw: 300,
                torqueNm: 770,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 5.9,
                topSpeedKmh: 210,
                electricRangeKm: 580
              },
              dimensions: {
                lengthMm: 5037,
                widthMm: 1964,
                heightMm: 1744,
                wheelbaseMm: 2985,
                bootLitres: 310,
                weightKg: 2744
              },
              options: evComfort(['LiDAR active safety sensor', 'Bowers & Wilkins Dolby Atmos audio', 'four-zone climate', '360-degree camera', 'vehicle-to-grid bidirectional charging', 'massaging front seats']),
              knownFor: ['industry-first LiDAR roof sensor for active safety', 'vehicle-to-grid bidirectional charging capability', '580 km WLTP range for a 7-seat SUV', 'premium seven-seat interior with true third row'],
              watchOut: ['extremely heavy at 2.7 tonnes affects dynamics', 'very high purchase price for the segment', 'large dimensions challenging to park in European cities', 'complex early software required multiple OTA fixes']
            },
            {
              id: 'volvo-ex90-gen1-twin-perf',
              name: 'EX90 Twin Motor Performance',
              years: '2024–present',
              priceBand: '€98,000–€115,000 new',
              specs: {
                engine: 'dual performance permanent-magnet synchronous motors',
                powerHp: 517,
                powerKw: 380,
                torqueNm: 910,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 210,
                electricRangeKm: 550
              },
              dimensions: {
                lengthMm: 5037,
                widthMm: 1964,
                heightMm: 1744,
                wheelbaseMm: 2985,
                bootLitres: 310,
                weightKg: 2748
              },
              options: evComfort(['LiDAR active safety', 'Bowers & Wilkins Dolby Atmos audio', 'four-zone climate', 'panoramic glass roof', 'vehicle-to-load capability', 'platinum exterior package']),
              knownFor: ['910 Nm torque for effortless performance', 'most technologically advanced Volvo ever produced', 'benchmarking active safety technology for 2024', 'smooth and serene despite the power output'],
              watchOut: ['marginal range reduction versus standard twin variant', 'over 2.7 tonnes makes dynamics feel ponderous', 'many expected luxury features are expensive options', 'early software maturity required patches post-launch']
            }
          ]
        }
      ]
    }
  ]
};
