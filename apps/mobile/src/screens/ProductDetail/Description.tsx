import { Button, Heading, Text } from '@shared/ui/components';
import { ChevronRightIcon } from '@shared/ui/icons';
import { memo } from 'react';
import { Image, YStack } from 'tamagui';

export const Description = memo(() => {
  return (
    <YStack gap="$3">
      <Heading>Description</Heading>
      <Image
        src={
          'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
        w={350}
        h={210}
      />
      <Text numberOfLines={3} size="small">
        Looking for the perfect place to relax and unwind? This stunning
        Balinese villa is the ultimate tropical getaway. Located on a quiet
        street just minutes from the beach, this It's always a good idea to
        confirm the check-in policy directly with the owner/manager before your
        arrival so that you can so that you can
      </Text>
      <Button variant="outline" mt="$3">
        View more <ChevronRightIcon color="$grey10" mt={-2} />
      </Button>
    </YStack>
  );
});
