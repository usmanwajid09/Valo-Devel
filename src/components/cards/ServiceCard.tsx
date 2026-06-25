import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <SpotlightCard className="h-full p-7 bg-card/50">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-background">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-white">{service.title}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </SpotlightCard>
    </Link>
  );
}
