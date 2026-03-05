"use client";

import { useImperativeHandle, forwardRef, useRef } from "react";
import gsap from "gsap";

const TransitionOverlay = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const row1Blocks = useRef([]);
  const row2Blocks = useRef([]);

  useImperativeHandle(ref, () => ({
    play: () =>
      new Promise((resolve) => {
        const blocks = [...row1Blocks.current, ...row2Blocks.current];

        gsap.set(containerRef.current, { pointerEvents: "all" });
        gsap.set(blocks, { visibility: "visible", scaleY: 0 });

        gsap.to(blocks, {
          scaleY: 1,
          duration: 0.8,
          stagger: { each: 0.08, grid: [2, 5], axis: "x" },
          ease: "power4.inOut",
          onComplete: resolve,
        });
      }),

    reveal: () =>
      new Promise((resolve) => {
        const blocks = [...row1Blocks.current, ...row2Blocks.current];

        gsap.to(blocks, {
          scaleY: 0,
          duration: 0.8,
          stagger: { each: 0.08, grid: [2, 5], axis: "x" },
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(containerRef.current, { pointerEvents: "none" });
            gsap.set(blocks, { visibility: "hidden" });
            resolve();
          },
        });
      }),
  }));

  const blockStyle = {
    transform: "scaleY(0)",
    visibility: "hidden",
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex flex-col z-[999] pointer-events-none"
    >
      <div className="flex-1 flex">
        {[...Array(5)].map((_, i) => (
          <div
            key={`r1-${i}`}
            ref={(el) => (row1Blocks.current[i] = el)}
            style={blockStyle}
            className="flex-1 bg-[#ffef4d] origin-top"
          />
        ))}
      </div>

      <div className="flex-1 flex">
        {[...Array(5)].map((_, i) => (
          <div
            key={`r2-${i}`}
            ref={(el) => (row2Blocks.current[i] = el)}
            style={blockStyle}
            className="flex-1 bg-[#ffef4d] origin-bottom"
          />
        ))}
      </div>
    </div>
  );
});

export default TransitionOverlay;