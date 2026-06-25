import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * Full-bleed photo band with a dark navy overlay and centered headline —
 * the "Our Global Impact" pattern.
 */
export function ImpactBand({
  image,
  eyebrow,
  titleLead,
  titleAccent,
  subtitle,
  cta,
}: {
  image: string;
  eyebrow: string;
  titleLead: React.ReactNode;
  titleAccent: React.ReactNode;
  subtitle?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative flex min-h-[460px] items-center overflow-hidden md:min-h-[540px]">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      {/* Layered navy overlays for legibility */}
      <div className="absolute inset-0 bg-background/75" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-faint [background-size:46px_46px] opacity-40" aria-hidden="true" />

      <div className="container relative py-20 text-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {titleLead} <span className="text-gradient-gold">{titleAccent}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-gold-gradient" />
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>
          </Reveal>
        )}
        {cta && (
          <Reveal delay={0.26}>
            <div className="mt-9 flex justify-center">
              <Button href={cta.href} size="lg" withArrow>
                {cta.label}
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
