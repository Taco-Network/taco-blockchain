import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import tacoFormatter from './tacoFormatter';

export default function tacoToMojo(taco: string | number | BigNumber): BigNumber {
  return tacoFormatter(taco, Unit.TACO)
    .to(Unit.MOJO)
    .toBigNumber();
}