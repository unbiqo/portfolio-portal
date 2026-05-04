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
  const href = getLanguageSwitchHref(path)

  const handleClick = event => {
    event.preventDefault()
    setPreferredLocale(nextLocale)
    window.location.assign(href)
  }

  return (
    <Button
      as="a"
      href={href}
      onClick={handleClick}
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
