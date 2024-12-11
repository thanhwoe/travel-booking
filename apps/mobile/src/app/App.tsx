import React, { Suspense } from 'react';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '@shared/ui/themes';
import { AppNavigator } from '../navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

export const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <GestureHandlerRootView>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Suspense>
            <AppNavigator />
          </Suspense>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </TamaguiProvider>
  );
};

export default App;
