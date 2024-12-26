import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  favoriteProductAction,
  getListFavoriteProductAction,
  getListProductAction,
  getProductDetailAction,
} from '../product';
import { PRODUCT_KEY } from '@shared/constants';
import { IListProductQuery } from '../../interfaces';
import { IRoom } from '@shared/interfaces';

export const useGetListProduct = (query?: IListProductQuery) => {
  const { isFetchingNextPage, data, hasNextPage, fetchNextPage, ...rest } =
    useInfiniteQuery({
      queryKey: PRODUCT_KEY.list(1, query),
      queryFn: ({ pageParam }) => getListProductAction(pageParam, query),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage || lastPage.length === 0) return undefined;

        return allPages.length + 1;
      },
    });
  return {
    data: data?.pages.flat() || [],
    isLoadingBreathings: isFetchingNextPage,
    fetchNextPage: () => hasNextPage && fetchNextPage(),
    ...rest,
  };
};

export const useGetProductDetail = (id: string) => {
  return useQuery({
    queryKey: PRODUCT_KEY.detail(id),
    queryFn: () => getProductDetailAction(id),
  });
};

export const useFavoriteProduct = (query?: IListProductQuery) => {
  const queryClient = useQueryClient();

  const queryKey = PRODUCT_KEY.list(1, query);

  return useMutation({
    mutationFn: favoriteProductAction,
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey });
      const previous = queryClient.getQueryData(queryKey);

      queryClient.setQueryData<InfiniteData<IRoom[]>>(queryKey, (oldData) => {
        const newData = oldData?.pages.map((page) =>
          page.map((item) =>
            item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
          )
        );
        return {
          ...oldData,
          pages: newData,
        };
      });

      return { previous };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: PRODUCT_KEY.lists() });
    },
  });
};

export const useGetListFavoriteProduct = () => {
  const { isFetchingNextPage, data, hasNextPage, fetchNextPage, ...rest } =
    useInfiniteQuery({
      queryKey: PRODUCT_KEY.list(1, 'favorite'),
      queryFn: ({ pageParam }) => getListFavoriteProductAction(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage || lastPage.length === 0) return undefined;

        return allPages.length + 1;
      },
    });

  return {
    data: data?.pages.flat() || [],
    isLoadingBreathings: isFetchingNextPage,
    fetchNextPage: () => hasNextPage && fetchNextPage(),
    ...rest,
  };
};
