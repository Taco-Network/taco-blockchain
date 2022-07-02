import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import tacoFormatter from './tacoFormatter';

export default function mojoToTaco(mojo: string | number | BigNumber): BigNumber {
  return tacoFormatter(mojo, Unit.MOJO)
    .to(Unit.TACO)
    .toBigNumber();
}