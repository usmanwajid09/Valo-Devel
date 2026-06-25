"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { caseStudies, caseStudyFilters } from "@/lib/content";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof caseStudyFilters)[number]>("All");

  const filtered =
    filter === "All" ? caseStudies : caseStudies.filter((c) => c.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {caseStudyFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
              filter === f
                ? "border-gold bg-gold-gradient text-background"
                : "border-gold bg-card/50 text-muted hover:border-gold/60 hover:text-white",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}
