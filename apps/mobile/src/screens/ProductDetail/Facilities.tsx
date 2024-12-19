import { useNavigation } from '@react-navigation/native';
import { Button, Heading, Text } from '@shared/ui/components';
import { GardenIcon, KitchenIcon, PoolIcon, WifiIcon } from '@shared/ui/icons';
import { memo } from 'react';
import { Separator, XStack, YStack } from 'tamagui';
import { ProductStackParamList } from '../../interfaces';
import { SCREENS } from '@shared/constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRoom } from '@shared/interfaces';

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
  data: IRoom;
}

export const Facilities = memo<IProps>(({ data }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProductStackParamList>>();

  const handleOpen = () => {
    navigation.navigate(SCREENS.PRODUCT_FACILITIES);
  };

  return (
    <YStack>
      <Heading>Facilities & services</Heading>
      <XStack>
        {data?.variants.map((item) => (
          <Text key={item} px="$2" py="$1.5">
            {item}
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
      <Button variant="outline" mt="$5" onPress={handleOpen}>
        Show all
      </Button>
      <Separator mx={-20} my="$5" />
    </YStack>
  );
});
