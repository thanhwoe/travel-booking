import { IRoom, RoomType } from '@shared/interfaces';
import {
  CardItem,
  FilterPopup,
  SearchInput,
  TabHeading,
} from '@shared/ui/components';
import { BeachIcon, MountainIcon, CampingIcon } from '@shared/ui/icons';
import { FC, useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, YStack } from 'tamagui';
import { RootTabScreenProps } from '../../interfaces';
import { SCREENS } from '@shared/constants';
import { displayDate } from '@shared/utils';

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

const TABS = [
  {
    value: 'beach',
    label: 'Beach',
    icon: BeachIcon,
  },
  {
    value: 'mountain',
    label: 'Mountain',
    icon: MountainIcon,
  },
  {
    value: 'camping',
    label: 'Camping',
    icon: CampingIcon,
  },
];
type HomeScreenProps = RootTabScreenProps<typeof SCREENS.HOME>;

export const HomeScreen: FC<HomeScreenProps> = ({
  navigation: { navigate },
  route,
}) => {
  const insets = useSafeAreaInsets();

  const { params } = route;
  const { filters } = params || {};

  const [tab, setTab] = useState(TABS[0].value);
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const searchDisplay = useMemo(() => {
    if (!filters) return '';
    const { location, dates, guests } = filters || {};
    return `${location}, ${displayDate(
      dates?.startDate,
      dates?.endDate
    )}, ${guests} guests`;
  }, [filters]);

  return (
    <YStack backgroundColor="$white" gap="$6" f={1}>
      <View backgroundColor="$primary20">
        <YStack mt={insets.top} px="$5" gap="$3">
          <SearchInput
            placeholder="Where do you want to stay?"
            value={searchDisplay}
            onPress={() => {
              navigate(SCREENS.HOME_STACK, { screen: SCREENS.SEARCH });
            }}
            hasFilter={!!filters}
            onPressRightIcon={setIsOpenFilters.bind(null, true)}
          />
          <TabHeading activeTab={tab} onChangeTab={setTab} tabs={TABS} />
        </YStack>
      </View>

      <FlatList
        data={mockData}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <CardItem data={item} />}
        maxToRenderPerBatch={20}
        initialNumToRender={20}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
      />

      <FilterPopup open={isOpenFilters} onOpenChange={setIsOpenFilters} />
    </YStack>
  );
};
