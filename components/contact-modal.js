import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { FaTelegramPlane } from 'react-icons/fa'

const email = 'damir.sarsenov12@gmail.com'
const telegramHref = 'https://t.me/Jackiehan'

const ContactModal = ({ isOpen, onClose }) => {
  const panelBg = useColorModeValue('white', '#202023')
  const subtleBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')
  const mutedColor = useColorModeValue('gray.600', 'whiteAlpha.700')
  const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.200')

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(8px)" />
      <ModalContent
        bg={panelBg}
        borderRadius="lg"
        mx={4}
        borderWidth="1px"
        borderColor={borderColor}
      >
        <ModalHeader pb={2}>Contact Damir</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color={mutedColor} mb={4}>
            Choose the channel that is easiest for you. Email opens your default
            mail app, so it works with Gmail, Yandex, Mail.ru, Outlook, Apple
            Mail, and other configured clients.
          </Text>
          <Stack spacing={3}>
            <Button
              as={Link}
              href={`mailto:${email}?subject=Project%20Inquiry`}
              colorScheme="teal"
              leftIcon={<EmailIcon />}
              justifyContent="flex-start"
              _hover={{ textDecoration: 'none' }}
            >
              Email me
            </Button>
            <Button
              as={Link}
              href={telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="cyan"
              variant="outline"
              leftIcon={<FaTelegramPlane />}
              rightIcon={<ExternalLinkIcon />}
              justifyContent="flex-start"
              _hover={{ textDecoration: 'none' }}
            >
              DM me on Telegram
            </Button>
          </Stack>
        </ModalBody>
        <ModalFooter
          bg={subtleBg}
          borderBottomRadius="lg"
          justifyContent="flex-start"
          px={6}
        >
          <Text color={mutedColor} fontSize="sm">
            For the fastest response, include a short project summary, timeline,
            and preferred contact method.
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ContactModal
