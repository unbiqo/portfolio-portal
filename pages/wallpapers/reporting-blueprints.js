import { Container, Link, List, ListItem } from '@chakra-ui/react'
import {
  Title,
  WallpaperImage,
  Meta,
  LegalLinks
} from '../../components/wallpaper'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const copy = {
  en: {
    title: 'Reporting Blueprints',
    description:
      'Practical templates for building Tableau dashboards and automated reporting flows that shorten decision cycles and keep stakeholders aligned.',
    focusLabel: 'Focus',
    focus: 'Dashboard design, KPI alignment, reporting cadence',
    toolsLabel: 'Tools',
    contactLabel: 'Contact'
  },
  ru: {
    title: 'Reporting Blueprints',
    description:
      'Практические шаблоны для Tableau-дашбордов и автоматизированной отчетности, которые сокращают decision cycles и помогают держать stakeholders в контексте.',
    focusLabel: 'Фокус',
    focus: 'Dashboard design, KPI alignment, reporting cadence',
    toolsLabel: 'Инструменты',
    contactLabel: 'Контакт'
  }
}

export const ReportingBlueprintsPage = ({ locale = 'en' }) => {
  const t = copy[locale]

  return (
    <Layout title={t.title}>
      <Container>
        <Title locale={locale}>{t.title}</Title>
        <P>{t.description}</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>{t.focusLabel}</Meta>
            <span>{t.focus}</span>
          </ListItem>
          <ListItem>
            <Meta>{t.toolsLabel}</Meta>
            <span>Tableau, Python, SQL (PostgreSQL)</span>
          </ListItem>
          <ListItem>
            <Meta>{t.contactLabel}</Meta>
            <Link href="mailto:damir.sarsenov12@gmail.com">
              damir.sarsenov12@gmail.com
            </Link>
          </ListItem>
          <ListItem>
            <Meta>LinkedIn</Meta>
            <Link
              href="https://www.linkedin.com/in/damir-sarsenov/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </ListItem>
        </List>

        <WallpaperImage
          src="/images/wallpapers/cherry-blossoms/ls-13.jpg"
          alt="Reporting blueprint overview"
        />
        <WallpaperImage
          src="/images/wallpapers/cherry-blossoms/ls-07.jpg"
          alt="Dashboard layout reference"
        />

        <LegalLinks />
      </Container>
    </Layout>
  )
}

const Resource = () => <ReportingBlueprintsPage locale="en" />

export default Resource
export { getServerSideProps } from '../../components/chakra'
