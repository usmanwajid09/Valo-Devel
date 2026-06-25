import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";

const stats: { value?: number; suffix?: string; label: string; custom?: string }[] = [
  { value: 4, label: "Specialists" },
  { value: 7, label: "Days to First Milestone" },
  { value: 24, suffix: "/7", label: "Availability" },
  { custom: "🇺🇸", label: "US Registered" },
];

export function StatsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-gold/15 bg-surface py-16">
      <div className="absolute inset-0 bg-grid-faint [background-size:40px_40px] opacity-30" aria-hidden="true" />
      <div className="container relative grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="font-heading text-4xl font-bold text-gradient-gold md:text-5xl">
              {stat.custom ? (
                <span>{stat.custom}</span>
              ) : (
                <Counter value={stat.value!} suffix={stat.suffix} />
              )}
            </div>
            <div className="mt-2 text-sm text-muted">{stat.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
