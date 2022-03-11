import React from 'react';
import { Trans } from '@lingui/macro';
import { FormatBytes, CardSimple } from '@taco/core';
import usePlots from '../../../hooks/usePlots';

export default function FarmCardTotalSizeOfPlots() {
  const { size } = usePlots();

  return (
    <CardSimple
      title={<Trans>Total Size of Plots</Trans>}
      value={<FormatBytes value={size} precision={3} />}
    />
  );
}
