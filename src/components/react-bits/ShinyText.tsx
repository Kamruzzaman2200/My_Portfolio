"use client";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className = "",
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${
        disabled
          ? "text-base-content"
          : "bg-gradient-to-r from-base-content/40 via-base-content to-base-content/40 bg-[length:200%_auto] animate-shine"
      } ${className}`}
      style={{
        animationDuration,
      }}
    >
      {text}
    </span>
  );
}
