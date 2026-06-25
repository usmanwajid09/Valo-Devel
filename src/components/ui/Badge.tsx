import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-gold bg-gold/5 px-3 py-1 text-xs font-medium text-gold/90",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TechChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
