import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToTacoLocaleString, CardSimple } from '@taco/core';
import { useGetFarmedAmountQuery } from '@taco/api-react';

export default function FarmCardTotalTacoFarmed() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalTacoFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToTacoLocaleString(farmedAmount)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount]);

  return (
    <CardSimple
      title={<Trans>Total Taco Farmed</Trans>}
      value={totalTacoFarmed}
      loading={isLoading}
      error={error}
    />
  );
}
