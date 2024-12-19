'use server';

import { IRoom } from '@shared/interfaces';
import { createClient } from '../../services/supabase/server';
import { generatePriceRange, getPageRange } from '@shared/utils';
import { ITEMS_PER_PAGE } from '@shared/constants';
import { notFound } from 'next/navigation';
import { createClient as defaultSupabase } from '@supabase/supabase-js';

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

  if (query?.price) {
    const { min, max } = generatePriceRange(query.price);

    queryBuilder = queryBuilder.gte('price', min);

    if (max) {
      queryBuilder = queryBuilder.lte('price', max);
    }
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

export const getProductDetailAction = async (id: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('Product')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    notFound();
  }
  return data as IRoom;
};

export const getListProductIDtAction = async () => {
  const supabase = await defaultSupabase(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data, error } = await supabase.from('Product').select('id');

  if (error) {
    throw error;
  }
  return {
    data,
  };
};
