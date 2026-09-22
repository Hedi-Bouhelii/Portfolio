import type { Project } from '@/lib/projects'

const LABELS: Record<NonNullable<Project['status']>, string> = {
  'in-progress': 'In Progress',
  planned: 'Planned',
}

export default function ProjectStatusBadge({
  status,
  className = 'bg-amber-500/10 text-amber-500 border-amber-500/20',
}: {
  status: Project['status']
  className?: string
}) {
  if (!status) return null

  return (
    <span className={`text-xs px-3 py-1 border rounded-full font-medium ${className}`}>
      {LABELS[status]}
    </span>
  )
}
