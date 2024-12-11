import { AppStackScreenProps } from '../../interfaces';
import { SCREENS } from '@shared/constants';
import { FC } from 'react';
import { AuthLayout } from '../../layouts/AuthLayout';
import { SignInForm, Text } from '@shared/ui/components';
import { ISignInForm } from '@shared/interfaces';

type SignInScreenProps = AppStackScreenProps<typeof SCREENS.LOGIN>;
export const LoginScreen: FC<SignInScreenProps> = ({
  navigation: { navigate },
}) => {
  const handleSignIn = (data: ISignInForm) => {
    console.log({ data });
  };
  return (
    <AuthLayout>
      <SignInForm onSubmit={handleSignIn} />
      <Text textAlign="center" mt="auto" size="large">
        Don't have account?{' '}
        <Text
          textDecorationLine="underline"
          color="$blue10"
          size="large"
          onPress={() => navigate(SCREENS.SIGN_UP)}
        >
          Register
        </Text>
      </Text>
    </AuthLayout>
  );
};
