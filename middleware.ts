import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 특정 경로에 대한 접근 제어
  if (request.nextUrl.pathname.startsWith('/new-post')) {
    const isLoggedIn = request.cookies.get('isLoggedIn')
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/new-post/:path*']
} 