"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Training", path: "#training" },
    { name: "Project", path: "#project" },
    { name: "Contact", path: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-blue-200 [text-shadow:0_0_10px_rgba(255,255,255,0.7)]"
            >
              MyPortfolio
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-blue-200  hover:text-white px-3 py-2 rounded-md text-lg font-bold transition-all duration-300 [text-shadow:0_0_5px_rgba(255,255,255,0.4)] hover:[text-shadow:0_0_12px_rgba(255,255,255,0.9)]"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href={`${basePath}/icons/resume.pdf`}
                download="Krishtina_Resume.pdf"
                className="bg-blue-400 text-white p-3 rounded-2xl"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6 [filter:drop-shadow(0_0_5px_rgba(255,255,255,0.7))]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6 [filter:drop-shadow(0_0_5px_rgba(255,255,255,0.7))]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        // Added a slight dark transparent background so mobile text is readable
        <div className="md:hidden bg-black/40 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 [text-shadow:0_0_5px_rgba(255,255,255,0.4)] hover:[text-shadow:0_0_12px_rgba(255,255,255,0.9)]"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`${basePath}/icons/resume.pdf`}
              download="Krishtina_Resume.pdf"
              className="bg-blue-400 text-white p-3 rounded-2xl mt-2"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
