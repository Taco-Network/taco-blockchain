import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';
import tacoFormatter from './tacoFormatter';

export default function mojoToTacoLocaleString(mojo: string | number | BigNumber, locale?: string) {
  return tacoFormatter(mojo, Unit.MOJO).to(Unit.TACO).toLocaleString(locale);
}
