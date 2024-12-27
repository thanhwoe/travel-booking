'use client';

import { memo } from 'react';
import { IRoom } from '@shared/interfaces';
import { XStack, YStack, Separator } from 'tamagui';
import { ImageSlider } from '../ImageSlider';
import { Text } from '../Text';
import { HeartIcon, StarIcon } from '../../../icons';
import { Heading } from '../Heading';

interface IProps {
  data: IRoom;
  onPress?: (id: string) => void;
  onPressFavorite?: (id: string) => void;
}

export const CardItem = memo<IProps>(({ data, onPress, onPressFavorite }) => {
  const {
    amenities,
    id,
    imageUrl,
    name,
    price,
    review,
    location,
    star,
    type,
    variants,
    isFavorite,
  } = data || {};

  return (
    <XStack $gtLg={{ width: 840 }}>
      <ImageSlider data={imageUrl} id={id} />

      <YStack ml="$2.5" flexGrow={1}>
        <XStack jc="space-between">
          <Text size="small" mb="$0.5">
            {type} in {location}
          </Text>
          <HeartIcon
            onPress={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onPressFavorite?.(id);
            }}
            {...(isFavorite && { color: '$red10' })}
          />
        </XStack>
        <Heading>{name}</Heading>
        <Separator w={56} mt="$3" mb="$2" />
        <XStack>
          {variants.map((variant, index) => (
            <Text key={variant} size="tiny" color="$grey20">
              {variant}
              {variants.length - 1 !== index && ' • '}
            </Text>
          ))}
        </XStack>
        <XStack>
          {amenities.map((variant, index) => (
            <Text key={variant} size="tiny" color="$grey20">
              {variant}
              {amenities.length - 1 !== index && ' • '}
            </Text>
          ))}
        </XStack>
        <XStack mt="auto" justifyContent="space-between">
          <XStack>
            <StarIcon />
            <Text fontWeight="bold" size="small">
              {star}
            </Text>
            <Text size="small" color="$grey10">
              ({review} reviews)
            </Text>
          </XStack>
          <Text>
            <Text fontWeight="bold">${price}</Text>/night
          </Text>
        </XStack>
      </YStack>
    </XStack>
  );
});
