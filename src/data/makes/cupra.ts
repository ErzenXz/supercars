import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const cupra: CarMake = {
  id: 'cupra',
  name: 'Cupra',
  country: 'Spain',
  logoText: '▲',
  models: [
    {
      id: 'cupra-leon',
      name: 'Leon',
      segment: 'Compact / C-segment performance',
      description: 'The Cupra Leon represents the performance variant of the SEAT Leon Mk4, spun off into the Cupra brand following the decision to elevate Cupra to a standalone marque in 2018. The VZ specification targets the Golf GTI and Honda Civic Type R market with up to 300 hp.',
      tags: ['hot-hatch', 'performance', 'sporty', 'turbo', 'practical'],
      generations: [
        {
          id: 'cupra-leon-mk4',
          name: 'Cupra Leon Mk4 (KL)',
          years: '2020–present',
          platform: 'VW Group MQB Evo',
          bodyStyles: ['Hatchback', 'Wagon'],
          summary: 'The Cupra Leon on the MQB Evo platform is offered as a hatchback and Sportstourer estate. The 2.0 TSI engine in 300 hp VZ specification uses the DQ381 DSG and optional 4Drive AWD, positioning it against the Golf R in performance but with sportier aesthetics and a lower price.',
          heroImage: 'cupra-leon-mk4',
          variants: [
            {
              id: 'cupra-leon-mk4-vz-20-tsi-300',
              name: '2.0 TSI VZ 300 DSG',
              years: '2021–present',
              priceBand: '€26,000–€42,000 used',
              specs: {
                engine: '2.0 TSI',
                engineCode: 'DKZ family',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 300,
                powerKw: 221,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 5.7,
                topSpeedKmh: 250,
                consumptionL100: 8.1,
                co2Gkm: 183
              },
              dimensions: {
                lengthMm: 4368,
                widthMm: 1799,
                heightMm: 1462,
                wheelbaseMm: 2686,
                bootLitres: 385,
                weightKg: 1529,
                tankLitres: 50
              },
              options: safetyComfort(['Cupra bucket seats', 'Akrapovic exhaust upgrade', 'Brembo front brakes', 'DCC adaptive suspension']),
              knownFor: ['exceptional front-wheel-drive performance', 'Akrapovic exhaust option', 'practical hot-hatch format', 'strong DSG launch control'],
              watchOut: ['torque steer under hard acceleration', 'DSG DQ381 service cost', 'front tyres wear quickly in sport mode', 'check for track-day use history']
            },
            {
              id: 'cupra-leon-mk4-ehybrid-204',
              name: 'Leon eHybrid 204 DSG',
              years: '2020–present',
              priceBand: '€23,000–€36,000 used',
              specs: {
                engine: '1.4 TSI + 80 kW electric',
                engineCode: 'DGEA family',
                displacementCc: 1395,
                cylinders: 'Inline-4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 350,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 7.5,
                topSpeedKmh: 225,
                consumptionL100: 1.6,
                electricRangeKm: 60,
                co2Gkm: 36
              },
              dimensions: {
                lengthMm: 4368,
                widthMm: 1799,
                heightMm: 1462,
                wheelbaseMm: 2686,
                bootLitres: 270,
                weightKg: 1609,
                tankLitres: 40
              },
              options: safetyComfort(['Cupra sport seats', 'copper trim accents', 'e-Boost mode', 'charge port']),
              knownFor: ['low BIK company car tax band', '60 km electric commuting range', 'Cupra badge at PHEV pricing', 'strong combined acceleration'],
              watchOut: ['boot reduced to 270 L', 'battery needs regular charging for efficiency', 'PHEV servicing more complex', 'heavier than ICE Leon']
            }
          ]
        }
      ]
    },
    {
      id: 'formentor',
      name: 'Formentor',
      segment: 'Compact SUV Coupé / C-SUV',
      description: 'The Formentor was Cupra\'s first model designed independently from the start, rather than being a rebadged SEAT. It combines coupé SUV styling with performance-oriented engines up to 310 hp, and was positioned as the brand\'s halo product at launch.',
      tags: ['performance', 'SUV-coupe', 'sporty', 'turbo', 'all-wheel-drive'],
      generations: [
        {
          id: 'formentor-mk1',
          name: 'Formentor Mk1',
          years: '2020–present',
          platform: 'VW Group MQB Evo',
          bodyStyles: ['SUV'],
          summary: 'Launched as Cupra\'s debut standalone model, the Formentor offers a range of TSI petrol engines from 150 hp to 310 hp, with the flagship VZ5 sharing its 2.5 TSI five-cylinder with the Audi RS3. The 2.0 TSI 310 4Drive is the performance sweet spot for most buyers.',
          heroImage: 'formentor-mk1',
          variants: [
            {
              id: 'cupra-formentor-mk1-15-tsi-150',
              name: '1.5 TSI 150 DSG',
              years: '2020–present',
              priceBand: '€20,000–€33,000 used',
              specs: {
                engine: '1.5 TSI evo2',
                engineCode: 'DPCA family',
                displacementCc: 1498,
                cylinders: 'Inline-4',
                powerHp: 150,
                powerKw: 110,
                torqueNm: 250,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'FWD',
                acceleration0100: 8.3,
                topSpeedKmh: 218,
                consumptionL100: 6.1,
                co2Gkm: 138
              },
              dimensions: {
                lengthMm: 4450,
                widthMm: 1873,
                heightMm: 1511,
                wheelbaseMm: 2686,
                bootLitres: 420,
                weightKg: 1435,
                tankLitres: 55
              },
              options: safetyComfort(['Cupra drive profile', 'full LED matrix headlights', 'wireless CarPlay']),
              knownFor: ['entry-level Cupra pricing', 'distinctive copper badge styling', 'comfortable everyday SUV', 'sharp infotainment system'],
              watchOut: ['performance gap versus VZ variants', 'cylinder deactivation shudder', 'smaller wheel options less imposing', 'check DSG fluid service']
            },
            {
              id: 'cupra-formentor-mk1-vz-20-tsi-310-4drive',
              name: '2.0 TSI VZ 310 4Drive DSG',
              years: '2021–present',
              priceBand: '€28,000–€48,000 used',
              specs: {
                engine: '2.0 TSI',
                engineCode: 'DKZ family',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 310,
                powerKw: 228,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 250,
                consumptionL100: 8.6,
                co2Gkm: 196
              },
              dimensions: {
                lengthMm: 4450,
                widthMm: 1873,
                heightMm: 1511,
                wheelbaseMm: 2686,
                bootLitres: 420,
                weightKg: 1670,
                tankLitres: 55
              },
              options: safetyComfort(['Akrapovic exhaust', 'Brembo brakes', 'DCC adaptive suspension', 'augmented-reality HUD']),
              knownFor: ['supercar-rivalling acceleration for the class', 'Akrapovic exhaust note', 'distinctive Cupra copper styling', 'practical SUV-coupé packaging'],
              watchOut: ['high CO2 and road tax band', 'DSG DQ381 service cost', 'Haldex AWD service interval', 'fuel costs at performance pace']
            },
            {
              id: 'cupra-formentor-mk1-ehybrid-204',
              name: 'Formentor eHybrid 204 DSG',
              years: '2021–present',
              priceBand: '€24,000–€38,000 used',
              specs: {
                engine: '1.4 TSI + 80 kW electric',
                engineCode: 'DGEA family',
                displacementCc: 1395,
                cylinders: 'Inline-4',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 350,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 7.9,
                topSpeedKmh: 220,
                consumptionL100: 1.9,
                electricRangeKm: 55,
                co2Gkm: 43
              },
              dimensions: {
                lengthMm: 4450,
                widthMm: 1873,
                heightMm: 1511,
                wheelbaseMm: 2686,
                bootLitres: 345,
                weightKg: 1715,
                tankLitres: 40
              },
              options: safetyComfort(['Cupra copper accents', 'e-Boost mode', 'charge port', 'DCC adaptive suspension']),
              knownFor: ['low company car BIK rating', 'SUV body with EV commuting range', 'striking Cupra styling', 'composed PHEV ride quality'],
              watchOut: ['reduced boot due to battery pack', 'requires frequent charging for WLTP economy', 'heavier than TSI versions', 'complex PHEV maintenance schedule']
            }
          ]
        }
      ]
    },
    {
      id: 'cupra-ateca',
      name: 'Ateca',
      segment: 'Compact SUV / C-SUV performance',
      description: 'The Cupra Ateca is a high-performance variant of the SEAT Ateca, released under the Cupra brand before the marque had its own dedicated model lineup. It uses the same 300 hp 2.0 TSI engine found in the Golf R and the Cupra Leon, with standard 4Drive AWD.',
      tags: ['performance', 'SUV', 'AWD', 'turbo', 'sporty'],
      generations: [
        {
          id: 'cupra-ateca-mk1',
          name: 'Cupra Ateca Mk1',
          years: '2018–present',
          platform: 'VW Group MQB A5',
          bodyStyles: ['SUV'],
          summary: 'The Cupra Ateca debuted as the performance SUV flagship before the Formentor arrived. With 300 hp, Brembo brakes, DCC adaptive suspension, and 4Drive AWD as standard, it was the quickest production SEAT ever made at launch, hitting 0–100 km/h in 4.9 seconds.',
          heroImage: 'cupra-ateca-mk1',
          variants: [
            {
              id: 'cupra-ateca-mk1-20-tsi-300-4drive',
              name: '2.0 TSI 300 4Drive DSG',
              years: '2018–present',
              priceBand: '€23,000–€40,000 used',
              specs: {
                engine: '2.0 TSI',
                engineCode: 'DKZ family',
                displacementCc: 1984,
                cylinders: 'Inline-4',
                powerHp: 300,
                powerKw: 221,
                torqueNm: 400,
                fuel: 'Petrol',
                gearbox: 'DCT',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 4.9,
                topSpeedKmh: 247,
                consumptionL100: 8.7,
                co2Gkm: 199
              },
              dimensions: {
                lengthMm: 4363,
                widthMm: 1841,
                heightMm: 1596,
                wheelbaseMm: 2630,
                bootLitres: 485,
                weightKg: 1630,
                tankLitres: 55
              },
              options: safetyComfort(['Brembo brakes standard', 'DCC adaptive suspension', 'Akrapovic exhaust option', 'bucket seat option']),
              knownFor: ['4.9 s 0–100 performance SUV', 'Brembo brakes standard fitment', 'AWD all-weather traction', 'distinctive copper interior accents'],
              watchOut: ['high road tax CO2 band', 'Haldex AWD service every 60k km', 'fuel economy poor in sport mode', 'DSG DQ381 service bills']
            }
          ]
        }
      ]
    },
    {
      id: 'born',
      name: 'Born',
      segment: 'Compact EV / C-segment electric',
      description: 'The Cupra Born is Cupra\'s first fully electric model, sharing its MEB platform with the VW ID.3. It differentiates itself with sportier styling, a lower stance, and Cupra-tuned chassis settings. Available with multiple battery sizes, the e-Boost versions offer up to 231 hp.',
      tags: ['electric', 'EV', 'performance', 'sporty', 'MEB'],
      generations: [
        {
          id: 'born-mk1',
          name: 'Born Mk1',
          years: '2021–present',
          platform: 'VW Group MEB',
          bodyStyles: ['Hatchback'],
          summary: 'Based on the VW MEB platform, the Born shares its underpinnings with the ID.3 but with sportier suspension tuning, copper accent styling, and Cupra-specific driving modes. The e-Boost button temporarily unlocks maximum power for overtaking or performance driving.',
          heroImage: 'born-mk1',
          variants: [
            {
              id: 'cupra-born-mk1-58kwh-204',
              name: '58 kWh e-Boost 204',
              years: '2021–present',
              priceBand: '€22,000–€35,000 used',
              specs: {
                engine: 'Single rear electric motor 150 kW',
                powerHp: 204,
                powerKw: 150,
                torqueNm: 310,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 6.6,
                topSpeedKmh: 160,
                electricRangeKm: 424
              },
              dimensions: {
                lengthMm: 4322,
                widthMm: 1809,
                heightMm: 1439,
                wheelbaseMm: 2765,
                bootLitres: 385,
                weightKg: 1825
              },
              options: evComfort(['augmented-reality head-up display', 'Cupra copper interior accents', 'travel assist']),
              knownFor: ['sporty EV alternative to ID.3', 'e-Boost performance mode', 'rear-wheel-drive handling balance', 'distinctive Cupra styling'],
              watchOut: ['slower AC charging speed vs competitors', 'no heat pump standard on all trims', 'OTA updates required for best performance', '130 kW DC charging cap lower than some rivals']
            }
          ]
        }
      ]
    },
    {
      id: 'tavascan',
      name: 'Tavascan',
      segment: 'Compact-Medium EV SUV Coupé',
      description: 'The Cupra Tavascan is an all-electric SUV coupé based on the MEB platform, sharing underpinnings with the VW ID.5. It is Cupra\'s performance EV flagship SUV with a dual-motor AWD variant delivering 340 hp.',
      tags: ['electric', 'EV', 'SUV', 'performance', 'AWD'],
      generations: [
        {
          id: 'tavascan-mk1',
          name: 'Tavascan Mk1',
          years: '2024–present',
          platform: 'VW Group MEB',
          bodyStyles: ['SUV'],
          summary: 'Launched in 2024, the Tavascan is Cupra\'s largest and most powerful EV. The dual-motor VZ version uses a 77 kWh battery with front and rear motors delivering 340 hp and 0–100 km/h in 5.5 seconds. The single-motor version offers 286 hp and up to 517 km WLTP range.',
          heroImage: 'tavascan-mk1',
          variants: [
            {
              id: 'cupra-tavascan-mk1-vz-77kwh-awd',
              name: 'Tavascan VZ 77 kWh AWD',
              years: '2024–present',
              priceBand: '€44,000–€54,000 used',
              specs: {
                engine: 'Dual electric motor AWD 250 kW',
                powerHp: 340,
                powerKw: 250,
                torqueNm: 545,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'AWD',
                acceleration0100: 5.5,
                topSpeedKmh: 180,
                electricRangeKm: 476
              },
              dimensions: {
                lengthMm: 4644,
                widthMm: 1861,
                heightMm: 1597,
                wheelbaseMm: 2766,
                bootLitres: 405,
                weightKg: 2240
              },
              options: evComfort(['augmented-reality HUD', 'Brembo brake upgrade', 'Harman Kardon sound', 'panoramic glass roof']),
              knownFor: ['340 hp dual-motor AWD performance', 'striking SUV-coupé silhouette', 'large 77 kWh battery', 'copper trim Cupra identity'],
              watchOut: ['heavy at 2,240 kg', 'charging speed capped at 135 kW DC', 'higher price than competitors', 'boot smaller than traditional SUVs']
            },
            {
              id: 'cupra-tavascan-mk1-77kwh-rwd',
              name: 'Tavascan 77 kWh RWD',
              years: '2024–present',
              priceBand: '€38,000–€47,000 used',
              specs: {
                engine: 'Single rear electric motor 210 kW',
                powerHp: 286,
                powerKw: 210,
                torqueNm: 545,
                fuel: 'Electric',
                gearbox: 'Automatic',
                drive: 'RWD',
                acceleration0100: 6.5,
                topSpeedKmh: 180,
                electricRangeKm: 517
              },
              dimensions: {
                lengthMm: 4644,
                widthMm: 1861,
                heightMm: 1597,
                wheelbaseMm: 2766,
                bootLitres: 405,
                weightKg: 2090
              },
              options: evComfort(['heat pump standard', 'panoramic roof', 'Cupra Connect', 'wireless charging']),
              knownFor: ['517 km WLTP range', 'efficient single motor setup', 'Cupra styling at lower entry price', 'RWD handling character'],
              watchOut: ['no AWD for adverse weather', 'still heavy at 2,090 kg', 'higher price vs ID.5', 'limited dealer network vs VW']
            }
          ]
        }
      ]
    },
    {
      id: 'terramar',
      name: 'Terramar',
      segment: 'Compact SUV / C-SUV',
      description: 'The Cupra Terramar is a compact hybrid SUV launched in 2024, positioned as the more accessible Cupra SUV below the Formentor. It uses the MQB Evo platform and is offered exclusively with mild-hybrid and plug-in hybrid powertrains from launch.',
      tags: ['SUV', 'hybrid', 'compact', 'sporty', 'PHEV'],
      generations: [
        {
          id: 'terramar-mk1',
          name: 'Terramar Mk1',
          years: '2024–present',
          platform: 'VW Group MQB Evo',
          bodyStyles: ['SUV'],
          summary: 'The Terramar fills the gap between the born EV and the Formentor in the Cupra SUV lineup. Sharing architecture with the Audi Q3 and Škoda Karoq on MQB Evo, it offers a 1.5 eTSI mild-hybrid and a 272 hp plug-in hybrid with 90 km electric range.',
          heroImage: 'terramar-mk1',
          variants: [
            {
              id: 'cupra-terramar-mk1-ehybrid-272',
              name: 'Terramar eHybrid 272 VZ DSG',
              years: '2024–present',
              priceBand: '€35,000–€48,000 used',
              specs: {
                engine: '1.5 TSI + 85 kW electric',
                engineCode: 'DPCA family',
                displacementCc: 1498,
                cylinders: 'Inline-4',
                powerHp: 272,
                powerKw: 200,
                torqueNm: 400,
                fuel: 'Plug-in Hybrid',
                gearbox: 'DCT',
                gears: 6,
                drive: 'FWD',
                acceleration0100: 6.8,
                topSpeedKmh: 210,
                consumptionL100: 1.7,
                electricRangeKm: 90,
                co2Gkm: 38
              },
              dimensions: {
                lengthMm: 4519,
                widthMm: 1858,
                heightMm: 1594,
                wheelbaseMm: 2681,
                bootLitres: 380,
                weightKg: 1780,
                tankLitres: 40
              },
              options: safetyComfort(['Cupra copper trim', 'DCC adaptive suspension', 'e-Boost mode', 'panoramic glass roof']),
              knownFor: ['90 km electric range best in segment', 'Cupra VZ performance PHEV', 'low company car tax', 'upscale Cupra interior'],
              watchOut: ['reduced boot space vs standard SUV', 'charging essential for claimed economy', 'PHEV complex servicing', 'higher price than Formentor base']
            }
          ]
        }
      ]
    }
  ]
};
