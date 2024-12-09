'use client';

import { Heading as HeadingBase, styled } from 'tamagui';

export const Heading = styled(HeadingBase, {
  color: '$text',
  fontWeight: 'bold',
  variants: {
    size: {
      medium: {
        fontSize: '$4',
        lineHeight: 26,
      },
    },
  } as const,

  defaultVariants: {
    size: 'medium',
  },
});
