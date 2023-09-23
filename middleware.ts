import { NextRequest, NextResponse } from 'next/server'
import countries from './lib/countries.json'

// run only on homepage
export const config = {
  matcher: '/',
}

import { NextRequest as NR, NextResponse as NRS } from 'next/server'
import countriesData from './lib/countries.json'

export async function middleware(req: NR) {
  const { nextUrl: url, geo } = req
  const country = geo?.country || 'US'
  const city = geo?.city || 'San Francisco'
  const region = geo?.region || 'CA'

  const countryInfo = countriesData.find((x) => x.cca2 === country)

  let currencyCode: string | undefined, currency: { symbol: string, name: string } | undefined, languages: string | undefined
  if (countryInfo) {
    currencyCode = Object.keys(countryInfo.currencies)[0]
    currency = countryInfo.currencies[currencyCode]
    languages = Object.values(countryInfo.languages).join(', ')
  }

  url.searchParams.set('country', country)
  url.searchParams.set('city', city)
  url.searchParams.set('region', region)
  if (currencyCode) {
    url.searchParams.set('currencyCode', currencyCode)
  }
  if (currency) {
    url.searchParams.set('currencySymbol', currency.symbol)
    url.searchParams.set('name', currency.name)
  }
  if (languages) {
    url.searchParams.set('languages', languages)
  }

  return NRS.rewrite(url)
}

