'use client';
import { FC } from 'react';
import { Path } from 'react-native-svg';

import SvgFactory, { SvgFactoryProps } from './SvgFactory';

export const EyeOnIcon: FC<SvgFactoryProps> = ({
  width = '$6',
  height = '$6',
  color = '#ABABAD',
}) => (
  <SvgFactory color={color} width={width} height={height} viewBox="0 0 24 24">
    <Path
      d="M12 15.0002C13.6569 15.0002 15 13.6571 15 12.0002C15 10.3434 13.6569 9.00024 12 9.00024C10.3431 9.00024 9 10.3434 9 12.0002C9 13.6571 10.3431 15.0002 12 15.0002Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.5 12.0002C2.35139 6.95099 7.50368 4.00098 12 4.00098C16.4963 4.00098 21.6486 6.95099 23.5 12.0002C21.6592 17.0205 16.5092 20.0772 12 20.0002C7.43878 19.9224 2.362 17.0784 0.5 12.0002ZM17 12.0002C17 14.7617 14.7614 17.0002 12 17.0002C9.23858 17.0002 7 14.7617 7 12.0002C7 9.23882 9.23858 7.00024 12 7.00024C14.7614 7.00024 17 9.23882 17 12.0002Z"
      fill="currentColor"
    />
  </SvgFactory>
);
