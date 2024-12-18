import { memo, useRef } from 'react';
import { Stack, ViewStyle } from 'tamagui';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Image } from '../Image';
import { Metrics } from '../../../themes';
import { StyleProp } from 'react-native';

const mockImages = [
  'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Gadget-upgrade/Grocery-big-savings/Desktop_Homepage_Slider__712x384.jpg',
  'https://ng.jumia.is/cms/0-5-brand-festival/2023/BF-Slider.jpg',
  'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Slider_.jpg',
  'https://ng.jumia.is/cms/08-august/theplace_desktopslider.jpg',
];

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
