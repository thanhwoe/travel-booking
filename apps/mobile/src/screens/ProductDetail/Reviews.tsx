import { Heading, Text } from '@shared/ui/components';
import { ChevronRightIcon, StarIcon } from '@shared/ui/icons';
import { memo, useCallback } from 'react';
import { XStack, YStack, Image, Separator } from 'tamagui';
import Carousel from 'react-native-reanimated-carousel';
import { Metrics } from '@shared/ui/themes';

export const Reviews = memo(() => {
  const renderItem = useCallback(
    () => (
      <YStack
        gap="$3.5"
        w={275}
        borderWidth="$px"
        borderColor="$grey50"
        p="$3"
        borderRadius="$1"
      >
        <XStack jc="space-between">
          <XStack ai="center" gap="$2">
            <Image
              alt="avatar"
              width={36}
              height={36}
              src={require('../../../assets/images/avatar.jpeg')}
              borderRadius="$full"
            />
            <YStack>
              <Heading>Jinny Oslin</Heading>
              <Text size="small" color="$grey20">
                2 days ago
              </Text>
            </YStack>
          </XStack>
          <XStack>
            {[...Array(5).keys()].map((_, index) => (
              <StarIcon key={index} />
            ))}
          </XStack>
        </XStack>
        <Text numberOfLines={2} size="small">
          The location was perfect, the house was spacious and clean, and the
          amenities. The location was perfect, the house was spacious and clean,
          and the amenities
        </Text>
      </YStack>
    ),
    []
  );
  return (
    <YStack>
      <XStack jc="space-between">
        <Heading>Reviews</Heading>
        <Text>
          See all <ChevronRightIcon mt={-5} />
        </Text>
      </XStack>
      <Heading size="huge" my="$3">
        4.5<Text>/5</Text>
      </Heading>

      <Carousel
        style={{ width: Metrics.screenWidth }}
        width={290}
        height={130}
        snapEnabled={true}
        data={[...Array(5).keys()]}
        renderItem={renderItem}
      />
      <Separator mx={-20} my="$5" />
    </YStack>
  );
});
