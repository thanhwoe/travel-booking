'use client';

import { memo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { generatePagination } from '@shared/utils';
import { XStack, XStackProps } from 'tamagui';
import { PaginationArrow } from './arrow';
import { PaginationNumber } from './number';

interface IProps extends XStackProps {
  totalPages: number;
}

export const Pagination = memo<IProps>(({ totalPages, ...props }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <XStack ai="center" mx="auto" {...props}>
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      {allPages.map((page) => {
        let position: 'single' | 'middle' | undefined;
        if (allPages.length === 1) position = 'single';
        if (page === '...') position = 'middle';
        return (
          <PaginationNumber
            key={page}
            href={createPageURL(page)}
            page={page}
            position={position}
            isActive={currentPage === page}
          />
        );
      })}

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </XStack>
  );
});
