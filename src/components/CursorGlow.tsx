"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 25, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 25, mass: 0.5 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const onLeave = () => {
      mouseX.set(-300);
      mouseY.set(-300);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Primary Purple Glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[1] h-[420px] w-[420px] rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, hsla(255, 83%, 61%, 0.14) 0%, transparent 72%)",
          filter: "blur(55px)",
        }}
      />

      {/* Subtle White Sparkle */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[1] h-2 w-2 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background: "#fff",
          boxShadow: "0 0 14px 1px #fff, 0 0 28px 3px hsla(255, 83%, 61%, 0.45)",
          opacity: 0.3,
        }}
      />
    </>
  );
}

