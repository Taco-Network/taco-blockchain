import Big from 'big.js';
import Unit from '../constants/Unit';
import tacoFormatter from './tacoFormatter';

export default function mojoToTacoLocaleString(mojo: string | number | Big) {
  return tacoFormatter(Number(mojo), Unit.MOJO)
    .to(Unit.TACO)
    .toLocaleString();
}