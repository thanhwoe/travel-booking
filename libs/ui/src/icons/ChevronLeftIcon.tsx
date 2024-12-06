'use client';

import { Path } from 'react-native-svg';

// Components
import SvgFactory, { SvgFactoryProps } from './SvgFactory';

export const ChevronLeftIcon = ({
  width = '$6',
  height = '$6',
  color = '$color',
  ...rest
}: SvgFactoryProps) => (
  <SvgFactory
    viewBox="0 0 24 24"
    color={color}
    width={width}
    height={height}
    {...rest}
  >
    <Path
      fill="currentColor"
      d="m8.288 12 6.01 6.01 1.414-1.414-4.6-4.6 4.6-4.6-1.414-1.406L8.288 12Z"
    />
  </SvgFactory>
);
