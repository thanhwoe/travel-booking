import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../interfaces';
import { HomeScreen } from '../screens';
import { SCREENS } from '@shared/constants';

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
        options={{ headerShown: false }}
        name={SCREENS.HOME}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
