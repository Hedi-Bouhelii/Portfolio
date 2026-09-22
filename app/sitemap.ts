import type { MetadataRoute } from 'next'
import { getAllProjectIds } from '@/lib/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://hedi-bouheli.vercel.app'

  const projectRoutes = getAllProjectIds().map((id) => ({
    url: `${siteUrl}/projects/${id}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...projectRoutes,
  ]
}
