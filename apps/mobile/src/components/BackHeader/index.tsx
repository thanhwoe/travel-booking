import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { ChevronLeftIcon } from '@shared/ui/icons';
import type { FC } from 'react';
import { XStack } from 'tamagui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const BackHeader: FC<NativeStackHeaderProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const handleNavigateBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };
  return (
    <XStack mt={insets.top} px="$5" pt="$3">
      <XStack
        jc="center"
        ai="center"
        w="$9"
        h="$9"
        onPress={handleNavigateBack}
      >
        <ChevronLeftIcon color="$white" />
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
    </XStack>
  );
};
