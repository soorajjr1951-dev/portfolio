"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, Cpu, Globe, Database, Code } from "lucide-react";
import gsap from "gsap";

export default function AboutPage({ onBack }) {
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

        <button
          onClick={onBack}
          className="reveal-el mb-20 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#ffef4d]/30 hover:text-[#ffef4d] transition-all"
        >
          <ArrowLeft size={16} />
          RETURN_TO_HOME
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-20">

            <h1 className="reveal-el text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-none text-[#ffef4d]">
              The <br />
              <span className="text-[#ffef4d]/50">Engine.</span>
            </h1>

            <div className="reveal-el space-y-8 text-2xl md:text-3xl text-[#ffef4d]/40 leading-relaxed font-light">
              <p>
                I am a specialized systems engineer and interface architect
                with a focus on building high-concurrency environments and
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

            <div className="reveal-el relative aspect-[3/4] border border-[#ffef4d]/5 overflow-hidden group">

              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                alt="Workspace"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#ffef4d]/20 to-transparent mix-blend-overlay" />

              <div className="absolute bottom-8 left-8 p-4 text-[10px] bg-[#26283B]/80 border border-[#ffef4d]/30 text-[#ffef4d]">
                DEV_MODE // ACTIVE
              </div>

            </div>

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