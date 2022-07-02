import React from 'react';
import { Trans } from '@lingui/macro';
import { FormatBytes, CardSimple } from '@taco/core';
import { useGetTotalHarvestersSummaryQuery } from '@taco/api-react';

export default function FarmCardTotalSizeOfPlots() {
  const { totalPlotSize, isLoading } = useGetTotalHarvestersSummaryQuery();

  return (
    <CardSimple
      title={<Trans>Total Size of Plots</Trans>}
      value={<FormatBytes value={totalPlotSize} precision={3} />}
      loading={isLoading}
    />
  );
}
