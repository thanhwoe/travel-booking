'use client';

import { useCheckoutStore } from '@shared/stores';
import { Bill, Heading, PaymentForm, Text } from '@shared/ui/components';
import { ChevronLeftIcon } from '@shared/ui/icons';
import { displayDate } from '@shared/utils';
import { notFound, useRouter } from 'next/navigation';
import { XStack, YStack } from 'tamagui';

const CheckoutPage = () => {
  const router = useRouter();
  const order = useCheckoutStore.use.order();
  const { checkIn, checkOut, guests } = order || {};

  if (!order) {
    notFound();
  }
  return (
    <YStack pt="$6" pb="$20">
      <XStack ai="center" onPress={router.back} cursor="pointer">
        <ChevronLeftIcon color="$grey10" /> <Text color="$grey10">Back</Text>
      </XStack>
      <Heading size="extraHuge">Confirm and Pay</Heading>

      <XStack mt="$8" gap="$14">
        <YStack f={1} gap="$4" flexBasis="50%">
          <Heading size="large">Your trip</Heading>
          <XStack gap="$5">
            <YStack f={1} backgroundColor="$grey60" borderRadius="$2" p="$3">
              <Text fontWeight="bold">Dates</Text>
              <Text>
                {displayDate(
                  checkIn?.toString() || '',
                  checkOut?.toString() || ''
                )}
              </Text>
            </YStack>
            <YStack f={1} backgroundColor="$grey60" borderRadius="$2" p="$3">
              <Text fontWeight="bold">Guests</Text>
              <Text>{guests} guests</Text>
            </YStack>
          </XStack>

          <Heading size="large">Pay with</Heading>
          <PaymentForm />
        </YStack>
        <Bill />
      </XStack>
    </YStack>
  );
};

export default CheckoutPage;
