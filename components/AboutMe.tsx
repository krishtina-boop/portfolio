import Image from "next/image";
import { ScrollReveal } from "./scroll";
export default function About() {
  return (
    <>
      <ScrollReveal>
        <section id="about" className="py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 [text-shadow:0_0_10px_rgba(255,255,255,0.2)]">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Me
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="flex justify-center order-1">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  {/* Background glowing accent */}
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl mix-blend-screen"></div>

                  {/* Actual Image Container */}
                  <div className="relative w-full h-full bg-gray-700 rounded-full border-4 border-gray-700 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center animate-float-x">
                    <span className="text-gray-500">
                      <Image
                        src="/icons/about.jpeg"
                        alt="Krishtina Maharjan"
                        fill
                        className="object-cover"
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="flex flex-col order-2 text-center md:text-left">
                <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
                  Hello! I am Krishtina Maharjan, a passionate Software
                  Developer based in Nepal. 
                </p>

                <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
                  I am a Full-Stack Software Developer dedicated to building
                  seamless, end-to-end web solutions. From crafting responsive,
                  high-performance frontends in React and Next.js to
                  architecting scalable backends with Django and Node.js, I
                  focus on writing clean, maintainable code that bridges the gap
                  between complex logic and intuitive user experiences
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
