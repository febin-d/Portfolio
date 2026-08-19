"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import TronGrid from "./TronGrid";
import { Typewriter } from "./Typewriter";

const RED = "hsl(0 85% 48%)";
const ORANGE = "hsl(15 90% 50%)";
const CRIMSON = "hsl(350 80% 40%)";

const CircuitLine = ({
  d,
  delay,
  duration = 2,
  color,
}: {
  d: string;
  delay: number;
  duration?: number;
  color: string;
}) => (
  <motion.path
    d={d}
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: [0, 0.5, 0.25] }}
    transition={{ duration, delay, ease: "easeInOut" }}
  />
);

const PulsingNode = ({
  cx,
  cy,
  delay,
  color,
}: {
  cx: number;
  cy: number;
  delay: number;
  color: string;
}) => (
  <g>
    <motion.circle
      cx={cx}
      cy={cy}
      r={3}
      fill={color}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.5, 1], opacity: [0, 0.8, 0.5] }}
      transition={{ duration: 0.5, delay }}
    />
    <motion.circle
      cx={cx}
      cy={cy}
      r={3}
      fill="none"
      stroke={color}
      strokeWidth="1"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [1, 4, 5], opacity: [0.4, 0.1, 0] }}
      transition={{ duration: 3, delay: delay + 0.5, repeat: Infinity, ease: "easeOut" }}
    />
  </g>
);

const Particles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      // Deterministic pseudo-random values using index
      const x = ((i * 37 + 13) % 1000) / 10;
      const y = ((i * 53 + 29) % 1000) / 10;
      const delay = ((i * 17) % 80) / 10;
      const duration = 3 + ((i * 23) % 50) / 10;
      const isOrange = i % 5 === 0;
      return { x, y, delay, duration, isOrange };
    });
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none z-[1]">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-px h-px rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.isOrange ? ORANGE : RED,
            boxShadow: `0 0 4px ${p.isOrange ? ORANGE : RED}`,
          }}
          animate={{ opacity: [0, 0.7, 0], y: [0, -50, -100] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const nameY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <TronGrid />
        <Particles />

        {/* Circuit paths */}
        <svg
          className="absolute inset-0 w-full h-full z-[1]"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <CircuitLine d="M0,250 L300,250 L300,400 L550,400 L550,500 L780,500" delay={0.3} color={RED} />
          <CircuitLine d="M0,550 L200,550 L200,650 L450,650 L450,540" delay={0.5} color={CRIMSON} />
          <CircuitLine d="M1920,300 L1600,300 L1600,450 L1350,450 L1350,520 L1140,520" delay={0.4} color={RED} />
          <CircuitLine d="M1920,650 L1700,650 L1700,530 L1500,530" delay={0.6} color={CRIMSON} />
          <CircuitLine d="M960,0 L960,280 L960,440" delay={0.5} duration={2.5} color={RED} />
          <CircuitLine d="M960,1080 L960,780 L960,600" delay={0.5} duration={2.5} color={RED} />
          <CircuitLine d="M0,150 L180,150 L180,350 L400,350 L400,470" delay={0.8} color={ORANGE} />
          <CircuitLine d="M1920,180 L1720,180 L1720,380 L1520,380 L1520,480" delay={0.9} color={ORANGE} />
          <CircuitLine d="M0,850 L350,850 L350,700 L600,700 L600,570" delay={1.0} color={ORANGE} />
          <CircuitLine d="M1920,880 L1580,880 L1580,720 L1320,720 L1320,580" delay={1.1} color={ORANGE} />
          <CircuitLine d="M860,0 L860,200 L860,420" delay={0.9} duration={2} color={CRIMSON} />
          <CircuitLine d="M1060,0 L1060,200 L1060,420" delay={0.9} duration={2} color={CRIMSON} />
          <CircuitLine d="M860,1080 L860,880 L860,640" delay={1.0} duration={2} color={CRIMSON} />
          <CircuitLine d="M1060,1080 L1060,880 L1060,640" delay={1.0} duration={2} color={CRIMSON} />

          <PulsingNode cx={300} cy={250} delay={1.2} color={RED} />
          <PulsingNode cx={550} cy={400} delay={1.5} color={RED} />
          <PulsingNode cx={780} cy={500} delay={1.8} color={RED} />
          <PulsingNode cx={1600} cy={300} delay={1.3} color={RED} />
          <PulsingNode cx={1350} cy={450} delay={1.6} color={RED} />
          <PulsingNode cx={1140} cy={520} delay={2.0} color={RED} />
          <PulsingNode cx={960} cy={440} delay={2.0} color={RED} />
          <PulsingNode cx={960} cy={600} delay={2.0} color={RED} />
          <PulsingNode cx={400} cy={350} delay={1.5} color={ORANGE} />
          <PulsingNode cx={1520} cy={380} delay={1.6} color={ORANGE} />
          <PulsingNode cx={600} cy={700} delay={1.7} color={ORANGE} />
          <PulsingNode cx={1320} cy={720} delay={1.8} color={ORANGE} />
        </svg>

        {/* Red glow orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none z-0 blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(0 85% 48% / 0.06) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full pointer-events-none z-0 blur-3xl"
          style={{
            background: "radial-gradient(circle, hsl(15 90% 50% / 0.04) 0%, transparent 70%)",
          }}
          animate={{ x: [0, 80, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-4"
          style={{ y: nameY, opacity: nameOpacity }}
        >
          <motion.span
            className="font-display text-[10px] sm:text-xs tracking-[0.5em] uppercase block mb-6"
            style={{ color: ORANGE }}
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 0.8, letterSpacing: "0.5em" }}
            transition={{ delay: 2, duration: 1.5 }}
          >
            Computer Science Student
          </motion.span>

          <div className="overflow-hidden">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight whitespace-nowrap text-glow-red flex justify-center">
              {"FEBIN DANIEL".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 2.3 + i * 0.07,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className={letter === " " ? "inline-block w-[0.3em]" : "inline-block"}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Glowing underline */}
          <div
            className="relative mx-auto mt-4 h-[2px] overflow-hidden"
            style={{ width: "90%", maxWidth: 700 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent, ${RED}, ${ORANGE}, ${RED}, transparent)`,
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
            />
          </div>

          {/* Tagline with corner brackets */}
          <motion.div
            className="relative inline-block mt-8 px-8 py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l" style={{ borderColor: RED }} />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r" style={{ borderColor: RED }} />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l" style={{ borderColor: ORANGE }} />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r" style={{ borderColor: ORANGE }} />
            <p className="text-muted-foreground text-sm sm:text-base font-body tracking-widest uppercase">
              Web Dev <span style={{ color: RED }}>•</span> Cybersecurity <span style={{ color: ORANGE }}>•</span> Problem Solving
            </p>
          </motion.div>

          <motion.div
            className="text-terminal-muted text-sm sm:text-base font-body mt-6 max-w-xl mx-auto leading-relaxed min-h-[4rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.8 }}
          >
            <Typewriter
              text="Computer Science student interested in web development and cybersecurity. I enjoy building practical projects and continuously improving my technical skills."
              speed={30}
              delay={3900}
              cursorChar="█"
            />
          </motion.div>


        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase font-display">Scroll</span>
          <motion.div
            className="w-px h-12"
            style={{
              background: `linear-gradient(to bottom, ${RED}, ${ORANGE})`,
              transformOrigin: "top",
            }}
            animate={{ scaleY: [0, 1, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
