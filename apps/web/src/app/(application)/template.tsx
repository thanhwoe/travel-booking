'use client';

import { useAuth } from '../../hooks';
import { signOutAction } from '../actions/auth';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@shared/ui/components/web/Header'));
const Footer = dynamic(() => import('@shared/ui/components/web/Footer'));

export default function Template({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return (
    <div className="min-h-screen">
      <Header onSignOut={signOutAction} isAuth={!!user} />
      {children}
      <Footer />
    </div>
  );
}
