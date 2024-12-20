import { IRoom } from '@shared/interfaces';
import {
  CardItem,
  FilterPopup,
  SearchInput,
  TabHeading,
} from '@shared/ui/components';
import { BeachIcon, MountainIcon, CampingIcon } from '@shared/ui/icons';
import { FC, useCallback, useMemo, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, YStack } from 'tamagui';
import { RootTabScreenProps } from '../../interfaces';
import { SCREENS } from '@shared/constants';
import { displayDate } from '@shared/utils';
import { useGetListProduct } from '../../services/apis/product';
const TABS = [
  {
    value: 'all',
    label: 'All',
    icon: BeachIcon,
  },
  {
    value: 'hotel',
    label: 'Hotel',
    icon: MountainIcon,
  },
  {
    value: 'apartment',
    label: 'Apartment',
    icon: CampingIcon,
  },
];
type HomeScreenProps = RootTabScreenProps<typeof SCREENS.HOME>;

export const HomeScreen: FC<HomeScreenProps> = ({
  navigation: { navigate, setParams },
  route,
}) => {
  const insets = useSafeAreaInsets();

  const { params } = route;
  const { filters } = params || {};

  const [tab, setTab] = useState(TABS[0].value);
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const { data, fetchNextPage, isRefetching, refetch } = useGetListProduct({
    type: tab,
    price: filters?.price,
  });

  const searchDisplay = useMemo(() => {
    if (!filters) return '';
    const { location, dates, guests } = filters || {};
    return `${location}, ${displayDate(
      dates?.startDate,
      dates?.endDate
    )}, ${guests} guests`;
  }, [filters]);

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

  const handleApplyFilter = (f: {
    place: number[];
    facility: number[];
    price: number[];
  }) => {
    setParams({
      filters: {
        ...filters,
        price: f.price,
      },
    });
  };

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
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
        onEndReached={fetchNextPage}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
      />

      <FilterPopup
        open={isOpenFilters}
        onOpenChange={setIsOpenFilters}
        onApply={handleApplyFilter}
      />
    </YStack>
  );
};
