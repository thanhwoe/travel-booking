import React from 'react';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '@shared/ui/themes';
import { AppNavigator } from '../navigation';

export const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <AppNavigator />
    </TamaguiProvider>
  );
};

export default App;
