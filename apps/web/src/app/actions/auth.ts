'use server';

import { signUpSchema } from '@shared/constants';
import { ISignInForm, ISignUpForm } from '@shared/interfaces';
import { createClient } from '../../services/supabase/server';
import { redirect } from 'next/navigation';

// TODO: add error handling for wrong credentials (try/catch)

export const signUpAction = async (formData: ISignUpForm) => {
  const supabase = await createClient();
  const validatedFields = signUpSchema.safeParse(formData);
  if (!validatedFields.success) {
    return {
      errors: {
        message: 'Validate error',
      },
    };
  }

  const { password, phoneNumber } = validatedFields.data;
  const { error } = await supabase.auth.signUp({
    phone: phoneNumber,
    password,
  });
  if (error) {
    return {
      errors: {
        message: error.message,
        code: error.code,
      },
    };
  }

  redirect('/');
};

export const signInAction = async (formData: ISignInForm) => {
  const supabase = await createClient();
  const validatedFields = signUpSchema.safeParse(formData);
  if (!validatedFields.success) {
    return {
      errors: {
        message: 'Validate error',
      },
    };
  }

  const { password, phoneNumber } = validatedFields.data;

  const { error } = await supabase.auth.signInWithPassword({
    password,
    phone: phoneNumber,
  });

  if (error) {
    return {
      errors: {
        message: error.message,
        code: error.code,
      },
    };
  }

  redirect('/');
};

export const signOutAction = async () => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut({ scope: 'local' });
  if (error) {
    return {
      errors: {
        message: error.message,
        code: error.code,
      },
    };
  }

  redirect('/login');
};

export const getUserAction = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return {
      errors: {
        message: error.message,
        code: error.code,
      },
    };
  }

  return {
    user: data.user,
  };
};
