"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  Cpu,
  Atom,
  Layers,
  Zap,
  Paintbrush,
  Move,
  Box,
  Github,
} from "lucide-react";

export default function TechStack() {
  const trackRef = useRef(null);

  const techStack = [
    { name: "React", icon: Atom },
    { name: "Next.js", icon: Layers },
    { name: "Vite", icon: Zap },
    { name: "Tailwind", icon: Paintbrush },
    { name: "GSAP", icon: Move },
    { name: "Framer", icon: Box },
    { name: "Node.js", icon: Cpu },
    { name: "Github", icon: Github },
  ];

  useEffect(() => {
    const el = trackRef.current;

    const width = el.scrollWidth / 2;

    gsap.to(el, {
      x: -width,
      duration: 15, // 🔥 adjust speed here
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 mb-10">
        <p className="text-[14px] uppercase tracking-[0.4em] text-yellow-300/40 mb-4">
          Technical Stack
        </p>
        <h3 className="text-3xl sm:text-5xl text-yellow-300/80">
          Current Arsenal
        </h3>
      </div>

      <div className="overflow-hidden py-8">
        <div ref={trackRef} className="flex gap-5 w-max">
          {[...techStack, ...techStack].map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                className="min-w-[120px] h-[120px] flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:border-yellow-300"
              >
                <Icon size={32} className="text-yellow-300/60" />
                <span className="text-xs mt-2 text-white/70 tracking-wide">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}