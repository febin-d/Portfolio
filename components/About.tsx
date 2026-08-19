"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import TronGrid from "./TronGrid";

const RED = "hsl(0 85% 48%)";
const ORANGE = "hsl(15 90% 50%)";
const CRIMSON = "hsl(350 80% 40%)";

const education = [
  {
    degree: "B.Tech - Computer Science",
    institution: "APJ Abdul Kalam Technological University",
    year: "2023 - 2027",
    score: "",
  },
  {
    degree: "12th - Computer Science",
    institution: "Gov. Higher Secondary School, Konni",
    year: "2021 - 2023",
    score: "92%",
  },
  {
    degree: "10th",
    institution: "Carmal Central School, Payyanamon",
    year: "2020 - 2021",
    score: "84%",
  },
];

const skills = [
  { name: "Python", level: 85 },
  { name: "C / C++", level: 80 },
  { name: "Java", level: 75 },
  { name: "HTML / CSS", level: 90 },
  { name: "React", level: 78 },
  { name: "MySQL / SQL Plus", level: 82 },
  { name: "Cybersecurity", level: 75 },
  { name: "Git / GitHub", level: 85 },
];

const strengths = [
  "Good Communication Skill",
  "Quick Learner",
  "Creativity",
  "Adaptivity",
  "Time Management",
  "Hard Working Mentality",
];

const SkillBar = ({
  skill,
  index,
  isInView,
}: {
  skill: (typeof skills)[0];
  index: number;
  isInView: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.4 + index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <motion.span
          className="font-display text-xs tracking-widest uppercase transition-all duration-300"
          style={{ color: hovered ? RED : "hsl(0 5% 55%)" }}
          animate={
            hovered
              ? { x: 5, textShadow: `0 0 8px ${RED}` }
              : { x: 0, textShadow: "none" }
          }
        >
          {skill.name}
        </motion.span>
        <motion.span
          className="font-display text-[10px] tracking-wider"
          style={{ color: ORANGE }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : {}}
          transition={{ delay: 0.8 + index * 0.1 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div
        className="relative h-[3px] overflow-hidden"
        style={{ background: "hsl(0 0% 8%)" }}
      >
        <motion.div
          className="absolute inset-y-0 left-0"
          style={{
            background: `linear-gradient(90deg, ${CRIMSON}, ${RED}, ${ORANGE})`,
            boxShadow: hovered
              ? `0 0 12px ${RED}, 0 0 4px ${ORANGE}`
              : `0 0 6px hsl(0 85% 48% / 0.3)`,
          }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{
            duration: 1.2,
            delay: 0.6 + index * 0.1,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        />
        {/* Scanning pulse on the bar */}
        <motion.div
          className="absolute inset-y-0 w-8"
          style={{
            background: `linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.15), transparent)`,
          }}
          animate={isInView ? { left: ["-10%", "110%"] } : {}}
          transition={{
            duration: 2,
            delay: 1.5 + index * 0.15,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <TronGrid />
      <div className="relative z-10 w-full px-6 md:px-12 py-20" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Title with typing cursor effect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              className="font-display text-[10px] tracking-[0.5em] uppercase"
              style={{ color: ORANGE }}
              initial={{ opacity: 0, letterSpacing: "0.8em" }}
              animate={
                isInView ? { opacity: 0.8, letterSpacing: "0.5em" } : {}
              }
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              About Me
            </motion.span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 text-glow-red">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                THE{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                PROGRAM
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
                background: `linear-gradient(90deg, transparent, ${ORANGE}, ${RED}, ${ORANGE}, transparent)`,
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — About text + Academic Details */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="tron-border p-8 relative overflow-hidden"
              style={{ background: "hsl(0 0% 2% / 0.85)" }}
            >
              {/* Corner decorations */}
              <div
                className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2"
                style={{ borderColor: RED }}
              />
              <div
                className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2"
                style={{ borderColor: RED }}
              />
              <div
                className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2"
                style={{ borderColor: ORANGE }}
              />
              <div
                className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2"
                style={{ borderColor: ORANGE }}
              />

              {/* Animated scan line inside card */}
              <motion.div
                className="absolute left-0 right-0 h-px pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${RED}, transparent)`,
                  opacity: 0.15,
                }}
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              <motion.p
                className="text-terminal-body text-lg leading-relaxed font-body"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                I'm a computer science student with a strong foundation in software development, cybersecurity, and database management. I am a quick learner with good communication skills, creativity, and a hard-working mentality.
              </motion.p>

              {/* Academic Details */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <h3
                  className="font-display text-sm font-bold mb-4 tracking-widest uppercase"
                  style={{ color: ORANGE }}
                >
                  <span className="text-glow-orange">⟨</span> Academic Details{" "}
                  <span className="text-glow-orange">⟩</span>
                </h3>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                      className="relative pl-4"
                      style={{ borderLeft: `2px solid hsl(0 85% 48% / 0.3)` }}
                    >
                      <h4
                        className="font-display text-xs tracking-wider uppercase"
                        style={{ color: RED }}
                      >
                        {edu.degree}
                      </h4>
                      <p className="text-terminal-muted text-sm font-body mt-1">
                        {edu.institution}
                      </p>
                      <p className="text-terminal-muted/80 text-xs font-body">
                        {edu.year}
                        {edu.score ? ` | ${edu.score}` : ""}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Strengths */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <h3
                  className="font-display text-sm font-bold mb-4 tracking-widest uppercase"
                  style={{ color: ORANGE }}
                >
                  <span className="text-glow-orange">⟨</span> Strengths{" "}
                  <span className="text-glow-orange">⟩</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {strengths.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.3 + i * 0.1, duration: 0.4 }}
                      className="px-3 py-1 font-display text-[10px] tracking-wider uppercase tron-border"
                      style={{
                        color: "#c2c2c2",
                        background: "hsl(0 0% 4%)",
                      }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Personal Details */}
              <motion.div
                className="mt-6 text-terminal-muted text-sm font-body"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <p>Age: 20 | Gender: Male</p>
                <p>Languages: English, Hindi, Malayalam</p>
              </motion.div>
            </motion.div>

            {/* Right — Skills with animated bars */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <motion.h3
                className="font-display text-sm font-bold mb-8 tracking-widest uppercase"
                style={{ color: ORANGE }}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <span className="text-glow-orange">⟨</span> Technical Skills{" "}
                <span className="text-glow-orange">⟩</span>
              </motion.h3>
              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={i}
                    isInView={isInView}
                  />
                ))}
              </div>

              {/* Additional Skills Tags */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                <h4
                  className="font-display text-[10px] tracking-wider uppercase mb-4"
                  style={{ color: "hsl(0 5% 45%)" }}
                >
                  Also Familiar With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Figma",
                    "Linux",
                    "Windows",
                    "macOS",
                    "Steganography",
                    "Flutter",
                  ].map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.6 + i * 0.08, duration: 0.3 }}
                      className="px-3 py-1 font-display text-[10px] tracking-wider uppercase tron-border-orange"
                      style={{
                        color: ORANGE,
                        background: "hsl(15 90% 50% / 0.03)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
