import type { CarMake } from '../types';
import { alfaRomeo } from './makes/alfa-romeo';
import { astonMartin } from './makes/aston-martin';
import { audi } from './makes/audi';
import { bentley } from './makes/bentley';
import { bmw } from './makes/bmw';
import { byd } from './makes/byd';
import { citroen } from './makes/citroen';
import { cupra } from './makes/cupra';
import { dacia } from './makes/dacia';
import { ferrari } from './makes/ferrari';
import { fiat } from './makes/fiat';
import { ford } from './makes/ford';
import { genesis } from './makes/genesis';
import { honda } from './makes/honda';
import { hyundai } from './makes/hyundai';
import { jaguar } from './makes/jaguar';
import { kia } from './makes/kia';
import { lamborghini } from './makes/lamborghini';
import { landRover } from './makes/land-rover';
import { lexus } from './makes/lexus';
import { maserati } from './makes/maserati';
import { mazda } from './makes/mazda';
import { mclaren } from './makes/mclaren';
import { mercedesBenz } from './makes/mercedes-benz';
import { mg } from './makes/mg';
import { mini } from './makes/mini';
import { mitsubishi } from './makes/mitsubishi';
import { nissan } from './makes/nissan';
import { opel } from './makes/opel';
import { peugeot } from './makes/peugeot';
import { polestar } from './makes/polestar';
import { porsche } from './makes/porsche';
import { renault } from './makes/renault';
import { seat } from './makes/seat';
import { skoda } from './makes/skoda';
import { subaru } from './makes/subaru';
import { suzuki } from './makes/suzuki';
import { tesla } from './makes/tesla';
import { toyota } from './makes/toyota';
import { volkswagen } from './makes/volkswagen';
import { volvo } from './makes/volvo';

/** Every make, one modular file each, sorted alphabetically by name. */
export const makes: CarMake[] = [
  alfaRomeo,
  astonMartin,
  audi,
  bentley,
  bmw,
  byd,
  citroen,
  cupra,
  dacia,
  ferrari,
  fiat,
  ford,
  genesis,
  honda,
  hyundai,
  jaguar,
  kia,
  lamborghini,
  landRover,
  lexus,
  maserati,
  mazda,
  mclaren,
  mercedesBenz,
  mg,
  mini,
  mitsubishi,
  nissan,
  opel,
  peugeot,
  polestar,
  porsche,
  renault,
  seat,
  skoda,
  subaru,
  suzuki,
  tesla,
  toyota,
  volkswagen,
  volvo
].sort((a, b) => a.name.localeCompare(b.name));
