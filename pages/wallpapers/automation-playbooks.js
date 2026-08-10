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
    title: 'Automation Playbooks',
    description:
      'A structured approach to automation delivery, covering discovery, orchestration, monitoring, and long-term maintenance for data-driven operations.',
    focusLabel: 'Focus',
    focus: 'Workflow design, reliability, delivery milestones',
    toolsLabel: 'Tools',
    contactLabel: 'Contact'
  },
  ru: {
    title: 'Automation Playbooks',
    description:
      'Структурированный подход к delivery автоматизации: discovery, orchestration, monitoring и долгосрочная поддержка data-driven operations.',
    focusLabel: 'Фокус',
    focus: 'Workflow design, reliability, delivery milestones',
    toolsLabel: 'Инструменты',
    contactLabel: 'Контакт'
  }
}

export const AutomationPlaybooksPage = ({ locale = 'en' }) => {
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
            <span>Python, n8n, Zapier, Docker, Git</span>
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
          src="/images/wallpapers/machiya/ls-03.jpg"
          alt="Automation playbook visual overview"
        />
        <WallpaperImage
          src="/images/wallpapers/machiya/ls-10.jpg"
          alt="Workflow orchestration reference"
        />

        <LegalLinks />
      </Container>
    </Layout>
  )
}

const Resource = () => <AutomationPlaybooksPage locale="en" />

export default Resource
