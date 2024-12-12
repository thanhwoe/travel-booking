'use client';

import { Path } from 'react-native-svg';

// Components
import SvgFactory, { SvgFactoryProps } from './SvgFactory';
import { forwardRef } from 'react';

export const FacebookIcon = forwardRef(
  (
    { width = '$6', height = '$6', color = '$color', ...rest }: SvgFactoryProps,
    ref
  ) => (
    <SvgFactory
      viewBox="0 0 24 24"
      color={color}
      width={width}
      height={height}
      {...rest}
    >
      <Path
        fill="currentColor"
        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
      />
    </SvgFactory>
  )
);
