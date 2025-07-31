import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              🚀 Available for Summer 2025 Internships
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Alex Chen
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-600 mb-8 font-light">Software Engineering Intern</h2>

          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate computer science student crafting innovative solutions through{" "}
            <span className="font-semibold text-slate-800">full-stack development</span>,{" "}
            <span className="font-semibold text-slate-800">machine learning</span>, and{" "}
            <span className="font-semibold text-slate-800">scalable architectures</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-blue-100 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
