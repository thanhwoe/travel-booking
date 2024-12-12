import { SCREENS } from '@shared/constants';
import { AppStackScreenProps } from '../../interfaces';
import { AuthLayout } from '../../layouts/AuthLayout';
import { SignUpForm, Text } from '@shared/ui/components';
import { FC } from 'react';
import { signUpAction } from '../../services/auth';

type SignInScreenProps = AppStackScreenProps<typeof SCREENS.SIGN_UP>;
export const SignupScreen: FC<SignInScreenProps> = ({
  navigation: { navigate },
}) => {
  return (
    <AuthLayout>
      <SignUpForm onSubmit={signUpAction} />
      <Text textAlign="center" mt="auto" size="large">
        Already had an account?{' '}
        <Text
          textDecorationLine="underline"
          color="$blue10"
          size="large"
          onPress={() => navigate(SCREENS.LOGIN)}
        >
          Login
        </Text>
      </Text>
    </AuthLayout>
  );
};
