import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackParamList } from '../interfaces';
import { StatusBar } from 'react-native';
import { SCREENS } from '../constants';
import { HomeScreen, LoginScreen } from '../screens';
import BootSplash from 'react-native-bootsplash';
import { useEffect } from 'react';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

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
