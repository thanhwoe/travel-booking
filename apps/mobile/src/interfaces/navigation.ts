import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { SCREENS } from '@shared/constants';
import { ISearchFilter } from '@shared/interfaces';

// App Stack
export type AppStackParamList = {
  [SCREENS.LOGIN]: undefined;
  [SCREENS.SIGN_UP]: undefined;
  [SCREENS.ROOT_TAB]: NavigatorScreenParams<RootTabParamList> | undefined;
  [SCREENS.HOME_STACK]: NavigatorScreenParams<HomeStackParamList> | undefined;
};
export type AppStackScreenProps<Screen extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, Screen>;

// Root Tab
export type RootTabParamList = {
  [SCREENS.HOME]: undefined | { filters: ISearchFilter };
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
  [SCREENS.SEARCH]: undefined;
  [SCREENS.PRODUCT_STACK]:
    | NavigatorScreenParams<ProductStackParamList>
    | undefined;
};
export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, Screen>,
    NativeStackScreenProps<AppStackParamList>
  >;

// Product Stack
export type ProductStackParamList = {
  [SCREENS.PRODUCT_DETAIL]: {
    id: string;
  };
  [SCREENS.PRODUCT_FACILITIES]: {
    id: string;
  };
  [SCREENS.CHECKOUT_ORDER]: {
    id: string;
  };
  [SCREENS.CHECKOUT_STATUS]: {
    status: 'success' | 'failed';
    amount: number;
  };
};
export type ProductStackScreenProps<
  Screen extends keyof ProductStackParamList
> = CompositeScreenProps<
  NativeStackScreenProps<ProductStackParamList, Screen>,
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList>,
    NativeStackScreenProps<AppStackParamList>
  >
>;
