"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { caseStudies, caseStudyFilters } from "@/lib/content";
import { X } from "lucide-react";

function PortfolioGridContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const industryParam = searchParams.get("industry");

  const [categoryFilter, setCategoryFilter] = useState<(typeof caseStudyFilters)[number]>("All");
  const [industryFilter, setIndustryFilter] = useState<string | null>(null);

  // Sync state with search params
  useEffect(() => {
    if (industryParam) {
      setIndustryFilter(industryParam);
      setCategoryFilter("All");
    } else {
      setIndustryFilter(null);
    }
  }, [industryParam]);

  const handleCategoryClick = (cat: (typeof caseStudyFilters)[number]) => {
    setCategoryFilter(cat);
    setIndustryFilter(null);
    // Clear query parameter from URL
    router.replace("/portfolio", { scroll: false });
  };

  const clearIndustryFilter = () => {
    setIndustryFilter(null);
    router.replace("/portfolio", { scroll: false });
  };

  const filtered = caseStudies.filter((c) => {
    if (industryFilter) {
      // Normalize comparison (e.g. 'ecommerce' matches 'eCommerce' / 'eCommerce & Retail')
      const targetIndustry = industryFilter.toLowerCase().replace(/[^a-z]/g, "");
      const currentIndustry = c.industry.toLowerCase().replace(/[^a-z]/g, "");
      
      // Special check for ecommerce/ecommerce-retail and other variations
      if (targetIndustry === "ecommerce" && currentIndustry === "ecommerce") return true;
      return currentIndustry.includes(targetIndustry) || targetIndustry.includes(currentIndustry);
    }
    if (categoryFilter === "All") return true;
    return c.category === categoryFilter;
  });

  // Get display name for the industry
  const getIndustryDisplayName = (slug: string) => {
    if (slug.toLowerCase() === "ecommerce") return "eCommerce & Retail";
    if (slug.toLowerCase() === "real-estate") return "Real Estate";
    return slug.charAt(0).toUpperCase() + slug.slice(1);
  };

  return (
    <div className="space-y-8">
      {/* Category filter tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {caseStudyFilters.map((f) => (
          <button
            key={f}
            onClick={() => handleCategoryClick(f)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
              categoryFilter === f && !industryFilter
                ? "border-gold bg-gold-gradient text-background"
                : "border-gold bg-card/50 text-muted hover:border-gold/60 hover:text-white",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Active industry filter notice */}
      {industryFilter && (
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3.5 rounded-full border border-gold bg-gold/10 px-5 py-2.5 text-sm text-white">
            <span>
              Showing <strong className="text-gold">{getIndustryDisplayName(industryFilter)}</strong> work
            </span>
            <button
              onClick={clearIndustryFilter}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-background hover:bg-gold-light transition-colors"
              aria-label="Clear filter"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((study) => (
              <motion.div
                key={study.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <CaseStudyCard study={study} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-20">
          <p className="text-muted text-sm">No projects found matching this selection.</p>
          <button
            onClick={clearIndustryFilter}
            className="mt-4 text-xs font-semibold text-gold hover:underline"
          >
            Show all projects
          </button>
        </div>
      )}
    </div>
  );
}

export function PortfolioGrid() {
  return (
    <Suspense fallback={<div className="text-center text-muted py-10">Loading portfolio grid...</div>}>
      <PortfolioGridContent />
    </Suspense>
  );
}
