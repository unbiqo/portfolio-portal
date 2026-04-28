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

const Work = () => {
  const email = 'damir.sarsenov12@gmail.com'
  const { hasCopied, onCopy } = useClipboard(email)

  return (
    <Layout title="Alenau - AI Personal Stylist">
      <Container>
        <Title>
          Alenau - AI Personal Stylist <Badge>2024 - Present</Badge>
        </Title>
        <P>
          Canvas-based styling tool that lets users assemble outfits, get AI
          recommendations, and request roast-style critiques to refine the
          final look.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Role</Meta>
            <span>Full-Stack Software Engineer</span>
          </ListItem>
          <ListItem>
            <Meta>Focus</Meta>
            <span>Canvas UX, outfit recommendations, roast feedback</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React 19, Vite (rolldown), Tailwind CSS v4, Framer Motion, Vercel
              Serverless Functions, Google Gemini API, eBay Browse API
            </span>
          </ListItem>
          <ListItem>
            <Meta>Contact</Meta>
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
              <Tooltip label={hasCopied ? 'Copied' : 'Copy email'}>
                <IconButton
                  aria-label="Copy email"
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
              linkedin.com/in/damir-sarsenov-b43397207 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Link</Meta>
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

export default Work
export { getServerSideProps } from '../../components/chakra'
