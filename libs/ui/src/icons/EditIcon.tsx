'use client';

import { Path } from 'react-native-svg';

// Components
import SvgFactory, { SvgFactoryProps } from './SvgFactory';

export const EditIcon = ({
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
      d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zM16.045 4.401l1.587 1.585-1.59 1.584-1.586-1.585L16.045 4.401zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zM4 20H20V22H4z"
    />
  </SvgFactory>
);
