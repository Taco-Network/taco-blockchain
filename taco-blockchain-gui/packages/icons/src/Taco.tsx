import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

import TacoIcon from './images/taco.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={TacoIcon} viewBox="0 0 150 58" {...props} />;
}
