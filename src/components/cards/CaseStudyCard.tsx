import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge, TechChip } from "@/components/ui/Badge";
import type { CaseStudy } from "@/lib/content";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link 
      href={`/portfolio/${study.slug}`} 
      className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <SpotlightCard className="h-full bg-card/50 flex flex-col">
        <div className="relative h-44 overflow-hidden">
          <Image
            src={study.image}
            alt={`${study.name} — ${study.industry}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className={cn("absolute inset-0 bg-gradient-to-br mix-blend-multiply", study.accent)} />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <div className="absolute left-5 top-5">
            <Badge>{study.industry}</Badge>
          </div>
          <span className="absolute bottom-4 left-5 font-heading text-sm font-semibold text-white">
            {study.client}
          </span>
        </div>

        <div className="flex flex-grow flex-col p-6">
          <h3 className="font-heading text-lg font-semibold text-white">{study.name}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-gold/90">{study.result}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {study.tech.slice(0, 4).map((t) => (
              <TechChip key={t}>{t}</TechChip>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
            Read case study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </SpotlightCard>
    </Link>
  );
}
