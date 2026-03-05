"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Globe,
  Atom,
  Code2,
  Paintbrush,
  Layers,
  Box,
  Shield,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { useTransition } from "@/context/TransitionContext";

export default function ProjectDetail({ project }) {
  const containerRef = useRef(null);
  const router = useRouter();
  const { reveal } = useTransition();

  useEffect(() => {
    window.scrollTo(0, 0);

    reveal();

    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.from(".reveal-img", {
        scale: 1.1,
        filter: "grayscale(100%)",
        duration: 2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const goBack = () => {
    router.push("/");
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#26283B] pt-40 pb-32 px-12 relative overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[#ffef4d]/[0.02] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        {/* Navigation */}
        <button 
          onClick={goBack}
          className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[#ffef4d]/40 hover:text-[#ffef4d] transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Back to Projects
        </button>

        <div className="grid lg:grid-cols-12 gap-20">

          <div className="lg:col-span-5 space-y-12">

            <p className="reveal-text text-xs text-[#ffef4d]/30 uppercase">
              Project Details // {project.category}
            </p>

            <h1 className="reveal-text text-7xl text-[#ffef4d]">
              {project.title}
            </h1>

            <p className="reveal-text text-lg text-[#ffef4d]/60 italic">
              {project.description}
            </p>

            <div className="flex gap-8 pt-6">
              <TechIcon icon={Layers} label="Next.js" />
              <TechIcon icon={Atom} label="React" />
              <TechIcon icon={Paintbrush} label="CSS" />
              <TechIcon icon={Code2} label="HTML" />
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              className="inline-flex gap-4 bg-[#ffef4d] text-[#26283B] px-10 py-5 uppercase text-xs"
            >
              Go Live <Globe size={16} />
            </a>
          </div>

          <div className="lg:col-span-7">
            <img
              src={project.image}
              className="reveal-img w-full object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

function TechIcon({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Icon size={26} className="text-[#ffef4d]/40" />
      <span className="text-xs text-[#ffef4d]/20">{label}</span>
    </div>
  );
}