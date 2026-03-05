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
      className="pt-40 pb-24 px-6 min-h-screen bg-[#26283B]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-24 relative">
            {/* subtle background text */}
            <div className="absolute -top-20 left-0 text-[12rem] font-black text-[#ffef4d]/5 select-none pointer-events-none">
              ENGINE
            </div>

            {/* TITLE */}
            <h1 className="reveal-el text-6xl md:text-[9rem] font-black uppercase tracking-tighter leading-none text-[#ffef4d] relative z-10">
              The <br />
              <span className="text-[#ffef4d]/50">Engine.</span>
            </h1>

            {/* ABOUT TEXT */}
            <div className="reveal-el space-y-10 text-xl md:text-2xl text-[#ffef4d]/40 leading-relaxed font-light max-w-2xl">
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
            <div className="reveal-el grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Globe, label: "Deployment", val: "Global.v6" },
                { icon: Cpu, label: "Kernel", val: "TypeScript" },
                { icon: Database, label: "Storage", val: "Vortex.db" },
                { icon: Code, label: "Pattern", val: "Modular" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group relative p-10 border border-[#ffef4d]/10 bg-[#26283B] hover:border-[#ffef4d]/40 transition duration-500 overflow-hidden"
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 bg-[#ffef4d]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <stat.icon className="text-[#ffef4d] mb-6" size={24} />

                  <p className="text-[9px] uppercase tracking-widest text-[#ffef4d]/30">
                    {stat.label}
                  </p>

                  <p className="text-2xl font-bold uppercase tracking-tight text-[#ffef4d]">
                    {stat.val}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 space-y-12 sticky top-40">
            <div className="reveal-el space-y-8 border-l-2 border-[#ffef4d] pl-12 py-4">
              <h4 className="text-[10px] uppercase tracking-widest text-[#ffef4d]">
                Manifesto_
              </h4>

              <p className="text-[#ffef4d]/50 text-sm leading-relaxed">
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
