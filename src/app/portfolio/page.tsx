import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { CTASection } from "@/components/CTASection";
import { heroBackgrounds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio — Proven Results. Real Projects.",
  description:
    "Explore Valor Devs case studies across AI & ML, web apps, mobile, and cloud — with real metrics and outcomes.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        image={heroBackgrounds.portfolio}
        crumbs={[{ label: "Portfolio" }]}
        title={<>Proven Results. <span className="text-gradient-gold">Real Projects.</span></>}
        subtitle="A selection of the work we've shipped across industries — from AI triage platforms to real-time fintech dashboards."
      />
      <Section>
        <PortfolioGrid />
      </Section>
      <CTASection />
    </>
  );
}
