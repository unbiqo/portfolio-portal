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
import ProjectCarousel from '../components/project-carousel'
import { IoLogoLinkedin } from 'react-icons/io5'
import thumbAutomation from '../public/images/works/inkdrop_eyecatch.png'
import thumbScraping from '../public/images/works/alenau_eyecatch.png'
import thumbAnalytics from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbLuxuryCarSalon from '../public/images/works/luxury-car-salon_01.png'
import thumbMarathonCourse from '../public/images/works/marathon-course_01.png'

const copy = {
  en: {
    intro:
      'Software Developer & Data Specialist focused on automation, data pipelines, and business intelligence.',
    role: 'Software Developer & Data Specialist (Focus: Automation)',
    profileTitle: 'Profile',
    profile:
      'Architect of end-to-end digital solutions, from responsive React frontends to automated Python-driven data pipelines. Known for bridging the gap between raw data engineering and business intelligence, translating complex operational needs into clear, measurable outcomes.',
    projectsTitle: 'Projects',
    viewAllWorks: 'View all projects',
    featuredWorks: [
      {
        id: 'seedform',
        title: 'Seedform - Influencer Gifting Automation',
        description:
          'Influencer gifting automation for Shopify brands with claim links, live status sync, and ROI tracking.'
      },
      {
        id: 'web-scraping',
        title: 'Alenau - AI Personal Stylist',
        description:
          'Canvas-based styling tool with AI outfit recommendations and roast-style critique.'
      },
      {
        id: 'bi-automation',
        title: 'BI Reporting Optimization',
        description:
          'Tableau dashboards and Python automation that reduced reporting cycles by 40%.'
      },
      {
        id: 'luxury-car-salon',
        title: 'Luxury Car Salon',
        description:
          'Premium automotive landing page with a video hero, animated inventory, and private inquiry flow.'
      },
      {
        id: 'marathon-course',
        title: 'The Art of Storytelling Marathon',
        description:
          'Bilingual creative program landing page with localized content, language switching, and signup capture flow.'
      }
    ],
    experienceTitle: 'Experience',
    selfEmployed:
      'Full-Stack Software Engineer (Self-Employed). Delivering custom SaaS platforms, automated web scraping with Selenium/BeautifulSoup, and AI-driven workflows using n8n/Zapier.',
    bank: 'Data Analyst, Jusan Bank. Reduced reporting cycles by 40% with Tableau and saved 10+ hours weekly via Python automation.',
    skillsTitle: 'Technical Skills',
    fullStack: 'Full-Stack:',
    fullStackSkills: 'JavaScript (ES6+), React.js, Node.js, Tailwind CSS',
    data: 'Data & AI:',
    dataSkills:
      'Python (Pandas, Scikit-learn), SQL (PostgreSQL), ML/DL Modeling',
    ops: 'Ops & Tools:',
    opsSkills: 'Docker, Git, Linux, Tableau, n8n, Make',
    educationTitle: 'Education',
    education:
      'Bachelor of Science in Information Communication Technologies, Astana IT University. Focus: Big Data Analysis.',
    contactTitle: 'Contact',
    contact:
      "Looking for an expert who can deliver responsive products and automation-first data systems? Let's talk."
  },
  ru: {
    intro:
      'Разработчик ПО и специалист по данным: автоматизация, data pipelines и бизнес-аналитика.',
    role: 'Разработчик ПО и специалист по данным (фокус: автоматизация)',
    profileTitle: 'Профиль',
    profile:
      'Проектирую цифровые решения полного цикла: от адаптивных интерфейсов на React до автоматизированных data pipelines на Python. Помогаю соединять инженерную работу с данными и бизнес-аналитику, превращая сложные операционные задачи в понятные и измеримые результаты.',
    viewWorks: 'Смотреть кейсы',
    experienceTitle: 'Опыт',
    selfEmployed:
      'Full-Stack Software Engineer (Self-Employed). Разрабатываю custom SaaS-платформы, автоматизированный web scraping на Selenium/BeautifulSoup и AI-workflows через n8n/Zapier.',
    bank: 'Data Analyst, Jusan Bank. Сократил циклы отчетности на 40% с помощью Tableau и сэкономил 10+ часов в неделю благодаря Python-автоматизации.',
    skillsTitle: 'Технические навыки',
    fullStack: 'Full-Stack:',
    fullStackSkills: 'JavaScript (ES6+), React.js, Node.js, Tailwind CSS',
    data: 'Data & AI:',
    dataSkills:
      'Python (Pandas, Scikit-learn), SQL (PostgreSQL), ML/DL Modeling',
    ops: 'Ops & Tools:',
    opsSkills: 'Docker, Git, Linux, Tableau, n8n, Make',
    educationTitle: 'Образование',
    education:
      'Bachelor of Science in Information Communication Technologies, Astana IT University. Фокус: Big Data Analysis.',
    contactTitle: 'Контакты',
    contact:
      'Нужен специалист, который может создать адаптивный продукт и системы данных с упором на автоматизацию? Напишите мне.'
  }
}

