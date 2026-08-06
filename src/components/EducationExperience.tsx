"use client";

import { motion } from "framer-motion";
import { educationData, trainingCertificationData, experienceData, awardsData } from "@/data/data";
import { Award } from "lucide-react";

export default function EducationExperience() {
  return (
    <section className="py-20 bg-page transition-colors duration-300 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Section Header */}
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-title tracking-tight relative inline-block pb-3"
          >
            Education & Experience
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-500 via-purple-500 to-purple-600 rounded-full" />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Education + Training & Certification + Honors & Awards */}
          <div className="lg:col-span-6 space-y-14">
            {/* Education Sub-Section */}
            <div>
              <h3 className="text-2xl font-bold text-title mb-8 tracking-tight">
                Education
              </h3>

              <div className="relative pl-6 border-l-2 border-amber-500/60 dark:border-amber-500/60 space-y-10 ml-2">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 group"
                  >
                    {/* Stepper Hollow Circle Node */}
                    <span className="absolute -left-[33px] top-1 w-5 h-5 rounded-full border-2 border-amber-500 bg-page group-hover:bg-amber-500 transition-all shadow-sm" />

                    <div className="space-y-1.5">
                      <h4 className="text-xl font-bold text-title tracking-tight">
                        {edu.title}
                      </h4>
                      <p className="text-base text-body-custom font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-muted-custom font-mono">
                        {edu.year}
                      </p>
                      {edu.description && (
                        <p className="text-sm text-muted-custom leading-relaxed pt-1">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Training and Certification Sub-Section */}
            <div>
              <h3 className="text-2xl font-bold text-title mb-8 tracking-tight">
                Training and Certification
              </h3>

              <div className="relative pl-6 border-l-2 border-amber-500/60 dark:border-amber-500/60 space-y-10 ml-2">
                {trainingCertificationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 group"
                  >
                    {/* Stepper Hollow Circle Node */}
                    <span className="absolute -left-[33px] top-1 w-5 h-5 rounded-full border-2 border-amber-500 bg-page group-hover:bg-amber-500 transition-all shadow-sm" />

                    <div className="space-y-1.5">
                      <h4 className="text-xl font-bold text-title tracking-tight">
                        {item.title}
                      </h4>
                      {item.institution && (
                        <p className="text-base text-body-custom font-medium">
                          {item.institution}
                        </p>
                      )}
                      {item.year && (
                        <p className="text-xs text-muted-custom font-mono">
                          {item.year}
                        </p>
                      )}

                      {/* Handle description as array or string */}
                      {Array.isArray(item.description) ? (
                        <ul className="space-y-1.5 pt-1 text-sm text-muted-custom leading-relaxed list-disc list-outside pl-4">
                          {item.description.map((desc, dIdx) => (
                            <li key={dIdx}>{desc}</li>
                          ))}
                        </ul>
                      ) : item.bullets && item.bullets.length > 0 ? (
                        <ul className="space-y-1.5 pt-1 text-sm text-muted-custom leading-relaxed list-disc list-outside pl-4">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      ) : (
                        item.description && (
                          <p className="text-sm text-muted-custom leading-relaxed pt-1">
                            {item.description}
                          </p>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Honors and Awards Sub-Section */}
            <div>
              <h3 className="text-2xl font-bold text-title mb-8 tracking-tight flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-500" />
                <span>Honors & Awards</span>
              </h3>

              <div className="relative pl-6 border-l-2 border-amber-500/60 dark:border-amber-500/60 space-y-10 ml-2">
                {awardsData.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 group"
                  >
                    {/* Stepper Hollow Circle Node */}
                    <span className="absolute -left-[33px] top-1 w-5 h-5 rounded-full border-2 border-amber-500 bg-page group-hover:bg-amber-500 transition-all shadow-sm" />

                    <div className="space-y-1.5">
                      <h4 className="text-lg font-bold text-title tracking-tight">
                        {award.title}
                      </h4>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                        Issued by: {award.issuer}
                      </p>
                      <p className="text-xs text-muted-custom font-mono">
                        {award.year}
                      </p>
                      {award.description && (
                        <p className="text-xs text-muted-custom leading-relaxed pt-1">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-bold text-title mb-8 tracking-tight">
              Experience
            </h3>

            <div className="relative pl-6 border-l-2 border-amber-500/60 dark:border-amber-500/60 space-y-10 ml-2">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6 group"
                >
                  {/* Stepper Hollow Circle Node */}
                  <span className="absolute -left-[33px] top-1 w-5 h-5 rounded-full border-2 border-amber-500 bg-page group-hover:bg-amber-500 transition-all shadow-sm" />

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-title tracking-tight">
                      {exp.role}
                    </h4>
                    <p className="text-base text-body-custom font-semibold">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-custom font-mono">
                      <span>{exp.year}</span>
                      {exp.duration && <span>• {exp.duration}</span>}
                    </div>
                    {exp.location && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        📍 {exp.location}
                      </p>
                    )}

                    {/* Bullet points for Experience */}
                    {exp.bullets && exp.bullets.length > 0 ? (
                      <ul className="space-y-2 pt-2 text-xs sm:text-sm text-muted-custom leading-relaxed list-disc list-outside pl-4">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    ) : (
                      exp.description && (
                        <p className="text-sm text-muted-custom leading-relaxed pt-1">
                          {exp.description}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
