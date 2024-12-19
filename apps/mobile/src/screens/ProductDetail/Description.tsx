import { IRoom } from '@shared/interfaces';
import { Button, Heading, Text } from '@shared/ui/components';
import { ChevronRightIcon } from '@shared/ui/icons';
import { memo } from 'react';
import { Image, YStack } from 'tamagui';

interface IProps {
  data: IRoom;
}

export const Description = memo<IProps>(({ data }) => {
  return (
    <YStack gap="$3">
      <Heading>Description</Heading>
      <Image src={data?.descriptionImage} w={350} h={210} />
      <Text numberOfLines={3} size="small">
        {data?.description}
      </Text>
      <Button variant="outline" mt="$3">
        View more <ChevronRightIcon color="$grey10" mt={-2} />
      </Button>
    </YStack>
  );
});
