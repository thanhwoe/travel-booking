'use client';

import { Text as TextBase, styled } from 'tamagui';

export const Text = styled(TextBase, {
  color: '$text',
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

      extraMedium: {
        fontSize: '$3.75',
        lineHeight: 24,
      },

      large: {
        fontSize: '$4.5',
        lineHeight: 28,
      },

      extraLarge: {
        fontSize: '$5',
        lineHeight: 30,
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
