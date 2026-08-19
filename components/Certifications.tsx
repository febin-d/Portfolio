"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import TronGrid from "./TronGrid";

const RED = "hsl(0 85% 48%)";
const ORANGE = "hsl(15 90% 50%)";

const certifications = [
  {
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle",
    icon: "⬡",
  },
  { title: "Oracle Java Foundations", issuer: "Oracle", icon: "◇" },
  {
    title: "Cisco Cybersecurity Certificate",
    issuer: "Cisco Networking Academy",
    icon: "⟐",
  },
  { title: "Database Management Systems", issuer: "NPTEL", icon: "◈" },
];

const CertCard = ({
  cert,
  index,
  isInView,
}: {
  cert: (typeof certifications)[0];
  index: number;
  isInView: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.3 + index * 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative tron-border p-6 overflow-hidden flex items-start gap-4"
        style={{ background: "hsl(0 0% 2% / 0.85)" }}
        animate={
          hovered
            ? {
                boxShadow: `0 0 25px hsl(0 85% 48% / 0.2), inset 0 0 20px hsl(0 85% 48% / 0.03)`,
                y: -4,
              }
            : {
                boxShadow: `0 0 8px hsl(0 85% 48% / 0.1)`,
                y: 0,
              }
        }
        transition={{ duration: 0.4 }}
      >
        {/* Corner accents */}
        <motion.div
          className="absolute top-0 left-0 border-t-2 border-l-2"
          style={{ borderColor: RED }}
          animate={hovered ? { width: 20, height: 20 } : { width: 8, height: 8 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 border-b-2 border-r-2"
          style={{ borderColor: ORANGE }}
          animate={hovered ? { width: 20, height: 20 } : { width: 8, height: 8 }}
          transition={{ duration: 0.3 }}
        />

        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${RED}, transparent)`,
            opacity: hovered ? 0.15 : 0,
          }}
          animate={hovered ? { top: ["0%", "100%"] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Icon */}
        <motion.div
          className="w-12 h-12 flex-shrink-0 flex items-center justify-center tron-border"
          style={{ background: "hsl(0 0% 3%)" }}
          animate={
            hovered
              ? {
                  boxShadow: `0 0 15px hsl(0 85% 48% / 0.2)`,
                  borderColor: RED,
                }
              : {}
          }
          transition={{ duration: 0.3 }}
        >
          <span className="text-xl" style={{ color: RED }}>
            {cert.icon}
          </span>
        </motion.div>

        {/* Content */}
        <div>
          <motion.h3
            className="font-display text-sm font-bold tracking-wider uppercase transition-all duration-300"
            style={{ color: hovered ? RED : "hsl(0 5% 75%)" }}
            animate={
              hovered
                ? { textShadow: `0 0 8px hsl(0 85% 48% / 0.3)` }
                : { textShadow: "none" }
            }
          >
            {cert.title}
          </motion.h3>
          <p className="font-body text-sm text-muted-foreground mt-1 tracking-wide">
            {cert.issuer}
          </p>
        </div>

        {/* Bottom accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${RED}, ${ORANGE}, transparent)`,
          }}
          initial={{ scaleX: 0 }}
          animate={
            hovered
              ? { scaleX: 1, opacity: 0.4 }
              : { scaleX: 0.2, opacity: 0.1 }
          }
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="certifications"
      className="relative min-h-[70vh] flex items-center overflow-hidden"
    >
      <TronGrid />
      <div className="relative z-10 w-full px-6 md:px-12 py-20" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Title */}
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
              Achievements
            </motion.span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 text-glow-red">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                CERTI
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                FICATIONS
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

          {/* Certification Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <CertCard
                key={cert.title}
                cert={cert}
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
