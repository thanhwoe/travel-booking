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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@tamagui/toast';
import { Toast } from '@shared/ui/components';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  '[Reanimated] Reading from `value` during component render. Please ensure that you do not access the `value` property or use `get` method of a shared value while React is rendering a component.',
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  useEffect(() => {
    setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 500);
  }, []);

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <Suspense>
                <AppNavigator />
                <Toast />
              </Suspense>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </ToastProvider>
      </QueryClientProvider>
    </TamaguiProvider>
  );
};

export default App;
