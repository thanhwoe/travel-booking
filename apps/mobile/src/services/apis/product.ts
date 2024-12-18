import { useInfiniteQuery } from '@tanstack/react-query';
import { getListProductAction } from '../product';
import { PRODUCT_KEY } from '@shared/constants';

export const useGetListProduct = () => {
  const { isFetchingNextPage, data, hasNextPage, fetchNextPage, ...rest } =
    useInfiniteQuery({
      queryKey: PRODUCT_KEY.all(),
      queryFn: ({ pageParam }) => getListProductAction(pageParam),
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
