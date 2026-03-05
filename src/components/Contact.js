"use client";

export default function Contact() {
  return (
    <section className="relative min-h-screen py-48 px-12 flex items-center overflow-hidden bg-[#26283B]">
      
      {/* Section Number */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 select-none">
        <span className="text-[2rem] font-light italic text-[#ffef4d]/10">
          03
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">

        {/* Left Content */}
        <div className="space-y-16">

          <h2 className="text-6xl font-medium text-[#ffef4d]">
            Get in Touch
          </h2>

          <div className="space-y-8 max-w-md">
            <p className="text-lg text-[#ffef4d]/60 leading-relaxed font-light italic">
              Available for website development and technical consultation.
              Building custom web solutions that drive results.
            </p>

            <div className="w-12 h-px bg-[#ffef4d]/30"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-10">

            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#ffef4d]/30">
                Location
              </p>

              <p className="text-sm tracking-wide text-[#ffef4d]">
                Remote / Global
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#ffef4d]/30">
                Availability
              </p>

              <p className="text-sm tracking-wide text-[#ffef4d]">
                Open for Projects
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#ffef4d]/30">
                Email
              </p>

              <p className="text-sm tracking-wide text-[#ffef4d]">
                hello@sooraj.dev
              </p>
            </div>

          </div>
        </div>

        {/* Form */}
        <div className="bg-[#26283B]/50 p-16 border border-[#ffef4d]/20 relative group backdrop-blur-sm">

          <div className="absolute inset-0 border border-[#ffef4d]/10 scale-[1.02] -z-10 group-hover:scale-100 transition-transform duration-700"></div>

          <h3 className="text-2xl uppercase tracking-[0.1em] mb-16 text-[#ffef4d]/80">
            Send a Message
          </h3>

          <form
            className="space-y-10"
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="space-y-2 group">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#ffef4d]/40 group-focus-within:text-[#ffef4d]">
                Your Name
              </p>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-b border-[#ffef4d]/20 bg-transparent py-2 text-[#ffef4d] outline-none focus:border-[#ffef4d]"
              />
            </div>

            <div className="space-y-2 group">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#ffef4d]/40 group-focus-within:text-[#ffef4d]">
                Email
              </p>

              <input
                type="email"
                placeholder="Email@domain.com"
                className="w-full border-b border-[#ffef4d]/20 bg-transparent py-2 text-[#ffef4d] outline-none focus:border-[#ffef4d]"
              />
            </div>

            <div className="space-y-2 group">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#ffef4d]/40 group-focus-within:text-[#ffef4d]">
                Message
              </p>

              <textarea
                placeholder="How can I help you?"
                className="w-full border-b border-[#ffef4d]/20 bg-transparent py-2 text-[#ffef4d] outline-none focus:border-[#ffef4d] min-h-[120px] resize-none"
              />
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className="w-full border border-[#ffef4d] py-3 text-[#ffef4d] hover:bg-[#ffef4d] hover:text-[#26283B] transition-all duration-300"
              >
                Send Message →
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}