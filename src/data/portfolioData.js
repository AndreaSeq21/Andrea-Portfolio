export const personalInfo = {
  name: "Andrea Joyce Sequeira",
  avatar: "/images/profile-headshot.jpg",
  avatarCasual: "/images/profile-casual.jpg",
  title: "Software Engineer & AI / Full Stack Developer",
  location: "Bay Area, CA (Open to Remote)",
  status: "Available for Software Engineering & AI Roles",
  summary: "Software Engineer with 6 years of experience building full stack applications, AI-enabled analytics platforms, enterprise integrations, and cloud services across financial and industrial systems. Experienced in delivering secure, data-driven applications, modernizing enterprise workflows, deploying production services to cloud environments, and improving reliability across business-critical systems.",
  email: "andreajoycesequeira@gmail.com",
  phone: "857-928-2918",
  socials: {
    github: "https://github.com/AndreaSeq21",
    linkedin: "https://linkedin.com/in/andreaseq21",
    email: "mailto:andreajoycesequeira@gmail.com"
  },
  heroStats: [
    { label: "Years Experience", value: "6+" },
    { label: "Enterprise Projects", value: "15+" },
    { label: "AWS Certified", value: "Cloud Practitioner" },
    { label: "Hackathon Award", value: "Top 3" }
  ]
};

export const skillsData = [
  {
    category: "AI & Analytics",
    skills: [
      { name: "LangChain & LangGraph", level: 96, icon: "Brain" },
      { name: "RAG & Vector Stores", level: 95, icon: "Database" },
      { name: "Prompt Eng. & Natural Lang to SQL", level: 94, icon: "Sparkles" },
      { name: "DDL Schema Grounding & AI Guardrails", level: 92, icon: "Bot" },
      { name: "Conversational Memory & Tool Calling", level: 95, icon: "Cpu" },
      { name: "Anthropic Claude API & LLMs", level: 94, icon: "Zap" }
    ]
  },
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "Java & Spring Boot", level: 96, icon: "Server" },
      { name: "React & JavaScript / TypeScript", level: 95, icon: "Code" },
      { name: "Python", level: 92, icon: "FileCode" },
      { name: "Node.js & Express.js", level: 90, icon: "Layers" },
      { name: "SQL & Hibernate / Prisma", level: 94, icon: "Database" },
      { name: "REST & SOAP APIs", level: 95, icon: "Globe" }
    ]
  },
  {
    category: "Cloud, DevOps & Data",
    skills: [
      { name: "AWS (ECS Fargate, Lambda, S3)", level: 92, icon: "Cloud" },
      { name: "Docker & Terraform IaC", level: 90, icon: "Box" },
      { name: "GitHub Actions & Harness CI/CD", level: 88, icon: "Terminal" },
      { name: "Databases (Oracle, Postgres, MySQL)", level: 94, icon: "Database" },
      { name: "Kafka Messaging", level: 88, icon: "Network" },
      { name: "HashiCorp Vault & Appian", level: 86, icon: "Flame" }
    ]
  }
];

