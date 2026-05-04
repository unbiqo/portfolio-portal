import NextLink from 'next/link'
import { Button, useColorModeValue } from '@chakra-ui/react'
import {
  getLanguageSwitchHref,
  getLanguageSwitchLocale,
  getLocaleFromPath,
  navCopy,
  setPreferredLocale
} from '../lib/i18n'

const LanguageToggleButton = ({ path }) => {
  const locale = getLocaleFromPath(path)
  const copy = navCopy[locale]
  const nextLocale = getLanguageSwitchLocale(path)

  return (
    <Button
      as={NextLink}
      href={getLanguageSwitchHref(path)}
      onClick={() => setPreferredLocale(nextLocale)}
      aria-label={copy.switchLanguage}
      title={copy.switchLanguage}
      colorScheme={useColorModeValue('teal', 'cyan')}
      minW="40px"
      px={3}
      ml={2}
    >
      {copy.switchLabel}
    </Button>
  )
}

export default LanguageToggleButton
