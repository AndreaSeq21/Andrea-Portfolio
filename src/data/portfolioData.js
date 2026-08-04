export const personalInfo = {
  name: "Andrea Sequeira",
  title: "Software Engineer & AI Systems Architect",
  location: "San Francisco, CA (Open to Remote)",
  status: "Available for high-impact opportunities",
  bio: "Architecting high-performance web applications and autonomous agentic AI systems. Passionate about bridging state-of-the-art machine learning models with sleek, human-centered UI design.",
  email: "andrea.sequeira.dev@gmail.com",
  socials: {
    github: "https://github.com/AndreaSeq21",
    linkedin: "https://linkedin.com/in/andrea-sequeira",
    twitter: "https://twitter.com/andreasequeira",
    email: "mailto:andrea.sequeira.dev@gmail.com"
  },
  heroStats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Shipped", value: "24+" },
    { label: "AI Models Deployed", value: "18+" },
    { label: "Code Commits", value: "3.2k+" }
  ]
};

export const skillsData = [
  {
    category: "AI & Agentic Systems",
    skills: [
      { name: "Google Antigravity SDK", level: 95, icon: "Bot" },
      { name: "LangChain / LlamaIndex", level: 90, icon: "Cpu" },
      { name: "Multi-Agent Workflows", level: 92, icon: "Network" },
      { name: "Gemini & OpenAI APIs", level: 96, icon: "Sparkles" },
      { name: "Vector DBs (Chroma, Pinecone)", level: 88, icon: "Database" },
      { name: "Fine-Tuning & Prompt Architecture", level: 94, icon: "Brain" }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js / Next.js", level: 96, icon: "Code" },
      { name: "JavaScript / TypeScript", level: 95, icon: "FileCode" },
      { name: "Modern CSS & Glassmorphism", level: 92, icon: "Palette" },
      { name: "State Management (Zustand, Redux)", level: 90, icon: "Layers" },
      { name: "Framer Motion & Animations", level: 88, icon: "Zap" },
      { name: "Vite & Modern Build Tools", level: 94, icon: "Box" }
    ]
  },
  {
    category: "Backend & Cloud",
    skills: [
      { name: "Node.js & Express", level: 92, icon: "Server" },
      { name: "Python / FastAPI", level: 94, icon: "Terminal" },
      { name: "PostgreSQL & GraphQL", level: 88, icon: "Database" },
      { name: "Firebase (Auth, Firestore, Hosting)", level: 90, icon: "Flame" },
      { name: "Docker & Cloud Deployments", level: 85, icon: "Cloud" },
      { name: "RESTful API Engineering", level: 95, icon: "Globe" }
    ]
  }
];

