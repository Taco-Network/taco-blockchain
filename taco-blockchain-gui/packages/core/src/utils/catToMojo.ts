import Big from 'big.js';
import Unit from '../constants/Unit';
import tacoFormatter from './tacoFormatter';

export default function catToMojo(cat: string | number | Big): number {
  return tacoFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toNumber();
}