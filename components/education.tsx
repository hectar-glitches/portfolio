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
                        <p className="font-bold text-foreground text-lg">GPA: 3.6/4.0</p>
                        <p className="text-muted-foreground">Expected Graduation: May 2027</p>
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
                          "Formal Analysis",
                          "Software Engineering",

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
                  {/* Featured badge
                  <div className="absolute -top-4 left-8 z-10">
                    <div className="bg-gradient-to-r from-primary/80 to-primary/60 text-primary-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg border border-border/30">
                      <Star className="w-4 h-4 mr-2" />
                      Current Position
                    </div>
                  </div> */}
                  
                  <Card className="border-2 border-primary/30 bg-gradient-to-br from-card/90 to-card/70 silver-shadow backdrop-blur-sm relative overflow-hidden">
                    {/* Animated background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-gradient-to-br from-primary/90 to-primary/70 text-primary-foreground rounded-xl shadow-lg border border-border/20">
                          <Briefcase className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col gap-1 mb-4">
                            <CardTitle className="text-xl text-foreground">Software Engineering Intern</CardTitle>
                            <a
                              href="https://kingofthecurve.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-lg text-muted-foreground hover:text-foreground transition-colors"
                            >
                              King of the Curve, Saint Louis, MO • Summer 2025
                            </a>
                            
                      
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 relative z-10">
                      <div className="grid gap-6">
                        <div className="bg-muted/50 p-6 rounded-xl">
                          <h4 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                            {/* <Award className="h-5 w-5 text-primary" /> */}
                            Achievements & Responsibilities
                          </h4>
                          <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1.5 font-bold">▶</span>
                              <span className="font-medium">
                                Designed and solely developed the backend infrastructure for a real-time online classroom multiplayer mode, integrating with the senior UI/UX developer's template.  
                                This system supports over 8000 user-generated classrooms, enabling synchronous gameplay for 100+ participants per session with sub-10ms latency worldwide.  
                                Multiple game formats are supported, including classic 4-choice quizzes, true/false questions, passage-based questions, and a timed elimination mode, all generated from user-uploaded materials.
                                This led to 60% of roadmap users leveraging invite codes to bring friends into their classrooms, with 40% of those invited actively participating in at least ten multiplayer games.
                                <br />
                                <strong>Technologies:</strong> Flutter, Firebase Cloud Functions, WebSockets
                              </span>
                            </li>

                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1.5 font-bold">▶</span>
                              <span className="font-medium">
                                Implemented the backend for a “roadmap” feature that analyzed uploaded classroom material to propose a personalized study plan for each student,  
                                helping learners prioritize topics and track progress more effectively. 
                                In early testing, roadmap users who indicated their test date showed a 35% higher return rate week-over-week compared to non-roadmap users, indicating strong retention potential.
                                <br />
                                <strong>Technologies:</strong> Node.js, Express, Firebase Firestore, REST APIs
                              </span>
                            </li>

                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1.5 font-bold">▶</span>
                              <span className="font-medium">
                                Expanded an underused feature called Lecture Notes which transcribed live recordings and added an AI-driven content processing pipeline that summarized user-uploaded files via Flutter, Firebase, and Gemini API,  
                                then generated a podcast version using custom AI voices. This led to an increase in user engagement by 40% for existing users.
                                This feature increased average feature usage duration by 15%.
                                <br />
                                <strong>Technologies:</strong> Flutter, Firebase Storage, Gemini API, Cloud Functions, Text-to-Speech APIs
                              </span>
                            </li>

                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1.5 font-bold">▶</span>
                              <span className="font-medium">
                                Actively contributed to team-wide reviews and bug fixes of legacy code, agile sprint planning sessions, and team bonding exercises.
                                <br />
                                <strong>Technologies:</strong> React, Tailwind CSS, Jira, Git, Agile methodologies
                              </span>
                            </li>
                          </ul>
                        </div>
                        
                        {/* <div className="flex flex-wrap gap-3">
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
                        </div> */}
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
                        <Award className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground">Chief Scientist</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">NASA Proposal Writing and Evaluation Experience, Tempe, Arizona • Jan. 2025 – Apr. 2025</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Led a 5-person team to design a space mission concept leveraging LightGBM and TCN models to predict full Solar Particle Event (SPE) intensity for astronaut risk mitigation on future lunar missions and solar storm predictions on earth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Ranked 3rd out of 60+ teams nationally for technical merit, feasibility, and innovation in solar event forecasting</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={700}>
                <Card className="border border-border/30 bg-card/70 silver-shadow backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-muted text-foreground rounded-xl">
                        <Award className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground">Research Assistant</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">National Taiwan University, Taipei • Sep. 2024 - Dec. 2024</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Collaborated with Dr. Wei-Ling Tseng to adapt research on Saturn's moon Enceladus, tailoring simulation models using the Space Weather Modeling Framework, AstroPy, and SPICE toolkit to model the trajectory of pickup ions on our moon's surface for future lunar exploration missions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Applied computational physics and advanced numerical methods to achieve a 93% simulation accuracy with Saturn's magnetospheric model, contributing to NASA's understanding of space weather effects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Developed Python scripts for data analysis and visualization of ion trajectory patterns, processing over 10,000 data points from spacecraft measurements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={700}>
                <Card className="border border-border/30 bg-card/70 silver-shadow backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-muted text-foreground rounded-xl">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground">Software Intern</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">XgamingServers (Remote) • Jun. 2024 - Aug. 2024</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Customized and managed over 200 back-end servers for online gaming using ISPConfig, ensuring high availability, performance optimization, and seamless gaming experiences for clients across multiple game platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Led the company blog on WordPress, increasing organic traffic and engagement by implementing SEO optimization strategies, achieving over 50,000+ monthly page views through Google Analytics insights, content strategy, and social media integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Automated server deployment processes using shell scripts and monitoring tools, reducing setup time by 40% and improving system reliability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Collaborated with development teams to troubleshoot technical issues and implement custom server configurations for gaming clients</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </FadeInSection>

              <FadeInSection delay={800}>
                <Card className="border border-border/30 bg-card/70 silver-shadow backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-muted text-foreground rounded-xl">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground">Teaching Assistant - CS 110</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">Minerva University • Spring 2024</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Assisted over 30 students in learning Python programming fundamentals, data structures, and algorithmic problem-solving techniques through personalized tutoring sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Held weekly office hours and led interactive discussion sections, helping students improve their coding skills and understanding of computer science concepts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Graded assignments and programming projects, providing detailed feedback and constructive criticism to help students improve their coding practices and debugging skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-foreground mt-1.5">•</span>
                        <span>Collaborated with professors to develop supplementary learning materials and practice problems to enhance student engagement and comprehension</span>
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
