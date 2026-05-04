import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const copy = {
  en: {
    title: 'The Art of Storytelling Marathon - Multilingual Landing Page',
    description:
      'The Art of Storytelling Marathon is a high-end multilingual landing page for a creative writing and speaking program, designed with an organic illustrated path concept, localized English/Russian content, and a built-in signup flow for collecting participant contact details.',
    roleLabel: 'Role',
    role: 'Front-End Developer',
    focusLabel: 'Focus',
    focus:
      'Multilingual landing page, organic UI design, localization, signup conversion flow',
    stackLabel: 'Stack',
    impactLabel: 'Impact',
    impact:
      'Built a polished bilingual marketing page with natural EN/RU copy, responsive illustrated-layout sections, language switching, and a lead capture form for email or phone signups.',
    contactLabel: 'Contact',
    linkLabel: 'Link',
    heroAlt: 'The Art of Storytelling Marathon landing page hero',
    routeAlt: 'The Art of Storytelling Marathon illustrated route section',
    signupAlt: 'The Art of Storytelling Marathon signup form'
  },
  ru: {
    title: 'The Art of Storytelling Marathon - мультиязычный лендинг',
    description:
      'The Art of Storytelling Marathon - премиальный лендинг для программы по письму и публичному сторителлингу. В основе страницы: органичная иллюстрированная траектория, отдельная английская и русская подача и встроенная форма записи для сбора контактов участников.',
    roleLabel: 'Роль',
    role: 'Front-End Developer',
    focusLabel: 'Фокус',
    focus:
      'Мультиязычный лендинг, органичный UI, локализация, signup conversion flow',
    stackLabel: 'Стек',
    impactLabel: 'Результат',
    impact:
      'Собрал аккуратную bilingual marketing page с естественной EN/RU-подачей, адаптивными illustrated-layout секциями, переключением языка и lead capture формой для email или телефона.',
    contactLabel: 'Контакт',
    linkLabel: 'Ссылка',
    heroAlt: 'Hero-секция лендинга The Art of Storytelling Marathon',
    routeAlt: 'Иллюстрированный маршрут программы The Art of Storytelling Marathon',
    signupAlt: 'Форма записи The Art of Storytelling Marathon'
  }
}

export const MarathonCoursePage = ({ locale = 'en' }) => {
  const t = copy[locale] || copy.en

  return (
    <Layout title={t.title}>
      <Container>
        <Title locale={locale}>
          {t.title} <Badge>2026 - Present</Badge>
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
            <span>React.js, Vite, Tailwind CSS, react-i18next, Vercel</span>
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
            <Link href="https://marathon-course.vercel.app/" target="_blank">
              The Art of Storytelling Marathon <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/marathon-course_01.png"
          alt={t.heroAlt}
          enableZoom
        />
        <WorkImage
          src="/images/works/marathon-course_02.png"
          alt={t.routeAlt}
          enableZoom
        />
        <WorkImage
          src="/images/works/marathon-course_03.png"
          alt={t.signupAlt}
          enableZoom
        />
      </Container>
    </Layout>
  )
}

const Work = () => <MarathonCoursePage locale="en" />

export default Work
export { getServerSideProps } from '../../components/chakra'
