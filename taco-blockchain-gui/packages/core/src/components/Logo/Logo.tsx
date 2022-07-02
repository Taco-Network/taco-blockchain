import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@mui/material';
import { Taco } from '@taco/icons';

const StyledTaco = styled(Taco)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledTaco />
    </Box>
  );
}
