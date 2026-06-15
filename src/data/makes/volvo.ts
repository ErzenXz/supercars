import type { CarMake } from '../../types';
import { safetyComfort, evComfort } from '../_shared';

export const volvo: CarMake = {
  id: 'volvo',
  name: 'Volvo',
  country: 'Sweden',
  logoText: '⊘',
  models: [
    {
      id: 'xc60',
      name: 'XC60',
      segment: 'Mid-size Premium SUV',
      description: 'The XC60 is Volvo\'s best-selling model globally, occupying the premium mid-size SUV space with a focus on safety technology, Scandinavian design, and a comprehensive range of mild-hybrid, plug-in hybrid, and petrol powertrains.',
      tags: ['premium', 'safety', 'SUV', 'mild-hybrid', 'plug-in-hybrid', 'family'],
      generations: [
        {
          id: 'xc60-ii',
          name: 'XC60 II (SPA)',
          years: '2017–present',
          platform: 'Volvo SPA',
          bodyStyles: ['SUV'],
          summary: 'The second-generation XC60 on Volvo\'s Scalable Product Architecture platform brought a class-leading safety suite, refined interior, and a broad powertrain range spanning mild-hybrid diesels and petrols to the T8 Recharge plug-in hybrid.',
          heroImage: 'xc60-ii',
          variants: [
            {
              id: 'volvo-xc60-ii-b4-diesel',
              name: 'XC60 B4 Diesel',
              years: '2020–present',
              priceBand: '€32,000–€52,000 used',
              specs: {
                engine: '2.0 D4 mild-hybrid diesel',
                engineCode: 'D4204T23',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 197,
                powerKw: 145,
                torqueNm: 420,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'AWD',
                acceleration0100: 8.3,
                topSpeedKmh: 210,
                consumptionL100: 5.6,
                co2Gkm: 148
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
              options: safetyComfort(['Pilot Assist', 'City Safety', 'cross-traffic alert']),
              knownFor: ['refined ride quality', 'class-leading safety tech', 'elegant Scandinavian interior', 'strong diesel torque'],
              watchOut: ['high ownership costs', 'optional extras inflate price quickly', 'infotainment can be sluggish']
            },
            {
              id: 'volvo-xc60-ii-b5-petrol',
              name: 'XC60 B5 Petrol AWD',
              years: '2020–present',
              priceBand: '€36,000–€56,000 used',
              specs: {
                engine: '2.0 T5 mild-hybrid petrol',
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
                consumptionL100: 7.2,
                co2Gkm: 163
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
              options: safetyComfort(['Pilot Assist', 'City Safety', 'head-up display', 'Harman Kardon audio']),
              knownFor: ['smooth mild-hybrid powertrain', 'all-weather AWD capability', 'premium cabin materials', 'comprehensive safety suite'],
              watchOut: ['fuel consumption higher than rivals', 'rear headroom limited vs competitors', 'no manual gearbox option']
            },
            {
              id: 'volvo-xc60-ii-t8-recharge',
              name: 'XC60 T8 Recharge',
              years: '2017–present',
              priceBand: '€42,000–€68,000 used',
              specs: {
                engine: '2.0 T8 petrol + rear e-motor',
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
                electricRangeKm: 45,
                consumptionL100: 2.1,
                co2Gkm: 49
              },
              dimensions: {
                lengthMm: 4688,
                widthMm: 1902,
                heightMm: 1658,
                wheelbaseMm: 2865,
                bootLitres: 468,
                weightKg: 2140,
                tankLitres: 71
              },
              options: safetyComfort(['Pilot Assist', 'City Safety', 'Bowers & Wilkins audio', 'massage seats', 'air suspension']),
              knownFor: ['strong performance with low CO2', 'generous PHEV incentives in many EU markets', 'effortless AWD traction', 'luxurious interior'],
              watchOut: ['heavy kerb weight affects dynamics', 'real-world EV range shorter than claimed', 'boot reduced vs standard', 'charging infrastructure dependency']
            }
          ]
        }
      ]
    },
    {
      id: 'xc40',
      name: 'XC40',
      segment: 'Compact Premium SUV',
      description: 'The XC40 brought Volvo\'s Scandinavian design language to the compact premium SUV segment, offering clever interior packaging, strong safety credentials, and a range that now spans mild-hybrid petrol engines to the fully electric Recharge variant.',
      tags: ['compact', 'premium', 'SUV', 'electric', 'urban', 'safety'],
      generations: [
        {
          id: 'xc40-i',
          name: 'XC40 I (CMA)',
          years: '2017–present',
          platform: 'Volvo CMA',
          bodyStyles: ['SUV'],
          summary: 'Built on the Compact Modular Architecture shared with the Polestar 2, the XC40 impressed with its clever storage solutions, stylish interior, and wide powertrain choice from T3 FWD to T5 AWD and the fully electric Recharge P8.',
          heroImage: 'xc40-i',
          variants: [
            {
              id: 'volvo-xc40-b4-petrol-awd',
              name: 'XC40 B4 Petrol AWD',
              years: '2020–present',
              priceBand: '€28,000–€45,000 used',
              specs: {
                engine: '2.0 T4 mild-hybrid petrol',
                engineCode: 'B4204T47',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 211,
                powerKw: 155,
                torqueNm: 300,
                fuel: 'Hybrid',
                gearbox: 'Automatic',
                gears: 7,
                drive: 'AWD',
                acceleration0100: 8.2,
                topSpeedKmh: 210,
                consumptionL100: 7.1,
                co2Gkm: 162
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
              options: safetyComfort(['Pilot Assist', 'City Safety', 'Park Assist Camera', 'wireless charging']),
              knownFor: ['clever interior storage solutions', 'distinctive design', 'generous standard safety kit', 'compact yet spacious feel'],
              watchOut: ['smaller boot than segment rivals', 'rear headroom tight for tall adults', 'infotainment learning curve']
            },
            {
              id: 'volvo-xc40-recharge-electric',
              name: 'XC40 Recharge Pure Electric',
              years: '2020–present',
              priceBand: '€32,000–€52,000 used',
              specs: {
                engine: 'dual permanent-magnet e-motors',
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
                bootLitres: 452,
                weightKg: 2110
              },
              options: evComfort(['Pilot Assist', 'City Safety', 'heat pump', 'Google Automotive Services']),
              knownFor: ['peppy EV performance', 'Google-integrated infotainment', 'strong safety suite', 'Scandinavian interior quality'],
              watchOut: ['range shorter than some rivals', 'DC fast charging capped at 150 kW', 'heavy weight affects efficiency', 'frunk space minimal']
            }
          ]
        }
      ]
    },
    {
      id: 'v60',
      name: 'V60',
      segment: 'Compact Executive Wagon',
      description: 'The V60 is Volvo\'s refined compact estate, blending Swedish practicality with executive-car dynamics and a full lineup of mild-hybrid and plug-in hybrid powertrains. It competes with the BMW 3 Series Touring and Mercedes C-Class Estate.',
      tags: ['wagon', 'estate', 'executive', 'mild-hybrid', 'practical', 'premium'],
      generations: [
        {
          id: 'v60-ii',
          name: 'V60 II (SPA)',
          years: '2018–present',
          platform: 'Volvo SPA',
          bodyStyles: ['Wagon'],
          summary: 'The second-generation V60 on SPA brought a significantly more refined cabin, Volvo\'s latest safety suite, and a range of efficient 2.0-litre four-cylinder engines in mild-hybrid guise, plus the T6 and T8 Recharge plug-in hybrids.',
          heroImage: 'v60-ii',
          variants: [
            {
              id: 'volvo-v60-ii-d4-diesel',
              name: 'V60 D4 Diesel',
              years: '2018–2020',
              priceBand: '€22,000–€38,000 used',
              specs: {
                engine: '2.0 D4 diesel',
                engineCode: 'D4204T14',
                displacementCc: 1969,
                cylinders: 'Inline-4',
                powerHp: 190,
                powerKw: 140,
                torqueNm: 400,
                fuel: 'Diesel',
                gearbox: 'Automatic',
                gears: 8,
                drive: 'FWD',
                acceleration0100: 7.9,
                topSpeedKmh: 220,
                consumptionL100: 4.9,
                co2Gkm: 128
              },
              dimensions: {
                lengthMm: 4761,
                widthMm: 1850,
                heightMm: 1431,
                wheelbaseMm: 2872,
                bootLitres: 529,
                weightKg: 1695,
                tankLitres: 71
              },
              options: safetyComfort(['Pilot Assist', 'City Safety', 'cross-traffic alert', 'driver alert control']),
              knownFor: ['long-distance touring comfort', 'spacious boot for segment', 'strong diesel refinement', 'elegant SPA interior'],
              watchOut: ['diesel faces future regulation pressure', 'no manual option', 'infotainment can be slow to respond']
            },
            {
              id: 'volvo-v60-ii-t8-recharge',
              name: 'V60 T8 Recharge AWD',
              years: '2019–present',
              priceBand: '€38,000–€58,000 used',
              specs: {
                engine: '2.0 T8 petrol + rear e-motor',
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
                acceleration0100: 4.6,
                topSpeedKmh: 250,
                electricRangeKm: 55,
                consumptionL100: 1.8,
                co2Gkm: 42
              },
              dimensions: {
                lengthMm: 4761,
                widthMm: 1850,
                heightMm: 1431,
                wheelbaseMm: 2872,
                bootLitres: 477,
                weightKg: 2090,
                tankLitres: 71
              },
              options: safetyComfort(['Pilot Assist', 'Bowers & Wilkins audio', 'air suspension', 'massage seats']),
              knownFor: ['exceptional performance in wagon package', 'low company-car tax in many EU markets', 'effortless AWD', 'spacious family estate with supercar pace'],
              watchOut: ['heavy at over 2 tonnes', 'boot reduced by PHEV battery', 'real-world EV range shorter in cold climates', 'running costs high']
            }
          ]
        }
      ]
    },
    {
      id: 's60',
      name: 'S60',
      segment: 'Compact Executive Sedan',
      description: 'The S60 is Volvo\'s sporty compact sedan, sharing its SPA platform with the V60 estate but offering a lower, sleeker roofline. It targets the BMW 3 Series and Audi A4 with a mix of efficiency, safety, and Scandinavian premium appeal.',
      tags: ['sedan', 'executive', 'sporty', 'premium', 'plug-in-hybrid'],
      generations: [
        {
          id: 's60-iii',
          name: 'S60 III (SPA)',
          years: '2018–present',
          platform: 'Volvo SPA',
          bodyStyles: ['Sedan'],
          summary: 'The third-generation S60 dropped the diesel option entirely at launch, focusing on petrol mild-hybrids and the Recharge PHEV. It is Volvo\'s sportiest sedan to date, now built exclusively in the United States.',
          heroImage: 's60-iii',
          variants: [
            {
              id: 'volvo-s60-iii-b5-petrol',
              name: 'S60 B5 Petrol AWD',
              years: '2020–present',
              priceBand: '€30,000–€48,000 used',
              specs: {
                engine: '2.0 T5 mild-hybrid petrol',
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
                consumptionL100: 7.3,
                co2Gkm: 167
              },
              dimensions: {
                lengthMm: 4761,
                widthMm: 1850,
                heightMm: 1431,
                wheelbaseMm: 2872,
                bootLitres: 442,
                weightKg: 1810,
                tankLitres: 71
              },
              options: safetyComfort(['Pilot Assist', 'City Safety', 'head-up display', 'Harman Kardon audio']),
              knownFor: ['engaging driving dynamics for a Volvo', 'excellent safety technology', 'premium Scandinavian interior', 'composed motorway cruiser'],
              watchOut: ['smaller boot than V60 estate', 'fuel economy lags diesel rivals', 'no diesel option in this generation']
            }
          ]
        }
      ]
    }
  ]
};
