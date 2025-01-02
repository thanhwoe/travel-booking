import { memo } from 'react';
import FastImage from 'react-native-fast-image';
import { IImageProps } from '.';

export const Image = memo<IImageProps>(({ src, width, height, ...rest }) => {
  return (
    <FastImage
      style={{ width: Number(width), height: Number(height) }}
      source={{
        uri: src + '',
        priority: FastImage.priority.normal,
        cache: FastImage.cacheControl.cacheOnly,
      }}
      resizeMode={FastImage.resizeMode.cover}
      defaultSource={require('./fallback.png')}
      {...rest['$native-platform']}
    />
  );
});
