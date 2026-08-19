"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TronGrid from "./TronGrid";

const RED = "hsl(0 85% 48%)";
const ORANGE = "hsl(15 90% 50%)";

const contactInfo = [
  {
    label: "Email",
    value: "febindaniel2020@gmail.com",
    href: "mailto:febindaniel2020@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 956 747 0512",
    href: "tel:+919567470512",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/febin-d",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/febin-daniel",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:febindaniel2020@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <TronGrid />
      <div className="relative z-10 w-full px-6 md:px-12 py-20" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
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
              Get in Touch
            </motion.span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 text-glow-red">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                LET'S{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                CONNECT
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
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            <motion.p
              className="text-terminal-muted text-lg mt-8 font-body max-w-lg mx-auto tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Have a project in mind or want to collaborate? Feel free to reach out. I'd love to hear from you.
            </motion.p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-4 mt-12 max-w-xl mx-auto"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0 + i * 0.15, duration: 0.5 }}
                className="tron-border p-4 hover-lift"
                style={{ background: "hsl(0 0% 2% / 0.85)" }}
              >
                <div className="flex justify-center mb-2" style={{ color: RED }}>
                  {info.icon}
                </div>
                <h4
                  className="font-display text-[10px] tracking-widest uppercase mb-1"
                  style={{ color: ORANGE }}
                >
                  {info.label}
                </h4>
                {info.href ? (
                  <a
                    href={info.href}
                    className="font-body text-sm text-terminal-muted hover:text-primary transition-colors duration-300"
                    style={{ textDecoration: "none" }}
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="font-body text-sm text-terminal-muted">
                    {info.value}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Social links with animated icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-14 flex justify-center gap-6"
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group relative flex flex-col items-center gap-2"
                style={{ textDecoration: "none" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 flex items-center justify-center tron-border"
                  style={{ background: "hsl(0 0% 2% / 0.9)" }}
                  whileHover={{
                    boxShadow: `0 0 20px hsl(0 85% 48% / 0.3), inset 0 0 10px hsl(0 85% 48% / 0.05)`,
                    borderColor: RED,
                  }}
                >
                  <span className="flex items-center justify-center" style={{ color: RED }}>
                    {social.icon}
                  </span>
                </motion.div>
                <span className="text-muted-foreground text-[10px] font-display tracking-widest uppercase group-hover:text-glow-red transition-all duration-300">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
