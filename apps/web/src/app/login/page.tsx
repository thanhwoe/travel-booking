'use client';
import { SignInForm, Text } from '@shared/ui/components';
import Link from 'next/link';
import { YStack } from 'tamagui';
import { signInAction } from '../actions/auth';

export default function Index() {
  return (
    <YStack ai="center" ac="center">
      <SignInForm onSubmit={signInAction} />
      <Text textAlign="center" my={50} size="large">
        Don't have account?{' '}
        <Link href="/sign-up">
          <Text textDecorationLine="underline" color="$blue10" size="large">
            Register
          </Text>
        </Link>
      </Text>
    </YStack>
  );
}
