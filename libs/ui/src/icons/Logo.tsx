'use client';

import { Path, G } from 'react-native-svg';

// Components
import SvgFactory, { SvgFactoryProps } from './SvgFactory';

export const Logo = ({
  width = '$22',
  height = '$22',
  color = '$primary10',
  ...rest
}: SvgFactoryProps) => (
  <SvgFactory
    viewBox="0 0 88 88"
    color={color}
    width={width}
    height={height}
    {...rest}
  >
    <G transform="matrix(1 0 0 1 44 44.73)">
      <Path
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="currentColor"
        fillRule="nonzero"
        opacity={1}
        transform=" translate(-44, -44.73)"
        d="M 38.8438 58.2801 L 25.5625 62.0059 L 44 30.3366 L 62.4375 62.0059 L 49.1562 58.2801 L 49.1562 68.8365 L 79.2277 77.4111 C 80.9591 77.9048 82.4102 76.0385 81.505 74.4823 L 45.7288 12.9724 C 44.9576 11.6465 43.0424 11.6464 42.2712 12.9724 L 6.49501 74.4823 C 5.58983 76.0385 7.04092 77.9048 8.77227 77.4111 L 38.8438 68.8365 L 38.8438 58.2801 Z"
        // strokeLinecap="round"
      />
    </G>
  </SvgFactory>
);
