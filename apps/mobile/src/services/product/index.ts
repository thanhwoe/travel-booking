import { IRoom } from '@shared/interfaces';
import { supabase } from '../supabase';
import { getPageRange } from '@shared/utils';
import { ITEMS_PER_PAGE } from '@shared/constants';
import { IListProductQuery } from '../../interfaces';

export const getListProductAction = async (
  page: number,
  query?: IListProductQuery
) => {
  const range = getPageRange(page, ITEMS_PER_PAGE);
  let queryBuilder = supabase
    .from('Product')
    .select('*')
    .range(range[0], range[1]);

  if (query?.type && query.type !== 'all') {
    queryBuilder = queryBuilder.ilike('type', `%${query.type}%`);
  }

  if (query?.price) {
    const [min, max] = query.price;
    queryBuilder = queryBuilder.gte('price', min).lte('price', max);
  }
  const { data, error } = await queryBuilder;

  if (error) {
    throw error;
  }
  return data as IRoom[];
};

export const getProductDetailAction = async (id: string) => {
  const { data, error } = await supabase
    .from('Product')
    .select('*')
    .eq('id', id)
    .single();
  if (error) {
    throw error;
  }
  return data as IRoom;
};
