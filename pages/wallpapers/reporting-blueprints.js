import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WallpaperImage, Meta, LegalLinks } from '../../components/wallpaper'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Resource = () => (
  <Layout title="Reporting Blueprints">
    <Container>
      <Title>Reporting Blueprints</Title>
      <P>
        Practical templates for building Tableau dashboards and automated
        reporting flows that shorten decision cycles and keep stakeholders
        aligned.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Focus</Meta>
          <span>Dashboard design, KPI alignment, reporting cadence</span>
        </ListItem>
        <ListItem>
          <Meta>Tools</Meta>
          <span>Tableau, Python, SQL (PostgreSQL)</span>
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
        src="/images/wallpapers/cherry-blossoms/ls-13.jpg"
        alt="Reporting blueprint overview"
      />
      <WallpaperImage
        src="/images/wallpapers/cherry-blossoms/ls-07.jpg"
        alt="Dashboard layout reference"
      />

      <LegalLinks />
    </Container>
  </Layout>
)

export default Resource
export { getServerSideProps } from '../../components/chakra'

