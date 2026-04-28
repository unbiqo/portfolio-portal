import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import thumbCherryBlossoms from '../../public/images/wallpapers/cherry-blossoms/ls-13.jpg'
import thumbMachiya from '../../public/images/wallpapers/machiya/ls-03.jpg'

const Wallpapers = () => (
  <Layout title="Resources">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Resources
      </Heading>

      <Box my={4}>
        A small collection of playbooks and blueprints that outline how
        automation and analytics initiatives are delivered end to end.
      </Box>

      <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkGridItem
            category="wallpapers"
            id="automation-playbooks"
            title="Automation Playbooks"
            thumbnail={thumbMachiya}
          >
            Frameworks for scoping, building, and maintaining automation-first
            systems.
          </WorkGridItem>
          <WorkGridItem
            category="wallpapers"
            id="reporting-blueprints"
            title="Reporting Blueprints"
            thumbnail={thumbCherryBlossoms}
          >
            Dashboard design and reporting cadences optimized for business
            impact.
          </WorkGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Wallpapers
export { getServerSideProps } from '../../components/chakra'
