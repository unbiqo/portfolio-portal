import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const copy = {
  en: {
    title: 'BI Reporting Optimization',
    description:
      'Tableau-first reporting modernization supported by Python automation, reducing reporting cycles by 40% and saving more than 10 hours per week through streamlined data preparation.',
    roleLabel: 'Role',
    role: 'Data Analyst',
    focusLabel: 'Focus',
    focus: 'Dashboards, automation scripts, stakeholder reporting',
    stackLabel: 'Stack',
    contactLabel: 'Contact',
    linkLabel: 'Link'
  },
  ru: {
    title: 'Оптимизация BI-отчетности',
    description:
      'Модернизация отчетности с фокусом на Tableau и Python-автоматизацию: цикл подготовки отчетов сократился на 40%, а повторяемая работа стала занимать на 10+ часов в неделю меньше.',
    roleLabel: 'Роль',
    role: 'Data Analyst',
    focusLabel: 'Фокус',
    focus: 'Дашборды, automation scripts, stakeholder reporting',
    stackLabel: 'Стек',
    contactLabel: 'Контакт',
    linkLabel: 'Ссылка'
  }
}

export const BiAutomationPage = ({ locale = 'en' }) => {
  const t = copy[locale]

  return (
    <Layout title={t.title}>
      <Container>
        <Title locale={locale}>
          {t.title} <Badge>2022 - 2024</Badge>
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
            <span>Tableau, Python, SQL (PostgreSQL)</span>
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
              href="https://www.linkedin.com/in/damir-sarsenov/"
              target="_blank"
            >
              Link <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/the-four-painters_01.jpg"
          alt="Business intelligence dashboard overview"
          enableZoom
        />
        <WorkImage
          src="/images/works/the-four-painters_02.jpg"
          alt="Reporting automation summary view"
          enableZoom
        />
      </Container>
    </Layout>
  )
}

const Work = () => <BiAutomationPage locale="en" />

export default Work
