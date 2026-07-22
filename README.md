# Damir Sarsenov — Portfolio

Personal portfolio site, bilingual (English / Russian), with an **AI assistant that answers
recruiters' questions grounded in my actual project history**.

🔗 Live case studies inside: Seedform (Shopify influencer-gifting app), BI reporting automation,
Luxury Car Salon, a marathon course platform, and web-scraping pipelines.

> **Stack:** Next.js · React · Chakra UI · Three.js · Framer Motion · Google Gemini (portfolio RAG chat)

---

## Highlight: portfolio RAG chat

The site ships a small **retrieval-augmented assistant** (`pages/api/chat.js` + `lib/chat-knowledge`):

- The portfolio is chunked into a knowledge base (projects, skills, contact).
- On each question, the most relevant chunks are retrieved and injected as grounded context.
- A prompt instructs the model to **answer only from that context** — if something isn't in the
  portfolio, it says so and suggests getting in touch, instead of hallucinating.
- Generation runs on **Google Gemini** (`gemini-2.5-flash`), with the API key read from the
  environment (nothing secret is committed).

So a recruiter can literally ask *"what has Damir built?"* or *"should we hire him for AI workflow
automation?"* and get an answer sourced from real projects.

---

## Features

- **Bilingual** English / Russian routes with persisted language switching.
- Detailed **case-study pages** (`pages/works/`): Seedform, BI automation, luxury car salon,
  marathon course, web scraping.
- Interactive 3D hero (Three.js) and motion (Framer Motion).
- Contact modal, light/dark themes.

---

## Run locally

```bash
npm install
cp .env.example .env.local   # set GEMINI_API_KEY for the chat assistant
npm run dev                  # http://localhost:3000
```

---

## Credits

Built on Takuya Matsuyama's excellent open-source
[**craftzdog-homepage**](https://github.com/craftzdog/craftzdog-homepage) template
([craftz.dog](https://www.craftz.dog/)), then personalized with my own content, bilingual support,
case studies, and the Gemini-backed portfolio chat assistant. Template used under its MIT license.
