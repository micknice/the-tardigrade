import { NextRequest, NextResponse } from 'next/server'
// import countries from './lib/countries.json'

// run only on homepage
export const config = {
  matcher: '/',
}

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req
  const city = geo?.city || 'San Francisco'

  url.searchParams.set('city', city)
  

  return NextResponse.rewrite(url)
}