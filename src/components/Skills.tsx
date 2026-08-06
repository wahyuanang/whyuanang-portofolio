"use client";

import { motion } from "framer-motion";
import { allSkills } from "@/data/data";

export default function Skills() {
  return (
    <section className="py-16 bg-page transition-colors duration-300 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-title tracking-tight mb-10 text-center"
        >
          Skills & Technologies
        </motion.h2>

        {/* Single Centered Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card-custom border border-custom rounded-2xl p-8 sm:p-10 shadow-xl text-center hover:border-purple-500/40 transition-all"
        >
          <div className="flex flex-wrap justify-center items-center gap-3">
            {allSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-full bg-card-sub text-purple-400 border border-custom text-xs sm:text-sm font-mono tracking-wide hover:border-purple-500 hover:scale-105 transition-all cursor-default shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
