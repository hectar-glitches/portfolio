"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star } from "lucide-react"
import { FadeInSection } from "./fade-in-section"
import { ChromaShift } from "./chroma-shift"

export function Projects() {
  const projects = [
    {
      title: "TravelMind Pro - AI-Powered Travel Ecosystem",
      description:
        "A comprehensive travel platform that leverages artificial intelligence, real-time data processing, and social networking to revolutionize trip planning and travel experiences. Features AI trip planning, real-time price monitoring, and intelligent itinerary generation.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["Next.js", "TypeScript", "Tailwind", "MIT License"],
      github: "https://github.com/hectar-glitches/travelmind-pro",
      demo: "https://travelmind-pro.com",
      featured: true,
    },
    {
      title: "Echo Chamber - Project Management App",
      description:
        "EchoChamber is a personal memory management system that combines 3D visualization, AI processing, and gamified journaling. Instead of plain text notes, your thoughts become living artifacts in a beautiful memory palace, each with its own AI-generated character and personality.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      github: "https://github.com/hectar-glitches/echo-chamber",
      demo: "https://taskflow-demo.com",
      featured: true,
    },
    {
      title: "AI powered Stock Predictor",
      description:
        "A fullstack application for predicting stock prices while considering current market sentiment.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["Python", "JavaScript", "Alpha Vantage API", "NewsAPI"],
      github: "https://github.com/hectar-glitches/stock-predictor-fullstack",
      demo: "https://studybuddy-ai.com",
      featured: true,
    },
    {
      title: "Stellar Clash",
      description:
        "A real-time multiplayer space combat game built with Next.js, TypeScript, and the Web Bluetooth API..",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["TypeScript", "JavaScript", "Next.js", "CSS", "Web Bluetooth API"],
      github: "https://github.com/hectar-glitches/bluetooth-game",
      demo: "https://ecotracker-app.com",
      featured: true,
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6 bg-background">
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
                  Featured Projects
                </h2>
              </ChromaShift>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeInSection>

          {/* Grid layout container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {projects.map((project, index) => (
              <FadeInSection key={index} delay={index * 200} variant="scale">
                <Card
                  className="group overflow-hidden border border-border/30 hover:border-primary/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-card/70 silver-shadow backdrop-blur-sm h-full flex flex-col"
                >
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    </div>
                  )}

                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <CardHeader className="pb-4 flex-grow">
                    <CardTitle className="text-xl font-bold text-foreground transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-border/50 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 bg-transparent"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 silver-shadow"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}