import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Riya - Full-Stack Developer & Designer Portfolio",
  description: "I craft beautiful, functional digital experiences that bring ideas to life. Specializing in modern web development, Next.js, React, and user-centered design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} dark`}>
      <body className="bg-page text-body-custom font-mono antialiased selection:bg-purple-600 selection:text-white flex flex-col min-h-screen transition-colors duration-300">
        <Navbar />
        <main className="flex-grow font-mono">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
