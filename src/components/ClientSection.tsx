"use client";

import { motion } from "framer-motion";
import { clientsData } from "@/data/data";
import { Building2, Calendar, UserCheck } from "lucide-react";

export default function ClientSection() {
  return (
    <section className="py-20 bg-page border-t border-custom transition-colors duration-300 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card-sub border border-custom text-purple-600 dark:text-purple-300 text-xs font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>Trusted Partnerships</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-title tracking-tight"
          >
            Clients & Collaborations
          </motion.h2>

          <p className="text-muted-custom text-sm sm:text-base leading-relaxed">
            Organizations and institutions I have had the privilege to work with.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientsData.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card-custom border border-custom rounded-2xl p-6 sm:p-8 hover:border-purple-500/60 transition-all duration-300 shadow-md hover:-translate-y-1 space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/50 text-xs font-bold">
                    Client Work
                  </span>
                  <h3 className="text-xl font-bold text-title tracking-tight pt-2">
                    {client.name}
                  </h3>
                  <p className="text-sm font-semibold text-purple-500 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4" />
                    <span>{client.role}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-custom font-mono bg-card-sub px-3 py-1.5 rounded-lg border border-custom">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{client.year}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-custom space-y-2">
                <h4 className="text-sm font-bold text-title">
                  {client.projectTitle}
                </h4>
                <p className="text-xs text-muted-custom leading-relaxed">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
