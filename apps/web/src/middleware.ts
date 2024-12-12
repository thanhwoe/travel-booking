import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from './services/supabase/middleware';

export async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/assets/')
  ) {
    return NextResponse.next();
  }
  return await updateSession(request);
}

export const config = {
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
