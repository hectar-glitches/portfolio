import { Button } from "@/components/ui/button"
import { Github, Mail, Download } from "lucide-react"
import { FadeInSection } from "./fade-in-section"
import { MagneticElement } from "./magnetic-element"
import { ChromaShift } from "./chroma-shift"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 relative bg-background">
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-accent/50 text-foreground rounded-full text-sm font-medium mb-6 silver-shadow border border-border/30">
                Nice to meet you!
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200} variant="scale">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <MagneticElement strength={0.5}>
                <ChromaShift 
                  intensity={1.5} 
                  radius={120}
                  colors={['#d2d7e1', '#b8c2d4', '#9fb0c7', '#86a0ba', '#6d8fad']}
                >
                  <span className="silver-text-gradient inline-block">
                    Hectar Carson
                  </span>
                </ChromaShift>
              </MagneticElement>
            </h1>
          </FadeInSection>

          <FadeInSection delay={400}>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">Software Engineering Intern</h2>
          </FadeInSection>

          <FadeInSection delay={600}>
            <p className="text-xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Passionate computer science and sustainability student who always seeks to be innovative in{" "}
              <span className="font-semibold text-foreground">full-stack development</span>,{" "}
              <span className="font-semibold text-foreground">machine learning</span>, and{" "}
              <span className="font-semibold text-foreground">scalable architectures</span>.
            </p>
          </FadeInSection>

          <FadeInSection delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <MagneticElement strength={0.3}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </MagneticElement>
              <MagneticElement strength={0.3}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </MagneticElement>
            </div>
          </FadeInSection>

          <FadeInSection delay={500}>
            <div className="flex justify-center space-x-6">
              <MagneticElement strength={0.4}>
                <a
                  href="https://github.com/hectar-glitches"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-muted border border-border hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
              </MagneticElement>
              <MagneticElement strength={0.4}>
                <a
                  href="mailto:hectar@example.com"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-muted border border-border hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </MagneticElement>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
