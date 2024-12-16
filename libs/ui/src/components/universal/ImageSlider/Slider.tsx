'use Client';

import { memo } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { Stack, ViewStyle } from 'tamagui';
import { StyleProp } from 'react-native';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const mockImages = [
  'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Gadget-upgrade/Grocery-big-savings/Desktop_Homepage_Slider__712x384.jpg',
  'https://ng.jumia.is/cms/0-5-brand-festival/2023/BF-Slider.jpg',
  'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Slider_.jpg',
  'https://ng.jumia.is/cms/08-august/theplace_desktopslider.jpg',
];

interface IProps {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
}

export const ImageSlider = memo<IProps>(
  ({ height = 200, style, width = 400 }) => {
    return (
      <Stack
        w={width}
        borderRadius="$2"
        style={style as any}
        overflow="hidden"
        onPress={(e) => e.stopPropagation()}
      >
        <Slider {...settings}>
          {mockImages.map((image, index) => (
            <Stack key={index}>
              <Image
                src={image}
                alt={`Image ${index}`}
                width={width}
                height={height}
              />
            </Stack>
          ))}
        </Slider>
      </Stack>
    );
  }
);
