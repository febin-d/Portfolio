"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const RED = "hsl(0 85% 48%)";
const ORANGE = "hsl(15 90% 50%)";
const CRIMSON = "hsl(350 80% 40%)";

const LightCycleBike = ({
  startX,
  startY,
  direction,
  delay,
  color,
  speed = 12,
}: {
  startX: number;
  startY: number;
  direction: "right" | "left" | "down" | "up";
  delay: number;
  color: string;
  speed?: number;
}) => {
  const isHorizontal = direction === "right" || direction === "left";
  const length = isHorizontal ? 1920 : 1080;
  const sign = direction === "right" || direction === "down" ? 1 : -1;

  return (
    <g>
      {/* Trail glow */}
      <motion.line
        x1={startX}
        y1={startY}
        x2={isHorizontal ? startX : startX}
        y2={isHorizontal ? startY : startY}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{
          x2: startX,
          y2: startY,
          opacity: 0,
        }}
        animate={{
          x2: isHorizontal ? startX + sign * length : startX,
          y2: !isHorizontal ? startY + sign * length : startY,
          opacity: [0, 0.8, 0.8, 0],
        }}
        transition={{ duration: speed, delay, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
      />
      {/* Bright head dot */}
      <motion.circle
        r={3}
        fill={color}
        initial={{ cx: startX, cy: startY, opacity: 0 }}
        animate={{
          cx: isHorizontal ? [startX, startX + sign * length] : [startX, startX],
          cy: !isHorizontal ? [startY, startY + sign * length] : [startY, startY],
          opacity: [0, 1, 1, 0],
        }}
        transition={{ duration: speed, delay, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      />
    </g>
  );
};

const TronGrid = () => {
  const vLines = useMemo(() => Array.from({ length: 40 }).map((_, i) => (i + 1) * 2.5), []);
  const hLines = useMemo(() => Array.from({ length: 25 }).map((_, i) => (i + 1) * 4), []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dense red grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(hsl(0 85% 48% / 0.1) 1px, transparent 1px),
          linear-gradient(90deg, hsl(0 85% 48% / 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Medium grid - orange accent */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(hsl(15 90% 50% / 0.06) 1px, transparent 1px),
          linear-gradient(90deg, hsl(15 90% 50% / 0.06) 1px, transparent 1px)
        `,
          backgroundSize: "150px 150px",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(hsl(0 85% 48% / 0.04) 1px, transparent 1px),
          linear-gradient(90deg, hsl(0 85% 48% / 0.04) 1px, transparent 1px)
        `,
          backgroundSize: "25px 25px",
        }}
      />

      {/* Perspective grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh]" style={{ perspective: "500px" }}>
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(65deg)",
            transformOrigin: "center bottom",
            backgroundImage: `
              linear-gradient(hsl(0 85% 48% / 0.2) 1px, transparent 1px),
              linear-gradient(90deg, hsl(0 85% 48% / 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Perspective grid ceiling */}
      <div className="absolute top-0 left-0 right-0 h-[35vh]" style={{ perspective: "500px" }}>
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(-65deg)",
            transformOrigin: "center top",
            backgroundImage: `
              linear-gradient(hsl(0 85% 48% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(0 85% 48% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated grid lines (SVG) with bikes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        {/* Extra grid lines */}
        {vLines.map((x, i) => (
          <motion.line
            key={`v${i}`}
            x1={`${x}%`}
            y1="0"
            x2={`${x}%`}
            y2="100%"
            stroke={RED}
            strokeWidth="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.07 }}
            transition={{ duration: 1, delay: i * 0.02 }}
          />
        ))}
        {hLines.map((y, i) => (
          <motion.line
            key={`h${i}`}
            x1="0"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke={RED}
            strokeWidth="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ duration: 1, delay: 0.3 + i * 0.03 }}
          />
        ))}

        {/* Light cycle bikes — horizontal */}
        <LightCycleBike startX={-50} startY={200} direction="right" delay={1} color={RED} speed={8} />
        <LightCycleBike startX={1970} startY={400} direction="left" delay={3} color={ORANGE} speed={10} />
        <LightCycleBike startX={-50} startY={600} direction="right" delay={5} color={RED} speed={7} />
        <LightCycleBike startX={1970} startY={800} direction="left" delay={2} color={CRIMSON} speed={9} />
        <LightCycleBike startX={-50} startY={100} direction="right" delay={6} color={ORANGE} speed={11} />
        <LightCycleBike startX={1970} startY={540} direction="left" delay={8} color={RED} speed={8} />
        <LightCycleBike startX={-50} startY={900} direction="right" delay={4} color={CRIMSON} speed={10} />

        {/* Light cycle bikes — vertical */}
        <LightCycleBike startX={300} startY={-50} direction="down" delay={2} color={RED} speed={9} />
        <LightCycleBike startX={700} startY={1130} direction="up" delay={4} color={ORANGE} speed={8} />
        <LightCycleBike startX={1200} startY={-50} direction="down" delay={6} color={CRIMSON} speed={10} />
        <LightCycleBike startX={1600} startY={1130} direction="up" delay={1} color={RED} speed={7} />
        <LightCycleBike startX={960} startY={-50} direction="down" delay={3} color={ORANGE} speed={9} />
        <LightCycleBike startX={500} startY={1130} direction="up" delay={7} color={RED} speed={11} />
        <LightCycleBike startX={1400} startY={-50} direction="down" delay={5} color={CRIMSON} speed={8} />
      </svg>

      {/* Scan lines */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 5%, ${RED} 30%, ${ORANGE} 50%, ${RED} 70%, transparent 95%)`,
          opacity: 0.2,
        }}
        animate={{ top: ["-2%", "102%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${CRIMSON}, transparent)`, opacity: 0.1 }}
        animate={{ top: ["102%", "-2%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 25%, hsl(0 0% 2%) 75%)",
        }}
      />
    </div>
  );
};

export default TronGrid;
