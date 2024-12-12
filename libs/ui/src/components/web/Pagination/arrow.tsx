'use client';
import { memo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../../../icons';
import Link from 'next/link';

interface IPaginationArrowProps {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}
export const PaginationArrow = memo<IPaginationArrowProps>(
  ({ direction, href, isDisabled }) => {
    const Icon = direction === 'left' ? ChevronLeftIcon : ChevronRightIcon;
    return isDisabled ? (
      <Icon color="$grey10" />
    ) : (
      <Link href={href}>
        <Icon />
      </Link>
    );
  }
);
