"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface VantaBackgroundProps {
  color?: number;
  backgroundColor?: number;
  points?: number;
  maxDistance?: number;
  spacing?: number;
  showDots?: boolean;
}

export default function VantaBackground({
  color = 0x6366f1,
  backgroundColor = 0x090d16,
  points = 10,
  maxDistance = 22,
  spacing = 16,
  showDots = true,
}: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [, setVantaEffect] = useState<unknown>(null);

  useEffect(() => {
    let effect: { destroy: () => void } | null = null;
    let isMounted = true;

    async function initVanta() {
      if (!vantaRef.current || typeof window === "undefined") return;

      try {
        // Dynamically import vanta.net so it executes only on the client
        // @ts-expect-error Vanta does not provide official TypeScript definitions
        const vantaModule = await import("vanta/dist/vanta.net.min");
        const NET = vantaModule.default || vantaModule;

        if (isMounted && vantaRef.current && !effect && typeof NET === "function") {
          effect = NET({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color,
            backgroundColor,
            points,
            maxDistance,
            spacing,
            showDots,
          });
          setVantaEffect(effect);
        }
      } catch (err) {
        console.warn("Vanta initialization skipped or failed:", err);
      }
    }

    initVanta();

    return () => {
      isMounted = false;
      if (effect && typeof effect.destroy === "function") {
        effect.destroy();
      }
    };
  }, [color, backgroundColor, points, maxDistance, spacing, showDots]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10 pointer-events-auto transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
