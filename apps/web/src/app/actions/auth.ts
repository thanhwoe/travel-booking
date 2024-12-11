'use server';

import { signUpSchema } from '@shared/constants';
import { ISignInForm, ISignUpForm } from '@shared/interfaces';

export const signUpAction = (formData: ISignUpForm) => {
  const validatedFields = signUpSchema.safeParse(formData);
  if (!validatedFields.success) {
    return {
      errors: {
        message: 'Validate error',
      },
    };
  }

  const { password, phoneNumber } = validatedFields.data;
  console.log({ password, phoneNumber });

  return {
    success: true,
  };
};

export const signInAction = (formData: ISignInForm) => {
  const validatedFields = signUpSchema.safeParse(formData);
  if (!validatedFields.success) {
    return {
      errors: {
        message: 'Validate error',
      },
    };
  }

  const { password, phoneNumber } = validatedFields.data;
  console.log({ password, phoneNumber });

  return {
    success: true,
  };
};
