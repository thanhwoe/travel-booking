'use Client';

import { memo } from 'react';
import Slider, { Settings } from 'react-slick';
import { Stack, ViewStyle } from 'tamagui';
import { StyleProp } from 'react-native';
import { Image } from '../Image';
import { useRouter } from 'next/navigation';

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

interface IProps {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  data: string[];
  id?: string;
}

export const ImageSlider = memo<IProps>(
  ({ height = 200, style, width = 400, data, id }) => {
    const { push } = useRouter();
    return (
      <Stack
        w={width}
        borderRadius="$2"
        style={style as any}
        overflow="hidden"
        onPress={(e) => {
          push(`/room/${id}`);
          e.stopPropagation();
          e.preventDefault();
        }}
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
