import { Code2, Database, Cloud, Zap } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Custom web applications built with modern tech stack. React, Node.js, TypeScript for production-grade solutions that scale.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Data Solutions & AI',
    description: 'Transform your data into actionable insights. Big Data processing, ML models, and AI integration to drive business decisions.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Enterprise-grade cloud solutions on Azure. Scalable infrastructure, DevOps practices, and security-first design.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Enterprise Integration',
    description: 'Seamless integration with Dynamics 365 and CRM systems. Connect your business tools for unified workflows.',
    gradient: 'from-orange-500 to-yellow-500',
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Core Competencies
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized expertise across the full technology stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.gradient} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 pt-10 border-t border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-6">Technical Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Problem Solver', text: 'Creative solutions for complex technical challenges. Strong debugging and optimization skills.' },
              { label: 'Quick Learner', text: 'Rapidly master new technologies. Self-directed with proven ability to tackle complex domains.' },
              { label: 'Team Contributor', text: 'Strong communication and agile experience. Mentoring and collaborative development.' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}