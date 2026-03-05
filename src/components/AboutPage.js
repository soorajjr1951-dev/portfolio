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
          <div className="lg:col-span-7 space-y-20">
            <h1 className="reveal-el text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-none text-[#ffef4d]">
              The <br />
              <span className="text-[#ffef4d]/50">Engine.</span>
            </h1>

            <div className="reveal-el space-y-8 text-2xl md:text-3xl text-[#ffef4d]/40 leading-relaxed font-light">
              <p>
                I am a specialized systems engineer and interface architect with
                a focus on building high-concurrency environments and
                high-fidelity user experiences.
              </p>

              <p className="text-[#ffef4d]">
                My work exists at the intersection of absolute logic and
                creative intuition.
              </p>
            </div>

            <div className="reveal-el grid grid-cols-1 md:grid-cols-2 gap-px bg-[#ffef4d]/10 border border-[#ffef4d]/10">
              {[
                { icon: Globe, label: "Deployment", val: "Global.v6" },
                { icon: Cpu, label: "Kernel", val: "TypeScript" },
                { icon: Database, label: "Storage", val: "Vortex.db" },
                { icon: Code, label: "Pattern", val: "Modular" },
              ].map((stat, i) => (
                <div key={i} className="p-10 bg-[#26283B] space-y-4">
                  <stat.icon className="text-[#ffef4d]" size={20} />

                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-[#ffef4d]/20">
                      {stat.label}
                    </p>

                    <p className="text-xl font-bold uppercase tracking-tighter text-[#ffef4d]">
                      {stat.val}
                    </p>
                  </div>
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
