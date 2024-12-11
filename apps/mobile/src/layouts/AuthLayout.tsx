import { memo, PropsWithChildren } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'tamagui';

export const AuthLayout = memo<PropsWithChildren>(({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View flex={1} ai="center" jc="center" backgroundColor="$white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            width: '100%',
          }}
          behavior={Platform.select({ ios: 'padding', android: 'height' })}
        >
          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: insets.bottom ? 30 : 24,
              paddingTop: insets.top,
              paddingHorizontal: 20,
            }}
          >
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
});
