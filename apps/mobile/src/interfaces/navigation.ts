import {
  CompositeScreenProps,
  NavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { SCREENS } from '@shared/constants';

// App Stack
export type AppStackParamList = {
  [SCREENS.LOGIN]: undefined;
  [SCREENS.SIGN_UP]: undefined;
  [SCREENS.ROOT_TAB]: NavigatorScreenParams<RootTabParamList> | undefined;
};
export type AppStackScreenProps<Screen extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, Screen>;

// Root Tab
export type RootTabParamList = {
  [SCREENS.HOME_STACK]: NavigatorScreenParams<HomeStackParamList> | undefined;
  [SCREENS.FAVORITES]: undefined;
  [SCREENS.BOOKINGS]: undefined;
  [SCREENS.INBOX]: undefined;
  [SCREENS.PROFILE]: undefined;
};
export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<AppStackParamList>
  >;

// Home Stack
export type HomeStackParamList = {
  [SCREENS.HOME]: undefined;
};
export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, Screen>,
    CompositeScreenProps<
      BottomTabScreenProps<RootTabParamList>,
      NativeStackScreenProps<AppStackParamList>
    >
  >;

export type RootStackParamListNavigation = Record<SCREENS, undefined>;
export type StackNavigation = NavigationProp<RootStackParamListNavigation>;
