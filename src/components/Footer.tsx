import Link from "next/link";
import { profileData } from "@/data/data";

export default function Footer() {
  return (
    <footer className="py-8 bg-card-custom border-t border-custom text-center text-xs text-muted-custom transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">{profileData.name}</span>. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-muted-custom">
          <Link href="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-purple-400 transition-colors">
            Portofolio
          </Link>
          <Link href="/blogs" className="hover:text-purple-400 transition-colors">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
