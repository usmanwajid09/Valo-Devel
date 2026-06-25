import { TechChip } from "@/components/ui/Badge";
import type { TeamMember } from "@/lib/content";

const initials: Record<string, string> = {
  "Full-Stack Engineer": "FS",
  "AI & ML Engineer": "AI",
  "UI/UX Designer": "UX",
  "Cloud & DevOps Engineer": "CD",
};

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gold bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient font-heading text-xl font-bold text-background">
        {initials[member.role] ?? "VD"}
      </div>
      <h3 className="font-heading text-lg font-semibold text-white">{member.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{member.bio}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {member.skills.map((s) => (
          <TechChip key={s}>{s}</TechChip>
        ))}
      </div>
    </article>
  );
}
