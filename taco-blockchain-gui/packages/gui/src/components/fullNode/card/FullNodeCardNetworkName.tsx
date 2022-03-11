import React from 'react';
import { Trans } from '@lingui/macro';
import { useGetNetworkInfoQuery } from '@taco/api-react';
import { CardSimple } from '@taco/core';

export default function FullNodeCardNetworkName() {
  const { data: networkInfo, isLoading, error } = useGetNetworkInfoQuery(); 
  const value = networkInfo?.networkName;

  return (
    <CardSimple
      loading={isLoading}
      valueColor="textPrimary"
      title={<Trans>Network Name</Trans>}
      value={value}
      error={error}
    />
  );
}
