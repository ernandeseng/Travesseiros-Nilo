import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("flex items-baseline gap-2 text-2xl font-headline text-primary-foreground no-underline md:text-3xl", className)}>
      <span className="font-extrabold text-white">NILO</span>
      <span className="font-display text-white text-4xl">Travesseiros</span>
    </a>
  );
}
