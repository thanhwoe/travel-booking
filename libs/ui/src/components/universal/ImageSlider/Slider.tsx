'use Client';

import { memo } from 'react';
import Slider, { Settings } from 'react-slick';
import { Stack, ViewStyle } from 'tamagui';
import { StyleProp } from 'react-native';
import { Image } from '../Image';

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

interface IProps {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  data: string[];
}

export const ImageSlider = memo<IProps>(
  ({ height = 200, style, width = 400, data }) => {
    return (
      <Stack
        w={width}
        borderRadius="$2"
        style={style as any}
        overflow="hidden"
        onPress={(e) => e.stopPropagation()}
      >
        <Slider
          {...settings}
          autoplaySpeed={(Math.floor(Math.random() * 10) + 1) * 1000}
        >
          {data.map((image, index) => (
            <Stack key={index} width={width} h={height}>
              <Image
                src={image}
                alt={`Image ${index}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </Stack>
          ))}
        </Slider>
      </Stack>
    );
  }
);
