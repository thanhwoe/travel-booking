'use client';
import { SignUpForm, Text } from '@shared/ui/components';
import Link from 'next/link';
import { YStack } from 'tamagui';
import { signUpAction } from '../actions/auth';

export default function Index() {
  return (
    <YStack ai="center" ac="center">
      <SignUpForm onSubmit={signUpAction} />
      <Text textAlign="center" my={50} size="large">
        Already had an account?{' '}
        <Link href="/login">
          <Text textDecorationLine="underline" color="$blue10" size="large">
            Login
          </Text>
        </Link>
      </Text>
    </YStack>
  );
}
