'use server';

import { IRoom } from '@shared/interfaces';
import { createClient } from '../../services/supabase/server';
import { getPageRange } from '@shared/utils';
import { ITEMS_PER_PAGE } from '@shared/constants';

export const getListProductAction = async (
  page: number,
  query?: Record<string, string>
) => {
  const range = getPageRange(page, ITEMS_PER_PAGE);

  const supabase = await createClient();

  let queryBuilder = supabase
    .from('Product')
    .select('*', { count: 'exact' })
    .range(range[0], range[1]);

  if (query?.type) {
    queryBuilder = queryBuilder.ilike('type', `%${query.type}%`);
  }

  const { data, error, count } = await queryBuilder;

  if (error) {
    throw error;
  }
  return {
    data: data as IRoom[],
    count,
  };
};
