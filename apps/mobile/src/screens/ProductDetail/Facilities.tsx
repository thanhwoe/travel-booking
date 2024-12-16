import { Button, Heading, Text } from '@shared/ui/components';
import { GardenIcon, KitchenIcon, PoolIcon, WifiIcon } from '@shared/ui/icons';
import { memo } from 'react';
import { Separator, XStack, YStack } from 'tamagui';

const DATA = [
  {
    label: 'Guests',
    value: 2,
  },
  {
    label: 'Bedrooms',
    value: 2,
  },
  { label: 'Beds', value: 2 },
  { label: 'Bathrooms', value: 2 },
];

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

export const Facilities = memo(() => {
  return (
    <YStack>
      <Heading>Facilities & services</Heading>
      <XStack>
        {DATA.map((item) => (
          <Text key={item.label} px="$2" py="$1.5">
            {item.value} {item.label}
          </Text>
        ))}
      </XStack>
      <YStack>
        {FACILITIES.map((item) => (
          <XStack key={item.label} my="$2" gap="$2">
            {item.icon}
            <Text>{item.label}</Text>
          </XStack>
        ))}
      </YStack>
      <Button variant="outline" mt="$5">
        Show all
      </Button>
      <Separator mx={-20} my="$5" />
    </YStack>
  );
});
