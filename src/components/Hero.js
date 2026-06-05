"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Linkedin, Instagram, ArrowDown, Github } from "lucide-react";

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("visible");
    }, 2500);

    return () => clearTimeout(timer);
  }, [controls]);

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

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate={controls}
      className="relative min-h-screen flex flex-col px-6 md:px-12 pb-3 overflow-hidden bg-[#26283B]"
    >
      {/* Background */}
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
        className="absolute bottom-60 left-1/2 -translate-x-1/2 z-20 md:left-4 md:top-0 md:bottom-0 md:translate-x-0 md:flex md:items-center"
      >
        <div className="flex flex-row md:flex-col items-center gap-5 bg-[#ffef4d]/5 backdrop-blur-md border border-[#ffef4d]/20 rounded-full px-4 py-3 md:px-3 md:py-4 text-[#ffef4d]/60">
          <a
            href="#"
            className="hover:text-[#ffef4d] hover:scale-110 transition"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="#"
            className="hover:text-[#ffef4d] hover:scale-110 transition"
          >
            <Instagram size={18} />
          </a>

          <a
            href="#"
            className="hover:text-[#ffef4d] hover:scale-110 transition"
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
    </motion.section>
  );
}
