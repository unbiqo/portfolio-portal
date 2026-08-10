import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbAutomation from '../public/images/contents/youtube-how-to-build-portfolio.jpg'
import thumbPipeline from '../public/images/contents/blog-financial-goal.png'
import thumbDashboard from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumbAI from '../public/images/contents/youtube-50x-faster.jpg'

const copy = {
  en: {
    title: 'Insights',
    heading: 'Insights & Process',
    automationTitle: 'Automation Architecture',
    automation:
      'Scoping, orchestration, and reliability patterns for automation-first products.',
    pipelineTitle: 'Data Pipeline Reliability',
    pipeline:
      'Validation, monitoring, and alerting strategies for trustworthy data feeds.',
    dashboardTitle: 'BI Dashboard Strategy',
    dashboard:
      'Tableau design and reporting cadence that drive business decisions.',
    aiTitle: 'AI Workflow Orchestration',
    ai: 'Human-in-the-loop automation with n8n and Zapier integrations.'
  },
  ru: {
    title: 'Материалы',
    heading: 'Материалы и процесс',
    automationTitle: 'Архитектура автоматизации',
    automation:
      'Как определить scope, собрать orchestration и заложить надежность в automation-first продукты.',
    pipelineTitle: 'Надежность data pipeline',
    pipeline:
      'Валидация, мониторинг и алерты, которые помогают доверять потокам данных.',
    dashboardTitle: 'Стратегия BI-дашбордов',
    dashboard:
      'Дизайн Tableau и ритм отчетности, которые помогают принимать бизнес-решения.',
    aiTitle: 'Оркестрация AI-workflows',
    ai: 'Human-in-the-loop автоматизация с интеграциями n8n, Zapier и AI-сервисов.'
  }
}

export const PostsPage = ({ locale = 'en' }) => {
  const t = copy[locale]

  return (
    <Layout title={t.title}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t.heading}
        </Heading>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title={t.automationTitle}
              thumbnail={thumbAutomation}
              href="https://www.linkedin.com/in/damir-sarsenov/"
            >
              {t.automation}
            </GridItem>
            <GridItem
              title={t.pipelineTitle}
              thumbnail={thumbPipeline}
              href="https://www.linkedin.com/in/damir-sarsenov/"
            >
              {t.pipeline}
            </GridItem>
            <GridItem
              title={t.dashboardTitle}
              thumbnail={thumbDashboard}
              href="https://www.linkedin.com/in/damir-sarsenov/"
            >
              {t.dashboard}
            </GridItem>
            <GridItem
              title={t.aiTitle}
              thumbnail={thumbAI}
              href="https://www.linkedin.com/in/damir-sarsenov/"
            >
              {t.ai}
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

const Posts = () => <PostsPage locale="en" />

export default Posts
