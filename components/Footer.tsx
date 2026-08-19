"use client";

import { motion } from "framer-motion";

const RED = "hsl(0 85% 48%)";
const ORANGE = "hsl(15 90% 50%)";

const Footer = () => (
  <footer
    className="relative py-8 px-6 md:px-12 flex items-center justify-center overflow-hidden"
    style={{
      borderTop: "1px solid hsl(0 85% 48% / 0.12)",
      background: "hsl(0 0% 2%)",
    }}
  >
    <motion.div
      className="absolute top-0 left-0 right-0 h-px"
      style={{
        background: `linear-gradient(90deg, transparent, ${RED}, ${ORANGE}, ${RED}, transparent)`,
      }}
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    <span className="font-display text-[10px] tracking-widest text-muted-foreground uppercase text-center">
      © {new Date().getFullYear()} Febin Daniel. All rights reserved.
    </span>
  </footer>
);

export default Footer;
