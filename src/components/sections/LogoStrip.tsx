import React from "react";

type ClientBrand = {
  name: string;
  icon: React.ComponentType;
};

const clients: ClientBrand[] = [
  {
    name: "Microsoft",
    icon: () => (
      <div className="grid grid-cols-2 gap-[2px] w-3 h-3 text-current">
        <div className="bg-current"></div>
        <div className="bg-current"></div>
        <div className="bg-current"></div>
        <div className="bg-current"></div>
      </div>
    ),
  },
  {
    name: "Stripe",
    icon: () => (
      <span className="font-sans italic font-black tracking-tighter text-sm text-current leading-none translate-y-[-1px]">S</span>
    ),
  },
  {
    name: "Shopify",
    icon: () => (
      <svg className="h-3.5 w-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: () => (
      <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 76 65">
        <path d="M37.5277 0L75.0554 65H0L37.5277 0Z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    icon: () => (
      <span className="inline-flex h-3 w-3 items-center justify-center rounded-[3px] border-[1.5px] border-current text-[7.5px] font-black leading-none font-sans">N</span>
    ),
  },
  {
    name: "Atlassian",
    icon: () => (
      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
        <path d="M13.2 2.7c-.7-.9-2.1-.9-2.8 0L2.3 14.2c-.6.8-.1 2 1 2h3.5c.6 0 1.2-.4 1.4-.9l2.8-5.3c.4-.7 1.4-.7 1.8 0l2.8 5.3c.3.5.8.9 1.4.9h3.5c1.1 0 1.6-1.2 1-2L13.2 2.7z" />
      </svg>
    ),
  },
  {
    name: "HubSpot",
    icon: () => (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
        <circle cx="12" cy="6" r="3" />
        <circle cx="6" cy="16" r="3" />
        <circle cx="18" cy="16" r="3" />
        <path d="M12 9l-4 5m4-5l4 5" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: "Twilio",
    icon: () => (
      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6-6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </svg>
    ),
  },
];

export function LogoStrip() {
  // Duplicated for a seamless marquee
  const row = [...clients, ...clients, ...clients];
  return (
    <div className="relative overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
        {row.map((client, i) => {
          const Icon = client.icon;
          return (
            <div
              key={`${client.name}-${i}`}
              className="group flex items-center gap-2 whitespace-nowrap transition-all duration-300"
            >
              <span className="text-white/20 transition-all duration-300 group-hover:scale-110 group-hover:text-gold group-hover:drop-shadow-[0_0_8px_rgba(201,168,76,0.5)]">
                <Icon />
              </span>
              <span className="font-heading text-lg font-bold tracking-wide text-white/25 transition-all duration-300 group-hover:text-white/80 group-hover:translate-x-0.5">
                {client.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
