'use client'

import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import Loader from './loader'

interface LoaderContextType {
  isLoading: boolean
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Total loader duration: 4.5s animation + 0.7s fade out
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5200)

    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) {
    return <>{children}</>
  }

  return (
    <LoaderContext.Provider value={{ isLoading }}>
      {isLoading && <Loader />}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </LoaderContext.Provider>
  )
}

export function useLoader() {
  const context = useContext(LoaderContext)
  if (context === undefined) {
    throw new Error('useLoader must be used within LoaderProvider')
  }
  return context
}