'use client';

import { Separator, XStack, YStack } from 'tamagui';
import { Button, InputController, Text } from '../../universal';
import { StarIcon } from '../../../icons';
import { useForm } from 'react-hook-form';
import { IInvoiceForm } from '@shared/interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { invoiceSchema } from '@shared/constants';
import { memo, useMemo } from 'react';
import { getNumberOfDays } from '@shared/utils';

const PRICE = 96;
const FEES = 12;

export const Invoice = memo(() => {
  const { control, handleSubmit, watch } = useForm<IInvoiceForm>({
    resolver: zodResolver(invoiceSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });
  const handleSubmitForm = (data: IInvoiceForm) => {
    console.log({ data });
  };

  const [startDate, endDate] = watch(['startDate', 'endDate']);

  const numberOfDays = useMemo(
    () => getNumberOfDays(startDate, endDate),
    [endDate, startDate]
  );

  const totalPrice = useMemo(() => {
    const raw = numberOfDays * PRICE;

    return {
      raw,
      total: raw - FEES > 0 ? raw - FEES : 0,
    };
  }, [numberOfDays]);

  return (
    <YStack
      f={1}
      p="$6"
      shadowColor="$black"
      shadowOpacity={0.2}
      shadowRadius={16}
      borderRadius="$2"
    >
      <XStack jc="space-between">
        <Text size="extraLarge">
          <Text size="extraLarge" fontWeight="bold">
            ${PRICE}
          </Text>
          /night
        </Text>
        <XStack ai="center">
          <StarIcon />
          <Text fontWeight="bold">4.8</Text>
        </XStack>
      </XStack>
      <XStack jc="space-between" mt="$7" flexWrap="wrap">
        <InputController<IInvoiceForm>
          control={control}
          name="startDate"
          label="Check in"
          placeholder="mm/dd/yyyy"
        />
        <InputController<IInvoiceForm>
          control={control}
          name="endDate"
          label="Check out"
          placeholder="mm/dd/yyyy"
        />
      </XStack>
      <InputController<IInvoiceForm>
        control={control}
        name="guest"
        label="Guests"
        placeholder="guests"
      />

      <YStack mt="$10" gap="$2" mb="$4">
        <XStack jc="space-between">
          <Text>
            ${PRICE} x {numberOfDays} nights
          </Text>

          <Text>${totalPrice.raw}</Text>
        </XStack>
        <XStack jc="space-between">
          <Text>Service fee</Text>

          <Text>${FEES}</Text>
        </XStack>
        <Separator />
        <XStack jc="space-between">
          <Text fontWeight="bold">Total (USD)</Text>
          <Text fontWeight="bold">${totalPrice.total}</Text>
        </XStack>
      </YStack>
      <Button onPress={() => handleSubmit(handleSubmitForm)()}>Reserve</Button>
      <Text textAlign="center" mt="$3">
        You won't be charged yet
      </Text>
    </YStack>
  );
});
