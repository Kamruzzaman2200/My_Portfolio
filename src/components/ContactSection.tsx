"use client";

import { useState } from "react";
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
  ExternalLink,
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
  const [directGmailLaunched, setDirectGmailLaunched] = useState(false);

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

  const buildSubject = () => {
    const topic = formData.topic.trim() || "Technical Collaboration / Opportunity";
    const name = formData.name.trim() || "Visitor";
    return `[Portfolio Inquiry] ${topic} — from ${name}`;
  };

  const buildBody = () => {
    return `Name: ${formData.name || "(Not provided)"}\nEmail: ${formData.email || "(Not provided)"}\nTopic: ${formData.topic || "General Discussion"}\n\nMessage:\n${formData.message}\n\n— Sent via Md. Kamruzzaman's Portfolio`;
  };

  const getGmailComposeUrl = () => {
    const su = encodeURIComponent(buildSubject());
    const body = encodeURIComponent(buildBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=sohel.eightb@gmail.com&su=${su}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const su = encodeURIComponent(buildSubject());
    const body = encodeURIComponent(buildBody());
    return `mailto:sohel.eightb@gmail.com?subject=${su}&body=${body}`;
  };

  const handleDirectGmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      alert("Please enter a message before launching Gmail.");
      return;
    }
    window.open(getGmailComposeUrl(), "_blank", "noopener,noreferrer");
    setDirectGmailLaunched(true);
    setStatus("success");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setDirectGmailLaunched(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          topic: formData.topic,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", topic: "", message: "" });
      } else if (data.needsSetup) {
        // Automatically open the user's Gmail with fields pre-filled directly to sohel.eightb@gmail.com
        window.open(data.gmailComposeUrl || getGmailComposeUrl(), "_blank", "noopener,noreferrer");
        setDirectGmailLaunched(true);
        setStatus("success");
      } else {
        throw new Error(data.error || "Unable to transmit dispatch.");
      }
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Network dispatch failed. Use the direct Gmail composer below to transmit immediately."
      );
    }
  };

  return (
    <section id="contact" className="relative space-y-10 scroll-mt-28">
      {/* Chapter Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e0231c] shadow-[0_0_8px_#e0231c]" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#aab4ad] uppercase">
            Chapter // 06
          </span>
          <div className="h-px bg-white/10 flex-1" />
          <span className="font-kanji text-xl text-white/30 tracking-widest hidden sm:inline">
            結 · INITIATE CONTACT
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#dfe7e0]">
            Direct Transmission & Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-[#78837c] max-w-xl font-light leading-relaxed">
            Every submission is delivered directly to{" "}
            <span className="text-[#dfe7e0] font-mono font-medium">sohel.eightb@gmail.com</span>.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Direct Channel Column */}
        <div className="lg:col-span-2 space-y-4">
          <SpotlightCard
            spotlightColor="rgba(224, 35, 28, 0.16)"
            className="p-6 sm:p-7 space-y-5"
          >
            <div className="border-b border-white/5 pb-3">
              <span className="text-[10px] font-mono tracking-widest text-[#78837c] uppercase">
                Direct Channels
              </span>
              <h3 className="text-base font-normal text-[#dfe7e0]">
                Coordinates & Links
              </h3>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#05070a] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-white/5 text-[#e0231c]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#78837c] font-mono uppercase tracking-wider">
                      Email
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-mono text-[#dfe7e0] hover:text-[#e0231c] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-1.5 rounded text-[#78837c] hover:text-white"
                  title="Copy email"
                >
                  {copied === "email" ? (
                    <Check className="w-3.5 h-3.5 text-[#e0231c]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#05070a] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-white/5 text-[#e0231c]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#78837c] font-mono uppercase tracking-wider">
                      Phone / WhatsApp
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs font-mono text-[#dfe7e0] hover:text-[#e0231c] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-1.5 rounded text-[#78837c] hover:text-white"
                  title="Copy phone"
                >
                  {copied === "phone" ? (
                    <Check className="w-3.5 h-3.5 text-[#e0231c]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-[#05070a] border border-white/5">
                <div className="p-2 rounded bg-white/5 text-[#e0231c]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#78837c] font-mono uppercase tracking-wider">
                    Base
                  </div>
                  <div className="text-xs font-mono text-[#dfe7e0]">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="pt-4 border-t border-white/5 space-y-3">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-[#05070a] border border-white/10 text-xs font-mono text-[#aab4ad] hover:text-white hover:border-white/25 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-[#05070a] border border-white/10 text-xs font-mono text-[#aab4ad] hover:text-white hover:border-white/25 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#e0231c]" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <Magnet padding={35} magnetStrength={2.5} className="w-full">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Md_Kamruzzaman_CV.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#e0231c] text-white text-xs font-mono tracking-wider uppercase shadow-lg shadow-[#e0231c]/25 hover:bg-[#ff4d36] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </Magnet>
            </div>
          </SpotlightCard>
        </div>

        {/* Message Transmission Column */}
        <div className="lg:col-span-3">
          <SpotlightCard
            spotlightColor="rgba(224, 35, 28, 0.12)"
            className="p-6 sm:p-8 space-y-5"
          >
            <div className="border-b border-white/5 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#78837c] uppercase">
                  Transmit
                </span>
                <h3 className="text-base font-normal text-[#dfe7e0]">
                  Leave a Dispatch
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-[10px] font-mono text-[#aab4ad]">
                  TO: <strong className="text-[#dfe7e0]">sohel.eightb@gmail.com</strong>
                </span>
              </div>
            </div>

            {status === "success" ? (
              <div className="p-8 rounded-xl bg-[#05070a] border border-[#e0231c]/40 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#e0231c]/10 border border-[#e0231c]/30 flex items-center justify-center mx-auto text-[#e0231c]">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-mono text-[#dfe7e0] tracking-wider uppercase">
                    {directGmailLaunched
                      ? "✓ Gmail Compose Tab Opened"
                      : "✓ Dispatch Transmitted Directly to Gmail"}
                  </div>
                  <p className="text-xs text-[#aab4ad] font-light max-w-sm mx-auto leading-relaxed">
                    {directGmailLaunched
                      ? "Your pre-filled message opened in Gmail addressed to sohel.eightb@gmail.com. Simply click 'Send' in your Gmail window to deliver!"
                      : "Your message was transmitted directly to sohel.eightb@gmail.com. Md. Kamruzzaman will review and reply to your email promptly."}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  {directGmailLaunched && (
                    <a
                      href={getGmailComposeUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#e0231c] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#ff4d36] transition-all shadow-md shadow-[#e0231c]/25"
                    >
                      <span>Re-open in Gmail</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setDirectGmailLaunched(false);
                    }}
                    className="px-4 py-2 rounded-lg border border-white/15 text-xs font-mono text-[#aab4ad] hover:text-white hover:bg-white/5 transition-all"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div className="p-4 rounded-lg bg-[#e0231c]/10 border border-[#e0231c]/30 text-xs text-[#dfe7e0] space-y-3">
                    <div className="flex items-center gap-2 font-mono text-[#e0231c]">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <a
                        href={getGmailComposeUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#e0231c] text-white font-mono text-[11px] uppercase tracking-wider hover:bg-[#ff4d36] transition-all"
                      >
                        <span>Open in Gmail (Pre-filled)</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href={getMailtoUrl()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/20 text-[#dfe7e0] font-mono text-[11px] uppercase tracking-wider hover:bg-white/5 transition-all"
                      >
                        <span>Default Mail App</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-[#78837c]">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#05070a] border border-white/10 text-xs font-mono text-[#dfe7e0] focus:outline-none focus:border-[#e0231c] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-[#78837c]">
                      Electronic Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@organization.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#05070a] border border-white/10 text-xs font-mono text-[#dfe7e0] focus:outline-none focus:border-[#e0231c] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#78837c]">
                    Topic
                  </label>
                  <input
                    type="text"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    placeholder="Engineering Role / Technical Project Discussion"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#05070a] border border-white/10 text-xs font-mono text-[#dfe7e0] focus:outline-none focus:border-[#e0231c] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#78837c]">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#05070a] border border-white/10 text-xs font-mono text-[#dfe7e0] focus:outline-none focus:border-[#e0231c] transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Magnet padding={35} magnetStrength={2}>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#e0231c] text-white text-xs font-mono tracking-wider uppercase shadow-lg shadow-[#e0231c]/25 hover:bg-[#ff4d36] disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Transmitting to Gmail...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </Magnet>

                  <button
                    type="button"
                    onClick={handleDirectGmail}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-[#05070a] text-[#aab4ad] hover:text-white hover:border-white/25 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer"
                    title="Open message in Gmail compose window directly"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#e0231c]" />
                    <span>Open in Gmail</span>
                    <ExternalLink className="w-3 h-3 text-[#78837c]" />
                  </button>
                </div>
              </form>
            )}
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
