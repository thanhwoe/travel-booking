import React from 'react';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '@shared/ui/themes';
import { AppNavigator } from '../navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <GestureHandlerRootView>
        <AppNavigator />
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
};

export default App;
