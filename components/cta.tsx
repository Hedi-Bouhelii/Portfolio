import { Mail, Linkedin, Github, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-10 md:p-14 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card/60 to-accent/5 backdrop-blur-sm text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              Let&apos;s{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Open to new opportunities and collaborations. Whether you&apos;re a recruiter, founder, or potential collaborator — let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:Bouhelii.hedi@gmail.com"
                className="flex items-center justify-center gap-2 px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/hedi-bouheli-705715226"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-10 py-4 border border-primary/50 text-primary font-semibold text-lg rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a
                href="tel:+21693494812"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Phone size={14} />
                +216 93 494 812
              </a>
              <a
                href="https://github.com/Hedi-Bouhelii"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
              <span className="flex items-center gap-1.5">
                📍 Tunis, Ben Arous
              </span>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Available for full-time roles • Contract work • Consulting
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}