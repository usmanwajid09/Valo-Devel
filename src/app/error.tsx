"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console or an external monitoring service (like Sentry)
    console.error("Unhandled runtime error captured by boundary:", error);
  }, [error]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 py-24 text-center">
      {/* Visual Indicator */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10 text-red-500 shadow-lg shadow-red-500/5">
        <AlertCircle className="h-8 w-8" />
      </div>

      {/* Main Error Headers */}
      <h1 className="mt-8 font-heading text-3xl font-bold text-white sm:text-4xl">
        Something went <span className="text-gradient-gold">wrong</span>
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        An unexpected error occurred during rendering. We've logged the error and are working on fixing it.
      </p>

      {/* Technical Error Code / Digest */}
      {error.digest && (
        <div className="mt-6 rounded-lg bg-surface/50 border border-gold/10 px-3 py-1.5 text-[0.7rem] font-mono text-gold/80">
          Error Digest: {error.digest}
        </div>
      )}

      {/* Actions */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={() => reset()} className="inline-flex items-center gap-2">
          <RotateCcw className="h-4 w-4" /> Try again
        </Button>
        <Button href="/" variant="secondary" className="inline-flex items-center gap-2">
          <Home className="h-4 w-4" /> Go back home
        </Button>
      </div>
    </div>
  );
}
