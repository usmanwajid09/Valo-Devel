import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Article } from "@/lib/content";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-card"
    >
      <div className="relative h-40 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute inset-0 bg-background/20" />
        <div className="absolute left-5 top-5">
          <Badge>{article.category}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold leading-snug text-white">{article.title}</h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
        <div className="mt-5 flex items-center justify-between text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatDate(article.date)} · {article.readTime}
          </span>
          <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
