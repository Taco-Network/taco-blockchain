import { useGetFarmedAmountQuery } from '@taco/api-react';
import { useCurrencyCode, mojoToTacoLocaleString, CardSimple, useLocale } from '@taco/core';
import { Trans } from '@lingui/macro';
import React, { useMemo } from 'react';

export default function FarmCardTotalTacoFarmed() {
  const currencyCode = useCurrencyCode();
  const [locale] = useLocale();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalTacoFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToTacoLocaleString(farmedAmount, locale)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount, locale, currencyCode]);

  return (
    <CardSimple title={<Trans>Total Taco Farmed</Trans>} value={totalTacoFarmed} loading={isLoading} error={error} />
  );
}
