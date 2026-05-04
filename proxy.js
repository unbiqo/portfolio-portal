import { NextResponse } from 'next/server'
import { LOCALE_COOKIE, LOCALES } from './lib/i18n'

const localizablePaths = new Set([
  '/',
  '/posts',
  '/wallpapers',
  '/wallpapers/automation-playbooks',
  '/wallpapers/reporting-blueprints',
  '/works',
  '/works/bi-automation',
  '/works/luxury-car-salon',
  '/works/marathon-course',
  '/works/seedform',
  '/works/web-scraping'
])

const isRuPath = pathname => pathname === '/ru' || pathname.endsWith('/ru')

const getBasePath = pathname => {
  if (pathname === '/ru') return '/'
  return isRuPath(pathname) ? pathname.slice(0, -3) : pathname
}

const getRuPath = pathname => (pathname === '/' ? '/ru' : `${pathname}/ru`)

const getPreferredLocale = request => {
  const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value
  if (savedLocale === LOCALES.en || savedLocale === LOCALES.ru) {
    return savedLocale
  }

  const acceptedLanguages = request.headers.get('accept-language') || ''
  const firstLanguage = acceptedLanguages.split(',')[0]?.toLowerCase() || ''

  return firstLanguage.startsWith('ru') ? LOCALES.ru : LOCALES.en
}

export function proxy(request) {
  const { nextUrl } = request
  const pathname = nextUrl.pathname
  const basePath = getBasePath(pathname)

  if (!localizablePaths.has(basePath)) {
    return NextResponse.next()
  }

  const requestedLocale = nextUrl.searchParams.get('lang')
  if (requestedLocale === LOCALES.en || requestedLocale === LOCALES.ru) {
    const url = nextUrl.clone()
    url.searchParams.delete('lang')
    url.pathname =
      requestedLocale === LOCALES.ru ? getRuPath(basePath) : basePath

    const response = NextResponse.redirect(url)
    response.cookies.set(LOCALE_COOKIE, requestedLocale, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax'
    })

    return response
  }

  if (!isRuPath(pathname) && getPreferredLocale(request) === LOCALES.ru) {
    const url = nextUrl.clone()
    url.pathname = getRuPath(pathname)

    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|videos|draco).*)']
}
