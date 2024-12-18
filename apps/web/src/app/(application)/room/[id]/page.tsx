'use client';

import {
  Heading,
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

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <YStack pb="$24" mt="$7">
      <Heading size="huge">Superior Family Room</Heading>
      <XStack jc="space-between">
        <XStack>
          <StarIcon mt={2} />
          <Text size="small">
            <Text fontWeight="bold">4.5</Text>
            <Text color="$grey10">(12 reviews)</Text> • Taito City, Tokyo, Japan
          </Text>
        </XStack>
        <XStack gap="$4">
          <XStack ai="center">
            <ShareIcon width="$3" height="$3" /> <Text size="small">Share</Text>
          </XStack>
          <XStack ai="center">
            <HeartIcon width="$3" height="$3" /> <Text size="small">Save</Text>
          </XStack>
        </XStack>
      </XStack>
      <ImageDetail />

      <XStack gap="$16">
        <YStack flexBasis="66.66%">
          <Heading size="large">Overview</Heading>
          <XStack mt="$5" mb="$4">
            <HomeIcon color="$primary10" />
            <Text fontWeight="bold"> 6 guests • 4 beds • 1 private bath</Text>
          </XStack>
          <XStack>
            <CalendarIcon color="$red10" />
            <Text fontWeight="bold"> Free cancellation for 48 hours</Text>
          </XStack>
          <Text numberOfLines={4} mt="$5">
            Sunt ut elit cupidatat do quis incididunt sint mollit culpa
            consequat occaecat exercitati anim ad sint adipisicing nulla Sunt ut
            elit cupidatat do quis incididunt sint mollit culpa consequat
            occaecat exercitati anim ad sint adipisicing nulla Sunt ut elit
            cupidatat do quis incididunt sint mollit culpa consequat occaecat
            exercitati anim ad sint adipisicing nulla
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
        <XStack h="auto" flexBasis="33.33%">
          <Invoice />
        </XStack>
      </XStack>
      <Separator my="$9" />
      <YStack>
        <XStack ai="center">
          <StarIcon />
          <Text fontWeight="bold" size="extraLarge">
            4.5
          </Text>
          <Text size="extraLarge" color="$grey10">
            (324 reviews)
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
