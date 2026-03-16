"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.4 });

  const { scrollYProgress } = useScroll();

  // Intensidade muda com o scroll para dar sensacao de interface viva.
  const violetOpacity = useTransform(scrollYProgress, [0, 0.2, 0.45, 0.7, 1], [0.35, 0.52, 0.4, 0.55, 0.38]);
  const cyanOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.3, 0.42, 0.34, 0.44, 0.3]);
  const violetScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.06, 0.98]);
  const cyanScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.04, 0.96]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const onLeave = () => {
      mouseX.set(-240);
      mouseY.set(-240);
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
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[2] h-80 w-80 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          scale: violetScale,
          opacity: violetOpacity,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, hsl(var(--live-violet) / 0.24) 0%, hsl(var(--primary) / 0.08) 35%, transparent 72%)",
          filter: "blur(24px)",
          mixBlendMode: "screen",
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[2] h-56 w-56 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          scale: cyanScale,
          opacity: cyanOpacity,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, hsl(var(--live-cyan) / 0.28) 0%, hsl(var(--sky) / 0.06) 35%, transparent 74%)",
          filter: "blur(16px)",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
