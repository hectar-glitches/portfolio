import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
