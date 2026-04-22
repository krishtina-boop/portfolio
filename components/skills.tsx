import { skillsData } from "@/data/skills";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 [text-shadow:0_0_10px_rgba(255,255,255,0.2)]">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Tech Stack
              </span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6  hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
              >
                {/* Icon Container */}
                <div className="relative w-16 h-16 ">
                  <div className="w-12 h-12 flex items-center justify-center text-xs text-gray-400 group-hover:border-cyan-400">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <span className="text-gray-300 font-medium tracking-wide group-hover:text-cyan-400 transition-colors duration-300 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
