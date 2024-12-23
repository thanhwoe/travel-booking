import { IRoom } from '@shared/interfaces';
import { CardItem, Heading } from '@shared/ui/components';
import { View } from 'tamagui';
import { RootTabScreenProps } from '../../interfaces';
import { SCREENS } from '@shared/constants';
import { FC, useCallback } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  useFavoriteProduct,
  useGetListFavoriteProduct,
} from '../../services/apis/product';

type FavoritesScreenProps = RootTabScreenProps<typeof SCREENS.FAVORITES>;

export const FavoritesScreen: FC<FavoritesScreenProps> = ({
  navigation: { navigate },
}) => {
  const insets = useSafeAreaInsets();

  const { data, fetchNextPage, isRefetching, refetch } =
    useGetListFavoriteProduct();

  const { mutate: onFavoriteProduct } = useFavoriteProduct();

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
    return (
      <CardItem
        data={item}
        onPress={handleOpen}
        onPressFavorite={onFavoriteProduct}
      />
    );
  }, []);

  return (
    <View pt={insets.top} f={1} backgroundColor="$white">
      <Heading size="huge" px="$5" mb="$6" mt="$4.5">
        Places you liked
      </Heading>
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
    </View>
  );
};
