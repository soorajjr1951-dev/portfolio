"use client";

import { createContext, useContext, useRef } from "react";
import TransitionOverlay from "@/components/TransitionOverlay";

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
  const overlayRef = useRef(null);

  const play = async () => {
    if (overlayRef.current) {
      await overlayRef.current.play();
    }
  };

  const reveal = async () => {
    if (overlayRef.current) {
      await overlayRef.current.reveal();
    }
  };

  return (
    <TransitionContext.Provider value={{ play, reveal }}>
      <TransitionOverlay ref={overlayRef} />
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}