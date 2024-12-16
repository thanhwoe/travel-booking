'use client';

import { memo } from 'react';
import { XStack, YStack } from 'tamagui';
import { Heading, Image, Text } from '../../universal';

export const Review = memo(() => {
  return (
    <YStack gap="$3.5" p="$3" flexBasis="50%">
      <XStack jc="space-between">
        <XStack ai="center" gap="$2">
          <Image
            alt="avatar"
            width={44}
            height={44}
            src={'/assets/images/avatar.jpeg'}
            style={{ borderRadius: '100%' }}
          />
          <YStack>
            <Heading>Jinny Oslin</Heading>
            <Text size="small" color="$grey20">
              2 days ago
            </Text>
          </YStack>
        </XStack>
      </XStack>
      <Text numberOfLines={2} maxWidth={504}>
        The location was perfect, the house was spacious and clean, and the
        amenities. The location was perfect, the house was spacious and clean,
        and the amenities
      </Text>
    </YStack>
  );
});
