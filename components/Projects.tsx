"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import TronGrid from "./TronGrid";

const RED = "hsl(0 85% 48%)";
const ORANGE = "hsl(15 90% 50%)";
const CRIMSON = "hsl(350 80% 40%)";

const projects = [
  {
    title: "Chat Room Website",
    category: "Web Development",
    description:
      "Created a chat platform with real-time updates, easy access, and stable performance.",
    github: "https://github.com/febin-d/Chat-Room",
  },
  {
    title: "Steganography App",
    category: "Cybersecurity / Desktop App",
    description:
      "Developed an app that lets users hide data like text, pdf and also zip files inside images for private and protected sharing.",
    github: "https://github.com/febin-d/Imgenc",
  },
  {
    title: "Voice Cloner",
    category: "AI / Machine Learning",
    description:
      "Built a simple tool that copies a person's voice from a short audio sample and creates new speech that sounds like them.",
    github: "https://github.com/febin-d/Voice-Cloner",
  },
];

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: 0.3 + index * 0.2,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: "800px" }}
    >
      <motion.div
        className="relative cyber-card tron-border p-6 overflow-hidden"
        style={{ background: "hsl(0 0% 2% / 0.85)" }}
        animate={
          hovered
            ? {
                boxShadow: `0 0 30px hsl(0 85% 48% / 0.2), inset 0 0 30px hsl(0 85% 48% / 0.03)`,
                y: -8,
              }
            : {
                boxShadow: `0 0 8px hsl(0 85% 48% / 0.1)`,
                y: 0,
              }
        }
        transition={{ duration: 0.4 }}
      >
        {/* Animated corner brackets */}
        <motion.div
          className="absolute top-0 left-0 border-t-2 border-l-2"
          style={{ borderColor: RED }}
          animate={hovered ? { width: 24, height: 24 } : { width: 12, height: 12 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute top-0 right-0 border-t-2 border-r-2"
          style={{ borderColor: RED }}
          animate={hovered ? { width: 24, height: 24 } : { width: 12, height: 12 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 border-b-2 border-l-2"
          style={{ borderColor: ORANGE }}
          animate={hovered ? { width: 24, height: 24 } : { width: 12, height: 12 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 border-b-2 border-r-2"
          style={{ borderColor: ORANGE }}
          animate={hovered ? { width: 24, height: 24 } : { width: 12, height: 12 }}
          transition={{ duration: 0.3 }}
        />

        {/* Scan line inside card */}
        <motion.div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${RED}, transparent)`,
            opacity: hovered ? 0.2 : 0,
          }}
          animate={hovered ? { top: ["0%", "100%"] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Number with glitch on hover */}
        <div className="flex items-start justify-between mb-4">
          <motion.span
            className="font-display text-5xl font-black"
            style={{
              color: hovered
                ? `hsl(0 85% 48% / 0.15)`
                : `hsl(0 85% 48% / 0.06)`,
            }}
            animate={
              hovered
                ? { textShadow: `0 0 20px hsl(0 85% 48% / 0.2)` }
                : { textShadow: "none" }
            }
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
          <motion.span
            className="font-display text-[10px] tracking-widest uppercase"
            style={{ color: ORANGE }}
            animate={hovered ? { opacity: 1 } : { opacity: 0.5 }}
          >
            {project.category}
          </motion.span>
        </div>

        <motion.h3
          className="font-display text-xl font-bold transition-all duration-300"
          style={{ color: hovered ? RED : "hsl(0 5% 75%)" }}
          animate={
            hovered
              ? { textShadow: `0 0 10px hsl(0 85% 48% / 0.4)`, x: 4 }
              : { textShadow: "none", x: 0 }
          }
        >
          {project.title}
        </motion.h3>
        <p className="font-body text-sm text-terminal-muted mt-2 leading-relaxed">
          {project.description}
        </p>

        {/* Bottom accent line with animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${RED}, ${ORANGE}, transparent)`,
          }}
          initial={{ scaleX: 0 }}
          animate={
            hovered
              ? { scaleX: 1, opacity: 0.5 }
              : { scaleX: 0.3, opacity: 0.15 }
          }
          transition={{ duration: 0.5 }}
        />

        {/* View on GitHub overlay on hover */}
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ textDecoration: "none" }}
        >
          <span
            className="font-display text-[10px] tracking-[0.4em] uppercase px-4 py-2 tron-border flex items-center gap-2"
            style={{ color: RED, background: "hsl(0 0% 2% / 0.9)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            View Code
          </span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="work"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <TronGrid />
      <div className="relative z-10 w-full px-6 md:px-12 py-20" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <motion.span
              className="font-display text-[10px] tracking-[0.5em] uppercase"
              style={{ color: ORANGE }}
              initial={{ opacity: 0, letterSpacing: "0.8em" }}
              animate={
                isInView ? { opacity: 0.8, letterSpacing: "0.5em" } : {}
              }
              transition={{ duration: 1.2 }}
            >
              My Projects
            </motion.span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 text-glow-red">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                RECENT{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                WORK
              </motion.span>
              <motion.span
                className="inline-block w-[3px] h-[0.8em] ml-2 align-middle"
                style={{ background: RED, boxShadow: `0 0 8px ${RED}` }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </h2>
            <motion.div
              className="mx-auto mt-4 h-[2px] w-48"
              style={{
                background: `linear-gradient(90deg, transparent, ${RED}, ${ORANGE}, ${RED}, transparent)`,
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>

          {/* GitHub Profile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <motion.a
              href="https://github.com/febin-d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 font-display text-xs tracking-[0.3em] uppercase hover-lift tron-border relative overflow-hidden"
              style={{
                color: RED,
                background: "hsl(0 85% 48% / 0.05)",
                textDecoration: "none",
              }}
              whileHover={{
                boxShadow: `0 0 25px hsl(0 85% 48% / 0.3), 0 0 60px hsl(0 85% 48% / 0.1)`,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block mr-3 align-middle"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              Visit My GitHub Profile
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
