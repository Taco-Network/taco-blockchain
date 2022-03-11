import React from 'react';
import { Trans } from '@lingui/macro';
import { FormatLargeNumber, CardSimple } from '@taco/core';
import { useGetBlockchainStateQuery } from '@taco/api-react';

export default function FullNodeCardDifficulty() {
  const { data, isLoading, error } = useGetBlockchainStateQuery();
  const value = data?.difficulty;

  return (
    <CardSimple
      loading={isLoading}
      valueColor="textPrimary"
      title={<Trans>Difficulty</Trans>}
      value={<FormatLargeNumber value={value} />}
      error={error}
    />
  );
}
