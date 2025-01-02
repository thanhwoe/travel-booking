import type { FastImageProps } from 'react-native-fast-image';
import type { ImageProps } from 'next/image';

export * from './image';
export interface IImageProps extends ImageProps {
  '$native-platform'?: FastImageProps;
}
