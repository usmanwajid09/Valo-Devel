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
        <linearGradient id="valorGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8c96d" />
          <stop offset="55%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#a0832a" />
        </linearGradient>
      </defs>
      <path
        d="M24 2 4 9v18c0 13.2 8.6 22.4 20 27 11.4-4.6 20-13.8 20-27V9L24 2Z"
        fill="rgba(201,168,76,0.08)"
        stroke="url(#valorGold)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 21l-6 6 6 6M29 21l6 6-6 6M26 18l-4 18"
        stroke="url(#valorGold)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
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
