import { IRoom } from '@shared/interfaces';
import { memo } from 'react';
import { Button, styled, XStack, YStack } from 'tamagui';
import { ImageSlider } from '../ImageSlider';
import { Text } from '../Text';
import { HeartIcon, StarIcon } from '../../../icons';
import { Metrics } from '../../../themes';

interface IProps {
  data: IRoom;
  onPress?: (id: string) => void;
}

const FavoriteButton = styled(Button, {
  backgroundColor: 'white',
  borderRadius: '$full',
  alignItems: 'center',
  ac: 'center',
  pos: 'absolute',
  top: '$3',
  right: '$3.5',
  h: 36,
  w: 36,
});

export const CardItem = memo<IProps>(({ data, onPress }) => {
  const { id, imageUrl, name, price, star, type } = data || {};

  return (
    <YStack mb="$6" mx="$5" onPress={onPress?.bind(null, id)}>
      <ImageSlider
        style={{
          borderRadius: 8,
        }}
        data={imageUrl}
        width={Metrics.screenWidth - 20 * 2}
      />
      <XStack jc="space-between" mt="$4">
        <Text fontWeight="bold">{name}</Text>
        <Text>
          <StarIcon width="$3" height="$3" /> {star}
        </Text>
      </XStack>
      <XStack jc="space-between">
        <Text color="$grey10">{type}</Text>
        <Text>
          <Text fontWeight="bold">${price}</Text>/night
        </Text>
      </XStack>
      <FavoriteButton>
        <HeartIcon />
      </FavoriteButton>
    </YStack>
  );
});
