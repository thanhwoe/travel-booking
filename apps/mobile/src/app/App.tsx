import React, { Suspense, useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '@shared/ui/themes';
import { AppNavigator } from '../navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import BootSplash from 'react-native-bootsplash';

export const App = () => {
  useEffect(() => {
    setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 500);
  }, []);

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <GestureHandlerRootView style={{ flex: 1 }}>
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
