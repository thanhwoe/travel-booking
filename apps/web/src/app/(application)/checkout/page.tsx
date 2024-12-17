'use client';

import {
  Bill,
  Button,
  Checkbox,
  Heading,
  Input,
  PaymentForm,
  Text,
} from '@shared/ui/components';
import { ChevronLeftIcon } from '@shared/ui/icons';
import { useRouter } from 'next/navigation';
import { Separator, XStack, YStack } from 'tamagui';

export default function Index() {
  const router = useRouter();
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
              <Text>1-2 July</Text>
            </YStack>
            <YStack f={1} backgroundColor="$grey60" borderRadius="$2" p="$3">
              <Text fontWeight="bold">Guests</Text>
              <Text>1 guests</Text>
            </YStack>
          </XStack>

          <Heading size="large">Pay with</Heading>
          <PaymentForm />
        </YStack>
        <Bill />
      </XStack>
    </YStack>
  );
}
