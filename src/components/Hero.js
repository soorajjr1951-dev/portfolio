"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Instagram,
  ArrowDown,
  Code,
  Database,
  Layout,
  Cpu,
  Atom,
  Layers,
  Zap,
  Paintbrush,
  Move,
  Box,
  Database as DbIcon,
  Terminal,
  HardDrive,
  Activity,
  Package,
  Cloud,
  Github,
} from "lucide-react";

export default function Hero() {
  const techStack = [
    { name: "React", icon: Atom },
    { name: "Next.js", icon: Layers },
    { name: "Vite", icon: Zap },
    { name: "Tailwind", icon: Paintbrush },
    { name: "GSAP", icon: Move },
    { name: "Framer", icon: Box },
    { name: "Zustand", icon: DbIcon },
    { name: "Node.js", icon: Cpu },
    { name: "Go", icon: Terminal },
    { name: "PostgreSQL", icon: HardDrive },
    { name: "Redis", icon: Activity },
    { name: "Docker", icon: Package },
    { name: "AWS", icon: Cloud },
    { name: "Github", icon: Github },
  ];

  return (
    <section className="relative min-h-screen flex flex-col px-12 pb-32 overflow-hidden bg-[#26283B]">

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

      {/* Social icons */}
      <div className="absolute left-12 bottom-20 hidden lg:flex flex-col gap-6 text-[#ffef4d]/40 z-20">
        <a className="hover:text-[#ffef4d] transition-colors" href="#"><Linkedin size={14} /></a>
        <a className="hover:text-[#ffef4d] transition-colors" href="#"><Twitter size={14} /></a>
        <a className="hover:text-[#ffef4d] transition-colors" href="#"><Instagram size={14} /></a>
      </div>

      {/* Hero */}
      <div className="min-h-screen flex flex-col items-center justify-center relative">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center space-y-8 max-w-4xl relative z-10"
        >

          {/* Blinking Dot */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-4 text-[11px] font-medium uppercase tracking-[0.6em] text-[#ffef4d]/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffef4d] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffef4d]"></span>
            </span>

            Open for Collaboration
          </motion.div>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-[15vw] md:text-[12rem] font-medium tracking-tight leading-none text-[#ffef4d]"
          >
            Sooraj
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-16 h-px bg-[#ffef4d]/30" />

            <p className="text-[13px] font-medium uppercase tracking-[0.5em] text-[#ffef4d]/60">
              Website Developer & Engineer
            </p>
          </motion.div>

        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40 text-[#ffef4d]">
          <ArrowDown size={20} />
        </div>

      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#ffef4d]/20 border border-[#ffef4d]/20 mb-40">
        {[
          { icon: Layout, label: "Frontend", val: "Design Systems" },
          { icon: Database, label: "Backend", val: "Architecture" },
          { icon: Cpu, label: "Experience", val: "User Flow" },
          { icon: Code, label: "Stack", val: "Modern Web" },
        ].map((stat, i) => (
          <div key={i} className="p-12 bg-[#26283B] space-y-6 hover:bg-[#26283B]/80 transition-all group">
            <stat.icon className="text-[#ffef4d]/40 group-hover:text-[#ffef4d] transition-colors" size={20} />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#ffef4d]/40 mb-1">
                {stat.label}
              </p>
              <p className="text-xl text-[#ffef4d]">
                {stat.val}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="max-w-7xl mx-auto w-full pt-20">
        <div className="border-t border-[#ffef4d]/20 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#ffef4d]/40 mb-4">
              Technical Stack
            </p>

            <h3 className="text-3xl text-[#ffef4d]/80">
              Current Arsenal
            </h3>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {techStack.map((tech, i) => (
              <div key={i} className="group flex flex-col gap-4 p-4 border border-[#ffef4d]/10 hover:border-[#ffef4d]/30 hover:bg-[#ffef4d]/5 transition-all rounded-sm">
                <tech.icon size={22} className="text-[#ffef4d]/30 group-hover:text-[#ffef4d] group-hover:scale-110 transition-all duration-500" />
                <span className="text-[11px] uppercase tracking-widest text-[#ffef4d]/40 group-hover:text-[#ffef4d]">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}