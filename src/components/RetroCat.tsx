"use client";

import { motion } from "framer-motion";

export default function RetroCat() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative flex items-center justify-center p-6"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-purple-600/10 blur-3xl rounded-full" />

      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Pixel Sparks around Cat */}
        <div className="absolute top-4 left-6 text-purple-400 font-mono text-xs animate-bounce">+</div>
        <div className="absolute top-8 right-8 text-purple-300 font-mono text-sm">x</div>
        <div className="absolute bottom-8 left-4 text-purple-400 font-mono text-sm">x</div>
        <div className="absolute bottom-4 right-6 text-purple-300 font-mono text-xs">+</div>

        {/* Pixel Art Cat Graphic SVG */}
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-48 h-48 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          style={{ imageRendering: "pixelated" }}
        >
          {/* Ears */}
          <rect x="7" y="7" width="3" height="3" fill="#c084fc" />
          <rect x="8" y="8" width="1" height="1" fill="#e9d5ff" />
          <rect x="22" y="7" width="3" height="3" fill="#c084fc" />
          <rect x="23" y="8" width="1" height="1" fill="#e9d5ff" />

          {/* Head Base */}
          <rect x="9" y="10" width="14" height="9" fill="#a855f7" />
          <rect x="8" y="11" width="1" height="7" fill="#a855f7" />
          <rect x="23" y="11" width="1" height="7" fill="#a855f7" />

          {/* Eyes */}
          <rect x="11" y="13" width="2" height="2" fill="#09090e" />
          <rect x="11" y="13" width="1" height="1" fill="#ffffff" />
          <rect x="19" y="13" width="2" height="2" fill="#09090e" />
          <rect x="19" y="13" width="1" height="1" fill="#ffffff" />

          {/* Nose & Mouth */}
          <rect x="15" y="15" width="2" height="1" fill="#e9d5ff" />
          <rect x="14" y="16" width="1" height="1" fill="#a855f7" />
          <rect x="17" y="16" width="1" height="1" fill="#a855f7" />

          {/* Whiskers */}
          <rect x="5" y="14" width="3" height="1" fill="#c084fc" />
          <rect x="6" y="16" width="2" height="1" fill="#c084fc" />
          <rect x="24" y="14" width="3" height="1" fill="#c084fc" />
          <rect x="24" y="16" width="2" height="1" fill="#c084fc" />

          {/* Body */}
          <rect x="10" y="19" width="12" height="8" fill="#9333ea" />
          <rect x="9" y="20" width="1" height="6" fill="#9333ea" />
          <rect x="22" y="20" width="1" height="6" fill="#9333ea" />

          {/* Paws */}
          <rect x="11" y="27" width="3" height="2" fill="#c084fc" />
          <rect x="18" y="27" width="3" height="2" fill="#c084fc" />

          {/* Tail */}
          <rect x="23" y="21" width="4" height="2" fill="#9333ea" />
          <rect x="26" y="18" width="2" height="4" fill="#a855f7" />
          <rect x="25" y="17" width="2" height="2" fill="#c084fc" />

          {/* Star highlights */}
          <rect x="4" y="8" width="1" height="1" fill="#e9d5ff" />
          <rect x="27" y="11" width="1" height="1" fill="#e9d5ff" />
          <rect x="3" y="22" width="1" height="1" fill="#e9d5ff" />
        </svg>
      </div>
    </motion.div>
  );
}
