import Link from "next/link";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { industries } from "@/lib/content";
import { cn } from "@/lib/utils";

export function IndustriesGrid({ linkToDetail = true }: { linkToDetail?: boolean }) {
  return (
    <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry) => {
        const Icon = industry.icon;
        const card = (
          <div className="group relative flex h-full min-h-[190px] flex-col items-start justify-between overflow-hidden rounded-2xl border border-gold/30 bg-card/40 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_4px_20px_rgba(201,168,76,0.15)]">
            
            {/* 1. Background Image with Grayscale and Scale Transitions */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out filter grayscale opacity-20 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-40"
              style={{ backgroundImage: `url(${industry.image})` }}
              aria-hidden="true"
            />

            {/* 2. Layered Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70 transition-colors duration-500 group-hover:from-background/90 group-hover:via-background/80 group-hover:to-background/60" aria-hidden="true" />
            
            {/* 3. Themed Accent Radial Glow Overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-20",
                industry.accent
              )}
              aria-hidden="true"
            />

            {/* 4. Content Area (z-index wrapper) */}
            <div className="relative z-10 flex h-full flex-col justify-between gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-gold transition-all duration-500 group-hover:scale-105 group-hover:border-gold group-hover:bg-gold group-hover:text-background">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <div className="mt-2">
                <h3 className="font-heading text-lg font-bold text-white transition-colors duration-300 group-hover:text-gold">
                  {industry.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/80">
                  {industry.description}
                </p>
              </div>
            </div>

          </div>
        );
        return (
          <StaggerItem key={industry.slug} className="h-full">
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
