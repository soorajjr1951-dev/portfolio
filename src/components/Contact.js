"use client";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const message = e.target.elements[2].value;

    const whatsappNumber = "7306087506";
    const text = `I am ${name}\n${message} this is my email ${email}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen py-48 px-6 md:px-12 flex items-center overflow-hidden bg-[#26283B]">

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-[#ffef4d]/5 blur-[200px] pointer-events-none"></div>

      {/* Section Number */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 select-none hidden lg:block">
        <span className="text-[2rem] font-light italic text-[#ffef4d]/10">
          03
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-16">

          <h2 className="text-5xl md:text-6xl font-medium text-[#ffef4d]">
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

        {/* FORM */}
        <div className="bg-[#26283B]/50 p-10 md:p-16 border border-[#ffef4d]/20 relative group backdrop-blur-sm transition-all duration-500 hover:border-[#ffef4d]/40">

          {/* card hover frame */}
          <div className="absolute inset-0 border border-[#ffef4d]/10 scale-[1.02] -z-10 group-hover:scale-[1.01] transition-transform duration-700"></div>

          <h3 className="text-2xl uppercase tracking-[0.1em] mb-14 text-[#ffef4d]/80">
            Send a Message
          </h3>

          <form className="space-y-10" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="space-y-2 group">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#ffef4d]/40 group-focus-within:text-[#ffef4d]">
                Your Name
              </p>

              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full border-b border-[#ffef4d]/20 bg-transparent py-2 text-[#ffef4d] outline-none focus:border-[#ffef4d] focus:shadow-[0_0_10px_rgba(255,239,77,0.2)]"
              />
            </div>

            {/* Email */}
            <div className="space-y-2 group">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#ffef4d]/40 group-focus-within:text-[#ffef4d]">
                Email
              </p>

              <input
                type="email"
                placeholder="Email@domain.com"
                required
                className="w-full border-b border-[#ffef4d]/20 bg-transparent py-2 text-[#ffef4d] outline-none focus:border-[#ffef4d] focus:shadow-[0_0_10px_rgba(255,239,77,0.2)]"
              />
            </div>

            {/* Message */}
            <div className="space-y-2 group">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#ffef4d]/40 group-focus-within:text-[#ffef4d]">
                Message
              </p>

              <textarea
                placeholder="How can I help you?"
                required
                className="w-full border-b border-[#ffef4d]/20 bg-transparent py-2 text-[#ffef4d] outline-none focus:border-[#ffef4d] focus:shadow-[0_0_10px_rgba(255,239,77,0.2)] min-h-[120px] resize-none"
              />
            </div>

            {/* BUTTON */}
            <div className="pt-8">
              <button
                type="submit"
                className="relative w-full border border-[#ffef4d] py-3 text-[#ffef4d] overflow-hidden group transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_40px_rgba(255,239,77,0.2)]"
              >
                {/* hover fill */}
                <span className="absolute inset-0 bg-[#ffef4d] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

                {/* text */}
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#26283B]">
                  Send Message →
                </span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}