'use server';

import { IFavorites, IRoom } from '@shared/interfaces';
import { createClient } from '../../services/supabase/server';
import { generatePriceRange, getPageRange } from '@shared/utils';
import { ITEMS_PER_PAGE } from '@shared/constants';
import { notFound } from 'next/navigation';
import { createClient as defaultSupabase } from '@supabase/supabase-js';

export const getListProductAction = async (
  page: number,
  query?: Record<string, any>
) => {
  const range = getPageRange(page, ITEMS_PER_PAGE);

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

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

  if (user) {
    const { data: favorites } = await supabase
      .from('Favorites')
      .select('favorites')
      .eq('userId', user?.id)
      .single<IFavorites>();

    const { data, error, count } = await queryBuilder.returns<IRoom[]>();

    if (error) {
      throw error;
    }

    const result = data.map((item) => ({
      ...item,
      isFavorite: favorites?.favorites.includes(item.id),
    }));

    if (query?.favorite) {
      const filteredData = result.filter((item) => item.isFavorite);
      return {
        data: filteredData,
        count: filteredData.length,
      };
    }

    return {
      data: result,
      count,
    };
  } else {
    const { data, error, count } = await queryBuilder.returns<IRoom[]>();

    if (error) {
      throw error;
    }

    return {
      data,
      count,
    };
  }
};

export const getProductDetailAction = async (id: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('Product')
    .select('*')
    .eq('id', id)
    .single<IRoom>();

  if (error) {
    notFound();
  }
  return data;
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

export const favoriteProductAction = async (id: string) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: existingRow, error: existingRowError } = await supabase
    .from('Favorites')
    .select('favorites')
    .eq('userId', user?.id)
    .single();

  if (existingRowError && existingRowError.code !== 'PGRST116') {
    throw existingRowError;
  }

  let updatedFavorites = [id];
  if (existingRow && existingRow.favorites) {
    if (existingRow.favorites.includes(id)) {
      updatedFavorites = existingRow.favorites.filter(
        (item: string) => item !== id
      );
    } else {
      updatedFavorites = Array.from(new Set([...existingRow.favorites, id]));
    }
  }

  const { error } = await supabase.from('Favorites').upsert(
    [
      {
        userId: user?.id,
        favorites: updatedFavorites,
      },
    ],
    { onConflict: 'userId' }
  );

  if (error) {
    throw error;
  }
  return id;
};
