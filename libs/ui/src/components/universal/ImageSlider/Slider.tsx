'use Client';

import { memo } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { Stack } from 'tamagui';

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

export const ImageSlider = memo(() => {
  return (
    <Stack w={400} borderRadius="$2" overflow="hidden">
      <Slider {...settings}>
        {mockImages.map((image, index) => (
          <Stack key={index}>
            <Image
              src={image}
              alt={`Image ${index}`}
              width={400}
              height={200}
            />
          </Stack>
        ))}
      </Slider>
    </Stack>
  );
});
