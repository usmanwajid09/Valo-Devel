import { trustSignals } from "@/lib/site";

export function TrustBar() {
  return (
    <div className="border-y border-gold/15 bg-surface/50">
      <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-sm">
        {trustSignals.map((signal) => (
          <span key={signal} className="flex items-center gap-2 text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {signal}
          </span>
        ))}
      </div>
    </div>
  );
}
