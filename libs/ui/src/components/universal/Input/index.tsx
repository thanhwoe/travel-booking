'use client';

import { ReactNode, Ref, forwardRef, memo, useMemo, useState } from 'react';
import {
  GetProps,
  Input as InputBase,
  TamaguiElement,
  styled,
  GetRef,
  Stack,
} from 'tamagui';

// Components
import { EyeOnIcon, EyeOffIcon } from '../../../icons';

const StyledStack = styled(Stack, {
  borderWidth: '$px',
  borderColor: '$grey30',
  borderRadius: '$1',
  overflow: 'hidden',
  justifyContent: 'center',
  '$platform-native': {
    paddingVertical: '$2',
  },
});

const StyledIconWrapper = styled(Stack, {
  padding: 0,
  position: 'absolute',
  '$platform-native': {
    top: '50%',
  },
});

const StyledInput = styled(InputBase, {
  backgroundColor: 'transparent',
  flexGrow: 1,
  selectionColor: 'black',
  placeholderTextColor: '$grey30',
  textOverflow: 'ellipsis',
  fontSize: '$4.5',
  borderWidth: '$0',
  height: 'auto',
  paddingHorizontal: '$5',
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
  containerStyle?: GetProps<typeof Stack>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
}

const InputComponent = forwardRef<TamaguiElement, InputProps>(
  (
    {
      isInvalid,
      secureTextEntry,
      containerStyle,
      leftIcon,
      rightIcon,
      onPressRightIcon,
      onPressLeftIcon,
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
      <Stack flexGrow={1}>
        <StyledStack {...containerStyle}>
          <StyledInput {...inputProps} secureTextEntry={isHide} />
          {!rightIcon && secureTextEntry && (
            <StyledIconWrapper right={15} onPress={onPressSecureIcon}>
              {isHide ? <EyeOnIcon /> : <EyeOffIcon />}
            </StyledIconWrapper>
          )}
          {rightIcon && (
            <StyledIconWrapper right={15} onPress={onPressRightIcon}>
              {rightIcon}
            </StyledIconWrapper>
          )}
          {leftIcon && (
            <StyledIconWrapper left={15} onPress={onPressLeftIcon}>
              {leftIcon}
            </StyledIconWrapper>
          )}
        </StyledStack>
      </Stack>
    );
  }
);

export const Input = memo(InputComponent);
