"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }

        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[200] bg-[#26283B] flex flex-col items-center justify-center"
    >
      <div className="relative overflow-hidden h-24 flex items-center">
        <motion.span
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="text-8xl font-medium text-[#ffef4d] tracking-tighter"
        >
          {Math.min(count, 100)}%
        </motion.span>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="w-48 h-[1px] bg-[#ffef4d]/10 relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#ffef4d]"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(count, 100)}%` }}
          />
        </div>

        <p className="text-[10px] uppercase tracking-[0.5em] text-[#ffef4d]/40 font-medium">
          Initializing Creative Space
        </p>
      </div>
    </motion.div>
  );
}