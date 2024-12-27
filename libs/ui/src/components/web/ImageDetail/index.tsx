import { memo, useState } from 'react';
import { Stack, XStack } from 'tamagui';
import Slider, { Settings } from 'react-slick';
import { Image } from '../../universal';

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

interface IProps {
  data: string[];
}

export const ImageDetail = memo<IProps>(({ data }) => {
  const [mainImage, setMainImage] = useState(data[0]);

  return (
    <XStack ai="center" gap="$2" mt="$5" mb="$11">
      {/* <Image
        alt="Image"
        src={data[0]}
        width={800}
        height={668}
        className="w-full h-[668px]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      /> */}
      <Stack f={1} height={668}>
        <Image
          src={mainImage}
          key={mainImage}
          // width={800}
          fill
          // className="w-full h-[668px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          // height={668}
          alt="Image"
          quality={100}
          priority
          loading="eager"
        />
      </Stack>
      <Stack
        w={280}
        overflow="hidden"
        borderTopRightRadius="$2"
        borderBottomRightRadius="$2"
      >
        <Slider {...settings}>
          {data.map((image, index) => (
            <Stack
              key={index}
              width={280}
              height={218}
              onPress={() => {
                setMainImage(image);
              }}
            >
              <Image
                src={image}
                fill
                alt={`Image ${index}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Stack>
          ))}
        </Slider>
      </Stack>
    </XStack>
  );
});
