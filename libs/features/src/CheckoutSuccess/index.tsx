'use client';

import { useCheckoutStore } from '@shared/stores';
import { Heading, Image, Text } from '@shared/ui/components';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@shared/ui/icons';
import { displayDate } from '@shared/utils';
import { notFound } from 'next/navigation';
import { Separator, XStack, YStack } from 'tamagui';

const CheckoutSuccessPage = () => {
  const order = useCheckoutStore.use.order();
  const { checkIn, checkOut, room, totalPrice } = order || {};
  if (!order) {
    notFound();
  }

  return (
    <YStack ai="center" jc="center" pb="$20">
      <Image
        width={260}
        height={244}
        src="/assets/images/luggage.svg"
        alt="img"
      />
      <Heading size="extraHuge">All done, you're going to travel!</Heading>
      <YStack w={512} gap="$3" mt="$14">
        <XStack gap="$2">
          <CalendarIcon color="$primary10" />
          <Text>
            {displayDate(checkIn?.toString() || '', checkOut?.toString() || '')}
          </Text>
        </XStack>
        <XStack gap="$2">
          <MapPinIcon color="$red10" />
          <Text>{room?.location}</Text>
        </XStack>
        <XStack gap="$2">
          <ClockIcon />
          <Text>Check-in: {checkIn?.toLocaleString()}</Text>
        </XStack>
        <XStack gap="$2">
          <ClockIcon />
          <Text>Check out: {checkOut?.toLocaleString()}</Text>
        </XStack>
        <Separator my="$6" />
        <XStack jc="space-between">
          <Text>Amount paid (USD)</Text>
          <Text>${totalPrice}</Text>
        </XStack>
        <XStack jc="space-between">
          <Text>Reservation code</Text>
          <Text>{room?.id}</Text>
        </XStack>
      </YStack>
    </YStack>
  );
};

export default CheckoutSuccessPage;
