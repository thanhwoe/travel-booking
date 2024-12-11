'use client';
import { Footer, Header } from '@shared/ui/components';
import { Metrics } from '@shared/ui/themes';
import { View } from 'tamagui';

const { screenHeight } = Metrics;

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <View minHeight={screenHeight}>
      <Header />
      {children}
      <Footer />
    </View>
  );
}
