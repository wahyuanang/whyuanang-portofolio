import { Metadata } from "next";
import { blogsData } from "@/data/data";
import { BookOpen, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read articles and insights on web development, JavaScript, and technology by Wahyu Anang.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-page transition-colors duration-300 font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card-sub border border-custom text-purple-600 dark:text-purple-300 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles & Insights</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-title tracking-tight">
            Blogs & Articles
          </h1>

          <p className="text-muted-custom text-base sm:text-lg leading-relaxed">
            Thoughts, tutorials, and perspectives on front-end engineering, JavaScript, and modern web development.
          </p>
        </div>

        {/* Featured Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <article
              key={blog.id}
              className="bg-card-custom border border-custom rounded-2xl overflow-hidden hover:border-purple-500/60 transition-all duration-300 flex flex-col group shadow-md hover:-translate-y-1"
            >
              {/* Cover Image with Link to Medium */}
              <a
                href={blog.mediumUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-48 overflow-hidden bg-card-sub block cursor-pointer"
              >
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-purple-900/80 backdrop-blur-md text-purple-200 border border-purple-700/50 text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>
              </a>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <a
                    href={blog.mediumUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h2 className="text-lg font-bold text-title group-hover:text-purple-500 transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                  </a>

                  <p className="text-muted-custom text-xs line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Footer Action: Direct to Medium */}
                <div className="pt-4 border-t border-custom flex items-center justify-between">
                  {blog.readTime && (
                    <span className="text-[11px] font-mono text-muted-custom">
                      ⏱ {blog.readTime}
                    </span>
                  )}

                  {blog.mediumUrl && (
                    <a
                      href={blog.mediumUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-md shadow-purple-600/30"
                    >
                      <span>Read on Medium</span>
                      <ExternalLink className="w-3.5 h-3.5" />
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
