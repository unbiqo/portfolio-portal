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

const copy = {
  en: {
    title: 'Contact Damir',
    description:
      'Choose the channel that is easiest for you. Email opens your default mail app, so it works with Gmail, Yandex, Mail.ru, Outlook, Apple Mail, and other configured clients.',
    email: 'Email me',
    telegram: 'DM me on Telegram',
    note: 'For the fastest response, include a short project summary, timeline, and preferred contact method.'
  },
  ru: {
    title: 'Связаться с Дамиром',
    description:
      'Выберите удобный канал. Кнопка email откроет почтовое приложение по умолчанию: это может быть Gmail, Яндекс Почта, Mail.ru, Outlook, Apple Mail или другой настроенный клиент.',
    email: 'Написать на email',
    telegram: 'Написать в Telegram',
    note: 'Чтобы я быстрее ответил, кратко опишите проект, сроки и удобный способ связи.'
  }
}

const ContactModal = ({ isOpen, onClose, locale = 'en' }) => {
  const t = copy[locale] || copy.en
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
        <ModalHeader pb={2}>{t.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color={mutedColor} mb={4}>
            {t.description}
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
              {t.email}
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
              {t.telegram}
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
            {t.note}
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ContactModal
