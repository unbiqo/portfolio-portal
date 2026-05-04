import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, WorkVideoGridItem } from '../components/grid-item'

import thumbAutomation from '../public/images/works/inkdrop_eyecatch.png'
import thumbScraping from '../public/images/works/alenau_eyecatch.png'
import thumbAnalytics from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbLuxuryCarSalon from '../public/images/works/luxury-car-salon_01.png'

const copy = {
  en: {
    title: 'Case Studies',
    seedformTitle: 'Seedform - Influencer Gifting Automation',
    seedform:
      'Automates influencer gifting for Shopify brands with claim links, live status sync, and ROI tracking that saves hours per month.',
    alenauTitle: 'Alenau - AI Personal Stylist',
    alenau:
      'Canvas-based styling tool with AI outfit recommendations and roast-style critique to polish final looks.',
    biTitle: 'BI Reporting Optimization',
    bi: 'Tableau dashboards and Python automation that cut reporting cycles by 40% and saved 10+ hours weekly.',
    luxuryCarSalonTitle: 'Luxury Car Salon - Premium Automotive Landing Page',
    luxuryCarSalon:
      'High-end automotive dealer landing page with a full-screen video hero, refined typography, animated inventory cards, and private inquiry flow.'
  },
  ru: {
    title: 'Кейсы',
    seedformTitle: 'Seedform - автоматизация influencer gifting',
    seedform:
      'Автоматизирует gifting для Shopify-брендов: claim links, live status sync и ROI tracking, которые экономят часы каждый месяц.',
    alenauTitle: 'Alenau - AI персональный стилист',
    alenau:
      'Canvas-инструмент для стилизации с AI-рекомендациями по образам и roast-style критикой для финальной доработки.',
    biTitle: 'Оптимизация BI-отчетности',
    bi: 'Tableau-дашборды и Python-автоматизация, которые сократили цикл отчетности на 40% и сэкономили 10+ часов в неделю.',
    luxuryCarSalonTitle: 'Luxury Car Salon - премиальный автомобильный лендинг',
    luxuryCarSalon:
      'Премиальный лендинг для автомобильного салона с full-screen video hero, утонченной типографикой, animated inventory cards и private inquiry flow.'
  }
}

export const WorksPage = ({ locale = 'en' }) => {
  const t = copy[locale]

  return (
    <Layout title={t.title}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t.title}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkVideoGridItem
              id="seedform"
              locale={locale}
              title={t.seedformTitle}
              videoSrc="/videos/Demo_Seedform.mp4"
              poster={thumbAutomation}
            >
              {t.seedform}
            </WorkVideoGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="web-scraping"
              locale={locale}
              title={t.alenauTitle}
              thumbnail={thumbScraping}
            >
              {t.alenau}
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="bi-automation"
              locale={locale}
              title={t.biTitle}
              thumbnail={thumbAnalytics}
            >
              {t.bi}
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="luxury-car-salon"
              locale={locale}
              title={t.luxuryCarSalonTitle}
              thumbnail={thumbLuxuryCarSalon}
            >
              {t.luxuryCarSalon}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

const Works = () => <WorksPage locale="en" />

export default Works
export { getServerSideProps } from '../components/chakra'
