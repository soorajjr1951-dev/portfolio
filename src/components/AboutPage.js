"use client";

import { useEffect, useRef } from "react";
import { Cpu, Globe, Database, Code } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      gsap.from(".reveal-el", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".bg-word", {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative pt-28 md:pt-40 pb-20 md:pb-24 px-6 md:px-10 lg:px-16 min-h-screen bg-[#26283B] overflow-x-hidden"
    >

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-[#ffef4d]/5 blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-16 md:space-y-24 relative min-w-0">

            {/* Background Word */}
            <div className="bg-word absolute -top-10 md:-top-20 left-0 text-[6rem] md:text-[10rem] lg:text-[12rem] font-black text-[#ffef4d]/5 select-none pointer-events-none hidden sm:block">
              ENGINE
            </div>

            {/* TITLE */}
            <h1 className="reveal-el text-5xl sm:text-6xl md:text-[7rem] lg:text-[9rem] font-black uppercase tracking-tighter leading-none text-[#ffef4d] relative z-10 break-words">
              The <br />
              <span className="text-[#ffef4d]/50">Engine.</span>
            </h1>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 space-y-10 md:space-y-12 lg:sticky lg:top-40 lg:pr-4 min-w-0 max-w-full">

            <div className="reveal-el space-y-6 md:space-y-8 border-l-2 border-[#ffef4d] pl-6 md:pl-12 py-4 max-w-full">

              <h4 className="text-[10px] uppercase tracking-widest text-[#ffef4d]">
                Manifesto_
              </h4>

              <p className="text-[#ffef4d]/50 text-xs sm:text-sm md:text-base leading-relaxed break-words">
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