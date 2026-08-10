import { useEffect, useRef, useState } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Spinner,
  Text,
  Textarea,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'
import { IoChatbubbleEllipses, IoClose, IoSend } from 'react-icons/io5'
import { getRoute } from '../lib/i18n'

const copy = {
  en: {
    title: 'Portfolio Chat',
    intro: 'Ask about Damir, his projects, skills, or contact details.',
    placeholder: 'Ask a question...',
    send: 'Send',
    open: 'Open chat',
    close: 'Close chat',
    sources: 'Sources',
    error: 'Sorry, the chat is unavailable right now.'
  },
  ru: {
    title: 'Portfolio Chat',
    intro: 'Ask about Damir, his projects, skills, or contact details.',
    placeholder: 'Ask a question...',
    send: 'Send',
    open: 'Open chat',
    close: 'Close chat',
    sources: 'Sources',
    error: 'Sorry, the chat is unavailable right now.'
  }
}

const ChatBubble = ({ locale, message, onSourceClick, sourceLabel }) => {
  const isUser = message.role === 'user'
  const bubbleBg = useColorModeValue(
    isUser ? 'teal.500' : 'whiteAlpha.900',
    isUser ? 'teal.300' : 'whiteAlpha.200'
  )
  const bubbleColor = useColorModeValue(
    isUser ? 'white' : 'gray.800',
    isUser ? 'gray.900' : 'whiteAlpha.900'
  )

  return (
    <Flex justify={isUser ? 'flex-end' : 'flex-start'} w="100%">
      <Box
        maxW="84%"
        px={3}
        py={2}
        borderRadius="lg"
        bg={bubbleBg}
        color={bubbleColor}
        whiteSpace="pre-wrap"
        fontSize="sm"
        lineHeight={1.5}
      >
        <Text>{message.content}</Text>
        {!isUser && message.sources?.length ? (
          <Box mt={2}>
            <Text fontSize="xs" opacity={0.72} mb={1}>
              {sourceLabel}
            </Text>
            <HStack spacing={2} flexWrap="wrap">
              {message.sources.map(source => (
                <Link
                  key={source.id}
                  as={NextLink}
                  href={getRoute(source.url, locale)}
                  onClick={onSourceClick}
                  fontSize="xs"
                  color="teal.300"
                  textDecoration="underline"
                >
                  {source.title}
                </Link>
              ))}
            </HStack>
          </Box>
        ) : null}
      </Box>
    </Flex>
  )
}

const ChatWidget = ({ locale = 'en' }) => {
  const t = copy[locale] || copy.en
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef(null)
  const panelBg = useColorModeValue('white', '#202023')
  const panelBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const introBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.100')

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, isLoading, isOpen])

  const submitMessage = async () => {
    const question = input.trim()
    if (!question || isLoading) return

    const nextMessages = [...messages, { role: 'user', content: question }]
    setMessages(nextMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: question,
          history: messages.slice(-8)
        })
      })
      const data = await response.json().catch(() => ({}))

      setMessages(currentMessages => [
        ...currentMessages,
        {
          role: 'assistant',
          content: data.answer || data.error || t.error,
          sources: data.sources || []
        }
      ])
    } catch {
      setMessages(currentMessages => [
        ...currentMessages,
        { role: 'assistant', content: t.error }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = event => {
    if (event.key !== 'Enter' || event.shiftKey) return
    event.preventDefault()
    submitMessage()
  }

  return (
    <Box
      position="fixed"
      right={{ base: 4, md: 6 }}
      bottom={{ base: 4, md: 6 }}
      zIndex={3}
      pointerEvents="none"
    >
      {isOpen && (
        <Box
          pointerEvents="auto"
          w={{ base: 'calc(100vw - 32px)', sm: '380px' }}
          maxW="380px"
          mb={3}
          borderWidth={1}
          borderColor={panelBorder}
          borderRadius="lg"
          bg={panelBg}
          boxShadow="xl"
          overflow="hidden"
        >
          <Flex
            align="center"
            justify="space-between"
            px={4}
            py={3}
            borderBottomWidth={1}
            borderColor={panelBorder}
          >
            <Text fontWeight="bold">{t.title}</Text>
            <IconButton
              aria-label={t.close}
              icon={<IoClose />}
              size="sm"
              variant="ghost"
              onClick={() => setIsOpen(false)}
            />
          </Flex>
          <VStack
            ref={scrollRef}
            align="stretch"
            spacing={3}
            h={{ base: '390px', md: '430px' }}
            maxH="58vh"
            overflowY="auto"
            p={4}
          >
            {!messages.length && (
              <Box bg={introBg} borderRadius="md" px={3} py={2}>
                <Text fontSize="sm">{t.intro}</Text>
              </Box>
            )}
            {messages.map((message, index) => (
              <ChatBubble
                key={`${message.role}-${index}`}
                locale={locale}
                message={message}
                onSourceClick={() => setIsOpen(false)}
                sourceLabel={t.sources}
              />
            ))}
            {isLoading && (
              <Flex align="center" gap={2} color="teal.300" fontSize="sm">
                <Spinner size="sm" />
                <Text>Thinking</Text>
              </Flex>
            )}
          </VStack>
          <Box p={3} borderTopWidth={1} borderColor={panelBorder}>
            <Flex gap={2} align="flex-end">
              <Textarea
                value={input}
                onChange={event => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.placeholder}
                size="sm"
                minH="42px"
                maxH="120px"
                resize="vertical"
                maxLength={700}
              />
              <IconButton
                aria-label={t.send}
                icon={<IoSend />}
                colorScheme="teal"
                onClick={submitMessage}
                isLoading={isLoading}
                isDisabled={!input.trim()}
              />
            </Flex>
          </Box>
        </Box>
      )}

      <Flex justify="flex-end">
        <Button
          pointerEvents="auto"
          leftIcon={<IoChatbubbleEllipses />}
          colorScheme="teal"
          borderRadius="full"
          boxShadow="lg"
          onClick={() => setIsOpen(value => !value)}
          aria-label={isOpen ? t.close : t.open}
        >
          Chat
        </Button>
      </Flex>
    </Box>
  )
}

export default ChatWidget
