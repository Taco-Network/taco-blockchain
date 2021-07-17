import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.TACO]: IS_MAINNET ? 'XTX' : 'TXTX',
};
