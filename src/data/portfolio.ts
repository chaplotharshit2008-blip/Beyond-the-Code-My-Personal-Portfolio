export const LINKS = {
  linkedin:
    'https://www.linkedin.com/in/harshit-chaplot-44479442b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  businessSaathi: 'https://business-saathi.vercel.app/',
  cv: '/Harshit-Chaplot-CV.pdf',
} as const;

export const PORTRAIT_SRC =
  '/assets/aistudio/Clean_Gray_Background_ID_Portrait_2c37f0fe.png';

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'What I do' },
  { id: 'about', label: 'About me' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact me' },
];

export interface StatItem {
  value: string;
  label: string;
}

export const HERO_STATS: StatItem[] = [
  { value: '6', label: 'Certificates' },
  { value: '2+', label: 'Automations built' },
  { value: '1', label: 'Hackathon project' },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: Array<{ label: string; variant: 'orange' | 'muted' }>;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'automation',
    title: 'AI automation',
    description:
      "I connect Claude with Gmail, Calendar and Telegram so repetitive tasks run without me. I'm learning n8n to build bigger flows.",
    tags: [
      { label: 'Claude', variant: 'orange' },
      { label: 'Gmail', variant: 'orange' },
      { label: 'Telegram bot', variant: 'orange' },
      { label: 'n8n (learning)', variant: 'muted' },
    ],
  },
  {
    id: 'video',
    title: 'AI video content',
    description:
      'I make short videos that are edited entirely with AI tools and publish them on LinkedIn.',
    tags: [
      { label: 'AI video editing', variant: 'orange' },
      { label: 'Short-form', variant: 'orange' },
    ],
  },
  {
    id: 'research',
    title: 'AI research & slides',
    description:
      'I use Perplexity for deep research, NotebookLM for study notes and ChatGPT to turn ideas into slides quickly.',
    tags: [
      { label: 'Perplexity', variant: 'orange' },
      { label: 'NotebookLM', variant: 'orange' },
      { label: 'ChatGPT', variant: 'orange' },
    ],
  },
];

export const ABOUT_FACTS = [
  { label: 'Education', value: 'B.Tech CSE, RTU Kota' },
  { label: 'Graduating', value: '2029' },
  { label: 'Based in', value: 'Kota, Rajasthan' },
  { label: 'Looking for', value: 'Remote internship' },
  { label: 'Focus', value: 'AI automation' },
] as const;

export const AI_TOOLS = [
  { name: 'Claude', use: 'Automation with Gmail and Calendar' },
  { name: 'ChatGPT', use: 'Generating slides' },
  { name: 'Perplexity', use: 'Deep-dive research answers' },
  { name: 'NotebookLM', use: 'Academic study' },
  { name: 'Gemini', use: 'General use' },
  { name: 'AnythingLLM', use: 'General use' },
] as const;

export interface SkillGroup {
  label: string;
  variant: 'orange' | 'green' | 'neutral';
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'AI AUTOMATION',
    variant: 'orange',
    items: ['Workflow automation', 'Claude integrations', 'Telegram bots'],
  },
  {
    label: 'AI SKILLS',
    variant: 'orange',
    items: [
      'Prompt engineering',
      'Generative AI',
      'AI video editing',
      'Finding AI use cases',
    ],
  },
  {
    label: 'PROGRAMMING',
    variant: 'green',
    items: ['Python (foundations)'],
  },
  {
    label: 'LEARNING NOW',
    variant: 'green',
    items: ['n8n', 'ML foundations'],
  },
  {
    label: 'HOW I WORK',
    variant: 'neutral',
    items: [
      'Problem solving',
      'Fast tool adoption',
      'Independent learning',
      'Research',
    ],
  },
];

