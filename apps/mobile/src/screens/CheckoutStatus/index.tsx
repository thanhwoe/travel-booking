import { Separator, View, XStack, YStack } from 'tamagui';
import { ProductStackScreenProps } from '../../interfaces';
import { SCREENS } from '@shared/constants';
import { FC } from 'react';
import { Button, Heading, Text } from '@shared/ui/components';
import { getFormattedTime } from '@shared/utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type CheckoutStatusScreenProps = ProductStackScreenProps<
  typeof SCREENS.CHECKOUT_STATUS
>;
export const CheckoutStatusScreen: FC<CheckoutStatusScreenProps> = ({
  route: { params },
  navigation: { navigate },
}) => {
  const { status, amount } = params;
  const insets = useSafeAreaInsets();
  const currentDate = new Date();

  const handlePressDone = () => {
    navigate(SCREENS.ROOT_TAB);
  };
  return (
    <View f={1} px="$5">
      <YStack
        backgroundColor="$white"
        borderRadius="$2"
        borderWidth="$px"
        borderColor="$grey50"
        px="$3"
        py="$8"
        mt="50%"
      >
        <Heading size="extraHuge" mb="$6" textAlign="center">
          Payment {status}!
        </Heading>
        <XStack jc="space-between" mb="$2">
          <Text>Ref number</Text>
          <Text fontWeight="bold">00000072697027</Text>
        </XStack>
        <XStack jc="space-between" mb="$2">
          <Text>Date</Text>
          <Text fontWeight="bold">
            {currentDate.toISOString().split('T')[0]}
          </Text>
        </XStack>
        <XStack jc="space-between" mb="$2">
          <Text>Time</Text>
          <Text fontWeight="bold">{getFormattedTime(currentDate)}</Text>
        </XStack>
        <XStack jc="space-between" mb="$2">
          <Text>Payment method</Text>
          <Text fontWeight="bold">Credit card</Text>
        </XStack>
        <Separator my="$3" mx={-20} />
        <XStack jc="space-between" mb="$8">
          <Text>Amount</Text>
          <Text fontWeight="bold">${amount ?? 0}</Text>
        </XStack>
        <Button variant="outline">Get PDF receipt</Button>
      </YStack>
      <Button mt="auto" mb={insets.bottom} onPress={handlePressDone}>
        Done
      </Button>
    </View>
  );
};
