"use client";

import { useEffect, useRef } from "react";
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

  /* keeps track of programmatic scroll target */
  const targetSectionRef = useRef(null);

  useEffect(() => {
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

      if (!bestId) return;

      /* prevents flicker during smooth scroll */
      if (targetSectionRef.current && bestId !== targetSectionRef.current) {
        ticking = false;
        return;
      }

      setActiveSection(bestId);

      /* unlock when target reached */
      if (bestId === targetSectionRef.current) {
        targetSectionRef.current = null;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(computeActive);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    computeActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setActiveSection]);

  const scrollToSection = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (!element) return;

    /* set target section */
    targetSectionRef.current = id;

    setActiveSection(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="fixed bottom-0 md:bottom-8 left-0 right-0 md:left-1/2 md:-translate-x-1/2 z-50 flex justify-center px-4 md:px-0">

      {/* OPTIONAL dock glow */}
      <div className="absolute w-[420px] h-[120px] bg-[#ffef4d]/5 blur-[80px] rounded-full pointer-events-none hidden md:block" />

      <nav
        aria-label="Main Navigation"
        className="
          w-full md:w-[360px]
          bg-[#1a1b2b]/90
          h-[64px]
          md:rounded-3xl
          rounded-t-3xl
          flex items-center
          relative
          border-t md:border
          border-[#ffef4d]/10
          shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          backdrop-blur-lg
        "
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
                className="flex-1 h-full flex flex-col items-center justify-center relative group cursor-pointer"
              >
                {/* Active Bubble */}
                <motion.div
                  animate={{
                    y: isActive ? -26 : 0,
                    scale: isActive ? 1.08 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 0.4,
                  }}
                  className={`
                    w-[46px] h-[46px]
                    flex items-center justify-center
                    rounded-full
                    transition-colors duration-150
                    ${
                      isActive
                        ? "bg-[#ffef4d] text-[#26283B] shadow-[0_8px_20px_rgba(255,239,77,0.35)]"
                        : "text-[#ffef4d]/40 group-hover:text-[#ffef4d]"
                    }
                  `}
                >
                  <Icon size={21} strokeWidth={1.5} />
                </motion.div>

                {/* Label */}
                <motion.span
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? -5 : 0,
                  }}
                  transition={{ duration: 0.15 }}
                  className="absolute -bottom-1 text-[9px] font-bold uppercase tracking-widest text-[#ffef4d]"
                >
                  {item.label}
                </motion.span>

                {/* OPTIONAL hover indicator */}
                <div className="absolute bottom-0 w-1 h-1 rounded-full bg-[#ffef4d] opacity-0 group-hover:opacity-60 transition-opacity duration-150" />
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}