"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/data";
import { ExternalLink, ArrowRight, FolderGit2, UserCheck, Code2 } from "lucide-react";

export default function PortfolioContent() {
  const [activeTab, setActiveTab] = useState<"all" | "client" | "personal">("all");

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "all") return true;
    return project.projectType === activeTab;
  });

  return (
    <div className="min-h-screen pt-32 pb-24 bg-page transition-colors duration-300 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card-sub border border-custom text-purple-600 dark:text-purple-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-title tracking-tight">
            My Portfolio
          </h1>

          <p className="text-muted-custom text-base sm:text-lg leading-relaxed">
            A comprehensive showcase of web applications, client solutions, and personal software engineering projects built with modern technologies.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
              activeTab === "all"
                ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/30"
                : "bg-card-sub text-body-custom hover:text-title border-custom hover:border-purple-500/50"
            }`}
          >
            All Projects ({projectsData.length})
          </button>

          <button
            onClick={() => setActiveTab("client")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 border flex items-center gap-2 ${
              activeTab === "client"
                ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/30"
                : "bg-card-sub text-body-custom hover:text-title border-custom hover:border-purple-500/50"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Client Work ({projectsData.filter((p) => p.projectType === "client").length})</span>
          </button>

          <button
            onClick={() => setActiveTab("personal")}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 border flex items-center gap-2 ${
              activeTab === "personal"
                ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/30"
                : "bg-card-sub text-body-custom hover:text-title border-custom hover:border-purple-500/50"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Personal Projects ({projectsData.filter((p) => p.projectType === "personal").length})</span>
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-card-custom border border-custom rounded-2xl overflow-hidden hover:border-purple-500/60 transition-all duration-300 flex flex-col group shadow-md hover:-translate-y-1"
            >
              {/* Image & Type Badge */}
              <div className="relative w-full h-48 overflow-hidden bg-card-sub">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-purple-900/80 backdrop-blur-md text-purple-200 border border-purple-700/50 text-xs font-semibold capitalize">
                    {project.projectType === "client" ? "Client Work" : "Personal Project"}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-title group-hover:text-purple-500 transition-colors line-clamp-1">
                    {project.title}
                  </h2>

                  <p className="text-muted-custom text-xs line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Primary Tech Badge */}
                  <div className="pt-1">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-card-sub text-purple-600 dark:text-purple-400 border border-custom text-[11px] font-mono font-medium">
                      ⚡ {project.primaryTech}
                    </span>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="pt-4 border-t border-custom flex items-center justify-between">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-500 flex items-center gap-1 transition-colors"
                  >
                    <span>View Detail</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-custom hover:text-purple-500 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
