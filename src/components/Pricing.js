import { ArrowRight, Shield, Zap, Box } from "lucide-react";
import { PLANS } from "@/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-48 bg-[#26283B] overflow-hidden">

      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#ffef4d]/[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">

          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.6em] text-[#ffef4d]/40">
              Services
            </p>

            <h2 className="text-7xl md:text-[10rem] font-medium leading-none text-[#ffef4d]">
              Service
              <br />
              Plans
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-base text-[#ffef4d]/60 leading-relaxed font-light italic tracking-wide">
              Tailored solutions designed for impact and technical excellence.
            </p>
          </div>

        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ffef4d]/20 border border-[#ffef4d]/20">

          {PLANS.map((plan, idx) => (

            <div
              key={plan.id}
              className={`group relative p-12 bg-[#26283B] hover:bg-[#26283B]/90 transition-all duration-700 flex flex-col justify-between min-h-[600px] ${
                plan.isPopular ? "border-2 border-[#ffef4d]/30" : ""
              }`}
            >

              {/* Popular Tag */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#ffef4d]/60 px-3 py-1 border border-[#ffef4d]/30">
                    Recommended
                  </span>
                </div>
              )}

              <div className="space-y-12">

                {/* Title */}
                <div className="space-y-4">

                  <div className="flex items-center gap-3">

                    {idx === 0 && <Box size={16} className="text-[#ffef4d]/40" />}
                    {idx === 1 && <Zap size={16} className="text-[#ffef4d]/60" />}
                    {idx === 2 && <Shield size={16} className="text-[#ffef4d]/80" />}

                    <h3 className="text-3xl font-medium text-[#ffef4d]">
                      {plan.name}
                    </h3>

                  </div>

                  <p className="text-base text-[#ffef4d]/50 italic leading-relaxed">
                    {plan.description}
                  </p>

                </div>

                {/* Price */}
                <div className="space-y-2">

                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#ffef4d]/20">
                    Investment
                  </span>

                  <div className="text-5xl font-medium text-[#ffef4d]">
                    {plan.price}
                  </div>

                </div>

                {/* Features */}
                <div className="space-y-4 border-t border-[#ffef4d]/10 pt-10">

                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center group/feature"
                    >

                      <span className="text-[11px] uppercase tracking-widest text-[#ffef4d]/40 group-hover/feature:text-[#ffef4d] transition-colors">
                        {feature.label}
                      </span>

                      <span className="text-xs text-[#ffef4d]/60">
                        {feature.value}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* Button */}
              <div className="pt-16">

                <a
                  href="#contact"
                  className={`w-full py-5 text-[11px] uppercase tracking-[0.4em] flex items-center justify-center gap-3 transition-all duration-500 ${
                    plan.isPopular
                      ? "bg-[#ffef4d] text-[#26283B] hover:opacity-90"
                      : "border border-[#ffef4d]/20 text-[#ffef4d]/60 hover:text-[#ffef4d] hover:border-[#ffef4d]/50"
                  }`}
                >
                  Get Started <ArrowRight size={14} />
                </a>

              </div>

              {/* Decorative ID */}
              <div className="absolute bottom-6 left-12 text-[10px] text-[#ffef4d]/10 pointer-events-none">
                Service 0{idx + 1}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}