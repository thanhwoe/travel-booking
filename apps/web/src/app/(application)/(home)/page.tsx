import {
  favoriteProductAction,
  getListProductAction,
} from '../../actions/product';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import dynamic from 'next/dynamic';

// import HomePage from '@shared/features/Home';
import { PRODUCT_KEY } from '@shared/constants';
import { createClient } from 'apps/web/src/services/supabase/server';
const HomePage = dynamic(() => import('@shared/features/Home'), { ssr: false });

export default async function Index({
  searchParams,
}: {
  searchParams?: Promise<{
    type?: string;
    price?: string;
    page?: string;
  }>;
}) {
  const { page, ...query } = (await searchParams) || {};

  const currentPage = Number(page) || 1;

  const queryClient = new QueryClient();
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  await queryClient.prefetchQuery({
    queryKey: PRODUCT_KEY.list(currentPage, query),
    queryFn: () => getListProductAction(currentPage, query),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePage
        getListProductAction={getListProductAction}
        currentPage={currentPage}
        favoriteProductAction={favoriteProductAction}
        query={query}
        user={data.user}
      />
    </HydrationBoundary>
  );
}
