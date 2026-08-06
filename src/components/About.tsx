"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/data";
import RetroCat from "./RetroCat";

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-page border-t border-custom transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-title tracking-tight">
              About Me
            </h2>

            <div className="space-y-4 text-body-custom text-sm sm:text-base leading-relaxed">
              {profileData.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Retro Pixel Cat */}
          <div className="md:col-span-5 flex justify-center">
            <RetroCat />
          </div>
        </div>
      </div>
    </section>
  );
}
