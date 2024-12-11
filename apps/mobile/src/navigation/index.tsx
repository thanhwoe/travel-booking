import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackParamList } from '../interfaces';
import { StatusBar } from 'react-native';
import { LoginScreen, SignupScreen } from '../screens';
import BootSplash from 'react-native-bootsplash';
import { BottomTabNavigator } from './bottom-tab';
import { SCREENS } from '@shared/constants';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppStack.Navigator
        initialRouteName={SCREENS.LOGIN}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          orientation: 'portrait_up',
        }}
      >
        <AppStack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
        <AppStack.Screen name={SCREENS.SIGN_UP} component={SignupScreen} />
        <AppStack.Screen
          name={SCREENS.ROOT_TAB}
          component={BottomTabNavigator}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
