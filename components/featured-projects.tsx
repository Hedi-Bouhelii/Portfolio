'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import ProjectStatusBadge from '@/components/project-status-badge'
import { projects } from '@/lib/projects'

export default function FeaturedProjects() {
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
                    <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {project.status && (
                        <div className="absolute top-3 right-3">
                          <ProjectStatusBadge
                            status={project.status}
                            className="bg-background/80 backdrop-blur-sm text-amber-500 border-amber-500/30"
                          />
                        </div>
                      )}
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