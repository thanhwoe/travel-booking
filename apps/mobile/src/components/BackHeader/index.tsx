import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { ChevronLeftIcon } from '@shared/ui/icons';
import type { FC } from 'react';
import { Stack, XStack } from 'tamagui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '@shared/ui/components';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';

export const BackHeader: FC<NativeStackHeaderProps | BottomTabHeaderProps> = ({
  navigation,
  options,
}) => {
  const insets = useSafeAreaInsets();

  const { title } = options;

  const handleNavigateBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };
  return (
    <XStack mt={insets.top} px="$5" pt="$3" jc="space-between" ai="center">
      <XStack
        jc="center"
        ai="center"
        w="$9"
        h="$9"
        onPress={handleNavigateBack}
      >
        <ChevronLeftIcon color="$grey20" />
        <XStack
          w="$9"
          h="$9"
          opacity={0.5}
          backgroundColor="$white"
          borderRadius="$full"
          position="absolute"
          top={0}
          left={0}
        />
      </XStack>

      {title && (
        <Text alignSelf="center" fontWeight="bold">
          {title}
        </Text>
      )}

      <Stack width="$9" />
    </XStack>
  );
};
