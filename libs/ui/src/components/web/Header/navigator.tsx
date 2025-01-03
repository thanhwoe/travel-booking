'use client';

import {
  createStyledContext,
  styled,
  withStaticProperties,
  XStack,
} from 'tamagui';
import { Text } from '../../universal';

const Context = createStyledContext({
  active: false,
});

const NavigatorFrame = styled(XStack, {
  name: 'Frame',
  context: Context,
  py: 15,
  px: 12,
  variants: {
    active: {
      true: {
        borderBottomColor: '$primary10',
        borderBottomWidth: '$1',
        borderRadius: '$0.5',
      },
    },
  },
});

const NavigatorText = styled(Text, {
  name: 'Text',
  context: Context,
  color: '$grey20',
  variants: {
    active: {
      true: {
        fontWeight: 'bold',

        color: '#0077aa',
      },
    },
  },
  hoverStyle: {
    color: '$primary10',
  },
});

export const Navigator = withStaticProperties(NavigatorFrame, {
  Props: Context.Provider,
  Text: NavigatorText,
});
