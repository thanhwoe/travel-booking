import { IFavorites, IRoom } from '@shared/interfaces';
import { supabase } from '../supabase';
import { getPageRange } from '@shared/utils';
import { ITEMS_PER_PAGE } from '@shared/constants';
import { IListProductQuery } from '../../interfaces';

export const getListProductAction = async (
  page: number,
  query?: IListProductQuery
) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

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

  const { data: favorites } = await supabase
    .from('Favorites')
    .select('favorites')
    .eq('userId', user.id)
    .single<IFavorites>();

  const { data, error } = await queryBuilder.returns<IRoom[]>();

  if (error) {
    throw error;
  }

  const result = data.map((item) => ({
    ...item,
    isFavorite: favorites?.favorites.includes(item.id),
  }));

  if (query?.favorite) {
    return result.filter((item) => item.isFavorite);
  }

  return result;
};

export const getProductDetailAction = async (id: string) => {
  const { data, error } = await supabase
    .from('Product')
    .select('*')
    .eq('id', id)
    .single<IRoom>();
  if (error) {
    throw error;
  }
  return data;
};

export const favoriteProductAction = async (id: string) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: existingRow, error: existingRowError } = await supabase
    .from('Favorites')
    .select('favorites')
    .eq('userId', user.id)
    .single();

  if (existingRowError && existingRowError.code !== 'PGRST116') {
    throw existingRowError;
  }

  let updatedFavorites = [id];
  if (existingRow && existingRow.favorites) {
    if (existingRow.favorites.includes(id)) {
      updatedFavorites = existingRow.favorites.filter((item) => item !== id);
    } else {
      updatedFavorites = Array.from(new Set([...existingRow.favorites, id]));
    }
  }

  const { error } = await supabase.from('Favorites').upsert(
    [
      {
        userId: user.id,
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

export const getListFavoriteProductAction = async (page: number) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: favorites } = await supabase
    .from('Favorites')
    .select('favorites')
    .eq('userId', user.id)
    .single<IFavorites>();

  const range = getPageRange(page, ITEMS_PER_PAGE);
  const { data, error } = await supabase
    .from('Product')
    .select('*')
    .in('id', favorites?.favorites || [])
    .range(range[0], range[1])
    .returns<IRoom[]>();

  if (error) {
    throw error;
  }
  const result = data.map((item) => ({
    ...item,
    isFavorite: favorites?.favorites.includes(item.id),
  }));

  return result;
};
