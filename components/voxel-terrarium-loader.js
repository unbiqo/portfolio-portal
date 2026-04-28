import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const TerrariumSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const TerrariumContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-terrarium"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={[
      'calc(-1 * var(--terrarium-overlap, 40px))',
      'calc(-1 * var(--terrarium-overlap, 140px))',
      'calc(-1 * var(--terrarium-overlap, 200px))'
    ]}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <TerrariumContainer>
      <TerrariumSpinner />
    </TerrariumContainer>
  )
}

export default Loader
