'use client';

import { FC } from 'react';
import { Path } from 'react-native-svg';

import SvgFactory, { SvgFactoryProps } from './SvgFactory';

export const ChevronDownIcon: FC<SvgFactoryProps> = ({
  width = 24,
  height = 24,
  color = 'black',
}) => (
  <SvgFactory color={color} width={width} height={height} viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.293 9.293a1 1 0 011.414 0L12 14.586l5.293-5.293a1 1 0 111.414 1.414L12 17.414l-6.707-6.707a1 1 0 010-1.414z"
      fill="currentColor"
    />
  </SvgFactory>
);
