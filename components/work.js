import { useRef, useState } from 'react'
import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/works">
      Case Studies
    </Link>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt, enableZoom = false }) => {
  const containerRef = useRef(null)
  const [lens, setLens] = useState({
    visible: false,
    left: 0,
    top: 0,
    bgPosX: 0,
    bgPosY: 0,
    bgSize: '0px 0px'
  })

  const lensWidth = 240
  const lensHeight = 160
  const zoomScale = 2

  const handleMouseMove = event => {
    if (!enableZoom || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    if (!rect.width || !rect.height) return

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const clampedX = Math.max(0, Math.min(x, rect.width))
    const clampedY = Math.max(0, Math.min(y, rect.height))

    const maxLeft = Math.max(0, rect.width - lensWidth)
    const maxTop = Math.max(0, rect.height - lensHeight)
    const left = Math.min(Math.max(clampedX - lensWidth / 2, 0), maxLeft)
    const top = Math.min(Math.max(clampedY - lensHeight / 2, 0), maxTop)

    const bgPosX = -(clampedX * zoomScale - lensWidth / 2)
    const bgPosY = -(clampedY * zoomScale - lensHeight / 2)
    const bgSize = `${rect.width * zoomScale}px ${rect.height * zoomScale}px`

    setLens({
      visible: true,
      left,
      top,
      bgPosX,
      bgPosY,
      bgSize
    })
  }

  const handleMouseLeave = () => {
    if (!enableZoom) return
    setLens(prev => ({ ...prev, visible: false }))
  }

  if (!enableZoom) {
    return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
  }

  return (
    <Box
      ref={containerRef}
      position="relative"
      mb={4}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      cursor="zoom-in"
    >
      <Image borderRadius="lg" w="full" src={src} alt={alt} />
      {lens.visible ? (
        <Box
          position="absolute"
          left={`${lens.left}px`}
          top={`${lens.top}px`}
          width={`${lensWidth}px`}
          height={`${lensHeight}px`}
          borderRadius="16px"
          boxShadow="0 8px 24px rgba(0, 0, 0, 0.2)"
          border="2px solid rgba(255, 255, 255, 0.9)"
          backgroundImage={`url(${src})`}
          backgroundRepeat="no-repeat"
          backgroundPosition={`${lens.bgPosX}px ${lens.bgPosY}px`}
          backgroundSize={lens.bgSize}
          pointerEvents="none"
          zIndex={1}
        />
      ) : null}
    </Box>
  )
}

export const WorkVideo = ({ src, poster }) => (
  <Box
    as="video"
    src={src}
    poster={poster}
    controls
    playsInline
    preload="metadata"
    borderRadius="lg"
    w="full"
    mb={4}
  />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
