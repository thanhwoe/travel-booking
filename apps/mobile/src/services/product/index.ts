import { supabase } from '../supabase';

export const getListProductAction = async () => {
  const { data, error } = await supabase.from('Product').select('*');
};
