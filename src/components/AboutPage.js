"use client";

import { useEffect, useRef } from "react";
import { Cpu, Globe, Database, Code } from "lucide-react";
import gsap from "gsap";

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-el", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative pt-28 md:pt-40 pb-20 md:pb-24 px-6 md:px-10 lg:px-16 min-h-screen bg-[#26283B]"
    >
      {/* OPTIONAL: ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-[#ffef4d]/5 blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-16 md:space-y-24 relative">
            {/* OPTIONAL: background word (hidden on small screens to prevent overflow) */}
            <div className="absolute -top-10 md:-top-20 left-0 text-[6rem] md:text-[10rem] lg:text-[12rem] font-black text-[#ffef4d]/5 select-none pointer-events-none hidden sm:block">
              ENGINE
            </div>

            {/* TITLE */}
            <h1 className="reveal-el text-5xl sm:text-6xl md:text-[7rem] lg:text-[9rem] font-black uppercase tracking-tighter leading-none text-[#ffef4d] relative z-10">
              The <br />
              <span className="text-[#ffef4d]/50">Engine.</span>
            </h1>

            {/* ABOUT TEXT */}
            <div className="reveal-el space-y-8 md:space-y-10 text-lg sm:text-xl md:text-2xl text-[#ffef4d]/40 leading-relaxed font-light max-w-2xl">
              <p>
                I design and engineer digital systems that balance
                <span className="text-[#ffef4d]"> performance</span>,
                <span className="text-[#ffef4d]"> scalability</span>, and
                <span className="text-[#ffef4d]"> experience</span>.
              </p>

              <p>
                My work focuses on building structured architectures where
                design and engineering merge into one cohesive system.
              </p>
            </div>

            {/* STATS GRID */}
            <div className="reveal-el grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {[
                { icon: Globe, label: "Deployment", val: "Global.v6" },
                { icon: Cpu, label: "Kernel", val: "TypeScript" },
                { icon: Database, label: "Storage", val: "Vortex.db" },
                { icon: Code, label: "Pattern", val: "Modular" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group relative p-6 sm:p-8 md:p-10 border border-[#ffef4d]/10 bg-[#26283B] hover:border-[#ffef4d]/40 transition duration-500 overflow-hidden"
                >
                  {/* OPTIONAL hover glow */}
                  <div className="absolute inset-0 bg-[#ffef4d]/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <stat.icon
                    className="text-[#ffef4d] mb-4 md:mb-6"
                    size={22}
                  />

                  <p className="text-[9px] uppercase tracking-widest text-[#ffef4d]/30">
                    {stat.label}
                  </p>

                  <p className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-[#ffef4d]">
                    {stat.val}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 space-y-10 md:space-y-12 lg:sticky lg:top-40">
            {/* NOTE: sticky disabled on small screens for better UX */}
            <div className="reveal-el space-y-6 md:space-y-8 border-l-2 border-[#ffef4d] pl-6 md:pl-12 py-4">
              <h4 className="text-[10px] uppercase tracking-widest text-[#ffef4d]">
                Manifesto_
              </h4>

              <p className="text-[#ffef4d]/50 text-sm md:text-base leading-relaxed max-w-md">
                "Performance is not a feature; it is a foundation. Code should
                be as readable as literature and as efficient as physics."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
