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
  title: {
    default: "Wahyu Anang | Web Developer",
    template: "Wahyu Anang | %s"
  },
  description: "Professional Web Developer with expertise in web design, web development. Experienced in building responsive and secure web applications for businesses.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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
