'use client';

import { Path } from 'react-native-svg';

// Components
import SvgFactory, { SvgFactoryProps } from './SvgFactory';

export const CheckIcon = ({
  width = '$5',
  height = '$5',
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
      d="m9.525 17.657-4.95-4.95 1.414-1.414 3.538 3.534-.002.001 8.485-8.485 1.414 1.414-8.485 8.486-1.413 1.413-.001.001Z"
    />
  </SvgFactory>
);
