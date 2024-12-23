import { signOutAction } from '../actions/auth';
import Footer from '@shared/ui/components/web/Footer';
import Header from '@shared/ui/components/web/Header';
import { createClient } from '../../services/supabase/server';

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return (
    <div className="min-h-screen">
      <Header onSignOut={signOutAction} isAuth={!!data.user} />
      {children}
      <Footer />
    </div>
  );
}
