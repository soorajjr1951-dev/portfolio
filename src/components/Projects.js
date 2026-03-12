"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "@/context/TransitionContext";
import { PROJECTS } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const { play } = useTransition();

  const clientProjects = PROJECTS.filter(
    (project) => project.type === "Client Project",
  );

  const personalProjects = PROJECTS.filter(
    (project) => project.type === "Personal Project",
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".project-card", { opacity: 0, y: 60 });

      gsap.to(".project-card", {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".subheading", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [pathname]); // 👈 KEY FIX

  const openProject = async (id) => {
    await play();
    router.push(`/projects/${id}`);
  };

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative py-32 md:py-40 bg-[#26283B] overflow-hidden"
    >
      <div className="px-12 mb-32 max-w-7xl mx-auto relative z-10">
        <h2 className="text-7xl md:text-[10rem] text-[#ffef4d] leading-none">
          Selected
          <br />
          Work
        </h2>

        <p className="text-[#ffef4d]/40 mt-6 max-w-xl text-sm">
          A curated collection of client collaborations and personal experiments
          focused on crafting immersive, high-performance web experiences.
        </p>
      </div>

      <div className="projects-wrapper max-w-7xl mx-auto px-12 space-y-32 relative z-10">
        {/* CLIENT WORK */}
        <div>
          <div className="flex items-center gap-6 mb-16 subheading">
            <h3 className="text-lg tracking-[0.35em] uppercase text-[#ffef4d]/60">
              Client Work
            </h3>
            <div className="flex-1 h-px bg-linear-to-r from-[#ffef4d]/40 to-transparent"></div>
          </div>

          <div className="projects-grid grid md:grid-cols-2 gap-16">
            {clientProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openProject={openProject}
              />
            ))}
          </div>
        </div>

        {/* PERSONAL PROJECTS */}
        <div>
          <div className="flex items-center gap-6 mb-16 subheading">
            <h3 className="text-lg tracking-[0.35em] uppercase text-[#ffef4d]/60">
              Personal Projects
            </h3>
            <div className="flex-1 h-px bg-linear-to-r from-[#ffef4d]/40 to-transparent"></div>
          </div>

          <div className="projects-grid grid md:grid-cols-2 gap-16">
            {personalProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openProject={openProject}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, openProject }) {
  return (
    <div
      onClick={() => openProject(project.id)}
      className="project-card cursor-pointer group space-y-6 transform transition duration-500 hover:-translate-y-2"
    >
      <div className="relative aspect-16/10 overflow-hidden border border-[#ffef4d]/20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="px-6 py-3 bg-[#ffef4d] text-[#26283B] text-xs flex gap-2 uppercase tracking-widest shadow-xl">
            View Project <ArrowUpRight size={14} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-3xl text-[#ffef4d] group-hover:translate-x-1 transition">
          {project.title}
        </h3>

        <p className="text-xs uppercase tracking-[0.25em] text-[#ffef4d]/30">
          {project.category}
        </p>
      </div>
    </div>
  );
}
