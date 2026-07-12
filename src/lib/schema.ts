import { siteConfig } from "./site";
import type { Service } from "./services";
import type { CaseStudy, Article } from "./content";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "legalName": siteConfig.legalEntity,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "slogan": siteConfig.slogan,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.full,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.zip,
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": siteConfig.contact.email,
      "url": siteConfig.contact.whatsappLink
    },
    "sameAs": [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.upwork
    ]
  };
}

export function getServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "description": service.short,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
      "description": "Custom Scoped Quote basis"
    }
  };
}

export function getProjectSchema(study: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": study.name,
    "headline": study.name,
    "description": study.result,
    "image": study.image,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "genre": study.industry,
    "keywords": study.tech.join(", ")
  };
}

export function getArticleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/insights/${article.slug}`
    }
  };
}
