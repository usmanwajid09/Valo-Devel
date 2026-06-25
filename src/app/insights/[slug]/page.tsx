import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CTASection } from "@/components/CTASection";
import { articles, getArticle } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { type: "article", title: article.title, description: article.excerpt },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        crumbs={[{ label: "Insights", href: "/insights" }, { label: article.title }]}
        title={article.title}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-gold" /> {formatDate(article.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-gold" /> {article.readTime}
          </span>
        </div>
      </PageHero>

      <Section>
        <article className="mx-auto max-w-2xl">
          <Reveal className="relative mb-10 h-60 overflow-hidden rounded-3xl border border-gold/30 md:h-80">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute left-6 top-6">
              <Badge>{article.category}</Badge>
            </div>
          </Reveal>
          <div className="space-y-5">
            {article.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <p className="text-base leading-relaxed text-white/85 first:text-lg first:text-white">{para}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to all insights
            </Link>
          </Reveal>
        </article>
      </Section>

      <Section className="bg-surface/40">
        <h2 className="mb-10 text-center font-heading text-2xl font-bold">More insights</h2>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((a) => (
            <StaggerItem key={a.slug} className="h-full">
              <ArticleCard article={a} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTASection />
    </>
  );
}
