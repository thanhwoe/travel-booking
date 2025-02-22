'use client';

import { Path } from 'react-native-svg';

// Components
import SvgFactory, { SvgFactoryProps } from './SvgFactory';

export const CampingIcon = ({
  width = '$6',
  height = '$6',
  color = '$color',
  ...rest
}: SvgFactoryProps) => (
  <SvgFactory
    viewBox="0 0 256 256"
    color={color}
    width={width}
    height={height}
    {...rest}
  >
    <Path
      fill="currentColor"
      d="M255.31,196.75l-64-144A8,8,0,0,0,184,48H72a8,8,0,0,0-7.27,4.69.21.21,0,0,0,0,.06l0,.12,0,0L.69,196.75A8,8,0,0,0,8,208H248a8,8,0,0,0,7.31-11.25ZM64,192H20.31L64,93.7Zm16,0V93.7L123.69,192Zm61.2,0L84.31,64H178.8l56.89,128Z"
    />
  </SvgFactory>
);
