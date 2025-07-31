import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "TaskFlow - Project Management App",
      description:
        "A full-stack project management application with real-time collaboration features, built with React, Node.js, and Socket.io. Includes user authentication, task assignment, and progress tracking.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://taskflow-demo.com",
      featured: true,
    },
    {
      title: "AI Study Buddy",
      description:
        "An intelligent study companion that uses machine learning to generate personalized quizzes and study materials. Built with Python, FastAPI, and integrated with OpenAI's API.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["Python", "FastAPI", "OpenAI API", "React", "MongoDB"],
      github: "https://github.com",
      demo: "https://studybuddy-ai.com",
      featured: false,
    },
    {
      title: "EcoTracker - Sustainability App",
      description:
        "A mobile-first web application that helps users track their carbon footprint and suggests eco-friendly alternatives. Features data visualization and social sharing capabilities.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["Next.js", "TypeScript", "Chart.js", "Supabase", "PWA"],
      github: "https://github.com",
      demo: "https://ecotracker-app.com",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
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

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-slate-300 text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-300 hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300 bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
