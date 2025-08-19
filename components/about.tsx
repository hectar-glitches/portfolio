import { FadeInSection } from "./fade-in-section"
import { ChromaShift } from "./chroma-shift"

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 bg-background relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <ChromaShift 
                intensity={1} 
                radius={100}
                colors={['#a8b8c8', '#9fb0c7', '#86a0ba', '#7d94b3', '#6d8fad']}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 silver-text-gradient">
                  About Me
                </h2>
              </ChromaShift>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection delay={300} variant="scale">
              <div className="relative">
                <img
                  src="/profile.jpeg?height=500&width=500"
                  alt="Hectar Carson"
                  className="rounded-2xl w-full max-w-md mx-auto relative z-10 border-4 border-border"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a junior Computer Science student at{" "}
                    <span className="font-semibold text-foreground">Minerva University</span>   driven to turn ideas into impactful software. 
                      What started as curiosity about how laptops work has evolved into a passion for full-stack development and machine learning,
                       driving me to build projects that try to tackle real-world challenges.    
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                      Outside the code editor, I'm often behind a camera capturing landscapes, 
                      traveling to new places, experimenting with new recipes, watching F1,
                      hiking, playing board games with friends, 
                      or diving into the latest tech trends. 
                      I believe in writing clean, efficient code and designing user experiences 
                      that delight and empower users.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                  <div className="bg-muted p-6 rounded-xl border border-border">
                    <h4 className="font-bold text-foreground mb-4 text-lg">Interests</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-center">
                        <span className="text-foreground mr-2">▸</span> App Development
                      </li>
                      <li className="flex items-center">
                        <span className="text-foreground mr-2">▸</span> Machine Learning
                      </li>
                      <li className="flex items-center">
                        <span className="text-foreground mr-2">▸</span> UI/UX
                      </li>
                      <li className="flex items-center">
                        <span className="text-foreground mr-2">▸</span> Research
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted p-6 rounded-xl border border-border">
                    <h4 className="font-bold text-foreground mb-4 text-lg">Currently</h4>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-center">
                        <span className="text-foreground mr-2">▸</span> Learning more on MCP servers
                      </li>
                      <li className="flex items-center">
                        <span className="text-foreground mr-2">▸</span> Exploring cloud computing
                      </li>
                      <li className="flex items-center">
                        <span className="text-foreground mr-2">▸</span> Reading random research papers on any field
                      </li>
                      <li className="flex items-center">
                        <span className="text-foreground mr-2">▸</span> Publishing a research paper on fluid dynamics
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}
