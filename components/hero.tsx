'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 min-h-[90vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              Available for opportunities
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-primary to-cyan-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
              <br />
              <span className="text-foreground">
                &amp; Big Data Engineer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-xl">
              Crafting intelligent solutions that turn complex problems into elegant digital products. Specializing in modern web applications, AI integration, and cloud architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-primary/50 text-primary font-medium rounded-lg hover:bg-primary/10 transition-all duration-300 text-center"
              >
                View My Work
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">2+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">15+</div>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">Bac+5</div>
                <p className="text-sm text-muted-foreground">Big Data &amp; AI</p>
              </div>
            </div>
          </div>

          {/* Right - Profile Picture */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="relative w-[500px] h-[500px]">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-primary to-cyan-400 rounded-3xl opacity-30 blur-3xl "></div>

              {/* Profile Picture Frame - No border */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden mb-12">
                <img
                  src="/Hedi-Bouheli.png"
                  alt="Hedi Bouheli"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}