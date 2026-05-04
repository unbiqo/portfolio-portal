import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const copy = {
  en: {
    title: 'Luxury Car Salon - Premium Automotive Landing Page',
    displayTitle: 'Luxury Car Salon - Premium Automotive Landing Page',
    description:
      'Luxury Car Salon is a high-end automotive dealer landing page built for a premium customer presentation. The site uses a quiet-luxury visual direction with a full-screen video hero, refined typography, animated vehicle inventory cards, and a simple contact flow for private inquiries.',
    roleLabel: 'Role',
    role: 'Front-End Developer',
    focusLabel: 'Focus',
    focus: 'Luxury landing page design, responsive UI, Vercel deployment',
    stackLabel: 'Stack',
    stack: 'Next.js, React, Tailwind CSS, Framer Motion, Vercel',
    impactLabel: 'Impact',
    impact:
      'Created a polished customer-ready dealership website with optimized video delivery and production deployment',
    contactLabel: 'Contact',
    linkLabel: 'Link'
  },
  ru: {
    title: 'Luxury Car Salon - премиальный автомобильный лендинг',
    displayTitle: 'Luxury Car Salon - премиальный автомобильный лендинг',
    description:
      'Luxury Car Salon - high-end landing page для автомобильного дилера, созданный для премиальной клиентской презентации. Сайт использует quiet-luxury visual direction: full-screen video hero, утонченную типографику, animated vehicle inventory cards и простой contact flow для private inquiries.',
    roleLabel: 'Роль',
    role: 'Front-End Developer',
    focusLabel: 'Фокус',
    focus: 'Luxury landing page design, responsive UI, Vercel deployment',
    stackLabel: 'Стек',
    stack: 'Next.js, React, Tailwind CSS, Framer Motion, Vercel',
    impactLabel: 'Результат',
    impact:
      'Создан polished customer-ready dealership website с optimized video delivery и production deployment',
    contactLabel: 'Контакт',
    linkLabel: 'Ссылка'
  }
}

export const LuxuryCarSalonPage = ({ locale = 'en' }) => {
  const t = copy[locale] || copy.en

  return (
    <Layout title={t.title}>
      <Container>
        <Title locale={locale}>
          {t.displayTitle} <Badge>2026</Badge>
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
            <span>{t.stack}</span>
          </ListItem>
          <ListItem>
            <Meta>{t.impactLabel}</Meta>
            <span>{t.impact}</span>
          </ListItem>
          <ListItem>
            <Meta>{t.contactLabel}</Meta>
            <Link href="mailto:damir.sarsenov12@gmail.com">
              damir.sarsenov12@gmail.com
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{t.linkLabel}</Meta>
            <Link
              href="https://luxury-car-salon.vercel.app/#top"
              target="_blank"
            >
              Luxury Car Salon <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/luxury-car-salon_01.png"
          alt="Luxury Car Salon landing page preview"
          enableZoom
        />
        <WorkImage
          src="/images/works/luxury-car-salon_02.png"
          alt="Luxury Car Salon landing page preview"
          enableZoom
        />
        <WorkImage
          src="/images/works/luxury-car-salon_03.png"
          alt="Luxury Car Salon landing page preview"
          enableZoom
        />
      </Container>
    </Layout>
  )
}

const Work = () => <LuxuryCarSalonPage locale="en" />

export default Work
export { getServerSideProps } from '../../components/chakra'
