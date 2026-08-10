# Damir Sarsenov - Portfolio

Personal bilingual portfolio site with case studies and an AI assistant that answers recruiters' questions from project history.

> **Stack:** Next.js, React, Chakra UI, Framer Motion, Google Gemini.

## Features

- English and Russian routes with persisted language switching.
- Case-study pages for Seedform, BI automation, Luxury Car Salon, marathon course, and web scraping.
- Project carousel on the home page.
- Portfolio RAG chat powered by `pages/api/chat.js` and `lib/chat-knowledge.js`.
- Contact modal and light/dark themes.

## Run Locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `GEMINI_API_KEY` in `.env.local` to enable the chat assistant.

## Credits

Built from Takuya Matsuyama's open-source craftzdog homepage template, then personalized with Damir's content, bilingual routing, case studies, and the Gemini-backed portfolio chat assistant.
