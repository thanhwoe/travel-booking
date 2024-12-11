import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../interfaces';
import {
  BookingsScreen,
  FavoritesScreen,
  InboxScreen,
  ProfileScreen,
} from '../screens';
import { HomeNavigator } from './home-stack';
import { SCREENS } from '@shared/constants';
import { TabBar } from '@shared/ui/components';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={SCREENS.HOME_STACK}
      backBehavior="history"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen name={SCREENS.HOME_STACK} component={HomeNavigator} />
      <BottomTab.Screen name={SCREENS.FAVORITES} component={FavoritesScreen} />
      <BottomTab.Screen name={SCREENS.BOOKINGS} component={BookingsScreen} />
      <BottomTab.Screen name={SCREENS.INBOX} component={InboxScreen} />
      <BottomTab.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};
