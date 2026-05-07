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
    mt={8}
    mb={4}
    w={[140, 240, 320]}
    h={[140, 240, 320]}
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
