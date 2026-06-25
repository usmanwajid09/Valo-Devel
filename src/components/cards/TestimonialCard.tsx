import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-gold bg-card/50 p-7">
      <Quote className="h-8 w-8 text-gold/40" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-white/90">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-gold pt-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 font-heading text-sm font-bold text-gold">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{testimonial.name}</div>
          <div className="text-xs text-muted">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
