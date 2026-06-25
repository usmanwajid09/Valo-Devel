import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
  image,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  crumbs?: Crumb[];
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-gold/15 pb-16 pt-16 md:pb-20 md:pt-24">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden="true"
          />
          {/* Navy overlays keep gold/white text readable over the photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/60" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70" aria-hidden="true" />
        </>
      )}
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-faint [background-size:46px_46px] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" aria-hidden="true" />
      <div className="container relative">
        {crumbs && (
          <Reveal>
            <nav className="mb-6 flex items-center gap-1.5 text-xs text-muted" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-gold">Home</Link>
              {crumbs.map((c) => (
                <span key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" />
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-gold">{c.label}</Link>
                  ) : (
                    <span className="text-white/80">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow mb-5">{eyebrow}</span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">{title}</h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.15}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
