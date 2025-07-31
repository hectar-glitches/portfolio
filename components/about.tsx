export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white relative">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl"></div>
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Alex Chen"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto relative z-10 border-4 border-white"
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm a junior Computer Science student at{" "}
                  <span className="font-semibold text-blue-600">UC Berkeley</span> with a passion for creating
                  innovative software solutions. My journey in tech started with curiosity about how websites work, and
                  has evolved into a deep love for full-stack development and machine learning.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  When I'm not coding, you can find me contributing to open-source projects, participating in
                  hackathons, or exploring the latest tech trends. I believe in writing clean, efficient code and
                  creating user experiences that make a real difference.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-slate-800 mb-4 text-lg">Interests</h4>
                  <ul className="text-slate-600 space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">▸</span> Web Development
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">▸</span> Machine Learning
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">▸</span> Open Source
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">▸</span> UI/UX Design
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                  <h4 className="font-bold text-slate-800 mb-4 text-lg">Currently</h4>
                  <ul className="text-slate-600 space-y-2">
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-2">▸</span> Learning React Native
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-2">▸</span> Building side projects
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-2">▸</span> Contributing to OSS
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-500 mr-2">▸</span> Seeking internships
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
