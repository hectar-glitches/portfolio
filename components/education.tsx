import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, Briefcase, Star, TrendingUp } from "lucide-react"
import { FadeInSection } from "./fade-in-section"
import { ChromaShift } from "./chroma-shift"
import { MagneticElement } from "./magnetic-element"

export function Education() {
  return (
    <section id="education" className="min-h-screen flex items-center py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <ChromaShift 
                intensity={1} 
                radius={100}
                colors={['#a8b8c8', '#9fb0c7', '#86a0ba', '#7d94b3', '#6d8fad']}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 silver-text-gradient">
                  Education & Experience
                </h2>
              </ChromaShift>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeInSection>

          <div className="space-y-12">
            {/* Education */}
            <FadeInSection delay={200}>
              <Card className="border border-border/30 bg-card/70 silver-shadow backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-foreground text-background rounded-xl">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-foreground mb-2">
                        Bachelor of Science in Computer Science and Sustainability
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">Minerva University, San Francisco • 2023-2027</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="bg-muted p-4 rounded-lg border border-border">
                        <p className="font-bold text-foreground text-lg">GPA: 3.8/4.0</p>
                        <p className="text-muted-foreground">Expected Graduation: May 2026</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures and Algorithms",
                          "Linear Algebra", 
                          "Single and Multivariable Calculus",
                          "Probability",
                          "Statistics",
                          "Formal Analysis"
                        ].map((course, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-background border-border text-foreground"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>

            {/* FEATURED CURRENT POSITION */}
            <FadeInSection delay={300} variant="scale">
              <MagneticElement strength={0.3}>
                <div className="relative">
                  {/* Featured badge */}
                  <div className="absolute -top-4 left-8 z-10">
                    <div className="bg-gradient-to-r from-primary/80 to-primary/60 text-primary-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg border border-border/30">
                      <Star className="w-4 h-4 mr-2" />
                      Current Position
                    </div>
                  </div>
                  
                  <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/90 to-card/70 silver-shadow backdrop-blur-sm relative overflow-hidden">
                    {/* Animated background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-gradient-to-br from-primary/90 to-primary/70 text-primary-foreground rounded-xl shadow-lg border border-border/20">
                          <Briefcase className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <ChromaShift intensity={1.5} radius={80}>
                              <CardTitle className="text-3xl text-foreground font-bold">
                                Software Development Intern
                              </CardTitle>
                            </ChromaShift>
                            <Badge className="bg-primary/20 text-primary border-primary/30">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Active
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <Calendar className="h-5 w-5" />
                            <span className="font-semibold text-lg">King of t Solutions • Summer 2024</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <div className="grid gap-6">
                        <div className="bg-muted/50 p-6 rounded-xl border border-border/30">
                          <h4 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                            <Award className="h-5 w-5 text-primary" />
                            Key Achievements & Responsibilities
                          </h4>
                          <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1.5 font-bold">▶</span>
                              <span className="font-medium">Developed and maintained React.js web applications using modern JavaScript/TypeScript</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1.5 font-bold">▶</span>
                              <span className="font-medium">Collaborated with cross-functional teams including designers, product managers, and senior engineers</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1.5 font-bold">▶</span>
                              <span className="font-medium">Participated in code reviews, agile development practices, and sprint planning sessions</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1.5 font-bold">▶</span>
                              <span className="font-medium">Implemented responsive UI components and optimized application performance</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          {[
                            "React.js", "TypeScript", "JavaScript", "Git", "Agile", "Code Reviews", 
                            "Team Collaboration", "Web Development", "UI/UX", "Performance Optimization"
                          ].map((skill, index) => (
                            <Badge
                              key={index}
                              className="bg-primary/10 text-primary border-primary/30 px-3 py-1 text-sm font-medium hover:bg-primary/20 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </MagneticElement>
            </FadeInSection>

            {/* Other Experience Cards */}
            <div className="grid md:grid-cols-1 gap-8 mt-12">
              <FadeInSection delay={600}>
                <Card className="border border-border/30 bg-card/70 silver-shadow backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-muted text-foreground rounded-xl">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground">Teaching Assistant - CS 61A</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">UC Berkeley • Spring 2024</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Assisted over 300 students in learning Python programming</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Held office hours and led discussion sections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Graded assignments and provided feedback</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
