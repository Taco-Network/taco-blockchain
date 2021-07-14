import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.FLAX]: IS_MAINNET ? 'XCH' : 'TXCH',
};
