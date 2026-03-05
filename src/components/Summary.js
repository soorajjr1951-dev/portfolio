"use client";

import { useEffect } from "react";
import { Figma, Chrome, Cpu, Box, Layout, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Summary() {
  useEffect(() => {
    gsap.fromTo(
      ".progress-fill",
      { width: "0%" },
      {
        width: (i, target) => target.dataset.width + "%",
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".summary-container",
          start: "top 70%",
        },
      }
    );
  }, []);

  const skills = [
    { icon: Figma, name: "Figma" },
    { icon: Layout, name: "Framer" },
    { icon: Chrome, name: "Web Dev" },
    { icon: Cpu, name: "Logic" },
    { icon: Box, name: "Spline" },
    { icon: ShieldCheck, name: "Security" },
  ];

  const languages = [
    { name: "English", width: 95 },
    { name: "Spanish", width: 75 },
    { name: "French", width: 45 },
  ];

  return (
    <div className="summary-container grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* LEFT CARD */}
      <div className="bg-[#26283B] border border-[#ffef4d]/20 rounded-[2rem] p-12 space-y-16 shadow-xl">

        {/* TECH STACK */}
        <div className="space-y-8">
          <p className="text-[#ffef4d] text-xs uppercase tracking-[0.4em]">
            Technology Stack
          </p>

          <div className="grid grid-cols-3 gap-8">
            {skills.map((Skill, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group">

                <div className="w-16 h-16 rounded-2xl bg-[#ffef4d]/10 border border-[#ffef4d]/20 flex items-center justify-center text-[#ffef4d]/60 group-hover:text-[#ffef4d] group-hover:border-[#ffef4d]/50 group-hover:bg-[#ffef4d]/20 transition-all duration-500">

                  <Skill.icon size={28} />

                </div>

                <span className="text-[10px] uppercase tracking-widest text-[#ffef4d]/40 group-hover:text-[#ffef4d] transition-colors">
                  {Skill.name}
                </span>

              </div>
            ))}
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="space-y-8">

          <p className="text-[#ffef4d] text-xs uppercase tracking-[0.4em]">
            Languages
          </p>

          <div className="space-y-6">
            {languages.map((lang, i) => (
              <div key={i} className="space-y-2">

                <div className="flex justify-between text-xs uppercase tracking-widest text-[#ffef4d]/60">
                  <span>{lang.name}</span>
                </div>

                <div className="bg-[#ffef4d]/10 h-[6px] rounded-full overflow-hidden">

                  <div
                    className="progress-fill bg-[#ffef4d] h-full rounded-full"
                    data-width={lang.width}
                    style={{ width: "0%" }}
                  />

                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="bg-[#26283B] border border-[#ffef4d]/20 rounded-[2rem] p-12 space-y-16 shadow-xl">

        <div className="space-y-8">

          <p className="text-[#ffef4d] text-xs uppercase tracking-[0.4em]">
            Education & Certificates
          </p>

          <div className="space-y-12">

            <div className="space-y-3">
              <div className="flex items-center gap-3">

                <div className="w-1.5 h-1.5 rounded-full bg-[#ffef4d]" />

                <h4 className="font-bold text-lg text-[#ffef4d]">
                  Savannah College of Art and Design (SCAD)
                </h4>

              </div>

              <p className="text-sm text-[#ffef4d]/50 pl-4">
                Bachelor of Fine Arts in User Experience Design • 2016
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">

                <div className="w-1.5 h-1.5 rounded-full bg-[#ffef4d]" />

                <h4 className="font-bold text-lg text-[#ffef4d]">
                  Google UX Design Certificate
                </h4>

              </div>

              <p className="text-sm text-[#ffef4d]/50 pl-4">
                Advanced specialized certification • 2022
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">

                <div className="w-1.5 h-1.5 rounded-full bg-[#ffef4d]" />

                <h4 className="font-bold text-lg text-[#ffef4d]">
                  AWS Certified Developer
                </h4>

              </div>

              <p className="text-sm text-[#ffef4d]/50 pl-4">
                Associate Level Cloud Architecture • 2023
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}