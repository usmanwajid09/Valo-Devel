"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderColor?: string;
  glowRadius?: number;
  borderRadius?: number;
}

export function SpotlightCard({
  children,
  className,
  glowColor = "rgba(201, 168, 76, 0.12)",
  borderColor = "rgba(232, 201, 109, 0.35)",
  glowRadius = 350,
  borderRadius = 100,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gold bg-card/40 transition-all duration-300 hover:-translate-y-[2px] hover:border-gold/45 hover:shadow-gold",
        className
      )}
      {...props}
    >
      {/* 1. Internal Radial Spot Glow (Peachweb / Spline style) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(${glowRadius}px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* 2. Interactive Spotlight Border Drawing Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(${borderRadius}px circle at ${coords.x}px ${coords.y}px, ${borderColor}, transparent 80%)`,
          padding: "1px",
          mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          WebkitMask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
