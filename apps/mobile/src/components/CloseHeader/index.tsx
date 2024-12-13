import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { CloseIcon } from '@shared/ui/icons';
import type { FC } from 'react';
import { XStack } from 'tamagui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const CloseHeader: FC<NativeStackHeaderProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const handleNavigateBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };
  return (
    <XStack mt={insets.top} jc="flex-end" px="$5">
      <CloseIcon onPress={handleNavigateBack} />
    </XStack>
  );
};
