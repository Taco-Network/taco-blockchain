import Big from 'big.js';
import Unit from '../constants/Unit';
import tacoFormatter from './tacoFormatter';

export default function mojoToCAT(mojo: string | number | Big): number {
  return tacoFormatter(mojo, Unit.MOJO)
    .to(Unit.CAT)
    .toNumber();
}