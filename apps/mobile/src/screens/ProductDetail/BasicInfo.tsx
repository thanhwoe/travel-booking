import { Heading, Text } from '@shared/ui/components';
import { ChevronRightIcon, MapPinIcon, StarIcon } from '@shared/ui/icons';
import { memo } from 'react';
import { Separator, XStack, YStack } from 'tamagui';

export const BasicInfo = memo(() => {
  return (
    <YStack>
      <Heading size="large">Balian treehouse</Heading>
      <Text>
        <MapPinIcon width="$4" height="$4" color="$primary10" /> Bali, Indonesia
      </Text>

      <XStack
        jc="space-between"
        ai="center"
        backgroundColor="$grey70"
        px="$3"
        py="$4.5"
        mt="$3"
        borderRadius="$1"
      >
        <Text>
          <StarIcon mt={-2} /> 4.5/5
        </Text>
        <Text>
          (12 reviews)
          <ChevronRightIcon width="$5" height="$5" mt={-2} />
        </Text>
      </XStack>
      <Separator mx={-20} my="$5" />
    </YStack>
  );
});
