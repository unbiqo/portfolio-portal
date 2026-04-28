import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbAutomation from '../public/images/contents/youtube-how-to-build-portfolio.jpg'
import thumbPipeline from '../public/images/contents/blog-financial-goal.png'
import thumbDashboard from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumbAI from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Insights">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Insights & Process
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Automation Architecture"
            thumbnail={thumbAutomation}
            href="https://www.linkedin.com/in/damir-sarsenov/"
          >
            Scoping, orchestration, and reliability patterns for automation-first
            products.
          </GridItem>
          <GridItem
            title="Data Pipeline Reliability"
            thumbnail={thumbPipeline}
            href="https://www.linkedin.com/in/damir-sarsenov/"
          >
            Validation, monitoring, and alerting strategies for trustworthy
            data feeds.
          </GridItem>
          <GridItem
            title="BI Dashboard Strategy"
            thumbnail={thumbDashboard}
            href="https://www.linkedin.com/in/damir-sarsenov/"
          >
            Tableau design and reporting cadence that drive business decisions.
          </GridItem>
          <GridItem
            title="AI Workflow Orchestration"
            thumbnail={thumbAI}
            href="https://www.linkedin.com/in/damir-sarsenov/"
          >
            Human-in-the-loop automation with n8n and Zapier integrations.
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
