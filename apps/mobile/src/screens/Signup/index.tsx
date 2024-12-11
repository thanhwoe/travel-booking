import { SCREENS } from '@shared/constants';
import { AppStackScreenProps } from '../../interfaces';
import { AuthLayout } from '../../layouts/AuthLayout';
import { SignUpForm, Text } from '@shared/ui/components';
import { FC } from 'react';
import { ISignUpForm } from '@shared/interfaces';

type SignInScreenProps = AppStackScreenProps<typeof SCREENS.SIGN_UP>;
export const SignupScreen: FC<SignInScreenProps> = ({
  navigation: { navigate },
}) => {
  const handleSignUp = (data: ISignUpForm) => {
    console.log({ data });
  };

  return (
    <AuthLayout>
      <SignUpForm onSubmit={handleSignUp} />
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
