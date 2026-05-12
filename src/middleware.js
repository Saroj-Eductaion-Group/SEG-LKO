import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const rateLimitMap = new Map();

function rateLimit(ip, maxRequests, windowMs) {
  const now = Date.now();
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }
  const ipData = rateLimitMap.get(ip);
  if (now > ipData.resetTime) {
    ipData.count = 1;
    ipData.resetTime = now + windowMs;
    return false;
  }
  ipData.count++;
  return ipData.count > maxRequests;
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const ip = request.headers.get('x-forwarded-for') || request.ip || 'unknown';

  // Rate limit login attempts - 10 per minute
  if (pathname === '/api/auth/callback/credentials') {
    if (rateLimit(`login_${ip}`, 10, 60000)) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many login attempts. Please wait a minute.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  // Rate limit forgot password - 5 per 15 minutes
  if (pathname === '/api/auth/forgot-password') {
    if (rateLimit(`forgot_${ip}`, 5, 15 * 60000)) {
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests. Please wait 15 minutes.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  // Rate limit all APIs - 100 per minute
  if (pathname.startsWith('/api/')) {
    if (rateLimit(`api_${ip}`, 100, 60000)) {
      return new NextResponse('Too Many Requests', { status: 429 });
    }
  }

  // Protect admin dashboard routes
  const adminProtectedRoutes = [
    '/admin/dashboard',
    '/admin/add-job',
    '/admin/add-notice',
    '/admin/add-placement-update',
    '/admin/add-student-placement',
    '/admin/view-contact',
    '/admin/view-job',
    '/admin/view-notice',
    '/admin/view-placement-update',
    '/admin/view-student-placement',
  ];

  if (adminProtectedRoutes.some(route => pathname.startsWith(route))) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token || token.role !== 'admin') {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  // Security headers
  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: ['/api/:path*', '/admin/:path*'],
};
