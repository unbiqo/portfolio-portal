export const LOCALES = {
  en: 'en',
  ru: 'ru'
}

export const LOCALE_COOKIE = 'portfolio_locale'

const RU_SUFFIX = '/ru'

const splitPath = path => {
  const [withoutHash, hash = ''] = path.split('#')
  const [pathname, query = ''] = withoutHash.split('?')

  return {
    pathname: pathname || '/',
    query: query ? `?${query}` : '',
    hash: hash ? `#${hash}` : ''
  }
}

export const getLocaleFromPath = path => {
  const { pathname } = splitPath(path)

  return pathname === RU_SUFFIX || pathname.endsWith(RU_SUFFIX)
    ? LOCALES.ru
    : LOCALES.en
}

export const localizePath = (path, locale) => {
  const { pathname, query, hash } = splitPath(path)
  const cleanPathname =
    pathname === RU_SUFFIX
      ? '/'
      : pathname.endsWith(RU_SUFFIX)
        ? pathname.slice(0, -RU_SUFFIX.length) || '/'
        : pathname

  const localizedPathname =
    locale === LOCALES.ru
      ? cleanPathname === '/'
        ? RU_SUFFIX
        : `${cleanPathname}${RU_SUFFIX}`
      : cleanPathname

  return `${localizedPathname}${query}${hash}`
}

export const getLanguageSwitchHref = path => {
  const locale = getLocaleFromPath(path)

  return localizePath(path, locale === LOCALES.ru ? LOCALES.en : LOCALES.ru)
}

export const getLanguageSwitchLocale = path => {
  const locale = getLocaleFromPath(path)

  return locale === LOCALES.ru ? LOCALES.en : LOCALES.ru
}

export const setPreferredLocale = locale => {
  if (typeof document === 'undefined') return

  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`
}

export const getRoute = (path, locale) => localizePath(path, locale)

export const navCopy = {
  en: {
    about: 'About',
    works: 'Case Studies',
    contact: 'Contact',
    menu: 'Options',
    switchLanguage: 'Switch to Russian',
    switchLabel: 'RU'
  },
  ru: {
    about: 'Обо мне',
    works: 'Кейсы',
    contact: 'Контакты',
    menu: 'Меню',
    switchLanguage: 'Переключить на английский',
    switchLabel: 'EN'
  }
}
