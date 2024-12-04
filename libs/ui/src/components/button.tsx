'use client';

import { ComponentProps } from 'react';
import { GestureResponderEvent } from 'react-native';

import { Button as TButton, styled } from 'tamagui';

export const ButtonBase = styled(TButton, {});

interface ButtonProps extends ComponentProps<typeof ButtonBase> {
  isLoading?: boolean;
}

export const Button = ButtonBase.styleable<ButtonProps>(
  ({ isLoading, disabled, onPress, ...props }, ref) => {
    const handlePress = (event: GestureResponderEvent) => {
      event.persist();
      requestAnimationFrame(() => onPress?.(event));
    };
    const isDisabled = isLoading || disabled;

    return (
      <ButtonBase
        ref={ref}
        onPress={handlePress}
        disabled={isDisabled}
        {...props}
      />
    );
  }
);
