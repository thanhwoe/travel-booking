'use client';

import { memo } from 'react';
import { YStack } from 'tamagui';
import { useForm } from 'react-hook-form';
import { ISignInForm } from '@shared/interfaces';
import { Heading } from '../Heading';
import { Button } from '../Button';
import { InputController } from '../InputController';
import { PhoneInputController } from '../PhoneInputController';
import { FORM_RULES } from '@shared/constants';

export const SignInForm = memo(() => {
  const { control, handleSubmit, reset } = useForm<ISignInForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSignIn = (data: ISignInForm) => {
    console.log(data);
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
        rules={FORM_RULES.phoneNumber}
      />

      <InputController<ISignInForm>
        control={control}
        name="password"
        label="Password"
        secureTextEntry
        rules={FORM_RULES.password}
      />
      <Button
        mt="$4"
        variant="CTA"
        onPress={() => handleSubmit(handleSignIn)()}
      >
        Continue
      </Button>
    </YStack>
  );
});
