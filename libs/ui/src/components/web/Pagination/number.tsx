'use client';

import { memo } from 'react';
import { Text } from '../../universal';
import Link from 'next/link';
import { Stack } from 'tamagui';

interface IPaginationNumberProps {
  page: number | string;
  href: string;
  position?: 'middle' | 'single';
  isActive: boolean;
}
export const PaginationNumber = memo<IPaginationNumberProps>(
  ({ href, isActive, page, position }) => {
    const active = isActive || position === 'single';

    return position === 'middle' ? (
      <Text fontWeight="bold">{page}</Text>
    ) : (
      <Link href={href}>
        <Stack
          w="$8"
          h="$8"
          borderRadius="$full"
          backgroundColor={active ? '$black' : undefined}
          jc="center"
          ai="center"
        >
          <Text color={active ? '$white' : undefined} fontWeight="bold">
            {page}
          </Text>
        </Stack>
      </Link>
    );
  }
);
