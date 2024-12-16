import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../interfaces';
import { SearchScreen } from '../screens';
import { SCREENS } from '@shared/constants';
import { CloseHeader } from '../components';
import { ProductNavigator } from './product-stack';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        options={{ header: CloseHeader }}
        name={SCREENS.SEARCH}
        component={SearchScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={SCREENS.PRODUCT_STACK}
        component={ProductNavigator}
      />
    </Stack.Navigator>
  );
};
