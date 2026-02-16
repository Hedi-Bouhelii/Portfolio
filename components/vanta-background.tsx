'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

declare global {
  interface Window {
    THREE: any
    VANTA: any
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Load scripts dynamically
  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve()
          return
        }
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load ${src}`))
        document.head.appendChild(script)
      })
    }

    const loadAll = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
        await loadScript('https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js')
        setScriptsLoaded(true)
      } catch (err) {
        console.error('[Vanta] Failed to load scripts:', err)
      }
    }

    loadAll()
  }, [])

  // Initialize or reinitialize Vanta when scripts load or theme changes
  useEffect(() => {
    if (!scriptsLoaded || !mounted || !vantaRef.current) return
    if (!window.VANTA || !window.THREE) return

    // Destroy existing effect before re-creating
    if (vantaEffect.current) {
      vantaEffect.current.destroy()
      vantaEffect.current = null
    }

    const isDark = resolvedTheme === 'dark'

    try {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: isDark ? 0x3b82f6 : 0x2563eb,
        backgroundColor: isDark ? 0x0a0f1a : 0xf0f4f8,
        points: 8,
        maxDistance: 25,
        spacing: 18,
        showDots: true,
      })
    } catch (err) {
      console.error('[Vanta] Failed to initialize:', err)
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [scriptsLoaded, mounted, resolvedTheme])

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full -z-10 transition-colors duration-500"
      aria-hidden="true"
    />
  )
}