import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function fadeReveal(container) {
  if (!container) return;

  const ctx = gsap.context(() => {

    const elements = gsap.utils.toArray(".fade-reveal");

    elements.forEach((el) => {

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

    });

  }, container);

  return () => ctx.revert();
}