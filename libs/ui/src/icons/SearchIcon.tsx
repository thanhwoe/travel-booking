'use client';
import { Path } from 'react-native-svg';

// Components
import SvgFactory, { SvgFactoryProps } from './SvgFactory';

export const SearchIcon = ({
  width = '$6',
  height = '$6',
  color = '$color',
  ...rest
}: SvgFactoryProps) => (
  <SvgFactory
    viewBox="0 0 24 24"
    width={width}
    height={height}
    color={color}
    {...rest}
  >
    <Path
      fill="currentColor"
      d="M18.677 19.6069L12.962 13.8909C10.4196 15.6984 6.91642 15.2562 4.90285 12.8738C2.88929 10.4914 3.03714 6.96349 5.24298 4.7579C7.44824 2.55134 10.9765 2.40285 13.3594 4.41631C15.7422 6.42977 16.1846 9.93334 14.377 12.4759L20.092 18.1919L18.678 19.6059L18.677 19.6069ZM9.48498 4.99988C7.58868 4.99946 5.95267 6.33057 5.56745 8.18733C5.18224 10.0441 6.15369 11.9162 7.89366 12.6701C9.63362 13.4241 11.6639 12.8527 12.7552 11.3019C13.8466 9.75117 13.699 7.64721 12.402 6.2639L13.007 6.8639L12.325 6.1839L12.313 6.1719C11.5648 5.41907 10.5464 4.99702 9.48498 4.99988Z"
    />
  </SvgFactory>
);
