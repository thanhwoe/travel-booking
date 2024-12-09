'use client';

import { memo } from 'react';
import { Token, YStack, getTokenValue } from 'tamagui';
import { useForm } from 'react-hook-form';
import { ISignUpForm } from '@shared/interfaces';
import { PhoneInputController } from '../PhoneInputController';
import { Heading } from '../Heading';
import { Button } from '../Button';
import { Text } from '../Text';

const SOCIAL_AUTH = [
  {
    label: 'Continue with Apple',
    color: '$text',
  },
  {
    label: 'Continue with Facebook',
    color: '$blue10',
  },
  {
    label: 'Continue with Google',
    color: '$red10',
  },
];

export const SignUpForm = memo(() => {
  const { control, handleSubmit, reset } = useForm<ISignUpForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });
  return (
    <YStack>
      <Heading size="large" mb={50}>
        Create an account
      </Heading>
      <PhoneInputController<ISignUpForm> control={control} name="phoneNumber" />
      <Button mt="$4" variant="CTA">
        Continue
      </Button>
      <Text mx="auto" my="$3">
        or
      </Text>
      <YStack gap="$2">
        {SOCIAL_AUTH.map((i) => (
          <Button
            variant="outline"
            key={i.label}
            h={52}
            borderColor={getTokenValue(i.color as Token)}
            color={getTokenValue(i.color as Token)}
          >
            {i.label}
          </Button>
        ))}
      </YStack>
    </YStack>
  );
});
