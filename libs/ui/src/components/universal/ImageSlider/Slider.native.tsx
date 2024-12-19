import { memo, useRef } from 'react';
import { Stack, ViewStyle } from 'tamagui';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Image } from '../Image';
import { Metrics } from '../../../themes';
import { StyleProp } from 'react-native';

const WIDTH = Metrics.screenWidth;
const HEIGHT = 325;

interface IProps {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  data: string[];
}

export const ImageSlider = memo<IProps>(
  ({ width = WIDTH, height = HEIGHT, style, data }) => {
    const ref = useRef<ICarouselInstance>(null);
    return (
      <Stack
        w={width}
        h={height}
        mx="auto"
        onPress={(e) => e.stopPropagation()}
      >
        <Carousel
          width={width}
          height={height}
          ref={ref}
          data={data}
          style={style as any}
          renderItem={({ item, index }) => (
            <Stack>
              <Image
                src={item}
                alt={`Image ${index}`}
                width={width}
                height={height}
              />
            </Stack>
          )}
        />
      </Stack>
    );
  }
);
