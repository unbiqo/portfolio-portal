import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, WorkVideo, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const copy = {
  en: {
    title: 'Seedform - Influencer Gifting Automation',
    heading: 'Seedform - Influencer Gifting Automation',
    description:
      'Seedform automates the influencer gifting process for Shopify brands, replacing manual emails, CSV cleanup, and blind shipping with automated claims, live status sync, and tracked ROI.',
    roleLabel: 'Role',
    role: 'Full-Stack Software Engineer',
    focusLabel: 'Focus',
    focus: 'Gifting workflow automation, status tracking, ROI analytics',
    stackLabel: 'Stack',
    impactLabel: 'Impact',
    impact: '41.4 hours saved per month at 120 influencers (example)',
    contactLabel: 'Contact',
    linkLabel: 'Link'
  },
  ru: {
    title: 'Seedform - автоматизация influencer gifting',
    heading: 'Seedform - автоматизация influencer gifting',
    description:
      'Seedform автоматизирует influencer gifting для Shopify-брендов: вместо ручных писем, CSV cleanup и непрозрачной доставки команда получает automated claims, live status sync и tracked ROI.',
    roleLabel: 'Роль',
    role: 'Full-Stack Software Engineer',
    focusLabel: 'Фокус',
    focus: 'Автоматизация gifting workflow, status tracking, ROI analytics',
    stackLabel: 'Стек',
    impactLabel: 'Результат',
    impact: '41.4 часа экономии в месяц при 120 influencers (примерный расчет)',
    contactLabel: 'Контакт',
    linkLabel: 'Ссылка'
  }
}

export const SeedformPage = ({ locale = 'en' }) => {
  const t = copy[locale]

  return (
    <Layout title={t.title}>
      <Container>
        <Title locale={locale}>
          {t.heading} <Badge>2024 - Present</Badge>
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
            <span>React.js, Node.js, Shopify APIs</span>
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
            <Link href="https://myseedform.vercel.app/" target="_blank">
              Seedform <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkVideo src="/videos/Demo_Seedform.mp4" />

        <WorkImage
          src="/images/works/inkdrop_01.png"
          alt="Seedform ROI calculator concept"
          enableZoom
        />
        <WorkImage
          src="/images/works/inkdrop_02.png"
          alt="Seedform gifting workflow concept"
          enableZoom
        />
      </Container>
    </Layout>
  )
}

const Work = () => <SeedformPage locale="en" />

export default Work
