import { useEffect } from 'react';
import { createClient } from '../services/supabase/client';
import { useAuthStore } from '@shared/stores';

export const useAuth = () => {
  const setUser = useAuthStore.use.setUser();
  const user = useAuthStore.use.user();

  useEffect(() => {
    const getUser = async () => {
      const supabase = await createClient();
      const { data } = await supabase.auth.getUser();
      data.user && setUser(data.user);
    };
    getUser();
  }, []);

  return {
    user,
  };
};
