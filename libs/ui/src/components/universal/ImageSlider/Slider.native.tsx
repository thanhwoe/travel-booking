import { memo, useRef } from 'react';
import { Stack } from 'tamagui';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { Image } from '../Image';
import { Metrics } from '../../../themes';

const mockImages = [
  'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Gadget-upgrade/Grocery-big-savings/Desktop_Homepage_Slider__712x384.jpg',
  'https://ng.jumia.is/cms/0-5-brand-festival/2023/BF-Slider.jpg',
  'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Slider_.jpg',
  'https://ng.jumia.is/cms/08-august/theplace_desktopslider.jpg',
];

const WIDTH = Metrics.screenWidth - 20 * 2;
const HEIGHT = 325;

interface IProps {
  width?: number;
  height?: number;
}

export const ImageSlider = memo<IProps>(
  ({ width = WIDTH, height = HEIGHT }) => {
    const ref = useRef<ICarouselInstance>(null);

    return (
      <Stack w={width} h={height} mx="auto">
        <Carousel
          width={width}
          height={height}
          ref={ref}
          data={mockImages}
          style={{
            borderRadius: 8,
          }}
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
