"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const RED = "hsl(0 85% 48%)";
const ORANGE = "hsl(15 90% 50%)";

const navItems = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 sm:py-4"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: "hsl(0 0% 2% / 0.85)",
          borderBottom: "1px solid hsl(0 85% 48% / 0.15)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-lg sm:text-xl font-black tracking-wider text-glow-red focus:outline-none"
        >
          FD
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-display text-[11px] tracking-[0.3em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 line-reveal"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="font-display text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 tron-border-orange hover-lift"
            style={{
              color: ORANGE,
              background: "hsl(15 90% 50% / 0.05)",
              textDecoration: "none",
            }}
          >
            ⬇ Resume
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="/resume.pdf"
            download
            className="font-display text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 tron-border-orange"
            style={{
              color: ORANGE,
              background: "hsl(15 90% 50% / 0.05)",
              textDecoration: "none",
            }}
          >
            ⬇ Resume
          </a>
          
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-1.5 tron-border focus:outline-none flex flex-col justify-center items-center gap-1.5 w-9 h-9"
            style={{ background: "hsl(0 0% 3% / 0.9)" }}
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[2px] block origin-center transition-all"
              style={{ background: RED }}
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-[2px] block transition-all"
              style={{ background: ORANGE }}
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[2px] block origin-center transition-all"
              style={{ background: RED }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[57px] left-0 right-0 z-40 md:hidden px-6 py-6 border-b flex flex-col gap-4"
            style={{
              background: "hsl(0 0% 2% / 0.95)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderColor: "hsl(0 85% 48% / 0.25)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-display text-left text-sm tracking-[0.25em] uppercase py-2 text-muted-foreground hover:text-primary transition-colors border-b border-white/5"
              >
                <span className="text-primary mr-2">›</span>
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
