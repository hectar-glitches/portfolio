import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Let's Connect!
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-200">alex.chen@berkeley.edu</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-200">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-200">San Francisco Bay Area, CA</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-110 bg-transparent"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-110 bg-transparent"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-110 bg-transparent"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="bg-white/10 border-white/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                    <Input
                      placeholder="Last Name"
                      className="bg-white/10 border-white/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white/10 border-white/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                  />
                  <Input
                    placeholder="Subject"
                    className="bg-white/10 border-white/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                  />
                  <Textarea
                    placeholder="Your message..."
                    className="min-h-[120px] bg-white/10 border-white/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
