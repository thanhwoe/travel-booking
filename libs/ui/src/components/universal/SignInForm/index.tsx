'use client';

import { memo, useTransition } from 'react';
import { YStack } from 'tamagui';
import { useForm } from 'react-hook-form';
import { ISignInForm } from '@shared/interfaces';
import { Heading } from '../Heading';
import { Button } from '../Button';
import { InputController } from '../InputController';
import { PhoneInputController } from '../PhoneInputController';
import { signInSchema } from '@shared/constants';
import { zodResolver } from '@hookform/resolvers/zod';

interface IProps {
  onSubmit: (data: ISignInForm) => void;
}

export const SignInForm = memo<IProps>(({ onSubmit }) => {
  const [isPending, startTransition] = useTransition();

  const { control, handleSubmit } = useForm<ISignInForm>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSubmitForm = (data: ISignInForm) => {
    startTransition(() => {
      onSubmit(data);
    });
  };

  return (
    <YStack>
      <Heading size="large" mb={50}>
        Login
      </Heading>

      <PhoneInputController<ISignInForm>
        control={control}
        name="phoneNumber"
        label="Phone number"
      />

      <InputController<ISignInForm>
        control={control}
        name="password"
        label="Password"
        secureTextEntry
      />
      <Button
        isLoading={isPending}
        mt="$4"
        variant="CTA"
        onPress={() => handleSubmit(handleSubmitForm)()}
      >
        Continue
      </Button>
    </YStack>
  );
});