export const experiences = [
  {
    role: "Senior AI & Full-Stack Engineer",
    company: "Nexus AI Labs",
    period: "2024 - Present",
    location: "San Francisco, CA",
    description: "Leading development of multi-agent autonomous engineering platforms and enterprise React frontend interfaces.",
    highlights: [
      "Engineered autonomous code refactoring workflows reducing dev cycle time by 40%.",
      "Architected real-time streaming LLM web clients serving over 50,000 active monthly users.",
      "Designed responsive glassmorphism UI component library adopted across 6 internal products."
    ]
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Aetheria Tech Solutions",
    period: "2022 - 2024",
    location: "Remote",
    description: "Built scalable web apps, real-time collaboration tools, and cloud backend microservices.",
    highlights: [
      "Built high-concurrency Node.js and WebSocket backends handling 10k+ concurrent connections.",
      "Optimized Core Web Vitals resulting in 98+ Lighthouse scores across major landing surfaces.",
      "Integrated automated CI/CD pipelines with GitHub Actions and Docker containerization."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Vanguard Web Studio",
    period: "2021 - 2022",
    location: "Austin, TX",
    description: "Crafted interactive web experiences, e-commerce applications, and custom client dashboards.",
    highlights: [
      "Created 15+ custom React applications with dynamic data visualizers and interactive charts.",
      "Implemented accessibility (WCAG 2.1 AA) standards across all primary product lines."
    ]
  }
];

export const projectsData = [
  {
    id: "agentic-flow",
    title: "AgenticFlow AI Platform",
    category: "AI & Agentic Systems",
    badge: "Featured AI Project",
    summary: "Visual drag-and-drop orchestration engine for complex autonomous AI agent networks.",
    description: "AgenticFlow allows developers to assemble multi-agent DAG pipelines with live execution streaming, human-in-the-loop validation checkpoints, and custom tool integrations.",
    tags: ["React", "TypeScript", "Google AGY SDK", "Vite", "Framer Motion"],
    metrics: "4.8k Stars • 12k Active Pipelines",
    github: "https://github.com/AndreaSeq21/agentic-flow",
    demo: "https://agentic-flow-demo.vercel.app",
    featured: true,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "nexus-analytics",
    title: "Nexus Real-Time Analytics",
    category: "Full-Stack Web",
    badge: "Enterprise App",
    summary: "Ultra-fast telemetry dashboard with web worker stream parsing and 60fps canvas charts.",
    description: "High-performance monitoring workspace designed for infrastructure engineers, handling millions of incoming metrics events per second with sub-10ms UI render latency.",
    tags: ["React", "Node.js", "WebSockets", "Canvas API", "Vanilla CSS"],
    metrics: "<10ms Render Latency • 99.9% Uptime",
    github: "https://github.com/AndreaSeq21/nexus-analytics",
    demo: "https://nexus-analytics.demo.app",
    featured: true,
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "synth-mind",
    title: "SynthMind RAG Workspace",
    category: "AI & Agentic Systems",
    badge: "Popular",
    summary: "Privacy-focused semantic search engine over structured and un-structured enterprise documents.",
    description: "Synthesizes multi-document summaries, interactive citations, and automated knowledge graph visualizations powered by vector embedding search.",
    tags: ["Python", "FastAPI", "React", "ChromaDB", "TailwindCSS"],
    metrics: "100k+ Docs Indexed",
    github: "https://github.com/AndreaSeq21/synth-mind",
    demo: "https://synthmind.ai",
    featured: true,
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: "glass-ui-kit",
    title: "Glassmorphism UI Design System",
    category: "Open Source",
    badge: "Open Source",
    summary: "Modern CSS & React component library built around glass physics, backdrop blurs, and dark theme dynamics.",
    description: "A lightweight zero-dependency UI component suite providing accessible, beautiful backdrop-filter components for modern web applications.",
    tags: ["React", "Vanilla CSS", "Storybook", "NPM Package"],
    metrics: "15k+ NPM Downloads",
    github: "https://github.com/AndreaSeq21/glass-ui-kit",
    demo: "https://glass-ui-kit.dev",
    featured: false,
    color: "from-rose-500 to-pink-600"
  }
];

export const assistantKnowledge = [
  {
    keywords: ["skill", "stack", "tech", "react", "python", "ai", "languages"],
    answer: "Andrea specializes in React/Vite frontend engineering, Agentic AI Systems (Google Antigravity SDK, LangChain, Gemini API), and Python/Node.js backends!"
  },
  {
    keywords: ["experience", "work", "job", "career", "history", "nexus"],
    answer: "Andrea currently serves as a Senior AI & Full-Stack Engineer at Nexus AI Labs in San Francisco, focusing on multi-agent platforms and streaming LLM clients."
  },
  {
    keywords: ["project", "build", "portfolio", "agenticflow", "synthmind"],
    answer: "Featured projects include AgenticFlow (Visual AI agent orchestrator), Nexus Real-Time Analytics (High-concurrency dashboard), and SynthMind RAG Workspace."
  },
  {
    keywords: ["contact", "hire", "email", "reach", "location"],
    answer: "You can reach Andrea directly at andrea.sequeira.dev@gmail.com or connect via GitHub (@AndreaSeq21) and LinkedIn!"
  }
];
