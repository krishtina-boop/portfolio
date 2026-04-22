import { Badge } from "./ui/badge";
import { project } from "@/data/project";
import Link from "next/link";
export default function Projects() {
  return (
    <>
      <section id="project" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 [text-shadow:0_0_10px_rgba(255,255,255,0.2)]">
              My{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                Projects
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {project.map((project) => (
              <div
                key={project.id}
                className="relative w-full backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:border-cyan-400/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-2 group overflow-hidden flex flex-col"
              >
                {/* --- TOP PART: IMAGE --- */}
                <div className="relative w-full h-48 sm:h-60 bg-gray-900/60 border-b border-gray-700/50 overflow-hidden flex items-center justify-center">
                  {/* Visual Placeholder */}
                  <span className="text-gray-600 font-medium text-lg z-10 flex flex-col items-center gap-3">
                    Project Image
                  </span>

                  {/* <Image
                  src={`/projects/${project.id}.jpg`} // Assumes image name matches id (e.g., 1.jpg)
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                /> 
                */}
                </div>

                <div className="p-6 sm:p-8 flex flex-col grow relative">
                  <div className="absolute -top-10 -right-20 w-64 h-64 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500 z-0"></div>

                  <div className="relative z-10 flex flex-col grow">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 [text-shadow:0_0_5px_rgba(255,255,255,0.2)]">
                      {project.name.split(" | ")[0]}
                    </h3>

                    {/* Subtitle / Tech Stack Highlight */}
                    <h4 className="text-sm font-medium text-cyan-400 mb-5 tracking-wide uppercase">
                      {project.name}
                    </h4>

                    <div className="space-y-4 mb-4 text-white text-justify">
                      {project.description}
                    </div>

                    <div className="mb-4 flex flex-wrap w-full items-center justify-center gap-4">
                      <Badge className=" bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Python</Badge>
                      <Badge className=" bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Flask</Badge>
                      <Badge className=" bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Express.js</Badge>
                      <Badge className=" bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">EJS</Badge>
                      <Badge className=" bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Node.js</Badge>
                      <Badge className=" bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Sequelize</Badge>
                      <Badge className=" bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">MySQL</Badge>



                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-700/50">
                      <Link
                        href="#" // Replace with your GitHub Link later
                        className="flex items-center gap-1.5 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors border border-gray-600 hover:border-gray-500"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Source Code
                      </Link>

                      <Link
                        href="#" // Replace with Live Demo Link later
                        className="flex items-center gap-1.5 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-medium transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
