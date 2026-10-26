"use client";

import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
}

export default function BlurText({
  text = "",
  delay = 50,
  className = "",
  animateBy = "words",
  direction = "top",
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <p className={`inline-flex flex-wrap gap-x-2 ${className}`}>
      {elements.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: direction === "top" ? -18 : 18,
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: (index * delay) / 1000,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {segment === " " ? "\u00A0" : segment}
        </motion.span>
      ))}
    </p>
  );
}
