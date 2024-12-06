'use client';
import { Path } from 'react-native-svg';

// Components
import SvgFactory, { SvgFactoryProps } from './SvgFactory';

export const CloseIcon = ({
  width = '$6',
  height = '$6',
  color = '#ABABAD',
  ...rest
}: SvgFactoryProps) => (
  <SvgFactory
    testID="icon-close"
    viewBox="0 0 24 24"
    color={color}
    width={width}
    height={height}
    {...rest}
  >
    <Path
      fill="currentColor"
      d="M17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41 17.59 5Z"
    />
  </SvgFactory>
);
