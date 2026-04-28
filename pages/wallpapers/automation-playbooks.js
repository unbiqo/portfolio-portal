import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WallpaperImage, Meta, LegalLinks } from '../../components/wallpaper'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Resource = () => (
  <Layout title="Automation Playbooks">
    <Container>
      <Title>Automation Playbooks</Title>
      <P>
        A structured approach to automation delivery, covering discovery,
        orchestration, monitoring, and long-term maintenance for data-driven
        operations.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Focus</Meta>
          <span>Workflow design, reliability, delivery milestones</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Python, n8n, Zapier, Docker, Git</span>
        </ListItem>
        <ListItem>
          <Meta>Contact</Meta>
          <Link href="mailto:damir.sarsenov12@gmail.com">
            damir.sarsenov12@gmail.com
          </Link>
        </ListItem>
        <ListItem>
          <Meta>LinkedIn</Meta>
          <Link href="https://www.linkedin.com/in/damir-sarsenov/" target="_blank">
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

export default Resource
export { getServerSideProps } from '../../components/chakra'

