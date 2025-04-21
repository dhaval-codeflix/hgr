import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const isAuthRoute = request.nextUrl.pathname.includes('auth')

    if (!isAuthRoute && !token) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    return NextResponse.next();
}
export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images/.*).*)',
};
