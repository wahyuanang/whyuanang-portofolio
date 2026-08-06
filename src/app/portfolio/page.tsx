"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData, allSkills } from "@/data/data";
import { ExternalLink, ArrowRight, FolderGit2, Briefcase, UserCheck } from "lucide-react";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<"all" | "client" | "personal">("all");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    return project.projectType === filter;
  });

  return (
    <div className="min-h-screen pt-32 pb-24 bg-page transition-colors duration-300 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card-sub border border-custom text-purple-600 dark:text-purple-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-title tracking-tight">
            My Portfolio
          </h1>

          <p className="text-muted-custom text-base sm:text-lg leading-relaxed">
            Exploration of client solutions and personal projects built with modern web technologies.
          </p>
        </div>

        {/* Top Outline Badges for All Technologies */}
        <div className="mb-10 text-center">
          <p className="text-xs font-mono font-bold text-muted-custom uppercase tracking-wider mb-4">
            Technologies Used Across Projects:
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {allSkills.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-transparent border border-purple-500/40 text-purple-600 dark:text-purple-300 text-xs font-mono hover:border-purple-500 transition-colors shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Client vs Personal Filter Tabs */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
              filter === "all"
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                : "bg-card-sub text-body-custom border border-custom hover:border-purple-500"
            }`}
          >
            All Projects ({projectsData.length})
          </button>

          <button
            onClick={() => setFilter("client")}
            className={`px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              filter === "client"
                ? "bg-amber-600 text-white shadow-md shadow-amber-600/30"
                : "bg-card-sub text-body-custom border border-custom hover:border-amber-500"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Client Work ({projectsData.filter((p) => p.projectType === "client").length})
          </button>

          <button
            onClick={() => setFilter("personal")}
            className={`px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
              filter === "personal"
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                : "bg-card-sub text-body-custom border border-custom hover:border-purple-500"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            Personal Projects ({projectsData.filter((p) => p.projectType === "personal").length})
          </button>
        </div>

        {/* Direct Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-card-custom border border-custom rounded-2xl overflow-hidden hover:border-purple-500/60 transition-all duration-300 flex flex-col justify-between group shadow-md hover:-translate-y-1"
            >
              {/* Image & Type Badge */}
              <div className="relative w-full h-52 overflow-hidden bg-card-sub">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Project Type Badge (Client vs Personal) */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold shadow-md border ${
                      project.projectType === "client"
                        ? "bg-amber-950/80 text-amber-300 border-amber-500/50"
                        : "bg-purple-950/80 text-purple-300 border-purple-500/50"
                    }`}
                  >
                    {project.projectType === "client" ? "Client Work" : "Personal"}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-title group-hover:text-purple-500 transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-muted-custom text-xs line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Bottom Actions: Detail & Visit */}
                <div className="pt-4 border-t border-custom flex items-center justify-between gap-3">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="px-4 py-2 rounded-xl bg-card-sub hover:bg-purple-600 hover:text-white text-body-custom border border-custom text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shadow-md shadow-purple-600/30"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
