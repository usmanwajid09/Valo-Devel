import { Button } from "@/components/ui/Button";
import { ShieldMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <div className="container relative text-center">
        <ShieldMark className="mx-auto h-16 w-16 animate-float" />
        <h1 className="mt-8 font-heading text-7xl font-bold text-gradient-gold">404</h1>
        <p className="mt-4 text-lg text-white">This page went off-mission.</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" withArrow>Back home</Button>
          <Button href="/contact" variant="secondary">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
