import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getListProductAction, getProductDetailAction } from '../product';
import { PRODUCT_KEY } from '@shared/constants';
import { IListProductQuery } from '../../interfaces';

export const useGetListProduct = (query: IListProductQuery) => {
  const { isFetchingNextPage, data, hasNextPage, fetchNextPage, ...rest } =
    useInfiniteQuery({
      queryKey: PRODUCT_KEY.all(1, query),
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
