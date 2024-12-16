import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductStackParamList } from '../interfaces';
import { ProductDetailScreen } from '../screens';
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
    </Stack.Navigator>
  );
};