export const HomePage = ({ locale = 'en' }) => {
  const t = copy[locale]
  const worksHref = locale === 'ru' ? '/works/ru' : '/works'
  const featuredWorks = t.featuredWorks || copy.en.featuredWorks
  const featuredThumbnails = {
    seedform: thumbAutomation,
    'web-scraping': thumbScraping,
    'bi-automation': thumbAnalytics,
    'luxury-car-salon': thumbLuxuryCarSalon,
    'marathon-course': thumbMarathonCourse
  }
  const carouselProjects = featuredWorks.map(work => ({
    ...work,
    thumbnail: featuredThumbnails[work.id]
  }))

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} mt={{ base: 4, md: 6 }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Damir Sarsenov
            </Heading>
            <p>{t.role}</p>
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
              {t.profileTitle}
            </Heading>
            <Paragraph>{t.profile}</Paragraph>
          </Box>
          <Box as="section" id="projects" mt={8}>
            <Heading as="h3" variant="section-title">
              {t.projectsTitle || copy.en.projectsTitle}
            </Heading>
            <ProjectCarousel locale={locale} projects={carouselProjects} />
          </Box>
          <Box align="center" mt={6}>
            <Button
              as={NextLink}
              href={worksHref}
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              {t.viewAllWorks || copy.en.viewAllWorks}
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Box as="section" id="experience">
            <Heading as="h3" variant="section-title">
              {t.experienceTitle}
            </Heading>
            <BioSection>
              <BioYear>Apr 2024 - Present</BioYear>
              {t.selfEmployed}
            </BioSection>
            <BioSection>
              <BioYear>Sep 2022 - Jan 2024</BioYear>
              {t.bank}
            </BioSection>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Box as="section" id="skills">
            <Heading as="h3" variant="section-title">
              {t.skillsTitle}
            </Heading>
            <List spacing={2} ml={4}>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  {t.fullStack}
                </Box>{' '}
                {t.fullStackSkills}
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  {t.data}
                </Box>{' '}
                {t.dataSkills}
              </ListItem>
              <ListItem>
                <Box as="span" fontWeight="bold">
                  {t.ops}
                </Box>{' '}
                {t.opsSkills}
              </ListItem>
            </List>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Box as="section" id="education">
            <Heading as="h3" variant="section-title">
              {t.educationTitle}
            </Heading>
            <BioSection>
              <BioYear>Sep 2020 - Jul 2023</BioYear>
              {t.education}
            </BioSection>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Box as="section" id="contact">
            <Heading as="h3" variant="section-title">
              {t.contactTitle}
            </Heading>
            <Paragraph>{t.contact}</Paragraph>
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
}

const Home = () => <HomePage locale="en" />

export default Home
