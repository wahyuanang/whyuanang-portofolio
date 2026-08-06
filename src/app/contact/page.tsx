import { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Wahyu Anang for web development projects and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-page text-body-custom transition-colors duration-300 font-mono">
      <ContactSection />
    </div>
  );
}
