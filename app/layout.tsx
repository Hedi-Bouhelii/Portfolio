import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { LoaderProvider } from '@/components/loader-provider'
import { ThemeProvider } from '@/components/theme-provider'
import VantaBackground from '@/components/vanta-background'

import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Hedi Bouheli | Full-Stack Developer & Big Data Engineer',
  description: 'Professional portfolio of Hedi Bouheli - Full-Stack Developer and Big Data Engineer specializing in modern web applications, AI solutions, and cloud infrastructure.',
  keywords: 'Hedi Bouheli, Full-Stack Developer, Big Data Engineer, AI, Azure, React, Node.js, Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <VantaBackground />
          <LoaderProvider>
            {children}
          </LoaderProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}