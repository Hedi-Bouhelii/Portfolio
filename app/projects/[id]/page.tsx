import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, User } from 'lucide-react'
import { getProjectById, getAllProjectIds } from '@/lib/projects'

// Generate static params for all projects
export async function generateStaticParams() {
  const ids = getAllProjectIds()
  return ids.map((id) => ({ id }))
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: `${project.title} | Hedi Bouheli`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <main className="relative z-10 text-foreground min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            HB
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {project.longDescription}
              </p>

              {/* Meta Info */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-primary" />
                  <div>
                    <p className="text-muted-foreground text-xs">Year</p>
                    <p className="font-medium text-foreground">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={16} className="text-primary" />
                  <div>
                    <p className="text-muted-foreground text-xs">Duration</p>
                    <p className="font-medium text-foreground">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User size={16} className="text-primary" />
                  <div>
                    <p className="text-muted-foreground text-xs">Role</p>
                    <p className="font-medium text-foreground">{project.role}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Right: Main Image */}
            <div className="rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-6 section-elevated">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Key Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.results.map((result, i) => (
              <div
                key={i}
                className="p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {result.value}
                </div>
                <p className="text-sm text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-12 px-6 section-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Challenges</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 bg-card/40 backdrop-blur-sm rounded-lg border border-border/30"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Solutions</h2>
              <div className="space-y-4">
                {project.solutions.map((solution, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 bg-card/40 backdrop-blur-sm rounded-lg border border-border/30"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500/10 text-green-500 rounded-lg flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 px-6 section-elevated">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="py-12 px-6 section-dark">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-border/50 shadow-lg"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          <Link
            href="/#projects"
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            View All Projects
          </Link>
        </div>
      </section>
    </main>
  )
}