export const education = [
  {
    degree: "MS in Information Systems",
    school: "Northeastern University",
    location: "Boston, MA",
    period: "Dec 2024"
  },
  {
    degree: "BE in Computer Engineering",
    school: "University of Mumbai",
    location: "Mumbai, India",
    period: "May 2019"
  }
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "State Street",
    period: "Jan 2025 – Present",
    location: "Boston, MA",
    stack: ["React", "Java Spring Boot", "LangChain", "LangGraph", "RAG", "Oracle DB", "Kafka", "AWS Lambda", "ECS Fargate", "Terraform", "Harness CI/CD", "HashiCorp Vault"],
    description: "Architected and delivered AI-enabled account analytics platform and enterprise cloud workflows.",
    highlights: [
      "Architected an account analytics platform using React, Java Spring Boot, LangChain, and RAG patterns, enabling users to query account and trade datasets in natural language.",
      "Designed 3 analytical dashboard views for account insights, variance analysis, and actual vs forecast trade comparisons.",
      "Established schema-aware retrieval workflow by grounding model responses with DDL metadata, sample records, and vector store-based retrieval.",
      "Implemented 4 enterprise guardrails covering user authentication, authorization checks, dataset access control, and supervisor approval before report generation.",
      "Developed a ChatGPT-style React interface with threaded conversations, LangGraph orchestration, episodic memory, and persistent Oracle DB memory.",
      "Led modernization of Java Spring Boot microservices for AWS cloud deployment with Docker, Terraform IaC, ECS Fargate, and Harness CI/CD.",
      "Integrated AWS Transfer Family, S3, HashiCorp Vault, Kafka, ForgeRock, and Appian workflows, reducing manual processing by 15 hours per week."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "State Street",
    period: "Jan 2024 – Aug 2024",
    location: "Boston, MA",
    stack: ["Appian", "Java Spring Boot", "Kafka", "Oracle DB", "REST APIs", "Jira"],
    description: "Developed workflow automation components and validated enterprise REST API integrations.",
    highlights: [
      "Developed Appian workflow automation components connected to Java Spring Boot services and Oracle DB supporting case management.",
      "Validated REST API integrations and Kafka-based data flows across 10+ business processes, reducing manual handoffs.",
      "Designed regression scenarios and validated workflow edge cases, reducing deployment defects by 40%."
    ]
  },
  {
    role: "Integration Consultant",
    company: "nVent Thermal",
    period: "Nov 2021 – Dec 2022",
    location: "Mumbai, India",
    stack: ["Node.js", "AWS", "REST APIs", "SOAP APIs", "SAP", "Oracle"],
    description: "Designed REST & SOAP API integration services for enterprise ERP workflows.",
    highlights: [
      "Designed and delivered 10+ REST and SOAP APIs for ERP data flows connecting SAP and Oracle systems.",
      "Built backend integration services using Node.js and AWS to automate enterprise data exchange across ERP workflows."
    ]
  },
  {
    role: "Software Engineer",
    company: "LTIMindtree",
    period: "Aug 2019 – Nov 2021",
    location: "Bengaluru, India",
    stack: ["MuleSoft", "Java", "Spring Boot", "Hibernate", "React", "Salesforce", "Oracle", "SAP", "Splunk", "OAuth"],
    description: "Delivered enterprise integration solutions and full-stack application components.",
    highlights: [
      "Delivered enterprise integration solutions using MuleSoft APIs connecting Salesforce, Oracle, and SAP, reducing manual processing effort by 50%.",
      "Built Java, Spring Boot, Hibernate, and React-based application components to support internal workflows.",
      "Secured enterprise APIs with OAuth, JWT authentication, and Swagger documentation.",
      "Resolved production issues through Splunk-based log analysis, reducing recurring defects by 80%."
    ]
  }
];

export const projectsData = [
  {
    id: "resume-ai",
    title: "ResumeAI",
    category: "AI & Analytics",
    badge: "Featured AI Project",
    summary: "AI-powered resume analysis platform streaming Claude API responses for match scores, skill gap analysis, and cover letter generation.",
    description: "Built an AI-powered resume analysis platform using React and Node.js that streams Claude API responses in real time, delivering tailored match scores, skill gap analysis, and cover letter drafts against target job descriptions. Features a RESTful Express backend with chunked transfer streaming and PostgreSQL/Prisma ORM for persistent analysis history.",
    tags: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Anthropic Claude API"],
    metrics: "Token-by-token streaming • Reduced perceived latency",
    github: "https://github.com/AndreaSeq21/ResumeAI",
    demo: "https://github.com/AndreaSeq21/ResumeAI",
    featured: true
  },
  {
    id: "movie-mgmt",
    title: "Movie Management App",
    category: "Languages & Frameworks",
    badge: "Full-Stack App",
    summary: "Structured movie management system built with Spring Boot, Hibernate, JPA, and MySQL.",
    description: "Created movie management application with Spring Boot, Hibernate, and JPA to support structured data modeling and RESTful service development. Tuned MySQL persistence and query performance to improve data access efficiency across core application workflows.",
    tags: ["Java", "Spring Boot", "Hibernate", "JPA", "MySQL", "REST APIs"],
    metrics: "Tuned Query Performance",
    github: "https://github.com/AndreaSeq21",
    demo: "https://github.com/AndreaSeq21",
    featured: true
  },
  {
    id: "cloud-web-app",
    title: "Cloud-Backed Web Application",
    category: "Cloud, DevOps & Data",
    badge: "Cloud Infrastructure",
    summary: "AWS serverless cloud backend provisioned with Pulumi IaC, GitHub Actions CI/CD, and Packer.",
    description: "Delivered cloud-backed backend application with REST APIs on AWS, incorporating AWS Lambda to support serverless execution. Automated CI/CD workflows with GitHub Actions, JMeter, and Packer. Provisioned cloud infrastructure with Pulumi including VPC, RDS, Load Balancer, CloudWatch, DynamoDB, and Auto Scaling EC2 instances.",
    tags: ["AWS", "NodeJS", "Pulumi", "GitHub Actions", "JMeter", "Packer", "DynamoDB"],
    metrics: "Resilient Zero-Downtime Deployment",
    github: "https://github.com/AndreaSeq21",
    demo: "https://github.com/AndreaSeq21",
    featured: true
  }
];

