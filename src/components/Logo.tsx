import Link from "next/link";
import { cn } from "@/lib/utils";

export function ShieldMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-auto", className)}
      aria-hidden="true"
    >
      <defs>
        {/* Main Gold Gradient */}
        <linearGradient id="valorGold" x1="0.1" y1="0.1" x2="0.9" y2="0.9">
          <stop offset="0%" stopColor="#FFF2D4" />
          <stop offset="50%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#8C6F1E" />
        </linearGradient>
        {/* Soft Secondary Gradient */}
        <linearGradient id="valorGoldLight" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8C96D" />
          <stop offset="100%" stopColor="#FFFDF7" />
        </linearGradient>
        {/* Glowing shadow effect */}
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Left Stroke of the geometric V */}
      <path
        d="M8 12 L20 44 L25 44 L13 12 Z"
        fill="url(#valorGold)"
        filter="url(#logoGlow)"
      />
      {/* Right Stroke of the geometric V, overlapping slightly at bottom */}
      <path
        d="M23 44 L35 12 L31 12 L19 44 Z"
        fill="url(#valorGoldLight)"
        opacity="0.85"
      />
      {/* Elegant four-pointed vital spark / AI star in the upper right */}
      <path
        d="M34 10 Q34 16 40 16 Q34 16 34 22 Q34 16 28 16 Q34 16 34 10 Z"
        fill="url(#valorGold)"
        filter="url(#logoGlow)"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)} aria-label="Valor Devs home">
      <ShieldMark className="transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold tracking-wide text-white">
          VALOR
        </span>
        <span className="font-heading text-[0.65rem] font-semibold tracking-[0.35em] text-gold">
          DEVS
        </span>
      </span>
    </Link>
  );
}
