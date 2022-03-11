import React from 'react';
import { Trans } from '@lingui/macro';
import { FormatLargeNumber, CardSimple } from '@taco/core';
import { useGetBlockchainStateQuery } from '@taco/api-react';

export default function FullNodeCardTotalIterations() {
  const { data, isLoading, error } = useGetBlockchainStateQuery();
  const value = data?.peak?.totalIters ?? 0;

  return (
    <CardSimple
      loading={isLoading}
      valueColor="textPrimary"
      title={<Trans>Total Iterations</Trans>}
      tooltip={
        <Trans>Total iterations since the start of the blockchain</Trans>
      }
      value={<FormatLargeNumber value={value} />}
      error={error}
    />
  );
}
