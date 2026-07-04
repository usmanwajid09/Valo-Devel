/** Single source of truth for brand, contact, and trust details. */

export const siteConfig = {
  name: "Valor Devs",
  legalEntity: "Global Vital Spark LLC",
  slogan: "We Build. We Deliver.",
  subTagline: "Code with Courage",
  description:
    "Valor Devs is an AI-native software engineering partner for US & UK businesses. Custom software, AI/ML, cloud, and product engineering — delivered with a 7-day first milestone.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://valordevs.com",
  address: {
    city: "Austin",
    state: "TX",
    zip: "78731",
    country: "United States",
    full: "Austin, TX 78731, United States",
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@valordevs.com",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "+15128654345",
    whatsappLink: "https://wa.me/15128654345",
    careersFormUrl: process.env.NEXT_PUBLIC_CAREERS_FORM_URL ?? "https://docs.google.com/forms/d/e/1FAIpQLSf4VlJWhV4P11P2xT3k5h4_lD-H3y9b-R7nO_kR4W3D8KjQqw/viewform",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/valordevs",
    github: "https://github.com/valordevs",
    upwork: "https://www.upwork.com/agencies/valordevs",
  },
} as const;

/** Wide, dark Unsplash photos used as section/hero backgrounds (navy overlay applied in UI). */
const BG = "?auto=format&fit=crop&w=1600&q=70";
export const heroBackgrounds = {
  services: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6${BG}`,
  about: `https://images.unsplash.com/photo-1531218150217-54595bc2b934${BG}`,
  portfolio: `https://images.unsplash.com/photo-1532190872407-280735d27e08${BG}`,
  process: `https://images.unsplash.com/photo-1488229297570-58520851e868${BG}`,
  industries: `https://images.unsplash.com/photo-1515868769-ad822a0c67e9${BG}`,
  insights: `https://images.unsplash.com/photo-1497366811353-6870744d04b2${BG}`,
  careers: `https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a${BG}`,
  contact: `https://images.unsplash.com/photo-1557335200-a65f7f032602${BG}`,
  cta: `https://images.unsplash.com/photo-1451187580459-43490279c0fa${BG}`,
  impact: `https://images.unsplash.com/photo-1446776811953-b23d57bd21aa${BG}`,
  expertise: `https://images.unsplash.com/photo-1639653279211-09958a51fb00${BG}`,
  heroShowcase: `https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=900&q=75`,
} as const;

export const trustSignals = [
  "US LLC",
  "Austin, TX",
  "4 Specialists",
  "7-Day Milestone",
  "Stripe & Wise",
  "Available 24/7",
] as const;
