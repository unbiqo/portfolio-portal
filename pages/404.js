import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Link
} from '@chakra-ui/react'
import { getLocaleFromPath } from '../lib/i18n'

const copy = {
  en: {
    title: 'Not found',
    message: "The page you're looking for was not found.",
    helpPrefix: 'For help, email',
    home: 'Return to home'
  },
  ru: {
    title: 'Страница не найдена',
    message: 'Такой страницы нет или ссылка устарела.',
    helpPrefix: 'Если нужна помощь, напишите на',
    home: 'Вернуться на главную'
  }
}

const NotFound = () => {
  const router = useRouter()
  const locale = getLocaleFromPath(router.asPath)
  const t = copy[locale]
  const homeHref = locale === 'ru' ? '/ru' : '/'

  return (
    <Container>
      <Heading as="h1">{t.title}</Heading>
      <Text>{t.message}</Text>
      <Text>
        {t.helpPrefix}{' '}
        <Link href="mailto:damir.sarsenov12@gmail.com">
          damir.sarsenov12@gmail.com
        </Link>
        .
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href={homeHref} colorScheme="teal">
          {t.home}
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
