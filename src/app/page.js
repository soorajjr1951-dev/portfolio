"use client";

import { useState, useEffect, useRef } from "react";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import ProjectDetail from "@/components/ProjectDetail";
import TransitionOverlay from "@/components/TransitionOverlay";
import Loader from "@/components/Loader";
import DockNavbar from "@/components/DockNavbar";

import { AnimatePresence } from "framer-motion";

export default function HomePage() {

  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const transitionRef = useRef(null);

  /* Initial Reveal */
  useEffect(() => {
    if (!isLoading) {
      const initTransition = async () => {
        if (transitionRef.current) {
          await transitionRef.current.reveal();
        }
      };
      initTransition();
    }
  }, [isLoading]);

  /* Project click */
  const handleProjectClick = async (project) => {

    if (transitionRef.current) {

      await transitionRef.current.play();

      setSelectedProject(project);

      window.scrollTo(0, 0);

      await transitionRef.current.reveal();

    }

  };

  /* Back to home */
  const handleBackToHome = async () => {

    if (transitionRef.current) {

      await transitionRef.current.play();

      setSelectedProject(null);

      await transitionRef.current.reveal();

    }

  };

  return (
    <div className="min-h-screen bg-[#26283B] selection:bg-[#ffef4d] selection:text-[#26283B]">

      <SEO page={selectedProject ? "works" : "home"} />

      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <TransitionOverlay ref={transitionRef} />

      <main className="relative">

        {selectedProject ? (

          <ProjectDetail
            project={selectedProject}
            onBack={handleBackToHome}
          />

        ) : (

          <>

            <section id="home">
              <Hero />
            </section>

            <section id="works">
              <Projects onProjectClick={handleProjectClick} />
            </section>

            <section id="pricing">
              <Pricing />
            </section>

            <section id="contact">
              <Contact />
            </section>

            {/* Ending */}
            <div className="py-64 text-center border-t border-[#ffef4d]/20 relative overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ffef4d]/[0.05]" />

              <p className="mb-8 uppercase tracking-[0.4em] opacity-40 text-[#ffef4d]">
                Fin.
              </p>

              <h4 className="text-5xl font-medium tracking-widest mb-4 text-[#ffef4d]">
                Thanks for visiting.
              </h4>

              <div className="flex flex-col items-center gap-4">

                <div className="w-12 h-px bg-[#ffef4d]/30" />

                <p className="text-[11px] text-[#ffef4d]/50 uppercase tracking-[0.4em]">
                  SOORAJ — WEB DEVELOPMENT 2025
                </p>

              </div>

            </div>

          </>

        )}

      </main>

      {/* Floating Navbar */}
      {!selectedProject && (
        <DockNavbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}

    </div>
  );
}