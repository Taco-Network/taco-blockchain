import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../modules/rootReducer';
import FarmCard from './FarmCard';
import { mojo_to_taco } from '../../../util/taco';
import useCurrencyCode from '../../../hooks/useCurrencyCode';

export default function FarmCardTotalTacoFarmed() {
  const currencyCode = useCurrencyCode();

  const loading = useSelector(
    (state: RootState) => !state.wallet_state.farmed_amount,
  );

  const farmedAmount = useSelector(
    (state: RootState) => state.wallet_state.farmed_amount?.farmed_amount,
  );

  const totalTacoFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      const val = BigInt(farmedAmount.toString());
      return mojo_to_taco(val);
    }
  }, [farmedAmount]);

  return (
    <FarmCard
      title={<Trans>{currencyCode} Total Taco Farmed</Trans>}
      value={totalTacoFarmed}
      loading={loading}
    />
  );
}
