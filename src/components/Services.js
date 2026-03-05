"use client";

import { useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import { SERVICES } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".benefit-card", {
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how" className="py-32 px-6">
      <div ref={containerRef} className="max-w-7xl mx-auto space-y-24">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

          <div className="space-y-6">

            <span className="px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-[9px] uppercase tracking-[0.3em] text-violet-400">
              Our Benefits
            </span>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
              Why choose <br /> VOYAGER Futures
            </h2>

          </div>

          <div className="max-w-md">
            <p className="text-lg text-white/40 leading-relaxed">
              Unlock your potential with a system built without limitations.
              Request payouts and access resources whenever you want on MT4
              or MT5.
            </p>
          </div>

        </div>

        {/* Cards */}
        <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {SERVICES.map((service) => {
            const IconComponent = Icons[service.icon] || Icons.Circle;

            return (
              <ServiceCard
                key={service.id}
                service={service}
                IconComponent={IconComponent}
              />
            );
          })}

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, IconComponent }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const move = (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        x: x * 0.05,
        y: y * 0.05,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    card.addEventListener("mousemove", move);
    card.addEventListener("mouseleave", leave);

    return () => {
      card.removeEventListener("mousemove", move);
      card.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="benefit-card group p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:border-violet-500/40 will-change-transform"
    >
      <div className="space-y-8">

        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500">
          <IconComponent size={24} />
        </div>

        <h4 className="text-xl font-bold leading-tight">
          {service.title}
        </h4>

        <p className="text-sm text-white/40 leading-relaxed">
          {service.description}
        </p>

      </div>

      <div className="pt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-violet-400">
          Learn More
        </span>

        <Icons.ArrowRight size={12} className="text-violet-400" />
      </div>
    </div>
  );
}