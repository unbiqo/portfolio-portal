import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  HStack,
  IconButton,
  Tooltip,
  Text,
  useClipboard
} from '@chakra-ui/react'
import { ExternalLinkIcon, CopyIcon, CheckIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const copy = {
  en: {
    title: 'Alenau - AI Personal Stylist',
    description:
      'Canvas-based styling tool that lets users assemble outfits, get AI recommendations, and request roast-style critiques to refine the final look.',
    roleLabel: 'Role',
    role: 'Full-Stack Software Engineer',
    focusLabel: 'Focus',
    focus: 'Canvas UX, outfit recommendations, roast feedback',
    stackLabel: 'Stack',
    contactLabel: 'Contact',
    copied: 'Copied',
    copyEmail: 'Copy email',
    linkLabel: 'Link'
  },
  ru: {
    title: 'Alenau - AI-персональный стилист',
    description:
      'Canvas-инструмент, где пользователь собирает образы, получает AI-рекомендации и может запросить roast-style critique, чтобы доработать финальный look.',
    roleLabel: 'Роль',
    role: 'Full-Stack Software Engineer',
    focusLabel: 'Фокус',
    focus: 'Canvas UX, рекомендации образов, roast feedback',
    stackLabel: 'Стек',
    contactLabel: 'Контакт',
    copied: 'Скопировано',
    copyEmail: 'Скопировать email',
    linkLabel: 'Ссылка'
  }
}

export const AlenauPage = ({ locale = 'en' }) => {
  const t = copy[locale]
  const email = 'damir.sarsenov12@gmail.com'
  const { hasCopied, onCopy } = useClipboard(email)

  return (
    <Layout title={t.title}>
      <Container>
        <Title locale={locale}>
          {t.title} <Badge>2024 - Present</Badge>
        </Title>
        <P>{t.description}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t.roleLabel}</Meta>
            <span>{t.role}</span>
          </ListItem>
          <ListItem>
            <Meta>{t.focusLabel}</Meta>
            <span>{t.focus}</span>
          </ListItem>
          <ListItem>
            <Meta>{t.stackLabel}</Meta>
            <span>
              React 19, Vite (rolldown), Tailwind CSS v4, Framer Motion, Vercel
              Serverless Functions, Google Gemini API, eBay Browse API
            </span>
          </ListItem>
          <ListItem>
            <Meta>{t.contactLabel}</Meta>
            <HStack spacing={2}>
              <Text
                as="button"
                type="button"
                onClick={onCopy}
                fontWeight="medium"
                cursor="pointer"
                color="teal.400"
                _hover={{ textDecoration: 'underline' }}
              >
                {email}
              </Text>
              <Tooltip label={hasCopied ? t.copied : t.copyEmail}>
                <IconButton
                  aria-label={t.copyEmail}
                  icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
                  size="xs"
                  variant="ghost"
                  onClick={onCopy}
                />
              </Tooltip>
            </HStack>
          </ListItem>
          <ListItem>
            <Meta>LinkedIn</Meta>
            <Link
              href="https://www.linkedin.com/in/damir-sarsenov-b43397207/"
              target="_blank"
            >
              linkedin.com/in/damir-sarsenov-b43397207{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t.linkLabel}</Meta>
            <Link href="https://alenau.com" target="_blank" color="red.400">
              alenau.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/web-scraping_01.png"
          alt="Web data extraction interface"
          enableZoom
        />
        <WorkImage
          src="/images/works/web-scraping_02.png"
          alt="Mission parameters modal"
          enableZoom
        />
        <WorkImage
          src="/images/works/web-scraping_03.png"
          alt="Stylist picks dashboard"
          enableZoom
        />
      </Container>
    </Layout>
  )
}

const Work = () => <AlenauPage locale="en" />

export default Work
