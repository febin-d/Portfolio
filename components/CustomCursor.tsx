"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { damping: 20, stiffness: 150, mass: 0.5 });
  const smoothY = useSpring(cursorY, { damping: 20, stiffness: 150, mass: 0.5 });
  const outerX = useSpring(cursorX, { damping: 50, stiffness: 40, mass: 1.5 });
  const outerY = useSpring(cursorY, { damping: 50, stiffness: 40, mass: 1.5 });
  const trailX = useSpring(cursorX, { damping: 35, stiffness: 80, mass: 1 });
  const trailY = useSpring(cursorY, { damping: 35, stiffness: 80, mass: 1 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          x: outerX,
          y: outerY,
          borderColor: "hsl(0 85% 48% / 0.12)",
          boxShadow: "0 0 20px hsl(0 85% 48% / 0.06)",
        }}
      />
      <motion.div
        className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          x: trailX,
          y: trailY,
          borderColor: "hsl(15 90% 50% / 0.2)",
          boxShadow: "0 0 10px hsl(15 90% 50% / 0.08)",
        }}
      />
      <motion.div
        className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          background: "hsl(0 85% 48%)",
          boxShadow:
            "0 0 10px hsl(0 85% 48% / 0.8), 0 0 30px hsl(0 85% 48% / 0.3)",
        }}
      />
    </div>
  );
};

export default CustomCursor;
