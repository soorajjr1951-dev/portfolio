"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="support" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* Left Side */}
        <div className="space-y-10">
          <div className="space-y-6">

            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              Our Most Asked Questions
            </h2>

            <p className="text-lg text-white/40 leading-relaxed">
              Find answers to the most common queries about our simulation
              programs and payouts.
            </p>

          </div>

          <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-violet-500 hover:text-white transition-all">
            View All FAQ
          </button>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden border border-white/5 backdrop-blur-sm"
            >

              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >

                <span className="font-bold tracking-tight">
                  {faq.question}
                </span>

                {openIndex === idx ? (
                  <Minus size={18} className="text-violet-400" />
                ) : (
                  <Plus size={18} className="text-white/20" />
                )}

              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx
                    ? "max-h-40 opacity-100 p-8 pt-0"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >

                <p className="text-sm text-white/40 leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}