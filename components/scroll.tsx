"use client"; // Required for Framer Motion

import { motion } from "framer-motion";

export const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starts hidden and 50px lower
      whileInView={{ opacity: 1, y: 0 }} // Animates to visible and original position
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the element is visible. 'once: true' means it won't repeat if they scroll up and down.
      transition={{ duration: 0.6, ease: "easeOut" }} // Takes 0.6 seconds
    >
      {children}
    </motion.div>
  );
};
