import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbCherryBlossoms from '../../public/images/wallpapers/cherry-blossoms/ls-13.jpg'
import thumbMachiya from '../../public/images/wallpapers/machiya/ls-03.jpg'

const copy = {
  en: {
    title: 'Resources',
    intro:
      'A small collection of playbooks and blueprints that outline how automation and analytics initiatives are delivered end to end.',
    automationTitle: 'Automation Playbooks',
    automation:
      'Frameworks for scoping, building, and maintaining automation-first systems.',
    reportingTitle: 'Reporting Blueprints',
    reporting:
      'Dashboard design and reporting cadences optimized for business impact.'
  },
  ru: {
    title: 'Ресурсы',
    intro:
      'Небольшая коллекция playbooks и blueprints о том, как проводить автоматизацию и аналитику от идеи до поддержки.',
    automationTitle: 'Automation Playbooks',
    automation:
      'Фреймворки для scoping, разработки и поддержки automation-first систем.',
    reportingTitle: 'Reporting Blueprints',
    reporting:
      'Дизайн дашбордов и ритм отчетности, оптимизированные под бизнес-результат.'
  }
}

export const WallpapersPage = ({ locale = 'en' }) => {
  const t = copy[locale]

  return (
    <Layout title={t.title}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t.title}
        </Heading>

        <Box my={4}>{t.intro}</Box>

        <Section>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <WorkGridItem
              category="wallpapers"
              id="automation-playbooks"
              locale={locale}
              title={t.automationTitle}
              thumbnail={thumbMachiya}
            >
              {t.automation}
            </WorkGridItem>
            <WorkGridItem
              category="wallpapers"
              id="reporting-blueprints"
              locale={locale}
              title={t.reportingTitle}
              thumbnail={thumbCherryBlossoms}
            >
              {t.reporting}
            </WorkGridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

const Wallpapers = () => <WallpapersPage locale="en" />

export default Wallpapers
