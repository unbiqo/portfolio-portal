import { useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

const ProjectCarousel = ({ locale = 'en', projects }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]
  const cardBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const mutedColor = useColorModeValue('gray.600', 'whiteAlpha.700')
  const href = `/works/${activeProject.id}${locale === 'ru' ? '/ru' : ''}`

  const goToPrevious = () => {
    setActiveIndex(index => (index === 0 ? projects.length - 1 : index - 1))
  }

  const goToNext = () => {
    setActiveIndex(index => (index === projects.length - 1 ? 0 : index + 1))
  }

  return (
    <Box
      borderWidth={1}
      borderColor={borderColor}
      borderRadius="8px"
      bg={cardBg}
      overflow="hidden"
    >
      <Box position="relative" aspectRatio="16 / 9" bg="blackAlpha.200">
        <Image
          key={activeProject.id}
          src={activeProject.thumbnail}
          alt={activeProject.title}
          fill
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 768px"
          style={{ objectFit: 'cover' }}
          priority={activeIndex === 0}
        />

        <IconButton
          aria-label="Previous project"
          icon={<IoChevronBack />}
          position="absolute"
          left={{ base: 2, md: 3 }}
          top="50%"
          transform="translateY(-50%)"
          size={{ base: 'sm', md: 'md' }}
          borderRadius="full"
          onClick={goToPrevious}
        />
        <IconButton
          aria-label="Next project"
          icon={<IoChevronForward />}
          position="absolute"
          right={{ base: 2, md: 3 }}
          top="50%"
          transform="translateY(-50%)"
          size={{ base: 'sm', md: 'md' }}
          borderRadius="full"
          onClick={goToNext}
        />
      </Box>

      <Box px={{ base: 4, md: 5 }} py={4}>
        <Flex
          gap={4}
          align={{ base: 'stretch', md: 'center' }}
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
          <Box minW={0}>
            <Text fontSize={{ base: 18, md: 20 }} fontWeight="bold" mb={1}>
              {activeProject.title}
            </Text>
            <Text fontSize={14} color={mutedColor} lineHeight={1.55}>
              {activeProject.description}
            </Text>
          </Box>
          <Button
            as={NextLink}
            href={href}
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            flexShrink={0}
            alignSelf={{ base: 'flex-start', md: 'center' }}
          >
            Open project
          </Button>
        </Flex>

        <HStack mt={4} spacing={2} justify="center">
          {projects.map((project, index) => (
            <Box
              as="button"
              key={project.id}
              type="button"
              aria-label={`Show ${project.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              w={index === activeIndex ? '24px' : '8px'}
              h="8px"
              borderRadius="full"
              bg={index === activeIndex ? 'teal.300' : mutedColor}
              opacity={index === activeIndex ? 1 : 0.5}
              transition="all 0.2s ease"
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  )
}

export default ProjectCarousel
