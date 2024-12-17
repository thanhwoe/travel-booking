import { useHeaderHeight } from '@react-navigation/elements';
import { StarIcon } from '@shared/ui/icons';
import { ScrollView, Separator, View, XStack, YStack } from 'tamagui';
import { Button, Heading, Image, Text } from '@shared/ui/components';
import { Preview } from './Preview';
import { TripOption } from './TripOption';
import { PaymentOption } from './PaymentOption';
import { FC, useMemo, useState } from 'react';
import { getNumberOfDays } from '@shared/utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProductStackScreenProps } from '../../interfaces';
import { SCREENS } from '@shared/constants';

const PRICE = 90;
const FEE = 12;

type CheckoutOrderScreenProps = ProductStackScreenProps<
  typeof SCREENS.CHECKOUT_ORDER
>;
export const CheckoutOrderScreen: FC<CheckoutOrderScreenProps> = ({
  navigation: { navigate },
}) => {
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
  });
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const numberOfDays = useMemo(
    () => getNumberOfDays(dates.startDate, dates.endDate),
    [dates.endDate, dates.startDate]
  );

  const totalPrice = useMemo(() => {
    const raw = numberOfDays * PRICE;

    return {
      raw,
      total: raw - FEE > 0 ? raw - FEE : 0,
    };
  }, [numberOfDays]);

  const handleBookOrder = () => {
    navigate(SCREENS.CHECKOUT_STATUS, {
      status: 'success',
      amount: totalPrice.total,
    });
  };

  return (
    <View pt={headerHeight + 26} backgroundColor="$white" f={1}>
      <ScrollView showsVerticalScrollIndicator={false} px="$5">
        <Preview />
        <TripOption onChangeDate={setDates} />
        <PaymentOption />

        <YStack gap="$2" pb="$6">
          <Heading size="large">Price details</Heading>
          <XStack jc="space-between">
            <Text>
              ${PRICE} * {numberOfDays} nights
            </Text>
            <Text fontWeight="bold">${totalPrice.raw}</Text>
          </XStack>
          <XStack jc="space-between">
            <Text>Service fee</Text>
            <Text fontWeight="bold">${FEE}</Text>
          </XStack>
          <Separator />
          <XStack jc="space-between">
            <Text fontWeight="bold">Total (USD)</Text>
            <Text fontWeight="bold">${totalPrice.total}</Text>
          </XStack>
        </YStack>
      </ScrollView>
      <XStack
        px="$5"
        backgroundColor="$white"
        pb={insets.bottom}
        borderColor="$grey50"
        pt="$4.5"
        borderTopWidth="$px"
      >
        <Button onPress={handleBookOrder}>Book now</Button>
      </XStack>
    </View>
  );
};
