import { Flex, useDarkMode } from '@taco/core';
import { Trans } from '@lingui/macro';
import { Typography } from '@mui/material';
import React from 'react';

import HeroImage from './NFTGalleryHero.svg';
import HeroImageDark from './NFTGalleryHeroDark.svg';

export default function NFTGalleryHero() {
  const { isDarkMode } = useDarkMode();

  return (
    <Flex flexDirection="column" flexGrow={1} alignItems="center" pt={5} gap={1}>
      <Typography variant="h3">
        <Trans>Go collect some gems</Trans>
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <Trans>Explore the Taco ecosystem; discover and trade great NFTs</Trans>
      </Typography>

      {isDarkMode ? <HeroImageDark /> : <HeroImage />}
    </Flex>
  );
}
