import { FC, memo, useEffect } from 'react';
import { Stack, YStack } from 'tamagui';
import { Text } from '../../universal';
import { SvgFactoryProps } from '../../../icons';
import { Metrics } from '../../../themes';
import Animated, {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IProps {
  tabs: {
    value: string;
    label: string;
    icon: FC<SvgFactoryProps>;
  }[];
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

const { screenWidth } = Metrics;
const TAB_WIDTH = (screenWidth - 20 * 2) / 3;

const AnimatedSeparator = Animated.createAnimatedComponent(YStack);

export const TabHeading = memo<IProps>(({ activeTab, onChangeTab, tabs }) => {
  const translateX = useSharedValue(0);

  const handleAnimate = (index: number) => {
    'worklet';
    translateX.value = withTiming(index * TAB_WIDTH, {
      duration: 500,
    });
  };
  useEffect(() => {
    const index = tabs.findIndex((tab) => tab.value === activeTab);
    runOnUI(handleAnimate)(index);
  }, [activeTab]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <YStack>
      <Stack flexDirection="row" jc="space-between" py="$2">
        {tabs.map(({ value, label, icon: Icon }) => {
          const active = activeTab === value;
          return (
            <YStack
              key={label + value}
              f={1}
              jc="center"
              ai="center"
              onPress={() => onChangeTab(value)}
            >
              <Icon
                {...(active && {
                  color: '$primary10',
                })}
              />
              <Text
                {...(active && {
                  color: '$primary10',
                  fontWeight: 'bold',
                })}
              >
                {label}
              </Text>
            </YStack>
          );
        })}
      </Stack>
      <AnimatedSeparator
        h="$0.5"
        w={TAB_WIDTH}
        style={animatedStyle}
        backgroundColor="$primary10"
      />
    </YStack>
  );
});
