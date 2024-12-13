import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  ChatIcon,
  GridIcon,
  HeartIcon,
  ProfileIcon,
  SearchIcon,
  SvgFactoryProps,
} from '../../../icons';
import { FC } from 'react';
import { SCREENS } from '@shared/constants';
import { XStack, YStack } from 'tamagui';
import { Text } from '../../universal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabBarIconMapping: Record<string, FC<SvgFactoryProps>> = {
  [SCREENS.HOME]: SearchIcon,
  [SCREENS.FAVORITES]: HeartIcon,
  [SCREENS.BOOKINGS]: GridIcon,
  [SCREENS.INBOX]: ChatIcon,
  [SCREENS.PROFILE]: ProfileIcon,
};

const LabelMapping: Record<string, string> = {
  [SCREENS.HOME]: 'Home',
  [SCREENS.FAVORITES]: 'Favorites',
  [SCREENS.BOOKINGS]: 'Bookings',
  [SCREENS.INBOX]: 'Inbox',
  [SCREENS.PROFILE]: 'Profile',
};

export const TabBar: FC<BottomTabBarProps> = ({
  navigation,
  state,
  descriptors,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <XStack
      alignItems="flex-start"
      justifyContent="space-between"
      borderTopWidth="$px"
      backgroundColor="$white"
      borderTopColor="$grey50"
      left={0}
      bottom={0}
      right={0}
      paddingTop="$3"
      height={65 + (insets.bottom ? 24 : 10)}
      paddingHorizontal="$2"
      elevation={0}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: {},
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = TabBarIconMapping[route.name];

        const label = LabelMapping[route.name];

        return (
          <YStack
            paddingVertical="$1"
            role="button"
            aria-label={options.tabBarAccessibilityLabel}
            f={1}
            ai="center"
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon
              {...(isFocused && { color: '$primary10' })}
              width="$6"
              height="$6"
            />
            <Text
              fontSize="$2.5"
              fontWeight="400"
              {...(isFocused && { color: '$primary10', fontWeight: 'bold' })}
            >
              {label}
            </Text>
          </YStack>
        );
      })}
    </XStack>
  );
};
