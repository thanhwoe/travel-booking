import Image from 'next/image';
import { memo } from 'react';
import { Stack, XStack } from 'tamagui';
import Slider, { Settings } from 'react-slick';

const mockImages = [
  'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Gadget-upgrade/Grocery-big-savings/Desktop_Homepage_Slider__712x384.jpg',
  'https://ng.jumia.is/cms/0-5-brand-festival/2023/BF-Slider.jpg',
  'https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w35-Grocery/Slider_.jpg',
  'https://ng.jumia.is/cms/08-august/theplace_desktopslider.jpg',
];

const settings: Settings = {
  dots: false,
  infinite: true,
  vertical: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
};

export const ImageDetail = memo(() => {
  return (
    <XStack ai="center" gap="$2" mt="$5" mb="$11">
      <Stack
        f={1}
        flexGrow={1}
        h={668}
        borderTopLeftRadius="$2"
        borderBottomLeftRadius="$2"
        overflow="hidden"
      >
        <Image alt="Image" objectFit="cover" fill src={mockImages[0]} />
      </Stack>
      <Stack
        w={280}
        overflow="hidden"
        borderTopRightRadius="$2"
        borderBottomRightRadius="$2"
      >
        <Slider {...settings}>
          {mockImages.map((image, index) => (
            <Stack key={index} width={280} h={218}>
              <Image
                src={image}
                objectFit="cover"
                fill
                alt={`Image ${index}`}
              />
            </Stack>
          ))}
        </Slider>
      </Stack>
    </XStack>
  );
});
