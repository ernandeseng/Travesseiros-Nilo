import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("text-2xl font-headline text-primary-foreground no-underline md:text-3xl", className)}>
      <span className="font-extrabold text-white">NILO</span>
      <span className="font-bold italic text-white">Travesseiros</span>
    </a>
  );
}
