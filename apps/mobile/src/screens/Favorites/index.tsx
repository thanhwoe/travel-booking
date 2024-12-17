import { IRoom, RoomType } from '@shared/interfaces';
import { CardItem, Heading } from '@shared/ui/components';
import { View } from 'tamagui';
import { RootTabScreenProps } from '../../interfaces';
import { SCREENS } from '@shared/constants';
import { FC, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const mockData: IRoom[] = [
  {
    id: '1',
    name: 'Superior Family Room',
    caption: 'Hotel room in Ueno',
    description: 'Superior Family Room',
    imageUrl: [],
    variants: ['6 guest', '4 beds', '1 baths'],
    amenities: ['Free WiFi', 'Air conditioning', 'Kitchen'],
    star: 4.85,
    price: 200,
    reviews: 20,
    favorite: false,
    type: RoomType.APARTMENT,
  },
  {
    id: '2',
    name: 'Superior Family Room',
    caption: 'Hotel room in Ueno',
    description: 'Superior Family Room',
    imageUrl: [],
    variants: ['6 guest', '4 beds', '1 baths'],
    amenities: ['Free WiFi', 'Air conditioning', 'Kitchen'],
    star: 4.85,
    price: 200,
    reviews: 20,
    favorite: false,
    type: RoomType.APARTMENT,
  },
  {
    id: '4',
    name: 'Superior Family Room',
    caption: 'Hotel room in Ueno',
    description: 'Superior Family Room',
    imageUrl: [],
    variants: ['6 guest', '4 beds', '1 baths'],
    amenities: ['Free WiFi', 'Air conditioning', 'Kitchen'],
    star: 4.85,
    price: 200,
    reviews: 20,
    favorite: false,
    type: RoomType.APARTMENT,
  },
  {
    id: '15',
    name: 'Superior Family Room',
    caption: 'Hotel room in Ueno',
    description: 'Superior Family Room',
    imageUrl: [],
    variants: ['6 guest', '4 beds', '1 baths'],
    amenities: ['Free WiFi', 'Air conditioning', 'Kitchen'],
    star: 4.85,
    price: 200,
    reviews: 20,
    favorite: false,
    type: RoomType.APARTMENT,
  },
  {
    id: '6',
    name: 'Superior Family Room',
    caption: 'Hotel room in Ueno',
    description: 'Superior Family Room',
    imageUrl: [],
    variants: ['6 guest', '4 beds', '1 baths'],
    amenities: ['Free WiFi', 'Air conditioning', 'Kitchen'],
    star: 4.85,
    price: 200,
    reviews: 20,
    favorite: false,
    type: RoomType.APARTMENT,
  },
];
type FavoritesScreenProps = RootTabScreenProps<typeof SCREENS.FAVORITES>;

export const FavoritesScreen: FC<FavoritesScreenProps> = ({
  navigation: { navigate },
}) => {
  const insets = useSafeAreaInsets();

  const renderItem = useCallback(({ item }: { item: IRoom }) => {
    const handleOpen = (id: string) => {
      navigate(SCREENS.HOME_STACK, {
        screen: SCREENS.PRODUCT_STACK,
        params: {
          screen: SCREENS.PRODUCT_DETAIL,
          params: {
            id,
          },
        },
      });
    };
    return <CardItem data={item} onPress={handleOpen} />;
  }, []);

  return (
    <View pt={insets.top} f={1} backgroundColor="$white">
      <Heading size="huge" px="$5" mb="$6" mt="$4.5">
        Places you liked
      </Heading>
      <FlatList
        data={mockData}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
      />
    </View>
  );
};
