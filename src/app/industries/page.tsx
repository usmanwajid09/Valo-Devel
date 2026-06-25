import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/CTASection";
import { industries } from "@/lib/content";
import { heroBackgrounds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Healthcare, fintech, eCommerce, SaaS, education, and real estate — Valor Devs brings domain context to every engagement.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        image={heroBackgrounds.industries}
        crumbs={[{ label: "Industries" }]}
        title={<>Industries we <span className="text-gradient-gold">serve</span></>}
        subtitle="We don't just write code — we bring context. Here's where our patterns, integrations, and domain knowledge run deep."
      />

      <Section>
        <Stagger className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <StaggerItem key={industry.slug} className="h-full">
                <Link
                  href={`/portfolio?industry=${industry.slug}`}
                  className="group flex h-full items-start gap-5 rounded-2xl border border-gold bg-card/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:bg-card hover:shadow-gold"
                >
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-background">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white">{industry.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{industry.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                      See related work
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <CTASection />
    </>
  );
}
