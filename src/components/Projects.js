"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { useTransition } from "@/context/TransitionContext";
import { PROJECTS } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const router = useRouter();
  const { play } = useTransition();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        stagger: 0.25,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openProject = async (id) => {
    await play();
    router.push(`/projects/${id}`);
  };

  return (
    <section ref={sectionRef} id="works" className="py-64 bg-[#26283B]">
      <div className="px-12 mb-32 max-w-7xl mx-auto">
        <h2 className="text-7xl md:text-[10rem] text-[#ffef4d]">
          Selected
          <br />
          Projects
        </h2>
      </div>

      <div className="projects-grid max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-12">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => openProject(project.id)}
            className="project-card cursor-pointer group space-y-6"
          >
            <div className="relative aspect-[16/10] overflow-hidden border border-[#ffef4d]/20">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="px-6 py-3 bg-[#ffef4d] text-[#26283B] text-xs flex gap-2">
                  View Project <ArrowUpRight size={14} />
                </div>
              </div>
            </div>

            <h3 className="text-3xl text-[#ffef4d]">{project.title}</h3>
            <h4 className="text-sm uppercase tracking-[0.2em] text-[#ffef4d]/30">
              {project.category}
            </h4>
            {/* <p className="text-sm text-[#ffef4d]/60">{project.description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
