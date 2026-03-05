"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
    <div
      ref={containerRef}
      className="min-h-screen bg-[#26283B] pt-32 pb-24 px-6 sm:px-10 lg:px-16 relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[#ffef4d]/[0.03] rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* Back button */}
        <button
          onClick={goBack}
          className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#ffef4d]/40 hover:text-[#ffef4d] transition group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-2 transition-transform"
          />
          Back to Projects
        </button>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 space-y-10">
            <p className="reveal-text text-xs text-[#ffef4d]/40 uppercase tracking-widest">
              {project.category}
            </p>

            <h1 className="reveal-text text-4xl sm:text-5xl lg:text-7xl text-[#ffef4d] leading-tight">
              {project.title}
            </h1>

            <p className="reveal-text text-lg text-[#ffef4d]/60 max-w-lg">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="grid grid-cols-4 gap-6 pt-4">
              <TechIcon icon={Layers} label="Next.js" />
              <TechIcon icon={Atom} label="React" />
              <TechIcon icon={Paintbrush} label="CSS" />
              <TechIcon icon={Code2} label="HTML" />
            </div>

            {/* Go Live Button (KEEP YOUR CURRENT DESIGN) */}
            <a
              href={project.liveUrl}
              target="_blank"
              className="relative inline-flex items-center gap-4 px-10 py-5 uppercase text-xs tracking-widest text-[#26283B] bg-[#ffef4d] overflow-hidden group rounded-md"
            >
              <span className="relative z-10 flex items-center gap-3">
                Go Live
                <Globe
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                />
              </span>

              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition duration-500" />
            </a>
          </div>

          {/* RIGHT IMAGE (KEEP YOUR CURRENT IMAGE DESIGN) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="relative w-full max-w-4xl group">
              <div className="absolute -inset-10 bg-[#ffef4d]/10 blur-[120px] opacity-40 group-hover:opacity-70 transition duration-700" />

              <div className="relative rounded-2xl border border-[#ffef4d]/20 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <div className="flex gap-2 px-4 py-3 border-b border-[#ffef4d]/10 bg-[#1e2030]">
                  <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400"></span>
                </div>

                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="reveal-img object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#26283B]/80 via-transparent to-transparent" />
                </div>
              </div>

              <div className="absolute -bottom-6 right-6 backdrop-blur-md bg-[#26283B]/80 border border-[#ffef4d]/20 px-5 py-3 rounded-lg text-xs uppercase tracking-widest text-[#ffef4d]/80">
                {project.category}
              </div>
            </div>
          </div>
        </div>

        {/* Extra Project Info Section */}
        <div className="grid sm:grid-cols-3 gap-10 pt-20 border-t border-[#ffef4d]/10">
          <InfoBlock title="Role" value="Full Stack Developer" />
          <InfoBlock title="Stack" value="Next.js / React / Tailwind" />
          <InfoBlock title="Year" value="2026" />
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

function InfoBlock({ title, value }) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-widest text-[#ffef4d]/40">
        {title}
      </p>

      <p className="text-lg text-[#ffef4d]/80">{value}</p>
    </div>
  );
}
