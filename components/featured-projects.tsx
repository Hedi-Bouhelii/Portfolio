'use client'

import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'

export default function FeaturedProjects() {
  const projects = [
    {
      id: 'enterprise-data-platform',
      title: 'Enterprise Data Platform',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Big Data'],
      description: 'Built a scalable data analytics platform processing millions of records with real-time visualization and ML-powered insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Project',
      tags: ['Azure', 'DevOps', 'Cloud Architecture', 'Security'],
      description: 'Migrated legacy systems to Azure cloud. Reduced costs by 40% and improved reliability to 99.9% uptime.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    },
    {
      id: 'dynamics-365-integration',
      title: 'Dynamics 365 Integration',
      tags: ['Dynamics 365', 'CRM', 'Integration', 'Automation'],
      description: 'Integrated Dynamics 365 with custom web apps. Streamlined sales and improved data consistency.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    },
    {
      id: 'ai-powered-webapp',
      title: 'AI-Powered Web Application',
      tags: ['AI/ML', 'Python', 'React', 'API'],
      description: 'Full-stack app with integrated AI models. Automated customer support with 85% resolution rate.',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8257904f579e9fb4be3d7cdf73?w=600&h=400&fit=crop',
    },
    {
      id: 'analytics-dashboard',
      title: 'Real-time Analytics Dashboard',
      tags: ['React', 'TypeScript', 'Real-time', 'Performance'],
      description: 'High-performance dashboard handling 10k+ concurrent users with 90+ Lighthouse scores.',
      image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=600&h=400&fit=crop',
    },
    {
      id: 'mobile-backend',
      title: 'Mobile App Backend',
      tags: ['Node.js', 'MongoDB', 'AWS', 'Microservices'],
      description: 'Scalable REST API serving 100k+ users with auth, caching, and DB optimization.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects showcasing technical expertise and real-world impact.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                <Link href={`/projects/${project.id}`}>
                  <div className="h-full p-5 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-pointer flex flex-col">
                    {/* Project Image */}
                    <div className="w-full h-44 rounded-lg overflow-hidden mb-4">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* View Project Link */}
                    <div className="mt-4 text-primary text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                      View Details →
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-14" />
          <CarouselNext className="hidden md:flex -right-14" />
        </Carousel>
      </div>
    </section>
  )
}