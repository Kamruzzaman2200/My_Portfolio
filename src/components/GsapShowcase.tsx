"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles, Layers, Cpu, Orbit } from "lucide-react";

export default function GsapShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Staggered floating cards
      gsap.from(".gsap-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Continuous gentle floating animation for badges
      gsap.to(".gsap-floating-badge", {
        y: -6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-light text-[#C2B280] flex items-center gap-2">
            <Orbit className="w-5 h-5 text-[#0E76F1] animate-spin" />
            GSAP & Timeline Animations
          </h3>
          <p className="text-sm text-[#7A7568]">
            Powered by GreenSock GSAP 3 & @gsap/react
          </p>
        </div>
        <div className="px-2.5 py-1 rounded border border-[#0E76F1]/30 bg-[#0E76F1]/10 text-[#0E76F1] font-mono text-xs">
          gsap.timeline()
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="gsap-card p-5 rounded-2xl bg-[#2B2D2F]/80 border border-[#C2B280]/10 backdrop-blur-sm space-y-3 hover:border-[#0E76F1]/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-xl bg-[#0E76F1]/10 text-[#0E76F1]">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="gsap-floating-badge px-2 py-0.5 rounded bg-[#0E76F1]/20 text-[#0E76F1] text-xs font-mono">
              Spring Easing
            </span>
          </div>
          <h4 className="font-normal text-base text-[#C2B280]">Physics-Based Tweens</h4>
          <p className="text-xs text-[#9A8E6A] leading-relaxed">
            Ultra-smooth velocity, elastic physics, and custom Bezier motion curves.
          </p>
        </div>

        <div className="gsap-card p-5 rounded-2xl bg-[#2B2D2F]/80 border border-[#C2B280]/10 backdrop-blur-sm space-y-3 hover:border-[#3D9BFF]/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-xl bg-[#3D9BFF]/10 text-[#3D9BFF]">
              <Layers className="w-5 h-5" />
            </div>
            <span className="gsap-floating-badge px-2 py-0.5 rounded bg-[#3D9BFF]/20 text-[#3D9BFF] text-xs font-mono">
              Orchestration
            </span>
          </div>
          <h4 className="font-normal text-base text-[#C2B280]">Complex Sequences</h4>
          <p className="text-xs text-[#9A8E6A] leading-relaxed">
            Frame-accurate timeline synchronization paired with Lenis smooth scrolling.
          </p>
        </div>

        <div className="gsap-card p-5 rounded-2xl bg-[#2B2D2F]/80 border border-[#C2B280]/10 backdrop-blur-sm space-y-3 hover:border-[#C2B280]/50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-xl bg-[#C2B280]/10 text-[#C2B280]">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="gsap-floating-badge px-2 py-0.5 rounded bg-[#C2B280]/20 text-[#C2B280] text-xs font-mono">
              Zero Jank
            </span>
          </div>
          <h4 className="font-normal text-base text-[#C2B280]">Hardware Accelerated</h4>
          <p className="text-xs text-[#9A8E6A] leading-relaxed">
            High-framerate transform3d pipelines optimized for modern mobile and desktop screens.
          </p>
        </div>
      </div>
    </div>
  );
}
