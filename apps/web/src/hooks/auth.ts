import { useEffect, useState } from 'react';
import { createClient } from '../services/supabase/client';
import { User } from '@supabase/supabase-js';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const supabase = await createClient();
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();
  }, []);

  return {
    user,
  };
};
