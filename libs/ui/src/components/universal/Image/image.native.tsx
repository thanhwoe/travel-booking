import { memo } from 'react';
import FastImage from 'react-native-fast-image';
import { ImageProps } from 'tamagui';

export const Image = memo<ImageProps>(({ src, width, height }) => {
  return (
    <FastImage
      style={{ width: Number(width), height: Number(height) }}
      source={{
        uri: src,
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.cacheOnly,
      }}
      resizeMode={FastImage.resizeMode.cover}
      defaultSource={require('./fallback.png')}
    />
  );
});
