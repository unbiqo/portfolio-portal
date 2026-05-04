import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Button,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import LanguageToggleButton from './language-toggle-button'
import ContactModal from './contact-modal'
import { getLocaleFromPath, getRoute, navCopy } from '../lib/i18n'

const LinkItem = ({
  href,
  path,
  target,
  scroll = false,
  children,
  ...props
}) => {
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const locale = getLocaleFromPath(path)
  const copy = navCopy[locale]
  const homeHref = getRoute('/', locale)
  const worksHref = getRoute('/works', locale)
  const navColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <>
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
                <Logo href={homeHref} />
              </Heading>
            </Flex>

            <Stack
              direction={{ base: 'column', md: 'row' }}
              display={{ base: 'none', md: 'flex' }}
              width={{ base: 'full', md: 'auto' }}
              alignItems="center"
              mt={{ base: 4, md: 0 }}
            >
              <LinkItem href={homeHref} path={path}>
                {copy.about}
              </LinkItem>
              <LinkItem href={worksHref} path={path}>
                {copy.works}
              </LinkItem>
              <Button
                variant="ghost"
                p={2}
                h="auto"
                fontWeight="normal"
                color={navColor}
                onClick={onOpen}
              >
                {copy.contact}
              </Button>
            </Stack>

            <Box display="flex" alignItems="center">
              <ThemeToggleButton />
              <LanguageToggleButton path={path} />

              <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                <Menu isLazy id="navbar-menu">
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    variant="outline"
                    aria-label={copy.menu}
                  />
                  <MenuList>
                    <MenuItem as={MenuLink} href={homeHref}>
                      {copy.about}
                    </MenuItem>
                    <MenuItem as={MenuLink} href={worksHref}>
                      {copy.works}
                    </MenuItem>
                    <MenuItem onClick={onOpen}>{copy.contact}</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
      <ContactModal isOpen={isOpen} onClose={onClose} locale={locale} />
    </>
  )
}

export default Navbar
