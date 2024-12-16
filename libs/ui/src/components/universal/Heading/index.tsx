'use client';

import { Heading as HeadingBase, styled } from 'tamagui';

export const Heading = styled(HeadingBase, {
  color: '$text',
  fontWeight: 'bold',
  variants: {
    size: {
      small: {
        fontSize: '$3',
        lineHeight: 20,
      },
      medium: {
        fontSize: '$4',
        lineHeight: 26,
      },
      large: {
        fontSize: '$5',
        lineHeight: 30,
      },
      huge: {
        fontSize: '$6',
        lineHeight: 36,
      },
    },
  } as const,

  defaultVariants: {
    size: 'medium',
  },
});
