import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Md. Kamruzzaman — Frontend Engineer & Machine Learning",
  description:
    "A cinematic portfolio inspired by the Kage Kyoto temple night study. Built with Next.js 16, Three.js WebGL, Tailwind CSS v4, and Lenis smooth scrolling.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070a] text-[#dfe7e0] selection:bg-[#e0231c] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
