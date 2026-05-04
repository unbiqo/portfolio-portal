import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The Art of Storytelling Marathon - Multilingual Landing Page">
    <Container>
      <Title>
        The Art of Storytelling Marathon - Multilingual Landing Page{' '}
        <Badge>2026 - Present</Badge>
      </Title>
      <P>
        The Art of Storytelling Marathon is a high-end multilingual landing page
        for a creative writing and speaking program, designed with an organic
        illustrated path concept, localized English/Russian content, and a
        built-in signup flow for collecting participant contact details.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Role</Meta>
          <span>Front-End Developer</span>
        </ListItem>
        <ListItem>
          <Meta>Focus</Meta>
          <span>
            Multilingual landing page, organic UI design, localization, signup
            conversion flow
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, Vite, Tailwind CSS, react-i18next, Vercel</span>
        </ListItem>
        <ListItem>
          <Meta>Impact</Meta>
          <span>
            Built a polished bilingual marketing page with natural EN/RU copy,
            responsive illustrated-layout sections, language switching, and a
            lead capture form for email or phone signups.
          </span>
        </ListItem>
        <ListItem>
          <Meta>Contact</Meta>
          <Link href="mailto:damir.sarsenov12@gmail.com">
            damir.sarsenov12@gmail.com
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://marathon-course.vercel.app/" target="_blank">
            The Art of Storytelling Marathon <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/marathon-course_01.png"
        alt="The Art of Storytelling Marathon landing page hero"
        enableZoom
      />
      <WorkImage
        src="/images/works/marathon-course_02.png"
        alt="The Art of Storytelling Marathon illustrated route section"
        enableZoom
      />
      <WorkImage
        src="/images/works/marathon-course_03.png"
        alt="The Art of Storytelling Marathon signup form"
        enableZoom
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
