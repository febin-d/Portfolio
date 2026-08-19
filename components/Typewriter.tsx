"use client";

import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;       // typing speed in ms
  delay?: number;       // initial delay in ms
  showCursor?: boolean; // toggle blinking cursor
  cursorChar?: string;  // "█" or "_"
  className?: string;
  onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 35,
  delay = 400,
  showCursor = true,
  cursorChar = "█",
  className = "",
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [displayedText, started, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && <span className="terminal-cursor">{cursorChar}</span>}
    </span>
  );
};

export default Typewriter;
