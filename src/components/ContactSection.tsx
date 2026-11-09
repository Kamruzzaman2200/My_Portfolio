"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import Magnet from "@/components/react-bits/Magnet";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Download,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setStatus("error");
      setErrorMessage("Sender name is required before transmitting.");
      return;
    }
    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      setStatus("error");
      setErrorMessage("A valid electronic mail address is required.");
      return;
    }
    if (!trimmedMessage) {
      setStatus("error");
      setErrorMessage("Please enter a message before transmitting.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          topic: formData.topic.trim(),
          message: trimmedMessage,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", topic: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || data.message || "Failed to deliver message.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Dispatch failed to transmit. Please check your network connection.");
    }
  };

  return (
    <section id="contact" className="relative space-y-10 sm:space-y-12 lg:space-y-16 scroll-mt-28">
      {/* Chapter Header */}
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="w-2 h-2 rounded-full bg-[#0E76F1] shadow-[0_0_10px_#0E76F1]" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#9A8E6A] uppercase">
            Chapter // 06
          </span>
          <div className="h-px bg-[#C2B280]/15 flex-1" />
          <span className="font-kanji text-xl sm:text-2xl 2xl:text-3xl text-[#C2B280]/30 tracking-widest hidden sm:inline">
            結 · INITIATE CONTACT
          </span>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-light tracking-tight text-[#C2B280]">
            Direct Transmission & Inquiries
          </h2>
          <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-[#7A7568] max-w-2xl 2xl:max-w-3xl font-light leading-relaxed">
            Every submission is delivered directly to{" "}
            <span className="text-[#C2B280] font-mono font-medium">sohel.eightb@gmail.com</span>.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 2xl:gap-12">
        {/* Direct Channel Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <SpotlightCard
            spotlightColor="rgba(14, 118, 241, 0.18)"
            className="p-6 sm:p-8 lg:p-9 space-y-6 rounded-2xl sm:rounded-3xl border border-[#C2B280]/15"
          >
            <div className="border-b border-[#C2B280]/10 pb-4">
              <span className="text-xs font-mono tracking-widest text-[#7A7568] uppercase">
                Direct Channels
              </span>
              <h3 className="text-lg sm:text-xl font-normal text-[#C2B280] mt-1">
                Coordinates & Links
              </h3>
            </div>

            <div className="space-y-3.5">
              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#1A1C1E] border border-[#C2B280]/10 hover:border-[#0E76F1]/40 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#C2B280]/10 text-[#0E76F1]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#7A7568] font-mono uppercase tracking-wider">
                      Email
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-[#C2B280] hover:text-[#0E76F1] transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-lg text-[#7A7568] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copied === "email" ? (
                    <Check className="w-4 h-4 text-[#0E76F1]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#1A1C1E] border border-[#C2B280]/10 hover:border-[#0E76F1]/40 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#C2B280]/10 text-[#0E76F1]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#7A7568] font-mono uppercase tracking-wider">
                      Phone / WhatsApp
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-mono text-[#C2B280] hover:text-[#0E76F1] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-2 rounded-lg text-[#7A7568] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copied === "phone" ? (
                    <Check className="w-4 h-4 text-[#0E76F1]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#1A1C1E] border border-[#C2B280]/10">
                <div className="p-2.5 rounded-lg bg-[#C2B280]/10 text-[#0E76F1]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#7A7568] font-mono uppercase tracking-wider">
                    Base
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-[#C2B280]">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="pt-5 border-t border-[#C2B280]/10 space-y-4">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 py-3 rounded-xl bg-[#1A1C1E] border border-[#C2B280]/15 text-xs sm:text-sm font-mono text-[#9A8E6A] hover:text-white hover:border-[#C2B280]/40 hover:bg-[#2B2D2F]/50 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 py-3 rounded-xl bg-[#1A1C1E] border border-[#C2B280]/15 text-xs sm:text-sm font-mono text-[#9A8E6A] hover:text-white hover:border-[#0E76F1]/40 hover:bg-[#2B2D2F]/50 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0E76F1]" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <Magnet padding={35} magnetStrength={2.5} className="w-full">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Md_Kamruzzaman_CV.pdf"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#0E76F1] text-white text-xs sm:text-sm font-mono tracking-wider uppercase shadow-lg shadow-[#0E76F1]/25 hover:bg-[#3D9BFF] hover:shadow-[#0E76F1]/40 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </Magnet>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Message Transmission Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <SpotlightCard
            spotlightColor="rgba(14, 118, 241, 0.14)"
            className="p-6 sm:p-8 lg:p-10 2xl:p-12 space-y-6 sm:space-y-7 rounded-2xl sm:rounded-3xl border border-[#C2B280]/15"
          >
            <div className="border-b border-[#C2B280]/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#7A7568] uppercase">
                  Transmit
                </span>
                <h3 className="text-lg sm:text-xl font-normal text-[#C2B280] mt-1">
                  Leave a Dispatch
                </h3>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-[#0E76F1] animate-pulse" />
                <span className="text-xs font-mono text-[#9A8E6A]">
                  TO: <strong className="text-[#C2B280]">sohel.eightb@gmail.com</strong>
                </span>
              </div>
            </div>

            {status === "success" ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-[#1A1C1E] border border-[#0E76F1]/40 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#0E76F1]/10 border border-[#0E76F1]/30 flex items-center justify-center mx-auto text-[#0E76F1]">
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <div className="text-base sm:text-lg font-mono text-[#C2B280] tracking-wider uppercase">
                    ✓ Dispatch Transmitted Directly to Gmail
                  </div>
                  <p className="text-sm text-[#9A8E6A] font-light max-w-md mx-auto leading-relaxed">
                    Your message was delivered directly to <span className="text-[#C2B280] font-mono font-medium">sohel.eightb@gmail.com</span>. Md. Kamruzzaman will review and reply to your email promptly.
                  </p>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setErrorMessage("");
                    }}
                    className="px-6 py-2.5 rounded-xl border border-[#C2B280]/20 text-xs sm:text-sm font-mono text-[#9A8E6A] hover:text-white hover:bg-[#C2B280]/10 transition-all cursor-pointer"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#0E76F1]/10 border border-[#0E76F1]/30 text-xs sm:text-sm text-[#C2B280] space-y-2">
                    <div className="flex items-center gap-2.5 font-mono text-[#0E76F1]">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#7A7568]">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1A1C1E] border border-[#C2B280]/15 text-xs sm:text-sm font-mono text-[#C2B280] focus:outline-none focus:border-[#0E76F1] focus:ring-1 focus:ring-[#0E76F1] transition-all placeholder:text-[#7A7568]/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#7A7568]">
                      Electronic Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@organization.com"
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1A1C1E] border border-[#C2B280]/15 text-xs sm:text-sm font-mono text-[#C2B280] focus:outline-none focus:border-[#0E76F1] focus:ring-1 focus:ring-[#0E76F1] transition-all placeholder:text-[#7A7568]/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#7A7568]">
                    Topic
                  </label>
                  <input
                    type="text"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    placeholder="Engineering Role / Technical Project Discussion"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1A1C1E] border border-[#C2B280]/15 text-xs sm:text-sm font-mono text-[#C2B280] focus:outline-none focus:border-[#0E76F1] focus:ring-1 focus:ring-[#0E76F1] transition-all placeholder:text-[#7A7568]/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#7A7568]">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1A1C1E] border border-[#C2B280]/15 text-xs sm:text-sm font-mono text-[#C2B280] focus:outline-none focus:border-[#0E76F1] focus:ring-1 focus:ring-[#0E76F1] transition-all placeholder:text-[#7A7568]/50"
                  />
                </div>

                <div className="pt-2">
                  <Magnet padding={35} magnetStrength={2}>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#0E76F1] text-white text-xs sm:text-sm lg:text-base font-mono tracking-wider uppercase shadow-lg shadow-[#0E76F1]/25 hover:bg-[#3D9BFF] hover:shadow-[#0E76F1]/40 disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting to Gmail...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </Magnet>
                </div>
              </form>
            )}
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
