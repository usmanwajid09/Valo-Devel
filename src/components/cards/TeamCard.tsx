import { Mail, Linkedin } from "lucide-react";
import { TechChip } from "@/components/ui/Badge";
import type { TeamMember } from "@/lib/content";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative flex h-full flex-col items-center justify-between overflow-hidden rounded-2xl border border-gold bg-card/40 px-6 py-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold">
      
      {/* Circular Avatar with standard styling */}
      <div className="relative h-28 w-28 overflow-hidden rounded-full border border-gold bg-card shadow-lg transition-transform duration-300 group-hover:scale-105">
        <div 
          className="h-full w-full rounded-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${member.image})` }} 
          title={member.name}
        />
      </div>

      {/* Card Details */}
      <div className="mt-5 flex flex-grow flex-col items-center text-center">
        <h3 className="font-heading text-lg font-bold text-white transition-colors duration-300 group-hover:text-gold-light">
          {member.name}
        </h3>
        
        <p className="text-xs font-semibold uppercase tracking-wider text-gold mt-1">
          {member.role}
        </p>

        {/* Links */}
        <div className="mt-2.5 flex flex-col items-center gap-1.5">
          {member.email && (
            <a 
              href={`mailto:${member.email}`} 
              className="flex items-center gap-1.5 text-[0.75rem] text-muted hover:text-gold transition-colors duration-200"
            >
              <Mail className="h-3.5 w-3.5 text-gold/80" />
              <span>{member.email}</span>
            </a>
          )}

          {member.linkedin && (
            <a 
              href={member.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[0.75rem] text-muted hover:text-gold transition-colors duration-200"
            >
              <Linkedin className="h-3.5 w-3.5 text-gold/80" />
              <span>LinkedIn Profile</span>
            </a>
          )}
        </div>

        {/* Primary Qualification/Skill Badge */}
        <div className="mt-3">
          <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold/5 px-3 py-0.5 text-[0.7rem] font-medium text-gold-light">
            {member.skills[0]}
          </span>
        </div>

        <p className="mt-4 flex-1 text-xs leading-relaxed text-muted px-2">
          {member.bio}
        </p>

        {/* Skills Chips */}
        <div className="mt-5 flex flex-wrap justify-center gap-1">
          {member.skills.slice(1, 4).map((s) => (
            <TechChip key={s}>{s}</TechChip>
          ))}
          {member.skills.length > 4 && (
            <span className="inline-flex items-center rounded-md border border-gold/10 bg-gold/5 px-2 py-0.5 text-[0.6rem] text-muted">
              +{member.skills.length - 4} more
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
