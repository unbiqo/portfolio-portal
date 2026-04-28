import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, WorkVideoGridItem } from '../components/grid-item'

import thumbAutomation from '../public/images/works/inkdrop_eyecatch.png'
import thumbScraping from '../public/images/works/alenau_eyecatch.png'
import thumbAnalytics from '../public/images/works/the-four-painters_eyecatch.jpg'

const Works = () => (
  <Layout title="Case Studies">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Case Studies
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkVideoGridItem
            id="seedform"
            title="Seedform — Influencer Gifting Automation"
            videoSrc="/videos/Demo_Seedform.mp4"
            poster={thumbAutomation}
          >
            Automates influencer gifting for Shopify brands with claim links,
            live status sync, and ROI tracking that saves hours per month.
          </WorkVideoGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="web-scraping"
            title="Alenau - AI Personal Stylist"
            thumbnail={thumbScraping}
          >
            Canvas-based styling tool with AI outfit recommendations and
            roast-style critique to polish final looks.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="bi-automation"
            title="BI Reporting Optimization"
            thumbnail={thumbAnalytics}
          >
            Tableau dashboards and Python automation that cut reporting cycles
            by 40% and saved 10+ hours weekly.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
