'use client';

import { memo } from 'react';
import { Separator, XStack, YStack } from 'tamagui';
import { Heading, Image, Text } from '../../universal';
import { StarIcon } from '../../../icons';

const PRICE = 96;
const FEES = 12;
const numberOfDays = 2;

export const Bill = memo(() => {
  return (
    <YStack
      f={1}
      style={{
        height: 'fit-content',
      }}
      shadowColor="$black"
      shadowOpacity={0.2}
      shadowRadius={16}
      borderRadius="$2"
      p="$6"
      flexBasis="50%"
    >
      <XStack gap="$3">
        <XStack width={212} height={158} borderRadius="$2" overflow="hidden">
          <Image
            alt="product"
            fill
            src={
              'https://ng.jumia.is/cms/0-5-brand-festival/2023/BF-Slider.jpg'
            }
          />
        </XStack>
        <YStack>
          <Text size="small">Hotel room in Ueno</Text>
          <Heading>Superior Family Room</Heading>
          <Separator w={70} my="$3" />
          <Text size="small">6 guests • 4 beds • 1 private bath</Text>
          <XStack mt="auto">
            <StarIcon mt={2} />
            <Text fontWeight="bold">4.84</Text>
            <Text color="$grey10">(324 reviews)</Text>
          </XStack>
        </YStack>
      </XStack>
      <Heading size="large" mt="$6" mb="$4">
        Price details
      </Heading>

      <YStack gap="$2" mb="$4">
        <XStack jc="space-between">
          <Text>
            ${PRICE} x {numberOfDays} nights
          </Text>

          <Text>$20</Text>
        </XStack>
        <XStack jc="space-between">
          <Text>Service fee</Text>

          <Text>${FEES}</Text>
        </XStack>
        <Separator />
        <XStack jc="space-between">
          <Text fontWeight="bold">Total (USD)</Text>
          <Text fontWeight="bold">$20</Text>
        </XStack>
      </YStack>
    </YStack>
  );
});
