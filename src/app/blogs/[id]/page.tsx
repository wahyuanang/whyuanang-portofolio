import { notFound, redirect } from "next/navigation";
import { blogsData } from "@/data/data";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  if (blog.mediumUrl) {
    redirect(blog.mediumUrl);
  }

  redirect("/blogs");
}
