import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children, locale = 'en' }) => (
  <Box>
    <Link
      as={NextLink}
      href={locale === 'ru' ? '/wallpapers/ru' : '/wallpapers'}
    >
      {locale === 'ru' ? 'Ресурсы' : 'Resources'}
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WallpaperImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)

export const LegalLinks = () => (
  <Box
    display="flex"
    flexWrap="wrap"
    mt={6}
    mb={4}
    alignItems="center"
    justifyContent="center"
    fontSize={14}
    gap={4}
  >
    <Link href="mailto:damir.sarsenov12@gmail.com">
      damir.sarsenov12@gmail.com
    </Link>
    <Link href="https://www.linkedin.com/in/damir-sarsenov/" target="_blank">
      LinkedIn
    </Link>
  </Box>
)
