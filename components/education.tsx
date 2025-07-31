import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Education & Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-slate-800 mb-2">
                      Bachelor of Science in Computer Science
                    </CardTitle>
                    <div className="flex items-center gap-2 text-slate-600 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">University of California, Berkeley • 2022-2026</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-white/60 p-4 rounded-lg">
                      <p className="font-bold text-slate-800 text-lg">GPA: 3.8/4.0</p>
                      <p className="text-slate-600">Expected Graduation: May 2026</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures",
                        "Algorithms",
                        "Database Systems",
                        "Software Engineering",
                        "Machine Learning",
                        "Computer Networks",
                      ].map((course, index) => (
                        <Badge
                          key={index}
                          className="bg-white/80 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-800">Software Development Intern</CardTitle>
                      <div className="flex items-center gap-2 text-slate-600 mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>TechStart Inc. • Summer 2024</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">▸</span>
                      <span>Developed and maintained React components for the company's main web application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">▸</span>
                      <span>
                        Collaborated with senior developers to implement new features using TypeScript and Next.js
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">▸</span>
                      <span>Optimized database queries resulting in 30% faster page load times</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl text-white">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-800">Teaching Assistant - CS 61A</CardTitle>
                      <div className="flex items-center gap-2 text-slate-600 mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>UC Berkeley • Fall 2023 - Present</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">▸</span>
                      <span>Assist 40+ students weekly with Python programming concepts and debugging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">▸</span>
                      <span>Lead discussion sections and office hours for introductory computer science course</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">▸</span>
                      <span>Grade assignments and provide constructive feedback to help students improve</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
