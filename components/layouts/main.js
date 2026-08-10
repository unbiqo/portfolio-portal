import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import ChatWidget from '../chat-widget'
import { getLocaleFromPath } from '../../lib/i18n'

const Main = ({ children, router }) => {
  const locale = getLocaleFromPath(router.asPath)
  const isRu = locale === 'ru'
  const title = isRu
    ? 'Damir Sarsenov | Разработчик ПО и специалист по данным'
    : 'Damir Sarsenov | Software Developer & Data Specialist'
  const description = isRu
    ? 'Damir Sarsenov - разработчик ПО и специалист по данным: автоматизация, data pipelines и бизнес-аналитика.'
    : 'Damir Sarsenov - Software Developer & Data Specialist focused on automation, data pipelines, and business intelligence.'

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Damir Sarsenov" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Damir Sarsenov" />
        <meta name="og:title" content={title} />
        <meta property="og:type" content="website" />
        <title>{title}</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>

      <ChatWidget locale={locale} />
    </Box>
  )
}

export default Main
