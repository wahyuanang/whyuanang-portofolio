import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsData } from "@/data/data";
import { ArrowLeft, Clock } from "lucide-react";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === id);
  return {
    title: blog ? blog.title : "Blog Detail",
    description: blog ? blog.excerpt : "Blog article view.",
  };
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  return <BlogDetailContent params={params} />;
}

async function BlogDetailContent({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-24 bg-page transition-colors duration-300 font-mono">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-muted-custom hover:text-purple-500 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Blogs</span>
        </Link>

        {/* Category & Title */}
        <div className="space-y-4 mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full bg-card-sub border border-custom text-purple-600 dark:text-purple-300 text-xs font-semibold">
            {blog.category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-title tracking-tight leading-tight">
            {blog.title}
          </h1>

          {/* Read Time Metadata */}
          <div className="flex items-center gap-6 pt-2 text-sm text-muted-custom border-b border-custom pb-6">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-purple-500 dark:text-purple-400" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative rounded-2xl overflow-hidden border border-custom mb-12 shadow-2xl bg-card-sub max-h-[450px]">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blog Post Content Body */}
        <div className="bg-card-custom border border-custom rounded-2xl p-6 sm:p-10 space-y-6 text-body-custom leading-relaxed font-mono text-base shadow-md">
          <div className="whitespace-pre-line space-y-4">
            {blog.content}
          </div>
        </div>
      </div>
    </article>
  );
}
