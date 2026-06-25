import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CTASection } from "@/components/CTASection";
import { articles } from "@/lib/content";
import { heroBackgrounds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights — Ideas Worth Building On",
  description:
    "Practical writing from Valor Devs on AI, software engineering, cloud, design, and how we deliver.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        image={heroBackgrounds.insights}
        crumbs={[{ label: "Insights" }]}
        title={<>Ideas worth <span className="text-gradient-gold">building on</span></>}
        subtitle="Field notes from the work — on AI, engineering, cloud, and product. No fluff, just what we've learned shipping."
      />
      <Section>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <StaggerItem key={article.slug} className="h-full">
              <ArticleCard article={article} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <CTASection />
    </>
  );
}
