import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        as="header"
        id="intro-banner"
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Software Developer & Data Specialist focused on automation, data
        pipelines, and business intelligence.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Damir Sarsenov
          </Heading>
          <p>Software Developer & Data Specialist (Focus: Automation)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-flex"
            borderRadius="full"
            overflow="hidden"
            alignItems="center"
            justifyContent="center"
            bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.300')}
            fontWeight="bold"
            fontSize="xl"
          >
            DS
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Box as="section" id="about">
          <Heading as="h3" variant="section-title">
            Profile
          </Heading>
          <Paragraph>
            Architect of end-to-end digital solutions, from responsive React
            frontends to automated Python-driven data pipelines. Known for
            bridging the gap between raw data engineering and business
            intelligence, translating complex operational needs into clear,
            measurable outcomes.
          </Paragraph>
        </Box>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            View case studies
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Box as="section" id="experience">
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <BioSection>
            <BioYear>Apr 2024 - Present</BioYear>
            Full-Stack Software Engineer (Self-Employed). Delivering custom SaaS
            platforms, automated web scraping with Selenium/BeautifulSoup, and
            AI-driven workflows using n8n/Zapier.
          </BioSection>
          <BioSection>
            <BioYear>Sep 2022 - Jan 2024</BioYear>
            Data Analyst, Jusan Bank. Reduced reporting cycles by 40% with
            Tableau and saved 10+ hours weekly via Python automation.
          </BioSection>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Box as="section" id="skills">
          <Heading as="h3" variant="section-title">
            Technical Skills
          </Heading>
          <List spacing={2} ml={4}>
            <ListItem>
              <Box as="span" fontWeight="bold">
                Full-Stack:
              </Box>{' '}
              JavaScript (ES6+), React.js, Node.js, Tailwind CSS
            </ListItem>
            <ListItem>
              <Box as="span" fontWeight="bold">
                Data &amp; AI:
              </Box>{' '}
              Python (Pandas, Scikit-learn), SQL (PostgreSQL), ML/DL Modeling
            </ListItem>
            <ListItem>
              <Box as="span" fontWeight="bold">
                Ops &amp; Tools:
              </Box>{' '}
              Docker, Git, Linux, Tableau, n8n, Make
            </ListItem>
          </List>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Box as="section" id="education">
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <BioSection>
            <BioYear>Sep 2020 - Jul 2023</BioYear>
            Bachelor of Science in Information Communication Technologies,
            Astana IT University. Focus: Big Data Analysis.
          </BioSection>
        </Box>
      </Section>

      <Section delay={0.4}>
        <Box as="section" id="contact">
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <Paragraph>
            Looking for an expert who can deliver responsive products and
            automation-first data systems? Let&apos;s talk.
          </Paragraph>
          <List>
            <ListItem>
              <Link href="mailto:damir.sarsenov12@gmail.com">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<EmailIcon />}
                >
                  damir.sarsenov12@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/damir-sarsenov/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
