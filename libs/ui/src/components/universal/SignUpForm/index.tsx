'use client';

import { memo, useTransition } from 'react';
import { Token, YStack, getTokenValue } from 'tamagui';
import { useForm } from 'react-hook-form';
import { PhoneInputController } from '../PhoneInputController';
import { Heading } from '../Heading';
import { Button } from '../Button';
import { Text } from '../Text';
import { AppleIcon, FacebookIcon, GoogleIcon } from '../../../icons';
import { InputController } from '../InputController';
import { signUpSchema } from '@shared/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { ISignUpForm } from '@shared/interfaces';

const SOCIAL_AUTH = [
  {
    label: 'Continue with Apple',
    color: '$text',
    icon: <AppleIcon />,
  },
  {
    label: 'Continue with Facebook',
    color: '$blue10',
    icon: <FacebookIcon />,
  },
  {
    label: 'Continue with Google',
    color: '$red10',
    icon: <GoogleIcon />,
  },
];

interface IProps {
  onSubmit: (data: ISignUpForm) => void;
}

export const SignUpForm = memo<IProps>(({ onSubmit }) => {
  const [isPending, startTransition] = useTransition();

  const { control, handleSubmit } = useForm<ISignUpForm>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSubmitForm = (data: ISignUpForm) => {
    startTransition(() => {
      onSubmit(data);
    });
  };

  return (
    <YStack>
      <Heading size="large" mb={50}>
        Create an account
      </Heading>
      <PhoneInputController<ISignUpForm>
        control={control}
        label="Enter your mobile number:"
        name="phoneNumber"
      />
      <InputController<ISignUpForm>
        control={control}
        name="password"
        label="Password"
        secureTextEntry
      />
      <Button
        mt="$4"
        variant="CTA"
        isLoading={isPending}
        onPress={() => handleSubmit(handleSubmitForm)()}
      >
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
            leftIcon={i.icon}
          >
            {i.label}
          </Button>
        ))}
      </YStack>
      <YStack alignItems="center" mx="auto" mt="$6">
        <Text size="small" color="$grey10">
          By signing up, you agree to our
        </Text>
        <Text size="small" color="$grey10">
          <Text size="small" textDecorationLine="underline" color="$grey10">
            Terms of Service
          </Text>{' '}
          and{' '}
          <Text size="small" textDecorationLine="underline" color="$grey10">
            Privacy Policy.
          </Text>
        </Text>
      </YStack>
    </YStack>
  );
});
