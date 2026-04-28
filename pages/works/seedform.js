import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, WorkVideo, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Seedform — Influencer Gifting Automation">
    <Container>
      <Title>
        Seedform — Influencer Gifting Automation <Badge>2024 - Present</Badge>
      </Title>
      <P>
        Seedform automates the influencer gifting process for Shopify brands,
        replacing manual emails, CSV cleanup, and blind shipping with
        automated claims, live status sync, and tracked ROI.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Role</Meta>
          <span>Full-Stack Software Engineer</span>
        </ListItem>
        <ListItem>
          <Meta>Focus</Meta>
          <span>Gifting workflow automation, status tracking, ROI analytics</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, Node.js, Shopify APIs</span>
        </ListItem>
        <ListItem>
          <Meta>Impact</Meta>
          <span>41.4 hours saved per month at 120 influencers (example)</span>
        </ListItem>
        <ListItem>
          <Meta>Contact</Meta>
          <Link href="mailto:damir.sarsenov12@gmail.com">
            damir.sarsenov12@gmail.com
          </Link>
        </ListItem>
        <ListItem>
          <Meta>LINK</Meta>
          <Link href="https://myseedform.vercel.app/" target="_blank">
            Seedform <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkVideo src="/videos/Demo_Seedform.mp4" />

      <WorkImage
        src="/images/works/inkdrop_01.png"
        alt="Seedform ROI calculator concept"
        enableZoom
      />
      <WorkImage
        src="/images/works/inkdrop_02.png"
        alt="Seedform gifting workflow concept"
        enableZoom
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

