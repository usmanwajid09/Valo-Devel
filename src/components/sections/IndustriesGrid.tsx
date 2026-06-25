import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { industries } from "@/lib/content";

export function IndustriesGrid({ linkToDetail = true }: { linkToDetail?: boolean }) {
  return (
    <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {industries.map((industry) => {
        const Icon = industry.icon;
        const card = (
          <div className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-gold bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-card">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-background">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold text-white">{industry.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{industry.description}</p>
            </div>
          </div>
        );
        return (
          <StaggerItem key={industry.slug}>
            {linkToDetail ? (
              <Link href={`/portfolio?industry=${industry.slug}`} className="block h-full">
                {card}
              </Link>
            ) : (
              card
            )}
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
