import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
// import { ProductDetailPage } from '@shared/features/ProductDetail';
import { PRODUCT_KEY } from '@shared/constants';
import {
  getListProductIDtAction,
  getProductDetailAction,
} from '../../../actions/product';
import { Metadata } from 'next';
import { createClient } from 'apps/web/src/services/supabase/server';
import dynamic from 'next/dynamic';

const ProductDetailPage = dynamic(
  () => import('@shared/features/ProductDetail'),
  { ssr: false }
);

export async function generateStaticParams() {
  const { data } = await getListProductIDtAction();
  return data.map(({ id }) => ({
    id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;

  const response = await getProductDetailAction(id);

  return {
    title: response.name,
    description: response.description,
    openGraph: {
      images: [response.descriptionImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const queryClient = new QueryClient();
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  await queryClient.prefetchQuery({
    queryKey: PRODUCT_KEY.detail(id),
    queryFn: getProductDetailAction.bind(null, id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetailPage
        id={id}
        getProductDetailAction={getProductDetailAction}
        user={data.user}
      />
    </HydrationBoundary>
  );
}
