import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-16"
      >
        <div className="hidden sm:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col gap-6 z-40">
          {/* LinkedIn */}
          <Link href="https://linkedin.com/in/yourprofile" target="_blank">
            <Image
              src={"/icons/linkedin.svg"}
              alt={""}
              width={24}
              height={24}
            />
          </Link>

          {/* GitHub */}
          <Link href="https://github.com/yourusername" target="_blank">
            <Image src={"/icons/git2.svg"} alt={""} width={24} height={24} />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:pl-20 sm:pr-6 lg:px-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Column 1: Text Content */}
            <div className="flex flex-col order-2 md:order-1 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 [text-shadow:0_0_10px_rgba(255,255,255,0.3)]">
                Hi, I am <br className="hidden md:block" />
              </h1>
              <h1 className="text-3xl font-extrabold mb-4  sm:text-4xl md:text-5xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 [text-shadow:none]">
                  Krishtina Maharjan
                </span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0">
                I am a <span className="font-bold">Software Developer</span>
                <br />
                Dedicated to building seamless, end-to-end web solutions by
                bridging high-performance Next.js frontends with scalable Django
                and Node.js backends through clean, maintainable code
              </p>

              <div className="flex gap-4 justify-center md:justify-start">
                <Link
                  href="/project"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-gray-400 hover:border-cyan-400 text-gray-200 hover:text-cyan-400 rounded-lg font-medium transition-all"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="flex justify-center order-1 md:order-2">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl mix-blend-screen"></div>

                <div className="relative w-full h-full bg-gray-700 rounded-full border-4 border-gray-700 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center">
                  <span className="text-gray-500">
                    <Image
                      src="/icons/kris.jpeg"
                      alt="Krishtina Maharjan"
                      fill
                      className="object-cover"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
