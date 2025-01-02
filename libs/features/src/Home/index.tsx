'use client';

import { Separator, YStack } from 'tamagui';
import { memo, Suspense } from 'react';
import { CardItem, Pagination, Text, Toast } from '@shared/ui/components';
import Link from 'next/link';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IRoom } from '@shared/interfaces';
import { ITEMS_PER_PAGE, PRODUCT_KEY } from '@shared/constants';
import { User } from '@supabase/supabase-js';

interface IProps {
  getListProductAction: (
    page: number,
    query?: Record<string, string>
  ) => Promise<{
    data: IRoom[];
    count: number | null;
  }>;
  favoriteProductAction?: (id: string) => Promise<string>;
  currentPage: number;
  query: Record<string, any>;
  user: User | null;
}

const HomePage = memo<IProps>(
  ({
    getListProductAction,
    currentPage,
    query,
    favoriteProductAction,
    user,
  }) => {
    const queryClient = useQueryClient();
    const queryKey = PRODUCT_KEY.list(currentPage, query);

    const { data: response } = useQuery({
      queryKey,
      queryFn: () => getListProductAction(currentPage, query),
    });

    const { mutate: favoriteProduct } = useMutation({
      mutationFn: favoriteProductAction,
      onMutate: async (id: string) => {
        await queryClient.cancelQueries({ queryKey });

        const previous = queryClient.getQueryData(queryKey);

        queryClient.setQueryData(
          queryKey,
          (oldData: { data: IRoom[]; count: number }) => ({
            ...oldData,
            data: oldData.data.map((i) =>
              i.id === id ? { ...i, isFavorite: !i.isFavorite } : i
            ),
          })
        );

        return { previous };
      },
      onError: (_, __, context) => {
        if (context?.previous) {
          queryClient.setQueryData(queryKey, context.previous);
        }
      },

      onSettled: () => {
        queryClient.invalidateQueries({ queryKey });
      },
    });

    const handleFavorite = (id: string) => {
      if (!user) {
        return Toast.error({
          message: 'Please login to favorite',
          title: 'Sign in first',
        });
      }

      favoriteProduct(id);
    };

    const { count = 0, data = [] } = response || {};
    return (
      <YStack>
        {data.length > 0 ? (
          <YStack>
            {data.map((item, index) => (
              <YStack key={item.id}>
                <Link href={`/room/${item.id}`}>
                  <CardItem data={item} onPressFavorite={handleFavorite} />
                </Link>
                {data.length - 1 !== index && <Separator my="$6" />}
              </YStack>
            ))}
            {!!count && (
              <Suspense>
                <Pagination
                  totalPages={Math.ceil(Number(count) / ITEMS_PER_PAGE)}
                  mt="$12"
                  mb="$24"
                />
              </Suspense>
            )}
          </YStack>
        ) : (
          <Text $gtLg={{ w: 840 }} textAlign="center" fontWeight="bold">
            No result found!
          </Text>
        )}
      </YStack>
    );
  }
);

export default HomePage;
