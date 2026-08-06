"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/data";
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      // Send message directly to wahyuanngz20@gmail.com via FormSubmit AJAX service
      const response = await fetch("https://formsubmit.co/ajax/wahyuanngz20@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          _subject: `Pesan Baru Portofolio dari ${formData.name}`,
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Failed to send message:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-page transition-colors duration-300 relative font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-extrabold text-title tracking-tight mb-16 text-center"
        >
          Let's Work Together
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Form Submission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-card-custom border border-custom rounded-2xl p-6 sm:p-8 shadow-md"
          >
            <h3 className="text-xs font-mono font-bold text-muted-custom uppercase tracking-wider mb-6">
              SEND ME A MESSAGE:
            </h3>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-title">Message Sent Directly!</h4>
                <p className="text-muted-custom text-sm">
                  Pesan Anda telah berhasil terkirim langsung ke email <strong className="text-purple-500">wahyuanngz20@gmail.com</strong>. Saya akan membalas secepatnya!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-5 py-2 rounded-xl bg-card-sub border border-custom text-xs font-semibold text-body-custom hover:text-purple-500 transition-colors"
                >
                  Kirim Pesan Lainnya
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-semibold text-muted-custom mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-card-sub border border-custom rounded-xl px-4 py-3 text-sm text-title placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-semibold text-muted-custom mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full bg-card-sub border border-custom rounded-xl px-4 py-3 text-sm text-title placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-semibold text-muted-custom mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-card-sub border border-custom rounded-xl px-4 py-3 text-sm text-title placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors resize-none shadow-sm"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500 font-medium">
                    Gagal mengirim pesan. Silakan coba lagi atau kirim langsung via email.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="bg-card-custom border border-custom rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
              <p className="text-body-custom text-sm sm:text-base leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, or partnerships. Whether you have a specific project in mind or just want to explore possibilities, I'd love to connect.
              </p>
            </div>

            {/* Social Links Box */}
            <div className="bg-card-custom border border-custom rounded-2xl p-6 space-y-4 shadow-md">
              <h4 className="text-xs font-mono font-bold text-muted-custom uppercase tracking-wider">
                MY SOCIALS
              </h4>

              <div className="flex flex-wrap items-center gap-4">
                {/* Mail */}
                <a
                  href={`mailto:${profileData.socials.gmail}`}
                  className="p-3.5 rounded-2xl bg-card-sub border border-custom text-title hover:text-purple-500 hover:border-purple-500 hover:scale-110 transition-all shadow-sm flex items-center gap-2"
                  aria-label="Gmail"
                  title="Gmail"
                >
                  <Mail className="w-5 h-5 text-purple-500" />
                  <span className="text-xs font-mono">{profileData.socials.gmail}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-card-sub border border-custom text-title hover:text-purple-500 hover:border-purple-500 hover:scale-110 transition-all shadow-sm"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-card-sub border border-custom text-title hover:text-purple-500 hover:border-purple-500 hover:scale-110 transition-all shadow-sm"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
