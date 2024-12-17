import { Heading, Text } from '@shared/ui/components';
import { memo } from 'react';
import { RadioGroup, Separator, XStack, YStack } from 'tamagui';

export const PaymentOption = memo(() => {
  return (
    <YStack gap="$3">
      <Heading size="large">Payment options</Heading>
      <RadioGroup>
        <XStack jc="space-between" ai="center">
          <YStack>
            <Text fontWeight="bold">Pay in full</Text>
            <Text color="$grey10">Pay $30 now to finalize your booking.</Text>
          </YStack>
          <RadioGroup.Item value="pay-full" size="$10">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        </XStack>
        <XStack jc="space-between" ai="center">
          <YStack>
            <Text fontWeight="bold">Pay a part now</Text>
            <Text color="$grey10" numberOfLine={2}>
              You can make a partial payment now and the remaining amount at a
              later time.
            </Text>
          </YStack>
          <RadioGroup.Item value="pay-part" size="$10">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        </XStack>
      </RadioGroup>
      <Separator my="$6" />
    </YStack>
  );
});
