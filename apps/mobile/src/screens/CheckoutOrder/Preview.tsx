import { IRoom } from '@shared/interfaces';
import { Image, Text } from '@shared/ui/components';
import { StarIcon } from '@shared/ui/icons';
import { memo } from 'react';
import { XStack, YStack } from 'tamagui';

interface IProps {
  data: IRoom;
}
export const Preview = memo<IProps>(({ data }) => {
  return (
    <XStack
      jc="space-between"
      borderWidth="$px"
      borderColor="$grey50"
      borderRadius="$1"
      py="$4"
      px="$3"
    >
      <YStack jc="space-between">
        <Text size="large">
          <Text fontWeight="bold" size="large">
            ${data?.price}
          </Text>
          /night
        </Text>
        <Text>{data.name}</Text>
        <Text>
          <StarIcon />
          {data.star} ({data.review})
        </Text>
      </YStack>
      <Image alt="img" width={100} height={100} src={data.imageUrl[0]} />
    </XStack>
  );
});
