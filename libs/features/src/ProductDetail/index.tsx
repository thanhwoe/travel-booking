'use client';

import { PRODUCT_KEY } from '@shared/constants';
import { IRoom } from '@shared/interfaces';
import {
  Heading,
  Image,
  ImageDetail,
  Invoice,
  Review,
  Text,
} from '@shared/ui/components';
import {
  CalendarIcon,
  GardenIcon,
  HeartIcon,
  HomeIcon,
  KitchenIcon,
  PoolIcon,
  ShareIcon,
  StarIcon,
  WifiIcon,
} from '@shared/ui/icons';
import { User } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';
import { Separator, XStack, YStack } from 'tamagui';

const FACILITIES = [
  {
    label: 'Wifi',
    icon: <WifiIcon />,
  },
  {
    label: 'Kitchen',
    icon: <KitchenIcon />,
  },
  {
    label: 'Pool',
    icon: <PoolIcon />,
  },
  {
    label: 'Garden',
    icon: <GardenIcon />,
  },
];

interface IProps {
  getProductDetailAction: (id: string) => Promise<IRoom>;
  id: string;
  user: User | null;
}

const ProductDetailPage = memo<IProps>(
  ({ getProductDetailAction, id, user }) => {
    const { data } = useQuery({
      queryKey: PRODUCT_KEY.detail(id),
      queryFn: getProductDetailAction.bind(null, id),
    });

    const {
      name,
      description,
      descriptionImage,
      imageUrl = [],
      location,
      review,
      star,
      variants,
    } = data || {};

    return (
      <YStack pb="$24" mt="$7" height={2142}>
        <Heading size="huge" style={{ width: 'fit-content' }}>
          {name}
        </Heading>
        <XStack jc="space-between">
          <XStack h={22}>
            <StarIcon mt={2} />
            <Text size="small">
              <Text fontWeight="bold">{star}</Text>
              <Text color="$grey10">({review} reviews)</Text> • {location}
            </Text>
          </XStack>
          <XStack gap="$4" h={22}>
            <XStack ai="center">
              <ShareIcon width="$3" height="$3" />
              <Text size="small"> Share</Text>
            </XStack>
            <XStack ai="center">
              <HeartIcon width="$3" height="$3" />
              <Text size="small"> Save</Text>
            </XStack>
          </XStack>
        </XStack>
        <ImageDetail data={imageUrl} />

        <XStack gap="$16">
          <YStack flexBasis="65%" flexShrink={1}>
            <Heading size="large">Overview</Heading>
            <XStack mt="$5" mb="$4" ai="center">
              <HomeIcon color="$primary10" />
              <Text fontWeight="bold">
                {variants?.map((item, idx) => {
                  const last = idx === variants.length - 1;
                  return ` ${item}${last ? '' : ' •'}`;
                })}
              </Text>
            </XStack>
            <XStack mb="$10">
              <CalendarIcon color="$red10" />
              <Text fontWeight="bold"> Free cancellation for 48 hours</Text>
            </XStack>
            <Image
              alt={name + ' description'}
              src={descriptionImage || ''}
              width={550}
              height={310}
            />
            <Text numberOfLines={4} mt="$5">
              {description}
            </Text>
            <Separator my="$9" />
            <Heading size="large">This place offers</Heading>
            <YStack mt="$5">
              {FACILITIES.map((item) => (
                <XStack key={item.label} my="$2" gap="$2">
                  {item.icon}
                  <Text>{item.label}</Text>
                </XStack>
              ))}
            </YStack>
          </YStack>
          <XStack
            style={{
              height: 'fit-content',
            }}
            flexBasis="35%"
            flexShrink={1}
          >
            <Invoice data={data} user={user} />
          </XStack>
        </XStack>
        <Separator my="$9" />
        <YStack>
          <XStack ai="center">
            <StarIcon />
            <Text fontWeight="bold" size="extraLarge">
              {star}
            </Text>
            <Text size="extraLarge" color="$grey10">
              ({review} reviews)
            </Text>
          </XStack>
          <XStack flexWrap="wrap" jc="space-between" rowGap="$10">
            {[...Array(4).keys()].map((_, index) => (
              <Review key={index} />
            ))}
          </XStack>
        </YStack>
      </YStack>
    );
  }
);
export default ProductDetailPage;
