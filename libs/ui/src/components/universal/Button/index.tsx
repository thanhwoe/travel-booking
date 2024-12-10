'use client';

import { ComponentProps, ReactNode } from 'react';
import { GestureResponderEvent } from 'react-native';

import {
  Text,
  XStack,
  createStyledContext,
  styled,
  withStaticProperties,
  GetThemeValueForKey,
} from 'tamagui';

const ButtonContext = createStyledContext({
  variant: 'primary',
  disabled: null,
  color: null,
});

const ButtonBase = styled(XStack, {
  context: ButtonContext,
  tag: 'button',
  cursor: 'pointer',

  height: 44,
  width: '$full',
  borderWidth: 0,
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$1.5',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary10',
        borderRadius: '$2',

        pressStyle: {
          backgroundColor: '$primary30',
        },

        hoverStyle: {
          backgroundColor: '$primary40',
        },

        disabledStyle: {
          cursor: 'not-allowed',
          opacity: 0.4,
        },
      },

      secondary: {
        backgroundColor: '$primary20',
        borderRadius: '$2',

        pressStyle: {
          backgroundColor: '$primary60',
        },

        hoverStyle: {
          backgroundColor: '$primary50',
        },

        disabledStyle: {
          cursor: 'not-allowed',
          opacity: 0.4,
        },
      },
      CTA: {
        h: '$13',
        backgroundColor: '$primary10',
        borderRadius: '$1',

        pressStyle: {
          backgroundColor: '$primary30',
        },

        hoverStyle: {
          backgroundColor: '$primary40',
        },

        disabledStyle: {
          cursor: 'not-allowed',
          opacity: 0.4,
        },
      },

      outline: {
        minHeight: '$9',
        borderWidth: '$px',
        backgroundColor: '$white',
        borderRadius: '$1',
        gap: '$2',
        borderColor: '$grey10',

        disabledStyle: {
          cursor: 'not-allowed',
          opacity: 0.4,
        },
      },
    },
  } as const,

  defaultVariants: {
    variant: 'primary',
  },
});

const ButtonText = styled(Text, {
  context: ButtonContext,
  fontSize: '$4',
  fontWeight: '400',
  lineHeight: 26,
  variants: {
    variant: {
      primary: {
        color: '$white',
      },
      secondary: {
        color: '$primary10',
      },
      CTA: {
        color: '$white',
        fontSize: '$4.5',
        lineHeight: '$7',
      },
      outline: {
        fontSize: '$4.5',
        lineHeight: '$7',
        color: '$grey10',
      },
    },
  } as const,
});

const ButtonIcon = styled(
  Text,
  {
    context: ButtonContext,
    asChild: true,
    width: '$5',
    height: '$5',
    variants: {
      variant: {
        primary: {
          color: '$white',
        },
        secondary: {},
        CTA: {
          width: '$6',
          height: '$6',
        },
        outline: {
          width: '$4',
          height: '$4',
        },
      },
    },
  },
  {
    inlineProps: new Set(['width', 'height', 'color', 'disabled']),
    accept: { color: 'color' } as const,
  }
);

const StyledButton = withStaticProperties(ButtonBase, {
  Text: ButtonText,
  Icon: ButtonIcon,
});

interface ButtonProps extends ComponentProps<typeof ButtonBase> {
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  color?: GetThemeValueForKey<'color'>;
}

export const Button = ButtonBase.styleable<ButtonProps>(
  (
    { isLoading, disabled, onPress, leftIcon, rightIcon, color, ...props },
    ref
  ) => {
    const handlePress = (event: GestureResponderEvent) => {
      event.persist();
      requestAnimationFrame(() => onPress?.(event));
    };
    const isDisabled = isLoading || disabled;

    return (
      <StyledButton
        ref={ref}
        onPress={handlePress}
        disabled={isDisabled}
        {...props}
      >
        {leftIcon && <StyledButton.Icon>{leftIcon}</StyledButton.Icon>}

        <StyledButton.Text disabled={isDisabled} color={color}>
          {props.children}
        </StyledButton.Text>

        {rightIcon && <StyledButton.Icon>{rightIcon}</StyledButton.Icon>}
      </StyledButton>
    );
  }
);
