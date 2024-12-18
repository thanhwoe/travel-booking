'use client';

import { Separator, YStack } from 'tamagui';
import { memo, Suspense } from 'react';
import { CardItem, Pagination, Text } from '@shared/ui/components';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { IRoom } from '@shared/interfaces';
import { ITEMS_PER_PAGE, PRODUCT_KEY } from '@shared/constants';

interface IProps {
  getListProductAction: (
    page: number,
    query?: Record<string, string>
  ) => Promise<{
    data: IRoom[];
    count: number | null;
  }>;
  currentPage: number;
  query: Record<string, string>;
}

export const HomePage = memo<IProps>(
  ({ getListProductAction, currentPage, query }) => {
    const { data: response } = useQuery({
      queryKey: PRODUCT_KEY.all(currentPage, query),
      queryFn: () => getListProductAction(currentPage, query),
    });

    const { count = 0, data = [] } = response || {};

    return (
      <YStack>
        {data.length > 0 ? (
          <YStack>
            {data.map((item, index) => (
              <YStack key={item.id}>
                <Link href={`/room/${item.id}`}>
                  <CardItem data={item} />
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
