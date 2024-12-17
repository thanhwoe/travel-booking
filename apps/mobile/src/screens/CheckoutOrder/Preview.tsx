import { Image, Text } from '@shared/ui/components';
import { StarIcon } from '@shared/ui/icons';
import { memo } from 'react';
import { XStack, YStack } from 'tamagui';

export const Preview = memo(() => {
  return (
    <XStack
      jc="space-between"
      borderWidth="$px"
      borderColor="$grey50"
      borderRadius="$1"
      py="$4"
      px="$3"
    >
      <YStack jc="space-between">
        <Text size="large">
          <Text fontWeight="bold" size="large">
            $30
          </Text>
          /night
        </Text>
        <Text>Balian treehouse</Text>
        <Text>
          <StarIcon />
          5.0 (262)
        </Text>
      </YStack>
      <Image
        alt="img"
        width={100}
        height={100}
        src={'https://ng.jumia.is/cms/0-5-brand-festival/2023/BF-Slider.jpg'}
      />
    </XStack>
  );
});
