export interface Project {
  id: string
  title: string
  tags: string[]
  description: string
  image: string
  longDescription: string
  challenges: string[]
  solutions: string[]
  techStack: string[]
  results: { label: string; value: string }[]
  gallery: string[]
  liveUrl?: string
  githubUrl?: string
  duration: string
  role: string
  year: string
  /** Only set for projects that aren't shipped yet — omit entirely for completed work. */
  status?: 'planned' | 'in-progress'
}

export const projects: Project[] = [
  {
    id: 'hikera',
    title: 'Hikera',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Marketplace'],
    description:
      'A community-first platform for organizing hiking, camping, and road-trip experiences in Tunisia — replacing scattered WhatsApp/Facebook coordination with trusted organizer profiles and structured trip management.',
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=500&fit=crop',
    longDescription:
      "Hikera is a platform built to modernize how outdoor experiences — hiking, camping, road trips, and weekend escapes — are organized in Tunisia. Today these trips run entirely through Facebook groups, WhatsApp chats, and personal contacts, with organizers manually tracking participants, payments, and bus/guide logistics. Trust is the biggest barrier: people only go on trips organized by people they already know. Hikera's strategy reflects that — it starts as a single trusted organizer building a real community through successful trips, then introduces the platform's tools progressively rather than trying to bootstrap a marketplace from a cold start.",
    challenges: [
      'Earning organizer/participant trust with no existing user base to draw on',
      'Replacing manual WhatsApp/spreadsheet coordination without adding friction for organizers',
      'Supporting both small solo hikes and large multi-day trips with the same tools',
      'Rolling out the platform without disrupting the trust-based community it depends on',
    ],
    solutions: [
      'Launching as the founder\'s own organizer account to seed a trusted community before opening up to others',
      'Building trip management tools (participant lists, capacity limits, payment tracking) to replace spreadsheets and group chats',
      'Designing organizer profiles with trip history and reviews as the core trust signal',
      'Shipping incrementally — trip creation and RSVPs first, payments and bus/guide coordination later',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    results: [],
    gallery: [],
    duration: 'Ongoing',
    role: 'Founder & Full-Stack Developer',
    year: '2026',
    status: 'in-progress',
  },
  {
    id: 'chef-connect',
    title: 'ChefConnect',
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile'],
    description:
      'A mobile app that gives private chefs one place to talk to clients, track order and booking progress, and manage catering events — instead of juggling WhatsApp, phone calls, and spreadsheets.',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop',
    longDescription:
      'ChefConnect is a mobile app for independent chefs and small catering businesses. It centralizes client communication, order status, and event logistics — replacing the scattered mix of WhatsApp threads, phone calls, and spreadsheets chefs currently rely on to run their business.',
    challenges: [
      'Replacing scattered WhatsApp/phone-based client communication with structured, trackable conversations',
      'Giving chefs a clear view of each client\'s order status without manual spreadsheet updates',
      'Handling event logistics (guest count, menu, date, deposits) alongside day-to-day client chats',
      'Keeping the app simple enough for time-constrained, non-technical chefs to actually adopt',
    ],
    solutions: [
      'A chat-first client hub with a per-client order and event timeline',
      'A lightweight booking pipeline chefs can update in a few taps between kitchen shifts',
      'Local-first data with Firebase sync so schedules stay usable offline',
      'Starting with a single-chef MVP before considering multi-chef/team support',
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    results: [],
    gallery: [],
    duration: 'Ongoing',
    role: 'Mobile App Developer',
    year: '2026',
    status: 'in-progress',
  },
  {
    id: 'docchat',
    title: 'DocChat',
    tags: ['AI/ML', 'RAG', 'Next.js', 'Python'],
    description:
      'A retrieval-augmented chatbot that lets you upload PDFs or docs and ask questions about them, with every answer grounded in cited source passages instead of hallucinated.',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop',
    longDescription:
      "DocChat will let users upload documents — PDFs, Markdown, plain text — and ask natural-language questions about their content. Documents are chunked and embedded into a vector store, and each answer is generated by retrieving the most relevant passages and grounding the LLM's response in them, with inline citations back to the source text so answers stay verifiable instead of hallucinated.",
    challenges: [
      'Chunking and embedding documents in a way that preserves enough context for accurate retrieval',
      'Keeping answers grounded in the source material instead of hallucinating',
      'Handling multiple file formats (PDF, DOCX, Markdown) with reliable text extraction',
      'Keeping response latency low while running retrieval and generation in the same request',
    ],
    solutions: [
      'A recursive chunking strategy with overlap, tuned per document type',
      'A vector store (pgvector) with similarity search over document embeddings',
      'Prompting that requires citations, with retrieved passages surfaced alongside each answer',
      'Streaming responses to the UI so answers appear as they\'re generated',
    ],
    techStack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'pgvector', 'OpenAI API'],
    results: [],
    gallery: [],
    duration: 'Upcoming',
    role: 'AI/ML Engineer',
    year: '2026',
    status: 'planned',
  },
  {
    id: 'ai-powered-webapp',
    title: 'AI-Powered Web Application',
    tags: ['AI/ML', 'Python', 'React', 'API'],
    description:
      'Full-stack app with integrated AI models. Automated customer support with 85% resolution rate.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    longDescription:
      'Developed a full-stack web application with integrated AI capabilities for automated customer support. The system uses NLP models to understand customer queries, classify them by intent, and provide accurate responses or escalate to human agents when needed.',
    challenges: [
      'Training NLP models with limited labeled data',
      'Achieving low-latency responses for real-time chat interactions',
      'Building a seamless handoff between AI and human agents',
      'Continuously improving model accuracy based on user feedback',
    ],
    solutions: [
      'Used transfer learning with pre-trained models and data augmentation',
      'Deployed models with ONNX runtime for optimized inference speed',
      'Implemented a smart routing system with confidence scoring for escalation',
      'Built a feedback loop that automatically retrains models weekly',
    ],
    techStack: [
      'Python',
      'React',
      'FastAPI',
      'TensorFlow',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
    ],
    results: [
      { label: 'Resolution Rate', value: '85%' },
      { label: 'Response Time', value: '<1 second' },
      { label: 'Customer Satisfaction', value: '4.5/5' },
      { label: 'Support Cost Reduction', value: '60%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
    ],
    githubUrl: 'https://github.com',
    duration: '5 months',
    role: 'Full-Stack & ML Engineer',
    year: '2024',
  },
  {
    id: 'analytics-dashboard',
    title: 'Real-time Analytics Dashboard',
    tags: ['React', 'TypeScript', 'Real-time', 'Performance'],
    description:
      'High-performance dashboard handling 10k+ concurrent users with 90+ Lighthouse scores.',
    image:
      'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&h=500&fit=crop',
    longDescription:
      'Created a high-performance real-time analytics dashboard designed to handle thousands of concurrent users while maintaining smooth 60fps interactions. The dashboard features live data streaming, interactive charts, and customizable widgets with drag-and-drop functionality.',
    challenges: [
      'Maintaining 60fps with thousands of live-updating data points',
      'Supporting 10k+ concurrent WebSocket connections',
      'Building customizable dashboard layouts persisted per user',
      'Achieving 90+ Lighthouse performance scores with rich functionality',
    ],
    solutions: [
      'Implemented virtualized rendering with Web Workers for data processing',
      'Used connection pooling and message batching for efficient WebSocket handling',
      'Built a layout engine with drag-and-drop using react-grid-layout',
      'Code splitting, lazy loading, and aggressive caching strategies',
    ],
    techStack: [
      'React',
      'TypeScript',
      'WebSocket',
      'D3.js',
      'Node.js',
      'Redis',
      'Nginx',
    ],
    results: [
      { label: 'Concurrent Users', value: '10k+' },
      { label: 'Lighthouse Score', value: '95' },
      { label: 'Data Latency', value: '<100ms' },
      { label: 'Frame Rate', value: '60fps' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    duration: '3 months',
    role: 'Frontend Lead',
    year: '2023',
  },
  {
    id: 'mobile-backend',
    title: 'Mobile App Backend',
    tags: ['Node.js', 'MongoDB', 'AWS', 'Microservices'],
    description:
      'Scalable REST API serving 100k+ users with auth, caching, and DB optimization.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
    longDescription:
      'Built a scalable backend system serving a mobile application with over 100,000 active users. The architecture follows microservices patterns with independent services for authentication, content delivery, notifications, and analytics, all orchestrated through an API gateway.',
    challenges: [
      'Handling 100k+ daily active users with varying traffic patterns',
      'Implementing secure authentication with social login providers',
      'Optimizing database queries for complex data relationships',
      'Building a reliable push notification system at scale',
    ],
    solutions: [
      'Deployed auto-scaling microservices with AWS ECS and load balancing',
      'Implemented JWT-based auth with OAuth2 for social login integration',
      'Used MongoDB aggregation pipelines and Redis caching for query optimization',
      'Built notification service with AWS SNS and device-specific delivery',
    ],
    techStack: [
      'Node.js',
      'MongoDB',
      'AWS ECS',
      'Redis',
      'AWS SNS',
      'Docker',
      'Nginx',
      'Jest',
    ],
    results: [
      { label: 'Active Users', value: '100k+' },
      { label: 'API Response Time', value: '<200ms' },
      { label: 'Uptime', value: '99.95%' },
      { label: 'Push Delivery Rate', value: '98%' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop',
    ],
    githubUrl: 'https://github.com',
    duration: '4 months',
    role: 'Backend Developer',
    year: '2023',
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getAllProjectIds(): string[] {
  return projects.map((p) => p.id)
}