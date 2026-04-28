import { useRef, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkVideoGridItem = ({
  children,
  category = 'works',
  id,
  title,
  videoSrc,
  poster
}) => {
  const videoRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const posterSrc = typeof poster === 'string' ? poster : poster?.src

  const handleMouseEnter = () => {
    const video = videoRef.current
    if (!video) return
    setIsHovering(true)
    if (video.readyState < 2) {
      video.load()
    }
    const playPromise = video.play()
    if (playPromise) {
      playPromise.catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    setIsHovering(false)
  }

  return (
    <Box w="100%" textAlign="center">
      <LinkBox
        as={NextLink}
        href={`/${category}/${id}`}
        scroll={false}
        cursor="pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        <Box position="relative" borderRadius="12px" overflow="hidden">
          {posterSrc && (
            <Box
              as="img"
              src={posterSrc}
              alt={title}
              className="grid-item-thumbnail"
              w="100%"
              h="100%"
              objectFit="cover"
              position="absolute"
              inset={0}
              opacity={isHovering ? 0 : 1}
              transition="opacity 0.2s ease"
              pointerEvents="none"
            />
          )}
          <Box
            as="video"
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            muted
            loop
            playsInline
            preload="auto"
            className="grid-item-thumbnail"
            w="100%"
            display="block"
            opacity={isHovering ? 1 : 0}
            transition="opacity 0.2s ease"
          />
        </Box>
        <LinkOverlay as="div" href={`/${category}/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        display: block;
      }
    `}
  />
)
