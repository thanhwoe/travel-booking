'use client';

import { Path } from 'react-native-svg';

// Components
import SvgFactory, { SvgFactoryProps } from './SvgFactory';

export const FilterIcon = ({
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
      d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"
    />
  </SvgFactory>
);
