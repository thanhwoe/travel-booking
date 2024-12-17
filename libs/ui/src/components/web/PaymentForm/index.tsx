'use client';

import { Separator, XStack, YStack } from 'tamagui';
import { Button, Checkbox, InputController, Text } from '../../universal';
import { useForm } from 'react-hook-form';
import { IPaymentForm } from '@shared/interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { paymentSchema } from '@shared/constants';
import { memo } from 'react';

export const PaymentForm = memo(() => {
  const { control, handleSubmit } = useForm<IPaymentForm>({
    resolver: zodResolver(paymentSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });
  const handleSubmitForm = (data: IPaymentForm) => {
    console.log({ data });
  };

  return (
    <YStack gap="$4">
      <InputController<IPaymentForm>
        control={control}
        name="cardNumber"
        placeholder="Card number"
      />
      <InputController<IPaymentForm>
        control={control}
        name="cardHolder"
        placeholder="Card holder"
      />
      <XStack gap="$4">
        <InputController<IPaymentForm>
          control={control}
          name="expDate"
          placeholder="Expiration date"
          containerStyle={{
            f: 1,
          }}
        />
        <InputController<IPaymentForm>
          control={control}
          name="cvv"
          placeholder="CVV"
          containerStyle={{
            f: 1,
          }}
        />
      </XStack>
      <XStack gap="$2">
        <Checkbox />
        <Text>Save my card for future reservation</Text>
      </XStack>
      <Separator />
      <Text numberOfLines={2}>
        By selecting the button below, I agree to the Property Rules, Terms and
        Conditions, Privacy Policy and COVID-19 Safety Requirements.
      </Text>
      <Button onPress={() => handleSubmit(handleSubmitForm)()}>
        Confirm and pay
      </Button>
    </YStack>
  );
});
