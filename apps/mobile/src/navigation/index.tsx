import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackParamList } from '../interfaces';
import { StatusBar } from 'react-native';
import { SCREENS } from '../constants';
import { HomeScreen, LoginScreen } from '../screens';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <AppStack.Navigator
        initialRouteName={SCREENS.HOME}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          orientation: 'portrait_up',
        }}
      >
        <AppStack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <AppStack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
