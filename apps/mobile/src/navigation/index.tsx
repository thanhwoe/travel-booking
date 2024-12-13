import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackParamList } from '../interfaces';
import { StatusBar } from 'react-native';
import { LoginScreen, SignupScreen } from '../screens';
import { BottomTabNavigator } from './bottom-tab';
import { SCREENS } from '@shared/constants';
import { useAuthStore } from '@shared/stores';
import { HomeNavigator } from './home-stack';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  const user = useAuthStore.use.user();

  const isAuthenticated = Boolean(user);

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <AppStack.Navigator
        initialRouteName={SCREENS.LOGIN}
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          orientation: 'portrait_up',
        }}
      >
        {isAuthenticated ? (
          <>
            <AppStack.Screen
              name={SCREENS.ROOT_TAB}
              component={BottomTabNavigator}
            />
            <AppStack.Screen
              name={SCREENS.HOME_STACK}
              component={HomeNavigator}
            />
          </>
        ) : (
          <>
            <AppStack.Screen name={SCREENS.SIGN_UP} component={SignupScreen} />
            <AppStack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
          </>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
