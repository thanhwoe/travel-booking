'use client';
import { Footer, Header } from '@shared/ui/components';
import { View } from 'tamagui';
import { signOutAction } from '../actions/auth';
import { useAuth } from '../../hooks';

export default function Template({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return (
    <View h="$full">
      <Header onSignOut={signOutAction} isAuth={!!user} />
      {children}
      <Footer />
    </View>
  );
}
