import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { FadeInSection } from "./fade-in-section"

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 px-6 bg-background text-foreground relative"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 silver-text-gradient">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
          </FadeInSection>

          <div className="max-w-2xl mx-auto">
            {/* Intro Text */}
            <FadeInSection delay={200}>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Let's Connect!
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, feel free to reach out!
                </p>
              </div>
            </FadeInSection>

            {/* Contact Form */}
            <FadeInSection delay={400}>
              <Card className="bg-muted border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      />
                      <Input
                        placeholder="Last Name"
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                    <Input
                      placeholder="Subject"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                    <Textarea
                      placeholder="Your message..."
                      className="min-h-[120px] bg-background border-border text-foreground placeholder:text-muted-foreground"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}
