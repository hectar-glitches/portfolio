import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInSection } from "./fade-in-section"
import { ChromaShift } from "./chroma-shift"
import { MagneticElement } from "./magnetic-element"

export function Skills() {
  // Simplified skill structure
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Next.js"],
    },
    {
      title: "Backend", 
      skills: ["Python", "Node.js", "FastAPI", "REST APIs", "Express.js"],
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis"],
    },
    {
      title: "Tools ",
      skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jira"],
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-6 bg-background">
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
                  Skills & Technologies
                </h2>
              </ChromaShift>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeInSection>

          <div className="space-y-8">
            {/* Skill Categories */}
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <FadeInSection key={index} delay={index * 150 + 100} variant="scale">
                  <Card className="border border-border/30 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2 silver-shadow backdrop-blur-sm h-full">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl text-foreground font-bold flex items-center gap-3">
                        <span className="text-2xl"></span>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div 
                            key={skillIndex} 
                            className="group relative"
                          >
                            <MagneticElement>
                              <div className="bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm">
                                <span className="text-sm font-medium text-primary">{skill}</span>
                              </div>
                            </MagneticElement>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
