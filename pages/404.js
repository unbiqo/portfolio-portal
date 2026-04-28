import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Link
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Text>
        For help, email{' '}
        <Link href="mailto:damir.sarsenov12@gmail.com">
          damir.sarsenov12@gmail.com
        </Link>
        .
      </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
