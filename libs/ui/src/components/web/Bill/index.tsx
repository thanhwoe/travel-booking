'use client';

import { memo, useMemo } from 'react';
import { Separator, XStack, YStack } from 'tamagui';
import { Heading, Image, Text } from '../../universal';
import { StarIcon } from '../../../icons';
import { useCheckoutStore } from '@shared/stores';
import { getNumberOfDays } from '@shared/utils';

const FEES = 12;

export const Bill = memo(() => {
  const order = useCheckoutStore.use.order();
  const { checkIn, checkOut, room, totalPrice } = order || {};

  const numberOfDays = useMemo(
    () => getNumberOfDays(checkIn, checkOut),
    [checkIn, checkOut]
  );

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
          <Image alt="product" fill src={room?.imageUrl[0] || ''} />
        </XStack>
        <YStack>
          <Text size="small">
            {room?.type} in {room?.location}
          </Text>
          <Heading>{room?.name}</Heading>
          <Separator w={70} my="$3" />
          <Text size="small">6 guests • 4 beds • 1 private bath</Text>
          <XStack mt="auto">
            <StarIcon mt={2} />
            <Text fontWeight="bold">{room?.star}</Text>
            <Text color="$grey10">({room?.review} reviews)</Text>
          </XStack>
        </YStack>
      </XStack>
      <Heading size="large" mt="$6" mb="$4">
        Price details
      </Heading>

      <YStack gap="$2" mb="$4">
        <XStack jc="space-between">
          <Text>
            ${room?.price} x {numberOfDays} nights
          </Text>

          <Text>${room?.price || 0 * numberOfDays}</Text>
        </XStack>
        <XStack jc="space-between">
          <Text>Service fee</Text>

          <Text>${FEES}</Text>
        </XStack>
        <Separator />
        <XStack jc="space-between">
          <Text fontWeight="bold">Total (USD)</Text>
          <Text fontWeight="bold">${totalPrice}</Text>
        </XStack>
      </YStack>
    </YStack>
  );
});
