'use client';

import { Heading, Text } from '@shared/ui/components';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@shared/ui/icons';
import Image from 'next/image';
import { Separator, XStack, YStack } from 'tamagui';

export default function Index() {
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
          <Text>July 17 - 21, 2024</Text>
        </XStack>
        <XStack gap="$2">
          <MapPinIcon color="$red10" />
          <Text>1234 Higashiasakusa, Taito City, Tokyo, Japan</Text>
        </XStack>
        <XStack gap="$2">
          <ClockIcon />
          <Text>Check-in: after 2PM</Text>
        </XStack>
        <XStack gap="$2">
          <ClockIcon />
          <Text>Check out: 11AM</Text>
        </XStack>
        <Separator my="$6" />
        <XStack jc="space-between">
          <Text>Amount paid (USD)</Text>
          <Text>$50</Text>
        </XStack>
        <XStack jc="space-between">
          <Text>Reservation code</Text>
          <Text>HMNK55PBZK</Text>
        </XStack>
      </YStack>
    </YStack>
  );
}
