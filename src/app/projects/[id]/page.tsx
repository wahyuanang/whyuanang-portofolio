import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/data";
import { ArrowLeft, ExternalLink, CheckCircle2, Calendar, User, Briefcase, Layers, Cpu } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  return {
    title: project ? project.title : "Project Detail",
    description: project ? project.shortDescription : "Project detail view.",
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  return <ProjectDetailContent params={params} />;
}

async function ProjectDetailContent({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-24 bg-page transition-colors duration-300 font-mono">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-muted-custom hover:text-purple-500 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Title & Short Description */}
        <div className="space-y-3 mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-title tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg text-body-custom max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Main Cover Image */}
        <div className="relative rounded-2xl overflow-hidden border border-custom mb-12 shadow-2xl bg-card-sub max-h-[500px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content (Left) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Technologies Used Section */}
            <div className="bg-card-custom border border-custom rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold text-title flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-500" />
                <span>Technologies Used</span>
              </h2>

              {/* Overall Primary Tech Explanation Box */}
              <div className="bg-card-sub p-4 rounded-xl border border-custom space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                    Teknologi Utama:
                  </span>
                  <span className="text-sm font-bold text-title">
                    {project.primaryTech}
                  </span>
                </div>
                <p className="text-sm text-body-custom leading-relaxed pt-1">
                  {project.techReason}
                </p>
              </div>

              {/* Bulleted Technologies Used List */}
              {project.techStackDetails && project.techStackDetails.length > 0 ? (
                <ul className="space-y-3 pt-2">
                  {project.techStackDetails.map((tech, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-body-custom">
                      <span className="text-purple-500 font-bold text-base leading-none">•</span>
                      <span>
                        <strong className="text-title font-bold">{tech.name}</strong> -{" "}
                        <span className="text-muted-custom">{tech.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-card-sub text-purple-400 border border-custom text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Overview Section */}
            <div className="bg-card-custom border border-custom rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
              <h2 className="text-xl font-bold text-title flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-500" />
                <span>Project Overview</span>
              </h2>
              <p className="text-body-custom text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features Section */}
            {project.features && project.features.length > 0 && (
              <div className="bg-card-custom border border-custom rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
                <h2 className="text-xl font-bold text-title">Key Features</h2>

                <div className="grid grid-cols-1 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-card-sub border border-custom"
                    >
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-body-custom">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Metadata (Right) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-card-custom border border-custom rounded-2xl p-6 space-y-6 sticky top-28 shadow-xl">
              <h3 className="text-lg font-bold text-title border-b border-custom pb-3">
                Project Details
              </h3>

              <div className="space-y-4">
                {project.client && (
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-purple-500" />
                    <div>
                      <div className="text-xs text-muted-custom">Client / Company</div>
                      <div className="text-sm font-medium text-title">{project.client}</div>
                    </div>
                  </div>
                )}

                {project.timeline && (
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <div>
                      <div className="text-xs text-muted-custom">Timeline</div>
                      <div className="text-sm font-medium text-title">{project.timeline}</div>
                    </div>
                  </div>
                )}

                {project.role && (
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-purple-500" />
                    <div>
                      <div className="text-xs text-muted-custom">Role</div>
                      <div className="text-sm font-medium text-title">{project.role}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-custom space-y-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30"
                >
                  <span>Visit Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-card-sub hover:bg-purple-950/20 text-body-custom hover:text-purple-500 border border-custom text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 fill-current text-purple-500" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
