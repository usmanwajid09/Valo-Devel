const clients = [
  "Microsoft",
  "Stripe",
  "Shopify",
  "Atlassian",
  "Notion",
  "Vercel",
  "HubSpot",
  "Twilio",
];

export function LogoStrip() {
  // Duplicated for a seamless marquee
  const row = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-14">
        {row.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-heading text-xl font-semibold text-white/25 transition-colors hover:text-white/50"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
