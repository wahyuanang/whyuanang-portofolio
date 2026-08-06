import Link from "next/link";
import { blogsData } from "@/data/data";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

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
            Thoughts, tutorials, and perspectives on front-end engineering, UI/UX design, and modern web development.
          </p>
        </div>

        {/* Featured Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <article
              key={blog.id}
              className="bg-card-custom border border-custom rounded-2xl overflow-hidden hover:border-purple-500/60 transition-all duration-300 flex flex-col group shadow-md hover:-translate-y-1"
            >
              {/* Cover Image */}
              <div className="relative w-full h-48 overflow-hidden bg-card-sub">
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
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-muted-custom">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-purple-500 dark:text-purple-400" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-title group-hover:text-purple-500 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-muted-custom text-xs line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-custom flex items-center justify-end">
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-500 flex items-center gap-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
