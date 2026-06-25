import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-card hover:shadow-gold"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-background">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
