import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-card/50 backdrop-blur-sm border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hedi Bouheli
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Full-Stack Developer &amp; Dynamics 365 Consultant
            </p>
          </div>

          <nav className="flex gap-6">
            {['About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Hedi-Bouhelii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/hedi-bouheli-705715226"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:Bouhelii.hedi@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:+21693494812"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/30">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hedi Bouheli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}