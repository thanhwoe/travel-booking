import { signOutAction } from '../actions/auth';
// import Footer from '@shared/ui/components/web/Footer';
// import Header from '@shared/ui/components/web/Header';
import { createClient } from '../../services/supabase/server';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@shared/ui/components/web/Header'), {
  ssr: false,
});

// const Footer = dynamic(() => import('@shared/ui/components/web/Footer'), {
//   ssr: false,
// });

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return (
    <main className="min-h-screen" role="main">
      <Header onSignOut={signOutAction} isAuth={!!data.user} />
      {children}
      {/* <div className="w-full h-[281px]">
        <Footer />
      </div> */}
    </main>
  );
}
