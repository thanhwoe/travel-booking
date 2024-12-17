import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductStackParamList } from '../interfaces';
import {
  CheckoutOrderScreen,
  CheckoutStatusScreen,
  FacilitiesScreen,
  ProductDetailScreen,
} from '../screens';
import { SCREENS } from '@shared/constants';
import { BackHeader } from '../components';

const Stack = createNativeStackNavigator<ProductStackParamList>();

export const ProductNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        options={{ header: BackHeader }}
        name={SCREENS.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
      <Stack.Screen
        options={{ header: BackHeader, title: 'Facilities & services' }}
        name={SCREENS.PRODUCT_FACILITIES}
        component={FacilitiesScreen}
      />
      <Stack.Screen
        options={{ header: BackHeader, title: 'Confirm and pay' }}
        name={SCREENS.CHECKOUT_ORDER}
        component={CheckoutOrderScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={SCREENS.CHECKOUT_STATUS}
        component={CheckoutStatusScreen}
      />
    </Stack.Navigator>
  );
};
