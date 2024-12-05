'use client';

import { Text as TextBase, styled } from 'tamagui';

export const Text = styled(TextBase, {
  variants: {
    size: {
      tiny: {
        fontSize: '$2.5',
        lineHeight: 16,
      },
      small: {
        fontSize: '$3',
        lineHeight: 20,
      },

      medium: {
        fontSize: '$3.5',
        lineHeight: 22,
      },
      large: {
        fontSize: '$4.5',
        lineHeight: 28,
      },

      huge: {
        fontSize: '$5.75',
        lineHeight: 36,
      },
    },
  } as const,

  defaultVariants: {
    size: 'medium',
  },
});
