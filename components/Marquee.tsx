"use client";

import { motion } from "framer-motion";

const RED = "hsl(0 85% 48%)";
const ORANGE = "hsl(15 90% 50%)";
const items = [
  "Web Development",
  "Cybersecurity",
  "Python",
  "React",
  "Database Management",
  "Steganography",
  "Machine Learning",
  "UI/UX Design",
];

const Marquee = () => (
  <div
    className="relative overflow-hidden py-6"
    style={{
      borderTop: `1px solid hsl(0 85% 48% / 0.15)`,
      borderBottom: `1px solid hsl(15 90% 50% / 0.1)`,
      background: "hsl(0 0% 2% / 0.95)",
    }}
  >
    {/* Top scan line */}
    <motion.div
      className="absolute top-0 left-0 right-0 h-px"
      style={{
        background: `linear-gradient(90deg, transparent, ${RED}, transparent)`,
      }}
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <div className="flex animate-marquee whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="mx-8 font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
        >
          {item}
          <motion.span
            className="inline-block ml-8"
            style={{ color: i % 2 === 0 ? RED : ORANGE }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            ◆
          </motion.span>
        </span>
      ))}
    </div>
    {/* Bottom scan line */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-px"
      style={{
        background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)`,
      }}
      animate={{ opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  </div>
);

export default Marquee;
