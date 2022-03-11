import Big from 'big.js';
import Unit from '../constants/Unit';
import tacoFormatter from './tacoFormatter';

export default function tacoToMojo(taco: string | number | Big): number {
  return tacoFormatter(taco, Unit.TACO)
    .to(Unit.MOJO)
    .toNumber();
}