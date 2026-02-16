import Header from '@/components/header'
import SidebarIcons from '@/components/sidebar-icons'
import Hero from '@/components/hero'
import TrustSignals from '@/components/trust-signals'
import Services from '@/components/services'
import FeaturedProjects from '@/components/featured-projects'
import Process from '@/components/process'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Resume from '@/components/resume'

export default function Home() {
  return (
    <main className="relative z-10 text-foreground">
      <Header />
      <SidebarIcons />
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="section-elevated">
        <TrustSignals />
      </section>
      <section id="skills" className="section-dark">
        <Services />
      </section>
      <section id="projects" className="section-elevated">
        <FeaturedProjects />
      </section>
       <section id="resume" className="section-elevated">
        <Resume />
      </section>
      <section id="contact" className="section-dark">
        <CTA />
      </section>
      <Footer />
    </main>
  )
}