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
      title: "Echo Chamber",
      description:
        "Echo Chamber transforms your thoughts into a living, interactive 3D world where memories become characters with personalities. Features include 3D visualization of memories, AI-generated character personalities, and a gamified journaling experience. Built for users who want to make memory management engaging and visually rich.",
      technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      github: "https://github.com/hectar-glitches/echo-chamber",
    },
    {
      title: "Stock Predictor Fullstack",
      description:
        "A full-stack stock forecasting dashboard with an ML backend for sentiment analysis from News API. Provides real-time stock price predictions, sentiment analysis from news sources, and an interactive dashboard for users to visualize and interpret market trends.",
      technologies: ["Python", "JavaScript", "Alpha Vantage API", "NewsAPI"],
      github: "https://github.com/hectar-glitches/stock-predictor-fullstack",
    },
    {
      title: "Ion Trajectory Integration",
      description:
        "A research project in collaboration with a professor, focused on simulations involving ion movement in the moon's exobase. Implements physics-based ion trajectory simulation and provides tools for visualizing and analyzing ion paths in a scientific context.",
      technologies: ["Python"],
      github: "https://github.com/hectar-glitches/ion-trajectory-intergration",
    },
    {
      title: "Chat App",
      description:
        "An educational chat platform designed to facilitate direct messaging, calls, and group discussions around a subject. Features real-time messaging and calls, group chat support, and a user-friendly interface tailored for educational environments.",
      technologies: ["Dart", "Flutter"],
      github: "https://github.com/hectar-glitches/chat_app",
    },
    {
      title: "Bluetooth Game",
      description:
        "A real-time multiplayer space combat game built with Next.js, TypeScript, and the Web Bluetooth API. Supports multiplayer space battles, Web Bluetooth device connectivity, and is built with modern web technologies for a seamless gaming experience.",
      technologies: ["TypeScript", "Next.js", "Web Bluetooth API", "CSS"],
      github: "https://github.com/hectar-glitches/bluetooth-game",
    },
    {
      title: "KV Store",
      description:
        "A distributed key-value store project with sharding for scalability. Implements efficient data storage and retrieval, supports sharding for horizontal scaling, and is designed for high availability and performance in distributed systems.",
      technologies: ["TypeScript"],
      github: "https://github.com/hectar-glitches/kv-store",
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
                  Projects
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
                  {/* Featured banner removed as per request */}

                  {/* Image removed as per request to remove placeholder photos */}

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