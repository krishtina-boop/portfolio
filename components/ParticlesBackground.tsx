"use client"; // <-- Add this line at the very top
import particlesConfig from "@/lib/particles-config";

import { useEffect, useState } from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return <Particles id="tsparticles" options={particlesConfig} />;
};

export default ParticlesBackground;