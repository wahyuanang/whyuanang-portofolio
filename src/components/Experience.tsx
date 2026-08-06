"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/data";

export default function Experience() {
  return (
    <section className="py-20 bg-[#050508] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative pl-6 sm:pl-8 space-y-12 before:content-[''] before:absolute before:left-[23px] sm:before:left-[31px] before:top-3 before:bottom-3 before:w-[2px] before:bg-purple-900/40">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative flex items-start gap-6 sm:gap-8 group"
            >
              {/* Year Node Badge */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 border-2 border-[#050508] text-white font-bold text-xs flex items-center justify-center shadow-lg shadow-purple-600/40 group-hover:scale-110 transition-transform">
                {exp.year.split(" ")[0]}
              </div>

              {/* Content Card */}
              <div className="flex-grow bg-[#0b0b14] border border-purple-900/30 rounded-xl p-6 hover:border-purple-600/50 transition-all shadow-md">
                <h3 className="text-lg font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-purple-400 text-sm font-medium mb-3">
                  {exp.company}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
