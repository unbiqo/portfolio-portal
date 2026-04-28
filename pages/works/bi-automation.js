import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="BI Reporting Optimization">
    <Container>
      <Title>
        BI Reporting Optimization <Badge>2022 - 2024</Badge>
      </Title>
      <P>
        Tableau-first reporting modernization supported by Python automation,
        reducing reporting cycles by 40% and saving more than 10 hours per week
        through streamlined data preparation.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Role</Meta>
          <span>Data Analyst</span>
        </ListItem>
        <ListItem>
          <Meta>Focus</Meta>
          <span>Dashboards, automation scripts, stakeholder reporting</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Tableau, Python, SQL (PostgreSQL)</span>
        </ListItem>
        <ListItem>
          <Meta>Contact</Meta>
          <Link href="mailto:damir.sarsenov12@gmail.com">
            damir.sarsenov12@gmail.com
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://www.linkedin.com/in/damir-sarsenov/" target="_blank">
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

export default Work
export { getServerSideProps } from '../../components/chakra'

