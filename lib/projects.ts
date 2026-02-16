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
}

export const projects: Project[] = [
  {
    id: 'enterprise-data-platform',
    title: 'Enterprise Data Platform',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Big Data'],
    description:
      'Built a scalable data analytics platform processing millions of records with real-time visualization and ML-powered insights.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    longDescription:
      'Designed and developed a comprehensive enterprise data platform that aggregates data from multiple sources, processes it in real-time, and presents actionable insights through intuitive dashboards. The platform handles millions of records daily and provides ML-powered predictions to help business stakeholders make data-driven decisions.',
    challenges: [
      'Processing and aggregating data from 15+ different sources in real-time',
      'Building dashboards that remain responsive with millions of data points',
      'Implementing ML models that provide accurate predictions with minimal latency',
      'Ensuring data security and compliance with enterprise standards',
    ],
    solutions: [
      'Implemented a stream processing pipeline using Apache Kafka for real-time data ingestion',
      'Used virtualized rendering and data aggregation strategies for performant dashboards',
      'Deployed ML models as microservices with automatic scaling based on demand',
      'Built comprehensive RBAC system with audit logging and encryption at rest',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Apache Kafka',
      'Python',
      'Docker',
      'Redis',
    ],
    results: [
      { label: 'Data Processing', value: '10M+ records/day' },
      { label: 'Dashboard Load Time', value: '<2 seconds' },
      { label: 'Prediction Accuracy', value: '94%' },
      { label: 'User Adoption', value: '500+ users' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop',
    ],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    duration: '6 months',
    role: 'Lead Full-Stack Developer',
    year: '2024',
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration Project',
    tags: ['Azure', 'DevOps', 'Cloud Architecture', 'Security'],
    description:
      'Migrated legacy systems to Azure cloud. Reduced costs by 40% and improved reliability to 99.9% uptime.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
    longDescription:
      'Led the complete migration of on-premise infrastructure to Azure cloud, including redesigning the application architecture for cloud-native patterns. The project involved migrating databases, setting up CI/CD pipelines, implementing Infrastructure as Code, and establishing monitoring and alerting systems.',
    challenges: [
      'Migrating 20+ legacy services with zero downtime',
      'Redesigning monolithic architecture for cloud-native patterns',
      'Ensuring data integrity during database migration',
      'Training the team on new cloud technologies and practices',
    ],
    solutions: [
      'Implemented blue-green deployment strategy for zero-downtime migration',
      'Decomposed monolith into microservices with Azure Kubernetes Service',
      'Used Azure Database Migration Service with validation checkpoints',
      'Created comprehensive documentation and hands-on training workshops',
    ],
    techStack: [
      'Azure',
      'Kubernetes',
      'Terraform',
      'Docker',
      'GitHub Actions',
      'Azure DevOps',
      'Prometheus',
      'Grafana',
    ],
    results: [
      { label: 'Cost Reduction', value: '40%' },
      { label: 'System Uptime', value: '99.9%' },
      { label: 'Deployment Speed', value: '10x faster' },
      { label: 'Services Migrated', value: '20+' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
    ],
    githubUrl: 'https://github.com',
    duration: '4 months',
    role: 'Cloud Architect & DevOps Lead',
    year: '2024',
  },
  {
    id: 'dynamics-365-integration',
    title: 'Dynamics 365 Integration',
    tags: ['Dynamics 365', 'CRM', 'Integration', 'Automation'],
    description:
      'Integrated Dynamics 365 with custom web apps. Streamlined sales and improved data consistency.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    longDescription:
      'Developed a comprehensive integration layer between Microsoft Dynamics 365 and multiple custom web applications. The project automated key business workflows, synchronized data across departments, and provided a unified view of customer interactions across the organization.',
    challenges: [
      'Synchronizing data between Dynamics 365 and 5 custom applications',
      'Handling complex business logic and workflow automation',
      'Managing API rate limits and ensuring data consistency',
      'Building a user-friendly interface for non-technical staff',
    ],
    solutions: [
      'Built a middleware layer with event-driven architecture for real-time sync',
      'Implemented Power Automate flows with custom connectors for complex workflows',
      'Used queue-based processing with retry logic for API rate limit management',
      'Designed intuitive dashboards with drag-and-drop workflow builders',
    ],
    techStack: [
      'Dynamics 365',
      'Power Platform',
      'React',
      'Node.js',
      'Azure Functions',
      'Azure Service Bus',
      'SQL Server',
    ],
    results: [
      { label: 'Process Automation', value: '75% reduction' },
      { label: 'Data Accuracy', value: '99.5%' },
      { label: 'Sales Efficiency', value: '+35%' },
      { label: 'Manual Tasks Eliminated', value: '200+ hrs/month' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    ],
    liveUrl: 'https://example.com',
    duration: '3 months',
    role: 'Integration Developer',
    year: '2023',
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