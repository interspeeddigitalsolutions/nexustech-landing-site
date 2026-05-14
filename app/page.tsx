import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ProjectsSection } from "@/components/projects-section"
import { StudioSection } from "@/components/studio-section"
import { EditorialBreak } from "@/components/editorial-break"
import { ApproachSection } from "@/components/approach-section"
import { JournalSection } from "@/components/journal-section"
import { TechStack } from "@/components/tech-stack"
import { IndustriesSection } from "@/components/industries-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProjectsSection />
      <EditorialBreak />
      <StudioSection />
      <ApproachSection />
      <IndustriesSection />
      <JournalSection />
      <TechStack />
      <ContactSection />
      <Footer />
    </main>
  )
}
