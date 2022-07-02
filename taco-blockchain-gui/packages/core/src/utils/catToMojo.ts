import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import tacoFormatter from './tacoFormatter';

export default function catToMojo(cat: string | number | BigNumber): BigNumber {
  return tacoFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toBigNumber();
}