export const BUSINESS_SAATHI = {
  title: 'Business Saathi',
  meta: 'Smart India Hackathon 2026 · Team SPARK · 6 members · I built the full prototype',
  description:
    'Rural micro-entrepreneurs and first-time business owners in India often decide on a loan without knowing if the idea can work. Business Saathi gives them a clear feasibility and repayment picture before they borrow.',
  youEnter: ['Location', 'Business idea', 'Margin money', 'Age', 'Gender'],
  underTheHood: [
    'Hyper-local market intelligence',
    'Rule-based financial calculations',
    'Government scheme eligibility',
    'AI that explains the verified numbers in simple, multilingual language',
  ],
  youGet: [
    'Business feasibility analysis',
    'Financial plan and estimated loan',
    'EMI calculation',
    'Matching government schemes',
  ],
  bullets: [
    {
      lead: 'Numbers you can trust.',
      body: "The financial results come from fixed rules, and the AI only explains them, so it can't invent figures.",
    },
    {
      lead: 'Built for borrowers.',
      body: 'Unlike a plain loan calculator or chatbot, it covers the decision before the loan.',
    },
  ],
  tags: [
    'Feasibility analysis',
    'EMI calculator',
    'Govt scheme matching',
    'Multilingual AI',
    'Rule-based engine',
  ],
} as const;

export const JOURNEY_STEPS = [
  {
    date: 'AUG 2026',
    title: 'Started B.Tech in Computer Science',
    description:
      "Joined RTU Kota. Completed Kaggle's Intro to Programming on 26 August.",
    isNow: false,
  },
  {
    date: 'SEP 2026',
    title: 'First AI course and a hackathon',
    description:
      "Finished UniAthena's Basics of AI: Learning Models on 5 September, then took part in the SIH 2026 internal campus selection on 22 September with Team SPARK.",
    isNow: false,
  },
  {
    date: 'OCT 2026',
    title: 'Four more AI courses',
    description:
      'Google Cloud-powered Generative AI Studio, Microsoft-powered Prompt Engineering with GitHub Copilot, AI Beginners Guide, and the Generative AI Literacy assessment.',
    isNow: false,
  },
  {
    date: 'NOW',
    title: 'Building automations, learning n8n',
    description:
      'Looking for a remote AI automation internship where I can learn on real projects.',
    isNow: true,
  },
] as const;

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: 'Accomplishment' | 'Completion' | 'Participation';
  image: string;
}

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'skillquest-genai-literacy',
    title: 'SkillQuest: Generative AI Literacy',
    issuer: 'Simplilearn SkillUP, assessment passed',
    date: '23 Oct 2026',
    type: 'Accomplishment',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_22.53.01_272782fd.jpeg',
  },
  {
    id: 'ai-beginners-guide',
    title: 'Artificial Intelligence Beginners Guide',
    issuer: 'Simplilearn SkillUP',
    date: '18 Oct 2026',
    type: 'Completion',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_22.53.01__1__0596920d.jpeg',
  },
  {
    id: 'prompt-eng-copilot',
    title: 'Prompt Engineering with GitHub Copilot',
    issuer: 'Simplilearn SkillUP, Microsoft-powered course',
    date: '8 Oct 2026',
    type: 'Completion',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_22.53.01__2__64c1103e.jpeg',
  },
  {
    id: 'intro-genai-studio',
    title: 'Introduction to Generative AI Studio',
    issuer: 'Simplilearn SkillUP, Google Cloud-powered course',
    date: '7 Oct 2026',
    type: 'Completion',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_22.53.02_6523b50d.jpeg',
  },
  {
    id: 'basics-of-ai',
    title: 'Basics of AI: Learning Models',
    issuer: 'UniAthena, with Cambridge International Qualifications, UK',
    date: '5 Sep 2026',
    type: 'Completion',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_22.53.02__2__21ecbd34.jpeg',
  },
  {
    id: 'kaggle-intro-programming',
    title: 'Intro to Programming',
    issuer: 'Kaggle',
    date: '26 Aug 2026',
    type: 'Completion',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_22.53.03__1__f3565728.jpeg',
  },
  {
    id: 'sih-2026',
    title: 'Smart India Hackathon 2026',
    issuer: 'Internal campus selection, Team SPARK',
    date: '22 Sep 2026',
    type: 'Participation',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_22.53.03_a9f84622.jpeg',
  },
  {
    id: 'gradguru-career-guidance',
    title: 'Career Guidance Session',
    issuer: 'GradGuru Innovations',
    date: '25 Sep 2026',
    type: 'Participation',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_22.53.02__1__c9e9f829.jpeg',
  },
];
