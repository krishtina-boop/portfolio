import { training } from "@/data/training";
import Image from "next/image";
export default function Training() {
  return (
    <>
      <section id="training" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 [text-shadow:0_0_10px_rgba(255,255,255,0.2)]">
              Training &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                Certificates
              </span>
            </h2>
          </div>

          {/* Training Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {training.map((item) => (
              <div
                key={item.id}
                className="relative w-full hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-2 group overflow-hidden flex flex-col"
              >
                <div className="p-6 sm:p-8 flex flex-col grow relative z-10">
                  <div className="absolute -top-10 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500 z-0"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 [text-shadow:0_0_5px_rgba(255,255,255,0.2)]">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap items-center text-white mb-2">
                      <p>Provider: {item.company}</p>
                    </div>

                    <div className="flex flex-wrap items-center text-white mb-2">
                      <p>Duration: {item.duration}</p>
                    </div>

                    {/* Description Paragraphs */}
                    <div className="space-y-3 ">
                      {item.description.map((desc, i) => (
                        <p
                          key={i}
                          className="text-gray-300 text-sm sm:text-base leading-relaxed"
                        >
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* --- BOTTOM PART: IMAGE --- */}
                {/* mt-auto pushes this container to the very bottom of the card */}
                <div className="relative w-full h-60 sm:h-56 bg-gray-900/80 border-t border-gray-700/50 overflow-hidden flex items-center justify-center mt-auto group-hover:bg-gray-900/60 transition-colors duration-300">
                  {/* Visual Placeholder */}
                  <span className="text-gray-500 font-medium text-sm z-10 flex flex-col items-center gap-2">
                    <Image
                      src={item.image}
                      alt={`${item.name} Certificate`}
                      fill
                      className="object-contain object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
