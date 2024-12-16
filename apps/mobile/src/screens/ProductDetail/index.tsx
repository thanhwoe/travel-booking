import { ScrollView, View, XStack } from 'tamagui';
import { ProductStackScreenProps } from '../../interfaces';
import { SCREENS } from '@shared/constants';
import { FC } from 'react';
import { Button, ImageSlider, Text } from '@shared/ui/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BasicInfo } from './BasicInfo';
import { Facilities } from './Facilities';
import { Reviews } from './Reviews';
import { Policies } from './Policies';
import { Description } from './Description';

type ProductDetailScreenProps = ProductStackScreenProps<
  typeof SCREENS.PRODUCT_DETAIL
>;

export const ProductDetailScreen: FC<ProductDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const { id } = route.params;

  const insets = useSafeAreaInsets();

  return (
    <View pt={insets.top} backgroundColor="$white" f={1}>
      <ImageSlider height={234} />
      <ScrollView px="$5" my="$4">
        <BasicInfo />
        <Facilities />
        <Reviews />
        <Policies />
        <Description />
      </ScrollView>
      <XStack
        px="$5"
        pt="$6"
        pb={insets.bottom}
        borderTopWidth="$px"
        borderColor="$grey60"
        jc="space-between"
      >
        <Text size="small" color="$grey10">
          From: <Text fontWeight="bold">$20</Text>
          <Text>/night</Text>
        </Text>
        <Button w={144}>Book now</Button>
      </XStack>
    </View>
  );
};
