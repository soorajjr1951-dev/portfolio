"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
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

  return (
    <section className="relative min-h-screen flex flex-col px-6 md:px-12 pb-32 overflow-hidden bg-[#26283B]">
      
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

      {/* Social Icons - Sticky Left */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 flex items-center z-20">
        <div className="sticky top-1/2 -translate-y-1/2 flex flex-col gap-5 bg-[#ffef4d]/5 backdrop-blur-md border border-[#ffef4d]/20 rounded-full px-3 py-4 text-[#ffef4d]/60">
          
          <a
            className="hover:text-[#ffef4d] hover:scale-110 transition-all"
            href="#"
          >
            <Linkedin size={18} />
          </a>

          <a
            className="hover:text-[#ffef4d] hover:scale-110 transition-all"
            href="#"
          >
            <Twitter size={18} />
          </a>

          <a
            className="hover:text-[#ffef4d] hover:scale-110 transition-all"
            href="#"
          >
            <Instagram size={18} />
          </a>

          <a
            className="hover:text-[#ffef4d] hover:scale-110 transition-all"
            href="#"
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className="min-h-screen flex flex-col items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center space-y-8 max-w-4xl relative z-10"
        >
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-[20vw] sm:text-[15vw] md:text-[12rem] font-medium tracking-tight leading-none text-[#ffef4d]"
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

            <p className="text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.4em] text-[#ffef4d]/60 text-center">
              Website Developer & Engineer
            </p>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-25 left-1/2 -translate-x-1/2 animate-bounce opacity-40 text-[#ffef4d]">
          <ArrowDown size={20} />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-7xl mx-auto w-full pt-20">
        <div className="border-t border-[#ffef4d]/20 pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#ffef4d]/40 mb-4">
              Technical Stack
            </p>

            <h3 className="text-2xl sm:text-3xl text-[#ffef4d]/80">
              Current Arsenal
            </h3>
          </div>

          <motion.div
            className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  repeat: Infinity,
                  repeatDelay: 1,
                },
              },
            }}
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
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

        </div>
      </div>
    </section>
  );
}