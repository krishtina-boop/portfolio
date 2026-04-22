import { experience } from "@/data/experience";
import { ScrollReveal } from "./scroll";
export default function Experience() {
  return (
    <>
      <ScrollReveal>
        <section id="experience" className="py-20 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 [text-shadow:0_0_10px_rgba(255,255,255,0.2)]">
                My{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  Experience
                </span>
              </h2>
            </div>

            <div className="relative max-w-5xl mx-auto w-full py-10">
              {/* The Line - strictly on the left */}
              <div className="absolute top-0 bottom-0 left-6 md:left-10 w-0.5 bg-linear-to-b from-cyan-400 to-blue-600 z-0"></div>

              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative w-full pl-16 md:pl-24 mb-12 last:mb-0 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute top-8 left-6 md:left-10 -translate-x-2.5 w-5 h-5 rounded-full bg-gray-900 border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-20 group-hover:bg-cyan-400 transition-colors duration-300"></div>

                  <div className="w-full backdrop-blur-sm border border-gray-700/30 p-6 sm:p-10 rounded-2xl hover:border-blue-400/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white [text-shadow:0_0_5px_rgba(255,255,255,0.2)]">
                        {exp.role}
                      </h3>
                      <span className="inline-block px-4 py-1.5 text-blue-300 text-lg font-bold">
                        {exp.duration}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-medium text-white mb-4">
                      {exp.company}
                    </h4>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 flex items-start">
                          <span className="text-cyan-500 mr-3 mt-1 shrink-0">
                            -
                          </span>
                          <span className="text-base sm:text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
