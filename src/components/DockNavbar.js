"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { User, Layers, Mail, CreditCard, Info } from "lucide-react";

export default function DockNavbar({ activeSection, setActiveSection }) {
  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: Info },
    { id: "works", label: "Websites", icon: Layers },
    // { id: "pricing", label: "Services", icon: CreditCard },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    // consistently set the active section based on which section's
    // midpoint is closest to the viewport midpoint. this strategy is
    // direction-agnostic and eliminates arbitrary thresholds.
    const sections = ["home", "about", "works", "contact"];
    let ticking = false;

    const computeActive = () => {
      const mid = window.innerHeight / 2;
      let bestId = null;
      let bestDist = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const sectionMid = rect.top + rect.height / 2;
        const dist = Math.abs(sectionMid - mid);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = id;
        }
      });

      if (bestId) {
        setActiveSection(bestId);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(computeActive);
      }
    };

    window.addEventListener("scroll", onScroll);
    computeActive(); // initial

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setActiveSection]);

  const scrollToSection = (e, id) => {
    e.preventDefault();

    // immediately update activeSection so the bubble highlights right away
    setActiveSection(id);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed bottom-0 md:bottom-8 left-0 right-0 md:left-1/2 md:-translate-x-1/2 z-50 flex justify-center px-4 md:px-0">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full md:w-[360px] bg-[#1a1b2b] h-[64px] md:rounded-3xl rounded-t-3xl flex items-center relative border-t md:border border-[#ffef4d]/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="w-full flex items-center justify-around relative z-10 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="flex-1 h-full flex flex-col items-center justify-center relative"
              >
                {/* Active Bubble */}
                <motion.div
                  animate={{
                    y: isActive ? -28 : 0,
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className={`w-[48px] h-[48px] flex items-center justify-center rounded-full transition-colors
                                ${
                                  isActive
                                    ? "bg-[#ffef4d] text-[#26283B] shadow-[0_8px_20px_rgba(255,239,77,0.4)]"
                                    : "text-[#ffef4d]/40"
                                }`}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </motion.div>

                {/* Label */}
                <motion.span
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? -6 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute -bottom-1 text-[9px] font-bold uppercase tracking-widest text-[#ffef4d]"
                >
                  {item.label}
                </motion.span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
