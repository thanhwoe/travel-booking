import {
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

export const useGetListProduct = (query?: IListProductQuery) => {
  const { isFetchingNextPage, data, hasNextPage, fetchNextPage, ...rest } =
    useInfiniteQuery({
      queryKey: PRODUCT_KEY.list(1, query),
      queryFn: ({ pageParam }) => getListProductAction(pageParam, query),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage?.length ? allPages?.length : undefined;

        return nextPage;
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

export const useFavoriteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: favoriteProductAction,
    onSuccess: () => {
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
        const nextPage = lastPage?.length ? allPages?.length : undefined;

        return nextPage;
      },
    });

  return {
    data: data?.pages.flat() || [],
    isLoadingBreathings: isFetchingNextPage,
    fetchNextPage: () => hasNextPage && fetchNextPage(),
    ...rest,
  };
};
