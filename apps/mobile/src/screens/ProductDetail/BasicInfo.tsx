import { IRoom } from '@shared/interfaces';
import { Heading, Text } from '@shared/ui/components';
import { ChevronRightIcon, MapPinIcon, StarIcon } from '@shared/ui/icons';
import { memo } from 'react';
import { Separator, XStack, YStack } from 'tamagui';

interface IProps {
  data: IRoom;
}

export const BasicInfo = memo<IProps>(({ data }) => {
  return (
    <YStack>
      <Heading size="large">{data?.name}</Heading>
      <Text>
        <MapPinIcon width="$4" height="$4" color="$primary10" />{' '}
        {data?.location}
      </Text>

      <XStack
        jc="space-between"
        ai="center"
        backgroundColor="$grey70"
        px="$3"
        py="$4.5"
        mt="$3"
        borderRadius="$1"
      >
        <Text>
          <StarIcon mt={-2} /> {data?.star}/5
        </Text>
        <Text>
          ({data?.review} reviews)
          <ChevronRightIcon width="$5" height="$5" mt={-2} />
        </Text>
      </XStack>
      <Separator mx={-20} my="$5" />
    </YStack>
  );
});
