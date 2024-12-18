import { IRoom } from '@shared/interfaces';
import { supabase } from '../supabase';
import { getPageRange } from '@shared/utils';
import { ITEMS_PER_PAGE } from '@shared/constants';

export const getListProductAction = async (page: number) => {
  const range = getPageRange(page, ITEMS_PER_PAGE);
  console.log({ range, page });
  const { data, error } = await supabase
    .from('Product')
    .select('*')
    .range(range[0], range[1]);

  if (error) {
    throw error;
  }
  return data as IRoom[];
};
