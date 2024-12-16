import { Button, Heading, Text } from '@shared/ui/components';
import { ChevronRightIcon, ClockIcon } from '@shared/ui/icons';
import { memo } from 'react';
import { Separator, YStack } from 'tamagui';

export const Policies = memo(() => {
  return (
    <YStack>
      <Heading mb="$2">Policies</Heading>
      <YStack backgroundColor="$grey70" p="$3" borderRadius="$1">
        <Text fontWeight="bold" mb="$3">
          House rules
        </Text>
        <Text size="small">
          <ClockIcon width="$4" height="$4" mt={-3} />
          Earliest check-in time: 14:00
        </Text>
        <Text size="small" mt="$2">
          <ClockIcon width="$4" height="$4" mt={-3} />
          Lastest check-out time: 12:00
        </Text>
      </YStack>
      <Heading mb="$1">Checkin policies</Heading>
      <Text numberOfLines={2} size="small">
        It's always a good idea to confirm the check-in policy directly with the
        owner/manager before your arrival so that you can so that you can
      </Text>
      <Button variant="outline" mt="$3">
        View more <ChevronRightIcon color="$grey10" mt={-2} />
      </Button>
      <Separator mx={-20} my="$5" />
    </YStack>
  );
});
