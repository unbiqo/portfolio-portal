import { getRelevantKnowledge } from '../../lib/chat-knowledge'

const GEMINI_ENDPOINT =
  'https://generativelanguage.googleapis.com/v1beta/models'
const DEFAULT_MODEL = 'gemini-2.5-flash'
const MAX_MESSAGE_LENGTH = 700
const MAX_HISTORY_ITEMS = 8
const RATE_LIMIT_WINDOW_MS = 60 * 1000
const RATE_LIMIT_REQUESTS = 12

const rateLimitBuckets = new Map()

const getClientIp = req => {
  const forwardedFor = req.headers['x-forwarded-for']
  if (typeof forwardedFor === 'string') {
    return forwardedFor.split(',')[0].trim()
  }

  return req.socket?.remoteAddress || 'unknown'
}

const checkRateLimit = req => {
  const ip = getClientIp(req)
  const now = Date.now()
  const bucket = rateLimitBuckets.get(ip)

  if (!bucket || now - bucket.startedAt > RATE_LIMIT_WINDOW_MS) {
    rateLimitBuckets.set(ip, { count: 1, startedAt: now })
    return true
  }

  if (bucket.count >= RATE_LIMIT_REQUESTS) return false

  bucket.count += 1
  return true
}

const normalizeMessage = value =>
  String(value || '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_MESSAGE_LENGTH)

const normalizeHistory = history =>
  Array.isArray(history)
    ? history
        .filter(
          item =>
            item &&
            ['user', 'assistant'].includes(item.role) &&
            typeof item.content === 'string'
        )
        .slice(-MAX_HISTORY_ITEMS)
        .map(item => ({
          role: item.role,
          content: normalizeMessage(item.content)
        }))
    : []

const formatKnowledge = chunks =>
  chunks
    .map(chunk => `[${chunk.title}]\nURL: ${chunk.url}\nContext: ${chunk.text}`)
    .join('\n\n')

const formatHistory = history =>
  history
    .map(
      item => `${item.role === 'user' ? 'User' : 'Assistant'}: ${item.content}`
    )
    .join('\n')

const buildPrompt = ({ message, history, knowledge }) => {
  const historyText = history.length
    ? `Conversation so far:\n${formatHistory(history)}`
    : 'Conversation so far: none.'

  return `You are the chat assistant for Damir Sarsenov's portfolio website.

Rules:
- Answer using only the Portfolio Context below.
- If the answer is not in the Portfolio Context, say that you do not know from Damir's portfolio yet and suggest contacting him.
- Keep replies concise, practical, and specific.
- Do not invent experience, employers, project results, technologies, links, prices, or availability.
- If the user asks how to contact Damir, include his email and LinkedIn.
- Match the user's language when possible.

Portfolio Context:
${formatKnowledge(knowledge)}

${historyText}

User question:
${message}

Answer:`
}

const getGeminiText = data =>
  data?.candidates?.[0]?.content?.parts
    ?.map(part => part.text || '')
    .join('')
    .trim()

const callGemini = async prompt => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL

  if (!apiKey) {
    return {
      status: 503,
      error:
        'Portfolio chat is not configured yet. Add GEMINI_API_KEY on the server to enable answers.'
    }
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 25000)

  try {
    const response = await fetch(
      `${GEMINI_ENDPOINT}/${model}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }]
            }
          ],
          generationConfig: {
            maxOutputTokens: 500,
            temperature: 0.3
          }
        }),
        signal: controller.signal
      }
    )

    const data = await response.json().catch(() => ({}))

    if (!response.ok) {
      return {
        status: response.status,
        error:
          data?.error?.message ||
          'Gemini could not answer right now. Please try again later.'
      }
    }

    const text = getGeminiText(data)

    if (!text) {
      return {
        status: 502,
        error: 'Gemini returned an empty response. Please try again.'
      }
    }

    return { text }
  } catch (error) {
    return {
      status: error.name === 'AbortError' ? 504 : 502,
      error:
        error.name === 'AbortError'
          ? 'The chat request timed out. Please try again.'
          : 'The chat service is temporarily unavailable.'
    }
  } finally {
    clearTimeout(timeout)
  }
}

const handler = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!checkRateLimit(req)) {
    return res
      .status(429)
      .json({ error: 'Too many chat requests. Please wait a minute.' })
  }

  const message = normalizeMessage(req.body?.message)

  if (!message) {
    return res.status(400).json({ error: 'Please enter a question.' })
  }

  const history = normalizeHistory(req.body?.history)
  const knowledge = getRelevantKnowledge(message)
  const prompt = buildPrompt({ message, history, knowledge })
  const result = await callGemini(prompt)

  if (result.error) {
    return res.status(result.status || 500).json({ error: result.error })
  }

  return res.status(200).json({
    answer: result.text,
    sources: knowledge.map(({ id, title, url }) => ({ id, title, url }))
  })
}

export default handler
