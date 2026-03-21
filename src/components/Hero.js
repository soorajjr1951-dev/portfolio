"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Linkedin,
  Instagram,
  ArrowDown,
  Cpu,
  Atom,
  Layers,
  Zap,
  Paintbrush,
  Move,
  Box,
  Github,
} from "lucide-react";

export default function Hero() {

  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("visible");
    }, 2800);

    return () => clearTimeout(timer);
  }, [controls]);

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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const techContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.8,
      },
    },
  };

  const techItem = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate={controls}
      className="relative min-h-screen flex flex-col px-6 md:px-12 pb-32 overflow-hidden bg-[#26283B]"
    >

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#ffef4d]/[0.03] blur-[120px]"
        />

        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 100, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#ffef4d]/[0.02] blur-[100px]"
        />
      </div>

      {/* Social Icons */}
      <motion.div
        variants={item}
        className="absolute left-4 md:left-8 top-0 bottom-0 flex items-center z-20"
      >
        <div className="sticky top-1/2 -translate-y-1/2 flex flex-col gap-5 bg-[#ffef4d]/5 backdrop-blur-md border border-[#ffef4d]/20 rounded-full px-3 py-4 text-[#ffef4d]/60">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffef4d] hover:scale-110 transition-all"
          >
            <Linkedin size={18} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/YOUR-INSTAGRAM"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffef4d] hover:scale-110 transition-all"
          >
            <Instagram size={18} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/YOUR-GITHUB"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffef4d] hover:scale-110 transition-all"
          >
            <Github size={18} />
          </a>

        </div>
      </motion.div>

      {/* HERO */}
      <div className="min-h-screen flex flex-col items-center justify-center relative">

        <motion.h1
          variants={item}
          className="text-[20vw] sm:text-[15vw] md:text-[12rem] font-medium tracking-tight leading-none text-[#ffef4d]"
        >
          Sooraj
        </motion.h1>

        <motion.div
          variants={item}
          className="flex flex-col items-center gap-6 mt-6"
        >
          <div className="w-16 h-px bg-[#ffef4d]/30" />

          <p className="text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.4em] text-[#ffef4d]/60 text-center">
            Website Developer & Engineer
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="absolute bottom-25 left-1/2 -translate-x-1/2 animate-bounce text-[#ffef4d]/40"
        >
          <ArrowDown size={20} />
        </motion.div>

      </div>

      {/* TECH STACK */}
      <div className="max-w-7xl mx-auto w-full pt-20">

        <motion.div
          variants={item}
          className="border-t border-[#ffef4d]/20 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12"
        >

          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#ffef4d]/40 mb-4">
              Technical Stack
            </p>

            <h3 className="text-2xl sm:text-3xl text-[#ffef4d]/80">
              Current Arsenal
            </h3>
          </div>

          <motion.div
            variants={techContainer}
            className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8"
          >

            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                variants={techItem}
                className="group flex flex-col gap-4 p-4 border border-[#ffef4d]/10 hover:border-[#ffef4d]/30 hover:bg-[#ffef4d]/5 transition-all rounded-sm"
              >

                <tech.icon
                  size={22}
                  className="text-[#ffef4d]/30 group-hover:text-[#ffef4d] group-hover:scale-110 transition-all duration-500"
                />

                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#ffef4d]/40 group-hover:text-[#ffef4d]">
                  {tech.name}
                </span>

              </motion.div>
            ))}

          </motion.div>

        </motion.div>

      </div>

    </motion.section>
  );
}