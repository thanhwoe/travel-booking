'use client';

import { ReactNode, Ref, forwardRef, memo, useMemo, useState } from 'react';
import {
  GetProps,
  Input as InputBase,
  TamaguiElement,
  styled,
  GetRef,
  Text,
  Stack,
  Button,
} from 'tamagui';

// Components
import { EyeOnIcon, EyeOffIcon } from '../../../icons';

const StyledIconWrapper = styled(Button, {
  padding: 0,
  bottom: '50%',

  // transform: [{ translateY: '50%' }],
  position: 'absolute',
  backgroundColor: 'transparent',
  hoverStyle: {
    backgroundColor: 'transparent',
  },
  focusStyle: {
    backgroundColor: 'transparent',
  },
});

const StyledInput = styled(InputBase, {
  backgroundColor: 'transparent',

  borderColor: '$grey30',
  placeholderTextColor: '$grey30',
  textOverflow: 'ellipsis',
  fontSize: '$4.5',
  lineHeight: 28,
  borderWidth: '$px',
  height: 'auto',
  paddingHorizontal: '$5',
  borderRadius: '$1',
  '$platform-native': {
    height: 'auto',
  },

  hoverStyle: {
    borderColor: '$grey40',
  },
  focusStyle: {
    borderColor: '$grey10',
    outlineWidth: '$0',
  },
  variants: {
    variant: {
      error: {
        borderColor: '$red10',
        focusStyle: {
          borderColor: '$red10',
        },
      },
    },
  },
});

interface InputProps extends GetProps<typeof StyledInput> {
  isInvalid?: boolean;
  errorMessage?: string;
  containerStyle?: GetProps<typeof Stack>;
  leftIcon?: ReactNode;
  onPressRightIcon?: () => void;
}

const InputComponent = forwardRef<TamaguiElement, InputProps>(
  (
    {
      isInvalid,
      errorMessage,
      secureTextEntry,
      containerStyle,
      leftIcon,
      onPressRightIcon,
      ...props
    },
    ref
  ) => {
    const [isHide, setIsHide] = useState(secureTextEntry);

    const inputProps = useMemo(
      () => ({
        ...props,
        ...(isInvalid && {
          variant: 'error',
        }),

        ...(!!leftIcon && {
          paddingLeft: 50,
        }),

        ...(secureTextEntry && {
          paddingRight: 50,
        }),
        ref: ref as Ref<GetRef<typeof InputBase>>,
      }),
      [isInvalid, leftIcon, props, ref, secureTextEntry]
    );

    const onPressSecureIcon = () => setIsHide((pre) => !pre);

    return (
      <>
        <Stack {...containerStyle}>
          <StyledInput {...inputProps} secureTextEntry={isHide} />
          {secureTextEntry && (
            <StyledIconWrapper right={15} onPress={onPressSecureIcon}>
              {isHide ? <EyeOnIcon /> : <EyeOffIcon />}
            </StyledIconWrapper>
          )}
          {leftIcon && (
            <StyledIconWrapper left={15} onPress={onPressRightIcon}>
              {leftIcon}
            </StyledIconWrapper>
          )}
        </Stack>
        {errorMessage && (
          <Text color="$red10" mt="$2" fontSize="$3.5" fontWeight="400">
            {errorMessage}
          </Text>
        )}
      </>
    );
  }
);

export const Input = memo(InputComponent);
