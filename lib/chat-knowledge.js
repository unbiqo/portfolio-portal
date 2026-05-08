export const chatKnowledge = [
  {
    id: 'profile',
    title: 'Profile',
    url: '/#about',
    tags: ['about', 'profile', 'automation', 'data', 'business intelligence'],
    text: 'Damir Sarsenov is a Software Developer and Data Specialist focused on automation. He builds end-to-end digital solutions, from responsive React frontends to Python-driven data pipelines. His work bridges raw data engineering and business intelligence, translating operational needs into clear, measurable outcomes.'
  },
  {
    id: 'experience-self-employed',
    title: 'Current Work',
    url: '/#experience',
    tags: ['experience', 'freelance', 'full-stack', 'saas', 'scraping'],
    text: 'Since Apr 2024, Damir has worked as a self-employed Full-Stack Software Engineer. He delivers custom SaaS platforms, automated web scraping with Selenium and BeautifulSoup, and AI-driven workflows using n8n and Zapier.'
  },
  {
    id: 'experience-jusan',
    title: 'Jusan Bank Experience',
    url: '/#experience',
    tags: ['experience', 'bank', 'data analyst', 'tableau', 'python'],
    text: 'From Sep 2022 to Jan 2024, Damir worked as a Data Analyst at Jusan Bank. He reduced reporting cycles by 40% with Tableau and saved more than 10 hours weekly through Python automation.'
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    url: '/#skills',
    tags: ['skills', 'stack', 'react', 'node', 'python', 'sql', 'docker'],
    text: 'Damir works with JavaScript ES6+, React.js, Node.js, Tailwind CSS, Python with Pandas and Scikit-learn, SQL with PostgreSQL, machine learning and deep learning modeling, Docker, Git, Linux, Tableau, n8n, and Make.'
  },
  {
    id: 'education',
    title: 'Education',
    url: '/#education',
    tags: ['education', 'degree', 'university', 'big data'],
    text: 'Damir holds a Bachelor of Science in Information Communication Technologies from Astana IT University, with a focus on Big Data Analysis.'
  },
  {
    id: 'seedform',
    title: 'Seedform - Influencer Gifting Automation',
    url: '/works/seedform',
    tags: ['project', 'seedform', 'shopify', 'influencer', 'automation'],
    text: 'Seedform automates influencer gifting for Shopify brands. It replaces manual emails, CSV cleanup, and blind shipping with automated claim links, live status sync, and ROI tracking. Damir worked as Full-Stack Software Engineer, focusing on gifting workflow automation, status tracking, and ROI analytics. Stack: React.js, Node.js, Shopify APIs. Example impact: 41.4 hours saved per month at 120 influencers.'
  },
  {
    id: 'alenau',
    title: 'Alenau - AI Personal Stylist',
    url: '/works/web-scraping',
    tags: ['project', 'alenau', 'ai', 'stylist', 'gemini', 'ebay'],
    text: 'Alenau is a canvas-based AI personal stylist. Users assemble outfits, get AI recommendations, and request roast-style critiques to refine a look. Damir worked as Full-Stack Software Engineer, focusing on canvas UX, outfit recommendations, and feedback. Stack: React 19, Vite, Tailwind CSS v4, Framer Motion, Vercel Serverless Functions, Google Gemini API, and eBay Browse API.'
  },
  {
    id: 'bi-automation',
    title: 'BI Reporting Optimization',
    url: '/works/bi-automation',
    tags: ['project', 'bi', 'reporting', 'tableau', 'python', 'sql'],
    text: 'BI Reporting Optimization is a Tableau-first reporting modernization supported by Python automation. It reduced reporting cycles by 40% and saved more than 10 hours per week through streamlined data preparation. Damir worked as Data Analyst. Stack: Tableau, Python, SQL with PostgreSQL.'
  },
  {
    id: 'luxury-car-salon',
    title: 'Luxury Car Salon',
    url: '/works/luxury-car-salon',
    tags: ['project', 'landing page', 'cars', 'next.js', 'frontend'],
    text: 'Luxury Car Salon is a premium automotive dealer landing page. It uses a full-screen video hero, refined typography, animated vehicle inventory cards, and a contact flow for private inquiries. Damir worked as Front-End Developer. Stack: Next.js, React, Tailwind CSS, Framer Motion, and Vercel.'
  },
  {
    id: 'marathon-course',
    title: 'The Art of Storytelling Marathon',
    url: '/works/marathon-course',
    tags: ['project', 'landing page', 'multilingual', 'course'],
    text: 'The Art of Storytelling Marathon is a bilingual creative program landing page with an organic illustrated path, localized English and Russian content, language switching, and a signup capture flow.'
  },
  {
    id: 'contact',
    title: 'Contact',
    url: '/#contact',
    tags: ['contact', 'email', 'linkedin', 'hire', 'availability'],
    text: 'Damir can be contacted at damir.sarsenov12@gmail.com. His LinkedIn profile is https://www.linkedin.com/in/damir-sarsenov/. He is a good fit for responsive products, custom SaaS, automation-first data systems, scraping workflows, dashboards, and AI workflow automation.'
  }
]

const stopWords = new Set([
  'about',
  'after',
  'also',
  'and',
  'are',
  'ask',
  'can',
  'could',
  'damir',
  'does',
  'for',
  'from',
  'have',
  'his',
  'how',
  'into',
  'like',
  'more',
  'that',
  'the',
  'this',
  'what',
  'when',
  'where',
  'which',
  'who',
  'with',
  'work',
  'you',
  'your'
])

const tokenize = value =>
  String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9+#.]+/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 2 && !stopWords.has(token))

export const getRelevantKnowledge = (question, limit = 6) => {
  const queryTerms = Array.from(new Set(tokenize(question)))

  if (!queryTerms.length) {
    return chatKnowledge.filter(chunk =>
      ['profile', 'skills', 'contact'].includes(chunk.id)
    )
  }

  const scored = chatKnowledge
    .map(chunk => {
      const searchable = [
        chunk.id,
        chunk.title,
        chunk.text,
        ...(chunk.tags || [])
      ]
        .join(' ')
        .toLowerCase()

      const score = queryTerms.reduce((total, term) => {
        let termScore = 0

        if (chunk.id.includes(term)) termScore += 10
        if (chunk.title.toLowerCase().includes(term)) termScore += 8
        if ((chunk.tags || []).some(tag => tag.includes(term))) termScore += 4
        if (searchable.includes(term)) termScore += 2

        return total + termScore
      }, 0)

      return { ...chunk, score }
    })
    .sort((a, b) => b.score - a.score)

  const matches = scored.filter(chunk => chunk.score > 0).slice(0, limit)

  if (matches.length) return matches

  return chatKnowledge
    .filter(chunk => ['profile', 'skills', 'contact'].includes(chunk.id))
    .slice(0, limit)
}
