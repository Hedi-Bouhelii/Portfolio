export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Understanding goals, audience, and technical requirements with deep market research.',
    },
    {
      number: '02',
      title: 'Planning & Architecture',
      description: 'Technical specs, system architecture, and infrastructure planning for optimal performance.',
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      description: 'Interactive prototypes with iterative UX refinement and testing.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Modern tech, clean code, comprehensive testing, and performance optimization.',
    },
    {
      number: '05',
      title: 'Testing & Optimization',
      description: 'Cross-device testing, security audits, and user acceptance testing.',
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'Zero-downtime deployment with ongoing monitoring and optimization.',
    },
  ]

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">How I Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            My Process
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven methodology ensuring technical excellence and measurable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-border/50">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Timeline</h3>
              <div className="space-y-3">
                {[
                  { label: 'Quick-Launch Projects', detail: '2-3 weeks' },
                  { label: 'Custom Full-Stack Solutions', detail: '4-8 weeks' },
                  { label: 'Enterprise Implementations', detail: '3+ months' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-border/30">
                    <p className="font-medium text-foreground text-sm">{item.label}</p>
                    <p className="text-sm text-primary font-medium">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">What You Get</h3>
              <div className="space-y-2">
                {[
                  'Regular progress updates',
                  'Clear documentation',
                  'Collaborative design process',
                  'Post-launch support',
                  'Transparent pricing',
                ].map((item) => (
                  <p key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-primary">✓</span> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}