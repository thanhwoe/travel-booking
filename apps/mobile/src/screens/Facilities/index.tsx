import { useHeaderHeight } from '@react-navigation/elements';
import { Heading, Text } from '@shared/ui/components';
import { GardenIcon, KitchenIcon, PoolIcon, WifiIcon } from '@shared/ui/icons';
import { ScrollView, XStack, YStack } from 'tamagui';

const OPTIONS = [
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

const SERVICES = {
  cleaning: [
    {
      label: 'Washer',
      icon: <PoolIcon />,
    },
    {
      label: 'Free dryer - In unit',
      icon: <PoolIcon />,
    },
    {
      label: 'Iron',
      icon: <GardenIcon />,
    },
  ],
  bath: [
    {
      label: 'Bathtub',
      icon: <PoolIcon />,
    },
    {
      label: 'Hair dryer',
      icon: <PoolIcon />,
    },
  ],
};

export const FacilitiesScreen = () => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView pt={headerHeight + 26} backgroundColor="$white" f={1} px="$5">
      <Heading size="huge">Facilities</Heading>
      <XStack mt="$3" mb="$6">
        {OPTIONS.map((item) => (
          <Text key={item.label} px="$2" py="$1.5">
            {item.value} {item.label}
          </Text>
        ))}
      </XStack>
      <YStack mb="$6">
        {FACILITIES.map((item) => (
          <XStack
            key={item.label}
            gap="$2"
            borderBottomWidth="$px"
            borderColor="$grey50"
            p="$3"
          >
            {item.icon}
            <Text>{item.label}</Text>
          </XStack>
        ))}
      </YStack>
      <Heading size="huge">Services</Heading>
      <Text fontWeight="bold" mt="$3">
        Cleaning & laundry
      </Text>
      <YStack>
        {SERVICES.cleaning.map((item) => (
          <XStack
            key={item.label}
            gap="$2"
            borderBottomWidth="$px"
            borderColor="$grey50"
            p="$3"
          >
            {item.icon}
            <Text>{item.label}</Text>
          </XStack>
        ))}
      </YStack>
      <Text fontWeight="bold" mt="$3">
        Bathroom
      </Text>
      <YStack>
        {SERVICES.bath.map((item) => (
          <XStack
            key={item.label}
            gap="$2"
            borderBottomWidth="$px"
            borderColor="$grey50"
            p="$3"
          >
            {item.icon}
            <Text>{item.label}</Text>
          </XStack>
        ))}
      </YStack>
    </ScrollView>
  );
};
