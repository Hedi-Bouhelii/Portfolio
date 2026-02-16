import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ProjectNotFound() {
  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Project Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The project you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>
    </main>
  )
}