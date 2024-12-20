import { ISignInForm, ISignUpForm } from '@shared/interfaces';
import { supabase } from '../supabase';
import { useAuthStore } from '@shared/stores';

const setUser = useAuthStore.use.setUser();
const clearUser = useAuthStore.use.clearUser();

export const signInAction = async (formData: ISignInForm) => {
  const {
    error,
    data: { user },
  } = await supabase.auth.signInWithPassword({
    password: formData.password,
    phone: formData.phoneNumber,
  });

  if (error) {
    return {
      errors: {
        message: error.message,
      },
    };
  }

  setUser(user);
};

export const signUpAction = async (formData: ISignUpForm) => {
  const {
    error,
    data: { user },
  } = await supabase.auth.signUp({
    password: formData.password,
    phone: formData.phoneNumber,
  });
  if (error) {
    return {
      errors: {
        message: error.message,
      },
    };
  }
  setUser(user);
};

export const signOutAction = async () => {
  await supabase.auth.signOut({ scope: 'local' });
  clearUser();
};
