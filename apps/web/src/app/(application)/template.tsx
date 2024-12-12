'use client';
import { Footer, Header } from '@shared/ui/components';
import { View } from 'tamagui';
import { signOutAction } from '../actions/auth';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <View h="$full">
      <Header onSignOut={signOutAction} />
      {children}
      <Footer />
    </View>
  );
}
