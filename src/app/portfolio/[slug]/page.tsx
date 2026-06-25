import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Lightbulb, Wrench, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Badge, TechChip } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { CTASection } from "@/components/CTASection";
import { caseStudies, getCaseStudy } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: `${study.name} — Case Study`,
    description: study.result,
    openGraph: { title: study.name, description: study.result },
  };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <>
      <PageHero
        eyebrow={study.category}
        crumbs={[{ label: "Portfolio", href: "/portfolio" }, { label: study.name }]}
        title={study.name}
        subtitle={study.result}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{study.industry}</Badge>
          {study.tech.map((t) => (
            <TechChip key={t}>{t}</TechChip>
          ))}
        </div>
      </PageHero>

      {/* Hero visual */}
      <Section className="py-12">
        <Reveal className="relative h-60 overflow-hidden rounded-3xl border border-gold/30 md:h-96">
          <Image
            src={study.image}
            alt={`${study.name} — ${study.industry}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
          <div className={cn("absolute inset-0 bg-gradient-to-br mix-blend-multiply", study.accent)} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="font-heading text-2xl font-bold text-white md:text-4xl">{study.client}</span>
          </div>
        </Reveal>
      </Section>

      {/* Metrics */}
      <Section className="py-0">
        <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {study.metrics.map((m) => (
            <StaggerItem key={m.label}>
              <div className="rounded-2xl border border-gold bg-card/50 p-6 text-center">
                <div className="font-heading text-3xl font-bold text-gradient-gold">{m.value}</div>
                <div className="mt-1.5 text-xs text-muted">{m.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Narrative */}
      <Section>
        <div className="mx-auto grid max-w-4xl gap-10">
          {[
            { icon: Target, title: "Client Overview", body: study.overview },
            { icon: Lightbulb, title: "The Challenge", body: study.challenge },
            { icon: Wrench, title: "Our Solution", body: study.solution },
          ].map((block, i) => {
            const Icon = block.icon;
            return (
              <Reveal key={block.title} delay={i * 0.05}>
                <div className="flex gap-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-white">{block.title}</h2>
                    <p className="mt-2.5 leading-relaxed text-muted">{block.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}

          <Reveal>
            <div className="rounded-2xl border border-gold/30 bg-card/60 p-7">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-gold" />
                <h2 className="font-heading text-xl font-semibold text-white">Results</h2>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-heading text-2xl font-bold text-white">{m.value}</div>
                    <div className="mt-1 text-xs text-muted">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Next project */}
      <Section className="bg-surface/40">
        <Reveal>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex flex-col items-start justify-between gap-4 rounded-3xl border border-gold bg-card/50 p-8 transition-all duration-300 hover:border-gold/60 hover:bg-card md:flex-row md:items-center"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">Next Project</span>
              <h3 className="mt-2 font-heading text-2xl font-bold text-white">{next.name}</h3>
              <p className="mt-1 text-sm text-gold/90">{next.result}</p>
            </div>
            <span className="inline-flex items-center gap-2 font-medium text-gold">
              View <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
