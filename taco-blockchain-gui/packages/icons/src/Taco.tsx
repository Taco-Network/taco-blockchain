import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import TacoIcon from './images/taco.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={TacoIcon} viewBox="0 0 150 58" {...props} />;
}
