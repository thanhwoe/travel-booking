'use client';

import { Path } from 'react-native-svg';

// Components
import SvgFactory, { SvgFactoryProps } from './SvgFactory';
import { forwardRef } from 'react';

export const ChevronRightIcon = forwardRef(
  (
    { width = '$6', height = '$6', color = '$color', ...rest }: SvgFactoryProps,
    ref
  ) => (
    <SvgFactory
      testID="chevron-icon"
      viewBox="0 0 24 24"
      color={color}
      width={width}
      height={height}
      {...rest}
    >
      <Path
        fill="currentColor"
        d="M15.713 12 9.702 5.99 8.288 7.404l4.6 4.6-4.6 4.593 1.414 1.414L15.713 12Z"
      />
    </SvgFactory>
  )
);
