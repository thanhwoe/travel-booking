'use client';

import { ToastProps, ToastRef } from '@shared/interfaces';
import { CloseIcon } from '../../../icons';
import { addNewRef, getRef, removeOldRef } from '@shared/utils';
import {
  Toast as ToastBase,
  ToastViewport,
  useToastController,
  useToastState,
} from '@tamagui/toast';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { XStack, YStack, ViewStyle } from 'tamagui';

const styleMapping: Record<string, ViewStyle> = {
  error: {
    backgroundColor: '#f55c5c',
  },
  warning: {
    backgroundColor: 'orange',
  },
  success: {
    backgroundColor: 'green',
  },
  none: {},
};

const ToastRoot = forwardRef((_, ref) => {
  const { show } = useToastController();
  const state = useToastState();

  useImperativeHandle(
    ref,
    useCallback(
      () => ({
        show,
      }),
      [show]
    )
  );
  if (!state || state.isHandledNatively) return null;

  const { title, id, duration, viewportName, message, burntOptions } = state;
  return (
    <ToastBase
      key={id}
      duration={duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation="quick"
      viewportName={viewportName}
      width="$full"
      {...styleMapping[burntOptions?.haptic || 'none']}
    >
      <XStack gap="$5">
        <YStack>
          <ToastBase.Title color="white" fontWeight="bold">
            {title}
          </ToastBase.Title>
          {message && (
            <ToastBase.Description size="$4" color="white">
              {message}
            </ToastBase.Description>
          )}
        </YStack>
        <ToastBase.Close my="auto">
          <CloseIcon />
        </ToastBase.Close>
      </XStack>
    </ToastBase>
  );
});

export const Toast = () => {
  const toastRef = useRef<ToastRef | null>(null);

  const setRef = useCallback((ref: ToastRef | null) => {
    if (ref) {
      toastRef.current = ref;
      addNewRef(ref);
    } else {
      removeOldRef(toastRef.current);
    }
  }, []);

  return (
    <>
      <ToastViewport
        left={0}
        right={0}
        top="$5"
        $platform-native={{ top: '$15' }}
      />
      <ToastRoot ref={setRef} />
    </>
  );
};

Toast.error = ({ title, message }: ToastProps) => {
  getRef()?.show(title, {
    burntOptions: {
      haptic: 'error',
    },
    message,
  });
};

Toast.warning = ({ title, message }: ToastProps) => {
  getRef()?.show(title, {
    burntOptions: {
      haptic: 'warning',
    },
    message,
  });
};

Toast.success = ({ title, message }: ToastProps) => {
  getRef()?.show(title, {
    burntOptions: {
      haptic: 'success',
    },
    message,
  });
};
