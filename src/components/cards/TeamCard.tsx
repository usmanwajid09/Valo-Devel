import Image from "next/image";
import { TechChip } from "@/components/ui/Badge";
import type { TeamMember } from "@/lib/content";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold">
      
      {/* Discussion Background Banner Photo */}
      <div className="relative h-28 w-full overflow-hidden">
        {/* Discussion background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${member.bgImage})` }}
          aria-hidden="true"
        />
        {/* Dark overlay gradients to keep details readable and match dark design theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-black/20" aria-hidden="true" />
      </div>

      {/* Floating Circle Avatar */}
      <div className="absolute left-6 top-16 z-10 h-20 w-20 overflow-hidden rounded-xl border border-gold bg-card shadow-lg transition-transform duration-300 group-hover:border-gold-light">
        <div 
          className="h-full w-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${member.image})` }} 
          title={member.name}
        />
      </div>

      {/* Card Details */}
      <div className="flex flex-grow flex-col px-6 pb-6 pt-12">
        <div>
          <h3 className="font-heading text-lg font-bold text-white transition-colors duration-300 group-hover:text-gold-light">
            {member.name}
          </h3>
          <p className="text-xs font-semibold text-gold mt-0.5">
            {member.role}
          </p>
        </div>
        
        <p className="mt-3.5 flex-1 text-xs leading-relaxed text-muted">
          {member.bio}
        </p>

        {/* Skills Chips */}
        <div className="mt-4 flex flex-wrap gap-1">
          {member.skills.slice(0, 5).map((s) => (
            <TechChip key={s}>{s}</TechChip>
          ))}
          {member.skills.length > 5 && (
            <span className="inline-flex items-center rounded-md border border-gold/10 bg-gold/5 px-2 py-0.5 text-[0.6rem] text-muted">
              +{member.skills.length - 5} more
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
