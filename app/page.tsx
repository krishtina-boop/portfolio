import About from "@/components/AboutMe";
import Contact from "@/components/contact";
import Experience from "@/components/Experience";
import Hero from "@/components/HeroSection";
import Navbar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";
import Projects from "@/components/Projects";
import Skills from "@/components/skills";
import Training from "@/components/training";

export default function Home() {
  return (
    <main>
      <ParticlesBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Training />
        <Contact />
      </div>
    </main>
  );
}
