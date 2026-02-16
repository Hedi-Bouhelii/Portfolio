'use client'

import React, { useState, useEffect } from 'react'
import { Home, User, Zap, Code, Briefcase, MessageSquare, Mail, FileText } from 'lucide-react'

interface NavItem {
  icon: React.ReactNode
  activeIcon: React.ReactNode
  label: string
  href: string
  id: string
}

const navItems: NavItem[] = [
  {
    icon: <Home size={20} />,
    activeIcon: <Home size={20} strokeWidth={2.5} />,
    label: 'Home',
    href: '#home',
    id: 'home',
  },
  {
    icon: <User size={20} />,
    activeIcon: <User size={20} strokeWidth={2.5} />,
    label: 'About',
    href: '#about',
    id: 'about',
  },
  {
    icon: <Zap size={20} />,
    activeIcon: <Zap size={20} strokeWidth={2.5} />,
    label: 'Skills',
    href: '#skills',
    id: 'skills',
  },
  {
    icon: <FileText size={20} />,
    activeIcon: <FileText size={20} strokeWidth={2.5} />,
    label: 'Resume',
    href: '#resume',
    id: 'resume',
  },
  {
    icon: <Code size={20} />,
    activeIcon: <Code size={20} strokeWidth={2.5} />,
    label: 'Projects',
    href: '#projects',
    id: 'projects',
  },
  {
    icon: <Mail size={20} />,
    activeIcon: <Mail size={20} strokeWidth={2.5} />,
    label: 'Contact',
    href: '#contact',
    id: 'contact',
  },
]

export default function SidebarIcons() {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id)

    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Check if we're at the very top
      if (scrollY < 100) {
        setActiveSection('home')
        return
      }

      // Check if we're at the very bottom
      if (scrollY + windowHeight >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact')
        return
      }

      // Find which section is currently most visible
      let currentSection = 'home'
      let maxVisibleArea = 0

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        const elementTop = rect.top
        const elementBottom = rect.bottom
        const elementHeight = rect.height

        // Calculate how much of the section is visible in the viewport
        const visibleTop = Math.max(0, elementTop)
        const visibleBottom = Math.min(windowHeight, elementBottom)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)

        // Weight sections that are near the top of the viewport more
        const topWeight = elementTop <= windowHeight * 0.4 && elementBottom > 0 ? 1.5 : 1
        const visibleArea = visibleHeight * topWeight

        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea
          currentSection = id
        }
      }

      setActiveSection(currentSection)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-1">
      {/* Track line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border/30 -z-10" />

      {navItems.map((item) => {
        const isActive = activeSection === item.id

        return (
          <div key={item.id} className="relative flex items-center group">
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110'
                  : 'text-muted-foreground hover:text-primary hover:bg-secondary/80'
              }`}
              onMouseEnter={() => setActiveTooltip(item.id)}
              onMouseLeave={() => setActiveTooltip(null)}
              aria-label={item.label}
              aria-current={isActive ? 'true' : undefined}
            >
              {isActive ? item.activeIcon : item.icon}

              {/* Active dot indicator */}
              {isActive && (
                <span className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-cyan-400 rounded-full border-2 border-background animate-pulse" />
              )}
            </a>

            {/* Tooltip */}
            <div
              className={`absolute left-14 bg-card/95 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-xl border border-border/50 transition-all duration-200 pointer-events-none ${
                activeTooltip === item.id
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-2'
              }`}
            >
              <span className={isActive ? 'text-primary font-semibold' : ''}>
                {item.label}
              </span>
              {/* Arrow */}
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-card/95 border-l border-b border-border/50 transform rotate-45" />
            </div>
          </div>
        )
      })}
    </div>
  )
}