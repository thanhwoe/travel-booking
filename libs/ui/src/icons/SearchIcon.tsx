'use client';
import { Path } from 'react-native-svg';

// Components
import SvgFactory, { SvgFactoryProps } from './SvgFactory';

export const SearchIcon = ({
  width = '$6',
  height = '$6',
  color = '$color',
  fill = 'white',
  ...rest
}: SvgFactoryProps) => (
  <SvgFactory
    viewBox="0 0 18 18"
    width={width}
    height={height}
    color={color}
    {...rest}
  >
    <Path
      fill="currentColor"
      d="M15.63 15.13L12.79 12.29"
      stroke="currentColor"
      strokeWidth="1.704"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
    <Path
      fill={fill}
      d="M7.07 12.25C10.207 12.25 12.75 9.70698 12.75 6.57C12.75 3.43302 10.207 0.889999 7.07 0.889999C3.93302 0.889999 1.39 3.43302 1.39 6.57C1.39 9.70698 3.93302 12.25 7.07 12.25Z"
      stroke="currentColor"
      strokeWidth="1.704"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />

    <Path
      fill="currentColor"
      d="M4.22 6.56C4.22 4.99151 5.49151 3.72 7.06 3.72"
      stroke="currentColor"
      strokeWidth="1.704"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </SvgFactory>
);
