import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, scroll = false, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={scroll}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props
  const contactHref = '/#contact'

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container p={2} maxW="container.md">
        <Flex
          align="center"
          justify={{ base: 'space-between', md: 'center' }}
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          gap={{ base: 0, md: 6 }}
        >
          <Flex align="center">
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Flex>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/" path={path}>
              About
            </LinkItem>
            <LinkItem href="/works" path={path}>
              Case Studies
            </LinkItem>
            <LinkItem href={contactHref} path={path} scroll>
              Contact
            </LinkItem>
          </Stack>

          <Box display="flex" alignItems="center">
            <ThemeToggleButton />

            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <MenuItem as={MenuLink} href="/">
                    About
                  </MenuItem>
                  <MenuItem as={MenuLink} href="/works">
                    Case Studies
                  </MenuItem>
                  <MenuItem as={MenuLink} href={contactHref} scroll>
                    Contact
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