export const awardsData = [
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services (AWS)",
    description: "Official certification validating foundational cloud knowledge, AWS services, cloud security, architecture, and pricing."
  },
  {
    title: "Best Presentation Award",
    organization: "State Street",
    description: "Earned Best Presentation Award during internship at State Street for outstanding communication and presentation skills."
  },
  {
    title: "Top 3 Position — GitHub Copilot Hackathon",
    organization: "State Street",
    description: "Secured Top 3 position in State Street GitHub Copilot Hackathon, demonstrating innovation and practical problem-solving in AI-assisted development."
  },
  {
    title: "Alumni Guest Speaker",
    organization: "University of Mumbai / Northeastern University",
    description: "Selected as alumni speaker to conduct Career Guidance sessions for students on career development, industry readiness, and navigating professional opportunities."
  }
];

export const assistantKnowledge = [
  {
    keywords: ["skill", "stack", "tech", "java", "spring", "react", "python", "langchain", "rag", "aws", "certification"],
    answer: "Andrea's core stack includes Java, Spring Boot, React, Python, LangChain/LangGraph, RAG architectures, SQL, AWS (ECS Fargate, Lambda), Kafka, Docker, and Terraform! Andrea is also an AWS Certified Cloud Practitioner."
  },
  {
    keywords: ["experience", "state street", "work", "job", "career", "ltimindtree", "nvent"],
    answer: "Andrea currently works as a Software Engineer at State Street (Jan 2025–Present), architecting AI account analytics platforms and Spring Boot microservices. Previously worked at State Street (Intern), nVent Thermal, and LTIMindtree with 6+ years total experience!"
  },
  {
    keywords: ["education", "degree", "university", "northeastern", "mumbai", "master"],
    answer: "Andrea holds an MS in Information Systems from Northeastern University in Boston (Dec 2024) and a BE in Computer Engineering from the University of Mumbai (May 2019)."
  },
  {
    keywords: ["project", "resumeai", "movie", "cloud", "claude", "rag"],
    answer: "Projects include ResumeAI (AI resume analysis platform streaming Anthropic Claude API responses with Prisma/Postgres), Movie Management App (Spring Boot/Hibernate/MySQL), and Cloud-Backed Web Application (AWS/Pulumi/GitHub Actions)."
  },
  {
    keywords: ["award", "hackathon", "copilot", "presentation", "achievement", "certif"],
    answer: "Andrea is an AWS Certified Cloud Practitioner, won the Best Presentation Award at State Street, placed Top 3 in the State Street GitHub Copilot Hackathon, and served as an alumni speaker!"
  },
  {
    keywords: ["contact", "email", "phone", "reach", "linkedin", "location"],
    answer: "You can reach Andrea at andreajoycesequeira@gmail.com, 857-928-2918, or via LinkedIn (andreaseq21) and GitHub (AndreaSeq21). Andrea is based in Bay Area, CA."
  }
];
